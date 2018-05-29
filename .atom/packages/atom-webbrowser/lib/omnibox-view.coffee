
# lib/omnibox-view
{$, View}  = require 'atom-space-pen-views'

module.exports =
class OmniboxView extends View

  @content: ->
    @div class:'omnibox', tabindex:-1, =>
      @img outlet:'favicon', class:'favicon'
      @input
        outlet: 'input'
        placeholder: ' Enter URL'
        class: 'native-key-bindings'

  initialize: (@browser) ->
    if not @browser then @browser = atom.webBrowser
    @browser.omnibox = @

    # url - set by webview / embedder
    @_setUrl = ''

    @input.on 'keydown', (e) =>
      url = @input.val()
      if not /^\w+:\/\//.test url then url = 'http://' + url
      switch e.which
        when 13 # cr
          if e.ctrlKey then @browser.createPage  url; @input.blur()
          else              @browser.setLocation url; @input.blur()
        when  9 then                                 @input.blur() # tab
        when 27 then        @browser.getToolbar().destroy();        # esc
        else return
      false

    # var @focused is used in pageView for speed
    @input.on 'focus', =>
      @focused = yes
      @focusCallback? yes

    @input.on 'blur', =>
      @focused = no

      if @input.val().length < 2 and @_setUrl.length > 2
        @input.val(@_setUrl)

      @focusCallback? no

  focus: -> @input.focus()
  onFocusChg: (@focusCallback) ->

  setUrl: (url) ->
    @_setUrl = url
    if not @focused
      @input.val(url)

  setText: (text) -> @input.val text

  destroy: ->
    @unsubscribe()
    @detach()
