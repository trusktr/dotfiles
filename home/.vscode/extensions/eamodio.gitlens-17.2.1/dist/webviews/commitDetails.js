let e,t,o,r,n,a;var l,c,d,h,p,u,g,f={47:(e,t,o)=>{o(602)},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},m={};function b(e){var t=m[e];if(void 0!==t)return t.exports;var o=m[e]={exports:{}};return f[e](o,o.exports,b),o.exports}Object.defineProperty(b,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=r??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let i=class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function v(e,t,o){let r,n,a,l,c,d,h,p,u,g,f=0;null!=o&&({edges:d,maxWait:h,signal:p,aggregator:u}=o);let m="leading"===(d??="trailing")||"both"===d,b="trailing"===d||"both"===d;function v(){if(null!=r){f=Date.now();let t=r,o=g;return g=void 0,r=void 0,a=e.apply(o,t)}}function y(){null!=l&&(clearTimeout(l),l=void 0)}function w(){null!=c&&(clearTimeout(c),c=void 0)}function k(){y(),w(),g=void 0,r=void 0,n=void 0,f=0}function x(...e){if(p?.aborted)return;let o=Date.now();null!=u&&null!=r?r=u(r,e):(g=this,r=e);let d=null==l&&null==c;n=o,y();let w=Date.now();if(n=w,l=setTimeout(()=>{l=void 0,function(e){let o=e-(n??0),r=e-f;return null==n||o>=t||o<0||null!=h&&r>=h}(Date.now())&&b&&v(),k()},t),null!=h&&!c){let e=h-(w-f);e>0?c=setTimeout(()=>{c=void 0,b&&null!=r&&v(),f=Date.now()},e):(b&&null!=r&&v(),k())}return m&&d?v():a}return x.cancel=k,x.flush=function(){return y(),w(),v()},x.pending=function(){return null!=l||null!=c},p?.addEventListener("abort",k,{once:!0}),x}let IpcCall=class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o,r){super(e,t,o,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let y=new IpcCommand("core","webview/ready"),w=new IpcCommand("core","webview/focus/changed"),k=new IpcCommand("core","command/execute"),x=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let _=new IpcCommand("core","telemetry/sendEvent"),C=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let S=new IpcCommand("core","webview/focus/didChange"),A=new IpcNotification("core","webview/visibility/didChange");function E(e){let t=.001*performance.now(),o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(r-=e[1])<0&&(o--,r+=1e9)),[o,r]}new IpcNotification("core","configuration/didChange"),b(47);var P=((l=P||{})[l.Hash=35]="Hash",l[l.Slash=47]="Slash",l[l.Digit0=48]="Digit0",l[l.Digit1=49]="Digit1",l[l.Digit2=50]="Digit2",l[l.Digit3=51]="Digit3",l[l.Digit4=52]="Digit4",l[l.Digit5=53]="Digit5",l[l.Digit6=54]="Digit6",l[l.Digit7=55]="Digit7",l[l.Digit8=56]="Digit8",l[l.Digit9=57]="Digit9",l[l.Backslash=92]="Backslash",l[l.A=65]="A",l[l.B=66]="B",l[l.C=67]="C",l[l.D=68]="D",l[l.E=69]="E",l[l.F=70]="F",l[l.Z=90]="Z",l[l.a=97]="a",l[l.b=98]="b",l[l.c=99]="c",l[l.d=100]="d",l[l.e=101]="e",l[l.f=102]="f",l[l.z=122]="z",l),R=((c=R||{}).AngleBracketLeftHeavy="❰",c.AngleBracketRightHeavy="❱",c.ArrowBack="↩",c.ArrowDown="↓",c.ArrowDownUp="⇵",c.ArrowDropRight="⤷",c.ArrowHeadRight="➤",c.ArrowLeft="←",c.ArrowLeftDouble="⇐",c.ArrowLeftRight="↔",c.ArrowLeftRightDouble="⇔",c.ArrowLeftRightDoubleStrike="⇎",c.ArrowLeftRightLong="⟷",c.ArrowRight="→",c.ArrowRightDouble="⇒",c.ArrowRightHollow="⇨",c.ArrowUp="↑",c.ArrowUpDown="⇅",c.ArrowUpRight="↗",c.ArrowsHalfLeftRight="⇋",c.ArrowsHalfRightLeft="⇌",c.ArrowsLeftRight="⇆",c.ArrowsRightLeft="⇄",c.Asterisk="∗",c.Bullseye="◎",c.Check="✔",c.Dash="—",c.Dot="•",c.Ellipsis="…",c.EnDash="–",c.Envelope="✉",c.EqualsTriple="≡",c.Flag="⚑",c.FlagHollow="⚐",c.MiddleEllipsis="⋯",c.MuchLessThan="≪",c.MuchGreaterThan="≫",c.Pencil="✎",c.Space=" ",c.SpaceThin=" ",c.SpaceThinnest=" ",c.SquareWithBottomShadow="❏",c.SquareWithTopShadow="❐",c.Warning="⚠",c.ZeroWidthSpace="​",c);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var T=((d=T||{}).File="file",d.Git="git",d.GitHub="github",d.GitLens="gitlens",d.GitLensMarkdown="gitlens-markdown",d.PRs="pr",d.Remote="vscode-remote",d.Vsls="vsls",d.VslsScc="vsls-scc",d.Virtual="vscode-vfs",d);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let O="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",I=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${O}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${O}`,graph:`https://gitkraken.com/solutions/commit-graph?${O}`,launchpad:`https://gitkraken.com/solutions/launchpad?${O}`,platform:`https://gitkraken.com/devex?${O}`,pricing:`https://gitkraken.com/gitlens/pricing?${O}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${O}`,security:`https://help.gitkraken.com/gitlens/security?${O}`,workspaces:`https://gitkraken.com/solutions/workspaces?${O}`,cli:`https://gitkraken.com/cli?${O}`,browserExtension:`https://gitkraken.com/browser-extension?${O}`,desktop:`https://gitkraken.com/git-client?${O}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${O}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${O}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${O}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${O}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${O}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${O}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${O}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${O}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${O}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${O}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${O}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${O}`}),D=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,L=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,M=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],N=new Map,B=new Map,j=["th","st","nd","rd"];function U(t,o){null==t&&(t="decimal");let r=`${o??""}:${t}`,n=B.get(r);if(null==n){let a={localeMatcher:"best fit",style:t};n=new Intl.NumberFormat(null==o?e:"system"===o?void 0:[o],a),B.set(r,n)}return n.format}let{fromCharCode:F}=String;function H(e){let[t,o]=E(e);return 1e3*t+Math.floor(o/1e6)}function q(e,t,o){let n;if(null==o)return r??=U(),`${r(t)} ${e}${1===t?"":"s"}`;let a=1===t?e:o.plural??`${e}s`;return o.only?a:(0===t?n=o.zero??t:!1===o.format?n=t:null!=o.format?n=o.format(t):(r??=U(),n=r(t)),`${n}${o.infix??" "}${a}`)}new TextEncoder,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var V=((h=V||{})[h.Off=0]="Off",h[h.Error=1]="Error",h[h.Warn=2]="Warn",h[h.Info=3]="Info",h[h.Debug=4]="Debug",h);let W=["accessToken","password","token"],G=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of W)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(W);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=K(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=K(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function K(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let Z=new WeakMap,Y={enabled:e=>G.enabled(e)||G.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":G.error(void 0,t,o,...r);break;case"warn":G.warn(t,o,...r);break;case"info":G.log(t,o,...r);break;default:G.debug(t,o,...r)}}},X=0x40000000-1;function J(){let e=0;return{get current(){return e},next:function(){return e===X&&(e=0),++e},reset:function(){e=0}}}let ee=J(),ei=new Map;function eo(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function er(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?ee.current:void 0,r=ee.next();return{scopeId:r,prevScopeId:o,prefix:`${eo(r,o)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=er(e,void 0),G.configure({name:e,createChannel:function(e){return{name:e,appendLine:G.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?G.log(this.scope,e,...t):G.log(e,t.shift(),...t)}};let en="home";new IpcRequest(en,"launchpad/summary"),new IpcRequest(en,"overview/active"),new IpcRequest(en,"overview/inactive"),new IpcRequest(en,"overviewFilter"),new IpcCommand(en,"overview/repository/change"),new IpcNotification(en,"overview/repository/didChange"),new IpcCommand(en,"previewEnabled/toggle"),new IpcCommand(en,"section/collapse"),new IpcCommand(en,"walkthrough/dismiss"),new IpcCommand(en,"overview/filter/set"),new IpcCommand(en,"openInGraph"),new IpcNotification(en,"repositories/didCompleteDiscovering"),new IpcNotification(en,"previewEnabled/didChange"),new IpcNotification(en,"repository/wip/didChange"),new IpcNotification(en,"repositories/didChange"),new IpcNotification(en,"walkthroughProgress/didChange"),new IpcNotification(en,"integrations/didChange"),new IpcNotification(en,"launchpad/didChange");let es=new IpcNotification(en,"subscription/didChange");new IpcNotification(en,"org/settings/didChange"),new IpcNotification(en,"home/ownerFilter/didChange"),new IpcNotification(en,"account/didFocus");let ea="graph";new IpcCommand(ea,"chooseRepository"),new IpcCommand(ea,"dblclick"),new IpcCommand(ea,"dblclick"),new IpcCommand(ea,"avatars/get"),new IpcCommand(ea,"refs/metadata/get"),new IpcCommand(ea,"rows/get"),new IpcCommand(ea,"pullRequest/openDetails"),new IpcCommand(ea,"search/openInView"),new IpcCommand(ea,"columns/update"),new IpcCommand(ea,"refs/update/visibility"),new IpcCommand(ea,"filters/update/excludeTypes"),new IpcCommand(ea,"configuration/update"),new IpcCommand(ea,"search/update/mode"),new IpcCommand(ea,"filters/update/includedRefs"),new IpcCommand(ea,"selection/update"),new IpcRequest(ea,"chooseRef"),new IpcRequest(ea,"rows/ensure"),new IpcRequest(ea,"counts"),new IpcRequest(ea,"row/hover/get"),new IpcRequest(ea,"search"),new IpcNotification(ea,"repositories/integration/didChange"),new IpcNotification(ea,"didChange",!0,!0),new IpcNotification(ea,"configuration/didChange");let el=new IpcNotification(ea,"subscription/didChange");new IpcNotification(ea,"avatars/didChange"),new IpcNotification(ea,"branchState/didChange"),new IpcNotification(ea,"refs/didChangeMetadata"),new IpcNotification(ea,"columns/didChange"),new IpcNotification(ea,"scrollMarkers/didChange"),new IpcNotification(ea,"refs/didChangeVisibility"),new IpcNotification(ea,"rows/didChange",void 0,!0),new IpcNotification(ea,"rows/stats/didChange"),new IpcNotification(ea,"selection/didChange"),new IpcNotification(ea,"workingTree/didChange"),new IpcNotification(ea,"didSearch"),new IpcNotification(ea,"didFetch"),new IpcNotification(ea,"featurePreview/didStart");let ec="timeline";new IpcRequest(ec,"ref/choose"),new IpcRequest(ec,"path/choose"),new IpcCommand(ec,"point/open"),new IpcCommand(ec,"config/update"),new IpcCommand(ec,"scope/update");let ed=new IpcNotification(ec,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(es.is(e)||el.is(e)||ed.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,r=this._promos.get(o);return null==r&&(r=this.ipc.sendRequest(x,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(_,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};function eh(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ep(e,t){return new Promise(o=>{e.addEventListener(t,function r(n){n.target===e&&(e.removeEventListener(t,r),o())})})}(u||(u={})).on=function(e,t,o,r){let n=!1;if("string"==typeof e){let a=function(t){let r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,a,r??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,a,r??!0))}}}let a=function(e){o(e,this)};return e.addEventListener(t,a,r??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,a,r??!1))}}};let eu=/\(([\s\S]*)\)/,eg=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ef=/\s?=.*$/;function em(e,t=!1){let o,r,n,a,l,c=0,d=!1,h=!1,p=!0;null!=e&&({args:o,if:r,enter:n,exit:a,prefix:l,logThreshold:c=0,scoped:d=!0,singleLine:h=!1,timed:p=!0}=e),c>0&&(h=!0,p=!0),p&&(d=!0);let u=G.isDebugging,g=t?G.debug:G.log,f=u?"debug":"info";return(e,t,m)=>{let b,v;if("function"==typeof m.value?(b=m.value,v="value"):"function"==typeof m.get&&(b=m.get,v="get"),null==b||null==v)throw Error("Not supported");let y=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(eg,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;let n=eu.exec(t);return null!=n?n[1].split(",").map(e=>e.trim().replace(ef,"")):[]}(b):[];m[v]=function(...e){var m,v;let w,k;if(!u&&!G.enabled(f)||null!=r&&!r.apply(this,e))return b.apply(this,e);let x=ee.current,_=ee.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",r=o.indexOf("_");-1!==r&&(o=o.substring(r+1));let n=Z.get(t);return n?.(e,o)??o}(this):void 0,S=C?d?`${eo(_,x)} ${C}.${t}`:`${C}.${t}`:t;null!=l&&(S=l({id:_,instance:this,instanceName:C??"",name:t,prefix:S},...e)),d&&(m={scopeId:_,prevScopeId:x,prefix:S},m={prevScopeId:ee.current,...m},ei.set(_,m),w=m);let A=null!=n?n(...e):"";if(!1===o||0===e.length)k="",h||g.call(G,`${S}${A}`);else{let t,r,n,a;k="";let l=-1;for(a of e){if(r=y[++l],null!=(t=o?.[l])){if("boolean"==typeof t)continue;if(k.length>0&&(k+=", "),"string"==typeof t){k+=t;continue}n=String(t(a))}else k.length>0&&(k+=", "),n=G.toLoggable(a);k+=r?`${r}=${n}`:n}h||g.call(G,k?`${S}${A}(${k})`:`${S}${A}`)}if(h||p||null!=a){let t,o=p?E():void 0,r=e=>{let t=void 0!==o?` [${H(o)}ms]`:"";h?G.error(e,k?`${S}${A}(${k})`:`${S}${A}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):G.error(e,S,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),d&&ei.delete(_)};try{t=b.apply(this,e)}catch(e){throw r(e),e}let n=e=>{let t,r,n,l;if(null!=o?(t=H(o))>500?(r=G.warn,n=` [*${t}ms] (slow)`):(r=g,n=` [${t}ms]`):(n="",r=g),null!=a)if("function"==typeof a)try{l=a(e)}catch(e){l=`@log.exit error: ${e}`}else!0===a&&(l=`returned ${G.toLoggable(e)}`);else w?.exitFailed?(l=w.exitFailed,r=(e,...t)=>G.error(null,e,...t)):l="completed";h?(0===c||t>c)&&r.call(G,k?`${S}${A}(${k}) ${l}${w?.exitDetails||""}${n}`:`${S}${A} ${l}${w?.exitDetails||""}${n}`):r.call(G,k?`${S}(${k}) ${l}${w?.exitDetails||""}${n}`:`${S} ${l}${w?.exitDetails||""}${n}`),d&&ei.delete(_)};return null!=t&&null!=(v=t)&&(v instanceof Promise||"function"==typeof v?.then)?t.then(n,r):n(t),t}return b.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:er(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??Y,this._time=E(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=E(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=E(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,r]=E(this._time),n=1e3*o+Math.floor(r/1e6),a=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${n}ms]${e?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let eb={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?eb:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var ev=Object.defineProperty,ey=Object.getOwnPropertyDescriptor,ew=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ey(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ev(t,o,a),a};function ek(){return n??=acquireVsCodeApi()}let ex=J();function e$(){return`webview:${ex.next()}`}let e_=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=ek(),this._disposable=u.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=ei.get(ee.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let r=function(e,t,...o){return(t?.provider??Y).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(er(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var r,n;let e=(r=o.method,n=o.completionId,`${r}|${n}`);this._pendingHandlers.get(e)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let o=e[t];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){let o=e$();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let o=e$(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}getResponsePromise(e,t){return new Promise((o,r)=>{var n,a;let l,c=(n=e,a=t,`${n}|${a}`);function d(){clearTimeout(l),l=void 0,this._pendingHandlers.delete(c)}l=setTimeout(()=>{d.call(this),r(Error(`Timed out waiting for completion of ${c}`))},(G.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(d.call(this),e.method===C.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};ew([em({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],e_.prototype,"onMessageReceived",1),ew([em({args:{0:e=>e.method,1:!1}},!0)],e_.prototype,"sendCommand",1),ew([em({args:{0:e=>e.method,1:!1,2:!1}},!0)],e_.prototype,"sendRequest",1),ew([em({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],e_.prototype,"postMessage",1),e_=ew([(p=e=>`${e.appName}(HostIpc)`,e=>void Z.set(e,p))],e_);function eC(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}let RGBA=class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=eC(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eC(Math.max(Math.min(1,t),0),3),this.l=eC(Math.max(Math.min(1,o),0),3),this.a=eC(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,n=e.a,a=Math.max(t,o,r),l=Math.min(t,o,r),c=0,d=0,h=(l+a)/2,p=a-l;if(p>0){switch(d=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),a){case t:c=(o-r)/p+6*(o<r);break;case o:c=(r-t)/p+2;break;case r:c=(t-o)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,d,h,n)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,r,n=e.h/360,{s:a,l,a:c}=e;if(0===a)t=o=r=l;else{let e=l<.5?l*(1+a):l+a-l*a,c=2*l-e;t=HSLA._hue2rgb(c,e,n+1/3),o=HSLA._hue2rgb(c,e,n),r=HSLA._hue2rgb(c,e,n-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*r),c)}};let HSVA=class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eC(Math.max(Math.min(1,t),0),3),this.v=eC(Math.max(Math.min(1,o),0),3),this.a=eC(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,n=Math.max(t,o,r),a=n-Math.min(t,o,r);return new HSVA(Math.round(60*(0===a?0:n===t?((o-r)/a%6+6)%6:n===o?(r-t)/a+2:(t-o)/a+4)),0===n?0:a/n,n,e.a)}static toRGBA(e){let{h:t,s:o,v:r,a:n}=e,a=r*o,l=a*(1-Math.abs(t/60%2-1)),c=r-a,[d,h,p]=[0,0,0];return t<60?(d=a,h=l):t<120?(d=l,h=a):t<180?(h=a,p=l):t<240?(h=l,p=a):t<300?(d=l,p=a):t<=360&&(d=a,p=l),new RGBA(d=Math.round((d+c)*255),h=Math.round((h+c)*255),p=Math.round((p+c)*255),n)}};function eS(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(eS(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return eC(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(t,o,r,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,r=t.a,n=o+r*(1-o);if(n<1e-6)return Color.transparent;let a=this.rgba.r*o/n+t.r*r*(1-o)/n;return new Color(new RGBA(a,this.rgba.g*o/n+t.g*r*(1-o)/n,this.rgba.b*o/n+t.b*r*(1-o)/n,n))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${eA(e.rgba.r)}${eA(e.rgba.g)}${eA(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-r)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(r-n)/r,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function eA(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let eE=new Emitter,eP=eE.event;function eR(e){let t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,n=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),a=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),l=eS("--vscode-editor-background",o),c=eS("--vscode-editor-foreground",o);return c||(c=eS("--vscode-foreground",o)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==e}}let App=class App{constructor(e){this.appName=e;let t=[],o=eR();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(eP(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=ek(),this._hostIpc=new e_(this.appName),t.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),t.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{eE.fire(eR(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage(e=>{switch(!0){case S.is(e):window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case A.is(e):window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(e)}})),this.sendCommand(y,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(u.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0})),t.push(u.on(window,"gl-telemetry-fired",e=>{this._telemetry.sendEvent(e.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=v(e=>{this.sendCommand(w,e)},150);this.bindDisposables.push(u.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),u.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}};var eT={408:(e,t)=>{var o=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),f=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}function w(){}function k(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var x=k.prototype=new w;x.constructor=k,b(x,y.prototype),x.isPureReactComponent=!0;var _=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,n)&&!A.hasOwnProperty(n)&&(a[n]=t[n]);var d=arguments.length-2;if(1===d)a.children=r;else if(1<d){for(var h=Array(d),p=0;p<d;p++)h[p]=arguments[p+2];a.children=h}if(e&&e.defaultProps)for(n in d=e.defaultProps)void 0===a[n]&&(a[n]=d[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function T(e,t){var o,r;return"object"==typeof e&&null!==e&&null!=e.key?(o=""+e.key,r={"=":"=0",":":"=2"},"$"+o.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function O(e,t,n){if(null==e)return e;var a=[],l=0;return function e(t,n,a,l,c){var d,h,p,u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var g=!1;if(null===t)g=!0;else switch(u){case"string":case"number":g=!0;break;case"object":switch(t.$$typeof){case o:case r:g=!0}}if(g)return c=c(g=t),t=""===l?"."+T(g,0):l,_(c)?(a="",null!=t&&(a=t.replace(R,"$&/")+"/"),e(c,n,a,"",function(e){return e})):null!=c&&(P(c)&&(d=c,h=a+(!c.key||g&&g.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+t,c={$$typeof:o,type:d.type,key:h,ref:d.ref,props:d.props,_owner:d._owner}),n.push(c)),1;if(g=0,l=""===l?".":l+":",_(t))for(var m=0;m<t.length;m++){var b=l+T(u=t[m],m);g+=e(u,n,a,b,c)}else if("function"==typeof(b=null===(p=t)||"object"!=typeof p?null:"function"==typeof(p=f&&p[f]||p["@@iterator"])?p:null))for(t=b.call(t),m=0;!(u=t.next()).done;)g+=e(u=u.value,n,a,b=l+T(u,m++),c);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return g}(e,a,"","",function(e){return t.call(n,e,l++)}),a}function I(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},L={transition:null};t.Children={map:O,forEach:function(e,t,o){O(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=n,t.Profiler=l,t.PureComponent=k,t.StrictMode=a,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:L,ReactCurrentOwner:S},t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=b({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)C.call(t,h)&&!A.hasOwnProperty(h)&&(n[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)n.children=r;else if(1<h){d=Array(h);for(var p=0;p<h;p++)d[p]=arguments[p+2];n.children=d}return{$$typeof:o,type:e.type,key:a,ref:l,props:n,_owner:c}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,o){return D.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,o){return D.current.useReducer(e,t,o)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return D.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},eO={};function eI(e){var t=eO[e];if(void 0!==t)return t.exports;var o=eO[e]={exports:{}};return eT[e](o,o.exports,eI),o.exports}eI.d=(e,t)=>{for(var o in t)eI.o(t,o)&&!eI.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},eI.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var eD={};(()=>{let e,t,o,r,n,a;eI.d(eD,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>tr,ud:()=>tl,wt:()=>tc,ne:()=>th,Ku:()=>tg,FU:()=>tb,XO:()=>tE,Ze:()=>tP,K$:()=>tR,cX:()=>tz,Js:()=>tN,J9:()=>tB,si:()=>t_,sg:()=>tU,hW:()=>tF,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>ep,h4:()=>eh,kZ:()=>ed});let l=globalThis,c=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),h=new WeakMap;let s=class s{constructor(e,t,o){if(this._$cssResult$=!0,o!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(c&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&h.set(t,e))}return e}toString(){return this.cssText}};let p=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,d),u=c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,o="";for(let t of e.cssRules)o+=t.cssText;return new s("string"==typeof(t=o)?t:t+"",void 0,d)})(e):e,{is:g,defineProperty:f,getOwnPropertyDescriptor:m,getOwnPropertyNames:b,getOwnPropertySymbols:v,getPrototypeOf:y}=Object,w=globalThis,k=w.trustedTypes,x=k?k.emptyScript:"",_=w.reactiveElementPolyfillSupport,C={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},S=(e,t)=>!g(e,t),A={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;let $=class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:n}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);n.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...b(e),...v(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(u(o));else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=l.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:C).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,r=!1,n){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??S)(r?n:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$.elementProperties=new Map,$.finalized=new Map,_?.({ReactiveElement:$}),(w.reactiveElementVersions??=[]).push("2.0.0");let E=globalThis,P=E.trustedTypes,R=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,I="?"+O,D=`<${I}>`,L=document,M=()=>L.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,j=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,H=/>/g,q=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,W=/"/g,G=/^(?:script|style|textarea|title)$/i,K=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Z=K(1),Y=(K(2),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),J=new WeakMap,ee=L.createTreeWalker(L,129);function ei(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(t):t}let Q=class Q{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[d,h]=((e,t)=>{let o=e.length-1,r=[],n,a=2===t?"<svg>":"",l=U;for(let t=0;t<o;t++){let o=e[t],c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,null!==(d=l.exec(o)));)p=l.lastIndex,l===U?"!--"===d[1]?l=F:void 0!==d[1]?l=H:void 0!==d[2]?(G.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=q):void 0!==d[3]&&(l=q):l===q?">"===d[0]?(l=n??U,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?q:'"'===d[3]?W:V):l===W||l===V?l=q:l===F||l===H?l=U:(l=q,n=void 0);let u=l===q&&e[t+1].startsWith("/>")?" ":"";a+=l===U?o+D:h>=0?(r.push(c),o.slice(0,h)+T+o.slice(h)+O+u):o+O+(-2===h?t:u)}return[ei(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),r]})(e,t);if(this.el=Q.createElement(d,o),ee.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ee.nextNode())&&c.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(T)){let t=h[a++],o=r.getAttribute(e).split(O),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:l[2],strings:o,ctor:"."===l[1]?it:"?"===l[1]?rt:"@"===l[1]?st:nt}),r.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:n}),r.removeAttribute(e));if(G.test(r.tagName)){let e=r.textContent.split(O),t=e.length-1;if(t>0){r.textContent=P?P.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],M()),ee.nextNode(),c.push({type:2,index:++n});r.append(e[t],M())}}}else if(8===r.nodeType)if(r.data===I)c.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(O,e+1));)c.push({type:7,index:n}),e+=O.length-1}n++}}static createElement(e,t){let o=L.createElement("template");return o.innerHTML=e,o}};function eo(e,t,o=e,r){if(t===Y)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=N(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=eo(e,n._$AS(e,t.values),n,r)),t}let et=class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??L).importNode(t,!0);ee.currentNode=r;let n=ee.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ot(n,n.nextSibling,this,e):1===c.type?t=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(t=new at(n,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(n=ee.nextNode(),a++)}return ee.currentNode=L,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let ot=class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let o;N(e=eo(this,e,t))?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):B(o=e)||"function"==typeof o?.[Symbol.iterator]?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==X&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(L.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(ei(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new et(r,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new Q(e)),t}T(e){B(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new ot(this.k(M()),this.k(M()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let nt=class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=X}_$AI(e,t=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!N(e=eo(this,e,t,0))||e!==this._$AH&&e!==Y)&&(this._$AH=e);else{let r,l,c=e;for(e=n[0],r=0;r<n.length-1;r++)(l=eo(this,c[o+r],t,r))===Y&&(l=this._$AH[r]),a||=!N(l)||l!==this._$AH[r],l===X?e=X:e!==X&&(e+=(l??"")+n[r+1]),this._$AH[r]=l}a&&!r&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let it=class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}};let rt=class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}};let st=class st extends nt{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=eo(this,e,t,0)??X)===Y)return;let o=this._$AH,r=e===X&&o!==X||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==X&&(o===X||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let at=class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eo(this,e)}};let er=E.litHtmlPolyfillSupport;er?.(Q,ot),(E.litHtmlVersions??=[]).push("3.0.0");let ct=class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=o?.renderBefore??null;r._$litPart$=n=new ot(t.insertBefore(M(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});let en=globalThis.litElementPolyfillSupport;en?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");let es={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:S};function ea(e){return(t,o)=>"object"==typeof o?((e=es,t,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}let el=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ec(e,t){return(o,r,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:l}="object"==typeof r?o:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return el(o,r,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),l.call(this,t)),t}return a(this)}})}return el(o,r,{get(){return a(this)}})}}let gt=class gt extends ct{};let ed=p`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,eh=p``,ep=p`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,eu=Math.min,eg=Math.max,ef=Math.round,em=(Math.floor,e=>({x:e,y:e})),eb={left:"right",right:"left",bottom:"top",top:"bottom"},ev={start:"end",end:"start"};function ey(e,t){return"function"==typeof e?e(t):e}function ew(e){return e.split("-")[0]}function ek(e){return e.split("-")[1]}function ex(e){return"x"===e?"y":"x"}function e$(e){return"y"===e?"height":"width"}function e_(e){return["top","bottom"].includes(ew(e))?"y":"x"}function eC(e){return e.replace(/start|end/g,e=>ev[e])}function eS(e){return e.replace(/left|right|bottom|top/g,e=>eb[e])}function eA(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eE(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function eP(e,t,o){let r,{reference:n,floating:a}=e,l=e_(t),c=ex(e_(t)),d=e$(c),h=ew(t),p="y"===l,u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,f=n[d]/2-a[d]/2;switch(h){case"top":r={x:u,y:n.y-a.height};break;case"bottom":r={x:u,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:g};break;case"left":r={x:n.x-a.width,y:g};break;default:r={x:n.x,y:n.y}}switch(ek(t)){case"start":r[c]-=f*(o&&p?-1:1);break;case"end":r[c]+=f*(o&&p?-1:1)}return r}async function eR(e,t){var o;void 0===t&&(t={});let{x:r,y:n,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=ey(t,e),m=eA(f),b=c[g?"floating"===u?"reference":"floating":u],v=eE(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{...l.floating,x:r,y:n}:l.reference,w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await (null==a.isElement?void 0:a.isElement(w))&&await (null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=eE(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}function eT(e){return eM(e)?(e.nodeName||"").toLowerCase():"#document"}function eO(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function eL(e){var t;return null==(t=(eM(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eM(e){return e instanceof Node||e instanceof eO(e).Node}function ez(e){return e instanceof Element||e instanceof eO(e).Element}function eN(e){return e instanceof HTMLElement||e instanceof eO(e).HTMLElement}function eB(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eO(e).ShadowRoot)}function ej(e){let{overflow:t,overflowX:o,overflowY:r,display:n}=eq(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function eU(e){let t=eF(),o=eq(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function eF(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eH(e){return["html","body","#document"].includes(eT(e))}function eq(e){return eO(e).getComputedStyle(e)}function eV(e){return ez(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eW(e){if("html"===eT(e))return e;let t=e.assignedSlot||e.parentNode||eB(e)&&e.host||eL(e);return eB(t)?t.host:t}function eG(e){let t=eq(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=eN(e),a=n?e.offsetWidth:o,l=n?e.offsetHeight:r,c=ef(o)!==a||ef(r)!==l;return c&&(o=a,r=l),{width:o,height:r,$:c}}function eK(e){return ez(e)?e:e.contextElement}function eZ(e){let t=eK(e);if(!eN(t))return em(1);let o=t.getBoundingClientRect(),{width:r,height:n,$:a}=eG(t),l=(a?ef(o.width):o.width)/r,c=(a?ef(o.height):o.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let eY=em(0);function eX(e){let t=eO(e);return eF()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:eY}function eQ(e,t,o,r){var n;void 0===t&&(t=!1),void 0===o&&(o=!1);let a=e.getBoundingClientRect(),l=eK(e),c=em(1);t&&(r?ez(r)&&(c=eZ(r)):c=eZ(e));let d=(void 0===(n=o)&&(n=!1),!(!r||n&&r!==eO(l))&&n)?eX(l):em(0),h=(a.left+d.x)/c.x,p=(a.top+d.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let e=eO(l),t=r&&ez(r)?eO(r):r,o=e.frameElement;for(;o&&r&&t!==e;){let e=eZ(o),t=o.getBoundingClientRect(),r=eq(o),n=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;h*=e.x,p*=e.y,u*=e.x,g*=e.y,h+=n,p+=a,o=eO(o).frameElement}}return eE({width:u,height:g,x:h,y:p})}function eJ(e){return eQ(eL(e)).left+eV(e).scrollLeft}function e0(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=eO(e),r=eL(e),n=o.visualViewport,a=r.clientWidth,l=r.clientHeight,c=0,d=0;if(n){a=n.width,l=n.height;let e=eF();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,d=n.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)r=function(e){let t=eL(e),o=eV(e),r=e.ownerDocument.body,n=eg(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=eg(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-o.scrollLeft+eJ(e),c=-o.scrollTop;return"rtl"===eq(r).direction&&(l+=eg(t.clientWidth,r.clientWidth)-n),{width:n,height:a,x:l,y:c}}(eL(e));else if(ez(t))r=function(e,t){let o=eQ(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,a=eN(e)?eZ(e):em(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:n*a.x,y:r*a.y}}(t,o);else{let o=eX(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return eE(r)}function e1(e,t){return eN(e)&&"fixed"!==eq(e).position?t?t(e):e.offsetParent:null}function e2(e,t){let o=eO(e);if(!eN(e))return o;let r=e1(e,t);for(;r&&["table","td","th"].includes(eT(r))&&"static"===eq(r).position;)r=e1(r,t);return r&&("html"===eT(r)||"body"===eT(r)&&"static"===eq(r).position&&!eU(r))?o:r||function(e){let t=eW(e);for(;eN(t)&&!eH(t);){if(eU(t))return t;t=eW(t)}return null}(e)||o}let e5={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:r}=e,n=eN(o),a=eL(o);if(o===a)return t;let l={scrollLeft:0,scrollTop:0},c=em(1),d=em(0);if((n||!n&&"fixed"!==r)&&(("body"!==eT(o)||ej(a))&&(l=eV(o)),eN(o))){let e=eQ(o);c=eZ(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x,y:t.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:eL,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e,a=[..."clippingAncestors"===o?function(e,t){let o=t.get(e);if(o)return o;let r=(function e(t,o,r){var n;void 0===o&&(o=[]),void 0===r&&(r=!0);let a=function e(t){let o=eW(t);return eH(o)?t.ownerDocument?t.ownerDocument.body:t.body:eN(o)&&ej(o)?o:e(o)}(t),l=a===(null==(n=t.ownerDocument)?void 0:n.body),c=eO(a);return l?o.concat(c,c.visualViewport||[],ej(a)?a:[],c.frameElement&&r?e(c.frameElement):[]):o.concat(a,e(a,[],r))})(e,[],!1).filter(e=>ez(e)&&"body"!==eT(e)),n=null,a="fixed"===eq(e).position,l=a?eW(e):e;for(;ez(l)&&!eH(l);){let t=eq(l),o=eU(l);o||"fixed"!==t.position||(n=null),(a?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||ej(l)&&!o&&function e(t,o){let r=eW(t);return!(r===o||!ez(r)||eH(r))&&("fixed"===eq(r).position||e(r,o))}(e,l))?r=r.filter(e=>e!==l):n=t,l=eW(l)}return t.set(e,r),r}(t,this._c):[].concat(o),r],l=a[0],c=a.reduce((e,o)=>{let r=e0(t,o,n);return e.top=eg(r.top,e.top),e.right=eu(r.right,e.right),e.bottom=eu(r.bottom,e.bottom),e.left=eg(r.left,e.left),e},e0(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:e2,getElementRects:async function(e){let{reference:t,floating:o,strategy:r}=e,n=this.getOffsetParent||e2,a=this.getDimensions;return{reference:function(e,t,o){let r=eN(t),n=eL(t),a="fixed"===o,l=eQ(e,!0,a,t),c={scrollLeft:0,scrollTop:0},d=em(0);if(r||!r&&!a)if(("body"!==eT(t)||ej(n))&&(c=eV(t)),r){let e=eQ(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=eJ(n));return{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}(t,await n(o),r),floating:{x:0,y:0,...await a(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return eG(e)},getScale:eZ,isElement:ez,isRTL:function(e){return"rtl"===eq(e).direction}},e3=p`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var e6,e9=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let xe=class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ep,ed,e3]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t;let o,r=[{name:"offset",options:6,async fn(e){let{x:t,y:o}=e,r=await async function(e,t){let{placement:o,platform:r,elements:n}=e,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),l=ew(o),c=ek(o),d="y"===e_(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=ey(6,e),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}(e,6);return{x:t+r.x,y:o+r.y,data:r}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,r,n,a,l;let{placement:c,middlewareData:d,rects:h,initialPlacement:p,platform:u,elements:g}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=ey(t,e);if(null!=(o=d.arrow)&&o.alignmentOffset)return{};let x=ew(c),_=ew(p)===p,C=await (null==u.isRTL?void 0:u.isRTL(g.floating)),S=b||(_||!w?[eS(p)]:function(e){let t=eS(e);return[eC(e),t,eC(t)]}(p));b||"none"===y||S.push(...function(e,t,o,r){let n=ek(e),a=function(e,t,o){let r=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":return o?t?n:r:t?r:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(ew(e),"start"===o,r);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(eC)))),a}(p,w,y,C));let A=[p,...S],E=await eR(e,k),P=[],R=(null==(r=d.flip)?void 0:r.overflows)||[];if(f&&P.push(E[x]),m){let e=function(e,t,o){void 0===o&&(o=!1);let r=ek(e),n=ex(e_(e)),a=e$(n),l="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=eS(l)),[l,eS(l)]}(c,h,C);P.push(E[e[0]],E[e[1]])}if(R=[...R,{placement:c,overflows:P}],!P.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:R},reset:{placement:t}};let o=null==(a=R.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!o)switch(v){case"bestFit":{let e=null==(l=R.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(o=e);break}case"initialPlacement":o=p}if(c!==o)return{reset:{placement:o}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:o,y:r,placement:n}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=ey(e,t),h={x:o,y:r},p=await eR(t,d),u=e_(ew(n)),g=ex(u),f=h[g],m=h[u];if(a){let e="y"===g?"bottom":"right";f=eg(f+p["y"===g?"top":"left"],eu(f,f-p[e]))}if(l){let e="y"===u?"bottom":"right";m=eg(m+p["y"===u?"top":"left"],eu(m,m-p[e]))}let b=c.fn({...t,[g]:f,[u]:m});return{...b,data:{x:b.x-o,y:b.y-r}}}}];this.arrowEl&&r.push({name:"arrow",options:o={element:this.arrowEl},async fn(e){let{x:t,y:r,placement:n,rects:a,platform:l,elements:c,middlewareData:d}=e,{element:h,padding:p=0}=ey(o,e)||{};if(null==h)return{};let u=eA(p),g={x:t,y:r},f=ex(e_(n)),m=e$(f),b=await l.getDimensions(h),v="y"===f,y=v?"clientHeight":"clientWidth",w=a.reference[m]+a.reference[f]-g[f]-a.floating[m],k=g[f]-a.reference[f],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(h)),_=x?x[y]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[y]||a.floating[m]);let C=_/2-b[m]/2-1,S=eu(u[v?"top":"left"],C),A=eu(u[v?"bottom":"right"],C),E=_-b[m]-A,P=_/2-b[m]/2+(w/2-k/2),R=eg(S,eu(P,E)),T=!d.arrow&&null!=ek(n)&&P!=R&&a.reference[m]/2-(P<S?S:A)-b[m]/2<0,O=T?P<S?P-S:P-E:0;return{[f]:g[f]+O,data:{[f]:R,centerOffset:P-R-O,...T&&{alignmentOffset:O}},reset:T}}}),await ((e,t,o)=>{let r=new Map,n={platform:e5,...o},a={...n.platform,_c:r};return(async(e,t,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await (null==l.isRTL?void 0:l.isRTL(t)),h=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:u}=eP(h,r,d),g=r,f={},m=0;for(let o=0;o<c.length;o++){let{name:a,fn:b}=c[o],{x:v,y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:r,placement:g,strategy:n,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:p,y:u}=eP(h,g,d)),o=-1)}return{x:p,y:u,placement:g,strategy:n,middlewareData:f}})(e,t,{...n,platform:a})})(this.triggerEl,this.popoverEl,{middleware:r,placement:this.placement}).then(({x:e,y:t,placement:o,middlewareData:r})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=r.arrow?.x,t=r.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?Z`<div part="arrow" class="arrow"></div>`:""}render(){return Z`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}};e9([ea({type:Boolean})],xe.prototype,"arrow",void 0),e9([ea({type:Boolean})],xe.prototype,"hover",void 0),e9([ea()],xe.prototype,"placement",void 0),e9([ea({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),e9([ea({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),e9([ec('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),e9([ec(".popover")],xe.prototype,"popoverEl",void 0),e9([ec(".arrow")],xe.prototype,"arrowEl",void 0),e9([ea({...void 0,state:!0,attribute:!1})],xe.prototype,"open",void 0);let e7=p`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;let $e=class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ep,ed,e7]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return Z`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ea({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);let e8=p`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;let Se=class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=e8}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return Z`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ea({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);let e4=new Set(["children","localName","ref","style","className"]),te=new WeakMap,tt=(e,t,o,r,n)=>{let a,l,c=n?.[t];void 0===c||o===r?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(a=te.get(e))&&te.set(e,a=new Map),l=a.get(c),void 0!==o?void 0===l?(a.set(c,l={handleEvent:o}),e.addEventListener(c,l)):l.handleEvent=o:void 0!==l&&(a.delete(c),e.removeEventListener(c,l)))},ti=({react:e,tagName:t,elementClass:o,events:r,displayName:n})=>{let a=new Set(Object.keys(r??{})),l=e.forwardRef((n,l)=>{let c=e.useRef(null),d=e.useRef(null),h={},p={};for(let[e,t]of Object.entries(n))e4.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in o.prototype?p[e]=t:h[e]=t;return e.useLayoutEffect(()=>{if(null!==d.current){for(let e in p)tt(d.current,e,n[e],c.current?c.current[e]:void 0,r);c.current=n}}),e.useLayoutEffect(()=>{d.current?.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)}})});return l.displayName=n??o.name,l};var to=eI(294);let tr=ti({react:to,tagName:Se.elementName,elementClass:Se}),tn=p`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,ts=p`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var ta=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let He=class He extends gt{static{this.styles=[ep,tn]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?Z`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:Z`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}};ta([ea()],He.prototype,"src",void 0),ta([ea()],He.prototype,"indicator",void 0);let Le=class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ep,ts]}render(){return Z`<slot class="avatar-group" part="base"></slot>`}};let tl=ti({react:to,tagName:He.elementName,elementClass:He}),tc=ti({react:to,tagName:Le.elementName,elementClass:Le}),td=p`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;let Be=class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=td}static{this.elementName="gk-badge"}render(){return Z`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ea()],Be.prototype,"variant",void 0);let th=ti({react:to,tagName:Be.elementName,elementClass:Be}),tp=p`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tu=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let Ge=class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tp}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return Z`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}};tu([ea({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),tu([ea({reflect:!0})],Ge.prototype,"type",void 0),tu([ea()],Ge.prototype,"variant",void 0);let tg=ti({react:to,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),tf=p`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tm=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let Je=class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ep,ed,tf]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return Z`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>Z`<span class="complexity-indicator__box"></span>`)}</div>`}};tm([ea({type:Number})],Je.prototype,"level",void 0),tm([ea()],Je.prototype,"label",void 0);let tb=ti({react:to,tagName:Je.elementName,elementClass:Je}),tv=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ty=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tw=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tk=new Map,tx=["th","st","nd","rd"];var t$=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let po=class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ep]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(n,a){let l=("number"==typeof n?n:n.getTime())-(new Date).getTime();for(let[n,c,d,h]of tw){let p=Math.abs(l);if(p>=c||1e3===c)return a?(null==e&&(e=null!=r?r.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(p/d)}${h}`:(null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),r.format(Math.round(l/d),n))):(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(l/d),n))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return Z`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,o,r,n=!0){let a=`${(void 0)??""}:${o=o??void 0}`,l=tk.get(a);if(null==l){let e,r=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=ty.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(tv))if(null!=t)for(let e in t){let r=t[e];if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===r?"2-digit":"numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);e=t,l=new Intl.DateTimeFormat(e,r),n&&tk.set(a,l)}if(null==o||ty.test(o))return l.format(e);let c=l.formatToParts(e);return o.replace(tv,(o,a,l,d,h,p,u,g,f,m,b,v,y,w,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let o in k){let a=k[o];if(null==a)continue;let l=c.find(e=>e.type===o);if("Do"===a&&"day"===l?.type){var x=Number(l.value);let e=x%100;return`${x}${tx[(e-20)%10]??tx[e]??tx[0]}`}if("a"===a&&"dayPeriod"===l?.type){let o=(function(e){let o=`${r??""}:time:${e}`,a=tk.get(o);if(null==a){let l;l=null==r?t:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",timeStyle:e}),n&&tk.set(o,a)}return a})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(o??l)?.value??""}`}return l?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}};t$([ea({converter:(n=navigator.language,{toAttribute:e=>e.toLocaleDateString(n),fromAttribute:e=>new Date(e)}),reflect:!0})],po.prototype,"date",void 0),t$([ea()],po.prototype,"format",void 0);let t_=ti({react:to,tagName:po.elementName,elementClass:po}),tC=p`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tS=p`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tA=p`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;let yo=class yo extends gt{static{this.styles=[ep,tA]}static{this.elementName="gk-focus-item"}render(){return Z`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}};let vo=class vo extends gt{static{this.styles=[ep,tS]}static{this.elementName="gk-focus-row"}render(){return Z`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}};let bo=class bo extends gt{static{this.styles=[ep,tS,tA,tC]}static{this.elementName="gk-focus-container"}render(){return Z`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}};let tE=ti({react:to,tagName:yo.elementName,elementClass:yo}),tP=ti({react:to,tagName:vo.elementName,elementClass:vo}),tR=ti({react:to,tagName:bo.elementName,elementClass:bo});let $o=class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let tT=(a=class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let o in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.it)e in t||(o.remove(e),this.it.delete(e));for(let e in t){let r=!!t[e];r===this.it.has(e)||this.st?.has(e)||(r?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return Y}},(...e)=>({_$litDirective$:a,values:e})),tO=p`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var tI=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let Ro=class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ep,ed,tO]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return Z`<div class="field"><label class="${tT({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${tT({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${this.autocomplete??X}" autocorrect="${this.autocorrect??X}" class="input" ?disabled="${this.disabled}" id="input" name="${this.name??X}" part="input" placeholder="${this.placeholder??X}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}};tI([ea()],Ro.prototype,"autocomplete",void 0),tI([ea()],Ro.prototype,"autocorrect",void 0),tI([ea({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),tI([ea()],Ro.prototype,"label",void 0),tI([ea({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),tI([ea()],Ro.prototype,"name",void 0),tI([ea()],Ro.prototype,"placeholder",void 0),tI([ea({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),tI([ea({reflect:!0})],Ro.prototype,"type",void 0),tI([ea()],Ro.prototype,"value",void 0);let tD=p`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,tL=p`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,tM=p`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;let Mo=class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ep,tD]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),o=t.length,r=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?r=(r-1+o)%o:"ArrowDown"===e.key?r=(r+1)%o:"Home"===e.key?r=0:"End"===e.key&&(r=o-1),this._setCurrentItem(t[r]),t[r].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return Z`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([(e6={flatten:!0},(e,t)=>{let{slot:o,selector:r}=e6??{},n="slot"+(o?`[name=${o}]`:":not([name])");return el(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(e6)??[];return void 0===r?t:t.filter(e=>e.matches(r))}})})],Mo.prototype,"slotChildren",void 0);let Do=class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ep,tL]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return Z`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ea({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);let Ho=class Ho extends gt{static{this.styles=[ep,tM]}static{this.elementName="gk-menu-label"}render(){return Z`<slot class="menu-label" part="base"></slot>`}};let tz=ti({react:to,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),tN=ti({react:to,tagName:Do.elementName,elementClass:Do}),tB=ti({react:to,tagName:Ho.elementName,elementClass:Ho}),tj=p`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;let Bo=class Bo extends gt{static{this.styles=[ep,tj]}static{this.elementName="gk-tag"}render(){return Z`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ea()],Bo.prototype,"variant",void 0);let tU=ti({react:to,tagName:Bo.elementName,elementClass:Bo}),tF=ti({react:to,tagName:$e.elementName,elementClass:$e})})(),eD.Tn;var eL=eD.qE,eM=(eD.HE,eD.Ct),ez=eD.zx,eN=(eD.M1,eD.sX,eD.D0,eD.fs,eD.Tw,eD.ud,eD.wt,eD.ne,eD.Ku,eD.FU,eD.XO,eD.Ze,eD.K$,eD.cX,eD.Js,eD.J9,eD.si,eD.sg,eD.hW,eD.II,eD.v2),eB=eD.sN,ej=(eD.Lb,eD.J2),eU=(eD.$$,eD.Vp,eD.u,eD.fW);eD.WV,eD.h4,eD.kZ;let eF=globalThis,eH=eF.ShadowRoot&&(void 0===eF.ShadyCSS||eF.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eq=Symbol(),eV=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==eq)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eH&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=eV.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&eV.set(t,e))}return e}toString(){return this.cssText}};let eW=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,eq),eG=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,eq),eK=eH?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return eW(t)})(e):e,{is:eZ,defineProperty:eY,getOwnPropertyDescriptor:eX,getOwnPropertyNames:eQ,getOwnPropertySymbols:eJ,getPrototypeOf:e0}=Object,e1=globalThis,e2=e1.trustedTypes,e5=e2?e2.emptyScript:"",e3=e1.reactiveElementPolyfillSupport,e6={toAttribute(e,t){switch(t){case Boolean:e=e?e5:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},e9=(e,t)=>!eZ(e,t),e7={attribute:!0,type:String,converter:e6,reflect:!1,useDefault:!1,hasChanged:e9};Symbol.metadata??=Symbol("metadata"),e1.litPropertyMetadata??=new WeakMap;let reactive_element_y=class reactive_element_y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=e7){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&eY(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:n}=eX(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);n?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??e7}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=e0(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...eQ(e),...eJ(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(eK(o));else void 0!==e&&t.push(eK(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(eH)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=eF.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:e6).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:e6;this._$Em=r,this[r]=n.fromAttribute(t,e.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){let r=this.constructor,n=this[e];if(!(((o??=r.getPropertyOptions(e)).hasChanged??e9)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:n},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};reactive_element_y.elementStyles=[],reactive_element_y.shadowRootOptions={mode:"open"},reactive_element_y.elementProperties=new Map,reactive_element_y.finalized=new Map,e3?.({ReactiveElement:reactive_element_y}),(e1.reactiveElementVersions??=[]).push("2.1.0");let e8=globalThis,e4=e8.trustedTypes,te=e4?e4.createPolicy("lit-html",{createHTML:e=>e}):void 0,tt="$lit$",ti=`lit$${Math.random().toFixed(9).slice(2)}$`,to="?"+ti,tr=`<${to}>`,tn=document,ts=()=>tn.createComment(""),ta=e=>null===e||"object"!=typeof e&&"function"!=typeof e,tl=Array.isArray,tc=e=>tl(e)||"function"==typeof e?.[Symbol.iterator],td=`[ 	
\f\r]`,th=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tp=/-->/g,tu=/>/g,tg=RegExp(`>|${td}(?:([^\\s"'>=/]+)(${td}*=${td}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tf=/'/g,tm=/"/g,tb=/^(?:script|style|textarea|title)$/i,tv=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ty=tv(1),tw=(tv(2),tv(3),Symbol.for("lit-noChange")),tk=Symbol.for("lit-nothing"),tx=new WeakMap,t$=tn.createTreeWalker(tn,129);function t_(e,t){if(!tl(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==te?te.createHTML(t):t}let tC=(e,t)=>{let o=e.length-1,r=[],n,a=2===t?"<svg>":3===t?"<math>":"",l=th;for(let t=0;t<o;t++){let o=e[t],c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,null!==(d=l.exec(o)));)p=l.lastIndex,l===th?"!--"===d[1]?l=tp:void 0!==d[1]?l=tu:void 0!==d[2]?(tb.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=tg):void 0!==d[3]&&(l=tg):l===tg?">"===d[0]?(l=n??th,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?tg:'"'===d[3]?tm:tf):l===tm||l===tf?l=tg:l===tp||l===tu?l=th:(l=tg,n=void 0);let u=l===tg&&e[t+1].startsWith("/>")?" ":"";a+=l===th?o+tr:h>=0?(r.push(c),o.slice(0,h)+tt+o.slice(h)+ti+u):o+ti+(-2===h?t:u)}return[t_(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let lit_html_N=class lit_html_N{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[d,h]=tC(e,t);if(this.el=lit_html_N.createElement(d,o),t$.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=t$.nextNode())&&c.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(tt)){let t=h[a++],o=r.getAttribute(e).split(ti),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:l[2],strings:o,ctor:"."===l[1]?lit_html_H:"?"===l[1]?lit_html_I:"@"===l[1]?lit_html_L:lit_html_k}),r.removeAttribute(e)}else e.startsWith(ti)&&(c.push({type:6,index:n}),r.removeAttribute(e));if(tb.test(r.tagName)){let e=r.textContent.split(ti),t=e.length-1;if(t>0){r.textContent=e4?e4.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],ts()),t$.nextNode(),c.push({type:2,index:++n});r.append(e[t],ts())}}}else if(8===r.nodeType)if(r.data===to)c.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(ti,e+1));)c.push({type:7,index:n}),e+=ti.length-1}n++}}static createElement(e,t){let o=tn.createElement("template");return o.innerHTML=e,o}};function tS(e,t,o=e,r){if(t===tw)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=ta(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=tS(e,n._$AS(e,t.values),n,r)),t}let lit_html_M=class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??tn).importNode(t,!0);t$.currentNode=r;let n=t$.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new lit_html_R(n,n.nextSibling,this,e):1===c.type?t=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(t=new z(n,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(n=t$.nextNode(),a++)}return t$.currentNode=tn,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let lit_html_R=class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=tk,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ta(e=tS(this,e,t))?e===tk||null==e||""===e?(this._$AH!==tk&&this._$AR(),this._$AH=tk):e!==this._$AH&&e!==tw&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):tc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==tk&&ta(this._$AH)?this._$AA.nextSibling.data=e:this.T(tn.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_N.createElement(t_(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new lit_html_M(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=tx.get(e.strings);return void 0===t&&tx.set(e.strings,t=new lit_html_N(e)),t}k(e){tl(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new lit_html_R(this.O(ts()),this.O(ts()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let lit_html_k=class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=tk,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=tk}_$AI(e,t=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!ta(e=tS(this,e,t,0))||e!==this._$AH&&e!==tw)&&(this._$AH=e);else{let r,l,c=e;for(e=n[0],r=0;r<n.length-1;r++)(l=tS(this,c[o+r],t,r))===tw&&(l=this._$AH[r]),a||=!ta(l)||l!==this._$AH[r],l===tk?e=tk:e!==tk&&(e+=(l??"")+n[r+1]),this._$AH[r]=l}a&&!r&&this.j(e)}j(e){e===tk?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let lit_html_H=class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===tk?void 0:e}};let lit_html_I=class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==tk)}};let lit_html_L=class lit_html_L extends lit_html_k{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=tS(this,e,t,0)??tk)===tw)return;let o=this._$AH,r=e===tk&&o!==tk||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==tk&&(o===tk||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tS(this,e)}};let tA=e8.litHtmlPolyfillSupport;tA?.(lit_html_N,lit_html_R),(e8.litHtmlVersions??=[]).push("3.3.0");let tE=globalThis;let lit_element_i=class lit_element_i extends reactive_element_y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=o?.renderBefore??null;r._$litPart$=n=new lit_html_R(t.insertBefore(ts(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tw}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,tE.litElementHydrateSupport?.({LitElement:lit_element_i});let tP=tE.litElementPolyfillSupport;tP?.({LitElement:lit_element_i}),(tE.litElementVersions??=[]).push("4.2.0");let tR=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tT={attribute:!0,type:String,converter:e6,reflect:!1,hasChanged:e9};function tO(e){return(t,o)=>"object"==typeof o?((e=tT,t,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),a.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function tI(e){return tO({...e,state:!0,attribute:!1})}let tD=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function tL(e,t){return(o,r,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof r?o:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return tD(o,r,{get(){let o=e.call(this);return void 0===o&&(null!==(o=a(this))||this.hasUpdated)&&t.call(this,o),o}})}return tD(o,r,{get(){return a(this)}})}}function tM(e){return(t,o)=>{let{slot:r,selector:n}=e??{},a="slot"+(r?`[name=${r}]`:":not([name])");return tD(t,o,{get(){let t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===n?o:o.filter(e=>e.matches(n))}})}}function tz(e,t,o){return e?t(e):o?.(e)}let tN="commitDetails",tB=`\0
\0`,tj=new IpcCommand(tN,"commit/suggestChanges"),tU=new IpcCommand(tN,"commit/actions/execute"),tF=new IpcCommand(tN,"file/actions/execute"),tH=new IpcCommand(tN,"file/open"),tq=new IpcCommand(tN,"file/openOnRemote"),tV=new IpcCommand(tN,"file/compareWorking"),tW=new IpcCommand(tN,"file/comparePrevious"),tG=new IpcCommand(tN,"file/stage"),tK=new IpcCommand(tN,"file/unstage"),tZ=new IpcCommand(tN,"pickCommit"),tY=new IpcCommand(tN,"searchCommit"),tX=new IpcCommand(tN,"switchMode");new IpcCommand(tN,"autolinkSettings");let tQ=new IpcCommand(tN,"pin"),tJ=new IpcCommand(tN,"navigate"),t0=new IpcCommand(tN,"preferences/update"),t1=new IpcCommand(tN,"wip/createPatch"),t2=new IpcCommand(tN,"wip/changeReviewMode"),t5=new IpcCommand(tN,"wip/showCodeSuggestion"),t3=new IpcCommand(tN,"fetch"),t6=new IpcCommand(tN,"publish"),t9=new IpcCommand(tN,"push"),t7=new IpcCommand(tN,"pull"),t8=new IpcCommand(tN,"switch"),t4=new IpcCommand(tN,"openPullRequestChanges"),ie=new IpcCommand(tN,"openPullRequestComparison"),ii=new IpcCommand(tN,"openPullRequestOnRemote"),io=new IpcCommand(tN,"openPullRequestDetails"),ir=new IpcRequest(tN,"explain"),is=new IpcRequest(tN,"generate"),ia=new IpcNotification(tN,"didChange",!0),il=new IpcNotification(tN,"didChange/wip");new IpcNotification(tN,"org/settings/didChange");let ic=new IpcNotification(tN,"didChange/account"),id=new IpcNotification(tN,"didChange/patch"),ih=new IpcNotification(tN,"didChange/integrations"),ip=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),iu=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142"});var ig=Object.defineProperty,im=Object.getOwnPropertyDescriptor,ib=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?im(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ig(t,o,a),a};function iv(e,t=""){return eW(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let iy=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};iy.styles=eG`
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

		${iv(ip)}
		${iv(iu,"gl-")}

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
	`,ib([tO({reflect:!0})],iy.prototype,"icon",2),ib([tO({reflect:!0})],iy.prototype,"modifier",2),ib([tO({type:Number})],iy.prototype,"size",2),ib([tO({reflect:!0})],iy.prototype,"flip",2),ib([tO({reflect:!0})],iy.prototype,"rotate",2),iy=ib([tR("code-icon")],iy);let iw=eG`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,ik=eG`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var ix=Object.defineProperty,i$=Object.getOwnPropertyDescriptor,i_=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?i$(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ix(t,o,a),a};let iC=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ty`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};iC.styles=[iw,ik],i_([tO({type:Boolean})],iC.prototype,"pulse",2),iC=i_([tR("gl-indicator")],iC);var iS=Object.defineProperty,iA=Object.defineProperties,iE=Object.getOwnPropertyDescriptor,iP=Object.getOwnPropertyDescriptors,iR=Object.getOwnPropertySymbols,iT=Object.prototype.hasOwnProperty,iO=Object.prototype.propertyIsEnumerable,iI=e=>{throw TypeError(e)},iD=(e,t,o)=>t in e?iS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,iL=(e,t)=>{for(var o in t||(t={}))iT.call(t,o)&&iD(e,o,t[o]);if(iR)for(var o of iR(t))iO.call(t,o)&&iD(e,o,t[o]);return e},iM=(e,t)=>iA(e,iP(t)),iz=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?iE(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&iS(t,o,a),a},iN=(e,t,o)=>t.has(e)||iI("Cannot "+o),iB=new Map,ij=new WeakMap;function iU(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iF(e,t){iB.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iH(e,t,o){let r=ij.get(e);if(null==r?void 0:r[t])return iU(r[t],o.dir);let n=iB.get(t);return n?iU(n,o.dir):{keyframes:[],options:{duration:0}}}let iq=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=tk,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tk||null==e)return this._t=void 0,this.it=e;if(e===tw)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iV=iq(unsafe_html_e);function iW(e){return e?.includes(`
`)?iV(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}var iG=eG`
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
`,iK=eG`
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
`;let iZ=new Set,iY=new Map,iX="ltr",iQ="en",iJ="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(iJ){let e=new MutationObserver(i1);iX=document.documentElement.dir||"ltr",iQ=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function i0(...e){e.map(e=>{let t=e.$code.toLowerCase();iY.has(t)?iY.set(t,Object.assign(Object.assign({},iY.get(t)),e)):iY.set(t,e),a||(a=e)}),i1()}function i1(){iJ&&(iX=document.documentElement.dir||"ltr",iQ=document.documentElement.lang||navigator.language),[...iZ.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iZ.add(this.host)}hostDisconnected(){iZ.delete(this.host)}dir(){return`${this.host.dir||iX}`.toLowerCase()}lang(){return`${this.host.lang||iQ}`.toLowerCase()}getTranslationData(e){var t,o;let r=new Intl.Locale(e.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),a=null!=(o=null==(t=null==r?void 0:r.region)?void 0:t.toLowerCase())?o:"",l=iY.get(`${n}-${a}`),c=iY.get(n);return{locale:r,language:n,region:a,primary:l,secondary:c}}exists(e,t){var o;let{primary:r,secondary:n}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!n&&!!n[e]||!!t.includeFallback&&!!a&&!!a[e]}term(e,...t){let o,{primary:r,secondary:n}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(n&&n[e])o=n[e];else{if(!a||!a[e])return String(e);o=a[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var i2={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};i0(i2);var i5=class extends LocalizeController{};i0(i2);var i3=eG`
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
`,i6=class extends lit_element_i{constructor(){let e;super(),(e=g).has(this)?iI("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,iL({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let n=" (unknown version)",a=n;if("version"in t&&t.version&&(n=" v"+t.version),"version"in r&&r.version&&(a=" v"+r.version),n&&a&&n===a)return}attributeChangedCallback(e,t,o){let r,n;if(iN(this,r=g,"read from private field"),n?!n.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),iN(this,e=g,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};g=new WeakMap,i6.version="2.20.1",i6.dependencies={},iz([tO()],i6.prototype,"dir",2),iz([tO()],i6.prototype,"lang",2);let i9=Math.min,i7=Math.max,i8=Math.round,i4=Math.floor,oe=e=>({x:e,y:e}),oi={left:"right",right:"left",bottom:"top",top:"bottom"},oo={start:"end",end:"start"};function or(e,t){return"function"==typeof e?e(t):e}function on(e){return e.split("-")[0]}function os(e){return e.split("-")[1]}function oa(e){return"x"===e?"y":"x"}function ol(e){return"y"===e?"height":"width"}function oc(e){return["top","bottom"].includes(on(e))?"y":"x"}function od(e){return e.replace(/start|end/g,e=>oo[e])}function oh(e){return e.replace(/left|right|bottom|top/g,e=>oi[e])}function op(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function ou(e){let{x:t,y:o,width:r,height:n}=e;return{width:r,height:n,top:o,left:t,right:t+r,bottom:o+n,x:t,y:o}}function og(e,t,o){let r,{reference:n,floating:a}=e,l=oc(t),c=oa(oc(t)),d=ol(c),h=on(t),p="y"===l,u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,f=n[d]/2-a[d]/2;switch(h){case"top":r={x:u,y:n.y-a.height};break;case"bottom":r={x:u,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:g};break;case"left":r={x:n.x-a.width,y:g};break;default:r={x:n.x,y:n.y}}switch(os(t)){case"start":r[c]-=f*(o&&p?-1:1);break;case"end":r[c]+=f*(o&&p?-1:1)}return r}let of=async(e,t,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await (null==l.isRTL?void 0:l.isRTL(t)),h=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:u}=og(h,r,d),g=r,f={},m=0;for(let o=0;o<c.length;o++){let{name:a,fn:b}=c[o],{x:v,y:y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:r,placement:g,strategy:n,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:p,y:u}=og(h,g,d)),o=-1)}return{x:p,y:u,placement:g,strategy:n,middlewareData:f}};async function om(e,t){var o;void 0===t&&(t={});let{x:r,y:n,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=or(t,e),m=op(f),b=c[g?"floating"===u?"reference":"floating":u],v=ou(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{x:r,y:n,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await (null==a.isElement?void 0:a.isElement(w))&&await (null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=ou(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}async function ob(e,t){let{placement:o,platform:r,elements:n}=e,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),l=on(o),c=os(o),d="y"===oc(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=or(t,e),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}function ov(){return"undefined"!=typeof window}function oy(e){return ox(e)?(e.nodeName||"").toLowerCase():"#document"}function ow(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ok(e){var t;return null==(t=(ox(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ox(e){return!!ov()&&(e instanceof Node||e instanceof ow(e).Node)}function o$(e){return!!ov()&&(e instanceof Element||e instanceof ow(e).Element)}function o_(e){return!!ov()&&(e instanceof HTMLElement||e instanceof ow(e).HTMLElement)}function oC(e){return!!ov()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ow(e).ShadowRoot)}function oS(e){let{overflow:t,overflowX:o,overflowY:r,display:n}=oT(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function oA(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function oE(e){let t=oP(),o=o$(e)?oT(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function oP(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function oR(e){return["html","body","#document"].includes(oy(e))}function oT(e){return ow(e).getComputedStyle(e)}function oO(e){return o$(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oI(e){if("html"===oy(e))return e;let t=e.assignedSlot||e.parentNode||oC(e)&&e.host||ok(e);return oC(t)?t.host:t}function oD(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);let n=function e(t){let o=oI(t);return oR(o)?t.ownerDocument?t.ownerDocument.body:t.body:o_(o)&&oS(o)?o:e(o)}(e),a=n===(null==(r=e.ownerDocument)?void 0:r.body),l=ow(n);if(a){let e=oL(l);return t.concat(l,l.visualViewport||[],oS(n)?n:[],e&&o?oD(e):[])}return t.concat(n,oD(n,[],o))}function oL(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oM(e){let t=oT(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=o_(e),a=n?e.offsetWidth:o,l=n?e.offsetHeight:r,c=i8(o)!==a||i8(r)!==l;return c&&(o=a,r=l),{width:o,height:r,$:c}}function oz(e){return o$(e)?e:e.contextElement}function oN(e){let t=oz(e);if(!o_(t))return oe(1);let o=t.getBoundingClientRect(),{width:r,height:n,$:a}=oM(t),l=(a?i8(o.width):o.width)/r,c=(a?i8(o.height):o.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let oB=oe(0);function oj(e){let t=ow(e);return oP()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oB}function oU(e,t,o,r){var n;void 0===t&&(t=!1),void 0===o&&(o=!1);let a=e.getBoundingClientRect(),l=oz(e),c=oe(1);t&&(r?o$(r)&&(c=oN(r)):c=oN(e));let d=(void 0===(n=o)&&(n=!1),r&&(!n||r===ow(l))&&n)?oj(l):oe(0),h=(a.left+d.x)/c.x,p=(a.top+d.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let e=ow(l),t=r&&o$(r)?ow(r):r,o=e,n=oL(o);for(;n&&r&&t!==o;){let e=oN(n),t=n.getBoundingClientRect(),r=oT(n),a=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;h*=e.x,p*=e.y,u*=e.x,g*=e.y,h+=a,p+=l,n=oL(o=ow(n))}}return ou({width:u,height:g,x:h,y:p})}function oF(e,t){let o=oO(e).scrollLeft;return t?t.left+o:oU(ok(e)).left+o}function oH(e,t,o){void 0===o&&(o=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(o?0:oF(e,r)),y:r.top+t.scrollTop}}function oq(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=ow(e),r=ok(e),n=o.visualViewport,a=r.clientWidth,l=r.clientHeight,c=0,d=0;if(n){a=n.width,l=n.height;let e=oP();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,d=n.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)r=function(e){let t=ok(e),o=oO(e),r=e.ownerDocument.body,n=i7(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=i7(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-o.scrollLeft+oF(e),c=-o.scrollTop;return"rtl"===oT(r).direction&&(l+=i7(t.clientWidth,r.clientWidth)-n),{width:n,height:a,x:l,y:c}}(ok(e));else if(o$(t))r=function(e,t){let o=oU(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,a=o_(e)?oN(e):oe(1),l=e.clientWidth*a.x,c=e.clientHeight*a.y;return{width:l,height:c,x:n*a.x,y:r*a.y}}(t,o);else{let o=oj(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ou(r)}function oV(e){return"static"===oT(e).position}function oW(e,t){if(!o_(e)||"fixed"===oT(e).position)return null;if(t)return t(e);let o=e.offsetParent;return ok(e)===o&&(o=o.ownerDocument.body),o}function oG(e,t){let o=ow(e);if(oA(e))return o;if(!o_(e)){let t=oI(e);for(;t&&!oR(t);){if(o$(t)&&!oV(t))return t;t=oI(t)}return o}let r=oW(e,t);for(;r&&["table","td","th"].includes(oy(r))&&oV(r);)r=oW(r,t);return r&&oR(r)&&oV(r)&&!oE(r)?o:r||function(e){let t=oI(e);for(;o_(t)&&!oR(t);){if(oE(t))return t;if(oA(t))break;t=oI(t)}return null}(e)||o}let oK=async function(e){let t=this.getOffsetParent||oG,o=this.getDimensions,r=await o(e.floating);return{reference:function(e,t,o){let r=o_(t),n=ok(t),a="fixed"===o,l=oU(e,!0,a,t),c={scrollLeft:0,scrollTop:0},d=oe(0);if(r||!r&&!a)if(("body"!==oy(t)||oS(n))&&(c=oO(t)),r){let e=oU(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=oF(n));a&&!r&&n&&(d.x=oF(n));let h=!n||r||a?oe(0):oH(n,c);return{x:l.left+c.scrollLeft-d.x-h.x,y:l.top+c.scrollTop-d.y-h.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},oZ={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:n}=e,a="fixed"===n,l=ok(r),c=!!t&&oA(t.floating);if(r===l||c&&a)return o;let d={scrollLeft:0,scrollTop:0},h=oe(1),p=oe(0),u=o_(r);if((u||!u&&!a)&&(("body"!==oy(r)||oS(l))&&(d=oO(r)),o_(r))){let e=oU(r);h=oN(r),p.x=e.x+r.clientLeft,p.y=e.y+r.clientTop}let g=!l||u||a?oe(0):oH(l,d,!0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-d.scrollLeft*h.x+p.x+g.x,y:o.y*h.y-d.scrollTop*h.y+p.y+g.y}},getDocumentElement:ok,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e,a=[..."clippingAncestors"===o?oA(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let r=oD(e,[],!1).filter(e=>o$(e)&&"body"!==oy(e)),n=null,a="fixed"===oT(e).position,l=a?oI(e):e;for(;o$(l)&&!oR(l);){let t=oT(l),o=oE(l);o||"fixed"!==t.position||(n=null),(a?!o&&!n:!o&&"static"===t.position&&!!n&&["absolute","fixed"].includes(n.position)||oS(l)&&!o&&function e(t,o){let r=oI(t);return!(r===o||!o$(r)||oR(r))&&("fixed"===oT(r).position||e(r,o))}(e,l))?r=r.filter(e=>e!==l):n=t,l=oI(l)}return t.set(e,r),r}(t,this._c):[].concat(o),r],l=a[0],c=a.reduce((e,o)=>{let r=oq(t,o,n);return e.top=i7(r.top,e.top),e.right=i9(r.right,e.right),e.bottom=i9(r.bottom,e.bottom),e.left=i7(r.left,e.left),e},oq(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:oG,getElementRects:oK,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=oM(e);return{width:t,height:o}},getScale:oN,isElement:o$,isRTL:function(e){return"rtl"===oT(e).direction}};function oY(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let oX=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;let n,a,{placement:l,rects:c,platform:d,elements:h}=t,{apply:p=()=>{},...u}=or(e,t),g=await om(t,u),f=on(l),m=os(l),b="y"===oc(l),{width:v,height:y}=c.floating;"top"===f||"bottom"===f?(n=f,a=m===(await (null==d.isRTL?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(a=f,n="end"===m?"top":"bottom");let w=y-g.top-g.bottom,k=v-g.left-g.right,x=i9(y-g[n],w),_=i9(v-g[a],k),C=!t.middlewareData.shift,S=x,A=_;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(A=k),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(S=w),C&&!m){let e=i7(g.left,0),t=i7(g.right,0),o=i7(g.top,0),r=i7(g.bottom,0);b?A=v-2*(0!==e||0!==t?e+t:i7(g.left,g.right)):S=y-2*(0!==o||0!==r?o+r:i7(g.top,g.bottom))}await p({...t,availableWidth:A,availableHeight:S});let E=await d.getDimensions(h.floating);return v!==E.width||y!==E.height?{reset:{rects:!0}}:{}}}},oQ=iq(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return tw}});function oJ(e){var t=e;for(let e=t;e;e=o0(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=o0(t);e;e=o0(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||oE(t)||"BODY"===e.tagName))return e}return null}function o0(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var o1=class extends i6{constructor(){super(...arguments),this.localize=new i5(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,n=0,a=0,l=0,c=0,d=0,h=0,p=0;o?e.top<t.top?(r=e.left,n=e.bottom,a=e.right,l=e.bottom,c=t.left,d=t.top,h=t.right,p=t.top):(r=t.left,n=t.bottom,a=t.right,l=t.bottom,c=e.left,d=e.top,h=e.right,p=e.top):e.left<t.left?(r=e.right,n=e.top,a=t.left,l=t.top,c=e.right,d=e.bottom,h=t.left,p=t.bottom):(r=t.right,n=t.top,a=e.left,l=e.top,c=t.right,d=t.bottom,h=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,r){let n;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:h=!1}=r,p=oz(e),u=a||l?[...p?oD(p):[],...oD(t)]:[];u.forEach(e=>{a&&e.addEventListener("scroll",o,{passive:!0}),l&&e.addEventListener("resize",o)});let g=p&&d?function(e,t){let o,r=null,n=ok(e);function a(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return!function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();let h=e.getBoundingClientRect(),{left:p,top:u,width:g,height:f}=h;if(c||t(),!g||!f)return;let m=i4(u),b=i4(n.clientWidth-(p+g)),v={rootMargin:-m+"px "+-b+"px "+-i4(n.clientHeight-(u+f))+"px "+-i4(p)+"px",threshold:i7(0,i9(1,d))||1},y=!0;function w(t){let r=t[0].intersectionRatio;if(r!==d){if(!y)return l();r?l(!1,r):o=setTimeout(()=>{l(!1,1e-7)},1e3)}1!==r||oY(h,e.getBoundingClientRect())||l(),y=!1}try{r=new IntersectionObserver(w,{...v,root:n.ownerDocument})}catch{r=new IntersectionObserver(w,v)}r.observe(e)}(!0),a}(p,o):null,f=-1,m=null;c&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),o()}),p&&!h&&m.observe(p),m.observe(t));let b=h?oU(e):null;return h&&function t(){let r=oU(e);b&&!oY(b,r)&&o(),b=r,n=requestAnimationFrame(t)}(),o(),()=>{var e;u.forEach(e=>{a&&e.removeEventListener("scroll",o),l&&e.removeEventListener("resize",o)}),null==g||g(),null==(e=m)||e.disconnect(),m=null,h&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o;let r;if(!this.active||!this.anchorEl)return;let n=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,r;let{x:n,y:a,placement:l,middlewareData:c}=t,d=await ob(t,e);return l===(null==(o=c.offset)?void 0:o.placement)&&null!=(r=c.arrow)&&r.alignmentOffset?{}:{x:n+d.x,y:a+d.y,data:{...d,placement:l}}}}];this.sync?n.push(oX({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&n.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,r,n,a,l;let{placement:c,middlewareData:d,rects:h,initialPlacement:p,platform:u,elements:g}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=or(t,e);if(null!=(o=d.arrow)&&o.alignmentOffset)return{};let x=on(c),_=oc(p),C=on(p)===p,S=await (null==u.isRTL?void 0:u.isRTL(g.floating)),A=b||(C||!w?[oh(p)]:function(e){let t=oh(e);return[od(e),t,od(t)]}(p)),E="none"!==y;!b&&E&&A.push(...function(e,t,o,r){let n=os(e),a=function(e,t,o){let r=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":if(o)return t?n:r;return t?r:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(on(e),"start"===o,r);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(od)))),a}(p,w,y,S));let P=[p,...A],R=await om(e,k),T=[],O=(null==(r=d.flip)?void 0:r.overflows)||[];if(f&&T.push(R[x]),m){let e=function(e,t,o){void 0===o&&(o=!1);let r=os(e),n=oa(oc(e)),a=ol(n),l="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=oh(l)),[l,oh(l)]}(c,h,S);T.push(R[e[0]],R[e[1]])}if(O=[...O,{placement:c,overflows:T}],!T.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=P[e];if(t&&("alignment"!==m||_===oc(t)||O.every(e=>e.overflows[0]>0&&oc(e.placement)===_)))return{data:{index:e,overflows:O},reset:{placement:t}};let o=null==(a=O.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!o)switch(v){case"bestFit":{let e=null==(l=O.filter(e=>{if(E){let t=oc(e.placement);return t===_||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(o=e);break}case"initialPlacement":o=p}if(c!==o)return{reset:{placement:o}}}return{}}}),this.shift&&n.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:n}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=or(o,e),h={x:t,y:r},p=await om(e,d),u=oc(on(n)),g=oa(u),f=h[g],m=h[u];if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",o=f+p[e],r=f-p[t];f=i7(o,i9(f,r))}if(l){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",o=m+p[e],r=m-p[t];m=i7(o,i9(m,r))}let b=c.fn({...e,[g]:f,[u]:m});return{...b,data:{x:b.x-t,y:b.y-r,enabled:{[g]:a,[u]:l}}}}}),this.autoSize?n.push(oX({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push({name:"arrow",options:r={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:n,rects:a,platform:l,elements:c,middlewareData:d}=e,{element:h,padding:p=0}=or(r,e)||{};if(null==h)return{};let u=op(p),g={x:t,y:o},f=oa(oc(n)),m=ol(f),b=await l.getDimensions(h),v="y"===f,y=v?"clientHeight":"clientWidth",w=a.reference[m]+a.reference[f]-g[f]-a.floating[m],k=g[f]-a.reference[f],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(h)),_=x?x[y]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[y]||a.floating[m]);let C=_/2-b[m]/2-1,S=i9(u[v?"top":"left"],C),A=i9(u[v?"bottom":"right"],C),E=_-b[m]-A,P=_/2-b[m]/2+(w/2-k/2),R=i7(S,i9(P,E)),T=!d.arrow&&null!=os(n)&&P!==R&&a.reference[m]/2-(P<S?S:A)-b[m]/2<0,O=T?P<S?P-S:P-E:0;return{[f]:g[f]+O,data:{[f]:R,centerOffset:P-R-O,...T&&{alignmentOffset:O}},reset:T}}});let a="absolute"===this.strategy?e=>oZ.getOffsetParent(e,oJ):oZ.getOffsetParent;((e,t,o)=>{let r=new Map,n={platform:oZ,...o},a={...n.platform,_c:r};return of(e,t,{...n,platform:a})})(this.anchorEl,this.popup,{placement:this.placement,middleware:n,strategy:this.strategy,platform:iM(iL({},oZ),{getOffsetParent:a})}).then(({x:e,y:t,middlewareData:o,placement:r})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,r="",l="",c="",d="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=n?o:"",d=n?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=n?"":o,d=n?o:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:l,bottom:c,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ty`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oQ({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${oQ({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ty`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function o2(e,t){return new Promise(o=>{e.addEventListener(t,function r(n){n.target===e&&(e.removeEventListener(t,r),o())})})}function o5(e,t,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let n=e.animate(t,iM(iL({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})})}function o3(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function o6(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function o9(e,t){let o=iL({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:n}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let n=e.get(t),a=this[t];n!==a&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](n,a)}}),n.call(this,e)}}}o1.styles=[i3,iK],iz([tL(".popup")],o1.prototype,"popup",2),iz([tL(".popup__arrow")],o1.prototype,"arrowEl",2),iz([tO()],o1.prototype,"anchor",2),iz([tO({type:Boolean,reflect:!0})],o1.prototype,"active",2),iz([tO({reflect:!0})],o1.prototype,"placement",2),iz([tO({reflect:!0})],o1.prototype,"strategy",2),iz([tO({type:Number})],o1.prototype,"distance",2),iz([tO({type:Number})],o1.prototype,"skidding",2),iz([tO({type:Boolean})],o1.prototype,"arrow",2),iz([tO({attribute:"arrow-placement"})],o1.prototype,"arrowPlacement",2),iz([tO({attribute:"arrow-padding",type:Number})],o1.prototype,"arrowPadding",2),iz([tO({type:Boolean})],o1.prototype,"flip",2),iz([tO({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],o1.prototype,"flipFallbackPlacements",2),iz([tO({attribute:"flip-fallback-strategy"})],o1.prototype,"flipFallbackStrategy",2),iz([tO({type:Object})],o1.prototype,"flipBoundary",2),iz([tO({attribute:"flip-padding",type:Number})],o1.prototype,"flipPadding",2),iz([tO({type:Boolean})],o1.prototype,"shift",2),iz([tO({type:Object})],o1.prototype,"shiftBoundary",2),iz([tO({attribute:"shift-padding",type:Number})],o1.prototype,"shiftPadding",2),iz([tO({attribute:"auto-size"})],o1.prototype,"autoSize",2),iz([tO()],o1.prototype,"sync",2),iz([tO({type:Object})],o1.prototype,"autoSizeBoundary",2),iz([tO({attribute:"auto-size-padding",type:Number})],o1.prototype,"autoSizePadding",2),iz([tO({attribute:"hover-bridge",type:Boolean})],o1.prototype,"hoverBridge",2);var o7=class extends i6{constructor(){super(),this.localize=new i5(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=o3(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=o3(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await o6(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=iH(this,"tooltip.show",{dir:this.localize.dir()});await o5(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await o6(this.body);let{keyframes:e,options:o}=iH(this,"tooltip.hide",{dir:this.localize.dir()});await o5(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,o2(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,o2(this,"sl-after-hide")}render(){return ty`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oQ({tooltip:!0,"tooltip--open":this.open})}
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
    `}};o7.styles=[i3,iG],o7.dependencies={"sl-popup":o1},iz([tL("slot:not([name])")],o7.prototype,"defaultSlot",2),iz([tL(".tooltip__body")],o7.prototype,"body",2),iz([tL("sl-popup")],o7.prototype,"popup",2),iz([tO()],o7.prototype,"content",2),iz([tO()],o7.prototype,"placement",2),iz([tO({type:Boolean,reflect:!0})],o7.prototype,"disabled",2),iz([tO({type:Number})],o7.prototype,"distance",2),iz([tO({type:Boolean,reflect:!0})],o7.prototype,"open",2),iz([tO({type:Number})],o7.prototype,"skidding",2),iz([tO()],o7.prototype,"trigger",2),iz([tO({type:Boolean})],o7.prototype,"hoist",2),iz([o9("open",{waitUntilFirstUpdate:!0})],o7.prototype,"handleOpenChange",1),iz([o9(["content","distance","hoist","placement","skidding"])],o7.prototype,"handleOptionsChange",1),iz([o9("disabled")],o7.prototype,"handleDisabledChange",1),iF("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iF("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),o7.define("sl-tooltip");var o8=Object.defineProperty,o4=Object.getOwnPropertyDescriptor,re=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?o4(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&o8(t,o,a),a};iF("tooltip.show",null),iF("tooltip.hide",null);let ri=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){return ty`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??tk}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${iW(this.content)}</slot>
			</div>
		</sl-tooltip>`}};ri.styles=eG`
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
	`,re([tO()],ri.prototype,"content",2),re([tO({reflect:!0})],ri.prototype,"placement",2),re([tO({type:Boolean})],ri.prototype,"disabled",2),re([tO({type:Number})],ri.prototype,"distance",2),re([tO({type:Boolean})],ri.prototype,"hoist",2),ri=re([tR("gl-tooltip")],ri);let ro=eG`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var rr=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,rs=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rn(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rr(t,o,a),a};let ra=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?ty`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:ty`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:tk:ty`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${tz(this.behind>0,()=>ty`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${tz(this.ahead>0,()=>ty`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${tz(this.working>0,()=>ty`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};function rl(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}function rc(e,t,o,r=!1,n){let a={name:"",relativePath:"",children:new Map,descendants:[]},l=e.reduce((e,r)=>{let n=e,a="";for(let e of t(r)){a=o(a,e),n.children??=new Map;let t=n.children.get(e);null==t&&(t={name:e,relativePath:a,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),n.descendants??=[],n.descendants.push(r),n=t}return n.value=r,e},a);return r&&(l=function e(t,o,r=!0,n){if(null==t.children)return t;let a=[...t.children.values()];for(let t of a)e(t,o,!1,n);if(!r&&null==t.value&&1===a.length){let e=a[0];if((null==e.value||n?.(e.value))&&(t.name=o(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value,null!=t.children))for(let e of t.children.values())e.parent=t}return t}(l,o,!0,n)),l}ra.styles=[ro,eG`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],rs([tO({type:Number})],ra.prototype,"ahead",2),rs([tO({type:Number})],ra.prototype,"behind",2),rs([tO({type:Number})],ra.prototype,"working",2),rs([tO({type:Boolean,attribute:"always-show"})],ra.prototype,"alwaysShow",2),rs([tO({type:Boolean})],ra.prototype,"outlined",2),rs([tO({type:Boolean})],ra.prototype,"colorized",2),rs([tO({type:Boolean})],ra.prototype,"missingUpstream",2),ra=rs([tR("gl-tracking-pill")],ra);let rd=eG`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;eG`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${rd}
	}
`;let rh=eG`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rp=eG`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;eG`
	:focus-visible {
		${rh}
	}
`;let ru=eG`
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
`;eG`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rh}
	}
	a:hover {
		text-decoration: underline;
	}
`;let rg=eG`
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
`;eG`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var rf=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,rb=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rm(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rf(t,o,a),a};let rv=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ty`<div class="progress-bar"></div>`}};rv.styles=eG`
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
	`,rb([tO({reflect:!0})],rv.prototype,"mode",2),rb([tO({type:Boolean})],rv.prototype,"active",2),rb([tO()],rv.prototype,"position",2),rv=rb([tR("progress-indicator")],rv);var ry=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,rk=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rw(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ry(t,o,a),a};let rx=class extends lit_element_i{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?ty`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:ty`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return ty`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};rx.styles=[rg,eG`
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
		`],rk([tO({type:Boolean,reflect:!0})],rx.prototype,"collapsable",2),rk([tO({type:Boolean,reflect:!0})],rx.prototype,"expanded",2),rk([tO({type:Boolean,reflect:!0})],rx.prototype,"loading",2),rx=rk([tR("webview-pane")],rx);let r$=navigator?.userAgentData?.platform,r_=navigator.userAgent;"Linux"===r$||r_.includes("Linux");let rC="macOS"===r$||r_.includes("Macintosh");function rS(){return rC?"⌥":"Alt"}"Windows"===r$||r_.includes("Windows");var rA=Object.defineProperty,rE=Object.getOwnPropertyDescriptor,rP=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rE(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rA(t,o,a),a};let rR=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${rS()}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return ty`
			<gl-tooltip hoist content="${this.effectiveTooltip??tk}">
				<a
					role="${!this.effectiveHref?"button":tk}"
					type="${!this.effectiveHref?"button":tk}"
					aria-label="${this.effectiveLabel??tk}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??tk}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};rR.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rR.styles=eG`
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
			${rh}
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
	`,rP([tO()],rR.prototype,"href",2),rP([tO({attribute:"alt-href"})],rR.prototype,"altHref",2),rP([tO()],rR.prototype,"label",2),rP([tO({attribute:"alt-label"})],rR.prototype,"altLabel",2),rP([tO()],rR.prototype,"icon",2),rP([tO({attribute:"alt-icon"})],rR.prototype,"altIcon",2),rP([tO({type:Boolean})],rR.prototype,"disabled",2),rP([tL("a")],rR.prototype,"defaultFocusEl",2),rP([tI()],rR.prototype,"isAltKeyPressed",2),rR=rP([tR("action-item")],rR);var rT=Object.defineProperty,rO=Object.getOwnPropertyDescriptor,rI=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rO(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rT(t,o,a),a};let rD=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return ty`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,r=this.actionNodes.map((e,r)=>(e.setAttribute("aria-posinset",`${r+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===r?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10),r=null;if("ArrowLeft"===e.key){let e=1===o?this.actionNodes.length-1:o-2;r=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=o===this.actionNodes.length?0:o;r=this.actionNodes[e]}null!=r&&r!==t&&(t.setAttribute("tabindex","-1"),r.setAttribute("tabindex","0"),r.focus())}};rD.styles=eG`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,rI([tM({flatten:!0})],rD.prototype,"actionNodes",2),rD=rI([tR("action-nav")],rD);let rL=new WeakMap;function rM(e,t){return function(o,r,n){let a=rL.get(o.constructor);null==a&&rL.set(o.constructor,a=[]),a.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){let t=rL.get(this.constructor);if(null!=t)for(let{keys:o,method:r,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};let rz={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var rN=Object.defineProperty,rB=Object.getOwnPropertyDescriptor,rj=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rB(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rN(t,o,a),a};let rU=class extends lit_element_i{get statusName(){return this.status?rz[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return ty`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};rU.styles=[eG`
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
		`],rj([tO()],rU.prototype,"status",2),rj([tI()],rU.prototype,"statusName",1),rU=rj([tR("gl-git-status")],rU);let rF=[ru,eG``],rH=[ru,eG`
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
	`];var rq=Object.defineProperty,rV=Object.getOwnPropertyDescriptor,rW=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rV(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rq(t,o,a),a};let rG=class extends lit_element_i{disconnectedCallback(){super.disconnectedCallback?.(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return ty`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;let e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),r=this.treeItems.map(r=>(r.addEventListener("keydown",e,!1),r.addEventListener("gl-tree-item-select",t,!1),r.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){r?.removeEventListener("keydown",e,!1),r?.removeEventListener("gl-tree-item-select",t,!1),r?.removeEventListener("gl-tree-item-selected",o,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target)return;let t=e.target;if("ArrowUp"===e.key){let e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){let e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;let t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;let t=e.target,o=t.level,r=t.nextElementSibling;for(;r&&o!==r.level;){let t=function(e){let t=e.level,o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}(r);r.parentExpanded=t?.expanded!==!1,r.expanded=e.detail.node.expanded,r=r.nextElementSibling}}};rG.styles=rF,rW([tO({reflect:!0})],rG.prototype,"guides",2),rW([tM({flatten:!0})],rG.prototype,"treeItems",2),rG=rW([tR("gl-tree")],rG);var rK=Object.defineProperty,rZ=Object.getOwnPropertyDescriptor,rY=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rZ(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rK(t,o,a),a};let rX=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClick=e=>{this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return tk;let t=[];if(e>0)for(let o=0;o<e;o++)t.push(ty`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(ty`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?ty`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:tk}renderActions(){return ty`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return ty`<slot name="decorations" class="decorations"></slot>`}render(){return ty`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${tz(this.showIcon,()=>ty`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};rX.styles=rH,rY([tO({type:Boolean})],rX.prototype,"branch",2),rY([tO({type:Boolean})],rX.prototype,"expanded",2),rY([tO({type:String})],rX.prototype,"path",2),rY([tO({type:String,attribute:"parent-path"})],rX.prototype,"parentPath",2),rY([tO({type:Boolean,attribute:"parent-expanded"})],rX.prototype,"parentExpanded",2),rY([tO({type:Number})],rX.prototype,"level",2),rY([tO({type:Number})],rX.prototype,"size",2),rY([tO({type:Number})],rX.prototype,"position",2),rY([tO({type:Boolean})],rX.prototype,"checkable",2),rY([tO({type:Boolean})],rX.prototype,"checked",2),rY([tO({type:Boolean})],rX.prototype,"disableCheck",2),rY([tO({type:Boolean})],rX.prototype,"showIcon",2),rY([tI()],rX.prototype,"selected",2),rY([tI()],rX.prototype,"focused",2),rY([tL("#button")],rX.prototype,"buttonEl",2),rX=rY([tR("gl-tree-item")],rX);var rQ=Object.defineProperty,rJ=Object.getOwnPropertyDescriptor,r0=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rJ(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rQ(t,o,a),a};let r1=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){let t;if(this._model!==e){if(this._model=e,null!=this._model){let e=this._model.length;t=this._model.reduce((t,o,r)=>(t.push(...function e(t,o=1,r=1){let n={size:o,position:r};for(let[e,o]of Object.entries(t))null!=o&&"children"!==e&&(n[e]=o);let a=[n];if(null!=t.children&&t.children.length>0){let o=t.children.length;for(let r=0;r<o;r++)a.push(...e(t.children[r],o,r+1))}return a}(o,e,r+1)),t),[])}this.treeItems=t}}get model(){return this._model}renderIcon(e){return null==e?tk:"string"==typeof e?ty`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?tk:ty`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?tk:t.map(t=>ty`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
				@dblclick=${o=>this.onTreeItemActionDblClicked(o,e,t)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?tk:t.map(e=>"icon"===e.type?ty`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?ty`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){return ty`<gl-tree-item
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
			${e.label}${tz(null!=e.description,()=>ty`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map(e=>this.renderTreeItem(e))}render(){return ty`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onTreeItemActionDblClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};r1.styles=eG`
		:host {
			display: contents;
		}
	`,r0([tI()],r1.prototype,"treeItems",2),r0([tO({reflect:!0})],r1.prototype,"guides",2),r0([tO({type:Array,attribute:!1})],r1.prototype,"model",1),r1=r0([tR("gl-tree-generator")],r1);var r2=Object.defineProperty,r5=Object.getOwnPropertyDescriptor,r3=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r5(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r2(t,o,a),a};let GlDetailsBase=class GlDetailsBase extends lit_element_i{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){let e=this.files?.length??0,t=e>0?q("file",e):"Files";return`${t} changed`}renderChangedFiles(e,t){let o=this.files?.length??0,r=this.isTree(o),n="tree",a="list-tree",l="View as Tree";switch(this.fileLayout){case"auto":n="list",a="gl-list-auto",l="View as List";break;case"list":n="tree",a="list-flat",l="View as Tree";break;case"tree":n="auto",a="list-tree",l="View as Auto"}let c=this.createTreeModel(e,this.files??[],r,this.isCompact);return ty`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${l}"
						icon="${a}"
					></action-item>
				</action-nav>
				${tz(o>0&&"wip"===this.tab,()=>ty`<div class="section section--actions">
							<p class="button-container">
								<span class="button-group button-group--single">
									<gl-button full href="command:workbench.view.scm"
										>Commit via SCM <code-icon rotate="45" icon="arrow-up" slot="suffix"></code-icon
									></gl-button>
								</span>
							</p>
						</div>`)}
				${this.renderTreeFileModel(c)}
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;let r=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(r)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,r=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,r);let n=[],a=[],l=[];for(let e of t)e.staged?a.push(e):l.push(e);return 0===a.length||0===l.length?n.push(...this.createFileTreeModel(e,t,o,r)):(a.length&&n.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,a,o,r,{level:2}),actions:this.getStagedActions()}),l.length&&n.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,l,o,r,{level:2}),actions:this.getUnstagedActions()})),n}sortChildren(e){return e.sort((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:+(e.label>t.label)),e}createFileTreeModel(e,t,o=!1,r=!0,n={level:1}){if(void 0===n.level&&(n.level=1),!t.length)return[{label:"No changes",path:"",level:n.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];let a=[];if(o){let e=rc(t,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=e.children)for(let t of e.children.values()){let e=this.walkFileTree(t,{level:n.level});a.push(e)}}else for(let e of t){let t=this.fileToTreeModel(e,{level:n.level,branch:!1},!0);a.push(t)}return this.sortChildren(a),a}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let r=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});r.push(e)}r.length>0&&(this.sortChildren(r),o.branch=!0,o.children=r)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,r="/"){let n=e.path.lastIndexOf(r),a=-1!==n?e.path.substring(n+1):e.path,l=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:a,description:`${!0===o?l:""}${"R"===e.status?` \u2190 ${e.originalPath}`:""}`,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return ty`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){let o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}};r3([tO({type:Array})],GlDetailsBase.prototype,"files",2),r3([tO({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),r3([tO({type:Object})],GlDetailsBase.prototype,"preferences",2),r3([tO({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);var r6=Object.defineProperty,r9=Object.getOwnPropertyDescriptor,r7=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r9(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r6(t,o,a),a};let r8=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ty`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??tk}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ty`<gl-tooltip placement=${this.tooltipPlacement??tk}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ty`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??tk}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ty`<button
			class="control"
			role=${this.role??tk}
			aria-checked=${this.ariaChecked??tk}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};r8.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},r8.styles=[ru,eG`
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

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${rp}
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
		`],r7([tL(".control")],r8.prototype,"control",2),r7([tO({reflect:!0})],r8.prototype,"appearance",2),r7([tO({type:Boolean,reflect:!0})],r8.prototype,"disabled",2),r7([tO({reflect:!0})],r8.prototype,"density",2),r7([tO({type:Boolean,reflect:!0})],r8.prototype,"full",2),r7([tO()],r8.prototype,"href",2),r7([tO()],r8.prototype,"tooltip",2),r7([tO()],r8.prototype,"tooltipPlacement",2),r8=r7([tR("gl-button")],r8);let r4=eG`
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
`,ne=eG`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;o1.define("sl-popup");var ni=Object.defineProperty,no=Object.getOwnPropertyDescriptor,nr=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?no(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ni(t,o,a),a};let nn=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=eh(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=eh(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of nn.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),nn.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ty`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return nn.closeOthers(this),this.open=!0,nn.openPopovers.add(this),ep(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,nn.openPopovers.delete(this),ep(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};nn.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nn.openPopovers=new Set,nn.styles=[rg,eG`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],nr([tL("#popover")],nn.prototype,"body",2),nr([tL("sl-popup")],nn.prototype,"popup",2),nr([tO({reflect:!0})],nn.prototype,"placement",2),nr([tO({type:Object})],nn.prototype,"anchor",2),nr([tO({reflect:!0,type:Boolean})],nn.prototype,"disabled",2),nr([tO({type:Number})],nn.prototype,"distance",2),nr([tO({reflect:!0,type:Boolean})],nn.prototype,"open",2),nr([tO({reflect:!0,type:Boolean})],nn.prototype,"arrow",2),nr([tO({type:Number})],nn.prototype,"skidding",2),nr([tO()],nn.prototype,"trigger",2),nr([tO({type:Boolean})],nn.prototype,"hoist",2),nr([tO({reflect:!0})],nn.prototype,"appearance",2),nr([rM("open",{afterFirstUpdate:!0})],nn.prototype,"handleOpenChange",1),nr([rM(["distance","hoist","placement","skidding"])],nn.prototype,"handleOptionsChange",1),nr([rM("disabled")],nn.prototype,"handleDisabledChange",1),nn=nr([tR("gl-popover")],nn);var ns=Object.defineProperty,na=Object.getOwnPropertyDescriptor,nl=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?na(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ns(t,o,a),a};let nc=class extends lit_element_i{constructor(){super(...arguments),this.overlay="tooltip",this.icon="",this.disabled=!1}render(){return this.label?"popover"===this.overlay?ty`<gl-popover hoist
				>${this.renderContent()}
				<div slot="content">${iW(this.label)}</div></gl-popover
			>`:ty`<gl-tooltip hoist content="${this.label}">${this.renderContent()}</gl-tooltip>`:this.renderContent()}renderContent(){return ty`
			<a
				class="chip"
				part="base"
				role="${!this.href?"button":tk}"
				type="${!this.href?"button":tk}"
				?disabled=${this.disabled}
				href=${this.href??tk}
				slot=${"popover"===this.overlay?"anchor":tk}
			>
				<code-icon part="icon" icon="${this.icon}"></code-icon><slot></slot>
			</a>
		`}focus(e){this.defaultFocusEl.focus(e)}};function nd(e="autolink",t="merged"){let o,r;switch(e){case"issue":r="closed"===t?"merged":"opened",o="closed"===t?"pass":"issues";break;case"pr":switch(r=t,t){case"merged":o="git-merge";break;case"closed":o="git-pull-request-closed";break;default:o="git-pull-request"}break;default:r="opened",o="link"}return{icon:o,modifier:r}}nc.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nc.styles=[r4,ne,eG`
			:host {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				vertical-align: text-bottom;
				border-radius: 0.5rem;
			}

			* {
				box-sizing: border-box;
			}

			:host(:focus-within) {
				${rh}
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

			.chip {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				gap: 0.2rem;
				vertical-align: middle;
				color: inherit;
				min-width: 2rem;
				height: 2rem;
				color: inherit;
				padding: 0.2rem;
				text-decoration: none;
				cursor: pointer;
			}
			.chip:hover {
				text-decoration: none;
			}
			.chip:focus {
				outline: none;
			}

			a:not(.chip) {
				text-decoration: underline;
			}

			::slotted(*) {
				padding-inline-end: 0.2rem;
				vertical-align: middle;
				text-transform: capitalize;
			}
		`],nl([tO()],nc.prototype,"href",2),nl([tO()],nc.prototype,"label",2),nl([tO()],nc.prototype,"overlay",2),nl([tO()],nc.prototype,"icon",2),nl([tO({type:Boolean})],nc.prototype,"disabled",2),nl([tL("a")],nc.prototype,"defaultFocusEl",2),nc=nl([tR("gl-action-chip")],nc);let nh=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))});var np=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,ng=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nu(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&np(t,o,a),a};let nf=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(t,o,r,n=!0){o=o??void 0;let a=`${(void 0)??""}:${o}`,l=N.get(a);if(null==l){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=L.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(D))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);l=new Intl.DateTimeFormat(null==r?e:"system"===r?void 0:[r],t),n&&N.set(a,l)}if(null==o||L.test(o))return l.format(t);let c=l.formatToParts(t);return o.replace(D,(o,a,l,d,h,p,u,g,f,m,b,v,y,w,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let[o,a]of Object.entries(k)){if(null==a)continue;let l=c.find(e=>e.type===o);if("Do"===a&&l?.type==="day"){var x=Number(l.value);let e=x%100;return`${x}${j[(e-20)%10]??j[e]??j[0]}`}if("a"===a&&l?.type==="dayPeriod"){let o=(function(t){let o=`${(void 0)??""}:time:${t}`,a=N.get(o);if(null==a){let l;l=null==r?e:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",timeStyle:t}),n&&N.set(o,a)}return a})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??l)?.value??""}`}return l?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?function(o,r){let n=("number"==typeof o?o:o.getTime())-new Date().getTime();for(let[o,r,a,l]of M)if(Math.abs(n)>=r||1e3===r)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(n/a),o);return""}(this.date):this.absoluteDate}render(){return ty`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};ng([tO()],nf.prototype,"format",2),ng([tO({attribute:"date-style"})],nf.prototype,"dateStyle",2),ng([tO({converter:nh(),reflect:!0})],nf.prototype,"date",2),ng([tO()],nf.prototype,"tooltip",2),nf=ng([tR("formatted-date")],nf);var nm=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,nv=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nb(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&nm(t,o,a),a};let ny=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?ty`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:tk}render(){let{icon:e,modifier:t}=nd(this.type,this.status);return this.compact?ty`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:ty`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:tk} ${this.renderDate()}</p>
			${tz(!0===this.details,()=>ty`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`)}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};ny.styles=eG`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,nv([tO()],ny.prototype,"url",2),nv([tO()],ny.prototype,"name",2),nv([tO()],ny.prototype,"date",2),nv([tO()],ny.prototype,"dateFormat",2),nv([tO()],ny.prototype,"dateStyle",2),nv([tO()],ny.prototype,"status",2),nv([tO()],ny.prototype,"type",2),nv([tO()],ny.prototype,"identifier",2),nv([tO({type:Boolean,reflect:!0})],ny.prototype,"compact",2),nv([tO({type:Boolean})],ny.prototype,"details",2),ny=nv([tR("issue-pull-request")],ny);var nw=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,nx=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nk(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&nw(t,o,a),a};let n$=class extends lit_element_i{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}render(){let{icon:e,modifier:t}=nd(this.type,this.status);return ty`<gl-popover hoist>
			<gl-action-chip exportparts="icon" slot="anchor" icon=${e} class="chip--${t}"
				><span part="label">${this.identifier}</span></gl-action-chip
			>
			<div slot="content">
				<issue-pull-request
					type=${this.type}
					name=${this.name}
					url="${this.url}"
					identifier=${this.identifier}
					status=${this.status}
					.date=${this.date}
					.dateFormat=${this.dateFormat}
					.dateStyle=${this.dateStyle}
					?details=${this.details}
				></issue-pull-request>
			</div>
		</gl-popover>`}};n$.styles=eG`
		:host {
			display: contents;
		}

		.chip--opened::part(icon) {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.chip--closed::part(icon) {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.chip--merged::part(icon) {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}
	`,nx([tO()],n$.prototype,"url",2),nx([tO()],n$.prototype,"name",2),nx([tO()],n$.prototype,"date",2),nx([tO()],n$.prototype,"dateFormat",2),nx([tO()],n$.prototype,"dateStyle",2),nx([tO()],n$.prototype,"status",2),nx([tO()],n$.prototype,"type",2),nx([tO()],n$.prototype,"identifier",2),nx([tO({type:Boolean})],n$.prototype,"details",2),n$=nx([tR("gl-autolink-chip")],n$);var n_=Object.defineProperty,nC=Object.getOwnPropertyDescriptor,nS=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nC(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&n_(t,o,a),a};let nA=class extends lit_element_i{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?ty`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:ty`<code-icon icon="person" size="18"></code-icon>`}render(){return ty`
			<gl-tooltip>
				${tz(null!=this.url,()=>ty`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span><span class="name">${this.name}</span></a
						>`,()=>ty`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name">${this.name}</span></span
						>`)}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?ty`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:tk}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
		`}};nA.styles=eG`
		:host {
			display: contents;
		}

		* {
			box-sizing: border-box;
		}

		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	`,nS([tO()],nA.prototype,"name",2),nS([tO()],nA.prototype,"url",2),nS([tO()],nA.prototype,"avatarUrl",2),nS([tO({type:Boolean,attribute:"show-avatar",reflect:!0})],nA.prototype,"showAvatar",2),nA=nS([tR("gl-commit-author")],nA);var nE=Object.defineProperty,nP=Object.getOwnPropertyDescriptor,nR=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nP(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&nE(t,o,a),a};let nT=class extends lit_element_i{constructor(){super(...arguments),this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}get absoluteDate(){return this.dateElement.absoluteDate}get dateLabel(){return this.dateElement.dateLabel}render(){return ty`<code-icon icon="git-commit"></code-icon>
			<formatted-date
				.date=${this.date}
				.format=${this.dateFormat}
				.dateStyle=${this.dateStyle}
				.tooltip=${this.actionLabel??tk}
			></formatted-date>`}};nT.styles=eG`
		:host {
			display: inline-flex;
			align-items: center;
			gap: 0.2rem;
			vertical-align: middle;
			font-size: inherit;
		}

		formatted-date::part(base) {
			white-space: nowrap;
		}
	`,nR([tO({converter:nh(),reflect:!0})],nT.prototype,"date",2),nR([tO()],nT.prototype,"dateFormat",2),nR([tO()],nT.prototype,"dateStyle",2),nR([tO({type:Boolean})],nT.prototype,"committer",2),nR([tO()],nT.prototype,"actionLabel",2),nR([tL("formatted-date")],nT.prototype,"dateElement",2),nT=nR([tR("gl-commit-date")],nT);var nO=Object.defineProperty,nI=Object.getOwnPropertyDescriptor,nD=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?nI(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&nO(t,o,a),a};let nL=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),nM=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return nL.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let o=this[e];return null==o?tk:ty`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?ty`<code-icon class="icon" icon="${t}"></code-icon>`:ty`<span>${e}</span>`}};nM.styles=eG`
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
	`,nD([tO({type:Number})],nM.prototype,"added",2),nD([tO({type:Number})],nM.prototype,"modified",2),nD([tO({type:Number})],nM.prototype,"removed",2),nD([tO()],nM.prototype,"symbol",2),nM=nD([tR("commit-stats")],nM);let{I:nz}={M:tt,P:ti,A:to,C:1,L:tC,R:lit_html_M,D:tc,V:tS,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},nN=()=>document.createComment(""),nB=(e,t,o)=>{let r=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o)o=new nz(r.insertBefore(nN(),n),r.insertBefore(nN(),n),e,e.options);else{let t=o._$AB.nextSibling,a=o._$AM,l=a!==e;if(l){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==n||l){let e=o._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,n),e=t}}}return o},nj=(e,t,o=e)=>(e._$AI(t,o),e),nU={},nF=e=>{e._$AP?.(!1,!0);let t=e._$AA,o=e._$AB.nextSibling;for(;t!==o;){let e=t.nextSibling;t.remove(),t=e}},nH=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),nH(e,t);return!0},nq=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},nV=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),nK(t)}};function nW(e){void 0!==this._$AN?(nq(this),this._$AM=e,nV(this)):this._$AM=e}function nG(e,t=!1,o=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let e=o;e<r.length;e++)nH(r[e],!1),nq(r[e]);else null!=r&&(nH(r,!1),nq(r));else nH(this,e)}let nK=e=>{2==e.type&&(e._$AP??=nG,e._$AQ??=nW)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),nV(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(nH(this,e),nq(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let nZ=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!nZ(e))??tw}update(e,t){let o=this._$Cbt,r=o.length;this._$Cbt=t;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let l=t[e];if(!nZ(l))return this._$Cwt=e,l;e<r&&l===o[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(l).then(async e=>{for(;a.get();)await a.get();let t=n.deref();if(void 0!==t){let o=t._$Cbt.indexOf(l);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return tw}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let nY=iq(until_c);function nX(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var nQ=nX(),nJ={exec:()=>null};function n0(e,t=""){let o="string"==typeof e?e:e.source,r={replace:(e,t)=>{let n="string"==typeof t?t:t.source;return n=n.replace(n1.caret,"$1"),o=o.replace(e,n),r},getRegex:()=>new RegExp(o,t)};return r}var n1={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},n2=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,n5=/(?:[*+-]|\d{1,9}[.)])/,n3=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,n6=n0(n3).replace(/bull/g,n5).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),n9=n0(n3).replace(/bull/g,n5).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),n7=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,n8=/(?!\s*\])(?:\\.|[^\[\]\\])+/,n4=n0(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",n8).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),se=n0(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,n5).getRegex(),si="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",so=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,sr=n0("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",so).replace("tag",si).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sn=n0(n7).replace("hr",n2).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",si).getRegex(),ss={blockquote:n0(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sn).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:n4,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:n2,html:sr,lheading:n6,list:se,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:sn,table:nJ,text:/^[^\n]+/},sa=n0("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",n2).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",si).getRegex(),sl={...ss,lheading:n9,table:sa,paragraph:n0(n7).replace("hr",n2).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",sa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",si).getRegex()},sc={...ss,html:n0(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",so).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nJ,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:n0(n7).replace("hr",n2).replace("heading",` *#{1,6} *[^
]`).replace("lheading",n6).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sd=/^( {2,}|\\)\n(?!\s*$)/,sh=/[\p{P}\p{S}]/u,sp=/[\s\p{P}\p{S}]/u,su=/[^\s\p{P}\p{S}]/u,sg=n0(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,sp).getRegex(),sf=/(?!~)[\p{P}\p{S}]/u,sm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,sb=n0(sm,"u").replace(/punct/g,sh).getRegex(),sv=n0(sm,"u").replace(/punct/g,sf).getRegex(),sy="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",sw=n0(sy,"gu").replace(/notPunctSpace/g,su).replace(/punctSpace/g,sp).replace(/punct/g,sh).getRegex(),sk=n0(sy,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,sf).getRegex(),sx=n0("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,su).replace(/punctSpace/g,sp).replace(/punct/g,sh).getRegex(),s$=n0(/\\(punct)/,"gu").replace(/punct/g,sh).getRegex(),s_=n0(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sC=n0(so).replace("(?:--\x3e|$)","--\x3e").getRegex(),sS=n0("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sC).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),sA=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,sE=n0(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",sA).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),sP=n0(/^!?\[(label)\]\[(ref)\]/).replace("label",sA).replace("ref",n8).getRegex(),sR=n0(/^!?\[(ref)\](?:\[\])?/).replace("ref",n8).getRegex(),sT=n0("reflink|nolink(?!\\()","g").replace("reflink",sP).replace("nolink",sR).getRegex(),sO={_backpedal:nJ,anyPunctuation:s$,autolink:s_,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:sd,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:nJ,emStrongLDelim:sb,emStrongRDelimAst:sw,emStrongRDelimUnd:sx,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:sE,nolink:sR,punctuation:sg,reflink:sP,reflinkSearch:sT,tag:sS,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:nJ},sI={...sO,link:n0(/^!?\[(label)\]\((.*?)\)/).replace("label",sA).getRegex(),reflink:n0(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",sA).getRegex()},sD={...sO,emStrongRDelimAst:sk,emStrongLDelim:sv,url:n0(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},sL={...sD,br:n0(sd).replace("{2,}","*").getRegex(),text:n0(sD.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},sM={normal:ss,gfm:sl,pedantic:sc},sz={normal:sO,gfm:sD,breaks:sL,pedantic:sI},sN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sB=e=>sN[e];function sj(e,t){if(t){if(n1.escapeTest.test(e))return e.replace(n1.escapeReplace,sB)}else if(n1.escapeTestNoEncode.test(e))return e.replace(n1.escapeReplaceNoEncode,sB);return e}function sU(e){try{e=encodeURI(e).replace(n1.percentDecode,"%")}catch{return null}return e}function sF(e,t){let o=e.replace(n1.findPipe,(e,t,o)=>{let r=!1,n=t;for(;--n>=0&&"\\"===o[n];)r=!r;return r?"|":" |"}).split(n1.splitPipe),r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),t)if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(n1.slashPipe,"|");return o}function sH(e,t,o){let r=e.length;if(0===r)return"";let n=0;for(;n<r;){let a=e.charAt(r-n-1);if(a!==t||o)if(a!==t&&o)n++;else break;else n++}return e.slice(0,r-n)}function sq(e,t,o,r,n){let a=t.href,l=t.title||null,c=e[1].replace(n.other.outputLinkReplace,"$1");r.state.inLink=!0;let d={type:"!"===e[0].charAt(0)?"image":"link",raw:o,href:a,title:l,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,d}var sV=class{options;rules;lexer;constructor(e){this.options=e||nQ}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:sH(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],o=function(e,t,o){let r=e.match(o.other.indentCodeCompensation);if(null===r)return t;let n=r[1];return t.split(`
`).map(e=>{let t=e.match(o.other.beginningSpace);if(null===t)return e;let[r]=t;return r.length>=n.length?e.slice(n.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=sH(e,"#");this.options.pedantic?e=t.trim():(!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:sH(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=sH(t[0],`
`).split(`
`),o="",r="",n=[];for(;e.length>0;){let t,a=!1,l=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))l.push(e[t]),a=!0;else if(a)break;else l.push(e[t]);e=e.slice(t);let c=l.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${c}`:c,r=r?`${r}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,n,!0),this.lexer.state.top=h,0===e.length)break;let p=n.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let t=p.raw+`
`+e.join(`
`),a=this.blockquote(t);n[n.length-1]=a,o=o.substring(0,o.length-p.raw.length)+a.raw,r=r.substring(0,r.length-p.text.length)+a.text;break}if(p?.type==="list"){let t=p.raw+`
`+e.join(`
`),a=this.list(t);n[n.length-1]=a,o=o.substring(0,o.length-p.raw.length)+a.raw,r=r.substring(0,r.length-p.raw.length)+a.raw,e=t.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:n,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim(),r=o.length>1,n={type:"list",raw:"",ordered:r,start:r?+o.slice(0,-1):"",loose:!1,items:[]};o=r?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=r?o:"[*+-]");let a=this.rules.other.listItemRegex(o),l=!1;for(;e;){let o,r=!1,c="",d="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),p=e.split(`
`,1)[0],u=!h.trim(),g=0;if(this.options.pedantic?(g=2,d=h.trimStart()):u?g=t[1].length+1:(g=(g=t[2].search(this.rules.other.nonSpaceChar))>4?1:g,d=h.slice(g),g+=t[1].length),u&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,e=e.substring(p.length+1),r=!0),!r){let t=this.rules.other.nextBulletRegex(g),o=this.rules.other.hrRegex(g),r=this.rules.other.fencesBeginRegex(g),n=this.rules.other.headingBeginRegex(g),a=this.rules.other.htmlBeginRegex(g);for(;e;){let l,f=e.split(`
`,1)[0];if(p=f,l=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),r.test(p)||n.test(p)||a.test(p)||t.test(p)||o.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=g||!p.trim())d+=`
`+l.slice(g);else{if(u||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||r.test(h)||n.test(h)||o.test(h))break;d+=`
`+p}u||p.trim()||(u=!0),c+=f+`
`,e=e.substring(f.length+1),h=l.slice(g)}}!n.loose&&(l?n.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(l=!0));let f=null;this.options.gfm&&(f=this.rules.other.listIsTask.exec(d))&&(o="[ ] "!==f[0],d=d.replace(this.rules.other.listReplaceTask,"")),n.items.push({type:"list_item",raw:c,task:!!f,checked:o,loose:!1,text:d,tokens:[]}),n.raw+=c}let c=n.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),n.raw=n.raw.trimEnd();for(let e=0;e<n.items.length;e++)if(this.lexer.state.top=!1,n.items[e].tokens=this.lexer.blockTokens(n.items[e].text,[]),!n.loose){let t=n.items[e].tokens.filter(e=>"space"===e.type);n.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(n.loose)for(let e=0;e<n.items.length;e++)n.items[e].loose=!0;return n}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:o,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let o=sF(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<o.length;e++)a.header.push({text:o[e],tokens:this.lexer.inline(o[e]),header:!0,align:a.align[e]});for(let e of n)a.rows.push(sF(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=`
`===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=sH(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let o=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if("("===e[r])o++;else if(e[r]===t[1]&&--o<0)return r;return o>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){let o=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let o=t[2],r="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(o);e&&(o=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(o=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?o.slice(1):o.slice(1,-1)),sq(t,{href:o?o.replace(this.rules.inline.anyPunctuation,"$1"):o,title:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r},t[0],this.lexer,this.rules)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){let e=t[(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=o[0].charAt(0);return{type:"text",raw:e,text:e}}return sq(o,e,o[0],this.lexer,this.rules)}}emStrong(e,t,o=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!o||this.rules.inline.punctuation.exec(o))){let o=[...r[0]].length-1,n,a,l=o,c=0,d="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);null!=(r=d.exec(t));){if(!(n=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(a=[...n].length,r[3]||r[4]){l+=a;continue}if((r[5]||r[6])&&o%3&&!((o+a)%3)){c+=a;continue}if((l-=a)>0)continue;a=Math.min(a,a+l+c);let t=[...r[0]][0].length,d=e.slice(0,o+r.index+t+a);if(Math.min(o,a)%2){let e=d.slice(1,-1);return{type:"em",raw:d,text:e,tokens:this.lexer.inlineTokens(e)}}let h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return o&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,o;return o="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,o;if("@"===t[2])o="mailto:"+(e=t[0]);else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0])e=t[0],o="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},sW=class __Lexer{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nQ,this.options.tokenizer=this.options.tokenizer||new sV,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:n1,block:sM.normal,inline:sz.normal};this.options.pedantic?(t.block=sM.pedantic,t.inline=sz.pedantic):this.options.gfm&&(t.block=sM.gfm,this.options.breaks?t.inline=sz.breaks:t.inline=sz.gfm),this.tokenizer.rules=t}static get rules(){return{block:sM,inline:sz}}static lex(e,t){return new __Lexer(t).lex(e)}static lexInline(e,t){return new __Lexer(t).inlineTokens(e)}lex(e){e=e.replace(n1.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],o=!1){for(this.options.pedantic&&(e=e.replace(n1.tabCharGlobal,"    ").replace(n1.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=t.at(-1);1===r.raw.length&&void 0!==o?o.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+r.raw,o.text+=`
`+r.text,this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if((r=this.tokenizer.fences(e))||(r=this.tokenizer.heading(e))||(r=this.tokenizer.hr(e))||(r=this.tokenizer.blockquote(e))||(r=this.tokenizer.list(e))||(r=this.tokenizer.html(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+r.raw,o.text+=`
`+r.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if((r=this.tokenizer.table(e))||(r=this.tokenizer.lheading(e))){e=e.substring(r.raw.length),t.push(r);continue}let n=e;if(this.options.extensions?.startBlock){let t,o=1/0,r=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(o=Math.min(o,t))}),o<1/0&&o>=0&&(n=e.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(n))){let a=t.at(-1);o&&a?.type==="paragraph"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),o=n.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=`
`+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let o=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let n=!1,a="";for(;e;){let r;if(n||(a=""),n=!1,this.options.extensions?.inline?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if((r=this.tokenizer.escape(e))||(r=this.tokenizer.tag(e))||(r=this.tokenizer.link(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let o=t.at(-1);"text"===r.type&&o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if((r=this.tokenizer.emStrong(e,o,a))||(r=this.tokenizer.codespan(e))||(r=this.tokenizer.br(e))||(r=this.tokenizer.del(e))||(r=this.tokenizer.autolink(e))||!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let l=e;if(this.options.extensions?.startInline){let t,o=1/0,r=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(o=Math.min(o,t))}),o<1/0&&o>=0&&(l=e.substring(0,o+1))}if(r=this.tokenizer.inlineText(l)){e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),n=!0;let o=t.at(-1);o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},sG=class{options;parser;constructor(e){this.options=e||nQ}space(e){return""}code({text:e,lang:t,escaped:o}){let r=(t||"").match(n1.notSpaceStart)?.[0],n=e.replace(n1.endingNewline,"")+`
`;return r?'<pre><code class="language-'+sj(r)+'">'+(o?n:sj(n,!0))+`</code></pre>
`:"<pre><code>"+(o?n:sj(n,!0))+`</code></pre>
`}blockquote({tokens:e}){let t=this.parser.parse(e);return`<blockquote>
${t}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,o=e.start,r="";for(let t=0;t<e.items.length;t++){let o=e.items[t];r+=this.listitem(o)}let n=t?"ol":"ul";return"<"+n+(t&&1!==o?' start="'+o+'"':"")+`>
`+r+"</"+n+`>
`}listitem(e){let t="";if(e.task){let o=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=o+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=o+" "+sj(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):t+=o+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",o="";for(let t=0;t<e.header.length;t++)o+=this.tablecell(e.header[t]);t+=this.tablerow({text:o});let r="";for(let t=0;t<e.rows.length;t++){let n=e.rows[t];o="";for(let e=0;e<n.length;e++)o+=this.tablecell(n[e]);r+=this.tablerow({text:o})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),o=e.header?"th":"td";return(e.align?`<${o} align="${e.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${sj(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:o}){let r=this.parser.parseInline(o),n=sU(e);if(null===n)return r;let a='<a href="'+(e=n)+'"';return t&&(a+=' title="'+sj(t)+'"'),a+=">"+r+"</a>"}image({href:e,title:t,text:o,tokens:r}){r&&(o=this.parser.parseInline(r,this.parser.textRenderer));let n=sU(e);if(null===n)return sj(o);e=n;let a=`<img src="${e}" alt="${o}"`;return t&&(a+=` title="${sj(t)}"`),a+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:sj(e.text)}},sK=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},sZ=class __Parser{options;renderer;textRenderer;constructor(e){this.options=e||nQ,this.options.renderer=this.options.renderer||new sG,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new sK}static parse(e,t){return new __Parser(t).parse(e)}static parseInline(e,t){return new __Parser(t).parseInline(e)}parse(e,t=!0){let o="";for(let r=0;r<e.length;r++){let n=e[r];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(n.type)){o+=e||"";continue}}switch(n.type){case"space":o+=this.renderer.space(n);continue;case"hr":o+=this.renderer.hr(n);continue;case"heading":o+=this.renderer.heading(n);continue;case"code":o+=this.renderer.code(n);continue;case"table":o+=this.renderer.table(n);continue;case"blockquote":o+=this.renderer.blockquote(n);continue;case"list":o+=this.renderer.list(n);continue;case"html":o+=this.renderer.html(n);continue;case"paragraph":o+=this.renderer.paragraph(n);continue;case"text":{let a=n,l=this.renderer.text(a);for(;r+1<e.length&&"text"===e[r+1].type;)a=e[++r],l+=`
`+this.renderer.text(a);t?o+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):o+=l;continue}default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return o}parseInline(e,t=this.renderer){let o="";for(let r=0;r<e.length;r++){let n=e[r];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){o+=e||"";continue}}switch(n.type){case"escape":case"text":o+=t.text(n);break;case"html":o+=t.html(n);break;case"link":o+=t.link(n);break;case"image":o+=t.image(n);break;case"strong":o+=t.strong(n);break;case"em":o+=t.em(n);break;case"codespan":o+=t.codespan(n);break;case"br":o+=t.br(n);break;case"del":o+=t.del(n);break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return o}},sY=class{options;block;constructor(e){this.options=e||nQ}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?sW.lex:sW.lexInline}provideParser(){return this.block?sZ.parse:sZ.parseInline}},sX=new class{defaults=nX();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=sZ;Renderer=sG;TextRenderer=sK;Lexer=sW;Tokenizer=sV;Hooks=sY;constructor(...e){this.use(...e)}walkTokens(e,t){let o=[];for(let r of e)switch(o=o.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)o=o.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)o=o.concat(this.walkTokens(r.tokens,t));break;case"list":o=o.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let n=e[r].flat(1/0);o=o.concat(this.walkTokens(n,t))}):e.tokens&&(o=o.concat(this.walkTokens(e.tokens,t)))}}return o}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let o={...e};if(o.async=this.defaults.async||o.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let o=t.renderers[e.name];o?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=o.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let o=t[e.level];o?o.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),o.extensions=t),e.renderer){let t=this.defaults.renderer||new sG(this.defaults);for(let o in e.renderer){if(!(o in t))throw Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let r=e.renderer[o],n=t[o];t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o||""}}o.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new sV(this.defaults);for(let o in e.tokenizer){if(!(o in t))throw Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let r=e.tokenizer[o],n=t[o];t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o}}o.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new sY;for(let o in e.hooks){if(!(o in t))throw Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let r=e.hooks[o],n=t[o];sY.passThroughHooks.has(o)?t[o]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then(e=>n.call(t,e));let o=r.call(t,e);return n.call(t,o)}:t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o}}o.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;o.walkTokens=function(e){let o=[];return o.push(r.call(this,e)),t&&(o=o.concat(t.call(this,e))),o}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return sW.lex(e,t??this.defaults)}parser(e,t){return sZ.parse(e,t??this.defaults)}parseMarkdown(e){return(t,o)=>{let r={...o},n={...this.defaults,...r},a=this.onError(!!n.silent,!!n.async);if(!0===this.defaults.async&&!1===r.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));n.hooks&&(n.hooks.options=n,n.hooks.block=e);let l=n.hooks?n.hooks.provideLexer():e?sW.lex:sW.lexInline,c=n.hooks?n.hooks.provideParser():e?sZ.parse:sZ.parseInline;if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(t):t).then(e=>l(e,n)).then(e=>n.hooks?n.hooks.processAllTokens(e):e).then(e=>n.walkTokens?Promise.all(this.walkTokens(e,n.walkTokens)).then(()=>e):e).then(e=>c(e,n)).then(e=>n.hooks?n.hooks.postprocess(e):e).catch(a);try{n.hooks&&(t=n.hooks.preprocess(t));let e=l(t,n);n.hooks&&(e=n.hooks.processAllTokens(e)),n.walkTokens&&this.walkTokens(e,n.walkTokens);let o=c(e,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(e){return a(e)}}}onError(e,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+sj(o.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(o);throw o}}};function sQ(e,t){return sX.parse(e,t)}sQ.options=sQ.setOptions=function(e){return sX.setOptions(e),sQ.defaults=sX.defaults,nQ=sQ.defaults,sQ},sQ.getDefaults=nX,sQ.defaults=nQ,sQ.use=function(...e){return sX.use(...e),sQ.defaults=sX.defaults,nQ=sQ.defaults,sQ},sQ.walkTokens=function(e,t){return sX.walkTokens(e,t)},sQ.parseInline=sX.parseInline,sQ.Parser=sZ,sQ.parser=sZ.parse,sQ.Renderer=sG,sQ.TextRenderer=sK,sQ.Lexer=sW,sQ.lexer=sW.lex,sQ.Tokenizer=sV,sQ.Hooks=sY,sQ.parse=sQ,sQ.options,sQ.setOptions,sQ.use,sQ.walkTokens,sQ.parseInline,sZ.parse,sW.lex;var sJ=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,s1=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?s0(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sJ(t,o,a),a};let s2=class extends lit_element_i{constructor(){super(...arguments),this.markdown=""}render(){return ty`${this.markdown?nY(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){sQ.setOptions({gfm:!0}),sQ.use({renderer:{image:function({href:e,title:t,text:o}){let r=[],n=[];return e&&({href:e,dimensions:r}=function(e){let t=[],o=e.split("|").map(e=>e.trim());e=o[0];let r=o[1];if(r){let e=/height=(\d+)/.exec(r),o=/width=(\d+)/.exec(r),n=e?e[1]:"",a=o?o[1]:"",l=isFinite(parseInt(a)),c=isFinite(parseInt(n));l&&t.push(`width="${a}"`),c&&t.push(`height="${n}"`)}return{href:e,dimensions:t}}(e),n.push(`src="${s4(e)}"`)),o&&n.push(`alt="${s4(o)}"`),t&&n.push(`title="${s4(t)}"`),r.length&&(n=n.concat(r)),`<img ${n.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:o}){if("string"!=typeof e)return"";let r=this.parser.parseInline(o);return e===r&&(r=ae(r)),t="string"==typeof t?s4(ae(t)):"",e=ae(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),`<a href="${e}" title="${t||e}" draggable="false">${r}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return e=e.replace(/</g,"&lt;"),`<code>${e}</code>`}}});let t=await sQ.parse(e.replace(s7,e=>`\\${e}`));return iV(t=function(e){let t,o=[],r=0,n=0;for(;null!==(t=s8.exec(e));){r<(n=t.index||0)&&o.push(e.substring(r,n)),r=(t.index||0)+t[0].length;let[,a,l]=t;o.push(a?`$(${l})`:function(e){let[,t,o]=s6.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${o?` modifier="${o}"`:""}></code-icon>`}({id:l}))}return r<e.length&&o.push(e.substring(r)),o.join("")}(t))}};s2.styles=[ne,eG`
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
		`],s1([tO({type:String})],s2.prototype,"markdown",2),s2=s1([tR("gl-markdown")],s2);let s5="[A-Za-z0-9-]+",s3="~[A-Za-z]+",s6=RegExp(`^(${s5})(${s3})?$`),s9=RegExp(`\\$\\(${s5}(?:${s3})?\\)`,"g"),s7=RegExp(`\\\\${s9.source}`,"g"),s8=RegExp(`(\\\\)?\\$\\((${s5}(?:${s3})?)\\)`,"g");function s4(e){return e.replace(/"/g,"&quot;")}function ae(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}var ai=Object.defineProperty,ao=Object.getOwnPropertyDescriptor;let ar=class extends lit_element_i{render(){return ty`<slot></slot>`}};ar.styles=eG`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,ar=((e,t,o,r)=>{for(var n,a=r>1?void 0:r?ao(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ai(t,o,a),a})([tR("webview-pane-group")],ar);var an=Object.defineProperty,as=Object.getOwnPropertyDescriptor,aa=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?as(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&an(t,o,a),a};let al=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return this.state?.commit?.stashNumber!=null}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return ty`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Overview</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button density="compact" data-action="search-commit" tooltip="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderExplainChanges(){if(this.state?.orgSettings.ai!==!1)return ty`
			<gl-action-chip
				label=${this.isUncommitted?"Explain Working Changes":`Explain Changes in this ${this.isStash?"Stash":"Commit"}`}
				icon="sparkle"
				data-action="explain-commit"
				aria-busy="${this.explainBusy?"true":tk}"
				?disabled="${!!this.explainBusy||tk}"
				@click=${this.onExplainChanges}
				@keydown=${this.onExplainChanges}
				><span>explain</span></gl-action-chip
			>
		`}renderCommitMessage(){let e=this.state?.commit;if(null==e)return;let t=e.message,o=t.indexOf(tB);return ty`
			<div class="section section--message">
				<div class="message-block-row">
					${tz(!this.isStash,()=>ty`
							<gl-commit-author
								name="${e.author.name}"
								url="${e.author.email?`mailto:${e.author.email}`:void 0}"
								.avatarUrl="${e.author.avatar??""}"
								.showAvatar="${this.preferences?.avatars??!0}"
							></gl-commit-author>
						`)}
					${this.renderExplainChanges()}
				</div>
				<div>
					<div class="message-block">
						${tz(-1===o,()=>ty`<p class="message-block__text scrollable" data-region="message">
									<strong>${iV(t)}</strong>
								</p>`,()=>ty`<p class="message-block__text scrollable" data-region="message">
									<strong>${iV(t.substring(0,o))}</strong><br /><span
										>${iV(t.substring(o+3))}</span
									>
								</p>`)}
					</div>
					<div class="message-block-row message-block-row--actions">
						${this.renderAutoLinksChips()}
						${tz(!this.isStash,()=>ty`
								<gl-commit-date
									date=${e.author.date}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									.actionLabel="${e.sha===aj?"Modified":"Committed"}"
								></gl-commit-date>
							`)}
					</div>
				</div>
			</div>
		`}get autolinkState(){if(!this.state?.autolinksEnabled||this.isUncommitted)return;let e=new Map,t=new Map;if(this.state?.commit?.autolinks!=null)for(let o of this.state.commit.autolinks)e.set(o.id,{type:"autolink",value:o}),t.set(o.url,o.id);if(this.state?.autolinkedIssues!=null)for(let o of this.state.autolinkedIssues){if(null!=o.url){let r=t.get(o.url);null!=r&&e.delete(r)}e.set(o.id,{type:"issue",value:o})}if(this.state?.pullRequest!=null){if(null!=this.state.pullRequest.url){let o=t.get(this.state.pullRequest.url);null!=o&&e.delete(o)}e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest})}let o=[],r=[],n=[];for(let t of e.values())switch(t.type){case"autolink":o.push(t.value);break;case"issue":r.push(t.value);break;case"pr":n.push(t.value)}return{autolinks:o,issues:r,prs:n,size:e.size}}renderLearnAboutAutolinks(e=!1){let t=e?tk:ty`<span class="mq-hide-sm">Learn about autolinks</span>`,o=rl("gitlens.showSettingsPage!autolinks",{showOptions:{preserveFocus:!0}}),r=this.state?.hasIntegrationsConnected??!1,n="Configure autolinks to linkify external references, like Jira or Zendesk tickets, in commit messages.";return r||(n=`<a href="${o}">Configure autolinks</a> to linkify external references, like Jira or Zendesk tickets, in commit messages.

<a href="${rl("gitlens.plus.cloudIntegrations.connect",{source:{source:"inspect",detail:{action:"connect"}}})}">Connect an Integration</a> &mdash;`,this.state?.hasAccount||(n+=" sign up and"),n+=" to get access to automatic rich autolinks for services like Jira, GitHub, and more."),ty`<gl-action-chip
			href=${o}
			data-action="autolink-settings"
			icon="info"
			.label=${n}
			overlay=${r?"tooltip":"popover"}
			>${t}</gl-action-chip
		>`}renderAutoLinksChips(){let e=this.autolinkState;if(null==e)return this.renderLearnAboutAutolinks();let{autolinks:t,issues:o,prs:r,size:n}=e;return 0===n?this.renderLearnAboutAutolinks():ty`<div class="message-block-group">
			${this.renderLearnAboutAutolinks(!0)}
			${tz(t.length,()=>t.map(e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),ty`<gl-autolink-chip
						type="autolink"
						name="${t}"
						url="${e.url}"
						identifier="${e.prefix}${e.id}"
					></gl-autolink-chip>`}))}
			${tz(r.length,()=>r.map(e=>ty`<gl-autolink-chip
							type="pr"
							name="${e.title}"
							url="${e.url}"
							identifier="#${e.id}"
							status="${e.state}"
							.date=${e.updatedDate}
							.dateFormat="${this.state.preferences.dateFormat}"
							.dateStyle="${this.state.preferences.dateStyle}"
						></gl-autolink-chip>`))}
			${tz(o.length,()=>o.map(e=>ty`<gl-autolink-chip
							type="issue"
							name="${e.title}"
							url="${e.url}"
							identifier="${e.id}"
							status="${e.state}"
							.date=${e.closed?e.closedDate:e.createdDate}
							.dateFormat="${this.state.preferences.dateFormat}"
							.dateStyle="${this.state.preferences.dateStyle}"
						></gl-autolink-chip>`))}
		</div>`}render(){return this.state?.commit==null?this.renderEmptyContent():ty`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
			</webview-pane-group>
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}renderCommitStats(e){if(e?.files==null)return;if("number"==typeof e.files)return ty`<commit-stats added="?" modified="${e.files}" removed="?"></commit-stats>`;let{added:t,deleted:o,changed:r}=e.files;return ty`<commit-stats added="${t}" modified="${r}" removed="${o}"></commit-stats>`}getFileActions(e,t){let o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"}),o.push({icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};aa([tO({type:Object})],al.prototype,"state",2),aa([tI()],al.prototype,"isStash",1),aa([tI()],al.prototype,"shortSha",1),aa([tI()],al.prototype,"explainBusy",2),aa([tO({type:Object})],al.prototype,"explain",2),al=aa([tR("gl-commit-details")],al);let ac=(e,t,o)=>{let r=new Map;for(let n=t;n<=o;n++)r.set(e[n],n);return r},ad=iq(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let r;void 0===o?o=t:void 0!==t&&(r=t);let n=[],a=[],l=0;for(let t of e)n[l]=r?r(t,l):l,a[l]=o(t,l),l++;return{values:a,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,r]){let n=e._$AH,{values:a,keys:l}=this.dt(t,o,r);if(!Array.isArray(n))return this.ut=l,a;let c=this.ut??=[],d=[],h,p,u=0,g=n.length-1,f=0,m=a.length-1;for(;u<=g&&f<=m;)if(null===n[u])u++;else if(null===n[g])g--;else if(c[u]===l[f])d[f]=nj(n[u],a[f]),u++,f++;else if(c[g]===l[m])d[m]=nj(n[g],a[m]),g--,m--;else if(c[u]===l[m])d[m]=nj(n[u],a[m]),nB(e,d[m+1],n[u]),u++,m--;else if(c[g]===l[f])d[f]=nj(n[g],a[f]),nB(e,n[u],n[g]),g--,f++;else if(void 0===h&&(h=ac(l,f,m),p=ac(c,u,g)),h.has(c[u]))if(h.has(c[g])){let t=p.get(l[f]),o=void 0!==t?n[t]:null;if(null===o){let t=nB(e,n[u]);nj(t,a[f]),d[f]=t}else d[f]=nj(o,a[f]),nB(e,n[u],o),n[t]=null;f++}else nF(n[g]),g--;else nF(n[u]),u++;for(;f<=m;){let t=nB(e,d[m+1]);nj(t,a[f]),d[f++]=t}for(;u<=g;){let e=n[u++];null!==e&&nF(e)}return this.ut=l,((e,t=nU)=>e._$AH=t)(e,d),tw}}),ah=eG`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}

	.button-group {
		display: inline-flex;
		gap: 0.1rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) gl-button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.button-group > *:not(:last-child),
	.button-group > *:not(:last-child) gl-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;var ap=Object.defineProperty,au=Object.getOwnPropertyDescriptor,ag=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?au(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ap(t,o,a),a};let af=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return ty`<div class="skeleton" style=${e}></div>`}};af.styles=eG`
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
	`,ag([tO({type:Number})],af.prototype,"lines",2),af=ag([tR("skeleton-loader")],af);let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return ty`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return tk;let t="tree",o="list-tree",r="View as Tree";switch(e){case"auto":t="list",o="gl-list-auto",r="View as List";break;case"list":t="tree",o="list-flat",r="View as Tree";break;case"tree":t="auto",o="list-tree",r="View as Auto"}return ty`<action-item data-switch-value="${t}" label="${r}" icon="${o}"></action-item>`}renderTreeView(e,t="none"){return ty`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,o=!1,r=2){let n=[];if(t){let t=rc(e,e=>e.path.split("/"),(...e)=>e.join("/"),o);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:r});n.push(t)}}else for(let t of e){let e=this.fileToTreeModel(t,{level:r,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let r=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});r.push(e)}r.length>0&&(o.branch=!0,o.children=r)}return o}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,o){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,o,r){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:r,context:[t],actions:this.getRepoActions(e,t,o),...o}}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,r="/"){let n=e.path.lastIndexOf(r),a=-1!==n?e.path.substring(n+1):e.path,l=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===o?l:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}};var am=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,av=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ab(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&am(t,o,a),a};let ay=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=v(this.onTitleInput,500),this.onDebounceDescriptionInput=v(this.onDescriptionInput,500),eU(eL,ez,eN,eB,ej)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(e=>e?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,e])=>!1!==e.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return function(e,t){if(null==e)return 0;let o=0;for(let r of e)o+=t(r);return o}(this.createChanges,e=>e.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(e){let t=e.pendingRole,o=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),r=o.get(t);return ty`
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
						<gk-button slot="trigger">${r} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${function*(e,t){if(void 0!==e){let o=0;for(let r of e)yield t(r,o++)}}(o,([o,r])=>ty`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,o)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===o?"is-active":""}"
										></code-icon>
										${r}
									</gk-menu-item>`)}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return ty`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${ad(this.state.create.userSelections,e=>e.member.id,e=>this.renderUserSelection(e))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}let t=this.review?"Code Suggestion":"Cloud Patch",o=this.review?"Code Suggestions":"Cloud Patches";return ty`
			<div class="section section--action">
				${tz(this.state?.create?.creationError!=null,()=>ty` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${tz(!1===this.review,()=>ty`
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
					${tz(this.state?.orgSettings.ai===!0&&this.state?.preferences.aiEnabled===!0,()=>ty`<div class="message-input__menu">
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

				${tz(this.generate?.error!=null,()=>ty`
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
				${tz(!0===this.review,()=>ty`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${tz(this.state?.orgSettings.byob===!1,()=>ty`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${I.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${o}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>ty`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${I.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return ty`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return ty`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${tz(null!=this.validityMessage,()=>ty`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${tz(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;let[t,o]=e.detail.context,r=e.detail.checked;"unstaged"===o&&(r=!!e.detail.checked||"staged");let n=this.getChangeForRepo(t);null!=n&&n.checked!==r&&(n.checked=r,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:r}))}onTreeItemSelected(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);let e=[],t=this.createChanges.length>1,o=this.isTree(this.filesModified??0),r=this.isCompact;if(t)for(let t of this.createChanges){let n=this.getTreeForChange(t,!0,o,r);null!=n&&e.push(...n)}else{let t=this.createChanges[0],n=this.getTreeForChange(t,!1,o,r);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,o=!1,r=!0){if(null==e.files||0===e.files.length)return;let n=[];if("wip"===e.type){let a=[],l=[];for(let t of e.files)t.staged?a.push(t):l.push(t);0===a.length||0===l.length?n.push(...this.renderFiles(e.files,o,r,t?2:1)):(l.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(l,o,r,t?3:2)}),a.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,o,r,t?3:2)}))}else n.push(...this.renderFiles(e.files,o,r));if(!t)return n;let a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=n,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let e=this.selectedChanges.reduce((e,[t,o])=>(e[t]=o,e),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,o){this.emit("gl-patch-create-update-selection",{selection:t,role:o});let r=e.target?.closest("gk-popover");r?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[o]:!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,o){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};av([tO({type:Object})],ay.prototype,"state",2),av([tO({type:Boolean})],ay.prototype,"review",2),av([tO({type:Object})],ay.prototype,"generate",2),av([tI()],ay.prototype,"generateBusy",2),av([tI()],ay.prototype,"creationBusy",2),av([tL("#title")],ay.prototype,"titleInput",2),av([tL("#desc")],ay.prototype,"descInput",2),av([tL("#generate-ai")],ay.prototype,"generateAiButton",2),av([tI()],ay.prototype,"validityMessage",2),ay=av([tR("gl-patch-create")],ay);var aw=Object.defineProperty,ak=Object.getOwnPropertyDescriptor,ax=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ak(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aw(t,o,a),a};let a$=class extends GlElement{get patchCreateState(){return{preferences:this.preferences,orgSettings:this.orgSettings,create:this.createState}}render(){return ty`<gl-patch-create
			.state=${this.patchCreateState}
			.generate=${this.generate}
			review
			@gl-patch-file-compare-working=${e=>{}}
			@gl-patch-create-update-metadata=${e=>{}}
		></gl-patch-create>`}};a$.styles=[ah,eG`
			:host {
				flex: 1;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}

			gl-patch-create {
				height: 100%;
				display: block;
			}

			.pane-groups {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
			.pane-groups__group {
				min-height: 0;
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			.pane-groups__group webview-pane {
				flex: none;
			}
			.pane-groups__group webview-pane[expanded] {
				min-height: 0;
				flex: 1;
			}

			.pane-groups__group-fixed {
				flex: none;
			}
			.pane-groups__group-fixed webview-pane::part(content) {
				overflow: visible;
			}

			.section {
				padding: 0 var(--gitlens-scrollbar-gutter-width) 1.5rem var(--gitlens-gutter-width);
			}
			.section > :first-child {
				margin-top: 0;
			}
			.section > :last-child {
				margin-bottom: 0;
			}

			.section--action {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
			.section--action > :first-child {
				padding-top: 0;
			}

			/* TODO: these form styles should be moved to a common location */
			.message-input {
				padding-top: 0.8rem;
			}

			.message-input__control {
				flex: 1;
				border: 1px solid var(--vscode-input-border);
				background: var(--vscode-input-background);
				padding: 0.5rem;
				font-size: 1.3rem;
				line-height: 1.4;
				width: 100%;
				border-radius: 0.2rem;
				color: var(--vscode-input-foreground);
				font-family: inherit;
			}

			.message-input__control::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.message-input__control:invalid {
				border-color: var(--vscode-inputValidation-errorBorder);
				background-color: var(--vscode-inputValidation-errorBackground);
			}

			.message-input__control:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.message-input__control:disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			.message-input__control--text {
				overflow: hidden;
				white-space: nowrap;
				opacity: 0.7;
			}

			.message-input__action {
				flex: none;
			}

			.message-input__select {
				flex: 1;
				position: relative;
				display: flex;
				align-items: stretch;
			}
			.message-input__select-icon {
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}
			.message-input__select-caret {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}

			.message-input__select .message-input__control {
				box-sizing: border-box;
				appearance: none;
				padding-left: 2.4rem;
				padding-right: 2.4rem;
			}

			.message-input__menu {
				position: absolute;
				top: 0.8rem;
				right: 0;
			}

			.section--action > :first-child .message-input__menu {
				top: 0;
			}

			.message-input--group {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				gap: 0.6rem;
			}

			.message-input--with-menu {
				position: relative;
			}

			textarea.message-input__control {
				resize: vertical;
				min-height: 4rem;
				max-height: 40rem;
			}

			.user-selection-container {
				max-height: (2.4rem * 4);
				overflow: auto;
			}

			.user-selection {
				--gk-avatar-size: 2rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				height: 2.4rem;
			}
			.user-selection__avatar {
				flex: none;
			}

			.user-selection__info {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
			}

			.user-selection__name {
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-selection__actions {
				flex: none;
				color: var(--gk-button-ghost-color);
			}
			.user-selection__actions gk-button::part(base) {
				padding-right: 0;
				padding-block: 0.4rem;
			}

			.user-selection__actions gk-button code-icon {
				pointer-events: none;
			}

			.user-selection__check:not(.is-active) {
				opacity: 0;
			}

			.alert {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.8rem 1.2rem;
				line-height: 1.2;
				background-color: var(--color-alert-errorBackground);
				border-left: 0.3rem solid var(--color-alert-errorBorder);
				color: var(--color-alert-foreground);
			}

			.alert code-icon {
				margin-right: 0.4rem;
				vertical-align: baseline;
			}

			.alert__content {
				font-size: 1.2rem;
				line-height: 1.2;
				text-align: left;
				margin: 0;
			}
		`],ax([tO({type:Object})],a$.prototype,"orgSettings",2),ax([tO({type:Object})],a$.prototype,"preferences",2),ax([tO({type:Object})],a$.prototype,"generate",2),ax([tO({type:Object})],a$.prototype,"createState",2),a$=ax([tR("gl-inspect-patch")],a$);var a_=Object.defineProperty,aC=Object.getOwnPropertyDescriptor,aS=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aC(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&a_(t,o,a),a};let aA=class extends GlDetailsBase{constructor(){super(),this.tab="wip",this.patchCreateMetadata={title:void 0,description:void 0},eU(eL)}get inReview(){return this.draftState?.inReview??!1}get isUnpublished(){let e=this.wip?.branch;return e?.upstream==null||!0===e.upstream.missing}get draftsEnabled(){return this.orgSettings?.drafts===!0}get filesCount(){return this.files?.length??0}get branchState(){let e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get patchCreateState(){let e=this.wip,t=e.repo.uri,o={type:"wip",repository:{name:e.repo.name,path:e.repo.path,uri:e.repo.uri},files:e.changes?.files??[],checked:!0};return{...this.patchCreateMetadata,changes:{[t]:o},creationError:void 0,visibility:"public",userSelections:void 0}}get codeSuggestions(){return this.wip?.codeSuggestions??[]}updated(e){super.updated(e),e.has("generate")&&(this.patchCreateMetadata={title:this.generate?.title??this.patchCreateMetadata.title,description:this.generate?.description??this.patchCreateMetadata.description})}get filesChangedPaneLabel(){return"Working Changes"}renderSecondaryAction(){var e,t;if(!this.draftsEnabled||this.inReview)return;let r="Share as Cloud Patch",n="create-patch",a=this.wip?.pullRequest;return null!=a&&"opened"===a.state&&(e=a.provider.domain,t="github.com",null!=e&&0===function(e,t){null==o&&(o=new Intl.Collator(void 0,{sensitivity:"accent"}));let r=o.compare(e,t);return 0===r?0:r>0?1:-1}(e,t))?(this.inReview?(r="Close Suggestion for PR",n="end-patch-review"):(r="Suggest Changes for PR",n="start-patch-review"),ty`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						appearance="secondary"
						full
						data-action="${n}"
						@click=${()=>this.onToggleReviewMode(!this.inReview)}
					>
						<code-icon icon="gl-code-suggestion" slot="prefix"></code-icon>${r}
					</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						data-action="create-patch"
						tooltip="Share as Cloud Patch"
						@click=${()=>this.onDataActionClick("create-patch")}
					>
						<code-icon icon="gl-cloud-patch-share"></code-icon>
					</gl-button>
				</span>
			</p>`):ty`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					appearance="secondary"
					full
					data-action="${n}"
					@click=${()=>this.onDataActionClick(n)}
				>
					<code-icon icon="gl-cloud-patch-share" slot="prefix"></code-icon>${r}
				</gl-button>
			</span>
		</p>`}renderPrimaryAction(){let e=this.draftsEnabled;if(this.isUnpublished&&e)return ty`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						full
						data-action="publish-branch"
						@click=${()=>this.onDataActionClick("publish-branch")}
					>
						<code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch
					</gl-button>
				</span>
			</p>`;if(!this.isUnpublished&&!e||null==this.branchState)return;let{ahead:t,behind:o}=this.branchState;if(0===t&&0===o)return;let r=o>0?"Pull":t>0?"Push":"Fetch";return ty`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					full
					data-action="${r.toLowerCase()}"
					@click=${()=>this.onDataActionClick(r.toLowerCase())}
				>
					<code-icon icon="${o>0?"repo-pull":t>0?"repo-push":"repo-fetch"}" slot="prefix"></code-icon> ${r}
					<gl-tracking-pill .ahead=${t} .behind=${o} slot="suffix"></gl-tracking-pill>
				</gl-button>
			</span>
		</p>`}renderActions(){let e=this.renderPrimaryAction(),t=this.renderSecondaryAction();return null==e&&null==t?tk:ty`<div class="section section--actions">${e}${t}</div>`}renderSuggestedChanges(){return 0===this.codeSuggestions.length?tk:ty`
			<gl-tree>
				<gl-tree-item branch .expanded=${!0} .level=${0}>
					<code-icon slot="icon" icon="gl-code-suggestion"></code-icon>
					Code Suggestions
				</gl-tree-item>
				${ad(this.codeSuggestions,e=>e.id,e=>ty`
						<gl-tree-item
							.expanded=${!0}
							.level=${1}
							@gl-tree-item-selected=${()=>this.onShowCodeSuggestion(e.id)}
						>
							<gk-avatar
								class="author-icon"
								src="${e.author.avatarUri}"
								title="${e.author.name} (author)"
							></gk-avatar>
							${e.title}
							<span slot="description"
								><formatted-date .date=${new Date(e.updatedAt)}></formatted-date
							></span>
						</gl-tree-item>
					`)}
			</gl-tree>
		`}renderPullRequest(){return this.wip?.pullRequest==null?tk:ty`
			<webview-pane
				collapsable
				flexible
				?expanded=${this.preferences?.pullRequestExpanded??!0}
				data-region="pullrequest-pane"
			>
				<span slot="title">Pull Request #${this.wip?.pullRequest?.id}</span>
				<action-nav slot="actions">
					<action-item
						label="Open Pull Request Changes"
						icon="diff-multiple"
						@click=${()=>this.onDataActionClick("open-pr-changes")}
					></action-item>
					<action-item
						label="Compare Pull Request"
						icon="compare-changes"
						@click=${()=>this.onDataActionClick("open-pr-compare")}
					></action-item>
					<action-item
						label="Open Pull Request on Remote"
						icon="globe"
						@click=${()=>this.onDataActionClick("open-pr-remote")}
					></action-item>
				</action-nav>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						identifier="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
						details
					></issue-pull-request>
				</div>
				${this.renderSuggestedChanges()}
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?tk:ty`
			<webview-pane collapsable>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}renderPatchCreation(){return this.inReview?ty`<gl-inspect-patch
			.orgSettings=${this.orgSettings}
			.preferences=${this.preferences}
			.generate=${this.generate}
			.createState=${this.patchCreateState}
			@gl-patch-create-patch=${e=>{this.dispatchEvent(new CustomEvent("gl-inspect-create-suggestions",{detail:e.detail}))}}
		></gl-inspect-patch>`:tk}render(){return null==this.wip?tk:ty`
			${this.renderActions()}
			<webview-pane-group flexible>
				${this.renderPullRequest()}
				${tz(!1===this.inReview,()=>this.renderChangedFiles("wip"))}${this.renderPatchCreation()}
			</webview-pane-group>
		`}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}onToggleReviewMode(e){this.dispatchEvent(new CustomEvent("draft-state-changed",{detail:{inReview:e}}))}onShowCodeSuggestion(e){this.dispatchEvent(new CustomEvent("gl-show-code-suggestion",{detail:{id:e}}))}};aA.styles=[eG`
			:host {
				--gk-avatar-size: 1.6rem;
			}
		`],aS([tO({type:Object})],aA.prototype,"wip",2),aS([tO({type:Object})],aA.prototype,"orgSettings",2),aS([tO({type:Object})],aA.prototype,"draftState",2),aS([tO({type:Object})],aA.prototype,"generate",2),aS([tI()],aA.prototype,"inReview",1),aS([tI()],aA.prototype,"patchCreateMetadata",2),aA=aS([tR("gl-wip-details")],aA);let aE=eG`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover,
	:host-context(.vscode-high-contrast-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active,
	:host-context(.vscode-high-contrast-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var aP=Object.defineProperty,aR=Object.getOwnPropertyDescriptor,aT=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aR(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aP(t,o,a),a};let aO=class extends lit_element_i{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){let t=e.target,o=t.dataset.action;if(null!=o)if("commit-actions"===o){let o=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:o})}else this.fireEvent(o)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){let e=this.pinned?ty`Unpin this Commit<br />Restores Automatic Following`:ty`Pin this Commit<br />Suspends Automatic Following`,t="Forward",o="Back";return this.navigation?.hint&&(this.pinned?o+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),ty`
			<div class="group">
				${tz(!this.uncommitted,()=>ty`
						<gl-tooltip hoist>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="sha"
								@click=${this.handleAction}
							>
								<code-icon
									icon="${null!=this.stashNumber?"gl-stashes-view":"git-commit"}"
								></code-icon>
								<span class="sha" data-region="shortsha"
									>${null!=this.stashNumber?`#${this.stashNumber}`:this.shortSha}</span
								>
							</a>
							<span slot="content"
								>Copy ${null!=this.stashNumber?"Stash Name":"SHA"}<br />[${rS()}]
								Copy Message</span
							>
						</gl-tooltip>
					`)}
			</div>
			<div class="group">
				<gl-tooltip hoist
					><a
						class="commit-action${this.pinned?" is-active":""}"
						href="#"
						data-action="pin"
						@click=${this.handleAction}
						><code-icon
							icon="${this.pinned?"gl-pinned-filled":"pin"}"
							data-region="commit-pin"
						></code-icon></a
					><span slot="content">${e}</span></gl-tooltip
				>
				<gl-tooltip hoist content="${o}"
					><a
						class="commit-action${this.navigationState.back?"":" is-disabled"}"
						aria-disabled="${this.navigationState.back?"false":"true"}"
						href="#"
						data-action="back"
						@click=${this.handleAction}
						><code-icon icon="arrow-left" data-region="commit-back"></code-icon></a
				></gl-tooltip>
				${tz(this.navigationState.forward,()=>ty`
						<gl-tooltip hoist content="${t}"
							><a class="commit-action" href="#" data-action="forward" @click=${this.handleAction}
								><code-icon icon="arrow-right" data-region="commit-forward"></code-icon></a
						></gl-tooltip>
					`)}
				<!-- TODO: add a spacer -->
				${tz(this.uncommitted,()=>ty`
						<gl-tooltip hoist content="Open SCM view"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								@click=${this.handleAction}
								><code-icon icon="source-control"></code-icon></a
						></gl-tooltip>
					`)}
				<gl-tooltip hoist content="Open in Commit Graph"
					><a
						class="commit-action"
						href="#"
						data-action="commit-actions"
						data-action-type="graph"
						@click=${this.handleAction}
						><code-icon icon="gl-graph"></code-icon></a
				></gl-tooltip>
				${tz(!this.uncommitted,()=>ty`
						<gl-tooltip hoist content="Show Commit Actions"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="more"
								@click=${this.handleAction}
								><code-icon icon="kebab-vertical"></code-icon></a
						></gl-tooltip>
					`)}
			</div>
		`}};aO.styles=[aE,eG`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],aT([tO({type:Boolean,reflect:!0})],aO.prototype,"pinned",2),aT([tO({type:Boolean})],aO.prototype,"uncommitted",2),aT([tO({type:Object})],aO.prototype,"navigation",2),aT([tO()],aO.prototype,"shortSha",2),aT([tO()],aO.prototype,"stashNumber",2),aO=aT([tR("gl-inspect-nav")],aO);var aI=Object.defineProperty,aD=Object.getOwnPropertyDescriptor,aL=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aD(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&aI(t,o,a),a};let aM=class extends lit_element_i{render(){if(null==this.wip)return tk;let e=this.wip.changes,t=this.wip.branch;if(null==e||null==t)return tk;let o="git-pull-request";if(this.wip.pullRequest?.state)switch(this.wip.pullRequest?.state){case"merged":o="git-merge";break;case"closed":o="git-pull-request-closed"}return ty`
			<div class="group">
				${tz(null!=this.wip.pullRequest,()=>ty`<gl-popover hoist>
							<a href="#" class="commit-action" slot="anchor"
								><code-icon icon=${o} class="pr pr--${this.wip.pullRequest.state}"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div slot="content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									identifier="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									details
								></issue-pull-request>
							</div>
						</gl-popover>`)}
				<gl-tooltip hoist class="tooltip--overflowed">
					<a
						href="#"
						class="commit-action commit-action--overflowed"
						@click=${e=>this.handleAction(e,"switch")}
					>
						${tz(null==this.wip.pullRequest,()=>ty`<code-icon icon="git-branch"></code-icon>`)}<span class="branch">${t.name}</span><code-icon icon="chevron-down" size="10"></code-icon
					></a>
					<div slot="content">
						Switch to Another Branch...
						<hr />
						<code-icon icon="git-branch"></code-icon><span class="md-code">${this.wip.branch?.name}</span>
					</div>
				</gl-tooltip>
			</div>
			<div class="group">
				<gl-tooltip hoist content="Fetch">
					<a href="#" class="commit-action" @click=${e=>this.handleAction(e,"fetch")}
						><code-icon icon="repo-fetch"></code-icon></a
				></gl-tooltip>
			</div>
		`}handleAction(e,t){let o=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:o}}))}};aM.styles=[aE,eG`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.tooltip--overflowed {
				min-width: 0;
			}

			.commit-action--overflowed {
				width: 100%;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],aL([tO({type:Object})],aM.prototype,"wip",2),aL([tO({type:Object})],aM.prototype,"preferences",2),aM=aL([tR("gl-status-nav")],aM);var az=Object.defineProperty,aN=Object.getOwnPropertyDescriptor,aB=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?aN(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&az(t,o,a),a};let aj="0000000000000000000000000000000000000000",aU=class extends lit_element_i{constructor(){super(),this.draftState={inReview:!1},this._disposables=[],this.indentPreference=16,eU(eM)}get isUncommitted(){return this.state?.commit?.sha===aj}get hasCommit(){return this.state?.commit!=null}get isStash(){return this.state?.commit?.stashNumber!=null}get wipStatus(){let e=this.state?.wip;if(null==e)return;let t=e.branch;if(null==t)return;let o=e.changes,r=o?.files.length??0,n=t.tracking?.ahead??0,a=t.tracking?.behind??0;return{branch:e.repositoryCount>1?`${e.repo.name}:${t.name}`:t.name,upstream:t.upstream?.name,ahead:n,behind:a,working:e.changes?.files.length??0,status:a>0&&n>0?"both":a>0?"behind":n>0?"ahead":r>0?"working":void 0}}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){let e=this.state?.preferences?.indent;e!==this.indentPreference&&(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(e){e.has("state")&&(this.updateDocumentProperties(),this.state?.inReview!=null&&this.state.inReview!==this.draftState.inReview&&(this.draftState.inReview=this.state.inReview))}connectedCallback(){super.connectedCallback?.(),this._hostIpc=new e_("commit-details"),this._disposables=[this._hostIpc.onReceiveMessage(e=>this.onMessageReceived(e)),this._hostIpc,u.on("gl-inspect-nav","gl-commit-actions",e=>this.onCommitActions(e)),u.on("gl-status-nav","gl-branch-action",e=>this.onBranchAction(e.detail.action)),u.on('[data-action="pick-commit"]',"click",e=>this.onPickCommit(e)),u.on('[data-action="wip"]',"click",e=>this.onSwitchMode(e,"wip")),u.on('[data-action="details"]',"click",e=>this.onSwitchMode(e,"commit")),u.on('[data-action="search-commit"]',"click",e=>this.onSearchCommit(e)),u.on('[data-action="files-layout"]',"click",e=>this.onToggleFilesLayout(e)),u.on("gl-inspect-nav","gl-pin",()=>this.onTogglePin()),u.on("gl-inspect-nav","gl-back",()=>this.onNavigate("back")),u.on("gl-inspect-nav","gl-forward",()=>this.onNavigate("forward")),u.on('[data-action="create-patch"]',"click",e=>this.onCreatePatchFromWip(!0)),u.on('[data-region="pullrequest-pane"]',"expanded-change",e=>this.onExpandedChange(e.detail,"pullrequest")),u.on('[data-action="explain-commit"]',"click",e=>this.onExplainCommit(e)),u.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAiModel(e)),u.on("gl-wip-details","create-patch",e=>this.onCreatePatchFromWip(e.detail.checked)),u.on("gl-commit-details","file-open-on-remote",e=>this.onOpenFileOnRemote(e.detail)),u.on("gl-commit-details,gl-wip-details","file-open",e=>this.onOpenFile(e.detail)),u.on("gl-commit-details","file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),u.on("gl-commit-details,gl-wip-details","file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),u.on("gl-commit-details","file-more-actions",e=>this.onFileMoreActions(e.detail)),u.on("gl-wip-details","file-stage",e=>this.onStageFile(e.detail)),u.on("gl-wip-details","file-unstage",e=>this.onUnstageFile(e.detail)),u.on("gl-wip-details","data-action",e=>this.onBranchAction(e.detail.name)),u.on("gl-wip-details","gl-inspect-create-suggestions",e=>this.onSuggestChanges(e.detail)),u.on("gl-wip-details","gl-patch-generate-title",e=>this.onCreateGenerateTitle(e.detail)),u.on("gl-wip-details","gl-show-code-suggestion",e=>this.onShowCodeSuggestion(e.detail)),u.on("gl-wip-details","gl-patch-file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),u.on("gl-wip-details","gl-patch-file-open",e=>this.onOpenFile(e.detail)),u.on("gl-wip-details","gl-patch-file-stage",e=>this.onStageFile(e.detail)),u.on("gl-wip-details","gl-patch-file-unstage",e=>this.onUnstageFile(e.detail)),u.on("gl-wip-details","gl-patch-create-cancelled",()=>this.onDraftStateChanged(!1)),u.on("gl-status-nav,issue-pull-request","gl-issue-pull-request-details",()=>this.onBranchAction("open-pr-details"))]}onSuggestChanges(e){this._hostIpc.sendCommand(tj,e)}onShowCodeSuggestion(e){this._hostIpc.sendCommand(t5,e)}onMessageReceived(e){switch(!0){case ia.is(e):e.params.state,this.state=e.params.state,this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case il.is(e):this.state={...this.state,wip:e.params.wip,inReview:e.params.inReview},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case id.is(e):this.onDraftStateChanged(e.params.inReview,!0);break;case ic.is(e):this.state={...this.state,hasAccount:e.params.hasAccount},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case ih.is(e):this.state={...this.state,hasIntegrationsConnected:e.params.hasIntegrationsConnected},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}}disconnectedCallback(){this._disposables.forEach(e=>e.dispose()),this._disposables=[],super.disconnectedCallback?.()}renderTopInspect(){return this.state?.commit==null?tk:ty`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return this.state?.wip==null?tk:ty`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderRepoStatusContent(e){let t=this.wipStatus?.status;return ty`
			<code-icon icon="gl-repository-filled"></code-icon>
			${tz(this.wipStatus?.status!=null,()=>ty`<gl-tracking-pill
						class="inspect-header__tab-tracking"
						.ahead=${this.wipStatus.ahead}
						.behind=${this.wipStatus.behind}
						.working=${this.wipStatus.working}
						outlined
					></gl-tracking-pill>`)}
			${tz(null!=t,()=>ty`<gl-indicator
						class="inspect-header__tab-indicator inspect-header__tab-indicator--${t}"
					></gl-indicator>`)}
		`}renderWipTooltipContent(){return null==this.wipStatus?"Overview":ty`
			Overview of &nbsp;<code-icon icon="git-branch" size="12"></code-icon
			><span class="md-code">${this.wipStatus.branch}</span>
			${tz("both"===this.wipStatus.status,()=>ty`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${q("commit",this.wipStatus.behind)} behind and
						${q("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${tz("behind"===this.wipStatus.status,()=>ty`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${q("commit",this.wipStatus.behind)} behind
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${tz("ahead"===this.wipStatus.status,()=>ty`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${q("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code"> ${this.wipStatus.upstream??"origin"}</span>`)}
			${tz(this.wipStatus.working>0,()=>ty`<hr />
						${q("working change",this.wipStatus.working)}`)}
		`}renderTopSection(){let e=this.state?.mode==="wip";return ty`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<gl-tooltip hoist>
						<button class="inspect-header__tab${!e?" is-active":""}" data-action="details">
							<code-icon icon="gl-inspect"></code-icon>
						</button>
						<span slot="content"
							>${this.state?.commit!=null?!this.isStash?ty`Inspect Commit
											<span class="md-code"
												><code-icon icon="git-commit"></code-icon> ${this.state.commit.shortSha}</span
											>`:ty`Inspect Stash
											<span class="md-code"
												><code-icon icon="gl-stashes-view"></code-icon> #${this.state.commit.stashNumber}</span
											>`:"Inspect"}${this.state?.pinned?ty`(pinned)
										<hr />
										Automatic following is suspended while pinned`:""}</span
						>
					</gl-tooltip>
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?" is-active":""}" data-action="wip">
							${this.renderRepoStatusContent(e)}
						</button>
						<span slot="content">${this.renderWipTooltipContent()}</span>
					</gl-tooltip>
				</nav>
				<div class="inspect-header__content">
					${tz(this.state?.mode!=="wip",()=>this.renderTopInspect(),()=>this.renderTopWip())}
				</div>
			</div>
		`}render(){let e=this.state?.wip;return ty`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${tz(this.state?.mode==="commit",()=>ty`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`,()=>ty`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.generate=${this.generate}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
								.draftState=${this.draftState}
								@draft-state-changed=${e=>this.onDraftStateChanged(e.detail.inReview)}
							></gl-wip-details>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}onDraftStateChanged(e,t=!1){e!==this.draftState.inReview&&(this.draftState={...this.draftState,inReview:e},this.requestUpdate("draftState"),t||this._hostIpc.sendCommand(t2,{inReview:e}))}onBranchAction(e){switch(e){case"pull":this._hostIpc.sendCommand(t7,void 0);break;case"push":this._hostIpc.sendCommand(t9,void 0);break;case"fetch":this._hostIpc.sendCommand(t3,void 0);break;case"publish-branch":this._hostIpc.sendCommand(t6,void 0);break;case"switch":this._hostIpc.sendCommand(t8,void 0);break;case"open-pr-changes":this._hostIpc.sendCommand(t4,void 0);break;case"open-pr-compare":this._hostIpc.sendCommand(ie,void 0);break;case"open-pr-remote":this._hostIpc.sendCommand(ii,void 0);break;case"open-pr-details":this._hostIpc.sendCommand(io,void 0)}}onCreatePatchFromWip(e=!0){this.state?.wip?.changes!=null&&this._hostIpc.sendCommand(t1,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._hostIpc.sendCommand(k,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.ai.switchProvider")}async onExplainCommit(e){try{let e=await this._hostIpc.sendRequest(ir,void 0);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:this.explain=e}catch(e){this.explain={error:{message:"Error retrieving content"}}}}async onCreateGenerateTitle(e){try{let e=await this._hostIpc.sendRequest(is,void 0);e.error?this.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?this.generate={title:e.title,description:e.description}:this.generate=void 0}catch(e){this.generate={error:{message:"Error retrieving content"}}}this.requestUpdate("generate")}onToggleFilesLayout(e){let t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;let o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this._hostIpc.sendCommand(t0,{files:o})}onExpandedChange(e,t){let o;"pullrequest"===t&&(o={pullRequestExpanded:e.expanded}),null!=o&&(this.state={...this.state,preferences:{...this.state.preferences,...o}},this._hostIpc.sendCommand(t0,o))}onNavigate(e){this._hostIpc.sendCommand(tJ,{direction:e})}onTogglePin(){this._hostIpc.sendCommand(tQ,{pin:!this.state.pinned})}onPickCommit(e){this._hostIpc.sendCommand(tZ,void 0)}onSearchCommit(e){this._hostIpc.sendCommand(tY,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this._hostIpc.sendCommand(tX,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this._hostIpc.sendCommand(tq,e)}onOpenFile(e){this._hostIpc.sendCommand(tH,e)}onCompareFileWithWorking(e){this._hostIpc.sendCommand(tV,e)}onCompareFileWithPrevious(e){this._hostIpc.sendCommand(tW,e)}onFileMoreActions(e){this._hostIpc.sendCommand(tF,e)}onStageFile(e){this._hostIpc.sendCommand(tG,e)}onUnstageFile(e){this._hostIpc.sendCommand(tK,e)}onCommitActions(e){this.state?.commit!==void 0&&this._hostIpc.sendCommand(tU,{action:e.detail.action,alt:e.detail.alt})}};aB([tO({type:Object})],aU.prototype,"state",2),aB([tO({type:Object})],aU.prototype,"explain",2),aB([tO({type:Object})],aU.prototype,"generate",2),aB([tI()],aU.prototype,"draftState",2),aB([tI()],aU.prototype,"isUncommitted",1),aB([tI()],aU.prototype,"isStash",1),aU=aB([tR("gl-commit-details-app")],aU);let CommitDetailsApp=class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){let e=document.getElementById("app");e.state=this.state,u.on(e,"state-changed",e=>{this.state=e.detail,this.setState(this.state)})}};new CommitDetailsApp;export{CommitDetailsApp};