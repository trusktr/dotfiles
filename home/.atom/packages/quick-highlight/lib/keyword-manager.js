const {Emitter, CompositeDisposable} = require('atom')
const QuickHighlightView = require('./quick-highlight-view')
const StatusBarManager = require('./status-bar-manager')

const Colors = {
  colorNumbers: ['01', '02', '03', '04', '05', '06', '07'],
  next () {
    this.index = (this.index + 1) % this.colorNumbers.length
    return this.colorNumbers[this.index]
  },
  reset () {
    this.index = -1
  }
}

module.exports = class KeywordManager {
  constructor (mainEmitter) {
    this.colorByKeyword = new Map()
    this.reset()

    this.latestKeyword = null

    this.emitter = new Emitter()
    this.statusBarManager = new StatusBarManager()

    this.disposables = new CompositeDisposable(
      atom.workspace.observeTextEditors(editor => {
        /* eslint-disable no-new */
        new QuickHighlightView(editor, {
          keywordManager: this,
          statusBarManager: this.statusBarManager,
          emitter: mainEmitter
        })
        /* eslint-enable */
      }),
      atom.workspace.onDidChangeActivePaneItem(() => QuickHighlightView.refreshVisibles()),
      atom.config.observe('quick-highlight.decorate', newValue => {
        QuickHighlightView.clearAll()
        QuickHighlightView.refreshVisibles()
      })
    )
  }

  reset () {
    this.colorByKeyword.clear()
    Colors.reset()
  }

  setStatusBarService (service) {
    this.statusBarManager.initialize(service)
    this.statusBarManager.attach()
  }

  toggle (keyword) {
    if (this.colorByKeyword.has(keyword)) {
      this.colorByKeyword.delete(keyword)
    } else {
      this.colorByKeyword.set(keyword, Colors.next())
      this.latestKeyword = keyword
    }

    QuickHighlightView.refreshVisibles()
  }

  getColorForKeyword (keyword) {
    return this.colorByKeyword.get(keyword)
  }

  getKeywords () {
    return [...this.colorByKeyword.keys()]
  }

  clear () {
    this.reset()
    QuickHighlightView.clearAll()
  }

  destroy () {
    QuickHighlightView.destroyAll()

    this.disposables.dispose()
    this.disposables = null

    this.statusBarManager.detach()
    this.statusBarManager = null
  }
}
