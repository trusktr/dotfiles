let e,t;var r,o,n,a,l,c,d,h={47:(e,t,r)=>{r(602)},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},p={};function u(e){var t=p[e];if(void 0!==t)return t.exports;var r=p[e]={exports:{}};return h[e](r,r.exports,u),r.exports}function g(e,t,r){let o,n,a,l,c,d,h,p,u,g,f=0;null!=r&&({edges:d,maxWait:h,signal:p,aggregator:u}=r);let m="leading"===(d??="trailing")||"both"===d,b="trailing"===d||"both"===d;function v(){if(null!=o){f=Date.now();let t=o,r=g;return g=void 0,o=void 0,a=e.apply(r,t)}}function y(){null!=l&&(clearTimeout(l),l=void 0)}function w(){null!=c&&(clearTimeout(c),c=void 0)}function k(){y(),w(),g=void 0,o=void 0,n=void 0,f=0}function x(...e){if(p?.aborted)return;let r=Date.now();null!=u&&null!=o?o=u(o,e):(g=this,o=e);let d=null==l&&null==c;n=r,y();let w=Date.now();if(n=w,l=setTimeout(()=>{l=void 0,function(e){let r=e-(n??0),o=e-f;return null==n||r>=t||r<0||null!=h&&o>=h}(Date.now())&&b&&v(),k()},t),null!=h&&!c){let e=h-(w-f);e>0?c=setTimeout(()=>{c=void 0,b&&null!=o&&v(),f=Date.now()},e):(b&&null!=o&&v(),k())}return m&&d?v():a}return x.cancel=k,x.flush=function(){return y(),w(),v()},x.pending=function(){return null!=l||null!=c},p?.addEventListener("abort",k,{once:!0}),x}Object.defineProperty(u,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let IpcCall=class IpcCall{constructor(e,t,r=!1,o=!1){this.scope=e,this.reset=r,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r,o){super(e,t,r,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let f=new IpcCommand("core","webview/ready"),m=new IpcCommand("core","webview/focus/changed"),b=new IpcCommand("core","command/execute"),v=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let y=new IpcCommand("core","telemetry/sendEvent"),w=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let k=new IpcCommand("core","webview/focus/didChange"),x=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let _="patchDetails",C=new IpcCommand(_,"apply"),A=new IpcCommand(_,"archive"),S=new IpcCommand(_,"create");new IpcCommand(_,"openInGraph");let E=new IpcCommand(_,"checked"),P=new IpcCommand(_,"selectRepo"),R=new IpcCommand(_,"selectBase"),T=new IpcCommand(_,"file/actions/execute"),O=new IpcCommand(_,"file/open"),I=new IpcCommand(_,"file/openOnRemote"),L=new IpcCommand(_,"file/compareWorking"),M=new IpcCommand(_,"file/comparePrevious"),D=new IpcCommand(_,"preferences/update"),N=new IpcCommand(_,"switchMode"),B=new IpcCommand(_,"cloud/copyLink"),U=new IpcCommand(_,"local/createPatch"),j=new IpcCommand(_,"create/repository/check"),H=new IpcCommand(_,"update/create/metadata"),F=new IpcCommand(_,"update/draft/metadata"),q=new IpcCommand(_,"update/draft/permissions"),V=new IpcCommand(_,"update/users"),W=new IpcCommand(_,"update/userSelection"),G=new IpcRequest(_,"explain"),K=new IpcRequest(_,"generate"),Z=new IpcNotification(_,"didChange",!0),X=new IpcNotification(_,"create/didChange"),Y=new IpcNotification(_,"draft/didChange"),J=new IpcNotification(_,"preferences/didChange"),ee=new IpcNotification(_,"draft/didChangeRepository");new IpcNotification(_,"org/settings/didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=o??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let i=class i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function ei(e){let t=.001*performance.now(),r=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(o-=e[1])<0&&(r--,o+=1e9)),[r,o]}u(47);var er=((r=er||{})[r.Hash=35]="Hash",r[r.Slash=47]="Slash",r[r.Digit0=48]="Digit0",r[r.Digit1=49]="Digit1",r[r.Digit2=50]="Digit2",r[r.Digit3=51]="Digit3",r[r.Digit4=52]="Digit4",r[r.Digit5=53]="Digit5",r[r.Digit6=54]="Digit6",r[r.Digit7=55]="Digit7",r[r.Digit8=56]="Digit8",r[r.Digit9=57]="Digit9",r[r.Backslash=92]="Backslash",r[r.A=65]="A",r[r.B=66]="B",r[r.C=67]="C",r[r.D=68]="D",r[r.E=69]="E",r[r.F=70]="F",r[r.Z=90]="Z",r[r.a=97]="a",r[r.b=98]="b",r[r.c=99]="c",r[r.d=100]="d",r[r.e=101]="e",r[r.f=102]="f",r[r.z=122]="z",r),eo=((o=eo||{}).AngleBracketLeftHeavy="❰",o.AngleBracketRightHeavy="❱",o.ArrowBack="↩",o.ArrowDown="↓",o.ArrowDownUp="⇵",o.ArrowDropRight="⤷",o.ArrowHeadRight="➤",o.ArrowLeft="←",o.ArrowLeftDouble="⇐",o.ArrowLeftRight="↔",o.ArrowLeftRightDouble="⇔",o.ArrowLeftRightDoubleStrike="⇎",o.ArrowLeftRightLong="⟷",o.ArrowRight="→",o.ArrowRightDouble="⇒",o.ArrowRightHollow="⇨",o.ArrowUp="↑",o.ArrowUpDown="⇅",o.ArrowUpRight="↗",o.ArrowsHalfLeftRight="⇋",o.ArrowsHalfRightLeft="⇌",o.ArrowsLeftRight="⇆",o.ArrowsRightLeft="⇄",o.Asterisk="∗",o.Bullseye="◎",o.Check="✔",o.Dash="—",o.Dot="•",o.Ellipsis="…",o.EnDash="–",o.Envelope="✉",o.EqualsTriple="≡",o.Flag="⚑",o.FlagHollow="⚐",o.MiddleEllipsis="⋯",o.MuchLessThan="≪",o.MuchGreaterThan="≫",o.Pencil="✎",o.Space=" ",o.SpaceThin=" ",o.SpaceThinnest=" ",o.SquareWithBottomShadow="❏",o.SquareWithTopShadow="❐",o.Warning="⚠",o.ZeroWidthSpace="​",o);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var en=((n=en||{}).File="file",n.Git="git",n.GitHub="github",n.GitLens="gitlens",n.GitLensMarkdown="gitlens-markdown",n.PRs="pr",n.Remote="vscode-remote",n.Vsls="vsls",n.VslsScc="vsls-scc",n.Virtual="vscode-vfs",n);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let es="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",ea=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${es}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${es}`,graph:`https://gitkraken.com/solutions/commit-graph?${es}`,launchpad:`https://gitkraken.com/solutions/launchpad?${es}`,platform:`https://gitkraken.com/devex?${es}`,pricing:`https://gitkraken.com/gitlens/pricing?${es}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${es}`,security:`https://help.gitkraken.com/gitlens/security?${es}`,workspaces:`https://gitkraken.com/solutions/workspaces?${es}`,cli:`https://gitkraken.com/cli?${es}`,browserExtension:`https://gitkraken.com/browser-extension?${es}`,desktop:`https://gitkraken.com/git-client?${es}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${es}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${es}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${es}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${es}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${es}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${es}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${es}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${es}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${es}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${es}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${es}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${es}`}),{fromCharCode:el}=String;function ec(e){let[t,r]=ei(e);return 1e3*t+Math.floor(r/1e6)}new TextEncoder,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var ed=((a=ed||{})[a.Off=0]="Off",a[a.Error=1]="Error",a[a.Warn=2]="Warn",a[a.Info=3]="Info",a[a.Debug=4]="Debug",a);let eh=["accessToken","password","token"],ep=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){if(null!=e.sanitizeKeys)for(let t of eh)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(eh);this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return this.level>=eu(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=eu(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let r;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...r){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,r)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let r;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let r;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,(e,r)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(r=t(e,r)),this.provider?.sanitizer!=null&&(r=this.provider.sanitizer(e,r)),r))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};function eu(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let eg=new WeakMap,ef={enabled:e=>ep.enabled(e)||ep.isDebugging,log:(e,t,r,...o)=>{switch(e){case"error":ep.error(void 0,t,r,...o);break;case"warn":ep.warn(t,r,...o);break;case"info":ep.log(t,r,...o);break;default:ep.debug(t,r,...o)}}},em=0x40000000-1;function eb(){let e=0;return{get current(){return e},next:function(){return e===em&&(e=0),++e},reset:function(){e=0}}}let ev=eb(),ey=new Map;function ew(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function ek(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let r=t?ev.current:void 0,o=ev.next();return{scopeId:o,prevScopeId:r,prefix:`${ew(o,r)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=ek(e,void 0),ep.configure({name:e,createChannel:function(e){return{name:e,appendLine:ep.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?ep.log(this.scope,e,...t):ep.log(e,t.shift(),...t)}};let ex="home";new IpcRequest(ex,"launchpad/summary"),new IpcRequest(ex,"overview/active"),new IpcRequest(ex,"overview/inactive"),new IpcRequest(ex,"overviewFilter"),new IpcCommand(ex,"overview/repository/change"),new IpcNotification(ex,"overview/repository/didChange"),new IpcCommand(ex,"previewEnabled/toggle"),new IpcCommand(ex,"section/collapse"),new IpcCommand(ex,"walkthrough/dismiss"),new IpcNotification(ex,"ai/allAccess/didChange"),new IpcCommand(ex,"ai/allAccess/dismiss"),new IpcCommand(ex,"overview/filter/set"),new IpcCommand(ex,"openInGraph"),new IpcNotification(ex,"repositories/didCompleteDiscovering"),new IpcNotification(ex,"previewEnabled/didChange"),new IpcNotification(ex,"repository/wip/didChange"),new IpcNotification(ex,"repositories/didChange"),new IpcNotification(ex,"walkthroughProgress/didChange"),new IpcNotification(ex,"integrations/didChange"),new IpcNotification(ex,"launchpad/didChange");let e_=new IpcNotification(ex,"subscription/didChange");new IpcNotification(ex,"org/settings/didChange"),new IpcNotification(ex,"home/ownerFilter/didChange"),new IpcNotification(ex,"account/didFocus");let e$="graph";new IpcCommand(e$,"chooseRepository"),new IpcCommand(e$,"dblclick"),new IpcCommand(e$,"dblclick"),new IpcCommand(e$,"avatars/get"),new IpcCommand(e$,"refs/metadata/get"),new IpcCommand(e$,"rows/get"),new IpcCommand(e$,"pullRequest/openDetails"),new IpcCommand(e$,"search/openInView"),new IpcCommand(e$,"columns/update"),new IpcCommand(e$,"refs/update/visibility"),new IpcCommand(e$,"filters/update/excludeTypes"),new IpcCommand(e$,"configuration/update"),new IpcCommand(e$,"search/update/mode"),new IpcCommand(e$,"filters/update/includedRefs"),new IpcCommand(e$,"selection/update"),new IpcRequest(e$,"chooseRef"),new IpcRequest(e$,"rows/ensure"),new IpcRequest(e$,"counts"),new IpcRequest(e$,"row/hover/get"),new IpcRequest(e$,"search"),new IpcNotification(e$,"repositories/integration/didChange"),new IpcNotification(e$,"didChange",!0,!0),new IpcNotification(e$,"configuration/didChange");let eC=new IpcNotification(e$,"subscription/didChange");new IpcNotification(e$,"avatars/didChange"),new IpcNotification(e$,"branchState/didChange"),new IpcNotification(e$,"refs/didChangeMetadata"),new IpcNotification(e$,"columns/didChange"),new IpcNotification(e$,"scrollMarkers/didChange"),new IpcNotification(e$,"refs/didChangeVisibility"),new IpcNotification(e$,"rows/didChange",void 0,!0),new IpcNotification(e$,"rows/stats/didChange"),new IpcNotification(e$,"selection/didChange"),new IpcNotification(e$,"workingTree/didChange"),new IpcNotification(e$,"didSearch"),new IpcNotification(e$,"didFetch"),new IpcNotification(e$,"featurePreview/didStart");let eA="timeline";new IpcRequest(eA,"ref/choose"),new IpcRequest(eA,"path/choose"),new IpcCommand(eA,"point/open"),new IpcCommand(eA,"config/update"),new IpcCommand(eA,"scope/update");let eS=new IpcNotification(eA,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(e_.is(e)||eC.is(e)||eS.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let r=`${e}|${t}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(v,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(y,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};(c||(c={})).on=function(e,t,r,o){let n=!1;if("string"==typeof e){let a=function(t){let o=t?.target?.closest(e);null!=o&&r(t,o)};return document.addEventListener(t,a,o??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,a,o??!0))}}}let a=function(e){r(e,this)};return e.addEventListener(t,a,o??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,a,o??!1))}}};let eE=/\(([\s\S]*)\)/,eP=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,eR=/\s?=.*$/;function eT(e,t=!1){let r,o,n,a,l,c=0,d=!1,h=!1,p=!0;null!=e&&({args:r,if:o,enter:n,exit:a,prefix:l,logThreshold:c=0,scoped:d=!0,singleLine:h=!1,timed:p=!0}=e),c>0&&(h=!0,p=!0),p&&(d=!0);let u=ep.isDebugging,g=t?ep.debug:ep.log,f=u?"debug":"info";return(e,t,m)=>{let b,v;if("function"==typeof m.value?(b=m.value,v="value"):"function"==typeof m.get&&(b=m.get,v="get"),null==b||null==v)throw Error("Not supported");let y=!1!==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(eP,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");r=r>=0?r+1:0,o=o>0?o:t.indexOf("="),t=t.slice(r,o),t=`(${t})`;let n=eE.exec(t);return null!=n?n[1].split(",").map(e=>e.trim().replace(eR,"")):[]}(b):[];m[v]=function(...e){var m,v;let w,k;if(!u&&!ep.enabled(f)||null!=o&&!o.apply(this,e))return b.apply(this,e);let x=ev.current,_=ev.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let n=eg.get(t);return n?.(e,r)??r}(this):void 0,A=C?d?`${ew(_,x)} ${C}.${t}`:`${C}.${t}`:t;null!=l&&(A=l({id:_,instance:this,instanceName:C??"",name:t,prefix:A},...e)),d&&(m={scopeId:_,prevScopeId:x,prefix:A},m={prevScopeId:ev.current,...m},ey.set(_,m),w=m);let S=null!=n?n(...e):"";if(!1===r||0===e.length)k="",h||g.call(ep,`${A}${S}`);else{let t,o,n,a;k="";let l=-1;for(a of e){if(o=y[++l],null!=(t=r?.[l])){if("boolean"==typeof t)continue;if(k.length>0&&(k+=", "),"string"==typeof t){k+=t;continue}n=String(t(a))}else k.length>0&&(k+=", "),n=ep.toLoggable(a);k+=o?`${o}=${n}`:n}h||g.call(ep,k?`${A}${S}(${k})`:`${A}${S}`)}if(h||p||null!=a){let t,r=p?ei():void 0,o=e=>{let t=void 0!==r?` [${ec(r)}ms]`:"";h?ep.error(e,k?`${A}${S}(${k})`:`${A}${S}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):ep.error(e,A,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),d&&ey.delete(_)};try{t=b.apply(this,e)}catch(e){throw o(e),e}let n=e=>{let t,o,n,l;if(null!=r?(t=ec(r))>500?(o=ep.warn,n=` [*${t}ms] (slow)`):(o=g,n=` [${t}ms]`):(n="",o=g),null!=a)if("function"==typeof a)try{l=a(e)}catch(e){l=`@log.exit error: ${e}`}else!0===a&&(l=`returned ${ep.toLoggable(e)}`);else w?.exitFailed?(l=w.exitFailed,o=(e,...t)=>ep.error(null,e,...t)):l="completed";h?(0===c||t>c)&&o.call(ep,k?`${A}${S}(${k}) ${l}${w?.exitDetails||""}${n}`:`${A}${S} ${l}${w?.exitDetails||""}${n}`):o.call(ep,k?`${A}(${k}) ${l}${w?.exitDetails||""}${n}`:`${A} ${l}${w?.exitDetails||""}${n}`),d&&ey.delete(_)};return null!=t&&null!=(v=t)&&(v instanceof Promise||"function"==typeof v?.then)?t.then(n,o):n(t),t}return b.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:ek(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ef,this._time=ei(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=ei(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ei(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[r,o]=ei(this._time),n=1e3*r+Math.floor(o/1e6),a=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${n}ms]${e?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let eO={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?eO:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var eI=Object.defineProperty,eL=Object.getOwnPropertyDescriptor,eM=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?eL(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&eI(t,r,a),a};function eD(){return e??=acquireVsCodeApi()}let ez=eb();function eN(){return`webview:${ez.next()}`}let eB=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=eD(),this._disposable=c.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=ey.get(ev.current),r=e.data;if(r.packed&&r.params instanceof Uint8Array){let o=function(e,t,...r){return(t?.provider??ef).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(ek(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,r.params=JSON.parse(this._textDecoder.decode(r.params)),o?.stop()}if(this.replaceIpcPromisesWithPromises(r.params),null!=r.completionId){var o,n;let e=(o=r.method,n=r.completionId,`${o}|${n}`);this._pendingHandlers.get(e)?.(r);return}this._onReceiveMessage.fire(r)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let r=e[t];null!=r&&"object"==typeof r&&"__ipc"in r&&"promise"===r.__ipc&&"id"in r&&"string"==typeof r.id&&"method"in r&&"string"==typeof r.method?e[t]=this.getResponsePromise(r.method,r.id):this.replaceIpcPromisesWithPromises(r)}}sendCommand(e,t){let r=eN();this.postMessage({id:r,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let r=eN(),o=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,completionId:r}),o}getResponsePromise(e,t){return new Promise((r,o)=>{var n,a;let l,c=(n=e,a=t,`${n}|${a}`);function d(){clearTimeout(l),l=void 0,this._pendingHandlers.delete(c)}l=setTimeout(()=>{d.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(ep.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(d.call(this),e.method===w.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function eU(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}eM([eT({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],eB.prototype,"onMessageReceived",1),eM([eT({args:{0:e=>e.method,1:!1}},!0)],eB.prototype,"sendCommand",1),eM([eT({args:{0:e=>e.method,1:!1,2:!1}},!0)],eB.prototype,"sendRequest",1),eM([eT({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],eB.prototype,"postMessage",1),eB=eM([(l=e=>`${e.appName}(HostIpc)`,e=>void eg.set(e,l))],eB);let RGBA=class RGBA{constructor(e,t,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=eU(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eU(Math.max(Math.min(1,t),0),3),this.l=eU(Math.max(Math.min(1,r),0),3),this.a=eU(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,n=e.a,a=Math.max(t,r,o),l=Math.min(t,r,o),c=0,d=0,h=(l+a)/2,p=a-l;if(p>0){switch(d=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),a){case t:c=(r-o)/p+6*(r<o);break;case r:c=(o-t)/p+2;break;case o:c=(t-r)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,d,h,n)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,o,n=e.h/360,{s:a,l,a:c}=e;if(0===a)t=r=o=l;else{let e=l<.5?l*(1+a):l+a-l*a,c=2*l-e;t=HSLA._hue2rgb(c,e,n+1/3),r=HSLA._hue2rgb(c,e,n),o=HSLA._hue2rgb(c,e,n-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eU(Math.max(Math.min(1,t),0),3),this.v=eU(Math.max(Math.min(1,r),0),3),this.a=eU(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,n=Math.max(t,r,o),a=n-Math.min(t,r,o);return new HSVA(Math.round(60*(0===a?0:n===t?((r-o)/a%6+6)%6:n===r?(o-t)/a+2:(t-r)/a+4)),0===n?0:a/n,n,e.a)}static toRGBA(e){let{h:t,s:r,v:o,a:n}=e,a=o*r,l=a*(1-Math.abs(t/60%2-1)),c=o-a,[d,h,p]=[0,0,0];return t<60?(d=a,h=l):t<120?(d=l,h=a):t<180?(h=a,p=l):t<240?(h=l,p=a):t<300?(d=l,p=a):t<=360&&(d=a,p=l),new RGBA(d=Math.round((d+c)*255),h=Math.round((h+c)*255),p=Math.round((p+c)*255),n)}};function ej(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(ej(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return eU(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:o,a:n}=this.rgba;return new Color(new RGBA(t,r,o,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,o=t.a,n=r+o*(1-r);if(n<1e-6)return Color.transparent;let a=this.rgba.r*r/n+t.r*o*(1-r)/n;return new Color(new RGBA(a,this.rgba.g*r/n+t.g*o*(1-r)/n,this.rgba.b*r/n+t.b*o*(1-r)/n,n))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:o,a:n}=this.rgba;return new Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-r),e.rgba.b-n*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${eH(e.rgba.r)}${eH(e.rgba.g)}${eH(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),n=t.getRelativeLuminance();return r=r*(n-o)/n,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),n=t.getRelativeLuminance();return r=r*(o-n)/o,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function eH(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let eF=new Emitter,eq=eF.event;function eV(e){let t=document.documentElement,r=window.getComputedStyle(t),o=document.body.classList,n=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),a=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),l=ej("--vscode-editor-background",r),c=ej("--vscode-editor-foreground",r);return c||(c=ej("--vscode-foreground",r)),{colors:{background:l,foreground:c},computedStyle:r,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==e}}let App=class App{constructor(e){this.appName=e;let t=[],r=eV();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(r),t.push(eq(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=eD(),this._hostIpc=new eB(this.appName),t.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),t.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{eF.fire(eV(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage(e=>{switch(!0){case k.is(e):window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case x.is(e):window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(e)}})),this.sendCommand(f,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(c.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0})),t.push(c.on(window,"gl-telemetry-fired",e=>{this._telemetry.sendEvent(e.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=g(e=>{this.sendCommand(m,e)},150);this.bindDisposables.push(c.on(document,"focusin",t=>{let r=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==r)&&(this._focused=!0,this._inputFocused=r,e({focused:!0,inputFocused:r}))}),c.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}};var eW={408:(e,t)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),f=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}function w(){}function k(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var x=k.prototype=new w;x.constructor=k,b(x,y.prototype),x.isPureReactComponent=!0;var _=Array.isArray,C=Object.prototype.hasOwnProperty,A={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,o){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var d=arguments.length-2;if(1===d)a.children=o;else if(1<d){for(var h=Array(d),p=0;p<d;p++)h[p]=arguments[p+2];a.children=h}if(e&&e.defaultProps)for(n in d=e.defaultProps)void 0===a[n]&&(a[n]=d[n]);return{$$typeof:r,type:e,key:l,ref:c,props:a,_owner:A.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function T(e,t){var r,o;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,o={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return o[e]})):t.toString(36)}function O(e,t,n){if(null==e)return e;var a=[],l=0;return function e(t,n,a,l,c){var d,h,p,u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var g=!1;if(null===t)g=!0;else switch(u){case"string":case"number":g=!0;break;case"object":switch(t.$$typeof){case r:case o:g=!0}}if(g)return c=c(g=t),t=""===l?"."+T(g,0):l,_(c)?(a="",null!=t&&(a=t.replace(R,"$&/")+"/"),e(c,n,a,"",function(e){return e})):null!=c&&(P(c)&&(d=c,h=a+(!c.key||g&&g.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+t,c={$$typeof:r,type:d.type,key:h,ref:d.ref,props:d.props,_owner:d._owner}),n.push(c)),1;if(g=0,l=""===l?".":l+":",_(t))for(var m=0;m<t.length;m++){var b=l+T(u=t[m],m);g+=e(u,n,a,b,c)}else if("function"==typeof(b=null===(p=t)||"object"!=typeof p?null:"function"==typeof(p=f&&p[f]||p["@@iterator"])?p:null))for(t=b.call(t),m=0;!(u=t.next()).done;)g+=e(u=u.value,n,a,b=l+T(u,m++),c);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return g}(e,a,"","",function(e){return t.call(n,e,l++)}),a}function I(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},M={transition:null};t.Children={map:O,forEach:function(e,t,r){O(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=n,t.Profiler=l,t.PureComponent=k,t.StrictMode=a,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:M,ReactCurrentOwner:A},t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=b({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=A.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)C.call(t,h)&&!S.hasOwnProperty(h)&&(n[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)n.children=o;else if(1<h){d=Array(h);for(var p=0;p<h;p++)d[p]=arguments[p+2];n.children=d}return{$$typeof:r,type:e.type,key:a,ref:l,props:n,_owner:c}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,r){return L.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,r){return L.current.useReducer(e,t,r)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return L.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)}},eG={};function eK(e){var t=eG[e];if(void 0!==t)return t.exports;var r=eG[e]={exports:{}};return eW[e](r,r.exports,eK),r.exports}eK.d=(e,t)=>{for(var r in t)eK.o(t,r)&&!eK.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},eK.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var eZ={};(()=>{let e,t,r,o,n,a;eK.d(eZ,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>to,ud:()=>tl,wt:()=>tc,ne:()=>th,Ku:()=>tg,FU:()=>tb,XO:()=>tE,Ze:()=>tP,K$:()=>tR,cX:()=>tz,Js:()=>tN,J9:()=>tB,si:()=>t$,sg:()=>tj,hW:()=>tH,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>ep,h4:()=>eh,kZ:()=>ed});let l=globalThis,c=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),h=new WeakMap;let s=class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(c&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&h.set(t,e))}return e}toString(){return this.cssText}};let p=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,d),u=c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,r="";for(let t of e.cssRules)r+=t.cssText;return new s("string"==typeof(t=r)?t:t+"",void 0,d)})(e):e,{is:g,defineProperty:f,getOwnPropertyDescriptor:m,getOwnPropertyNames:b,getOwnPropertySymbols:v,getPrototypeOf:y}=Object,w=globalThis,k=w.trustedTypes,x=k?k.emptyScript:"",_=w.reactiveElementPolyfillSupport,C={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},A=(e,t)=>!g(e,t),S={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;let $=class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&f(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:n}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let a=o?.call(this);n.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...b(e),...v(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(u(r));else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=l.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:C).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,o=!1,n){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??A)(o?n:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$.elementProperties=new Map,$.finalized=new Map,_?.({ReactiveElement:$}),(w.reactiveElementVersions??=[]).push("2.0.0");let E=globalThis,P=E.trustedTypes,R=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,I="?"+O,L=`<${I}>`,M=document,D=()=>M.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,U=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,F=/>/g,q=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,W=/"/g,G=/^(?:script|style|textarea|title)$/i,K=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Z=K(1),X=(K(2),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),J=new WeakMap,ee=M.createTreeWalker(M,129);function ei(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(t):t}let Q=class Q{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[d,h]=((e,t)=>{let r=e.length-1,o=[],n,a=2===t?"<svg>":"",l=j;for(let t=0;t<r;t++){let r=e[t],c,d,h=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(d=l.exec(r)));)p=l.lastIndex,l===j?"!--"===d[1]?l=H:void 0!==d[1]?l=F:void 0!==d[2]?(G.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=q):void 0!==d[3]&&(l=q):l===q?">"===d[0]?(l=n??j,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?q:'"'===d[3]?W:V):l===W||l===V?l=q:l===H||l===F?l=j:(l=q,n=void 0);let u=l===q&&e[t+1].startsWith("/>")?" ":"";a+=l===j?r+L:h>=0?(o.push(c),r.slice(0,h)+T+r.slice(h)+O+u):r+O+(-2===h?t:u)}return[ei(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),o]})(e,t);if(this.el=Q.createElement(d,r),ee.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ee.nextNode())&&c.length<l;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(T)){let t=h[a++],r=o.getAttribute(e).split(O),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:l[2],strings:r,ctor:"."===l[1]?it:"?"===l[1]?rt:"@"===l[1]?st:nt}),o.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:n}),o.removeAttribute(e));if(G.test(o.tagName)){let e=o.textContent.split(O),t=e.length-1;if(t>0){o.textContent=P?P.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],D()),ee.nextNode(),c.push({type:2,index:++n});o.append(e[t],D())}}}else if(8===o.nodeType)if(o.data===I)c.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(O,e+1));)c.push({type:7,index:n}),e+=O.length-1}n++}}static createElement(e,t){let r=M.createElement("template");return r.innerHTML=e,r}};function er(e,t,r=e,o){if(t===X)return t;let n=void 0!==o?r._$Co?.[o]:r._$Cl,a=N(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(t=er(e,n._$AS(e,t.values),n,o)),t}let et=class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??M).importNode(t,!0);ee.currentNode=o;let n=ee.nextNode(),a=0,l=0,c=r[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ot(n,n.nextSibling,this,e):1===c.type?t=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(t=new at(n,this,e)),this._$AV.push(t),c=r[++l]}a!==c?.index&&(n=ee.nextNode(),a++)}return ee.currentNode=M,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let ot=class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let r;N(e=er(this,e,t))?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):B(r=e)||"function"==typeof r?.[Symbol.iterator]?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Y&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=Q.createElement(ei(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new et(o,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new Q(e)),t}T(e){B(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let n of e)o===t.length?t.push(r=new ot(this.k(D()),this.k(D()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let nt=class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(e,t=this,r,o){let n=this.strings,a=!1;if(void 0===n)(a=!N(e=er(this,e,t,0))||e!==this._$AH&&e!==X)&&(this._$AH=e);else{let o,l,c=e;for(e=n[0],o=0;o<n.length-1;o++)(l=er(this,c[r+o],t,o))===X&&(l=this._$AH[o]),a||=!N(l)||l!==this._$AH[o],l===Y?e=Y:e!==Y&&(e+=(l??"")+n[o+1]),this._$AH[o]=l}a&&!o&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let it=class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}};let rt=class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}};let st=class st extends nt{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=er(this,e,t,0)??Y)===X)return;let r=this._$AH,o=e===Y&&r!==Y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Y&&(r===Y||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let at=class at{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){er(this,e)}};let eo=E.litHtmlPolyfillSupport;eo?.(Q,ot),(E.litHtmlVersions??=[]).push("3.0.0");let ct=class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,n=o._$litPart$;if(void 0===n){let e=r?.renderBefore??null;o._$litPart$=n=new ot(t.insertBefore(D(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});let en=globalThis.litElementPolyfillSupport;en?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");let es={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:A};function ea(e){return(t,r)=>"object"==typeof r?((e=es,t,r)=>{let{kind:o,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){let{name:o}=r;return function(r){let n=this[o];t.call(this,r),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):((e,t,r)=>{let o=t.hasOwnProperty(r);return t.constructor.createProperty(r,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}let el=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function ec(e,t){return(r,o,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:l}="object"==typeof o?r:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return el(r,o,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),l.call(this,t)),t}return a(this)}})}return el(r,o,{get(){return a(this)}})}}let gt=class gt extends ct{};let ed=p`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,eh=p``,ep=p`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,eu=Math.min,eg=Math.max,ef=Math.round,em=(Math.floor,e=>({x:e,y:e})),eb={left:"right",right:"left",bottom:"top",top:"bottom"},ev={start:"end",end:"start"};function ey(e,t){return"function"==typeof e?e(t):e}function ew(e){return e.split("-")[0]}function ek(e){return e.split("-")[1]}function ex(e){return"x"===e?"y":"x"}function e_(e){return"y"===e?"height":"width"}function e$(e){return["top","bottom"].includes(ew(e))?"y":"x"}function eC(e){return e.replace(/start|end/g,e=>ev[e])}function eA(e){return e.replace(/left|right|bottom|top/g,e=>eb[e])}function eS(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eE(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function eP(e,t,r){let o,{reference:n,floating:a}=e,l=e$(t),c=ex(e$(t)),d=e_(c),h=ew(t),p="y"===l,u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,f=n[d]/2-a[d]/2;switch(h){case"top":o={x:u,y:n.y-a.height};break;case"bottom":o={x:u,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:g};break;case"left":o={x:n.x-a.width,y:g};break;default:o={x:n.x,y:n.y}}switch(ek(t)){case"start":o[c]-=f*(r&&p?-1:1);break;case"end":o[c]+=f*(r&&p?-1:1)}return o}async function eR(e,t){var r;void 0===t&&(t={});let{x:o,y:n,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=ey(t,e),m=eS(f),b=c[g?"floating"===u?"reference":"floating":u],v=eE(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(b)))||r?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{...l.floating,x:o,y:n}:l.reference,w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await (null==a.isElement?void 0:a.isElement(w))&&await (null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=eE(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}function eT(e){return eL(e)?(e.nodeName||"").toLowerCase():"#document"}function eO(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function eI(e){var t;return null==(t=(eL(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eL(e){return e instanceof Node||e instanceof eO(e).Node}function eM(e){return e instanceof Element||e instanceof eO(e).Element}function eD(e){return e instanceof HTMLElement||e instanceof eO(e).HTMLElement}function ez(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eO(e).ShadowRoot)}function eN(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=eH(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function eB(e){let t=eU(),r=eH(e);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function eU(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ej(e){return["html","body","#document"].includes(eT(e))}function eH(e){return eO(e).getComputedStyle(e)}function eF(e){return eM(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eq(e){if("html"===eT(e))return e;let t=e.assignedSlot||e.parentNode||ez(e)&&e.host||eI(e);return ez(t)?t.host:t}function eV(e){let t=eH(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=eD(e),a=n?e.offsetWidth:r,l=n?e.offsetHeight:o,c=ef(r)!==a||ef(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function eW(e){return eM(e)?e:e.contextElement}function eG(e){let t=eW(e);if(!eD(t))return em(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:a}=eV(t),l=(a?ef(r.width):r.width)/o,c=(a?ef(r.height):r.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let eX=em(0);function eQ(e){let t=eO(e);return eU()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:eX}function eY(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let a=e.getBoundingClientRect(),l=eW(e),c=em(1);t&&(o?eM(o)&&(c=eG(o)):c=eG(e));let d=(void 0===(n=r)&&(n=!1),!(!o||n&&o!==eO(l))&&n)?eQ(l):em(0),h=(a.left+d.x)/c.x,p=(a.top+d.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let e=eO(l),t=o&&eM(o)?eO(o):o,r=e.frameElement;for(;r&&o&&t!==e;){let e=eG(r),t=r.getBoundingClientRect(),o=eH(r),n=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;h*=e.x,p*=e.y,u*=e.x,g*=e.y,h+=n,p+=a,r=eO(r).frameElement}}return eE({width:u,height:g,x:h,y:p})}function eJ(e){return eY(eI(e)).left+eF(e).scrollLeft}function e0(e,t,r){let o;if("viewport"===t)o=function(e,t){let r=eO(e),o=eI(e),n=r.visualViewport,a=o.clientWidth,l=o.clientHeight,c=0,d=0;if(n){a=n.width,l=n.height;let e=eU();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,d=n.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,r);else if("document"===t)o=function(e){let t=eI(e),r=eF(e),o=e.ownerDocument.body,n=eg(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=eg(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),l=-r.scrollLeft+eJ(e),c=-r.scrollTop;return"rtl"===eH(o).direction&&(l+=eg(t.clientWidth,o.clientWidth)-n),{width:n,height:a,x:l,y:c}}(eI(e));else if(eM(t))o=function(e,t){let r=eY(e,!0,"fixed"===t),o=r.top+e.clientTop,n=r.left+e.clientLeft,a=eD(e)?eG(e):em(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:n*a.x,y:o*a.y}}(t,r);else{let r=eQ(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return eE(o)}function e1(e,t){return eD(e)&&"fixed"!==eH(e).position?t?t(e):e.offsetParent:null}function e2(e,t){let r=eO(e);if(!eD(e))return r;let o=e1(e,t);for(;o&&["table","td","th"].includes(eT(o))&&"static"===eH(o).position;)o=e1(o,t);return o&&("html"===eT(o)||"body"===eT(o)&&"static"===eH(o).position&&!eB(o))?r:o||function(e){let t=eq(e);for(;eD(t)&&!ej(t);){if(eB(t))return t;t=eq(t)}return null}(e)||r}let e5={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:o}=e,n=eD(r),a=eI(r);if(r===a)return t;let l={scrollLeft:0,scrollTop:0},c=em(1),d=em(0);if((n||!n&&"fixed"!==o)&&(("body"!==eT(r)||eN(a))&&(l=eF(r)),eD(r))){let e=eY(r);c=eG(r),d.x=e.x+r.clientLeft,d.y=e.y+r.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x,y:t.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:eI,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,a=[..."clippingAncestors"===r?function(e,t){let r=t.get(e);if(r)return r;let o=(function e(t,r,o){var n;void 0===r&&(r=[]),void 0===o&&(o=!0);let a=function e(t){let r=eq(t);return ej(r)?t.ownerDocument?t.ownerDocument.body:t.body:eD(r)&&eN(r)?r:e(r)}(t),l=a===(null==(n=t.ownerDocument)?void 0:n.body),c=eO(a);return l?r.concat(c,c.visualViewport||[],eN(a)?a:[],c.frameElement&&o?e(c.frameElement):[]):r.concat(a,e(a,[],o))})(e,[],!1).filter(e=>eM(e)&&"body"!==eT(e)),n=null,a="fixed"===eH(e).position,l=a?eq(e):e;for(;eM(l)&&!ej(l);){let t=eH(l),r=eB(l);r||"fixed"!==t.position||(n=null),(a?!r&&!n:!r&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||eN(l)&&!r&&function e(t,r){let o=eq(t);return!(o===r||!eM(o)||ej(o))&&("fixed"===eH(o).position||e(o,r))}(e,l))?o=o.filter(e=>e!==l):n=t,l=eq(l)}return t.set(e,o),o}(t,this._c):[].concat(r),o],l=a[0],c=a.reduce((e,r)=>{let o=e0(t,r,n);return e.top=eg(o.top,e.top),e.right=eu(o.right,e.right),e.bottom=eu(o.bottom,e.bottom),e.left=eg(o.left,e.left),e},e0(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:e2,getElementRects:async function(e){let{reference:t,floating:r,strategy:o}=e,n=this.getOffsetParent||e2,a=this.getDimensions;return{reference:function(e,t,r){let o=eD(t),n=eI(t),a="fixed"===r,l=eY(e,!0,a,t),c={scrollLeft:0,scrollTop:0},d=em(0);if(o||!o&&!a)if(("body"!==eT(t)||eN(n))&&(c=eF(t)),o){let e=eY(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=eJ(n));return{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}(t,await n(r),o),floating:{x:0,y:0,...await a(r)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return eV(e)},getScale:eG,isElement:eM,isRTL:function(e){return"rtl"===eH(e).direction}},e3=p`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var e6,e9=function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let xe=class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ep,ed,e3]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t;let r,o=[{name:"offset",options:6,async fn(e){let{x:t,y:r}=e,o=await async function(e,t){let{placement:r,platform:o,elements:n}=e,a=await (null==o.isRTL?void 0:o.isRTL(n.floating)),l=ew(r),c=ek(r),d="y"===e$(r),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=ey(6,e),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}(e,6);return{x:t+o.x,y:r+o.y,data:o}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var r,o,n,a,l;let{placement:c,middlewareData:d,rects:h,initialPlacement:p,platform:u,elements:g}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=ey(t,e);if(null!=(r=d.arrow)&&r.alignmentOffset)return{};let x=ew(c),_=ew(p)===p,C=await (null==u.isRTL?void 0:u.isRTL(g.floating)),A=b||(_||!w?[eA(p)]:function(e){let t=eA(e);return[eC(e),t,eC(t)]}(p));b||"none"===y||A.push(...function(e,t,r,o){let n=ek(e),a=function(e,t,r){let o=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":return r?t?n:o:t?o:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(ew(e),"start"===r,o);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(eC)))),a}(p,w,y,C));let S=[p,...A],E=await eR(e,k),P=[],R=(null==(o=d.flip)?void 0:o.overflows)||[];if(f&&P.push(E[x]),m){let e=function(e,t,r){void 0===r&&(r=!1);let o=ek(e),n=ex(e$(e)),a=e_(n),l="x"===n?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=eA(l)),[l,eA(l)]}(c,h,C);P.push(E[e[0]],E[e[1]])}if(R=[...R,{placement:c,overflows:P}],!P.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:R},reset:{placement:t}};let r=null==(a=R.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!r)switch(v){case"bestFit":{let e=null==(l=R.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(r=e);break}case"initialPlacement":r=p}if(c!==r)return{reset:{placement:r}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:r,y:o,placement:n}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...d}=ey(e,t),h={x:r,y:o},p=await eR(t,d),u=e$(ew(n)),g=ex(u),f=h[g],m=h[u];if(a){let e="y"===g?"bottom":"right";f=eg(f+p["y"===g?"top":"left"],eu(f,f-p[e]))}if(l){let e="y"===u?"bottom":"right";m=eg(m+p["y"===u?"top":"left"],eu(m,m-p[e]))}let b=c.fn({...t,[g]:f,[u]:m});return{...b,data:{x:b.x-r,y:b.y-o}}}}];this.arrowEl&&o.push({name:"arrow",options:r={element:this.arrowEl},async fn(e){let{x:t,y:o,placement:n,rects:a,platform:l,elements:c,middlewareData:d}=e,{element:h,padding:p=0}=ey(r,e)||{};if(null==h)return{};let u=eS(p),g={x:t,y:o},f=ex(e$(n)),m=e_(f),b=await l.getDimensions(h),v="y"===f,y=v?"clientHeight":"clientWidth",w=a.reference[m]+a.reference[f]-g[f]-a.floating[m],k=g[f]-a.reference[f],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(h)),_=x?x[y]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[y]||a.floating[m]);let C=_/2-b[m]/2-1,A=eu(u[v?"top":"left"],C),S=eu(u[v?"bottom":"right"],C),E=_-b[m]-S,P=_/2-b[m]/2+(w/2-k/2),R=eg(A,eu(P,E)),T=!d.arrow&&null!=ek(n)&&P!=R&&a.reference[m]/2-(P<A?A:S)-b[m]/2<0,O=T?P<A?P-A:P-E:0;return{[f]:g[f]+O,data:{[f]:R,centerOffset:P-R-O,...T&&{alignmentOffset:O}},reset:T}}}),await ((e,t,r)=>{let o=new Map,n={platform:e5,...r},a={...n.platform,_c:o};return(async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),d=await (null==l.isRTL?void 0:l.isRTL(t)),h=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:u}=eP(h,o,d),g=o,f={},m=0;for(let r=0;r<c.length;r++){let{name:a,fn:b}=c[r],{x:v,y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:o,placement:g,strategy:n,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:p,y:u}=eP(h,g,d)),r=-1)}return{x:p,y:u,placement:g,strategy:n,middlewareData:f}})(e,t,{...n,platform:a})})(this.triggerEl,this.popoverEl,{middleware:o,placement:this.placement}).then(({x:e,y:t,placement:r,middlewareData:o})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=o.arrow?.x,t=o.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?Z`<div part="arrow" class="arrow"></div>`:""}render(){return Z`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}};e9([ea({type:Boolean})],xe.prototype,"arrow",void 0),e9([ea({type:Boolean})],xe.prototype,"hover",void 0),e9([ea()],xe.prototype,"placement",void 0),e9([ea({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),e9([ea({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),e9([ec('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),e9([ec(".popover")],xe.prototype,"popoverEl",void 0),e9([ec(".arrow")],xe.prototype,"arrowEl",void 0),e9([ea({...void 0,state:!0,attribute:!1})],xe.prototype,"open",void 0);let e7=p`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;let $e=class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ep,ed,e7]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return Z`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}};!function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);a>3&&l&&Object.defineProperty(t,r,l)}([ea({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);let e8=p`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;let Se=class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=e8}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return Z`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}};!function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);a>3&&l&&Object.defineProperty(t,r,l)}([ea({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);let e4=new Set(["children","localName","ref","style","className"]),te=new WeakMap,tt=(e,t,r,o,n)=>{let a,l,c=n?.[t];void 0===c||r===o?(e[t]=r,null==r&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(a=te.get(e))&&te.set(e,a=new Map),l=a.get(c),void 0!==r?void 0===l?(a.set(c,l={handleEvent:r}),e.addEventListener(c,l)):l.handleEvent=r:void 0!==l&&(a.delete(c),e.removeEventListener(c,l)))},ti=({react:e,tagName:t,elementClass:r,events:o,displayName:n})=>{let a=new Set(Object.keys(o??{})),l=e.forwardRef((n,l)=>{let c=e.useRef(null),d=e.useRef(null),h={},p={};for(let[e,t]of Object.entries(n))e4.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in r.prototype?p[e]=t:h[e]=t;return e.useLayoutEffect(()=>{if(null!==d.current){for(let e in p)tt(d.current,e,n[e],c.current?c.current[e]:void 0,o);c.current=n}}),e.useLayoutEffect(()=>{d.current?.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)}})});return l.displayName=n??r.name,l};var tr=eK(294);let to=ti({react:tr,tagName:Se.elementName,elementClass:Se}),tn=p`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,ts=p`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var ta=function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let He=class He extends gt{static{this.styles=[ep,tn]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?Z`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:Z`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}};ta([ea()],He.prototype,"src",void 0),ta([ea()],He.prototype,"indicator",void 0);let Le=class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ep,ts]}render(){return Z`<slot class="avatar-group" part="base"></slot>`}};let tl=ti({react:tr,tagName:He.elementName,elementClass:He}),tc=ti({react:tr,tagName:Le.elementName,elementClass:Le}),td=p`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;let Be=class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=td}static{this.elementName="gk-badge"}render(){return Z`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}};!function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);a>3&&l&&Object.defineProperty(t,r,l)}([ea()],Be.prototype,"variant",void 0);let th=ti({react:tr,tagName:Be.elementName,elementClass:Be}),tp=p`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tu=function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let Ge=class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tp}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return Z`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}};tu([ea({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),tu([ea({reflect:!0})],Ge.prototype,"type",void 0),tu([ea()],Ge.prototype,"variant",void 0);let tg=ti({react:tr,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),tf=p`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tm=function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let Je=class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ep,ed,tf]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return Z`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>Z`<span class="complexity-indicator__box"></span>`)}</div>`}};tm([ea({type:Number})],Je.prototype,"level",void 0),tm([ea()],Je.prototype,"label",void 0);let tb=ti({react:tr,tagName:Je.elementName,elementClass:Je}),tv=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ty=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tw=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tk=new Map,tx=["th","st","nd","rd"];var t_=function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let po=class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ep]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(n,a){let l=("number"==typeof n?n:n.getTime())-(new Date).getTime();for(let[n,c,d,h]of tw){let p=Math.abs(l);if(p>=c||1e3===c)return a?(null==e&&(e=null!=o?o.resolvedOptions().locale:null!=r?r.resolvedOptions().locale:(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(p/d)}${h}`:(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),o.format(Math.round(l/d),n))):(null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),r.format(Math.round(l/d),n))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return Z`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,r,o,n=!0){let a=`${(void 0)??""}:${r=r??void 0}`,l=tk.get(a);if(null==l){let e,o=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=ty.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(tv))if(null!=t)for(let e in t){let o=t[e];if(null!=o)switch(e){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":r.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(r);e=t,l=new Intl.DateTimeFormat(e,o),n&&tk.set(a,l)}if(null==r||ty.test(r))return l.format(e);let c=l.formatToParts(e);return r.replace(tv,(r,a,l,d,h,p,u,g,f,m,b,v,y,w,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let r in k){let a=k[r];if(null==a)continue;let l=c.find(e=>e.type===r);if("Do"===a&&"day"===l?.type){var x=Number(l.value);let e=x%100;return`${x}${tx[(e-20)%10]??tx[e]??tx[0]}`}if("a"===a&&"dayPeriod"===l?.type){let r=(function(e){let r=`${o??""}:time:${e}`,a=tk.get(r);if(null==a){let l;l=null==o?t:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",timeStyle:e}),n&&tk.set(r,a)}return a})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(r??l)?.value??""}`}return l?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}};t_([ea({converter:(n=navigator.language,{toAttribute:e=>e.toLocaleDateString(n),fromAttribute:e=>new Date(e)}),reflect:!0})],po.prototype,"date",void 0),t_([ea()],po.prototype,"format",void 0);let t$=ti({react:tr,tagName:po.elementName,elementClass:po}),tC=p`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tA=p`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tS=p`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;let yo=class yo extends gt{static{this.styles=[ep,tS]}static{this.elementName="gk-focus-item"}render(){return Z`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}};let vo=class vo extends gt{static{this.styles=[ep,tA]}static{this.elementName="gk-focus-row"}render(){return Z`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}};let bo=class bo extends gt{static{this.styles=[ep,tA,tS,tC]}static{this.elementName="gk-focus-container"}render(){return Z`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}};let tE=ti({react:tr,tagName:yo.elementName,elementClass:yo}),tP=ti({react:tr,tagName:vo.elementName,elementClass:vo}),tR=ti({react:tr,tagName:bo.elementName,elementClass:bo});let $o=class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let tT=(a=class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return X}},(...e)=>({_$litDirective$:a,values:e})),tO=p`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var tI=function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let Ro=class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ep,ed,tO]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return Z`<div class="field"><label class="${tT({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${tT({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${this.autocomplete??Y}" autocorrect="${this.autocorrect??Y}" class="input" ?disabled="${this.disabled}" id="input" name="${this.name??Y}" part="input" placeholder="${this.placeholder??Y}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}};tI([ea()],Ro.prototype,"autocomplete",void 0),tI([ea()],Ro.prototype,"autocorrect",void 0),tI([ea({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),tI([ea()],Ro.prototype,"label",void 0),tI([ea({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),tI([ea()],Ro.prototype,"name",void 0),tI([ea()],Ro.prototype,"placeholder",void 0),tI([ea({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),tI([ea({reflect:!0})],Ro.prototype,"type",void 0),tI([ea()],Ro.prototype,"value",void 0);let tL=p`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,tM=p`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,tD=p`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;let Mo=class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ep,tL]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let r=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(r)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),r=t.length,o=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?o=(o-1+r)%r:"ArrowDown"===e.key?o=(o+1)%r:"Home"===e.key?o=0:"End"===e.key&&(o=r-1),this._setCurrentItem(t[o]),t[o].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return Z`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}};!function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);a>3&&l&&Object.defineProperty(t,r,l)}([(e6={flatten:!0},(e,t)=>{let{slot:r,selector:o}=e6??{},n="slot"+(r?`[name=${r}]`:":not([name])");return el(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(e6)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],Mo.prototype,"slotChildren",void 0);let Do=class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ep,tM]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return Z`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}};!function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);a>3&&l&&Object.defineProperty(t,r,l)}([ea({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);let Ho=class Ho extends gt{static{this.styles=[ep,tD]}static{this.elementName="gk-menu-label"}render(){return Z`<slot class="menu-label" part="base"></slot>`}};let tz=ti({react:tr,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),tN=ti({react:tr,tagName:Do.elementName,elementClass:Do}),tB=ti({react:tr,tagName:Ho.elementName,elementClass:Ho}),tU=p`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;let Bo=class Bo extends gt{static{this.styles=[ep,tU]}static{this.elementName="gk-tag"}render(){return Z`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}};!function(e,t,r,o){var n,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,r,l):n(t,r))||l);a>3&&l&&Object.defineProperty(t,r,l)}([ea()],Bo.prototype,"variant",void 0);let tj=ti({react:tr,tagName:Bo.elementName,elementClass:Bo}),tH=ti({react:tr,tagName:$e.elementName,elementClass:$e})})(),eZ.Tn;var eX=eZ.qE,eQ=(eZ.HE,eZ.Ct),eY=eZ.zx,eJ=(eZ.M1,eZ.sX,eZ.D0,eZ.fs,eZ.Tw,eZ.ud,eZ.wt,eZ.ne,eZ.Ku,eZ.FU,eZ.XO,eZ.Ze,eZ.K$,eZ.cX,eZ.Js,eZ.J9,eZ.si,eZ.sg,eZ.hW,eZ.II,eZ.v2),e0=eZ.sN,e1=(eZ.Lb,eZ.J2),e2=(eZ.$$,eZ.Vp,eZ.u,eZ.fW);eZ.WV,eZ.h4,eZ.kZ;let e5=globalThis,e3=e5.ShadowRoot&&(void 0===e5.ShadyCSS||e5.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e6=Symbol(),e9=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==e6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(e3&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=e9.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&e9.set(t,e))}return e}toString(){return this.cssText}};let e7=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,e6),e8=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,e6),e4=e3?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return e7(t)})(e):e,{is:te,defineProperty:tt,getOwnPropertyDescriptor:ti,getOwnPropertyNames:tr,getOwnPropertySymbols:to,getPrototypeOf:tn}=Object,ts=globalThis,ta=ts.trustedTypes,tl=ta?ta.emptyScript:"",tc=ts.reactiveElementPolyfillSupport,td={toAttribute(e,t){switch(t){case Boolean:e=e?tl:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},th=(e,t)=>!te(e,t),tp={attribute:!0,type:String,converter:td,reflect:!1,useDefault:!1,hasChanged:th};Symbol.metadata??=Symbol("metadata"),ts.litPropertyMetadata??=new WeakMap;let reactive_element_y=class reactive_element_y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tp){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&tt(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:n}=ti(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let a=o?.call(this);n?.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tp}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=tn(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...tr(e),...to(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(e4(r));else void 0!==e&&t.push(e4(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(e3)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=e5.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:td).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:td;this._$Em=o,this[o]=n.fromAttribute(t,e.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){let o=this.constructor,n=this[e];if(!(((r??=o.getPropertyOptions(e)).hasChanged??th)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};reactive_element_y.elementStyles=[],reactive_element_y.shadowRootOptions={mode:"open"},reactive_element_y.elementProperties=new Map,reactive_element_y.finalized=new Map,tc?.({ReactiveElement:reactive_element_y}),(ts.reactiveElementVersions??=[]).push("2.1.0");let tu=globalThis,tg=tu.trustedTypes,tf=tg?tg.createPolicy("lit-html",{createHTML:e=>e}):void 0,tm="$lit$",tb=`lit$${Math.random().toFixed(9).slice(2)}$`,tv="?"+tb,ty=`<${tv}>`,tw=document,tk=()=>tw.createComment(""),tx=e=>null===e||"object"!=typeof e&&"function"!=typeof e,t_=Array.isArray,t$=e=>t_(e)||"function"==typeof e?.[Symbol.iterator],tC=`[ 	
\f\r]`,tA=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tS=/-->/g,tE=/>/g,tP=RegExp(`>|${tC}(?:([^\\s"'>=/]+)(${tC}*=${tC}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tR=/'/g,tT=/"/g,tO=/^(?:script|style|textarea|title)$/i,tI=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),tL=tI(1),tM=(tI(2),tI(3),Symbol.for("lit-noChange")),tD=Symbol.for("lit-nothing"),tz=new WeakMap,tN=tw.createTreeWalker(tw,129);function tB(e,t){if(!t_(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tf?tf.createHTML(t):t}let tU=(e,t)=>{let r=e.length-1,o=[],n,a=2===t?"<svg>":3===t?"<math>":"",l=tA;for(let t=0;t<r;t++){let r=e[t],c,d,h=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(d=l.exec(r)));)p=l.lastIndex,l===tA?"!--"===d[1]?l=tS:void 0!==d[1]?l=tE:void 0!==d[2]?(tO.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=tP):void 0!==d[3]&&(l=tP):l===tP?">"===d[0]?(l=n??tA,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?tP:'"'===d[3]?tT:tR):l===tT||l===tR?l=tP:l===tS||l===tE?l=tA:(l=tP,n=void 0);let u=l===tP&&e[t+1].startsWith("/>")?" ":"";a+=l===tA?r+ty:h>=0?(o.push(c),r.slice(0,h)+tm+r.slice(h)+tb+u):r+tb+(-2===h?t:u)}return[tB(e,a+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let lit_html_N=class lit_html_N{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[d,h]=tU(e,t);if(this.el=lit_html_N.createElement(d,r),tN.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=tN.nextNode())&&c.length<l;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(tm)){let t=h[a++],r=o.getAttribute(e).split(tb),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:l[2],strings:r,ctor:"."===l[1]?lit_html_H:"?"===l[1]?lit_html_I:"@"===l[1]?lit_html_L:lit_html_k}),o.removeAttribute(e)}else e.startsWith(tb)&&(c.push({type:6,index:n}),o.removeAttribute(e));if(tO.test(o.tagName)){let e=o.textContent.split(tb),t=e.length-1;if(t>0){o.textContent=tg?tg.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],tk()),tN.nextNode(),c.push({type:2,index:++n});o.append(e[t],tk())}}}else if(8===o.nodeType)if(o.data===tv)c.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(tb,e+1));)c.push({type:7,index:n}),e+=tb.length-1}n++}}static createElement(e,t){let r=tw.createElement("template");return r.innerHTML=e,r}};function tj(e,t,r=e,o){if(t===tM)return t;let n=void 0!==o?r._$Co?.[o]:r._$Cl,a=tx(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(t=tj(e,n._$AS(e,t.values),n,o)),t}let lit_html_M=class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??tw).importNode(t,!0);tN.currentNode=o;let n=tN.nextNode(),a=0,l=0,c=r[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new lit_html_R(n,n.nextSibling,this,e):1===c.type?t=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(t=new z(n,this,e)),this._$AV.push(t),c=r[++l]}a!==c?.index&&(n=tN.nextNode(),a++)}return tN.currentNode=tw,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let lit_html_R=class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=tD,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){tx(e=tj(this,e,t))?e===tD||null==e||""===e?(this._$AH!==tD&&this._$AR(),this._$AH=tD):e!==this._$AH&&e!==tM&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):t$(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==tD&&tx(this._$AH)?this._$AA.nextSibling.data=e:this.T(tw.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=lit_html_N.createElement(tB(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new lit_html_M(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=tz.get(e.strings);return void 0===t&&tz.set(e.strings,t=new lit_html_N(e)),t}k(e){t_(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let n of e)o===t.length?t.push(r=new lit_html_R(this.O(tk()),this.O(tk()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let lit_html_k=class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=tD,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=tD}_$AI(e,t=this,r,o){let n=this.strings,a=!1;if(void 0===n)(a=!tx(e=tj(this,e,t,0))||e!==this._$AH&&e!==tM)&&(this._$AH=e);else{let o,l,c=e;for(e=n[0],o=0;o<n.length-1;o++)(l=tj(this,c[r+o],t,o))===tM&&(l=this._$AH[o]),a||=!tx(l)||l!==this._$AH[o],l===tD?e=tD:e!==tD&&(e+=(l??"")+n[o+1]),this._$AH[o]=l}a&&!o&&this.j(e)}j(e){e===tD?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let lit_html_H=class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===tD?void 0:e}};let lit_html_I=class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==tD)}};let lit_html_L=class lit_html_L extends lit_html_k{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=tj(this,e,t,0)??tD)===tM)return;let r=this._$AH,o=e===tD&&r!==tD||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==tD&&(r===tD||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){tj(this,e)}};let tH=tu.litHtmlPolyfillSupport;tH?.(lit_html_N,lit_html_R),(tu.litHtmlVersions??=[]).push("3.3.0");let tF=globalThis;let lit_element_i=class lit_element_i extends reactive_element_y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,n=o._$litPart$;if(void 0===n){let e=r?.renderBefore??null;o._$litPart$=n=new lit_html_R(t.insertBefore(tk(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tM}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,tF.litElementHydrateSupport?.({LitElement:lit_element_i});let tq=tF.litElementPolyfillSupport;tq?.({LitElement:lit_element_i}),(tF.litElementVersions??=[]).push("4.2.0");let tV=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tW={attribute:!0,type:String,converter:td,reflect:!1,hasChanged:th};function tG(e){return(t,r)=>"object"==typeof r?((e=tW,t,r)=>{let{kind:o,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=r;return function(r){let n=this[o];t.call(this,r),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):((e,t,r)=>{let o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function tK(e){return tG({...e,state:!0,attribute:!1})}let tZ=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function tX(e,t){return(r,o,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof o?r:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return tZ(r,o,{get(){let r=e.call(this);return void 0===r&&(null!==(r=a(this))||this.hasUpdated)&&t.call(this,r),r}})}return tZ(r,o,{get(){return a(this)}})}}function tQ(e){return(t,r)=>{let{slot:o,selector:n}=e??{},a="slot"+(o?`[name=${o}]`:":not([name])");return tZ(t,r,{get(){let t=this.renderRoot?.querySelector(a),r=t?.assignedElements(e)??[];return void 0===n?r:r.filter(e=>e.matches(n))}})}}function tY(e,t,r){return e?t(e):r?.(e)}let tJ=new WeakMap;let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(o),o}update(e){let t=tJ.get(this.constructor);if(null!=t)for(let{keys:r,method:o,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function*t0(e,t){if(void 0!==e){let r=0;for(let o of e)yield t(o,r++)}}let t1=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:t2}={M:tm,P:tb,A:tv,C:1,L:tU,R:lit_html_M,D:t$,V:tj,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},t5=()=>document.createComment(""),t3=(e,t,r)=>{let o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===r)r=new t2(o.insertBefore(t5(),n),o.insertBefore(t5(),n),e,e.options);else{let t=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==a._$AU&&r._$AP(t)}if(t!==n||l){let e=r._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,n),e=t}}}return r},t6=(e,t,r=e)=>(e._$AI(t,r),e),t9={},t7=e=>{e._$AP?.(!1,!0);let t=e._$AA,r=e._$AB.nextSibling;for(;t!==r;){let e=t.nextSibling;t.remove(),t=e}},t8=(e,t,r)=>{let o=new Map;for(let n=t;n<=r;n++)o.set(e[n],n);return o},t4=t1(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);let n=[],a=[],l=0;for(let t of e)n[l]=o?o(t,l):l,a[l]=r(t,l),l++;return{values:a,keys:n}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){let n=e._$AH,{values:a,keys:l}=this.dt(t,r,o);if(!Array.isArray(n))return this.ut=l,a;let c=this.ut??=[],d=[],h,p,u=0,g=n.length-1,f=0,m=a.length-1;for(;u<=g&&f<=m;)if(null===n[u])u++;else if(null===n[g])g--;else if(c[u]===l[f])d[f]=t6(n[u],a[f]),u++,f++;else if(c[g]===l[m])d[m]=t6(n[g],a[m]),g--,m--;else if(c[u]===l[m])d[m]=t6(n[u],a[m]),t3(e,d[m+1],n[u]),u++,m--;else if(c[g]===l[f])d[f]=t6(n[g],a[f]),t3(e,n[u],n[g]),g--,f++;else if(void 0===h&&(h=t8(l,f,m),p=t8(c,u,g)),h.has(c[u]))if(h.has(c[g])){let t=p.get(l[f]),r=void 0!==t?n[t]:null;if(null===r){let t=t3(e,n[u]);t6(t,a[f]),d[f]=t}else d[f]=t6(r,a[f]),t3(e,n[u],r),n[t]=null;f++}else t7(n[g]),g--;else t7(n[u]),u++;for(;f<=m;){let t=t3(e,d[m+1]);t6(t,a[f]),d[f++]=t}for(;u<=g;){let e=n[u++];null!==e&&t7(e)}return this.ut=l,((e,t=t9)=>e._$AH=t)(e,d),tM}});let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=tD,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tD||null==e)return this._t=void 0,this.it=e;if(e===tM)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let ie=t1(unsafe_html_e);function ii(e,t,r,o=!1,n){let a={name:"",relativePath:"",children:new Map,descendants:[]},l=e.reduce((e,o)=>{let n=e,a="";for(let e of t(o)){a=r(a,e),n.children??=new Map;let t=n.children.get(e);null==t&&(t={name:e,relativePath:a,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),n.descendants??=[],n.descendants.push(o),n=t}return n.value=o,e},a);return o&&(l=function e(t,r,o=!0,n){if(null==t.children)return t;let a=[...t.children.values()];for(let t of a)e(t,r,!1,n);if(!o&&null==t.value&&1===a.length){let e=a[0];if((null==e.value||n?.(e.value))&&(t.name=r(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value,null!=t.children))for(let e of t.children.values())e.parent=t}return t}(l,r,!0,n)),l}function ir(e,t){if(null==e)return 0;let r=0;for(let o of e)r+=t(o);return r}let io=navigator?.userAgentData?.platform,is=navigator.userAgent;"Linux"===io||is.includes("Linux");let ia="macOS"===io||is.includes("Macintosh");"Windows"===io||is.includes("Windows");let il=e8`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;e8`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${il}
	}
`;let ic=e8`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,id=e8`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;e8`
	:focus-visible {
		${ic}
	}
`;var ih=Object.defineProperty,ip=Object.defineProperties,iu=Object.getOwnPropertyDescriptor,ig=Object.getOwnPropertyDescriptors,im=Object.getOwnPropertySymbols,ib=Object.prototype.hasOwnProperty,iv=Object.prototype.propertyIsEnumerable,iy=e=>{throw TypeError(e)},iw=(e,t,r)=>t in e?ih(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ik=(e,t)=>{for(var r in t||(t={}))ib.call(t,r)&&iw(e,r,t[r]);if(im)for(var r of im(t))iv.call(t,r)&&iw(e,r,t[r]);return e},ix=(e,t)=>ip(e,ig(t)),i_=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?iu(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ih(t,r,a),a},i$=(e,t,r)=>t.has(e)||iy("Cannot "+r),iC=new Map,iA=new WeakMap;function iS(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iE(e,t){iC.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iP(e,t,r){let o=iA.get(e);if(null==o?void 0:o[t])return iS(o[t],r.dir);let n=iC.get(t);return n?iS(n,r.dir):{keyframes:[],options:{duration:0}}}var iR=e8`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,iT=e8`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let iO=new Set,iI=new Map,iL="ltr",iM="en",iD="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(iD){let e=new MutationObserver(iN);iL=document.documentElement.dir||"ltr",iM=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iz(...e){e.map(e=>{let r=e.$code.toLowerCase();iI.has(r)?iI.set(r,Object.assign(Object.assign({},iI.get(r)),e)):iI.set(r,e),t||(t=e)}),iN()}function iN(){iD&&(iL=document.documentElement.dir||"ltr",iM=document.documentElement.lang||navigator.language),[...iO.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iO.add(this.host)}hostDisconnected(){iO.delete(this.host)}dir(){return`${this.host.dir||iL}`.toLowerCase()}lang(){return`${this.host.lang||iM}`.toLowerCase()}getTranslationData(e){var t,r;let o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),a=null!=(r=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?r:"",l=iI.get(`${n}-${a}`),c=iI.get(n);return{locale:o,language:n,region:a,primary:l,secondary:c}}exists(e,r){var o;let{primary:n,secondary:a}=this.getTranslationData(null!=(o=r.lang)?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!n&&!!n[e]||!!a&&!!a[e]||!!r.includeFallback&&!!t&&!!t[e]}term(e,...r){let o,{primary:n,secondary:a}=this.getTranslationData(this.lang());if(n&&n[e])o=n[e];else if(a&&a[e])o=a[e];else{if(!t||!t[e])return String(e);o=t[e]}return"function"==typeof o?o(...r):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var iB={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};iz(iB);var iU=class extends LocalizeController{};iz(iB);var ij=e8`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,iH=class extends lit_element_i{constructor(){let e;super(),(e=d).has(this)?iy("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,ik({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let n=" (unknown version)",a=n;if("version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(a=" v"+o.version),n&&a&&n===a)return}attributeChangedCallback(e,t,r){let o,n;if(i$(this,o=d,"read from private field"),n?!n.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),i$(this,e=d,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}};d=new WeakMap,iH.version="2.20.1",iH.dependencies={},i_([tG()],iH.prototype,"dir",2),i_([tG()],iH.prototype,"lang",2);let iF=Math.min,iq=Math.max,iV=Math.round,iW=Math.floor,iG=e=>({x:e,y:e}),iK={left:"right",right:"left",bottom:"top",top:"bottom"},iZ={start:"end",end:"start"};function iX(e,t){return"function"==typeof e?e(t):e}function iQ(e){return e.split("-")[0]}function iY(e){return e.split("-")[1]}function iJ(e){return"x"===e?"y":"x"}function i0(e){return"y"===e?"height":"width"}function i1(e){return["top","bottom"].includes(iQ(e))?"y":"x"}function i2(e){return e.replace(/start|end/g,e=>iZ[e])}function i5(e){return e.replace(/left|right|bottom|top/g,e=>iK[e])}function i3(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function i6(e){let{x:t,y:r,width:o,height:n}=e;return{width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}function i9(e,t,r){let o,{reference:n,floating:a}=e,l=i1(t),c=iJ(i1(t)),d=i0(c),h=iQ(t),p="y"===l,u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,f=n[d]/2-a[d]/2;switch(h){case"top":o={x:u,y:n.y-a.height};break;case"bottom":o={x:u,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:g};break;case"left":o={x:n.x-a.width,y:g};break;default:o={x:n.x,y:n.y}}switch(iY(t)){case"start":o[c]-=f*(r&&p?-1:1);break;case"end":o[c]+=f*(r&&p?-1:1)}return o}let i7=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),d=await (null==l.isRTL?void 0:l.isRTL(t)),h=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:u}=i9(h,o,d),g=o,f={},m=0;for(let r=0;r<c.length;r++){let{name:a,fn:b}=c[r],{x:v,y:y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:o,placement:g,strategy:n,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:p,y:u}=i9(h,g,d)),r=-1)}return{x:p,y:u,placement:g,strategy:n,middlewareData:f}};async function i8(e,t){var r;void 0===t&&(t={});let{x:o,y:n,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=iX(t,e),m=i3(f),b=c[g?"floating"===u?"reference":"floating":u],v=i6(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(b)))||r?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{x:o,y:n,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await (null==a.isElement?void 0:a.isElement(w))&&await (null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=i6(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}async function i4(e,t){let{placement:r,platform:o,elements:n}=e,a=await (null==o.isRTL?void 0:o.isRTL(n.floating)),l=iQ(r),c=iY(r),d="y"===i1(r),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=iX(t,e),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}function re(){return"undefined"!=typeof window}function ri(e){return rn(e)?(e.nodeName||"").toLowerCase():"#document"}function rr(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ro(e){var t;return null==(t=(rn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rn(e){return!!re()&&(e instanceof Node||e instanceof rr(e).Node)}function rs(e){return!!re()&&(e instanceof Element||e instanceof rr(e).Element)}function ra(e){return!!re()&&(e instanceof HTMLElement||e instanceof rr(e).HTMLElement)}function rl(e){return!!re()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof rr(e).ShadowRoot)}function rc(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=rg(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function rd(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function rh(e){let t=rp(),r=rs(e)?rg(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function rp(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function ru(e){return["html","body","#document"].includes(ri(e))}function rg(e){return rr(e).getComputedStyle(e)}function rf(e){return rs(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rm(e){if("html"===ri(e))return e;let t=e.assignedSlot||e.parentNode||rl(e)&&e.host||ro(e);return rl(t)?t.host:t}function rb(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let n=function e(t){let r=rm(t);return ru(r)?t.ownerDocument?t.ownerDocument.body:t.body:ra(r)&&rc(r)?r:e(r)}(e),a=n===(null==(o=e.ownerDocument)?void 0:o.body),l=rr(n);if(a){let e=rv(l);return t.concat(l,l.visualViewport||[],rc(n)?n:[],e&&r?rb(e):[])}return t.concat(n,rb(n,[],r))}function rv(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ry(e){let t=rg(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=ra(e),a=n?e.offsetWidth:r,l=n?e.offsetHeight:o,c=iV(r)!==a||iV(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function rw(e){return rs(e)?e:e.contextElement}function rk(e){let t=rw(e);if(!ra(t))return iG(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:a}=ry(t),l=(a?iV(r.width):r.width)/o,c=(a?iV(r.height):r.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let rx=iG(0);function r_(e){let t=rr(e);return rp()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rx}function r$(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let a=e.getBoundingClientRect(),l=rw(e),c=iG(1);t&&(o?rs(o)&&(c=rk(o)):c=rk(e));let d=(void 0===(n=r)&&(n=!1),o&&(!n||o===rr(l))&&n)?r_(l):iG(0),h=(a.left+d.x)/c.x,p=(a.top+d.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let e=rr(l),t=o&&rs(o)?rr(o):o,r=e,n=rv(r);for(;n&&o&&t!==r;){let e=rk(n),t=n.getBoundingClientRect(),o=rg(n),a=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;h*=e.x,p*=e.y,u*=e.x,g*=e.y,h+=a,p+=l,n=rv(r=rr(n))}}return i6({width:u,height:g,x:h,y:p})}function rC(e,t){let r=rf(e).scrollLeft;return t?t.left+r:r$(ro(e)).left+r}function rA(e,t,r){void 0===r&&(r=!1);let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(r?0:rC(e,o)),y:o.top+t.scrollTop}}function rS(e,t,r){let o;if("viewport"===t)o=function(e,t){let r=rr(e),o=ro(e),n=r.visualViewport,a=o.clientWidth,l=o.clientHeight,c=0,d=0;if(n){a=n.width,l=n.height;let e=rp();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,d=n.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,r);else if("document"===t)o=function(e){let t=ro(e),r=rf(e),o=e.ownerDocument.body,n=iq(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=iq(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),l=-r.scrollLeft+rC(e),c=-r.scrollTop;return"rtl"===rg(o).direction&&(l+=iq(t.clientWidth,o.clientWidth)-n),{width:n,height:a,x:l,y:c}}(ro(e));else if(rs(t))o=function(e,t){let r=r$(e,!0,"fixed"===t),o=r.top+e.clientTop,n=r.left+e.clientLeft,a=ra(e)?rk(e):iG(1),l=e.clientWidth*a.x,c=e.clientHeight*a.y;return{width:l,height:c,x:n*a.x,y:o*a.y}}(t,r);else{let r=r_(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return i6(o)}function rE(e){return"static"===rg(e).position}function rP(e,t){if(!ra(e)||"fixed"===rg(e).position)return null;if(t)return t(e);let r=e.offsetParent;return ro(e)===r&&(r=r.ownerDocument.body),r}function rR(e,t){let r=rr(e);if(rd(e))return r;if(!ra(e)){let t=rm(e);for(;t&&!ru(t);){if(rs(t)&&!rE(t))return t;t=rm(t)}return r}let o=rP(e,t);for(;o&&["table","td","th"].includes(ri(o))&&rE(o);)o=rP(o,t);return o&&ru(o)&&rE(o)&&!rh(o)?r:o||function(e){let t=rm(e);for(;ra(t)&&!ru(t);){if(rh(t))return t;if(rd(t))break;t=rm(t)}return null}(e)||r}let rT=async function(e){let t=this.getOffsetParent||rR,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=ra(t),n=ro(t),a="fixed"===r,l=r$(e,!0,a,t),c={scrollLeft:0,scrollTop:0},d=iG(0);if(o||!o&&!a)if(("body"!==ri(t)||rc(n))&&(c=rf(t)),o){let e=r$(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=rC(n));a&&!o&&n&&(d.x=rC(n));let h=!n||o||a?iG(0):rA(n,c);return{x:l.left+c.scrollLeft-d.x-h.x,y:l.top+c.scrollTop-d.y-h.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},rO={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,a="fixed"===n,l=ro(o),c=!!t&&rd(t.floating);if(o===l||c&&a)return r;let d={scrollLeft:0,scrollTop:0},h=iG(1),p=iG(0),u=ra(o);if((u||!u&&!a)&&(("body"!==ri(o)||rc(l))&&(d=rf(o)),ra(o))){let e=r$(o);h=rk(o),p.x=e.x+o.clientLeft,p.y=e.y+o.clientTop}let g=!l||u||a?iG(0):rA(l,d,!0);return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-d.scrollLeft*h.x+p.x+g.x,y:r.y*h.y-d.scrollTop*h.y+p.y+g.y}},getDocumentElement:ro,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,a=[..."clippingAncestors"===r?rd(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=rb(e,[],!1).filter(e=>rs(e)&&"body"!==ri(e)),n=null,a="fixed"===rg(e).position,l=a?rm(e):e;for(;rs(l)&&!ru(l);){let t=rg(l),r=rh(l);r||"fixed"!==t.position||(n=null),(a?!r&&!n:!r&&"static"===t.position&&!!n&&["absolute","fixed"].includes(n.position)||rc(l)&&!r&&function e(t,r){let o=rm(t);return!(o===r||!rs(o)||ru(o))&&("fixed"===rg(o).position||e(o,r))}(e,l))?o=o.filter(e=>e!==l):n=t,l=rm(l)}return t.set(e,o),o}(t,this._c):[].concat(r),o],l=a[0],c=a.reduce((e,r)=>{let o=rS(t,r,n);return e.top=iq(o.top,e.top),e.right=iF(o.right,e.right),e.bottom=iF(o.bottom,e.bottom),e.left=iq(o.left,e.left),e},rS(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:rR,getElementRects:rT,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=ry(e);return{width:t,height:r}},getScale:rk,isElement:rs,isRTL:function(e){return"rtl"===rg(e).direction}};function rI(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let rL=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,o;let n,a,{placement:l,rects:c,platform:d,elements:h}=t,{apply:p=()=>{},...u}=iX(e,t),g=await i8(t,u),f=iQ(l),m=iY(l),b="y"===i1(l),{width:v,height:y}=c.floating;"top"===f||"bottom"===f?(n=f,a=m===(await (null==d.isRTL?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(a=f,n="end"===m?"top":"bottom");let w=y-g.top-g.bottom,k=v-g.left-g.right,x=iF(y-g[n],w),_=iF(v-g[a],k),C=!t.middlewareData.shift,A=x,S=_;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(S=k),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(A=w),C&&!m){let e=iq(g.left,0),t=iq(g.right,0),r=iq(g.top,0),o=iq(g.bottom,0);b?S=v-2*(0!==e||0!==t?e+t:iq(g.left,g.right)):A=y-2*(0!==r||0!==o?r+o:iq(g.top,g.bottom))}await p({...t,availableWidth:S,availableHeight:A});let E=await d.getDimensions(h.floating);return v!==E.width||y!==E.height?{reset:{rects:!0}}:{}}}},rM=t1(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return tM}});function rD(e){var t=e;for(let e=t;e;e=rz(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=rz(t);e;e=rz(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||rh(t)||"BODY"===e.tagName))return e}return null}function rz(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var rN=class extends iH{constructor(){super(...arguments),this.localize=new iU(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,n=0,a=0,l=0,c=0,d=0,h=0,p=0;r?e.top<t.top?(o=e.left,n=e.bottom,a=e.right,l=e.bottom,c=t.left,d=t.top,h=t.right,p=t.top):(o=t.left,n=t.bottom,a=t.right,l=t.bottom,c=e.left,d=e.top,h=e.right,p=e.top):e.left<t.left?(o=e.right,n=e.top,a=t.left,l=t.top,c=e.right,d=e.bottom,h=t.left,p=t.bottom):(o=t.right,n=t.top,a=e.left,l=e.top,c=t.right,d=t.bottom,h=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,r,o){let n;void 0===o&&(o={});let{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:h=!1}=o,p=rw(e),u=a||l?[...p?rb(p):[],...rb(t)]:[];u.forEach(e=>{a&&e.addEventListener("scroll",r,{passive:!0}),l&&e.addEventListener("resize",r)});let g=p&&d?function(e,t){let r,o=null,n=ro(e);function a(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return!function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();let h=e.getBoundingClientRect(),{left:p,top:u,width:g,height:f}=h;if(c||t(),!g||!f)return;let m=iW(u),b=iW(n.clientWidth-(p+g)),v={rootMargin:-m+"px "+-b+"px "+-iW(n.clientHeight-(u+f))+"px "+-iW(p)+"px",threshold:iq(0,iF(1,d))||1},y=!0;function w(t){let o=t[0].intersectionRatio;if(o!==d){if(!y)return l();o?l(!1,o):r=setTimeout(()=>{l(!1,1e-7)},1e3)}1!==o||rI(h,e.getBoundingClientRect())||l(),y=!1}try{o=new IntersectionObserver(w,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(w,v)}o.observe(e)}(!0),a}(p,r):null,f=-1,m=null;c&&(m=new ResizeObserver(e=>{let[o]=e;o&&o.target===p&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),r()}),p&&!h&&m.observe(p),m.observe(t));let b=h?r$(e):null;return h&&function t(){let o=r$(e);b&&!rI(b,o)&&r(),b=o,n=requestAnimationFrame(t)}(),r(),()=>{var e;u.forEach(e=>{a&&e.removeEventListener("scroll",r),l&&e.removeEventListener("resize",r)}),null==g||g(),null==(e=m)||e.disconnect(),m=null,h&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r;let o;if(!this.active||!this.anchorEl)return;let n=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,o;let{x:n,y:a,placement:l,middlewareData:c}=t,d=await i4(t,e);return l===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:n+d.x,y:a+d.y,data:{...d,placement:l}}}}];this.sync?n.push(rL({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&n.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,o,n,a,l;let{placement:c,middlewareData:d,rects:h,initialPlacement:p,platform:u,elements:g}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=iX(t,e);if(null!=(r=d.arrow)&&r.alignmentOffset)return{};let x=iQ(c),_=i1(p),C=iQ(p)===p,A=await (null==u.isRTL?void 0:u.isRTL(g.floating)),S=b||(C||!w?[i5(p)]:function(e){let t=i5(e);return[i2(e),t,i2(t)]}(p)),E="none"!==y;!b&&E&&S.push(...function(e,t,r,o){let n=iY(e),a=function(e,t,r){let o=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":if(r)return t?n:o;return t?o:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(iQ(e),"start"===r,o);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(i2)))),a}(p,w,y,A));let P=[p,...S],R=await i8(e,k),T=[],O=(null==(o=d.flip)?void 0:o.overflows)||[];if(f&&T.push(R[x]),m){let e=function(e,t,r){void 0===r&&(r=!1);let o=iY(e),n=iJ(i1(e)),a=i0(n),l="x"===n?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=i5(l)),[l,i5(l)]}(c,h,A);T.push(R[e[0]],R[e[1]])}if(O=[...O,{placement:c,overflows:T}],!T.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=P[e];if(t&&("alignment"!==m||_===i1(t)||O.every(e=>e.overflows[0]>0&&i1(e.placement)===_)))return{data:{index:e,overflows:O},reset:{placement:t}};let r=null==(a=O.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!r)switch(v){case"bestFit":{let e=null==(l=O.filter(e=>{if(E){let t=i1(e.placement);return t===_||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(r=e);break}case"initialPlacement":r=p}if(c!==r)return{reset:{placement:r}}}return{}}}),this.shift&&n.push({name:"shift",options:r={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:n}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...d}=iX(r,e),h={x:t,y:o},p=await i8(e,d),u=i1(iQ(n)),g=iJ(u),f=h[g],m=h[u];if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",r=f+p[e],o=f-p[t];f=iq(r,iF(f,o))}if(l){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",r=m+p[e],o=m-p[t];m=iq(r,iF(m,o))}let b=c.fn({...e,[g]:f,[u]:m});return{...b,data:{x:b.x-t,y:b.y-o,enabled:{[g]:a,[u]:l}}}}}),this.autoSize?n.push(rL({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push({name:"arrow",options:o={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:r,placement:n,rects:a,platform:l,elements:c,middlewareData:d}=e,{element:h,padding:p=0}=iX(o,e)||{};if(null==h)return{};let u=i3(p),g={x:t,y:r},f=iJ(i1(n)),m=i0(f),b=await l.getDimensions(h),v="y"===f,y=v?"clientHeight":"clientWidth",w=a.reference[m]+a.reference[f]-g[f]-a.floating[m],k=g[f]-a.reference[f],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(h)),_=x?x[y]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[y]||a.floating[m]);let C=_/2-b[m]/2-1,A=iF(u[v?"top":"left"],C),S=iF(u[v?"bottom":"right"],C),E=_-b[m]-S,P=_/2-b[m]/2+(w/2-k/2),R=iq(A,iF(P,E)),T=!d.arrow&&null!=iY(n)&&P!==R&&a.reference[m]/2-(P<A?A:S)-b[m]/2<0,O=T?P<A?P-A:P-E:0;return{[f]:g[f]+O,data:{[f]:R,centerOffset:P-R-O,...T&&{alignmentOffset:O}},reset:T}}});let a="absolute"===this.strategy?e=>rO.getOffsetParent(e,rD):rO.getOffsetParent;((e,t,r)=>{let o=new Map,n={platform:rO,...r},a={...n.platform,_c:o};return i7(e,t,{...n,platform:a})})(this.anchorEl,this.popup,{placement:this.placement,middleware:n,strategy:this.strategy,platform:ix(ik({},rO),{getOffsetParent:a})}).then(({x:e,y:t,middlewareData:r,placement:o})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,o="",l="",c="",d="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=n?r:"",d=n?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=n?"":r,d=n?r:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:l,bottom:c,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return tL`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${rM({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${rM({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?tL`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function rB(e,t){return new Promise(r=>{e.addEventListener(t,function o(n){n.target===e&&(e.removeEventListener(t,o),r())})})}function rU(e,t,r){return new Promise(o=>{if((null==r?void 0:r.duration)===1/0)throw Error("Promise-based animations must be finite.");let n=e.animate(t,ix(ik({},r),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:r.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function rj(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function rH(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function rF(e,t){let r=ik({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:n}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let n=e.get(t),a=this[t];n!==a&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](n,a)}}),n.call(this,e)}}}rN.styles=[ij,iT],i_([tX(".popup")],rN.prototype,"popup",2),i_([tX(".popup__arrow")],rN.prototype,"arrowEl",2),i_([tG()],rN.prototype,"anchor",2),i_([tG({type:Boolean,reflect:!0})],rN.prototype,"active",2),i_([tG({reflect:!0})],rN.prototype,"placement",2),i_([tG({reflect:!0})],rN.prototype,"strategy",2),i_([tG({type:Number})],rN.prototype,"distance",2),i_([tG({type:Number})],rN.prototype,"skidding",2),i_([tG({type:Boolean})],rN.prototype,"arrow",2),i_([tG({attribute:"arrow-placement"})],rN.prototype,"arrowPlacement",2),i_([tG({attribute:"arrow-padding",type:Number})],rN.prototype,"arrowPadding",2),i_([tG({type:Boolean})],rN.prototype,"flip",2),i_([tG({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],rN.prototype,"flipFallbackPlacements",2),i_([tG({attribute:"flip-fallback-strategy"})],rN.prototype,"flipFallbackStrategy",2),i_([tG({type:Object})],rN.prototype,"flipBoundary",2),i_([tG({attribute:"flip-padding",type:Number})],rN.prototype,"flipPadding",2),i_([tG({type:Boolean})],rN.prototype,"shift",2),i_([tG({type:Object})],rN.prototype,"shiftBoundary",2),i_([tG({attribute:"shift-padding",type:Number})],rN.prototype,"shiftPadding",2),i_([tG({attribute:"auto-size"})],rN.prototype,"autoSize",2),i_([tG()],rN.prototype,"sync",2),i_([tG({type:Object})],rN.prototype,"autoSizeBoundary",2),i_([tG({attribute:"auto-size-padding",type:Number})],rN.prototype,"autoSizePadding",2),i_([tG({attribute:"hover-bridge",type:Boolean})],rN.prototype,"hoverBridge",2);var rq=class extends iH{constructor(){super(),this.localize=new iU(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=rj(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=rj(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await rH(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=iP(this,"tooltip.show",{dir:this.localize.dir()});await rU(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await rH(this.body);let{keyframes:e,options:r}=iP(this,"tooltip.hide",{dir:this.localize.dir()});await rU(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,rB(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rB(this,"sl-after-hide")}render(){return tL`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${rM({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};rq.styles=[ij,iR],rq.dependencies={"sl-popup":rN},i_([tX("slot:not([name])")],rq.prototype,"defaultSlot",2),i_([tX(".tooltip__body")],rq.prototype,"body",2),i_([tX("sl-popup")],rq.prototype,"popup",2),i_([tG()],rq.prototype,"content",2),i_([tG()],rq.prototype,"placement",2),i_([tG({type:Boolean,reflect:!0})],rq.prototype,"disabled",2),i_([tG({type:Number})],rq.prototype,"distance",2),i_([tG({type:Boolean,reflect:!0})],rq.prototype,"open",2),i_([tG({type:Number})],rq.prototype,"skidding",2),i_([tG()],rq.prototype,"trigger",2),i_([tG({type:Boolean})],rq.prototype,"hoist",2),i_([rF("open",{waitUntilFirstUpdate:!0})],rq.prototype,"handleOpenChange",1),i_([rF(["content","distance","hoist","placement","skidding"])],rq.prototype,"handleOptionsChange",1),i_([rF("disabled")],rq.prototype,"handleDisabledChange",1),iE("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iE("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),rq.define("sl-tooltip");var rV=Object.defineProperty,rW=Object.getOwnPropertyDescriptor,rG=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?rW(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&rV(t,r,a),a};iE("tooltip.show",null),iE("tooltip.hide",null);let rK=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var e;return tL`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??tD}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?ie(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};rK.styles=e8`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,rG([tG()],rK.prototype,"content",2),rG([tG({reflect:!0})],rK.prototype,"placement",2),rG([tG({type:Boolean})],rK.prototype,"disabled",2),rG([tG({type:Number})],rK.prototype,"distance",2),rG([tG({type:Boolean})],rK.prototype,"hoist",2),rK=rG([tV("gl-tooltip")],rK);let rZ=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),rX=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142"});var rQ=Object.defineProperty,rY=Object.getOwnPropertyDescriptor,rJ=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?rY(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&rQ(t,r,a),a};function r0(e,t=""){return e7(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let r1=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};r1.styles=e8`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${r0(rZ)}
		${r0(rX,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,rJ([tG({reflect:!0})],r1.prototype,"icon",2),rJ([tG({reflect:!0})],r1.prototype,"modifier",2),rJ([tG({type:Number})],r1.prototype,"size",2),rJ([tG({reflect:!0})],r1.prototype,"flip",2),rJ([tG({reflect:!0})],r1.prototype,"rotate",2),r1=rJ([tV("code-icon")],r1);var r2=Object.defineProperty,r5=Object.getOwnPropertyDescriptor,r3=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?r5(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&r2(t,r,a),a};let r6=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${ia?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return tL`
			<gl-tooltip hoist content="${this.effectiveTooltip??tD}">
				<a
					role="${!this.effectiveHref?"button":tD}"
					type="${!this.effectiveHref?"button":tD}"
					aria-label="${this.effectiveLabel??tD}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??tD}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};r6.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},r6.styles=e8`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${ic}
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
		a:focus {
			outline: none;
		}
	`,r3([tG()],r6.prototype,"href",2),r3([tG({attribute:"alt-href"})],r6.prototype,"altHref",2),r3([tG()],r6.prototype,"label",2),r3([tG({attribute:"alt-label"})],r6.prototype,"altLabel",2),r3([tG()],r6.prototype,"icon",2),r3([tG({attribute:"alt-icon"})],r6.prototype,"altIcon",2),r3([tG({type:Boolean})],r6.prototype,"disabled",2),r3([tX("a")],r6.prototype,"defaultFocusEl",2),r3([tK()],r6.prototype,"isAltKeyPressed",2),r6=r3([tV("action-item")],r6);let r9={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var r7=Object.defineProperty,r8=Object.getOwnPropertyDescriptor,r4=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?r8(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&r7(t,r,a),a};let oe=class extends lit_element_i{get statusName(){return this.status?r9[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return tL`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};oe.styles=[e8`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],r4([tG()],oe.prototype,"status",2),r4([tK()],oe.prototype,"statusName",1),oe=r4([tV("gl-git-status")],oe);let oi=e8`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;e8`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${ic}
	}
	a:hover {
		text-decoration: underline;
	}
`;let or=e8`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;e8`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let oo=[oi,e8``],on=[oi,e8`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host(:hover),
		:host(:focus-within) {
			content-visibility: visible;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var os=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,ol=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oa(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&os(t,r,a),a};let oc=class extends lit_element_i{disconnectedCallback(){super.disconnectedCallback?.(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return tL`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;let e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),r=this.handleSelected.bind(this),o=this.treeItems.map(o=>(o.addEventListener("keydown",e,!1),o.addEventListener("gl-tree-item-select",t,!1),o.addEventListener("gl-tree-item-selected",r,!1),{dispose:function(){o?.removeEventListener("keydown",e,!1),o?.removeEventListener("gl-tree-item-select",t,!1),o?.removeEventListener("gl-tree-item-selected",r,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target)return;let t=e.target;if("ArrowUp"===e.key){let e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){let e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;let t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;let t=e.target,r=t.level,o=t.nextElementSibling;for(;o&&r!==o.level;){let t=function(e){let t=e.level,r=e.previousElementSibling;for(;r;){if(r.level<t)return r;r=r.previousElementSibling}}(o);o.parentExpanded=t?.expanded!==!1,o.expanded=e.detail.node.expanded,o=o.nextElementSibling}}};oc.styles=oo,ol([tG({reflect:!0})],oc.prototype,"guides",2),ol([tQ({flatten:!0})],oc.prototype,"treeItems",2),oc=ol([tV("gl-tree")],oc);var od=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,op=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oh(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&od(t,r,a),a};let ou=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return tL`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",r),e.setAttribute("tabindex",0===o?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,r=parseInt(t.getAttribute("aria-posinset")??"0",10),o=null;if("ArrowLeft"===e.key){let e=1===r?this.actionNodes.length-1:r-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=r===this.actionNodes.length?0:r;o=this.actionNodes[e]}null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};ou.styles=e8`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,op([tQ({flatten:!0})],ou.prototype,"actionNodes",2),ou=op([tV("action-nav")],ou);var og=Object.defineProperty,of=Object.getOwnPropertyDescriptor,om=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?of(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&og(t,r,a),a};let ob=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClick=e=>{this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return tD;let t=[];if(e>0)for(let r=0;r<e;r++)t.push(tL`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(tL`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?tL`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:tD}renderActions(){return tL`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return tL`<slot name="decorations" class="decorations"></slot>`}render(){return tL`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${tY(this.showIcon,()=>tL`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};ob.styles=on,om([tG({type:Boolean})],ob.prototype,"branch",2),om([tG({type:Boolean})],ob.prototype,"expanded",2),om([tG({type:String})],ob.prototype,"path",2),om([tG({type:String,attribute:"parent-path"})],ob.prototype,"parentPath",2),om([tG({type:Boolean,attribute:"parent-expanded"})],ob.prototype,"parentExpanded",2),om([tG({type:Number})],ob.prototype,"level",2),om([tG({type:Number})],ob.prototype,"size",2),om([tG({type:Number})],ob.prototype,"position",2),om([tG({type:Boolean})],ob.prototype,"checkable",2),om([tG({type:Boolean})],ob.prototype,"checked",2),om([tG({type:Boolean})],ob.prototype,"disableCheck",2),om([tG({type:Boolean})],ob.prototype,"showIcon",2),om([tK()],ob.prototype,"selected",2),om([tK()],ob.prototype,"focused",2),om([tX("#button")],ob.prototype,"buttonEl",2),ob=om([tV("gl-tree-item")],ob);var ov=Object.defineProperty,oy=Object.getOwnPropertyDescriptor,ow=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oy(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ov(t,r,a),a};let ok=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){let t;if(this._model!==e){if(this._model=e,null!=this._model){let e=this._model.length;t=this._model.reduce((t,r,o)=>(t.push(...function e(t,r=1,o=1){let n={size:r,position:o};for(let[e,r]of Object.entries(t))null!=r&&"children"!==e&&(n[e]=r);let a=[n];if(null!=t.children&&t.children.length>0){let r=t.children.length;for(let o=0;o<r;o++)a.push(...e(t.children[o],r,o+1))}return a}(r,e,o+1)),t),[])}this.treeItems=t}}get model(){return this._model}renderIcon(e){return null==e?tD:"string"==typeof e?tL`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?tD:tL`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?tD:t.map(t=>tL`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${r=>this.onTreeItemActionClicked(r,e,t)}
				@dblclick=${r=>this.onTreeItemActionDblClicked(r,e,t)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?tD:t.map(e=>"icon"===e.type?tL`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?tL`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){return tL`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${tY(null!=e.description,()=>tL`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map(e=>this.renderTreeItem(e))}render(){return tL`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,r){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:r,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onTreeItemActionDblClicked(e,t,r){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:r,dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};ok.styles=e8`
		:host {
			display: contents;
		}
	`,ow([tK()],ok.prototype,"treeItems",2),ow([tG({reflect:!0})],ok.prototype,"guides",2),ow([tG({type:Array,attribute:!1})],ok.prototype,"model",1),ok=ow([tV("gl-tree-generator")],ok);var ox=Object.defineProperty,o_=Object.getOwnPropertyDescriptor,o$=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?o_(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ox(t,r,a),a};let oC=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return tL`<div class="skeleton" style=${e}></div>`}};oC.styles=e8`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,o$([tG({type:Number})],oC.prototype,"lines",2),oC=o$([tV("skeleton-loader")],oC);let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return tL`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return tD;let t="tree",r="list-tree",o="View as Tree";switch(e){case"auto":t="list",r="gl-list-auto",o="View as List";break;case"list":t="tree",r="list-flat",o="View as Tree";break;case"tree":t="auto",r="list-tree",o="View as Auto"}return tL`<action-item data-switch-value="${t}" label="${o}" icon="${r}"></action-item>`}renderTreeView(e,t="none"){return tL`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,r=!1,o=2){let n=[];if(t){let t=ii(e,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:o});n.push(t)}}else for(let t of e){let e=this.fileToTreeModel(t,{level:o,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let r;if(void 0===t.level&&(t.level=1),r=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let o=[];for(let r of e.children.values()){let e=this.walkFileTree(r,{...t,level:t.level+1});o.push(e)}o.length>0&&(r.branch=!0,r.children=o)}return r}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,r){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,r,o){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:o,context:[t],actions:this.getRepoActions(e,t,r),...r}}getFileActions(e,t){return[]}fileToTreeModel(e,t,r=!1,o="/"){let n=e.path.lastIndexOf(o),a=-1!==n?e.path.substring(n+1):e.path,l=r&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===r?l:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}};let oA=e8`
	.badge {
		display: inline-flex;
		font-size: var(--gl-badge-font-size, x-small);
		font-variant: all-small-caps;
		font-weight: 600;
		color: var(--gl-badge-color, var(--color-foreground--50));
		border: currentColor 1px solid;
		border-radius: 1rem;
		padding: 0 0.8rem 0.1rem;
		white-space: nowrap;
	}
`;var oS=Object.defineProperty,oE=Object.getOwnPropertyDescriptor;let oP=class extends lit_element_i{render(){return tL`<slot class="badge" part="base"></slot>`}};oP.styles=[oA],oP=((e,t,r,o)=>{for(var n,a=o>1?void 0:o?oE(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oS(t,r,a),a})([tV("gl-badge")],oP);var oR=Object.defineProperty,oT=Object.getOwnPropertyDescriptor,oO=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oT(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oR(t,r,a),a};let oI=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return tL`<div class="group"><slot></slot></div>`}};oI.styles=[oi,e8`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],oO([tG({type:Boolean})],oI.prototype,"editor",2),oO([tG({reflect:!0})],oI.prototype,"layout",2),oO([tG({reflect:!0})],oI.prototype,"grouping",2),oI=oO([tV("button-container")],oI);var oL=Object.defineProperty,oM=Object.getOwnPropertyDescriptor,oD=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oM(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oL(t,r,a),a};let oz=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?tL`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??tD}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?tL`<gl-tooltip placement=${this.tooltipPlacement??tD}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?tL`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??tD}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:tL`<button
			class="control"
			role=${this.role??tD}
			aria-checked=${this.ariaChecked??tD}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};oz.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oz.styles=[oi,e8`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${id}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],oD([tX(".control")],oz.prototype,"control",2),oD([tG({reflect:!0})],oz.prototype,"appearance",2),oD([tG({type:Boolean,reflect:!0})],oz.prototype,"disabled",2),oD([tG({reflect:!0})],oz.prototype,"density",2),oD([tG({type:Boolean,reflect:!0})],oz.prototype,"full",2),oD([tG()],oz.prototype,"href",2),oD([tG()],oz.prototype,"tooltip",2),oD([tG()],oz.prototype,"tooltipPlacement",2),oD([tG({type:Boolean,reflect:!0})],oz.prototype,"truncate",2),oz=oD([tV("gl-button")],oz);let oN=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),oN(e,t);return!0},oB=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},oU=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),oF(t)}};function oj(e){void 0!==this._$AN?(oB(this),this._$AM=e,oU(this)):this._$AM=e}function oH(e,t=!1,r=0){let o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)oN(o[e],!1),oB(o[e]);else null!=o&&(oN(o,!1),oB(o));else oN(this,e)}let oF=e=>{2==e.type&&(e._$AP??=oH,e._$AQ??=oj)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),oU(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(oN(this,e),oB(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let oq=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!oq(e))??tM}update(e,t){let r=this._$Cbt,o=r.length;this._$Cbt=t;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let l=t[e];if(!oq(l))return this._$Cwt=e,l;e<o&&l===r[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(l).then(async e=>{for(;a.get();)await a.get();let t=n.deref();if(void 0!==t){let r=t._$Cbt.indexOf(l);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return tM}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let oV=t1(until_c);function oW(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var oG=oW(),oK={exec:()=>null};function oZ(e,t=""){let r="string"==typeof e?e:e.source,o={replace:(e,t)=>{let n="string"==typeof t?t:t.source;return n=n.replace(oX.caret,"$1"),r=r.replace(e,n),o},getRegex:()=>new RegExp(r,t)};return o}var oX={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},oQ=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,oY=/(?:[*+-]|\d{1,9}[.)])/,oJ=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,o0=oZ(oJ).replace(/bull/g,oY).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),o1=oZ(oJ).replace(/bull/g,oY).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),o2=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,o5=/(?!\s*\])(?:\\.|[^\[\]\\])+/,o3=oZ(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",o5).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),o6=oZ(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,oY).getRegex(),o9="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",o7=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,o8=oZ("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",o7).replace("tag",o9).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),o4=oZ(o2).replace("hr",oQ).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o9).getRegex(),ne={blockquote:oZ(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",o4).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:o3,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:oQ,html:o8,lheading:o0,list:o6,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:o4,table:oK,text:/^[^\n]+/},ni=oZ("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",oQ).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o9).getRegex(),nr={...ne,lheading:o1,table:ni,paragraph:oZ(o2).replace("hr",oQ).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ni).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o9).getRegex()},no={...ne,html:oZ(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",o7).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:oK,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:oZ(o2).replace("hr",oQ).replace("heading",` *#{1,6} *[^
]`).replace("lheading",o0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nn=/^( {2,}|\\)\n(?!\s*$)/,ns=/[\p{P}\p{S}]/u,na=/[\s\p{P}\p{S}]/u,nl=/[^\s\p{P}\p{S}]/u,nc=oZ(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,na).getRegex(),nd=/(?!~)[\p{P}\p{S}]/u,nh=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,np=oZ(nh,"u").replace(/punct/g,ns).getRegex(),nu=oZ(nh,"u").replace(/punct/g,nd).getRegex(),ng="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",nf=oZ(ng,"gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,na).replace(/punct/g,ns).getRegex(),nm=oZ(ng,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,nd).getRegex(),nb=oZ("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,na).replace(/punct/g,ns).getRegex(),nv=oZ(/\\(punct)/,"gu").replace(/punct/g,ns).getRegex(),ny=oZ(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nw=oZ(o7).replace("(?:--\x3e|$)","--\x3e").getRegex(),nk=oZ("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nw).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),nx=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,n_=oZ(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",nx).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),n$=oZ(/^!?\[(label)\]\[(ref)\]/).replace("label",nx).replace("ref",o5).getRegex(),nC=oZ(/^!?\[(ref)\](?:\[\])?/).replace("ref",o5).getRegex(),nA=oZ("reflink|nolink(?!\\()","g").replace("reflink",n$).replace("nolink",nC).getRegex(),nS={_backpedal:oK,anyPunctuation:nv,autolink:ny,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:nn,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:oK,emStrongLDelim:np,emStrongRDelimAst:nf,emStrongRDelimUnd:nb,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:n_,nolink:nC,punctuation:nc,reflink:n$,reflinkSearch:nA,tag:nk,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:oK},nE={...nS,link:oZ(/^!?\[(label)\]\((.*?)\)/).replace("label",nx).getRegex(),reflink:oZ(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",nx).getRegex()},nP={...nS,emStrongRDelimAst:nm,emStrongLDelim:nu,url:oZ(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},nR={...nP,br:oZ(nn).replace("{2,}","*").getRegex(),text:oZ(nP.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},nT={normal:ne,gfm:nr,pedantic:no},nO={normal:nS,gfm:nP,breaks:nR,pedantic:nE},nI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nL=e=>nI[e];function nM(e,t){if(t){if(oX.escapeTest.test(e))return e.replace(oX.escapeReplace,nL)}else if(oX.escapeTestNoEncode.test(e))return e.replace(oX.escapeReplaceNoEncode,nL);return e}function nD(e){try{e=encodeURI(e).replace(oX.percentDecode,"%")}catch{return null}return e}function nz(e,t){let r=e.replace(oX.findPipe,(e,t,r)=>{let o=!1,n=t;for(;--n>=0&&"\\"===r[n];)o=!o;return o?"|":" |"}).split(oX.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(oX.slashPipe,"|");return r}function nN(e,t,r){let o=e.length;if(0===o)return"";let n=0;for(;n<o;){let a=e.charAt(o-n-1);if(a!==t||r)if(a!==t&&r)n++;else break;else n++}return e.slice(0,o-n)}function nB(e,t,r,o,n){let a=t.href,l=t.title||null,c=e[1].replace(n.other.outputLinkReplace,"$1");o.state.inLink=!0;let d={type:"!"===e[0].charAt(0)?"image":"link",raw:r,href:a,title:l,text:c,tokens:o.inlineTokens(c)};return o.state.inLink=!1,d}var nU=class{options;rules;lexer;constructor(e){this.options=e||oG}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:nN(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=function(e,t,r){let o=e.match(r.other.indentCodeCompensation);if(null===o)return t;let n=o[1];return t.split(`
`).map(e=>{let t=e.match(r.other.beginningSpace);if(null===t)return e;let[o]=t;return o.length>=n.length?e.slice(n.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=nN(e,"#");this.options.pedantic?e=t.trim():(!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:nN(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=nN(t[0],`
`).split(`
`),r="",o="",n=[];for(;e.length>0;){let t,a=!1,l=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))l.push(e[t]),a=!0;else if(a)break;else l.push(e[t]);e=e.slice(t);let c=l.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,n,!0),this.lexer.state.top=h,0===e.length)break;let p=n.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let t=p.raw+`
`+e.join(`
`),a=this.blockquote(t);n[n.length-1]=a,r=r.substring(0,r.length-p.raw.length)+a.raw,o=o.substring(0,o.length-p.text.length)+a.text;break}if(p?.type==="list"){let t=p.raw+`
`+e.join(`
`),a=this.list(t);n[n.length-1]=a,r=r.substring(0,r.length-p.raw.length)+a.raw,o=o.substring(0,o.length-p.raw.length)+a.raw,e=t.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:n,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),o=r.length>1,n={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");let a=this.rules.other.listItemRegex(r),l=!1;for(;e;){let r,o=!1,c="",d="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),p=e.split(`
`,1)[0],u=!h.trim(),g=0;if(this.options.pedantic?(g=2,d=h.trimStart()):u?g=t[1].length+1:(g=(g=t[2].search(this.rules.other.nonSpaceChar))>4?1:g,d=h.slice(g),g+=t[1].length),u&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,e=e.substring(p.length+1),o=!0),!o){let t=this.rules.other.nextBulletRegex(g),r=this.rules.other.hrRegex(g),o=this.rules.other.fencesBeginRegex(g),n=this.rules.other.headingBeginRegex(g),a=this.rules.other.htmlBeginRegex(g);for(;e;){let l,f=e.split(`
`,1)[0];if(p=f,l=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),o.test(p)||n.test(p)||a.test(p)||t.test(p)||r.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=g||!p.trim())d+=`
`+l.slice(g);else{if(u||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(h)||n.test(h)||r.test(h))break;d+=`
`+p}u||p.trim()||(u=!0),c+=f+`
`,e=e.substring(f.length+1),h=l.slice(g)}}!n.loose&&(l?n.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(l=!0));let f=null;this.options.gfm&&(f=this.rules.other.listIsTask.exec(d))&&(r="[ ] "!==f[0],d=d.replace(this.rules.other.listReplaceTask,"")),n.items.push({type:"list_item",raw:c,task:!!f,checked:r,loose:!1,text:d,tokens:[]}),n.raw+=c}let c=n.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),n.raw=n.raw.trimEnd();for(let e=0;e<n.items.length;e++)if(this.lexer.state.top=!1,n.items[e].tokens=this.lexer.blockTokens(n.items[e].text,[]),!n.loose){let t=n.items[e].tokens.filter(e=>"space"===e.type);n.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(n.loose)for(let e=0;e<n.items.length;e++)n.items[e].loose=!0;return n}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=nz(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===o.length){for(let e of o)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<r.length;e++)a.header.push({text:r[e],tokens:this.lexer.inline(r[e]),header:!0,align:a.align[e]});for(let e of n)a.rows.push(nz(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=`
`===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=nN(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let r=0;for(let o=0;o<e.length;o++)if("\\"===e[o])o++;else if("("===e[o])r++;else if(e[o]===t[1]&&--r<0)return o;return r>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],o="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(r);e&&(r=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(r=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r.slice(1):r.slice(1,-1)),nB(t,{href:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r,title:o?o.replace(this.rules.inline.anyPunctuation,"$1"):o},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=t[(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return nB(r,e,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!(!o||o[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!r||this.rules.inline.punctuation.exec(r))){let r=[...o[0]].length-1,n,a,l=r,c=0,d="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+r);null!=(o=d.exec(t));){if(!(n=o[1]||o[2]||o[3]||o[4]||o[5]||o[6]))continue;if(a=[...n].length,o[3]||o[4]){l+=a;continue}if((o[5]||o[6])&&r%3&&!((r+a)%3)){c+=a;continue}if((l-=a)>0)continue;a=Math.min(a,a+l+c);let t=[...o[0]][0].length,d=e.slice(0,r+o.index+t+a);if(Math.min(r,a)%2){let e=d.slice(1,-1);return{type:"em",raw:d,text:e,tokens:this.lexer.inlineTokens(e)}}let h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(e),o=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&o&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,r;return r="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,r;if("@"===t[2])r="mailto:"+(e=t[0]);else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0])e=t[0],r="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},nj=class __Lexer{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||oG,this.options.tokenizer=this.options.tokenizer||new nU,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:oX,block:nT.normal,inline:nO.normal};this.options.pedantic?(t.block=nT.pedantic,t.inline=nO.pedantic):this.options.gfm&&(t.block=nT.gfm,this.options.breaks?t.inline=nO.breaks:t.inline=nO.gfm),this.tokenizer.rules=t}static get rules(){return{block:nT,inline:nO}}static lex(e,t){return new __Lexer(t).lex(e)}static lexInline(e,t){return new __Lexer(t).inlineTokens(e)}lex(e){e=e.replace(oX.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(oX.tabCharGlobal,"    ").replace(oX.spaceLine,""));e;){let o;if(this.options.extensions?.block?.some(r=>!!(o=r.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let r=t.at(-1);1===o.raw.length&&void 0!==r?r.raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=`
`+o.raw,r.text+=`
`+o.text,this.inlineQueue.at(-1).src=r.text):t.push(o);continue}if((o=this.tokenizer.fences(e))||(o=this.tokenizer.heading(e))||(o=this.tokenizer.hr(e))||(o=this.tokenizer.blockquote(e))||(o=this.tokenizer.list(e))||(o=this.tokenizer.html(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=`
`+o.raw,r.text+=`
`+o.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if((o=this.tokenizer.table(e))||(o=this.tokenizer.lheading(e))){e=e.substring(o.raw.length),t.push(o);continue}let n=e;if(this.options.extensions?.startBlock){let t,r=1/0,o=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},o))&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(n=e.substring(0,r+1))}if(this.state.top&&(o=this.tokenizer.paragraph(n))){let a=t.at(-1);r&&a?.type==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(o),r=n.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="text"?(r.raw+=`
`+o.raw,r.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,o=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(r));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.anyPunctuation.exec(r));)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(r));)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let n=!1,a="";for(;e;){let o;if(n||(a=""),n=!1,this.options.extensions?.inline?.some(r=>!!(o=r.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let r=t.at(-1);"text"===o.type&&r?.type==="text"?(r.raw+=o.raw,r.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,r,a))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let l=e;if(this.options.extensions?.startInline){let t,r=1/0,o=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},o))&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(l=e.substring(0,r+1))}if(o=this.tokenizer.inlineText(l)){e=e.substring(o.raw.length),"_"!==o.raw.slice(-1)&&(a=o.raw.slice(-1)),n=!0;let r=t.at(-1);r?.type==="text"?(r.raw+=o.raw,r.text+=o.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},nH=class{options;parser;constructor(e){this.options=e||oG}space(e){return""}code({text:e,lang:t,escaped:r}){let o=(t||"").match(oX.notSpaceStart)?.[0],n=e.replace(oX.endingNewline,"")+`
`;return o?'<pre><code class="language-'+nM(o)+'">'+(r?n:nM(n,!0))+`</code></pre>
`:"<pre><code>"+(r?n:nM(n,!0))+`</code></pre>
`}blockquote({tokens:e}){let t=this.parser.parse(e);return`<blockquote>
${t}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,r=e.start,o="";for(let t=0;t<e.items.length;t++){let r=e.items[t];o+=this.listitem(r)}let n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+`>
`+o+"</"+n+`>
`}listitem(e){let t="";if(e.task){let r=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=r+" "+nM(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",r="";for(let t=0;t<e.header.length;t++)r+=this.tablecell(e.header[t]);t+=this.tablerow({text:r});let o="";for(let t=0;t<e.rows.length;t++){let n=e.rows[t];r="";for(let e=0;e<n.length;e++)r+=this.tablecell(n[e]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${nM(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let o=this.parser.parseInline(r),n=nD(e);if(null===n)return o;let a='<a href="'+(e=n)+'"';return t&&(a+=' title="'+nM(t)+'"'),a+=">"+o+"</a>"}image({href:e,title:t,text:r,tokens:o}){o&&(r=this.parser.parseInline(o,this.parser.textRenderer));let n=nD(e);if(null===n)return nM(r);e=n;let a=`<img src="${e}" alt="${r}"`;return t&&(a+=` title="${nM(t)}"`),a+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:nM(e.text)}},nF=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},nq=class __Parser{options;renderer;textRenderer;constructor(e){this.options=e||oG,this.options.renderer=this.options.renderer||new nH,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new nF}static parse(e,t){return new __Parser(t).parse(e)}static parseInline(e,t){return new __Parser(t).parseInline(e)}parse(e,t=!0){let r="";for(let o=0;o<e.length;o++){let n=e[o];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(n.type)){r+=e||"";continue}}switch(n.type){case"space":r+=this.renderer.space(n);continue;case"hr":r+=this.renderer.hr(n);continue;case"heading":r+=this.renderer.heading(n);continue;case"code":r+=this.renderer.code(n);continue;case"table":r+=this.renderer.table(n);continue;case"blockquote":r+=this.renderer.blockquote(n);continue;case"list":r+=this.renderer.list(n);continue;case"html":r+=this.renderer.html(n);continue;case"paragraph":r+=this.renderer.paragraph(n);continue;case"text":{let a=n,l=this.renderer.text(a);for(;o+1<e.length&&"text"===e[o+1].type;)a=e[++o],l+=`
`+this.renderer.text(a);t?r+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):r+=l;continue}default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}parseInline(e,t=this.renderer){let r="";for(let o=0;o<e.length;o++){let n=e[o];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){r+=e||"";continue}}switch(n.type){case"escape":case"text":r+=t.text(n);break;case"html":r+=t.html(n);break;case"link":r+=t.link(n);break;case"image":r+=t.image(n);break;case"strong":r+=t.strong(n);break;case"em":r+=t.em(n);break;case"codespan":r+=t.codespan(n);break;case"br":r+=t.br(n);break;case"del":r+=t.del(n);break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}},nV=class{options;block;constructor(e){this.options=e||oG}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?nj.lex:nj.lexInline}provideParser(){return this.block?nq.parse:nq.parseInline}},nW=new class{defaults=oW();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=nq;Renderer=nH;TextRenderer=nF;Lexer=nj;Tokenizer=nU;Hooks=nV;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let o of e)switch(r=r.concat(t.call(this,o)),o.type){case"table":for(let e of o.header)r=r.concat(this.walkTokens(e.tokens,t));for(let e of o.rows)for(let o of e)r=r.concat(this.walkTokens(o.tokens,t));break;case"list":r=r.concat(this.walkTokens(o.items,t));break;default:{let e=o;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(o=>{let n=e[o].flat(1/0);r=r.concat(this.walkTokens(n,t))}):e.tokens&&(r=r.concat(this.walkTokens(e.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let r=t.renderers[e.name];r?t.renderers[e.name]=function(...t){let o=e.renderer.apply(this,t);return!1===o&&(o=r.apply(this,t)),o}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let r=t[e.level];r?r.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){let t=this.defaults.renderer||new nH(this.defaults);for(let r in e.renderer){if(!(r in t))throw Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let o=e.renderer[r],n=t[r];t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=n.apply(t,e)),r||""}}r.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new nU(this.defaults);for(let r in e.tokenizer){if(!(r in t))throw Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let o=e.tokenizer[r],n=t[r];t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=n.apply(t,e)),r}}r.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new nV;for(let r in e.hooks){if(!(r in t))throw Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let o=e.hooks[r],n=t[r];nV.passThroughHooks.has(r)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(o.call(t,e)).then(e=>n.call(t,e));let r=o.call(t,e);return n.call(t,r)}:t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=n.apply(t,e)),r}}r.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,o=e.walkTokens;r.walkTokens=function(e){let r=[];return r.push(o.call(this,e)),t&&(r=r.concat(t.call(this,e))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return nj.lex(e,t??this.defaults)}parser(e,t){return nq.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let o={...r},n={...this.defaults,...o},a=this.onError(!!n.silent,!!n.async);if(!0===this.defaults.async&&!1===o.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));n.hooks&&(n.hooks.options=n,n.hooks.block=e);let l=n.hooks?n.hooks.provideLexer():e?nj.lex:nj.lexInline,c=n.hooks?n.hooks.provideParser():e?nq.parse:nq.parseInline;if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(t):t).then(e=>l(e,n)).then(e=>n.hooks?n.hooks.processAllTokens(e):e).then(e=>n.walkTokens?Promise.all(this.walkTokens(e,n.walkTokens)).then(()=>e):e).then(e=>c(e,n)).then(e=>n.hooks?n.hooks.postprocess(e):e).catch(a);try{n.hooks&&(t=n.hooks.preprocess(t));let e=l(t,n);n.hooks&&(e=n.hooks.processAllTokens(e)),n.walkTokens&&this.walkTokens(e,n.walkTokens);let r=c(e,n);return n.hooks&&(r=n.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+nM(r.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(r);throw r}}};function nG(e,t){return nW.parse(e,t)}nG.options=nG.setOptions=function(e){return nW.setOptions(e),nG.defaults=nW.defaults,oG=nG.defaults,nG},nG.getDefaults=oW,nG.defaults=oG,nG.use=function(...e){return nW.use(...e),nG.defaults=nW.defaults,oG=nG.defaults,nG},nG.walkTokens=function(e,t){return nW.walkTokens(e,t)},nG.parseInline=nW.parseInline,nG.Parser=nq,nG.parser=nq.parse,nG.Renderer=nH,nG.TextRenderer=nF,nG.Lexer=nj,nG.lexer=nj.lex,nG.Tokenizer=nU,nG.Hooks=nV,nG.parse=nG,nG.options,nG.setOptions,nG.use,nG.walkTokens,nG.parseInline,nq.parse,nj.lex,e8`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;let nK=e8`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var nZ=Object.defineProperty,nX=Object.getOwnPropertyDescriptor,nQ=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?nX(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&nZ(t,r,a),a};let nY=class extends lit_element_i{constructor(){super(...arguments),this.markdown=""}render(){return tL`${this.markdown?oV(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){nG.setOptions({gfm:!0}),nG.use({renderer:{image:function({href:e,title:t,text:r}){let o=[],n=[];return e&&({href:e,dimensions:o}=function(e){let t=[],r=e.split("|").map(e=>e.trim());e=r[0];let o=r[1];if(o){let e=/height=(\d+)/.exec(o),r=/width=(\d+)/.exec(o),n=e?e[1]:"",a=r?r[1]:"",l=isFinite(parseInt(a)),c=isFinite(parseInt(n));l&&t.push(`width="${a}"`),c&&t.push(`height="${n}"`)}return{href:e,dimensions:t}}(e),n.push(`src="${n6(e)}"`)),r&&n.push(`alt="${n6(r)}"`),t&&n.push(`title="${n6(t)}"`),o.length&&(n=n.concat(o)),`<img ${n.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:r}){if("string"!=typeof e)return"";let o=this.parser.parseInline(r);return e===o&&(o=n9(o)),t="string"==typeof t?n6(n9(t)):"",e=n9(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),`<a href="${e}" title="${t||e}" draggable="false">${o}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return e=e.replace(/</g,"&lt;"),`<code>${e}</code>`}}});let t=await nG.parse(e.replace(n5,e=>`\\${e}`));return ie(t=function(e){let t,r=[],o=0,n=0;for(;null!==(t=n3.exec(e));){o<(n=t.index||0)&&r.push(e.substring(o,n)),o=(t.index||0)+t[0].length;let[,a,l]=t;r.push(a?`$(${l})`:function(e){let[,t,r]=n1.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${r?` modifier="${r}"`:""}></code-icon>`}({id:l}))}return o<e.length&&r.push(e.substring(o)),r.join("")}(t))}};nY.styles=[nK,e8`
			a,
			a code {
				text-decoration: none;
				color: var(--vscode-textLink-foreground);
			}

			a:hover,
			a:hover code {
				color: var(--vscode-textLink-activeForeground);
			}

			a:hover:not(.disabled) {
				cursor: pointer;
			}

			p,
			.code,
			ul,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin: 8px 0;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1.1;
			}

			code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			code code-icon {
				color: inherit;
				font-size: inherit;
				vertical-align: middle;
			}

			p:first-child,
			.code:first-child,
			ul:first-child {
				margin-top: 0;
			}

			p:last-child,
			.code:last-child,
			ul:last-child {
				margin-bottom: 0;
			}

			/* MarkupContent Layout */
			ul {
				padding-left: 20px;
			}
			ol {
				padding-left: 20px;
			}

			li > p {
				margin-bottom: 0;
			}

			li > ul {
				margin-top: 0;
			}
		`],nQ([tG({type:String})],nY.prototype,"markdown",2),nY=nQ([tV("gl-markdown")],nY);let nJ="[A-Za-z0-9-]+",n0="~[A-Za-z]+",n1=RegExp(`^(${nJ})(${n0})?$`),n2=RegExp(`\\$\\(${nJ}(?:${n0})?\\)`,"g"),n5=RegExp(`\\\\${n2.source}`,"g"),n3=RegExp(`(\\\\)?\\$\\((${nJ}(?:${n0})?)\\)`,"g");function n6(e){return e.replace(/"/g,"&quot;")}function n9(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}var n7=Object.defineProperty,n8=Object.getOwnPropertyDescriptor,n4=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?n8(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&n7(t,r,a),a};let se=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return tL`<div class="progress-bar"></div>`}};se.styles=e8`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,n4([tG({reflect:!0})],se.prototype,"mode",2),n4([tG({type:Boolean})],se.prototype,"active",2),n4([tG()],se.prototype,"position",2),se=n4([tV("progress-indicator")],se);var si=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,so=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?sr(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&si(t,r,a),a};let sn=class extends lit_element_i{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?tL`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:tL`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return tL`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};sn.styles=[or,e8`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],so([tG({type:Boolean,reflect:!0})],sn.prototype,"collapsable",2),so([tG({type:Boolean,reflect:!0})],sn.prototype,"expanded",2),so([tG({type:Boolean,reflect:!0})],sn.prototype,"loading",2),sn=so([tV("webview-pane")],sn);var ss=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,sl=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?sa(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ss(t,r,a),a};let sc=class extends GlTreeBase{constructor(){super(),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1,e2(eX,eY,e1,eJ,e0)}get cloudDraft(){if(this.state.draft?.draftType==="cloud")return this.state.draft}get isCodeSuggestion(){return this.cloudDraft?.type==="suggested_pr_change"}get canSubmit(){return this.selectedPatches.length>0}updated(e){if(e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),e.has("state")){let e=this.state?.draft?.patches;if(e?.length)for(let t of(this.selectedPatches=e.map(e=>e.id),e)){let e=this.selectedPatches.indexOf(t.id);t.repository.located?-1===e&&this.selectedPatches.push(t.id):e>-1&&this.selectedPatches.splice(e,1)}else this.selectedPatches=[]}}renderEmptyContent(){return tL`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(this.state?.draft?.title==null)return;let e=this.cloudDraft?.description;if(null!=e)return e=e.trim(),tL`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${ie(e)}</span>
				</p>
			</div>
		`}renderExplainAi(){if(this.state?.orgSettings.ai===!1||this.state?.preferences.aiEnabled===!1)return;let e=this.explain?.result!=null?`${this.explain.result.summary}

${this.explain.result.body}`:void 0;return tL`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<action-nav slot="actions">
					<action-item
						data-action="switch-ai"
						label="Switch AI Provider/Model"
						icon="arrow-swap"
					></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${(this.explainBusy?"true":void 0)??tD}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${e?tL`<div class="ai-content" data-region="commit-explanation">
								<gl-markdown
									class="ai-content__summary scrollable"
									markdown="${e}"
								></gl-markdown>
							</div>`:this.explain?.error?tL`<div class="ai-content has-error" data-region="commit-explanation">
									<p class="ai-content__summary scrollable">
										${this.explain.error.message??"Error retrieving content"}
									</p>
								</div>`:void 0}
				</div>
			</webview-pane>
		`}renderChangedFiles(){let e=this.state?.preferences?.files?.layout??"auto";return tL`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(e)}</action-nav>

				${tY(null!=this.validityMessage,()=>tL`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${tY(this.state?.draft?.patches==null,()=>this.renderLoading(),()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides))}
				</div>
			</webview-pane>
		`}get treeModel(){if(this.state?.draft?.patches==null)return[];let{draft:{patches:e}}=this.state,t=this.state?.preferences?.files?.layout??"auto",r=!1,o=ir(e,e=>e?.files?.length??0);return r="auto"===t?o>(this.state.preferences?.files?.threshold??5):"tree"===t,e?.map(e=>this.draftPatchToTreeModel(e,r,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(e.id)}))}renderUserSelection(e,t){if("delete"===e.change)return;let r=e.pendingRole??e.user.role,o=new Map([["owner","owner"],["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),n=o.get(r);return tL`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member?.name??e.member?.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					${tY("owner"!==r&&("owner"===t||"admin"===t),()=>tL`
							<gk-popover>
								<gk-button slot="trigger"
									>${n} <code-icon icon="chevron-down"></code-icon
								></gk-button>
								<gk-menu>
									${t0(o,([t,o])=>"owner"===t?void 0:tL`<gk-menu-item
													@click=${r=>this.onChangeSelectionRole(r,e,t)}
												>
													<code-icon
														icon="check"
														class="user-selection__check ${r===t?"is-active":""}"
													></code-icon>
													${o}
												</gk-menu-item>`)}
								</gk-menu>
							</gk-popover>
						`,()=>tL`${n}`)}
				</div>
			</div>
		`}renderUserSelectionList(e,t=!1){if(!e.userSelections?.length)return;let r=e.userSelections;return!1===t&&(r=r.filter(e=>e.user?.role!=="owner")),tL`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${t4(r,e=>e.member?.id??e.user?.id,t=>this.renderUserSelection(t,e.role))}
				</div>
			</div>
		`}renderPatchPermissions(){let e=this.cloudDraft;if(null!=e){if("admin"===e.role||"owner"===e.role){let t,r=e.userSelections?.some(e=>void 0!==e.change);switch(e.visibility){case"private":t="organization";break;case"invite_only":t="lock";break;default:t="globe"}return tL`
				${tY(!0!==this.isCodeSuggestion,()=>tL` <div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${t}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===e.visibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===e.visibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===e.visibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>`)}
				${this.renderUserSelectionList(e)}
				${tY(r,()=>tL`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${this.onUpdatePatch}
									>Update Patch</gl-button
								>
							</span>
						</p>
					`)}
			`}return tL`
			${tY(!0!==this.isCodeSuggestion,()=>tL` <div class="message-input">
						<div class="message-input__control message-input__control--text">
							${tY("public"===e.visibility,()=>tL`<code-icon icon="globe"></code-icon> Anyone with the link`)}
							${tY("private"===e.visibility,()=>tL`<code-icon icon="organization"></code-icon> Members of my Org with the link`)}
							${tY("invite_only"===e.visibility,()=>tL`<code-icon icon="lock"></code-icon> Collaborators only`)}
						</div>
					</div>`)}
			${this.renderUserSelectionList(e,!0)}
		`}}renderCodeSuggectionActions(){if(this.isCodeSuggestion&&null!=this.cloudDraft&&!this.cloudDraft.isArchived&&"viewer"!==this.cloudDraft.role)return tL`
			<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("accepted")}
						>Accept</gl-button
					>
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("rejected")}
						>Reject</gl-button
					>
				</span>
			</p>
		`}renderPatches(){return tL`
			<div class="section section--action">
				${this.renderPatchPermissions()}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gk-popover placement="top">
							<gl-button
								slot="trigger"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<gk-menu class="mine-menu" @select=${this.onSelectApplyOption}>
								<gk-menu-item data-value="branch">Apply to a Branch</gk-menu-item>
								<!-- <gk-menu-item data-value="worktree">Apply to new worktree</gk-menu-item> -->
							</gk-menu>
						</gk-popover>
					</span>
				</p>
				${this.renderCodeSuggectionActions()}
			</div>
		`}renderActionbar(){let e=this.state?.draft;if(null!=e)return"local"===e.draftType?tL`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:tL`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
					${tY(this.cloudDraft?.gkDevLink!=null,()=>tL`
							<a class="commit-action" href=${this.cloudDraft.gkDevLink} title="Open on gitkraken.dev">
								<code-icon icon="globe"></code-icon>
							</a>
						`)}
				</div>
			</div>
		`}renderDraftInfo(){let e;if(this.state.draft?.title==null)return tD;if(this.cloudDraft?.isArchived){let t=this.cloudDraft.archivedReason??"archived";e=tL`<gl-badge class="title__badge">${t}</gl-badge>`}return tL`
			<h1 class="title">${this.state.draft?.title} ${e}</h1>
			${this.renderPatchMessage()}
		`}render(){return this.state?.draft==null?tL` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:tL`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">${this.renderActionbar()}${this.renderDraftInfo()}</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onInviteUsers(e){this.emit("gl-patch-details-invite-users")}onChangeSelectionRole(e,t,r){this.emit("gl-patch-details-update-selection",{selection:t,role:r});let o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){let t=this.state.draft;t.visibility=e.target.value,this.emit("gl-patch-details-update-metadata",{visibility:t.visibility})}onUpdatePatch(e){this.emit("gl-patch-details-update-permissions")}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(e);break;case"file-compare-working":this.onCompareWorking(e)}}fireFileEvent(e,t,r){let o=new CustomEvent(e,{detail:{...t,showOptions:r}});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-working",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onTreeItemChecked(e){if(!e.detail.context)return;let[t]=e.detail.context,r=this.state.draft?.patches?.find(e=>e.gkRepositoryId===t);if(!r)return;let o=this.selectedPatches.indexOf(r?.id);e.detail.checked?-1===o&&(this.selectedPatches.push(r.id),this.validityMessage=void 0):o>-1&&this.selectedPatches.splice(o,1);let n=new CustomEvent("gl-patch-checked",{detail:{patch:r,checked:e.detail.checked}});this.dispatchEvent(n)}onTreeItemSelected(e){let{node:t,context:r}=e.detail;if(!0===t.branch||null==r)return;let[o]=r;this.emit("gl-patch-file-compare-previous",{...o})}onApplyPatch(e,t="current"){if(!1===this.canSubmit){this.validityMessage="Please select changes to apply";return}this.validityMessage=void 0,this.emit("gl-patch-apply-patch",{draft:this.state.draft,target:t,selectedPatches:this.selectedPatches})}onArchiveDraft(e){this.emit("gl-draft-archive",{reason:e})}onSelectApplyOption(e){if(!1===this.canSubmit){this.validityMessage="Please select changes to apply";return}let t=e.detail?.target;t?.dataset?.value!=null&&this.onApplyPatch(void 0,t.dataset.value)}onChangePatchBase(e){let t=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onSelectPatchRepo(e){let t=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onShowInGraph(e){this.emit("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.emit("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout(()=>this._copiedLink=!1,1e3)}onShareLocalPatch(){this.emit("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(e,t=!1,r=!0,o){let n=this.repoToTreeModel(e.repository.name,e.gkRepositoryId,o,e.repository.located?void 0:"missing");if(!e.files?.length)return n;let a=[];if(t){let t=ii(e.files,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:2});a.push(t)}}else for(let t of e.files){let e=this.fileToTreeModel(t,{level:2,branch:!1},!0);a.push(e)}return a.length>0&&(n.branch=!0,n.children=a),n}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};sl([tG({type:Object})],sc.prototype,"state",2),sl([tK()],sc.prototype,"explainBusy",2),sl([tG({type:Object})],sc.prototype,"explain",2),sl([tK()],sc.prototype,"selectedPatches",2),sl([tK()],sc.prototype,"validityMessage",2),sl([tK()],sc.prototype,"_copiedLink",2),sc=sl([tV("gl-draft-details")],sc);var sd=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,sp=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?sh(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&sd(t,r,a),a};let su=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),sg=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return su.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let r=this[e];return null==r?tD:tL`<span class="stat ${e}" aria-label="${r} ${e}"
			><span class="label">${this.renderSymbol(t)}${r}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?tL`<code-icon class="icon" icon="${t}"></code-icon>`:tL`<span>${e}</span>`}};sg.styles=e8`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,sp([tG({type:Number})],sg.prototype,"added",2),sp([tG({type:Number})],sg.prototype,"modified",2),sp([tG({type:Number})],sg.prototype,"removed",2),sp([tG()],sg.prototype,"symbol",2),sg=sp([tV("commit-stats")],sg);var sf=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,sb=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?sm(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&sf(t,r,a),a};let sv=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=g(this.onTitleInput,500),this.onDebounceDescriptionInput=g(this.onDescriptionInput,500),e2(eX,eY,eJ,e0,e1)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(e=>e?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,e])=>!1!==e.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return ir(this.createChanges,e=>e.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(e){let t=e.pendingRole,r=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=r.get(t);return tL`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${o} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${t0(r,([r,o])=>tL`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,r)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===r?"is-active":""}"
										></code-icon>
										${o}
									</gk-menu-item>`)}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return tL`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${t4(this.state.create.userSelections,e=>e.member.id,e=>this.renderUserSelection(e))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}let t=this.review?"Code Suggestion":"Cloud Patch",r=this.review?"Code Suggestions":"Cloud Patches";return tL`
			<div class="section section--action">
				${tY(this.state?.create?.creationError!=null,()=>tL` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${tY(!1===this.review,()=>tL`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`)}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${tY(this.state?.orgSettings.ai===!0&&this.state?.preferences.aiEnabled===!0,()=>tL`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`)}
				</div>

				${tY(this.generate?.error!=null,()=>tL`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`)}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${tY(!0===this.review,()=>tL`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${tY(this.state?.orgSettings.byob===!1,()=>tL`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${ea.cloudPatches}"
								title="Learn more about ${r}"
								aria-label="Learn more about ${r}"
								>${r}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>tL`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${ea.cloudPatches}"
								title="Learn more about ${r}"
								aria-label="Learn more about ${r}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return tL`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return tL`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${tY(null!=this.validityMessage,()=>tL`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${tY(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;let[t,r]=e.detail.context,o=e.detail.checked;"unstaged"===r&&(o=!!e.detail.checked||"staged");let n=this.getChangeForRepo(t);null!=n&&n.checked!==o&&(n.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:o}))}onTreeItemSelected(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);let e=[],t=this.createChanges.length>1,r=this.isTree(this.filesModified??0),o=this.isCompact;if(t)for(let t of this.createChanges){let n=this.getTreeForChange(t,!0,r,o);null!=n&&e.push(...n)}else{let t=this.createChanges[0],n=this.getTreeForChange(t,!1,r,o);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,r=!1,o=!0){if(null==e.files||0===e.files.length)return;let n=[];if("wip"===e.type){let a=[],l=[];for(let t of e.files)t.staged?a.push(t):l.push(t);0===a.length||0===l.length?n.push(...this.renderFiles(e.files,r,o,t?2:1)):(l.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(l,r,o,t?3:2)}),a.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,r,o,t?3:2)}))}else n.push(...this.renderFiles(e.files,r,o));if(!t)return n;let a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=n,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let e=this.selectedChanges.reduce((e,[t,r])=>(e[t]=r,e),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,r){this.emit("gl-patch-create-update-selection",{selection:t,role:r});let o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){let r={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[r]:!0===e.staged?[r,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[r,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,r){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};sb([tG({type:Object})],sv.prototype,"state",2),sb([tG({type:Boolean})],sv.prototype,"review",2),sb([tG({type:Object})],sv.prototype,"generate",2),sb([tK()],sv.prototype,"generateBusy",2),sb([tK()],sv.prototype,"creationBusy",2),sb([tX("#title")],sv.prototype,"titleInput",2),sb([tX("#desc")],sv.prototype,"descInput",2),sb([tX("#generate-ai")],sv.prototype,"generateAiButton",2),sb([tK()],sv.prototype,"validityMessage",2),sv=sb([tV("gl-patch-create")],sv);var sy=Object.defineProperty,sw=Object.getOwnPropertyDescriptor,sk=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?sw(t,r):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&sy(t,r,a),a};let sx=class extends GlElement{constructor(){super(),this.indentPreference=16,e2(eQ,e1,eJ,e0)}get wipChangesCount(){return this.state?.create==null?0:Object.values(this.state.create.changes).reduce((e,t)=>e+=t.files?.length??0,0)}get wipChangeState(){if(this.state?.create==null)return;let e=Object.values(this.state.create.changes).reduce((e,t)=>(null!=t.files&&(e.files+=t.files.length,e.on.add(t.repository.uri)),e),{files:0,on:new Set});return{count:e.files,branches:Array.from(e.on).join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){let e=this.state?.preferences?.indent;e!==this.indentPreference&&(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){return tL`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${tY("view"===this.mode,()=>tL`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`,()=>tL`<gl-patch-create .state=${this.state} .generate=${this.generate}></gl-patch-create>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}};sk([tG({type:Object})],sx.prototype,"state",2),sk([tG({type:Object})],sx.prototype,"explain",2),sk([tG({type:Object})],sx.prototype,"generate",2),sk([tG({attribute:!1,type:Object})],sx.prototype,"app",2),sx=sk([tV("gl-patch-details-app")],sx);let s_="0000000000000000000000000000000000000000";let PatchDetailsApp=class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp"),this.debouncedAttachState=g(this.attachState.bind(this),100)}onInitialize(){this.debouncedAttachState()}onBind(){return[c.on("[data-switch-value]","click",e=>this.onToggleFilesLayout(e)),c.on('[data-action="ai-explain"]',"click",e=>this.onAIExplain(e)),c.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAIModel(e)),c.on('[data-action="mode"]',"click",e=>this.onModeClicked(e)),c.on("gl-draft-details","gl-patch-apply-patch",e=>this.onApplyPatch(e.detail)),c.on("gl-draft-details","gl-draft-archive",e=>this.onArchiveDraft(e.detail.reason)),c.on("gl-patch-details-app","change-patch-base",e=>this.onChangePatchBase(e.detail)),c.on("gl-patch-details-app","select-patch-repo",e=>this.onSelectPatchRepo(e.detail)),c.on("gl-patch-details-app","gl-patch-details-graph-show-patch",e=>this.onShowPatchInGraph(e.detail)),c.on("gl-patch-details-app","gl-patch-create-patch",e=>this.onCreatePatch(e.detail)),c.on("gl-patch-details-app","gl-patch-share-local-patch",()=>this.onShareLocalPatch()),c.on("gl-draft-details","gl-patch-details-copy-cloud-link",()=>this.onCopyCloudLink()),c.on("gl-patch-create","gl-patch-create-invite-users",()=>this.onInviteUsers()),c.on("gl-draft-details","gl-patch-details-invite-users",()=>this.onInviteUsers()),c.on("gl-patch-create","gl-patch-create-update-selection",e=>this.onUpdateUserSelection(e.detail)),c.on("gl-draft-details","gl-patch-details-update-selection",e=>this.onUpdateUserSelection(e.detail)),c.on("gl-patch-create","gl-patch-create-repo-checked",e=>this.onCreateCheckRepo(e.detail)),c.on("gl-patch-create","gl-patch-generate-title",e=>this.onCreateGenerateTitle(e.detail)),c.on("gl-patch-create","gl-patch-create-update-metadata",e=>this.onCreateUpdateMetadata(e.detail)),c.on("gl-draft-details","gl-patch-details-update-metadata",e=>this.onDraftUpdateMetadata(e.detail)),c.on("gl-draft-details","gl-patch-details-update-permissions",()=>this.onDraftUpdatePermissions()),c.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),c.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),c.on("gl-patch-create,gl-draft-details","gl-patch-file-open",e=>this.onOpenFile(e.detail)),c.on("gl-draft-details","gl-patch-checked",e=>this.onPatchChecked(e.detail))]}onMessageReceived(e){switch(!0){case Z.is(e):e.params.state,this.state=e.params.state,this.setState(this.state),this.debouncedAttachState();break;case X.is(e):case Y.is(e):case J.is(e):this.state={...this.state,...e.params},this.setState(this.state),this.debouncedAttachState(!0);break;case ee.is(e):{let t=this.state.draft,r=t.patches,o=r.findIndex(t=>t.id===e.params.patch.id);r.splice(o,1,e.params.patch),this.state={...this.state,draft:t},this.setState(this.state),this.debouncedAttachState(!0);break}default:super.onMessageReceived?.(e)}}onPatchChecked(e){this.sendCommand(E,e)}onCreateCheckRepo(e){this.sendCommand(j,e)}onCreateUpdateMetadata(e){this.sendCommand(H,e)}async onCreateGenerateTitle(e){try{let e=await this.sendRequest(K,void 0);e.error?this.component.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?(this.component.generate={title:e.title,description:e.description},this.state={...this.state,create:{...this.state.create,title:e.title??this.state.create?.title,description:e.description??this.state.create?.description}},this.setState(this.state),this.debouncedAttachState()):this.component.generate=void 0}catch{this.component.generate={error:{message:"Error retrieving content"}}}}onDraftUpdateMetadata(e){this.sendCommand(F,e)}onDraftUpdatePermissions(){this.sendCommand(q,void 0)}onShowPatchInGraph(e){}onCreatePatch(e){this.sendCommand(S,e)}onShareLocalPatch(){this.sendCommand(U,void 0)}onCopyCloudLink(){this.sendCommand(B,void 0)}onModeClicked(e){let t=e.target?.dataset.actionValue??void 0;t!==this.state.mode&&this.sendCommand(N,{mode:t})}onApplyPatch(e){null!=e.selectedPatches&&0!==e.selectedPatches.length&&this.sendCommand(C,{details:e.draft,target:e.target??"current",selected:e.selectedPatches})}onArchiveDraft(e){this.sendCommand(A,{reason:e})}onChangePatchBase(e){this.sendCommand(R,void 0)}onSelectPatchRepo(e){this.sendCommand(P,void 0)}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(b,{command:t})}onSwitchAIModel(e){this.onCommandClickedCore("gitlens.ai.switchProvider")}async onAIExplain(e){try{let e=await this.sendRequest(G,void 0);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:this.component.explain=e}catch{this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){let t=e.target?.dataset.switchValue??void 0;if(t===this.state.preferences.files?.layout)return;let r={...this.state.preferences.files,layout:t??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:r}},this.debouncedAttachState(),this.sendCommand(D,{files:r})}onInviteUsers(){this.sendCommand(V,void 0)}onUpdateUserSelection(e){this.sendCommand(W,e)}onOpenFileOnRemote(e){this.sendCommand(I,e)}onOpenFile(e){this.sendCommand(O,e)}onCompareFileWithWorking(e){this.sendCommand(L,e)}onCompareFileWithPrevious(e){this.sendCommand(M,e)}onFileMoreActions(e){this.sendCommand(T,e)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(e){this.component.state=this.state}};new PatchDetailsApp;export{PatchDetailsApp,s_ as uncommittedSha};