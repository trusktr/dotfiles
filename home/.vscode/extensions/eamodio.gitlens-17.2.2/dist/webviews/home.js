let e,t,o,r,i,n,a,l;var c,d,h,p,u,g,m,b,f,v,w,_={47:(e,t,o)=>{o(602)},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},$={};function x(e){var t=$[e];if(void 0!==t)return t.exports;var o=$[e]={exports:{}};return _[e](o,o.exports,x),o.exports}Object.defineProperty(x,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=r??!1}};let s=class s{constructor(e,t,o,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=o,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function C({context:e}){return(t,o)=>{let r=new WeakMap;if("object"==typeof o)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{r.set(t,new context_provider_i(t,{context:e}))});let n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){let e=new WeakMap;i={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=n.set;i={...n,set(t){r.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,i)}}}function S({context:e,subscribe:t}){return(o,r)=>{"object"==typeof r?r.addInitializer(function(){new s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})}):o.constructor.addInitializer(o=>{new s(o,{context:e,callback:e=>{o[r]=e},subscribe:t})})}}let P=globalThis,O=P.ShadowRoot&&(void 0===P.ShadyCSS||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A=Symbol(),B=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==A)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(O&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=B.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&B.set(t,e))}return e}toString(){return this.cssText}};let E=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,A),T=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,A),D=O?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return E(t)})(e):e,{is:j,defineProperty:F,getOwnPropertyDescriptor:q,getOwnPropertyNames:U,getOwnPropertySymbols:W,getPrototypeOf:G}=Object,V=globalThis,K=V.trustedTypes,Y=K?K.emptyScript:"",Z=V.reactiveElementPolyfillSupport,J={toAttribute(e,t){switch(t){case Boolean:e=e?Y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},X=(e,t)=>!j(e,t),Q={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&F(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:i}=q(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let n=r?.call(this);i?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=G(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...U(e),...W(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(D(o));else void 0!==e&&t.push(D(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(O)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=P.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:J).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:J;this._$Em=r,this[r]=i.fromAttribute(t,e.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){let r=this.constructor,i=this[e];if(!(((o??=r.getPropertyOptions(e)).hasChanged??X)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:i},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,Z?.({ReactiveElement:y}),(V.reactiveElementVersions??=[]).push("2.1.0");let ee=globalThis,et=ee.trustedTypes,eo=et?et.createPolicy("lit-html",{createHTML:e=>e}):void 0,er="$lit$",ei=`lit$${Math.random().toFixed(9).slice(2)}$`,en="?"+ei,es=`<${en}>`,ea=document,el=()=>ea.createComment(""),ec=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ed=Array.isArray,eh=e=>ed(e)||"function"==typeof e?.[Symbol.iterator],ep=`[ 	
\f\r]`,eu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eg=/-->/g,em=/>/g,eb=RegExp(`>|${ep}(?:([^\\s"'>=/]+)(${ep}*=${ep}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ef=/'/g,ev=/"/g,ey=/^(?:script|style|textarea|title)$/i,ew=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),e_=ew(1),ek=ew(2),e$=(ew(3),Symbol.for("lit-noChange")),ex=Symbol.for("lit-nothing"),eC=new WeakMap,eS=ea.createTreeWalker(ea,129);function eP(e,t){if(!ed(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==eo?eo.createHTML(t):t}let eO=(e,t)=>{let o=e.length-1,r=[],i,n=2===t?"<svg>":3===t?"<math>":"",a=eu;for(let t=0;t<o;t++){let o=e[t],l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,null!==(c=a.exec(o)));)h=a.lastIndex,a===eu?"!--"===c[1]?a=eg:void 0!==c[1]?a=em:void 0!==c[2]?(ey.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=eb):void 0!==c[3]&&(a=eb):a===eb?">"===c[0]?(a=i??eu,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?eb:'"'===c[3]?ev:ef):a===ev||a===ef?a=eb:a===eg||a===em?a=eu:(a=eb,i=void 0);let p=a===eb&&e[t+1].startsWith("/>")?" ":"";n+=a===eu?o+es:d>=0?(r.push(l),o.slice(0,d)+er+o.slice(d)+ei+p):o+ei+(-2===d?t:p)}return[eP(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let N=class N{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,n=0,a=e.length-1,l=this.parts,[c,d]=eO(e,t);if(this.el=N.createElement(c,o),eS.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=eS.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(er)){let t=d[n++],o=r.getAttribute(e).split(ei),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),r.removeAttribute(e)}else e.startsWith(ei)&&(l.push({type:6,index:i}),r.removeAttribute(e));if(ey.test(r.tagName)){let e=r.textContent.split(ei),t=e.length-1;if(t>0){r.textContent=et?et.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],el()),eS.nextNode(),l.push({type:2,index:++i});r.append(e[t],el())}}}else if(8===r.nodeType)if(r.data===en)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(ei,e+1));)l.push({type:7,index:i}),e+=ei.length-1}i++}}static createElement(e,t){let o=ea.createElement("template");return o.innerHTML=e,o}};function eA(e,t,o=e,r){if(t===e$)return t;let i=void 0!==r?o._$Co?.[r]:o._$Cl,n=ec(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(t=eA(e,i._$AS(e,t.values),i,r)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??ea).importNode(t,!0);eS.currentNode=r;let i=eS.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new R(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new z(i,this,e)),this._$AV.push(t),l=o[++a]}n!==l?.index&&(i=eS.nextNode(),n++)}return eS.currentNode=ea,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=ex,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ec(e=eA(this,e,t))?e===ex||null==e||""===e?(this._$AH!==ex&&this._$AR(),this._$AH=ex):e!==this._$AH&&e!==e$&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):eh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ex&&ec(this._$AH)?this._$AA.nextSibling.data=e:this.T(ea.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(eP(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new M(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=eC.get(e.strings);return void 0===t&&eC.set(e.strings,t=new N(e)),t}k(e){ed(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let i of e)r===t.length?t.push(o=new R(this.O(el()),this.O(el()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=ex,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ex}_$AI(e,t=this,o,r){let i=this.strings,n=!1;if(void 0===i)(n=!ec(e=eA(this,e,t,0))||e!==this._$AH&&e!==e$)&&(this._$AH=e);else{let r,a,l=e;for(e=i[0],r=0;r<i.length-1;r++)(a=eA(this,l[o+r],t,r))===e$&&(a=this._$AH[r]),n||=!ec(a)||a!==this._$AH[r],a===ex?e=ex:e!==ex&&(e+=(a??"")+i[r+1]),this._$AH[r]=a}n&&!r&&this.j(e)}j(e){e===ex?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ex?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ex)}};let L=class L extends k{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=eA(this,e,t,0)??ex)===e$)return;let o=this._$AH,r=e===ex&&o!==ex||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==ex&&(o===ex||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eA(this,e)}};let eR=ee.litHtmlPolyfillSupport;eR?.(N,R),(ee.litHtmlVersions??=[]).push("3.3.0");let eI=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,i=r._$litPart$;if(void 0===i){let e=o?.renderBefore??null;r._$litPart$=i=new R(t.insertBefore(el(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return e$}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eI.litElementHydrateSupport?.({LitElement:lit_element_i});let eB=eI.litElementPolyfillSupport;eB?.({LitElement:lit_element_i}),(eI.litElementVersions??=[]).push("4.2.0");let eE=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eT={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X};function eL(e){return(t,o)=>"object"==typeof o?((e=eT,t,o)=>{let{kind:r,metadata:i}=o,n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=o;return function(o){let i=this[r];t.call(this,o),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ez(e){return eL({...e,state:!0,attribute:!1})}let eD=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function eN(e,t){return(o,r,i)=>{let n=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof r?o:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eD(o,r,{get(){let o=e.call(this);return void 0===o&&(null!==(o=n(this))||this.hasUpdated)&&t.call(this,o),o}})}return eD(o,r,{get(){return n(this)}})}}function eM(e,t,o){return e?t(e):o?.(e)}let IpcCall=class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o,r){super(e,t,o,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let ej=new IpcCommand("core","webview/ready"),eF=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let eq=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let eU=new IpcCommand("core","telemetry/sendEvent"),eW=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let eH=new IpcCommand("core","webview/focus/didChange"),eG=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let eV="home",eK=new IpcRequest(eV,"launchpad/summary"),eY=new IpcRequest(eV,"overview/active"),eZ=new IpcRequest(eV,"overview/inactive"),eJ=new IpcRequest(eV,"overviewFilter"),eX=new IpcCommand(eV,"overview/repository/change"),eQ=new IpcNotification(eV,"overview/repository/didChange"),e0=new IpcCommand(eV,"previewEnabled/toggle"),e1=new IpcCommand(eV,"section/collapse"),e2=new IpcCommand(eV,"walkthrough/dismiss"),e5=new IpcNotification(eV,"ai/allAccess/didChange"),e8=new IpcCommand(eV,"ai/allAccess/dismiss"),e6=new IpcCommand(eV,"overview/filter/set");new IpcCommand(eV,"openInGraph");let e3=new IpcNotification(eV,"repositories/didCompleteDiscovering"),e4=new IpcNotification(eV,"previewEnabled/didChange"),e9=new IpcNotification(eV,"repository/wip/didChange"),e7=new IpcNotification(eV,"repositories/didChange"),te=new IpcNotification(eV,"walkthroughProgress/didChange"),tt=new IpcNotification(eV,"integrations/didChange"),to=new IpcNotification(eV,"launchpad/didChange"),tr=new IpcNotification(eV,"subscription/didChange"),ti=new IpcNotification(eV,"org/settings/didChange"),tn=new IpcNotification(eV,"home/ownerFilter/didChange"),ts=new IpcNotification(eV,"account/didFocus");var ta=Object.defineProperty,tl=(e,t,o)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?ta(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,o},tc=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},td=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},th=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot access private method");return o};function tp(e,t){return Object.is(e,t)}let tu=null,tg=!1,tm=1,tb=Symbol("SIGNAL");function tf(e){let t=tu;return tu=e,t}let tv={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ty(e){if(tg)throw Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===tu)return;tu.consumerOnSignalRead(e);let t=tu.nextProducerIndex++;tk(tu),t<tu.producerNode.length&&tu.producerNode[t]!==e&&t_(tu)&&tw(tu.producerNode[t],tu.producerIndexOfThis[t]),tu.producerNode[t]!==e&&(tu.producerNode[t]=e,tu.producerIndexOfThis[t]=t_(tu)?function e(t,o,r){var i;if(t$(t),tk(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let o=0;o<t.producerNode.length;o++)t.producerIndexOfThis[o]=e(t.producerNode[o],t,o)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(o)-1}(e,tu,t):0),tu.producerLastReadVersion[t]=e.version}function tw(e,t){var o;if(t$(e),tk(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(o=e.unwatched)||o.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)tw(e.producerNode[t],e.producerIndexOfThis[t])}let r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let o=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];tk(r),r.producerIndexOfThis[o]=t}}function t_(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function tk(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function t$(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function tx(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==tm){if(!t.producerMustRecompute(t)&&!function(t){tk(t);for(let o=0;o<t.producerNode.length;o++){let r=t.producerNode[o],i=t.producerLastReadVersion[o];if(i!==r.version||(e(r),i!==r.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=tm;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=tm}}(e),ty(e),e.value===tP)throw e.error;return e.value}let tC=Symbol("UNSET"),tS=Symbol("COMPUTING"),tP=Symbol("ERRORED"),tO={...tv,value:tC,dirty:!0,error:null,equal:tp,producerMustRecompute:e=>e.value===tC||e.value===tS,producerRecomputeValue(e){let t;if(e.value===tS)throw Error("Detected cycle in computations.");let o=e.value;e.value=tS;let r=(e&&(e.nextProducerIndex=0),tf(e)),i=!1;try{t=e.computation.call(e.wrapper),i=o!==tC&&o!==tP&&e.equal.call(e.wrapper,o,t)}catch(o){t=tP,e.error=o}finally{if(tf(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(t_(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)tw(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=o;return}e.value=t,e.version++}},tA=function(){throw Error()};function tR(){return ty(this),this.value}let tI={...tv,equal:tp,value:void 0},tB=Symbol("node");(e=>{var t,o,r,i;let State=class State{constructor(r,i={}){td(this,o),tl(this,t);let n=function(e){let t=Object.create(tI);t.value=e;let o=()=>(ty(t),t.value);return o[tb]=t,o}(r)[tb];if(this[tB]=n,n.wrapper=this,i){let t=i.equals;t&&(n.equal=t),n.watched=i[e.subtle.watched],n.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return tR.call(this[tB])}set(t){var o,r;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(tg)throw Error("Writes to signals not permitted during Watcher callback");o=this[tB],(null==tu?void 0:tu.consumerAllowSignalWrites)===!1&&tA(),o.equal.call(o.wrapper,o.value,t)||(o.value=t,r=o,r.version++,tm++,function e(t){if(void 0===t.liveConsumerNode)return;let o=tg;tg=!0;try{for(let o of t.liveConsumerNode)o.dirty||function(t){var o;t.dirty=!0,e(t),null==(o=t.consumerMarkedDirty)||o.call(t.wrapper??t)}(o)}finally{tg=o}}(r))}};t=tB,o=new WeakSet,e.isState=e=>"object"==typeof e&&tc(o,e),e.State=State;let Computed=class Computed{constructor(t,o){td(this,i),tl(this,r);let n=function(e){let t=Object.create(tO);t.computation=e;let o=()=>tx(t);return o[tb]=t,o}(t)[tb];if(n.consumerAllowSignalWrites=!0,this[tB]=n,n.wrapper=this,o){let t=o.equals;t&&(n.equal=t),n.watched=o[e.subtle.watched],n.unwatched=o[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return tx(this[tB])}};r=tB,i=new WeakSet,e.isComputed=e=>"object"==typeof e&&tc(i,e),e.Computed=Computed,(t=>{var o,r,i,n;t.untrack=function(e){let t,o=null;try{o=tf(null),t=e()}finally{tf(o)}return t},t.introspectSources=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(o=t[tB].producerNode)?void 0:o.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(o=t[tB].liveConsumerNode)?void 0:o.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let o=t[tB].liveConsumerNode;return!!o&&o.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let o=t[tB].producerNode;return!!o&&o.length>0};let Watcher=class Watcher{constructor(e){td(this,r),td(this,i),tl(this,o);let t=Object.create(tv);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[tB]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");th(this,i,n).call(this,t);let o=this[tB];o.dirty=!1;let r=tf(o);for(let e of t)ty(e[tB]);tf(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");th(this,i,n).call(this,t);let o=this[tB];tk(o);for(let e=o.producerNode.length-1;e>=0;e--)if(t.includes(o.producerNode[e].wrapper)){tw(o.producerNode[e],o.producerIndexOfThis[e]);let t=o.producerNode.length-1;if(o.producerNode[e]=o.producerNode[t],o.producerIndexOfThis[e]=o.producerIndexOfThis[t],o.producerNode.length--,o.producerIndexOfThis.length--,o.nextProducerIndex--,e<o.producerNode.length){let t=o.producerIndexOfThis[e],r=o.producerNode[e];t$(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[tB].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};o=tB,r=new WeakSet,i=new WeakSet,n=function(t){for(let o of t)if(!(0,e.isComputed)(o)&&!(0,e.isState)(o))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>tc(r,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=tu)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(f||(f={}));let tE=(e=null)=>new f.State(e,{equals:()=>!1});new WeakMap;let SignalObjectImpl=class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=tE();constructor(e={}){let t=Object.getPrototypeOf(e),o=Object.getOwnPropertyDescriptors(e),r=Object.create(t);for(let e in o)Object.defineProperty(r,e,o[e]);let i=this;return new Proxy(r,{get:(e,t,o)=>(i.#o(t),Reflect.get(e,t,o)),has:(e,t)=>(i.#o(t),t in e),ownKeys:e=>(i.#t.get(),Reflect.ownKeys(e)),set(e,t,o,r){let n=Reflect.set(e,t,o,r);return i.#r(t),i.#i(),n},deleteProperty:(e,t)=>(t in e&&(delete e[t],i.#r(t),i.#i()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#o(e){let t=this.#e.get(e);void 0===t&&(t=tE(),this.#e.set(e,t)),t.get()}#r(e){let t=this.#e.get(e);t&&t.set(null)}#i(){this.#t.set(null)}};let tT=Symbol("SignalWatcherBrand"),tL=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),tz=new WeakMap;function tD(e){return!0===e[tT]?e:class extends e{constructor(){super(...arguments),this._$St=new f.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new f.Computed(()=>{this._$St.get(),super.performUpdate()});let e=this._$Su=new f.subtle.Watcher(function(){let e=tz.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});tz.set(e,this),tL.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,o){this._$So=!0,super.requestUpdate(e,t,o)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);let t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}let tN=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:tM}={M:er,P:ei,A:en,C:1,L:eO,R:M,D:eh,V:eA,I:R,H:k,N:I,U:L,B:H,F:z},tj=()=>document.createComment(""),tF=(e,t,o)=>{let r=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===o)o=new tM(r.insertBefore(tj(),i),r.insertBefore(tj(),i),e,e.options);else{let t=o._$AB.nextSibling,n=o._$AM,a=n!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==n._$AU&&o._$AP(t)}if(t!==i||a){let e=o._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return o},tq=(e,t,o=e)=>(e._$AI(t,o),e),tU={},tW=e=>{e._$AP?.(!1,!0);let t=e._$AA,o=e._$AB.nextSibling;for(;t!==o;){let e=t.nextSibling;t.remove(),t=e}},tH=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),tH(e,t);return!0},tG=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},tV=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),tZ(t)}};function tK(e){void 0!==this._$AN?(tG(this),this._$AM=e,tV(this)):this._$AM=e}function tY(e,t=!1,o=0){let r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(let e=o;e<r.length;e++)tH(r[e],!1),tG(r[e]);else null!=r&&(tH(r,!1),tG(r));else tH(this,e)}let tZ=e=>{2==e.type&&(e._$AP??=tY,e._$AQ??=tK)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),tV(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tH(this,e),tG(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let watch_h=class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new f.Computed(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()});let e=this._$Su=new f.subtle.Watcher(()=>{var t;null==(t=this._$SO)||t._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null==(e=this._$SO)||e.m(this))}commit(){this.setValue(f.subtle.untrack(()=>{var e;return null==(e=this._$SW)?void 0:e.get()}))}render(e){return f.subtle.untrack(()=>e.get())}update(e,[t]){var o;return null!=this._$SO||(this._$SO=null==(o=e.options)?void 0:o.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),f.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}};let tJ=tN(watch_h),tX=e=>(t,...o)=>e(t,...o.map(e=>e instanceof f.State||e instanceof f.Computed?tJ(e):e));tX(e_),tX(ek),f.State,f.Computed;let tQ=(e,t)=>new f.State(e,t);let AsyncComputed=class AsyncComputed{#n=!1;#s=new f.State("initial");get status(){this.run();let e=this.#s.get();return this.#n?"pending":e}#a;get value(){return this.run(),this.#a.get()}#l=new f.State(void 0);get error(){return this.run(),this.#l.get()}#c=new f.State(void 0);get complete(){return this.run(),this.#c.get().promise}#d;#h;#p=0;#u;constructor(e,t){this.#a=new f.State(t?.initialValue),this.#d=new f.Computed(()=>{let t=++this.#p;"pending"!==f.subtle.untrack(()=>this.#s.get())&&this.#c.set(Promise.withResolvers()),this.#n=!1,this.#s.set("pending"),this.#u?.abort(),this.#u=new AbortController,e(this.#u.signal).then(e=>{t===this.#p&&(this.#s.set("complete"),this.#a.set(e),this.#l.set(void 0),this.#c.get().resolve(e))},e=>{t===this.#p&&(this.#s.set("error"),this.#l.set(e),this.#a.set(void 0),this.#c.get().reject(e))})}),this.#h=new f.subtle.Watcher(async()=>{this.#n=!0,this.#h.watch()}),this.#h.watch(this.#d)}get(){let e=this.status;if("error"===e||"pending"===e&&void 0!==this.error)throw this.error;return this.value}run(){this.#d.get()}};function t0(e,t,o){let r,i,n,a,l,c,d,h,p,u,g=0;null!=o&&({edges:c,maxWait:d,signal:h,aggregator:p}=o);let m="leading"===(c??="trailing")||"both"===c,b="trailing"===c||"both"===c;function f(){if(null!=r){g=Date.now();let t=r,o=u;return u=void 0,r=void 0,n=e.apply(o,t)}}function v(){null!=a&&(clearTimeout(a),a=void 0)}function w(){null!=l&&(clearTimeout(l),l=void 0)}function _(){v(),w(),u=void 0,r=void 0,i=void 0,g=0}function $(...e){if(h?.aborted)return;let o=Date.now();null!=p&&null!=r?r=p(r,e):(u=this,r=e);let c=null==a&&null==l;i=o,v();let w=Date.now();if(i=w,a=setTimeout(()=>{a=void 0,function(e){let o=e-(i??0),r=e-g;return null==i||o>=t||o<0||null!=d&&r>=d}(Date.now())&&b&&f(),_()},t),null!=d&&!l){let e=d-(w-g);e>0?l=setTimeout(()=>{l=void 0,b&&null!=r&&f(),g=Date.now()},e):(b&&null!=r&&f(),_())}return m&&c?f():n}return $.cancel=_,$.flush=function(){return v(),w(),f()},$.pending=function(){return null!=a||null!=l},h?.addEventListener("abort",_,{once:!0}),$}let AsyncComputedState=class AsyncComputedState{constructor(e,t){this._fetch=e,this._debounce=500,this._invalidate=tQ(0),this._state=tQ(void 0),null!=t&&(this._state.set(t.initial),null!=t.debounce&&(this._debounce=t.debounce),!0===t.autoRun&&this.run())}get state(){return this._run(),this._state.get()}get computed(){if(null==this._computed){let e=this._state.get();this._computed=new AsyncComputed(async e=>{this._invalidate.get();let t=await this._fetch(e);return this._state.set(t),t},e?{initialValue:e}:void 0)}return this._computed}_runCore(){this.computed.run()}_run(e=!1){if(e)return void this._runCore();null==this._runDebounced&&(this._runDebounced=t0(this._runCore.bind(this),this._debounce)),this._runDebounced()}run(e=!1){e&&this.invalidate(),this._run()}invalidate(){this._invalidate.set(Date.now())}render(e){return((e,{initial:t,pending:o,complete:r,error:i})=>{switch(e.status){case"initial":return t?.();case"pending":return o?.();case"complete":return r?.(e.value);case"error":return i?.(e.error)}})(this.computed,e)}};let ActiveOverviewState=class ActiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eY,void 0),t),this._ipc=e,this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case tt.is(e):case e7.is(e):case e9.is(e):case eQ.is(e):this.run(!0)}})}dispose(){this._disposable?.dispose()}changeRepository(){this._ipc.sendCommand(eX,void 0)}};let InactiveOverviewState=class InactiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eZ,void 0),t),this._ipc=e,this.filter=new SignalObjectImpl({}),this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case e7.is(e):this.run(!0);break;case tn.is(e):this.filter.recent=e.params.filter.recent,this.filter.stale=e.params.filter.stale,this.run(!0);break;case eQ.is(e):this.run(!0)}}),this._ipc.sendRequest(eJ,void 0).then(e=>{this.filter.recent=e.recent,this.filter.stale=e.stale})}dispose(){this._disposable?.dispose()}};let t1=new WeakMap;function t2(e,t){return function(o,r,i){let n=t1.get(o.constructor);null==n&&t1.set(o.constructor,n=[]),n.push({method:i.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){let t=t1.get(this.constructor);if(null!=t)for(let{keys:o,method:r,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};function t5(e){let t=.001*performance.now(),o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(r-=e[1])<0&&(o--,r+=1e9)),[o,r]}x(47);var t8=((c=t8||{})[c.Hash=35]="Hash",c[c.Slash=47]="Slash",c[c.Digit0=48]="Digit0",c[c.Digit1=49]="Digit1",c[c.Digit2=50]="Digit2",c[c.Digit3=51]="Digit3",c[c.Digit4=52]="Digit4",c[c.Digit5=53]="Digit5",c[c.Digit6=54]="Digit6",c[c.Digit7=55]="Digit7",c[c.Digit8=56]="Digit8",c[c.Digit9=57]="Digit9",c[c.Backslash=92]="Backslash",c[c.A=65]="A",c[c.B=66]="B",c[c.C=67]="C",c[c.D=68]="D",c[c.E=69]="E",c[c.F=70]="F",c[c.Z=90]="Z",c[c.a=97]="a",c[c.b=98]="b",c[c.c=99]="c",c[c.d=100]="d",c[c.e=101]="e",c[c.f=102]="f",c[c.z=122]="z",c),t6=((d=t6||{}).AngleBracketLeftHeavy="❰",d.AngleBracketRightHeavy="❱",d.ArrowBack="↩",d.ArrowDown="↓",d.ArrowDownUp="⇵",d.ArrowDropRight="⤷",d.ArrowHeadRight="➤",d.ArrowLeft="←",d.ArrowLeftDouble="⇐",d.ArrowLeftRight="↔",d.ArrowLeftRightDouble="⇔",d.ArrowLeftRightDoubleStrike="⇎",d.ArrowLeftRightLong="⟷",d.ArrowRight="→",d.ArrowRightDouble="⇒",d.ArrowRightHollow="⇨",d.ArrowUp="↑",d.ArrowUpDown="⇅",d.ArrowUpRight="↗",d.ArrowsHalfLeftRight="⇋",d.ArrowsHalfRightLeft="⇌",d.ArrowsLeftRight="⇆",d.ArrowsRightLeft="⇄",d.Asterisk="∗",d.Bullseye="◎",d.Check="✔",d.Dash="—",d.Dot="•",d.Ellipsis="…",d.EnDash="–",d.Envelope="✉",d.EqualsTriple="≡",d.Flag="⚑",d.FlagHollow="⚐",d.MiddleEllipsis="⋯",d.MuchLessThan="≪",d.MuchGreaterThan="≫",d.Pencil="✎",d.Space=" ",d.SpaceThin=" ",d.SpaceThinnest=" ",d.SquareWithBottomShadow="❏",d.SquareWithTopShadow="❐",d.Warning="⚠",d.ZeroWidthSpace="​",d);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var t3=((h=t3||{}).File="file",h.Git="git",h.GitHub="github",h.GitLens="gitlens",h.GitLensMarkdown="gitlens-markdown",h.PRs="pr",h.Remote="vscode-remote",h.Vsls="vsls",h.VslsScc="vsls-scc",h.Virtual="vscode-vfs",h);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let t4="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",t9=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${t4}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${t4}`,graph:`https://gitkraken.com/solutions/commit-graph?${t4}`,launchpad:`https://gitkraken.com/solutions/launchpad?${t4}`,platform:`https://gitkraken.com/devex?${t4}`,pricing:`https://gitkraken.com/gitlens/pricing?${t4}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${t4}`,security:`https://help.gitkraken.com/gitlens/security?${t4}`,workspaces:`https://gitkraken.com/solutions/workspaces?${t4}`,cli:`https://gitkraken.com/cli?${t4}`,browserExtension:`https://gitkraken.com/browser-extension?${t4}`,desktop:`https://gitkraken.com/git-client?${t4}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${t4}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${t4}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t4}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${t4}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${t4}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t4}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${t4}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${t4}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t4}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t4}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t4}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${t4}`}),t7=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,oe=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ot=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],oo=new Map,or=new Map;function oi(e,n){let a=("number"==typeof e?e:e.getTime())-new Date().getTime();for(let[e,l,c,d]of ot){let h=Math.abs(a);if(h>=l||1e3===l){if(n){if(null==t&&(t=null!=i?i.resolvedOptions().locale:null!=r?r.resolvedOptions().locale:(i=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===t||t?.startsWith("en-")){let e=Math.round(h/c);return`${e}${d}`}return null==i&&(i=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),i.format(Math.round(a/c),e)}return null==r&&(r=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"auto",style:"long"})),r.format(Math.round(a/c),e)}}return""}let on=["th","st","nd","rd"];function os(e,t){null==e&&(e="decimal");let r=`${t??""}:${e}`,i=or.get(r);if(null==i){let n,a={localeMatcher:"best fit",style:e};n=null==t?o:"system"===t?void 0:[t],i=new Intl.NumberFormat(n,a),or.set(r,i)}return i.format}let{fromCharCode:oa}=String;function ol(e){let[t,o]=t5(e);return 1e3*t+Math.floor(o/1e6)}new TextEncoder;let oc=/\$\{(?:'.*?[^\\]'|\W*)?(\w*?)(?:'.*?[^\\]'|[\W\d]*)\}/g,od=new Map;function oh(e){return 95===e||e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57}function op(e,t,o){let r;if(null==o)return n??=os(),`${n(t)} ${e}${1===t?"":"s"}`;let i=1===t?e:o.plural??`${e}s`;return o.only?i:(0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(n??=os(),r=n(t)),`${r}${o.infix??" "}${i}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var ou=((p=ou||{})[p.Off=0]="Off",p[p.Error=1]="Error",p[p.Warn=2]="Warn",p[p.Info=3]="Info",p[p.Debug=4]="Debug",p);let og=["accessToken","password","token"],om=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of og)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(og);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=ob(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ob(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function ob(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let of=new WeakMap,ov={enabled:e=>om.enabled(e)||om.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":om.error(void 0,t,o,...r);break;case"warn":om.warn(t,o,...r);break;case"info":om.log(t,o,...r);break;default:om.debug(t,o,...r)}}},oy=0x40000000-1;function ow(){let e=0;return{get current(){return e},next:function(){return e===oy&&(e=0),++e},reset:function(){e=0}}}let o_=ow(),ok=new Map;function o$(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function ox(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?o_.current:void 0,r=o_.next();return{scopeId:r,prevScopeId:o,prefix:`${o$(r,o)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=ox(e,void 0),om.configure({name:e,createChannel:function(e){return{name:e,appendLine:om.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?om.log(this.scope,e,...t):om.log(e,t.shift(),...t)}};let oC="graph";new IpcCommand(oC,"chooseRepository"),new IpcCommand(oC,"dblclick"),new IpcCommand(oC,"dblclick"),new IpcCommand(oC,"avatars/get"),new IpcCommand(oC,"refs/metadata/get"),new IpcCommand(oC,"rows/get"),new IpcCommand(oC,"pullRequest/openDetails"),new IpcCommand(oC,"search/openInView"),new IpcCommand(oC,"columns/update"),new IpcCommand(oC,"refs/update/visibility"),new IpcCommand(oC,"filters/update/excludeTypes"),new IpcCommand(oC,"configuration/update"),new IpcCommand(oC,"search/update/mode"),new IpcCommand(oC,"filters/update/includedRefs"),new IpcCommand(oC,"selection/update"),new IpcRequest(oC,"chooseRef"),new IpcRequest(oC,"rows/ensure"),new IpcRequest(oC,"counts"),new IpcRequest(oC,"row/hover/get"),new IpcRequest(oC,"search"),new IpcNotification(oC,"repositories/integration/didChange"),new IpcNotification(oC,"didChange",!0,!0),new IpcNotification(oC,"configuration/didChange");let oS=new IpcNotification(oC,"subscription/didChange");new IpcNotification(oC,"avatars/didChange"),new IpcNotification(oC,"branchState/didChange"),new IpcNotification(oC,"refs/didChangeMetadata"),new IpcNotification(oC,"columns/didChange"),new IpcNotification(oC,"scrollMarkers/didChange"),new IpcNotification(oC,"refs/didChangeVisibility"),new IpcNotification(oC,"rows/didChange",void 0,!0),new IpcNotification(oC,"rows/stats/didChange"),new IpcNotification(oC,"selection/didChange"),new IpcNotification(oC,"workingTree/didChange"),new IpcNotification(oC,"didSearch"),new IpcNotification(oC,"didFetch"),new IpcNotification(oC,"featurePreview/didStart");let oP="timeline";new IpcRequest(oP,"ref/choose"),new IpcRequest(oP,"path/choose"),new IpcCommand(oP,"point/open"),new IpcCommand(oP,"config/update"),new IpcCommand(oP,"scope/update");let oO=new IpcNotification(oP,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tr.is(e)||oS.is(e)||oO.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,r=this._promos.get(o);return null==r&&(r=this.ipc.sendRequest(eq,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(eU,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};let oA=/\(([\s\S]*)\)/,oR=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,oI=/\s?=.*$/;function oB(e,t=!1){let o,r,i,n,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:o,if:r,enter:i,exit:n,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e),l>0&&(d=!0,h=!0),h&&(c=!0);let p=om.isDebugging,u=t?om.debug:om.log,g=p?"debug":"info";return(e,t,m)=>{let b,f;if("function"==typeof m.value?(b=m.value,f="value"):"function"==typeof m.get&&(b=m.get,f="get"),null==b||null==f)throw Error("Not supported");let v=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(oR,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;let i=oA.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(oI,"")):[]}(b):[];m[f]=function(...e){var m,f;let w,_;if(!p&&!om.enabled(g)||null!=r&&!r.apply(this,e))return b.apply(this,e);let $=o_.current,x=o_.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",r=o.indexOf("_");-1!==r&&(o=o.substring(r+1));let i=of.get(t);return i?.(e,o)??o}(this):void 0,S=C?c?`${o$(x,$)} ${C}.${t}`:`${C}.${t}`:t;null!=a&&(S=a({id:x,instance:this,instanceName:C??"",name:t,prefix:S},...e)),c&&(m={scopeId:x,prevScopeId:$,prefix:S},m={prevScopeId:o_.current,...m},ok.set(x,m),w=m);let P=null!=i?i(...e):"";if(!1===o||0===e.length)_="",d||u.call(om,`${S}${P}`);else{let t,r,i,n;_="";let a=-1;for(n of e){if(r=v[++a],null!=(t=o?.[a])){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}i=String(t(n))}else _.length>0&&(_+=", "),i=om.toLoggable(n);_+=r?`${r}=${i}`:i}d||u.call(om,_?`${S}${P}(${_})`:`${S}${P}`)}if(d||h||null!=n){let t,o=h?t5():void 0,r=e=>{let t=void 0!==o?` [${ol(o)}ms]`:"";d?om.error(e,_?`${S}${P}(${_})`:`${S}${P}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):om.error(e,S,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),c&&ok.delete(x)};try{t=b.apply(this,e)}catch(e){throw r(e),e}let i=e=>{let t,r,i,a;if(null!=o?(t=ol(o))>500?(r=om.warn,i=` [*${t}ms] (slow)`):(r=u,i=` [${t}ms]`):(i="",r=u),null!=n)if("function"==typeof n)try{a=n(e)}catch(e){a=`@log.exit error: ${e}`}else!0===n&&(a=`returned ${om.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,r=(e,...t)=>om.error(null,e,...t)):a="completed";d?(0===l||t>l)&&r.call(om,_?`${S}${P}(${_}) ${a}${w?.exitDetails||""}${i}`:`${S}${P} ${a}${w?.exitDetails||""}${i}`):r.call(om,_?`${S}(${_}) ${a}${w?.exitDetails||""}${i}`:`${S} ${a}${w?.exitDetails||""}${i}`),c&&ok.delete(x)};return null!=t&&null!=(f=t)&&(f instanceof Promise||"function"==typeof f?.then)?t.then(i,r):i(t),t}return b.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:ox(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ov,this._time=t5(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=t5(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=t5(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,r]=t5(this._time),i=1e3*o+Math.floor(r/1e6),n=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${n?`${n} `:""}[${i}ms]${e?.suffix??""}`)}};function oE(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function oT(e,t){return new Promise(o=>{e.addEventListener(t,function r(i){i.target===e&&(e.removeEventListener(t,r),o())})})}(v||(v={})).on=function(e,t,o,r){let i=!1;if("string"==typeof e){let n=function(t){let r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,n,r??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,n,r??!0))}}}let n=function(e){o(e,this)};return e.addEventListener(t,n,r??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,n,r??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let oL={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?oL:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var oz=Object.defineProperty,oD=Object.getOwnPropertyDescriptor,oN=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?oD(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&oz(t,o,n),n};let oM=ow();function oj(){return`webview:${oM.next()}`}let oF=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=a??=acquireVsCodeApi(),this._disposable=v.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=ok.get(o_.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let r=function(e,t,...o){return(t?.provider??ov).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(ox(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var r,i;let e=(r=o.method,i=o.completionId,`${r}|${i}`);this._pendingHandlers.get(e)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let o=e[t];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){let o=oj();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let o=oj(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}getResponsePromise(e,t){return new Promise((o,r)=>{var i,n;let a,l=(i=e,n=t,`${i}|${n}`);function c(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(l)}a=setTimeout(()=>{c.call(this),r(Error(`Timed out waiting for completion of ${l}`))},(om.isDebugging?60:5)*6e4),this._pendingHandlers.set(l,e=>{if(c.call(this),e.method===eW.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function oq(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}oN([oB({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],oF.prototype,"onMessageReceived",1),oN([oB({args:{0:e=>e.method,1:!1}},!0)],oF.prototype,"sendCommand",1),oN([oB({args:{0:e=>e.method,1:!1,2:!1}},!0)],oF.prototype,"sendRequest",1),oN([oB({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],oF.prototype,"postMessage",1),oF=oN([(u=e=>`${e.appName}(HostIpc)`,e=>void of.set(e,u))],oF);let RGBA=class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=oq(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oq(Math.max(Math.min(1,t),0),3),this.l=oq(Math.max(Math.min(1,o),0),3),this.a=oq(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,i=e.a,n=Math.max(t,o,r),a=Math.min(t,o,r),l=0,c=0,d=(a+n)/2,h=n-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),n){case t:l=(o-r)/h+6*(o<r);break;case o:l=(r-t)/h+2;break;case r:l=(t-o)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,i)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,r,i=e.h/360,{s:n,l:a,a:l}=e;if(0===n)t=o=r=a;else{let e=a<.5?a*(1+n):a+n-a*n,l=2*a-e;t=HSLA._hue2rgb(l,e,i+1/3),o=HSLA._hue2rgb(l,e,i),r=HSLA._hue2rgb(l,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*r),l)}};let HSVA=class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oq(Math.max(Math.min(1,t),0),3),this.v=oq(Math.max(Math.min(1,o),0),3),this.a=oq(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,i=Math.max(t,o,r),n=i-Math.min(t,o,r);return new HSVA(Math.round(60*(0===n?0:i===t?((o-r)/n%6+6)%6:i===o?(r-t)/n+2:(t-o)/n+4)),0===i?0:n/i,i,e.a)}static toRGBA(e){let{h:t,s:o,v:r,a:i}=e,n=r*o,a=n*(1-Math.abs(t/60%2-1)),l=r-n,[c,d,h]=[0,0,0];return t<60?(c=n,d=a):t<120?(c=a,d=n):t<180?(d=n,h=a):t<240?(d=a,h=n):t<300?(c=a,h=n):t<=360&&(c=n,h=a),new RGBA(c=Math.round((c+l)*255),d=Math.round((d+l)*255),h=Math.round((h+l)*255),i)}};function oU(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(oU(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return oq(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:r,a:i}=this.rgba;return new Color(new RGBA(t,o,r,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,r=t.a,i=o+r*(1-o);if(i<1e-6)return Color.transparent;let n=this.rgba.r*o/i+t.r*r*(1-o)/i;return new Color(new RGBA(n,this.rgba.g*o/i+t.g*r*(1-o)/i,this.rgba.b*o/i+t.b*r*(1-o)/i,i))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:r,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${oW(e.rgba.r)}${oW(e.rgba.g)}${oW(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-r)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(r-i)/r,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function oW(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let oH=new Emitter,oG=oH.event;function oV(e){let t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,i=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),n=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=oU("--vscode-editor-background",o),l=oU("--vscode-editor-foreground",o);return l||(l=oU("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:n,isInitializing:null==e}}var oK=Object.defineProperty,oY=Object.getOwnPropertyDescriptor,oZ=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?oY(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&oK(t,o,n),n};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new oF(this.name),this._ipc.sendCommand(ej,void 0);let e=this.bootstrap;this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(e),this.onPersistState?.(e);let t=oV();null!=this.onThemeUpdated&&(this.onThemeUpdated(t),this.disposables.push(function(){let e=new MutationObserver(e=>{oH.fire(oV(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(oG(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(e,this._ipc),this._ipc.onReceiveMessage(e=>{switch(!0){case eH.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case eG.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=t0(e=>{this._ipc.sendCommand(eF,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return e_`<slot></slot>`}};oZ([eL({type:String})],GlAppHost.prototype,"name",2),oZ([eL({type:String})],GlAppHost.prototype,"placement",2),oZ([C({context:"ipc"})],GlAppHost.prototype,"_ipc",2),oZ([C({context:"logger"})],GlAppHost.prototype,"_logger",2),oZ([C({context:"promos"})],GlAppHost.prototype,"_promos",2),oZ([C({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),oZ([eL({type:Object,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oJ=T`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;T`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${oJ}
	}
`;let oX=T`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,oQ=T`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,o0=T`
	:focus-visible {
		${oX}
	}
`,o1=T`
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
`,o2=T`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${oX}
	}
	a:hover {
		text-decoration: underline;
	}
`,o5=T`
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
`;T`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let o8=T`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}
`,o6=T`
	.home {
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		overflow: hidden;
	}

	.home__alerts {
		flex: none;
		padding: 0 2rem;
		position: relative;
	}
	.home__alerts:not([has-alerts]) {
		display: none;
	}

	.home__main {
		flex: 1;
		overflow: auto;
		padding: 0.8rem 1.2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}

	.home__aux,
	.home__header {
		flex: none;
	}

	.home__header {
		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
		padding: 0.4rem;
	}

	.home__aux:has(gl-promo-banner:has(gl-promo:not([has-promo])):only-child) {
		display: none;
	}

	summary {
		font-size: 1.3rem;
		font-weight: normal;
		text-transform: uppercase;
		color: var(--vscode-foreground);
		cursor: pointer;
	}

	details[open] summary {
		margin-block-end: 0.8rem;
	}

	gl-home-header {
		margin: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}
`;T`
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
	.button-container--trio > gl-button:first-child {
		margin-bottom: 0.4rem;
	}

	.button-group {
		display: inline-flex;
		gap: 0.4rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}
	.button-group gl-button {
		margin-top: 0;
	}
	.button-group gl-button:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group gl-button:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;let o3=T`
	.alert {
		position: relative;
		padding: 0.8rem 1.2rem;
		line-height: 1.2;
		margin-bottom: 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-alert-neutralBorder);
		color: var(--color-alert-foreground);
	}
	.alert__title {
		font-size: 1.4rem;
		margin: 0;
	}
	.alert__description {
		font-size: 1.2rem;
		margin: 0.4rem 0 0;
	}
	.alert__description > :first-child {
		margin-top: 0;
	}
	.alert__description > :last-child {
		margin-bottom: 0;
	}
	.alert__close {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		color: inherit;
		opacity: 0.64;
	}
	.alert__close:hover {
		color: inherit;
		opacity: 1;
	}
	.alert.is-collapsed {
		cursor: pointer;
	}
	.alert.is-collapsed:hover {
		background-color: var(--color-alert-neutralHoverBackground);
	}
	.alert.is-collapsed .alert__description,
	.alert.is-collapsed .alert__close gl-tooltip:first-child,
	.alert:not(.is-collapsed) .alert__close gl-tooltip:last-child {
		display: none;
	}
	.alert--info {
		background-color: var(--color-alert-infoBackground);
		border-left-color: var(--color-alert-infoBorder);
	}
	.alert--warning {
		background-color: var(--color-alert-warningBackground);
		border-left-color: var(--color-alert-warningBorder);
	}
	.alert--danger {
		background-color: var(--color-alert-errorBackground);
		border-left-color: var(--color-alert-errorBorder);
	}
`,o4=T`
	.nav-list {
		margin-left: -1.2rem;
		margin-right: -1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: stretch;
		margin-bottom: 1.6rem;
	}
	.nav-list__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		padding: 0.4rem 2rem;
	}
	.nav-list__item:hover,
	.nav-list__item:focus-within {
		background-color: var(--vscode-list-hoverBackground);
		color: var(--vscode-list-hoverForeground);
	}
	.nav-list__item:has(:first-child:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.nav-list__item:has(:active) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}
	.nav-list__item:has(.is-disabled) {
		cursor: not-allowed;
	}
	.nav-list__link {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: inherit;
	}
	.nav-list__link:hover,
	.nav-list__link:focus {
		color: inherit;
		text-decoration: none;
	}
	.nav-list__link:focus {
		outline: none;
	}
	.nav-list__link.is-disabled,
	.nav-list__link.is-disabled:hover {
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
	.nav-list__icon {
		flex: none;
		opacity: 0.5;
	}
	.nav-list__label {
		flex: 1;
		font-weight: 600;
	}
	.nav-list__desc {
		color: var(--color-foreground--65);
		font-variant: all-small-caps;
		margin-left: 1rem;
	}
	.nav-list__group {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-list__group .nav-list__label {
		width: auto;
	}
	.nav-list__access {
		flex: none;
		position: relative;
		left: 1.2rem;
		font-size: x-small;
		outline: none;
		white-space: nowrap;
		--gl-feature-badge-color: color-mix(in srgb, transparent 40%, currentColor);
		--gl-feature-badge-border-color: color-mix(in srgb, transparent 40%, var(--color-foreground--50));
	}
	.nav-list__item:hover .nav-list__label {
		text-decoration: underline;
	}
	.nav-list__item:hover .is-disabled .nav-list__label {
		text-decoration: none;
	}
	.nav-list__item:hover .nav-list__desc {
		color: var(--color-foreground);
	}
	.nav-list__item:focus-within .nav-list__access,
	.nav-list__item:hover .nav-list__access {
		--gl-feature-badge-color: currentColor;
		--gl-feature-badge-border-color: var(--color-foreground--50);
	}
	.nav-list__title {
		padding: 0 2rem;
	}

	.t-eyebrow {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-foreground--50);
		margin: 0;
	}
	.t-eyebrow.sticky {
		top: -8px;
	}
`,o9=T`
	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
	}

	.walkthrough-progress {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 2px 4px 4px;
		margin-top: 4px;
		align-items: stretch;
		cursor: pointer;
		border-radius: 4px;
	}
	.walkthrough-progress:focus-within,
	.walkthrough-progress:hover {
		background-color: var(--gl-walkthrough-hover-background);
	}

	.walkthrough-progress__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-foreground--85);
	}
	.walkthrough-progress__button {
		--button-padding: 1px 2px 0px 2px;
		position: absolute;
		right: 0.4rem;
	}
	.walkthrough-progress__bar::-webkit-progress-bar {
		border-radius: 2px;
		background: var(--color-alert-neutralBackground);
	}
	.walkthrough-progress__bar::-webkit-progress-value {
		background: var(--vscode-progressBar-background, blue);
		transition: 0.1s ease-in;
		border-radius: 2px;
	}
	.walkthrough-progress__bar {
		pointer-events: none;
		border-radius: 2px;
		width: 100%;
		background: unset;
		height: 4px;
		flex-shrink: 0;
		z-index: 2;
	}
`;let HomeStateProvider=class HomeStateProvider{constructor(e,t,o){this._ipc=o,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage(t=>{switch(!0){case e7.is(t):this._state.repositories=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e3.is(t):this._state.repositories=t.params.repositories,this._state.discovering=t.params.discovering,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case te.is(t):this._state.walkthroughProgress=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tr.is(t):this._state.subscription=t.params.subscription,this._state.avatar=t.params.avatar,this._state.organizationsCount=t.params.organizationsCount,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case ti.is(t):this._state.orgSettings=t.params.orgSettings,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tt.is(t):this._state.hasAnyIntegrationConnected=t.params.hasAnyIntegrationConnected,this._state.integrations=t.params.integrations,this._state.ai=t.params.ai,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e4.is(t):this._state.previewEnabled=t.params.previewEnabled,this._state.previewCollapsed=t.params.previewCollapsed,this._state.aiEnabled=t.params.aiEnabled,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),e.requestUpdate();break;case e5.is(t):this._state.aiAllAccessBannerCollapsed=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),e.requestUpdate()}})}get state(){return this._state}dispose(){this.disposable.dispose()}};var o7=((g=o7||{})[g.VerificationRequired=-1]="VerificationRequired",g[g.Community=0]="Community",g[g.DeprecatedPreview=1]="DeprecatedPreview",g[g.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",g[g.Trial=3]="Trial",g[g.TrialExpired=4]="TrialExpired",g[g.TrialReactivationEligible=5]="TrialReactivationEligible",g[g.Paid=6]="Paid",g);let re=["community","community-with-account","pro","advanced","teams","enterprise"],rt=["pro","advanced","teams","enterprise"];function ro(e){switch(e){case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}function rr(e){return null!=e?re.indexOf(e):-1}function ri(e){return`GitLens ${ro(e)}`}function rn(e,t){var o;return o=e.plan.effective.expiresOn,null!=o?function(e,t,o,r){let i=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),n=r??Math.floor;switch(o){case"days":return n(i/864e5);case"hours":return n(i/36e5);case"minutes":return n(i/6e4);case"seconds":return n(i/1e3);default:return i}}(Date.now(),new Date(o),t,Math.round):void 0}function rs(e){var t;return t=e.plan.actual.id,rt.includes(t)}function ra(e){return null!=e.state?e.state===o7.Trial:e.plan.actual.id!==e.plan.effective.id}function rl(e){return null!=e&&(e===o7.Trial||e===o7.Paid)}function rc(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let rd=T`
	:host {
		display: flex;
	}

	.chip {
		display: flex;
		gap: 0.6rem;
		align-items: center;

		border-radius: 0.3rem;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
	}

	.chip:focus-visible {
		${oX}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 0.4rem;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		padding-bottom: 0.4rem;
	}

	.header__actions {
		flex: none;
		display: flex;
		gap: 0.2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.header__title {
		flex: 1;
		font-size: 1.5rem;
		line-height: 1.7;
		font-weight: 600;
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`,rh=T`
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
`,rp=T`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var ru=Object.defineProperty,rg=Object.defineProperties,rm=Object.getOwnPropertyDescriptor,rb=Object.getOwnPropertyDescriptors,rf=Object.getOwnPropertySymbols,rv=Object.prototype.hasOwnProperty,ry=Object.prototype.propertyIsEnumerable,rw=e=>{throw TypeError(e)},r_=(e,t,o)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,rk=(e,t)=>{for(var o in t||(t={}))rv.call(t,o)&&r_(e,o,t[o]);if(rf)for(var o of rf(t))ry.call(t,o)&&r_(e,o,t[o]);return e},r$=(e,t)=>rg(e,rb(t)),rx=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?rm(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ru(t,o,n),n},rC=(e,t,o)=>t.has(e)||rw("Cannot "+o),rS=new Map,rP=new WeakMap;function rO(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function rA(e,t){rS.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function rR(e,t,o){let r=rP.get(e);if(null==r?void 0:r[t])return rO(r[t],o.dir);let i=rS.get(t);return i?rO(i,o.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ex,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ex||null==e)return this._t=void 0,this.it=e;if(e===e$)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let rI=tN(unsafe_html_e);var rB=T`
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
`,rE=T`
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
`;let rT=new Set,rL=new Map,rz="ltr",rD="en",rN="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(rN){let e=new MutationObserver(rj);rz=document.documentElement.dir||"ltr",rD=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rM(...e){e.map(e=>{let t=e.$code.toLowerCase();rL.has(t)?rL.set(t,Object.assign(Object.assign({},rL.get(t)),e)):rL.set(t,e),l||(l=e)}),rj()}function rj(){rN&&(rz=document.documentElement.dir||"ltr",rD=document.documentElement.lang||navigator.language),[...rT.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rT.add(this.host)}hostDisconnected(){rT.delete(this.host)}dir(){return`${this.host.dir||rz}`.toLowerCase()}lang(){return`${this.host.lang||rD}`.toLowerCase()}getTranslationData(e){var t,o;let r=new Intl.Locale(e.replace(/_/g,"-")),i=null==r?void 0:r.language.toLowerCase(),n=null!=(o=null==(t=null==r?void 0:r.region)?void 0:t.toLowerCase())?o:"",a=rL.get(`${i}-${n}`),l=rL.get(i);return{locale:r,language:i,region:n,primary:a,secondary:l}}exists(e,t){var o;let{primary:r,secondary:i}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!i&&!!i[e]||!!t.includeFallback&&!!l&&!!l[e]}term(e,...t){let o,{primary:r,secondary:i}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(i&&i[e])o=i[e];else{if(!l||!l[e])return String(e);o=l[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var rF={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};rM(rF);var rq=class extends LocalizeController{};rM(rF);var rU=T`
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
`,rW=class extends lit_element_i{constructor(){let e;super(),(e=w).has(this)?rw("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,rk({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let i=" (unknown version)",n=i;if("version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(n=" v"+r.version),i&&n&&i===n)return}attributeChangedCallback(e,t,o){let r,i;if(rC(this,r=w,"read from private field"),i?!i.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),rC(this,e=w,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};w=new WeakMap,rW.version="2.20.1",rW.dependencies={},rx([eL()],rW.prototype,"dir",2),rx([eL()],rW.prototype,"lang",2);let rH=Math.min,rG=Math.max,rV=Math.round,rK=Math.floor,rY=e=>({x:e,y:e}),rZ={left:"right",right:"left",bottom:"top",top:"bottom"},rJ={start:"end",end:"start"};function rX(e,t){return"function"==typeof e?e(t):e}function rQ(e){return e.split("-")[0]}function r0(e){return e.split("-")[1]}function r1(e){return"x"===e?"y":"x"}function r2(e){return"y"===e?"height":"width"}function r5(e){return["top","bottom"].includes(rQ(e))?"y":"x"}function r8(e){return e.replace(/start|end/g,e=>rJ[e])}function r6(e){return e.replace(/left|right|bottom|top/g,e=>rZ[e])}function r3(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function r4(e){let{x:t,y:o,width:r,height:i}=e;return{width:r,height:i,top:o,left:t,right:t+r,bottom:o+i,x:t,y:o}}function r9(e,t,o){let r,{reference:i,floating:n}=e,a=r5(t),l=r1(r5(t)),c=r2(l),d=rQ(t),h="y"===a,p=i.x+i.width/2-n.width/2,u=i.y+i.height/2-n.height/2,g=i[c]/2-n[c]/2;switch(d){case"top":r={x:p,y:i.y-n.height};break;case"bottom":r={x:p,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:u};break;case"left":r={x:i.x-n.width,y:u};break;default:r={x:i.x,y:i.y}}switch(r0(t)){case"start":r[l]-=g*(o&&h?-1:1);break;case"end":r[l]+=g*(o&&h?-1:1)}return r}let r7=async(e,t,o)=>{let{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:a}=o,l=n.filter(Boolean),c=await (null==a.isRTL?void 0:a.isRTL(t)),d=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=r9(d,r,c),u=r,g={},m=0;for(let o=0;o<l.length;o++){let{name:n,fn:b}=l[o],{x:f,y:v,data:w,reset:_}=await b({x:h,y:p,initialPlacement:r,placement:u,strategy:i,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=f?f:h,p=null!=v?v:p,g={...g,[n]:{...g[n],...w}},_&&m<=50&&(m++,"object"==typeof _&&(_.placement&&(u=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:h,y:p}=r9(d,u,c)),o=-1)}return{x:h,y:p,placement:u,strategy:i,middlewareData:g}};async function ie(e,t){var o;void 0===t&&(t={});let{x:r,y:i,platform:n,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=rX(t,e),m=r3(g),b=l[u?"floating"===p?"reference":"floating":p],f=r4(await n.getClippingRect({element:null==(o=await (null==n.isElement?void 0:n.isElement(b)))||o?b:b.contextElement||await (null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===p?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,w=await (null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),_=await (null==n.isElement?void 0:n.isElement(w))&&await (null==n.getScale?void 0:n.getScale(w))||{x:1,y:1},$=r4(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:w,strategy:c}):v);return{top:(f.top-$.top+m.top)/_.y,bottom:($.bottom-f.bottom+m.bottom)/_.y,left:(f.left-$.left+m.left)/_.x,right:($.right-f.right+m.right)/_.x}}async function it(e,t){let{placement:o,platform:r,elements:i}=e,n=await (null==r.isRTL?void 0:r.isRTL(i.floating)),a=rQ(o),l=r0(o),c="y"===r5(o),d=["left","top"].includes(a)?-1:1,h=n&&c?-1:1,p=rX(t,e),{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:u*d}:{x:u*d,y:g*h}}function io(){return"undefined"!=typeof window}function ir(e){return ia(e)?(e.nodeName||"").toLowerCase():"#document"}function ii(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function is(e){var t;return null==(t=(ia(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ia(e){return!!io()&&(e instanceof Node||e instanceof ii(e).Node)}function il(e){return!!io()&&(e instanceof Element||e instanceof ii(e).Element)}function ic(e){return!!io()&&(e instanceof HTMLElement||e instanceof ii(e).HTMLElement)}function id(e){return!!io()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ii(e).ShadowRoot)}function ih(e){let{overflow:t,overflowX:o,overflowY:r,display:i}=ib(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(i)}function ip(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function iu(e){let t=ig(),o=il(e)?ib(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function ig(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function im(e){return["html","body","#document"].includes(ir(e))}function ib(e){return ii(e).getComputedStyle(e)}function iv(e){return il(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function iy(e){if("html"===ir(e))return e;let t=e.assignedSlot||e.parentNode||id(e)&&e.host||is(e);return id(t)?t.host:t}function iw(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);let i=function e(t){let o=iy(t);return im(o)?t.ownerDocument?t.ownerDocument.body:t.body:ic(o)&&ih(o)?o:e(o)}(e),n=i===(null==(r=e.ownerDocument)?void 0:r.body),a=ii(i);if(n){let e=i_(a);return t.concat(a,a.visualViewport||[],ih(i)?i:[],e&&o?iw(e):[])}return t.concat(i,iw(i,[],o))}function i_(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ik(e){let t=ib(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=ic(e),n=i?e.offsetWidth:o,a=i?e.offsetHeight:r,l=rV(o)!==n||rV(r)!==a;return l&&(o=n,r=a),{width:o,height:r,$:l}}function i$(e){return il(e)?e:e.contextElement}function ix(e){let t=i$(e);if(!ic(t))return rY(1);let o=t.getBoundingClientRect(),{width:r,height:i,$:n}=ik(t),a=(n?rV(o.width):o.width)/r,l=(n?rV(o.height):o.height)/i;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let iC=rY(0);function iS(e){let t=ii(e);return ig()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:iC}function iP(e,t,o,r){var i;void 0===t&&(t=!1),void 0===o&&(o=!1);let n=e.getBoundingClientRect(),a=i$(e),l=rY(1);t&&(r?il(r)&&(l=ix(r)):l=ix(e));let c=(void 0===(i=o)&&(i=!1),r&&(!i||r===ii(a))&&i)?iS(a):rY(0),d=(n.left+c.x)/l.x,h=(n.top+c.y)/l.y,p=n.width/l.x,u=n.height/l.y;if(a){let e=ii(a),t=r&&il(r)?ii(r):r,o=e,i=i_(o);for(;i&&r&&t!==o;){let e=ix(i),t=i.getBoundingClientRect(),r=ib(i),n=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=n,h+=a,i=i_(o=ii(i))}}return r4({width:p,height:u,x:d,y:h})}function iO(e,t){let o=iv(e).scrollLeft;return t?t.left+o:iP(is(e)).left+o}function iA(e,t,o){void 0===o&&(o=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(o?0:iO(e,r)),y:r.top+t.scrollTop}}function iR(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=ii(e),r=is(e),i=o.visualViewport,n=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){n=i.width,a=i.height;let e=ig();(!e||e&&"fixed"===t)&&(l=i.offsetLeft,c=i.offsetTop)}return{width:n,height:a,x:l,y:c}}(e,o);else if("document"===t)r=function(e){let t=is(e),o=iv(e),r=e.ownerDocument.body,i=rG(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),n=rG(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-o.scrollLeft+iO(e),l=-o.scrollTop;return"rtl"===ib(r).direction&&(a+=rG(t.clientWidth,r.clientWidth)-i),{width:i,height:n,x:a,y:l}}(is(e));else if(il(t))r=function(e,t){let o=iP(e,!0,"fixed"===t),r=o.top+e.clientTop,i=o.left+e.clientLeft,n=ic(e)?ix(e):rY(1),a=e.clientWidth*n.x,l=e.clientHeight*n.y;return{width:a,height:l,x:i*n.x,y:r*n.y}}(t,o);else{let o=iS(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return r4(r)}function iI(e){return"static"===ib(e).position}function iB(e,t){if(!ic(e)||"fixed"===ib(e).position)return null;if(t)return t(e);let o=e.offsetParent;return is(e)===o&&(o=o.ownerDocument.body),o}function iE(e,t){let o=ii(e);if(ip(e))return o;if(!ic(e)){let t=iy(e);for(;t&&!im(t);){if(il(t)&&!iI(t))return t;t=iy(t)}return o}let r=iB(e,t);for(;r&&["table","td","th"].includes(ir(r))&&iI(r);)r=iB(r,t);return r&&im(r)&&iI(r)&&!iu(r)?o:r||function(e){let t=iy(e);for(;ic(t)&&!im(t);){if(iu(t))return t;if(ip(t))break;t=iy(t)}return null}(e)||o}let iT=async function(e){let t=this.getOffsetParent||iE,o=this.getDimensions,r=await o(e.floating);return{reference:function(e,t,o){let r=ic(t),i=is(t),n="fixed"===o,a=iP(e,!0,n,t),l={scrollLeft:0,scrollTop:0},c=rY(0);if(r||!r&&!n)if(("body"!==ir(t)||ih(i))&&(l=iv(t)),r){let e=iP(t,!0,n,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=iO(i));n&&!r&&i&&(c.x=iO(i));let d=!i||r||n?rY(0):iA(i,l);return{x:a.left+l.scrollLeft-c.x-d.x,y:a.top+l.scrollTop-c.y-d.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},iL={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:i}=e,n="fixed"===i,a=is(r),l=!!t&&ip(t.floating);if(r===a||l&&n)return o;let c={scrollLeft:0,scrollTop:0},d=rY(1),h=rY(0),p=ic(r);if((p||!p&&!n)&&(("body"!==ir(r)||ih(a))&&(c=iv(r)),ic(r))){let e=iP(r);d=ix(r),h.x=e.x+r.clientLeft,h.y=e.y+r.clientTop}let u=!a||p||n?rY(0):iA(a,c,!0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+h.x+u.x,y:o.y*d.y-c.scrollTop*d.y+h.y+u.y}},getDocumentElement:is,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:i}=e,n=[..."clippingAncestors"===o?ip(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let r=iw(e,[],!1).filter(e=>il(e)&&"body"!==ir(e)),i=null,n="fixed"===ib(e).position,a=n?iy(e):e;for(;il(a)&&!im(a);){let t=ib(a),o=iu(a);o||"fixed"!==t.position||(i=null),(n?!o&&!i:!o&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||ih(a)&&!o&&function e(t,o){let r=iy(t);return!(r===o||!il(r)||im(r))&&("fixed"===ib(r).position||e(r,o))}(e,a))?r=r.filter(e=>e!==a):i=t,a=iy(a)}return t.set(e,r),r}(t,this._c):[].concat(o),r],a=n[0],l=n.reduce((e,o)=>{let r=iR(t,o,i);return e.top=rG(r.top,e.top),e.right=rH(r.right,e.right),e.bottom=rH(r.bottom,e.bottom),e.left=rG(r.left,e.left),e},iR(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:iE,getElementRects:iT,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=ik(e);return{width:t,height:o}},getScale:ix,isElement:il,isRTL:function(e){return"rtl"===ib(e).direction}};function iz(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let iD=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;let i,n,{placement:a,rects:l,platform:c,elements:d}=t,{apply:h=()=>{},...p}=rX(e,t),u=await ie(t,p),g=rQ(a),m=r0(a),b="y"===r5(a),{width:f,height:v}=l.floating;"top"===g||"bottom"===g?(i=g,n=m===(await (null==c.isRTL?void 0:c.isRTL(d.floating))?"start":"end")?"left":"right"):(n=g,i="end"===m?"top":"bottom");let w=v-u.top-u.bottom,_=f-u.left-u.right,$=rH(v-u[i],w),x=rH(f-u[n],_),C=!t.middlewareData.shift,S=$,P=x;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(P=_),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(S=w),C&&!m){let e=rG(u.left,0),t=rG(u.right,0),o=rG(u.top,0),r=rG(u.bottom,0);b?P=f-2*(0!==e||0!==t?e+t:rG(u.left,u.right)):S=v-2*(0!==o||0!==r?o+r:rG(u.top,u.bottom))}await h({...t,availableWidth:P,availableHeight:S});let O=await c.getDimensions(d.floating);return f!==O.width||v!==O.height?{reset:{rects:!0}}:{}}}},iN=tN(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return e$}});function iM(e){var t=e;for(let e=t;e;e=ij(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=ij(t);e;e=ij(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||iu(t)||"BODY"===e.tagName))return e}return null}function ij(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var iF=class extends rW{constructor(){super(...arguments),this.localize=new rq(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,i=0,n=0,a=0,l=0,c=0,d=0,h=0;o?e.top<t.top?(r=e.left,i=e.bottom,n=e.right,a=e.bottom,l=t.left,c=t.top,d=t.right,h=t.top):(r=t.left,i=t.bottom,n=t.right,a=t.bottom,l=e.left,c=e.top,d=e.right,h=e.top):e.left<t.left?(r=e.right,i=e.top,n=t.left,a=t.top,l=e.right,c=e.bottom,d=t.left,h=t.bottom):(r=t.right,i=t.top,n=e.left,a=e.top,l=t.right,c=t.bottom,d=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,r){let i;void 0===r&&(r={});let{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,h=i$(e),p=n||a?[...h?iw(h):[],...iw(t)]:[];p.forEach(e=>{n&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)});let u=h&&c?function(e,t){let o,r=null,i=is(e);function n(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return!function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),n();let d=e.getBoundingClientRect(),{left:h,top:p,width:u,height:g}=d;if(l||t(),!u||!g)return;let m=rK(p),b=rK(i.clientWidth-(h+u)),f={rootMargin:-m+"px "+-b+"px "+-rK(i.clientHeight-(p+g))+"px "+-rK(h)+"px",threshold:rG(0,rH(1,c))||1},v=!0;function w(t){let r=t[0].intersectionRatio;if(r!==c){if(!v)return a();r?a(!1,r):o=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==r||iz(d,e.getBoundingClientRect())||a(),v=!1}try{r=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(e)}(!0),n}(h,o):null,g=-1,m=null;l&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),o()}),h&&!d&&m.observe(h),m.observe(t));let b=d?iP(e):null;return d&&function t(){let r=iP(e);b&&!iz(b,r)&&o(),b=r,i=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach(e=>{n&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)}),null==u||u(),null==(e=m)||e.disconnect(),m=null,d&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o;let r;if(!this.active||!this.anchorEl)return;let i=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,r;let{x:i,y:n,placement:a,middlewareData:l}=t,c=await it(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:i+c.x,y:n+c.y,data:{...c,placement:a}}}}];this.sync?i.push(iD({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,r,i,n,a;let{placement:l,middlewareData:c,rects:d,initialPlacement:h,platform:p,elements:u}=e,{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,..._}=rX(t,e);if(null!=(o=c.arrow)&&o.alignmentOffset)return{};let $=rQ(l),x=r5(h),C=rQ(h)===h,S=await (null==p.isRTL?void 0:p.isRTL(u.floating)),P=b||(C||!w?[r6(h)]:function(e){let t=r6(e);return[r8(e),t,r8(t)]}(h)),O="none"!==v;!b&&O&&P.push(...function(e,t,o,r){let i=r0(e),n=function(e,t,o){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(o)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(rQ(e),"start"===o,r);return i&&(n=n.map(e=>e+"-"+i),t&&(n=n.concat(n.map(r8)))),n}(h,w,v,S));let A=[h,...P],B=await ie(e,_),E=[],T=(null==(r=c.flip)?void 0:r.overflows)||[];if(g&&E.push(B[$]),m){let e=function(e,t,o){void 0===o&&(o=!1);let r=r0(e),i=r1(r5(e)),n=r2(i),a="x"===i?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=r6(a)),[a,r6(a)]}(l,d,S);E.push(B[e[0]],B[e[1]])}if(T=[...T,{placement:l,overflows:E}],!E.every(e=>e<=0)){let e=((null==(i=c.flip)?void 0:i.index)||0)+1,t=A[e];if(t&&("alignment"!==m||x===r5(t)||T.every(e=>e.overflows[0]>0&&r5(e.placement)===x)))return{data:{index:e,overflows:T},reset:{placement:t}};let o=null==(n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:n.placement;if(!o)switch(f){case"bestFit":{let e=null==(a=T.filter(e=>{if(O){let t=r5(e.placement);return t===x||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(o=e);break}case"initialPlacement":o=h}if(l!==o)return{reset:{placement:o}}}return{}}}),this.shift&&i.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:i}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=rX(o,e),d={x:t,y:r},h=await ie(e,c),p=r5(rQ(i)),u=r1(p),g=d[u],m=d[p];if(n){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",o=g+h[e],r=g-h[t];g=rG(o,rH(g,r))}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",o=m+h[e],r=m-h[t];m=rG(o,rH(m,r))}let b=l.fn({...e,[u]:g,[p]:m});return{...b,data:{x:b.x-t,y:b.y-r,enabled:{[u]:n,[p]:a}}}}}),this.autoSize?i.push(iD({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push({name:"arrow",options:r={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:i,rects:n,platform:a,elements:l,middlewareData:c}=e,{element:d,padding:h=0}=rX(r,e)||{};if(null==d)return{};let p=r3(h),u={x:t,y:o},g=r1(r5(i)),m=r2(g),b=await a.getDimensions(d),f="y"===g,v=f?"clientHeight":"clientWidth",w=n.reference[m]+n.reference[g]-u[g]-n.floating[m],_=u[g]-n.reference[g],$=await (null==a.getOffsetParent?void 0:a.getOffsetParent(d)),x=$?$[v]:0;x&&await (null==a.isElement?void 0:a.isElement($))||(x=l.floating[v]||n.floating[m]);let C=x/2-b[m]/2-1,S=rH(p[f?"top":"left"],C),P=rH(p[f?"bottom":"right"],C),O=x-b[m]-P,A=x/2-b[m]/2+(w/2-_/2),B=rG(S,rH(A,O)),E=!c.arrow&&null!=r0(i)&&A!==B&&n.reference[m]/2-(A<S?S:P)-b[m]/2<0,T=E?A<S?A-S:A-O:0;return{[g]:u[g]+T,data:{[g]:B,centerOffset:A-B-T,...E&&{alignmentOffset:T}},reset:E}}});let n="absolute"===this.strategy?e=>iL.getOffsetParent(e,iM):iL.getOffsetParent;((e,t,o)=>{let r=new Map,i={platform:iL,...o},n={...i.platform,_c:r};return r7(e,t,{...i,platform:n})})(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:r$(rk({},iL),{getOffsetParent:n})}).then(({x:e,y:t,middlewareData:o,placement:r})=>{let i="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,r="",a="",l="",c="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=i?o:"",c=i?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=i?"":o,c=i?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:l,left:c,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return e_`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${iN({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${iN({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?e_`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function iq(e,t){return new Promise(o=>{e.addEventListener(t,function r(i){i.target===e&&(e.removeEventListener(t,r),o())})})}function iU(e,t,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let i=e.animate(t,r$(rk({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function iW(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function iH(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function iG(e,t){let o=rk({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),n=this[t];i!==n&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](i,n)}}),i.call(this,e)}}}iF.styles=[rU,rE],rx([eN(".popup")],iF.prototype,"popup",2),rx([eN(".popup__arrow")],iF.prototype,"arrowEl",2),rx([eL()],iF.prototype,"anchor",2),rx([eL({type:Boolean,reflect:!0})],iF.prototype,"active",2),rx([eL({reflect:!0})],iF.prototype,"placement",2),rx([eL({reflect:!0})],iF.prototype,"strategy",2),rx([eL({type:Number})],iF.prototype,"distance",2),rx([eL({type:Number})],iF.prototype,"skidding",2),rx([eL({type:Boolean})],iF.prototype,"arrow",2),rx([eL({attribute:"arrow-placement"})],iF.prototype,"arrowPlacement",2),rx([eL({attribute:"arrow-padding",type:Number})],iF.prototype,"arrowPadding",2),rx([eL({type:Boolean})],iF.prototype,"flip",2),rx([eL({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],iF.prototype,"flipFallbackPlacements",2),rx([eL({attribute:"flip-fallback-strategy"})],iF.prototype,"flipFallbackStrategy",2),rx([eL({type:Object})],iF.prototype,"flipBoundary",2),rx([eL({attribute:"flip-padding",type:Number})],iF.prototype,"flipPadding",2),rx([eL({type:Boolean})],iF.prototype,"shift",2),rx([eL({type:Object})],iF.prototype,"shiftBoundary",2),rx([eL({attribute:"shift-padding",type:Number})],iF.prototype,"shiftPadding",2),rx([eL({attribute:"auto-size"})],iF.prototype,"autoSize",2),rx([eL()],iF.prototype,"sync",2),rx([eL({type:Object})],iF.prototype,"autoSizeBoundary",2),rx([eL({attribute:"auto-size-padding",type:Number})],iF.prototype,"autoSizePadding",2),rx([eL({attribute:"hover-bridge",type:Boolean})],iF.prototype,"hoverBridge",2);var iV=class extends rW{constructor(){super(),this.localize=new rq(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=iW(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=iW(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await iH(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=rR(this,"tooltip.show",{dir:this.localize.dir()});await iU(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await iH(this.body);let{keyframes:e,options:o}=rR(this,"tooltip.hide",{dir:this.localize.dir()});await iU(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,iq(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,iq(this,"sl-after-hide")}render(){return e_`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${iN({tooltip:!0,"tooltip--open":this.open})}
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
    `}};iV.styles=[rU,rB],iV.dependencies={"sl-popup":iF},rx([eN("slot:not([name])")],iV.prototype,"defaultSlot",2),rx([eN(".tooltip__body")],iV.prototype,"body",2),rx([eN("sl-popup")],iV.prototype,"popup",2),rx([eL()],iV.prototype,"content",2),rx([eL()],iV.prototype,"placement",2),rx([eL({type:Boolean,reflect:!0})],iV.prototype,"disabled",2),rx([eL({type:Number})],iV.prototype,"distance",2),rx([eL({type:Boolean,reflect:!0})],iV.prototype,"open",2),rx([eL({type:Number})],iV.prototype,"skidding",2),rx([eL()],iV.prototype,"trigger",2),rx([eL({type:Boolean})],iV.prototype,"hoist",2),rx([iG("open",{waitUntilFirstUpdate:!0})],iV.prototype,"handleOpenChange",1),rx([iG(["content","distance","hoist","placement","skidding"])],iV.prototype,"handleOptionsChange",1),rx([iG("disabled")],iV.prototype,"handleDisabledChange",1),rA("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),rA("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),iV.define("sl-tooltip");var iK=Object.defineProperty,iY=Object.getOwnPropertyDescriptor,iZ=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?iY(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&iK(t,o,n),n};rA("tooltip.show",null),rA("tooltip.hide",null);let iJ=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var e;return e_`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ex}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?rI(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};iJ.styles=T`
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
	`,iZ([eL()],iJ.prototype,"content",2),iZ([eL({reflect:!0})],iJ.prototype,"placement",2),iZ([eL({type:Boolean})],iJ.prototype,"disabled",2),iZ([eL({type:Number})],iJ.prototype,"distance",2),iZ([eL({type:Boolean})],iJ.prototype,"hoist",2),iJ=iZ([eE("gl-tooltip")],iJ);var iX=Object.defineProperty,iQ=Object.getOwnPropertyDescriptor,i0=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?iQ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&iX(t,o,n),n};let i1=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?e_`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ex}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?e_`<gl-tooltip placement=${this.tooltipPlacement??ex}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?e_`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??ex}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:e_`<button
			class="control"
			role=${this.role??ex}
			aria-checked=${this.ariaChecked??ex}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};i1.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},i1.styles=[o1,T`
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
				${oQ}
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
		`],i0([eN(".control")],i1.prototype,"control",2),i0([eL({reflect:!0})],i1.prototype,"appearance",2),i0([eL({type:Boolean,reflect:!0})],i1.prototype,"disabled",2),i0([eL({reflect:!0})],i1.prototype,"density",2),i0([eL({type:Boolean,reflect:!0})],i1.prototype,"full",2),i0([eL()],i1.prototype,"href",2),i0([eL()],i1.prototype,"tooltip",2),i0([eL()],i1.prototype,"tooltipPlacement",2),i0([eL({type:Boolean,reflect:!0})],i1.prototype,"truncate",2),i1=i0([eE("gl-button")],i1);var i2=Object.defineProperty,i5=Object.getOwnPropertyDescriptor,i8=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?i5(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&i2(t,o,n),n};let i6=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return e_`<div class="group"><slot></slot></div>`}};i6.styles=[o1,T`
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
		`],i8([eL({type:Boolean})],i6.prototype,"editor",2),i8([eL({reflect:!0})],i6.prototype,"layout",2),i8([eL({reflect:!0})],i6.prototype,"grouping",2),i6=i8([eE("button-container")],i6);let i3=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),i4=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142"});var i9=Object.defineProperty,i7=Object.getOwnPropertyDescriptor,ne=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?i7(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&i9(t,o,n),n};function nt(e,t=""){return E(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let no=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};no.styles=T`
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

		${nt(i3)}
		${nt(i4,"gl-")}

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
	`,ne([eL({reflect:!0})],no.prototype,"icon",2),ne([eL({reflect:!0})],no.prototype,"modifier",2),ne([eL({type:Number})],no.prototype,"size",2),ne([eL({reflect:!0})],no.prototype,"flip",2),ne([eL({reflect:!0})],no.prototype,"rotate",2),no=ne([eE("code-icon")],no),iF.define("sl-popup");var nr=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,nn=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ni(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nr(t,o,n),n};let ns=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=oE(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=oE(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of ns.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),ns.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return e_`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return ns.closeOthers(this),this.open=!0,ns.openPopovers.add(this),oT(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,ns.openPopovers.delete(this),oT(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};ns.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ns.openPopovers=new Set,ns.styles=[o5,T`
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
		`],nn([eN("#popover")],ns.prototype,"body",2),nn([eN("sl-popup")],ns.prototype,"popup",2),nn([eL({reflect:!0})],ns.prototype,"placement",2),nn([eL({type:Object})],ns.prototype,"anchor",2),nn([eL({reflect:!0,type:Boolean})],ns.prototype,"disabled",2),nn([eL({type:Number})],ns.prototype,"distance",2),nn([eL({reflect:!0,type:Boolean})],ns.prototype,"open",2),nn([eL({reflect:!0,type:Boolean})],ns.prototype,"arrow",2),nn([eL({type:Number})],ns.prototype,"skidding",2),nn([eL()],ns.prototype,"trigger",2),nn([eL({type:Boolean})],ns.prototype,"hoist",2),nn([eL({reflect:!0})],ns.prototype,"appearance",2),nn([t2("open",{afterFirstUpdate:!0})],ns.prototype,"handleOpenChange",1),nn([t2(["distance","hoist","placement","skidding"])],ns.prototype,"handleOptionsChange",1),nn([t2("disabled")],ns.prototype,"handleDisabledChange",1),ns=nn([eE("gl-popover")],ns);var na=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,nc=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nl(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&na(t,o,n),n};let nd=class extends lit_element_i{constructor(){super(...arguments),this._showUpgrade=!1}get showUpgrade(){return this._showUpgrade}set showUpgrade(e){this._showUpgrade=e}get accountAvatar(){return this.hasAccount&&this._state.avatar}get accountName(){return this.subscription?.account?.name??""}get accountEmail(){return this.subscription?.account?.email??""}get hasAccount(){return this.subscription?.account!=null}get isReactivatedTrial(){return this.subscriptionState===o7.Trial&&(this.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??"pro"}get effectivePlanId(){return this._state.subscription?.plan.effective.id??"pro"}get planName(){return function(e,t,o){switch(e){case o7.Community:case o7.Trial:return`${ri("pro")} Trial`;case o7.TrialExpired:case o7.TrialReactivationEligible:return ri("community-with-account");case o7.VerificationRequired:return`${ri(t??"pro")} (Unverified)`;default:return ri(t??"pro")}}(this.subscriptionState,this.planId,this.effectivePlanId)}get planTier(){return ra(this.subscription)?"Pro Trial":ro(this.planId)}get subscription(){return this._state.subscription}get subscriptionState(){return this.subscription?.state}get trialDaysRemaining(){return null==this.subscription?0:rn(this.subscription,"days")??0}focus(){this._chip.focus()}render(){return e_`<gl-popover placement="bottom" trigger="hover focus click" hoist>
				<span id="chip" slot="anchor" class="chip" tabindex="0">
					${this.accountAvatar?e_`<img class="chip__media" src=${this.accountAvatar} />`:e_`<code-icon class="chip__media" icon="gl-gitlens" size="16"></code-icon>`}
					<span>${this.planTier}</span>
				</span>
				<div slot="content" class="content" tabindex="-1">
					<div class="header">
						<span class="header__title">${this.planName}</span>
						<span class="header__actions">
							${this.hasAccount?e_`<gl-button
											appearance="toolbar"
											href="${rc("gitlens.views.home.account.resync",{source:"account"})}"
											tooltip="Synchronize Status"
											aria-label="Synchronize Status"
											><code-icon icon="sync"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${rc("gitlens.plus.manage",{source:"account"})}"
											tooltip="Manage Account"
											aria-label="Manage Account"
											><code-icon icon="gear"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${rc("gitlens.plus.logout",{source:"account"})}"
											tooltip="Sign Out"
											aria-label="Sign Out"
											><code-icon icon="sign-out"></code-icon
										></gl-button>`:ex}
						</span>
					</div>
					${this.renderAccountInfo()} ${this.renderAccountState()}
				</div>
			</gl-popover>
			${this.renderUpgradeContent()}`}show(){this._popover.show(),this.focus()}renderAccountInfo(){let e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?e_`<div class="account-info">
			<span class="row">
				<span class="row__media"
					>${this._state.avatar?e_`<img src=${this._state.avatar} />`:e_`<code-icon icon="gl-gitlens" size="20"></code-icon>`}</span
				>
				<span class="details"
					><p class="details__title">${this.accountName}</p>
					<p class="details__subtitle">${this.accountEmail}</p></span
				>
			</span>
			<span class="row">
				<span class="row__media"><code-icon icon="organization" size="20"></code-icon></span>
				<span class="details"><p class="details__title">${e}</p></span>
				${eM(this._state.organizationsCount>1,()=>e_`<div class="details__button">
							<gl-button
								appearance="toolbar"
								href="${rc("gitlens.gk.switchOrganization",{source:"account",detail:{organization:this._state.subscription?.activeOrganization?.id}})}"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${op("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`)}
			</span>
			${eM(rl(this.subscription.state),()=>{var e,t;return e_`<span class="row">
						<span class="row__media"><code-icon icon="unlock" size="20"></code-icon></span>
						<span class="details"
							><p class="details__title">
								${ra(this.subscription)?e_`${ro(this.effectivePlanId)} plan
											<span class="details__subtitle">(trial)</span>`:e_`${ro(this.planId)} plan`}
							</p></span
						>
						${rs(this.subscription)&&0>(e=this.planId,t="advanced",rr(e)-rr(t))?e_`<div class="details__button">
									<gl-button
										appearance="secondary"
										href="${rc("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"plan-section:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
										aria-label="Upgrade to Advanced"
										><span class="upgrade-button">Upgrade</span>${this.renderPromo("advanced","icon","suffix")}
										<span slot="tooltip"
											>Upgrade to the Advanced plan for access to self-hosted integrations,
											advanced AI features @ 500K tokens/week, and more
											${this.renderPromo("advanced","info")}
										</span>
									</gl-button>
								</div>`:ex}
					</span>`})}
		</div>`:ex}renderAccountState(){switch(this.subscriptionState){case o7.Paid:return e_`<div class="account-status">
					${this.renderIncludesDevEx()}${this.renderReferFriend()}
				</div> `;case o7.VerificationRequired:return e_`<div class="account-status">
					<p>You must verify your email before you can access Pro features.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rc("gitlens.plus.resendVerification",{source:"account"})}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							href="${rc("gitlens.plus.validate",{source:"account"})}"
							><code-icon size="20" icon="refresh"></code-icon>
						</gl-button>
					</button-container>
				</div>`;case o7.Trial:{let e=this.trialDaysRemaining;return e_`<div class="account-status">
					${this.isReactivatedTrial?e_`<p>
								<code-icon icon="megaphone"></code-icon>
								See
								<a href="${t9.releaseNotes}">what's new</a>
								in GitLens.
							</p>`:ex}
					<p>
						You have
						<strong>${e<1?"<1 day":op("day",e,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rc("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`}case o7.TrialExpired:return e_`<div class="account-status">
					<p>Thank you for trying <a href="${t9.communityVsPro}">GitLens Pro</a>.</p>
					<p>Continue leveraging Pro features and workflows on privately-hosted repos by upgrading today.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rc("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`;case o7.TrialReactivationEligible:return e_`<div class="account-status">
					<p>
						Reactivate your GitLens Pro trial and experience all the new Pro features — free for another
						${op("day",14)}.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rc("gitlens.plus.reactivateProTrial",{source:"account"})}"
							tooltip="Reactivate your Pro trial for another ${op("day",14)}"
							>Reactivate GitLens Pro Trial</gl-button
						>
					</button-container>
					${this.renderReferFriend()}
				</div>`;default:return e_`<div class="account-status">
					<p>
						Unlock advanced features and workflows on private repos, accelerate reviews, and streamline
						collaboration with
						<a href="${t9.communityVsPro}">GitLens Pro</a>.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rc("gitlens.plus.signUp",{source:"account"})}"
							>Try GitLens Pro</gl-button
						>
						<span class="button-suffix"
							>or
							<a
								href="${rc("gitlens.plus.login",{source:"account"})}"
								>sign in</a
							></span
						>
					</button-container>
					<p>Get ${14} days of GitLens Pro for free — no credit card required.</p>
				</div>`}}renderIncludesDevEx(){return e_`<p>Includes access to <a href="${t9.platform}">GitKraken's DevEx platform</a></p>`}renderReferFriend(){return rs(this.subscription)?e_`<p>
			<a
				href="${rc("gitlens.plus.referFriend",{source:"account"})}"
				>Refer a friend</a
			>
			&mdash; give 50% off and get up to $20
		</p>`:ex}renderUpgradeContent(){return rs(this.subscription)?(this.showUpgrade=!1,ex):(this.showUpgrade=!0,e_`<gl-popover placement="bottom" trigger="hover focus click" hoist>
			<span slot="anchor" class="chip chip--outlined" tabindex="0">
				<span>Upgrade</span>
			</span>
			<div slot="content" class="content" tabindex="-1">
				<div class="header">
					<span class="header__title">Advantages of GitLens Pro</span>
				</div>
				<div class="upgrade">
					<button-container layout="editor">
						<gl-button
							full
							href="${rc("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")}

					<ul>
						<li>Unlimited cloud integrations</li>
						<li>Smart AI features &mdash; 250K tokens/week</li>
						<li>
							Powerful tools &mdash; Commit Graph, Visual History, &amp; Git Worktrees on private repos
						</li>
						<li>Streamlined workflows &mdash; start work from issues, pull request reviews</li>
					</ul>

					<br />
					<button-container>
						<gl-button
							full
							href="${rc("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
							>Upgrade to Advanced</gl-button
						>
					</button-container>
					${this.renderPromo("advanced")}

					<ul>
						<li>Self-hosted integrations</li>
						<li>Advanced AI features &mdash; 500K tokens/week</li>
					</ul>
				</div>
			</div>
		</gl-popover>`)}renderPromo(e,t="info",o){return e_`<gl-promo
			slot=${o??ex}
			.promoPromise=${this.promos.getApplicablePromo(e,"account")}
			.type=${t}
			.source="${{source:"account"}}"
		></gl-promo>`}};nd.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nd.styles=[o1,o2,o0,rd,rp,T`
			:host {
				display: inline-flex;
				align-items: center;
				gap: 0.8rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 10%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 25%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 20%);
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #000 7%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 18%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 15%);
			}

			.chip {
				padding-right: 0.6rem;

				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				line-height: 2rem;
				background-color: var(--gl-account-chip-color);
			}

			.chip--outlined {
				background-color: transparent;
				border: 1px solid var(--gl-account-chip-color);
			}

			.chip__media {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.2rem;
			}

			img.chip__media {
				width: 1.6rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-chip-media-color);
			}

			.chip-group {
				display: inline-flex;
				flex-direction: row;
				gap: 0.8rem;
				cursor: pointer;
			}

			.account-info {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}

			.row {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.6rem;
				align-items: center;
			}

			.row:last-of-type {
				margin-bottom: 0.6rem;
			}

			.row__media {
				flex: 0 0 auto;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.row__media code-icon {
				color: var(--color-foreground--65);
			}

			.row__media img {
				width: 2rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-account-media-color);
			}

			.details {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.details__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.details__subtitle {
				font-size: 1.1rem;
				font-weight: 400;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.details__button {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.org__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
				margin-right: 0.6rem;
			}

			.account-status > :first-child {
				margin-block-start: 0;
			}
			.account-status > :last-child {
				margin-block-end: 0;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			button-container .button-suffix {
				display: inline-flex;
				align-items: center;
				white-space: nowrap;
				gap: 0.2em;
				margin-left: 0.4rem;
			}

			.upgrade > * {
				margin-block: 0.8rem 0;
			}

			.upgrade ul {
				padding-inline-start: 2rem;
			}

			.upgrade li {
				text-wrap: pretty;
			}

			.upgrade gl-promo::part(text) {
				margin-block-start: 0;
				/* border-radius: 0.3rem;
				padding: 0.2rem 0.4rem;
				background-color: var(--gl-account-chip-color); */
			}

			.upgrade gl-promo:not([has-promo]) {
				display: none;
			}

			.upgrade-button {
				text-transform: uppercase;
				font-size: 1rem;
			}
		`],nc([eL({type:Boolean,reflect:!0,attribute:"show-upgrade"})],nd.prototype,"showUpgrade",1),nc([eN("#chip")],nd.prototype,"_chip",2),nc([eN("gl-popover")],nd.prototype,"_popover",2),nc([S({context:"state",subscribe:!0}),ez()],nd.prototype,"_state",2),nc([S({context:"promos"})],nd.prototype,"promos",2),nd=nc([eE("gl-account-chip")],nd);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let nh=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!nh(e))??e$}update(e,t){let o=this._$Cbt,r=o.length;this._$Cbt=t;let i=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!nh(a))return this._$Cwt=e,a;e<r&&a===o[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(a).then(async e=>{for(;n.get();)await n.get();let t=i.deref();if(void 0!==t){let o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return e$}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let np=tN(until_c);var nu=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,nm=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ng(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nu(t,o,n),n};let nb=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return e_`${np(this.promoPromise?.then(e=>this.renderPromo(e)),ex)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return e_`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,e_`<p class="promo" part="text">${rI(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,e_`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ex}"
						>${rI(t.link.html)}</a
					>`}return this.hasPromo=!1,ex}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),rc(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};nb.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nb.styles=[T`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${oX}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],nm([eN('a,button,[tabindex="0"]')],nb.prototype,"_focusable",2),nm([eL({type:Object})],nb.prototype,"promoPromise",2),nm([eL({type:Object})],nb.prototype,"source",2),nm([eL({reflect:!0,type:String})],nb.prototype,"type",2),nm([eL({type:Boolean,reflect:!0,attribute:"has-promo"})],nb.prototype,"hasPromo",1),nb=nm([eE("gl-promo")],nb);var nf=Object.defineProperty,nv=Object.getOwnPropertyDescriptor,ny=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nv(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nf(t,o,n),n};let nw=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:rn(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return e_`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===o7.VerificationRequired)return e_`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else if(rs(this.subscription)||this.cloud&&null!=this.subscription.account)return e_`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;else if(ra(this.subscription))return e_`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=e_`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===o7.Paid?e_`<div class="popup-header">${e}</div>`:this.cloud?this.preview?e_`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:e_`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?e_`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:e_`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ex;switch(this.state){case o7.Paid:e=e_`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${rc("gitlens.showAccountView")}"
							>${ri(this.subscription?.plan.actual.id??"pro")}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case o7.VerificationRequired:e=e_`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${rc("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${rc("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case o7.Trial:{let t=this.daysRemaining;e=e_`<p>
						You have
						<strong>${t<1?"<1 day":op("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case o7.TrialExpired:e=e_`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(e_`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case o7.TrialReactivationEligible:e=e_`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${op("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${rc("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${op("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=e_`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return e_`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return e_`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${rc("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${rc("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return e_`<div class="actions">
			${e??ex}
			<gl-button
				density="tight"
				href="${rc("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return e_`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};nw.styles=[o1,o2,T`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus-visible {
				${E(oX)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],ny([eL({type:Boolean})],nw.prototype,"cloud",2),ny([eL({reflect:!0})],nw.prototype,"placement",2),ny([eL({type:Boolean})],nw.prototype,"preview",2),ny([S({context:"promos"})],nw.prototype,"promos",2),ny([eL({type:Object})],nw.prototype,"source",2),ny([eL({attribute:!1})],nw.prototype,"subscription",2),nw=ny([eE("gl-feature-badge")],nw);var n_=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,n$=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nk(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&n_(t,o,n),n};let nx=class extends lit_element_i{get hasAccount(){return this._state.subscription?.account!=null}get isPaidAccount(){return this._state.subscription?.state===o7.Paid}get isProAccount(){return rl(this._state.subscription?.state)}get hasConnectedIntegrations(){return this.hasAccount&&this.integrations.some(e=>e.connected)}get ai(){return this._state.ai}get aiSettingEnabled(){return this._state.aiEnabled}get aiOrgEnabled(){return this._state.orgSettings?.ai??!0}get aiEnabled(){return this.aiSettingEnabled&&this.aiOrgEnabled}get integrations(){return this._state.integrations}focus(){this._chip.focus()}render(){let e=this.hasConnectedIntegrations,t=function(e){let t=new Map;for(let o of e){let e=t.get(o.icon);e&&(!o.connected||e.connected)||t.set(o.icon,o)}return e=>t.get(e.icon)===e}(this.integrations);return e_`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip" tabindex="0"
				>${!e?e_`<span class="chip__label">Connect</span>`:""}${this.integrations.filter(t).map(e=>this.renderIntegrationStatus(e))}${this.renderAIStatus()}</span
			>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Integrations</span>
					<span class="header__actions"></span>
						<gl-button
							appearance="toolbar"
							href="${rc("gitlens.views.home.account.resync",{source:"home",detail:"integrations"})}"
							tooltip="Synchronize Status"
							aria-label="Synchronize Status"
							><code-icon icon="sync"></code-icon
						></gl-button>
						<gl-button
							appearance="toolbar"
							href="${rc("gitlens.plus.cloudIntegrations.manage",{source:{source:"home"}})}"
							tooltip="Manage Integrations"
							aria-label="Manage Integrations"
							><code-icon icon="gear"></code-icon></gl-button
					></span>
				</div>
				<div class="integrations">${!e?e_`<p>
									Connect hosting services like <strong>GitHub</strong> and issue trackers like
									<strong>Jira</strong> to track progress and take action on PRs and issues related to
									your branches.
								</p>
								<button-container>
									<gl-button
										full
										href="${rc("gitlens.plus.cloudIntegrations.connect",{integrationIds:this.integrations.map(e=>e.id),source:{source:"home",detail:"integrations"}})}"
										>Connect Integrations</gl-button
									>
								</button-container>`:this.integrations.map(e=>this.renderIntegrationRow(e))}${this.renderAIRow()}</div>
			</div>
		</gl-popover>`}renderIntegrationStatus(e){return e.requiresPro&&!this.isProAccount?e_`<span
				class="integration status--${e.connected?"connected":"disconnected"} is-locked"
				slot="anchor"
				><code-icon icon="${e.icon}"></code-icon
			></span>`:e_`<span
			class="integration status--${e.connected?"connected":"disconnected"}"
			slot="anchor"
			><code-icon icon="${e.icon}"></code-icon
		></span>`}renderIntegrationRow(e){let t=e.requiresPro&&!this.isProAccount,o=e.requiresPro&&!this.isPaidAccount;return e_`<div
			class="integration-row status--${e.connected?"connected":"disconnected"}${t?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${e.icon}"></code-icon></span>
			<span class="integration__content">
				<span class="integration__title">
					<span>${e.name}</span>
					${o?e_` <gl-feature-badge
								placement="right"
								.source=${{source:"home",detail:"integrations"}}
								cloud
							></gl-feature-badge>`:ex}
				</span>
				<span class="integration__details">${function(e){let t=e.supports.map(e=>nC.get(e));if(0===t.length)return"";if(1===t.length)return`Supports ${t[0]}`;let o=t.pop();return`Supports ${t.join(", ")}, and ${o}`}(e)}</span>
			</span>
			<span class="integration__actions">
				${t?e_`<gl-button
							appearance="toolbar"
							href="${rc("gitlens.plus.upgrade",{plan:"pro",source:"home",detail:"integrations"})}"
							tooltip="Unlock ${e.name} features with GitLens Pro"
							aria-label="Unlock ${e.name} features with GitLens Pro"
							><code-icon class="status-indicator" icon="lock"></code-icon
						></gl-button>`:e.connected?e_`<gl-tooltip
								class="status-indicator status--connected"
								placement="bottom"
								content="Connected"
								><code-icon class="status-indicator" icon="check"></code-icon
							></gl-tooltip>`:e_`<gl-button
								appearance="toolbar"
								href="${rc("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.id],source:{source:"home",detail:"integrations"}})}"
								tooltip="Connect ${e.name}"
								aria-label="Connect ${e.name}"
								><code-icon icon="plug"></code-icon
							></gl-button>`}
			</span>
		</div>`}renderAIStatus(){return e_`<span
			class="integration status--${this.aiEnabled&&this.ai?.model!=null?"connected":"disconnected"}"
			slot="anchor"
		>
			<code-icon icon="${this.aiEnabled&&this.ai?.model!=null?"sparkle-filled":"sparkle"}"></code-icon>
		</span>`}renderAIRow(){let{model:e}=this.ai,t=this.aiEnabled&&null!=e,o=!this.aiEnabled;return e_`<div
			class="integration-row integration-row--ai status--${t?"connected":"disconnected"}${o?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${t?"sparkle-filled":"sparkle"}"></code-icon></span>
			${this.aiEnabled?e_`<span class="integration__content">
							${e?.provider.name?e_`<span class="integration__title">
										<span>${e.provider.name}</span>
										${ex}
									</span>`:e_`<span class="integration_details">Select AI model to enable AI features</span>`}
							${e?.name?e_`<span class="integration__details">${e.name}</span>`:ex}
						</span>
						<span class="integration__actions">
							<gl-button
								appearance="toolbar"
								href="${rc("gitlens.ai.switchProvider",{source:"home",detail:"integrations"})}"
								tooltip="Switch AI Provider/Model"
								aria-label="Switch AI Provider/Model"
								><code-icon icon="arrow-swap"></code-icon
							></gl-button>
						</span>`:e_`<span class="integration__content">
							<span class="integration_details"
								>GitLens AI features have been
								disabled${!this.aiSettingEnabled?" via settings":" by your GitKraken admin"}</span
							>
						</span>
						${!this.aiSettingEnabled?e_` <span class="integration__actions">
									<gl-button
										appearance="toolbar"
										href="${rc("gitlens.home.enableAi",void 0)}"
										tooltip="Re-enable AI Features"
										aria-label="Re-enable AI Features"
										><code-icon icon="unlock"></code-icon
									></gl-button>
								</span>`:ex}`}
		</div>`}};nx.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nx.styles=[o1,o2,rd,T`
			.chip {
				gap: 0.6rem;
				padding: 0.2rem 0.4rem 0.4rem 0.4rem;
				align-items: baseline;
			}

			.chip__label {
				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				color: var(--color-foreground--75);
				margin-right: 0.4rem;
			}

			.integration {
				white-space: nowrap;
			}

			.content {
				gap: 0.6rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--status-color--connected: #00dd00;
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--status-color--connected: #00aa00;
			}

			.status--disconnected.integration {
				color: var(--color-foreground--25);
			}

			.status--connected:not(.is-locked) .status-indicator {
				color: var(--status-color--connected);
			}

			gl-tooltip.status-indicator {
				margin-right: 0.4rem;
			}

			.integrations {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				width: 100%;
			}

			.integration-row {
				display: flex;
				gap: 1rem;
				align-items: center;
			}

			.integration-row--ai {
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.status--disconnected .integration__icon {
				color: var(--color-foreground--25);
			}

			.integration__content {
				flex: 1 1 auto;
				display: block;
			}

			.integration__title {
				display: flex;
				justify-content: space-between;
			}

			.integration__title gl-feature-badge {
				vertical-align: super;
			}

			.integration__details {
				display: block;
				color: var(--color-foreground--75);
				font-size: 1rem;
			}

			.status--disconnected .integration__title,
			.status--disconnected .integration__details {
				color: var(--color-foreground--50);
			}

			.integration__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: flex-start;
				justify-content: flex-end;
			}

			button-container {
				margin-bottom: 0.4rem;
				width: 100%;
			}

			p {
				margin: 0;
			}

			gl-popover::part(body) {
				--max-width: 90vw;
			}
		`],n$([eN("#chip")],nx.prototype,"_chip",2),n$([S({context:"state",subscribe:!0}),ez()],nx.prototype,"_state",2),nx=n$([eE("gl-integrations-chip")],nx);let nC=new Map([["prs","pull requests"],["issues","issues"]]);var nS=Object.defineProperty,nP=Object.getOwnPropertyDescriptor,nO=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nP(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nS(t,o,n),n};let nA=class extends lit_element_i{constructor(){super(...arguments),this.onDismissWalkthrough=()=>{this._state.walkthroughProgress=void 0,this._ipc.sendCommand(e2),this.requestUpdate()}}render(){if(null!=this._state.walkthroughProgress)return e_`<gl-button
				@click=${this.onDismissWalkthrough}
				class="walkthrough-progress__button"
				appearance="toolbar"
				tooltip="Dismiss"
				aria-label="Dismiss"
				><code-icon icon="x"></code-icon
			></gl-button>
			<gl-tooltip placement="bottom" content="Open Walkthrough">
				<a
					class="walkthrough-progress"
					href=${rc("gitlens.openWalkthrough",{source:{source:"home",detail:"onboarding"}})}
				>
					<header class="walkthrough-progress__title">
						<span
							>GitLens Walkthrough
							(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})</span
						>
					</header>
					<progress
						class="walkthrough-progress__bar"
						value=${this._state.walkthroughProgress.progress}
					></progress>
				</a>
			</gl-tooltip>`}};nA.styles=[o8,o9],nO([S({context:"state",subscribe:!0}),ez()],nA.prototype,"_state",2),nO([S({context:"ipc",subscribe:!0}),ez()],nA.prototype,"_ipc",2),nA=nO([eE("gl-onboarding")],nA);var nR=Object.defineProperty,nI=Object.getOwnPropertyDescriptor,nB=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nI(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nR(t,o,n),n};let nE=class extends lit_element_i{render(){return e_`<gl-promo-banner></gl-promo-banner>
			<div class="container" tabindex="-1">
				<span class="group"><gl-account-chip></gl-account-chip></span>
				<gl-integrations-chip></gl-integrations-chip>
			</div>
			<gl-onboarding></gl-onboarding>`}show(){this.accountChip.show()}refreshPromo(){this.promoBanner?.requestUpdate()}};function nT(e,t,o,r){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o,...r}))}`}nE.styles=[o1,o2,T`
			:host {
				display: block;
			}

			.container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.6rem;
			}

			.container:focus,
			.container:focus-within {
				outline: none;
			}

			/* .actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			} */

			gl-promo-banner {
				margin: 0 0.2rem 0.6rem;
			}

			gl-promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}

			.group {
				display: flex;
				align-items: center;
				gap: 0.4rem;
			}
		`],nB([eN("gl-account-chip")],nE.prototype,"accountChip",2),nB([eN("gl-promo-banner")],nE.prototype,"promoBanner",2),nE=nB([eE("gl-home-header")],nE);let nL=new Map([["current-branch","$(git-branch)"],["pinned","$(pinned)"],["mergeable","$(rocket)"],["blocked","$(error)"],["follow-up","$(report)"],["needs-review","$(comment-unresolved)"],["waiting-for-review","$(gitlens-clock)"],["draft","$(git-pull-request-draft)"],["other","$(ellipsis)"],["snoozed","$(bell-slash)"]]),nz=new Map([["current-branch","Current Branch"],["pinned","Pinned"],["mergeable","Ready to Merge"],["blocked","Blocked"],["follow-up","Requires Follow-up"],["needs-review","Needs Your Review"],["waiting-for-review","Waiting for Review"],["draft","Draft"],["other","Other"],["snoozed","Snoozed"]]),nD=new Map([["mergeable","mergeable"],["conflicts","blocked"],["failed-checks","blocked"],["unassigned-reviewers","blocked"],["needs-my-review","needs-review"],["code-suggestions","follow-up"],["changes-requested","follow-up"],["reviewer-commented","follow-up"],["waiting-for-review","waiting-for-review"],["draft","draft"],["other","other"]]),nN=new Map([["mergeable",["Ready to Merge","Ready to merge"]],["unassigned-reviewers",["Unassigned Reviewers","You need to assign reviewers"]],["failed-checks",["Failed Checks","You need to resolve the failing checks"]],["conflicts",["Resolve Conflicts","You need to resolve merge conflicts"]],["needs-my-review",["Needs Your Review","${author} requested your review"]],["code-suggestions",["Code Suggestions","Code suggestions have been made on this pull request"]],["changes-requested",["Changes Requested","Reviewers requested changes before this can be merged"]],["reviewer-commented",["Reviewers Commented","Reviewers have commented on this pull request"]],["waiting-for-review",["Waiting for Review","Waiting for reviewers to approve this pull request"]],["draft",["Draft","Continue working on your draft"]],["other",["Other","Opened by ${author} ${createdDateRelative}"]]]);var nM=Object.defineProperty,nj=Object.getOwnPropertyDescriptor,nF=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nj(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nM(t,o,n),n};let nq=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return e_`<span class="${this.worktree?"worktree":"branch"}"
			><code-icon
				class="icon"
				icon="${this.worktree?"gl-worktrees-view":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span></span
		>`}};function nU(e,t){return e_`<gl-branch-name .name=${e} .size=${12} ?worktree=${t??!1}></gl-branch-name>`}nq.styles=T`
		:host {
			display: inline-block;
			max-width: 100%;
			align-content: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			vertical-align: middle;
			margin-top: -3px;
		}

		.icon {
			margin: 0 0.3rem 0.1rem 0.2rem;
		}

		.worktree .icon {
			margin-right: 0.4rem;
		}

		.label {
			font-weight: bold;
		}
	`,nF([eL({type:String})],nq.prototype,"name",2),nF([eL({type:Number})],nq.prototype,"size",2),nF([eL({type:Boolean})],nq.prototype,"worktree",2),nq=nF([eE("gl-branch-name")],nq);var nW=Object.defineProperty,nH=Object.getOwnPropertyDescriptor,nG=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nH(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nW(t,o,n),n};let nV=class extends lit_element_i{render(){return this.name?e_`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?e_`<a href=${this.href} class="avatar">${this.renderContent()}</a>`:e_`<span class="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?e_`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:e_`<slot class="thumb thumb--text"></slot>`}};nV.styles=[T`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--vscode-descriptionForeground);
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],nG([eL()],nV.prototype,"src",2),nG([eL()],nV.prototype,"name",2),nG([eL()],nV.prototype,"href",2),nV=nG([eE("gl-avatar")],nV);var nK=Object.defineProperty,nY=Object.getOwnPropertyDescriptor,nZ=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nY(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nK(t,o,n),n};let nJ=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return e_`<gl-avatar-group>${this.renderList()}</gl-avatar-group>`}renderList(){let e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return e_`
			${e.map(e=>e_`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}></gl-avatar>`)}
			${eM(t.length>0,()=>e_`<gl-popover>
						<gl-avatar slot="anchor" class="overflow">+${t.length}</gl-avatar>
						<div slot="content" class="overflow-list">
							${t.map(e=>e_`<gl-avatar
										.src=${e.src}
										.name=${e.name}
										.href=${e.href}
									></gl-avatar>`)}
						</div>
					</gl-popover>`)}
		`}};nZ([eL({type:Number})],nJ.prototype,"max",2),nZ([eL({type:Array})],nJ.prototype,"avatars",2),nJ=nZ([eE("gl-avatar-list")],nJ);let nX=class extends lit_element_i{render(){return e_`<slot class="avatar-group" part="base"></slot>`}};nX.styles=[T`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within::slotted(*),
			.avatar-group:hover::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within::slotted(*:focus),
			.avatar-group:hover::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],nX=nZ([eE("gl-avatar-group")],nX);var nQ=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,n1=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?n0(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nQ(t,o,n),n};let n2=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),n5=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return n2.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let o=this[e];return null==o?ex:e_`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?e_`<code-icon class="icon" icon="${t}"></code-icon>`:e_`<span>${e}</span>`}};n5.styles=T`
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
	`,n1([eL({type:Number})],n5.prototype,"added",2),n1([eL({type:Number})],n5.prototype,"modified",2),n1([eL({type:Number})],n5.prototype,"removed",2),n1([eL()],n5.prototype,"symbol",2),n5=n1([eE("commit-stats")],n5);var n8=Object.defineProperty,n6=Object.getOwnPropertyDescriptor,n3=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?n6(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&n8(t,o,n),n};let n4=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(e,t,r,i=!0){t=t??void 0;let n=`${(void 0)??""}:${t}`,a=oo.get(n);if(null==a){let e,r=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=oe.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(t7))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(t);e=o,a=new Intl.DateTimeFormat(e,r),i&&oo.set(n,a)}if(null==t||oe.test(t))return a.format(e);let l=a.formatToParts(e);return t.replace(t7,(t,n,a,c,d,h,p,u,g,m,b,f,v,w,_)=>{if(null!=n)return n.substring(1,n.length-1);for(let[t,n]of Object.entries(_)){if(null==n)continue;let a=l.find(e=>e.type===t);if("Do"===n&&a?.type==="day"){var $=Number(a.value);let e=$%100;return`${$}${on[(e-20)%10]??on[e]??on[0]}`}if("a"===n&&a?.type==="dayPeriod"){let t=(function(e){let t=`${r??""}:time:${e}`,n=oo.get(t);if(null==n){let a;a=null==r?o:"system"===r?void 0:[r],n=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:e}),i&&oo.set(t,n)}return n})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??a)?.value??""}`}return a?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?oi(this.date):this.absoluteDate}render(){return e_`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};n3([eL()],n4.prototype,"format",2),n3([eL({attribute:"date-style"})],n4.prototype,"dateStyle",2),n3([eL({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],n4.prototype,"date",2),n3([eL()],n4.prototype,"tooltip",2),n4=n3([eE("formatted-date")],n4);let n9=T`
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
`;var n7=Object.defineProperty,se=Object.getOwnPropertyDescriptor,st=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?se(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&n7(t,o,n),n};let so=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?e_`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:e_`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:ex:e_`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${eM(this.behind>0,()=>e_`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${eM(this.ahead>0,()=>e_`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${eM(this.working>0,()=>e_`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};so.styles=[n9,T`
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
		`],st([eL({type:Number})],so.prototype,"ahead",2),st([eL({type:Number})],so.prototype,"behind",2),st([eL({type:Number})],so.prototype,"working",2),st([eL({type:Boolean,attribute:"always-show"})],so.prototype,"alwaysShow",2),st([eL({type:Boolean})],so.prototype,"outlined",2),st([eL({type:Boolean})],so.prototype,"colorized",2),st([eL({type:Boolean})],so.prototype,"missingUpstream",2),so=st([eE("gl-tracking-pill")],so);let sr=T`
	.issue-icon--opened {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-icon--closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
	}
`;var si=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,ss=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&si(t,o,n),n};let sa=class extends lit_element_i{get icon(){let e="issues";if(this.state)switch(this.state){case"opened":e="issues";break;case"closed":e="pass"}return e}get classes(){return this.state?`issue-icon issue-icon--${this.state}`:"issue-icon"}get label(){return this.state?`Issue ${this.issueId?`#${this.issueId}`:""} is ${this.state}`:"Issue"}render(){return this.state?e_`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??ex}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:e_`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??ex}
			></code-icon>`}};sa.styles=[sr],ss([eL()],sa.prototype,"state",2),ss([eL({attribute:"issue-id"})],sa.prototype,"issueId",2),sa=ss([eE("issue-icon")],sa);let sl=T`
	.pr-icon--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr-icon--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr-icon--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var sc=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,sh=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sd(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sc(t,o,n),n};let sp=class extends lit_element_i{constructor(){super(...arguments),this.draft=!1}get icon(){let e=this.draft?"git-pull-request-draft":"git-pull-request";if(this.state)switch(this.state){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed"}return e}get classes(){return!this.state||this.draft&&"opened"===this.state?"pr-icon":`pr-icon pr-icon--${this.state}`}get label(){let e=this.draft?"Draft pull request":"Pull request";return this.state?`${e} ${this.prId?`#${this.prId}`:""} is ${this.state}`:e}render(){return this.state?e_`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??ex}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:e_`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??ex}
			></code-icon>`}};sp.styles=[sl],sh([eL()],sp.prototype,"state",2),sh([eL({type:Boolean})],sp.prototype,"draft",2),sh([eL({attribute:"pr-id"})],sp.prototype,"prId",2),sp=sh([eE("pr-icon")],sp);let su=navigator?.userAgentData?.platform,sg=navigator.userAgent;"Linux"===su||sg.includes("Linux");let sm="macOS"===su||sg.includes("Macintosh");"Windows"===su||sg.includes("Windows");var sb=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,sv=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sf(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sb(t,o,n),n};let sy=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${sm?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return e_`
			<gl-tooltip hoist content="${this.effectiveTooltip??ex}">
				<a
					role="${!this.effectiveHref?"button":ex}"
					type="${!this.effectiveHref?"button":ex}"
					aria-label="${this.effectiveLabel??ex}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??ex}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};sy.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sy.styles=T`
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
			${oX}
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
	`,sv([eL()],sy.prototype,"href",2),sv([eL({attribute:"alt-href"})],sy.prototype,"altHref",2),sv([eL()],sy.prototype,"label",2),sv([eL({attribute:"alt-label"})],sy.prototype,"altLabel",2),sv([eL()],sy.prototype,"icon",2),sv([eL({attribute:"alt-icon"})],sy.prototype,"altIcon",2),sv([eL({type:Boolean})],sy.prototype,"disabled",2),sv([eN("a")],sy.prototype,"defaultFocusEl",2),sv([ez()],sy.prototype,"isAltKeyPressed",2),sy=sv([eE("action-item")],sy);var sw=Object.defineProperty,s_=Object.getOwnPropertyDescriptor,sk=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?s_(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sw(t,o,n),n};let s$=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return e_`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,r=this.actionNodes.map((e,r)=>(e.setAttribute("aria-posinset",`${r+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===r?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10),r=null;if("ArrowLeft"===e.key){let e=1===o?this.actionNodes.length-1:o-2;r=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=o===this.actionNodes.length?0:o;r=this.actionNodes[e]}null!=r&&r!==t&&(t.setAttribute("tabindex","-1"),r.setAttribute("tabindex","0"),r.focus())}};s$.styles=T`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,sk([(m={flatten:!0},(e,t)=>{let{slot:o,selector:r}=m??{},i="slot"+(o?`[name=${o}]`:":not([name])");return eD(e,t,{get(){let e=this.renderRoot?.querySelector(i),t=e?.assignedElements(m)??[];return void 0===r?t:t.filter(e=>e.matches(r))}})})],s$.prototype,"actionNodes",2),s$=sk([eE("action-nav")],s$);var sx=Object.defineProperty,sC=Object.getOwnPropertyDescriptor,sS=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sC(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sx(t,o,n),n};let sP=class extends lit_element_i{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1,this.isDefault=!1}render(){return e_`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){let e;if(!this.worktree&&(!this.status||"local"===this.status))return e_`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return e_`<code-icon icon="git-commit"></code-icon>`;let t="0.5";switch(this.status){case"diverged":e="var(--gl-icon-color-status-diverged)";break;case"behind":e="var(--gl-icon-color-status-behind)";break;case"ahead":e="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":e="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":e=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?e="var(--gl-icon-color-status-changes)":(e="transparent",t="1")}return this.worktree&&!1===this.isDefault?ek`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${e}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${t}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:ek`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${e}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${t}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){let e,t=this.branch?nU(this.branch):"Branch",o=this.upstream?nU(this.upstream):"its upstream";switch(this.status){case"diverged":e=e_`${t} has diverged from ${o}`;break;case"behind":e=e_`${t} is behind ${o}`;break;case"ahead":e=e_`${t} is ahead of ${o}`;break;case"missingUpstream":e=e_`${t} is missing its upstream ${o}`;break;case"upToDate":e=e_`${t} is up to date with ${o}`;break;case"local":e=e_`${t} is a local branch which hasn't been published`;break;case"remote":e=e_`${t} is a remote branch`;break;case"detached":e=e_`${t} is in a detached state, i.e. checked out to a commit or tag`;break;default:e=e_`${t} is in an unknown state`}return e=e_`<p>${e}</p>`,this.worktree?e=this.hasChanges?e_`${e}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:e_`${e}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(e=e_`${e}
				<p>Has working (uncommitted) changes</p>`),e}};sP.styles=T`
		:host {
			display: inline-flex;
			width: 16px;
			height: 16px;

			--gl-icon-color-foreground: var(--vscode-foreground, #c5c5c5);

			--gl-icon-color-status-synced: var(
				--gl-icon-color-foreground,
				var(--vscode-gitlens-decoration\\.branchUpToDateForegroundColor)
			);
			--gl-icon-color-status-diverged: var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor, #ff5);
			--gl-icon-color-status-behind: var(--vscode-gitlens-decorations\\.branchBehindForegroundColor, #f05);
			--gl-icon-color-status-ahead: var(--vscode-gitlens-decorations\\.branchAheadForegroundColor, #0f5);
			--gl-icon-color-status-missingUpstream: var(
				--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor,
				#c74e39
			);
			--gl-icon-color-status-changes: #1a79ff;
		}

		:host-context(.vscode-dark),
		:host-context(.vscode-high-contrast) {
			--gl-icon-color-foreground: #c5c5c5;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--gl-icon-color-foreground: #424242;
		}

		p {
			margin: 0;
		}

		p + p {
			margin-top: 0.4rem;
		}

		svg {
			width: 100%;
			height: 100%;
			margin-top: -0.2rem;
			vertical-align: middle;
		}
	`,sS([eL({type:String})],sP.prototype,"branch",2),sS([eL({type:String})],sP.prototype,"status",2),sS([eL({type:Boolean})],sP.prototype,"hasChanges",2),sS([eL({type:String})],sP.prototype,"upstream",2),sS([eL({type:Boolean})],sP.prototype,"worktree",2),sS([eL({type:Boolean,attribute:"is-default"})],sP.prototype,"isDefault",2),sP=sS([eE("gl-branch-icon")],sP);let sO=T`
	:host {
		box-sizing: border-box;
		display: flex;
		align-items: center;

		max-width: 100%;
		min-width: 4.6rem;
	}

	* {
		box-sizing: border-box;
	}
`,sA=T`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,sR=T`
	.truncated-button {
		max-width: 100%;
		min-width: 4rem;
	}
	gl-button[disabled] {
		opacity: 1;
		cursor: default;
	}
	.truncated-button__label {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;var sI=Object.defineProperty,sB=Object.getOwnPropertyDescriptor,sE=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sB(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sI(t,o,n),n};let sT=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return ex;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktrees-view":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return e_`${this.icon?e_`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:ex}<span class="label">${this.ref.name}</span>`}};sT.styles=T`
		:host {
			box-sizing: border-box;
			display: flex;
			align-content: center;

			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			gap: 0.4rem;
		}

		* {
			box-sizing: border-box;
		}

		.icon.tag,
		.icon.worktree {
			margin-right: 0.1rem;
		}

		.label {
			min-width: 2.4rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: var(--font-weight, bold);
		}
	`,sE([eL({type:Boolean,reflect:!0})],sT.prototype,"icon",2),sE([eL({type:Object})],sT.prototype,"ref",2),sE([eL({type:Number})],sT.prototype,"size",2),sE([eL({type:Boolean})],sT.prototype,"worktree",2),sT=sE([eE("gl-ref-name")],sT);var sL=Object.defineProperty,sz=Object.getOwnPropertyDescriptor,sD=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sz(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sL(t,o,n),n};let sN=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return e_`<gl-button appearance="toolbar" href=${this.href??ex} ?disabled=${this.disabled}
			>${null==this.ref?e_`<slot name="empty">&lt;missing&gt;</slot>`:e_`<gl-ref-name
						part="label"
						?icon=${this.icon}
						.ref=${this.ref}
						.size=${this.size}
						?worktree=${this.worktree}
					></gl-ref-name>`}<code-icon
				slot="suffix"
				class="picker-icon"
				icon="chevron-down"
				size="10"
			></code-icon
			><slot name="tooltip" slot="tooltip"></slot
		></gl-button>`}};sN.styles=[sO,T`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,sA],sD([eL({type:Boolean,reflect:!0})],sN.prototype,"disabled",2),sD([eL({type:String,reflect:!0})],sN.prototype,"href",2),sD([eL({type:Boolean,reflect:!0})],sN.prototype,"icon",2),sD([eL({type:Object})],sN.prototype,"ref",2),sD([eL({type:Number})],sN.prototype,"size",2),sD([eL({type:Boolean})],sN.prototype,"worktree",2),sN=sD([eE("gl-ref-button")],sN);var sM=Object.defineProperty,sj=Object.getOwnPropertyDescriptor,sF=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sj(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sM(t,o,n),n};let sq=T`
	.header__actions {
		margin-top: 0.4rem;
	}

	.content {
		gap: 0.6rem;
	}

	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast) {
		--color-status--in-sync: #00bb00;
		--color-merge--clean: #00bb00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--color-status--in-sync: #00aa00;
		--color-merge--clean: #00aa00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title > span {
		cursor: help;
	}

	.header__title code-icon:not(.info) {
		margin-bottom: 0.1rem;
	}

	.header__title code-icon.status--warning {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title p {
		margin: 0.5rem 0 0 0;
	}

	.header__subtitle {
		font-size: 1.3rem;
		margin: 0.2rem 0 0 0;
	}

	.status--conflict .icon,
	.status--conflict .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--behind .icon,
	.status--behind .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--merged .icon,
	.status--merged .status-indicator {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}

	.status--merged .icon {
		transform: rotateY(180deg);
	}

	.status--in-sync .status-indicator {
		color: var(--color-status--in-sync);
	}

	.status--merge-conflict {
		color: var(--color-merge--conflict);
	}

	.status--merge-clean {
		color: var(--color-merge--clean);
	}

	.status--upgrade {
		color: var(--color-foreground--50);
	}

	.status-indicator {
		margin-left: -0.5rem;
		margin-top: 0.8rem;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;
	}

	.button-container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.button-container gl-button {
		max-width: 30rem;
	}

	p {
		margin: 0 0.4rem;
	}

	p code-icon,
	gl-button code-icon {
		margin-bottom: 0.1rem;
	}

	details {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 0;
		position: relative;
		margin: 0 0.2rem 0.4rem;
		overflow: hidden;
		border: 1px solid transparent;
		color: var(--color-foreground--85);
	}

	details[open] {
		border-radius: 0.3rem;
		border: 1px solid var(--vscode-sideBar-border);
	}

	summary {
		position: sticky;
		top: 0;
		color: var(--color-foreground);
		cursor: pointer;
		list-style: none;
		transition: transform ease-in-out 0.1s;
		padding: 0.4rem 0.6rem 0.4rem 0.6rem;
		z-index: 1;
	}

	summary:hover {
		color: var(--vscode-textLink-activeForeground);
	}

	details[open] > summary {
		color: var(--vscode-textLink-foreground);
		border-radius: 0.3rem 0.3rem 0 0;
		margin-left: 0;
		background: var(--vscode-sideBar-background);
	}

	details[open] > summary code-icon {
		transform: rotate(90deg);
	}

	summary code-icon {
		transition: transform 0.2s;
	}

	.files {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		max-height: 8rem;
		overflow-y: auto;
		padding: 0.4rem 0.8rem;

		background: var(--vscode-sideBar-background);
	}

	gl-popover {
		--max-width: 80vw;
	}

	.target-edit * {
		text-decoration: underline dotted;
		text-underline-offset: 0.3rem;
	}
`,sU=class extends lit_element_i{get target(){return this._target}get targetPromise(){return this._targetPromise}set targetPromise(e){this._targetPromise!==e&&(this._targetPromise=e,this._targetPromise?.then(e=>this._target=e,()=>this._target=void 0))}get conflicts(){return this.target?.potentialConflicts}get mergedStatus(){return this.target?.mergedStatus}get status(){return this.target?.status}get branchRef(){if(null!=this.branch)return{repoPath:this.branch.repoPath,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get targetBranchRef(){if(null!=this.target)return{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name}}render(){let e,t;return this.status||this.conflicts?(this.mergedStatus?.merged?(e="git-merge",t="merged"):this.conflicts?(e="warning",t="conflict"):(this.status?.behind??0)>0?(e="arrow-down",t="behind"):(e="check",t="in-sync"),e_`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${t}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${t}" icon="${e}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">${this.renderContent()}</div>
		</gl-popover>`):ex}renderContent(){let e=nU(this.target?.name),t=this.mergedStatus?.merged&&this.mergedStatus.localBranchOnly?{repoPath:this.branch.repoPath,branchId:this.mergedStatus.localBranchOnly.id,branchName:this.mergedStatus.localBranchOnly.name,branchUpstreamName:this.mergedStatus.localBranchOnly.upstream?.name}:this.target?{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name,branchUpstreamName:void 0}:void 0;return this.mergedStatus?.merged?this.mergedStatus.localBranchOnly?e_`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged Locally into Merge Target`,"git-merge")}
					<div class="body">
						<p>
							Your current branch ${nU(this.branch.name)} has
							${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge
							target's local branch ${nU(this.mergedStatus.localBranchOnly.name)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${rc("gitlens.home.pushBranch",t)}"
								>Push ${nU(this.mergedStatus.localBranchOnly.name)}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${rc("gitlens.home.deleteBranchOrWorktree",[this.branchRef,t])}"
								>Delete
								${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
								${nU(this.branch.name,null!=this.branch.worktree)}</gl-button
							>
						</div>
					</div>`:e_`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged into Merge Target`,"git-merge")}
				<div class="body">
					<p>
						Your current branch ${nU(this.branch.name)} has
						${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${rc("gitlens.home.deleteBranchOrWorktree",[this.branchRef,t])}"
							>Delete
							${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
							${nU(this.branch.name,null!=this.branch.worktree)}</gl-button
						>
					</div>
				</div>`:this.conflicts?e_`${this.renderHeader("Potential Conflicts with Merge Target","warning","warning")}
				<div class="body">
					${this.status?e_`<p>
								Your current branch ${nU(this.branch.name)} is
								${op("commit",this.status.behind)} behind its merge target
								${this.renderInlineTargetEdit(this.target)}.
							</p>`:ex}
					<div class="button-container">
						<gl-button
							full
							href="${rc("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
							>Rebase ${nU(this.conflicts.branch)} onto ${e}</gl-button
						>
						<gl-button
							full
							appearance="secondary"
							href="${rc("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
							>Merge ${e} into ${nU(this.conflicts.branch)}</gl-button
						>
					</div>
					<p class="status--merge-conflict">
						<code-icon icon="warning"></code-icon> Merging will cause conflicts in
						${op("file",this.conflicts.files.length)} that will need to be resolved.
					</p>
					${this.renderFiles(this.conflicts.files)}
				</div>`:null!=this.status?this.status.behind>0?e_`${this.renderHeader(`${op("Commit",this.status.behind)} Behind Merge Target`,"arrow-down","warning")}
					<div class="body">
						<p>
							Your current branch ${nU(this.branch.name)} is
							${op("commit",this.status.behind)} behind its merge target
							${this.renderInlineTargetEdit(this.target)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${rc("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
								>Rebase ${nU(this.branch.name)} onto ${e}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${rc("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
								>Merge ${e} into ${nU(this.branch.name)}</gl-button
							>
						</div>
						<p class="status--merge-clean">
							<code-icon icon="check"></code-icon> Merging will not cause conflicts.
						</p>
					</div>`:e_`${this.renderHeader("Up to Date with Merge Target","check")}
				<div class="body">
					<p>
						Your current branch ${nU(this.branch.name)} is up to date with its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
				</div>`:ex}renderHeader(e,t,o){return e_`<div class="header">
			<gl-tooltip class="header__title">
				<span>
					<code-icon
						icon="${t}"
						class="${(o?`status--${o}`:void 0)??ex}"
					></code-icon>
					${e}&nbsp;<code-icon class="info" icon="question" size="16"></code-icon>
				</span>
				<span slot="content"
					>${e}
					<p>
						The "merge target" is the branch that ${nU(this.branch.name)} is most likely to be
						merged into.
					</p>
				</span>
			</gl-tooltip>
			${this.renderHeaderActions()}
		</div>`}renderHeaderActions(){let e=this.branchRef,t=this.targetBranchRef;return e_`<span class="header__actions"
			>${e&&t?e_`<gl-button
							href="${rc("gitlens.home.changeBranchMergeTarget",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="pencil"></code-icon
							><span slot="tooltip"
								>Change Merge Target<br />${nU(this.target?.name)}</span
							></gl-button
						><gl-button
							href="${rc("gitlens.home.openMergeTargetComparison",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="git-compare"></code-icon>
							<span slot="tooltip"
								>Compare Branch with Merge Target<br />${nU(this.branch.name)}
								<code-icon icon="arrow-both" size="12"></code-icon> ${nU(this.target?.name)}</span
							>
						</gl-button>`:ex}<gl-button
				href="${rc("gitlens.home.fetch",this.targetBranchRef)}"
				appearance="toolbar"
				><code-icon icon="repo-fetch"></code-icon>
				<span slot="tooltip">Fetch Merge Target<br />${nU(this.target?.name)}</span>
			</gl-button></span
		>`}renderInlineTargetEdit(e){return e_`<gl-button
			class="target-edit"
			appearance="toolbar"
			density="compact"
			tooltip="Change Merge Target"
			href="${rc("gitlens.home.changeBranchMergeTarget",{...this.branchRef,mergeTargetId:this.targetBranchRef.branchId,mergeTargetName:this.targetBranchRef.branchName})}"
			>${nU(e?.name)}</gl-button
		>`}renderFiles(e){return e_`
			<details>
				<summary>
					<code-icon icon="chevron-right"></code-icon>
					Show ${e.length} conflicting files
				</summary>
				<div class="files scrollable">${e.map(e=>this.renderFile(e.path))}</div>
			</details>
		`}renderFile(e){return e_`<span class="files__item"><code-icon icon="file"></code-icon> ${e}</span>`}};sU.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sU.styles=[o1,o2,rd,o5,sq],sF([eL({type:Object})],sU.prototype,"branch",2),sF([ez()],sU.prototype,"_target",2),sF([eL({type:Object})],sU.prototype,"targetPromise",1),sU=sF([eE("gl-merge-target-status")],sU);let sW=class extends lit_element_i{render(){let e="upgrade";return e_`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${e}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${e}" icon="${"warning"}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Detect potential merge conflicts</span>
				</div>
				<div class="body">
					<p>
						Upgrade to GitLens Pro to see when your current branch has potential conflicts with its merge
						target branch and take action to resolve them.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${rc("gitlens.plus.upgrade",{plan:"pro",source:"merge-target"})}"
							>Upgrade to Pro</gl-button
						>
					</div>
				</div>
			</div>
		</gl-popover>`}};sW.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sW.styles=[o1,o2,rd,o5,sq],sW=sF([eE("gl-merge-target-upgrade")],sW);var sH=Object.defineProperty,sG=Object.getOwnPropertyDescriptor,sV=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sG(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sH(t,o,n),n};let sK=T`
	* {
		box-sizing: border-box;
	}

	gl-avatar-list {
		--gl-avatar-size: 2.4rem;
		margin-block: -0.4rem;
	}

	.branch-item {
		position: relative;
	}

	.branch-item__container {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.branch-item__container > * {
		margin-block: 0;
	}

	.branch-item__section {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.branch-item__section > * {
		margin-block: 0;
	}

	.branch-item__section--details {
		font-size: 0.9em;
		color: var(--vscode-descriptionForeground);
	}

	.branch-item__actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 0.9em;
	}

	/* :empty selector doesn't work with lit */
	.branch-item__actions:not(:has(*)) {
		display: none;
	}

	.branch-item__icon {
		color: var(--vscode-descriptionForeground);
		flex: none;
	}

	.branch-item__name {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.branch-item__name--secondary {
		font-weight: normal;
	}

	.branch-item__identifier {
		color: var(--vscode-descriptionForeground);
		text-decoration: none;
	}

	.branch-item__grouping {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		max-width: 100%;
		margin-block: 0;
	}

	.branch-item__changes {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: flex-end;
		flex-wrap: wrap;
		white-space: nowrap;
	}

	.branch-item__changes formatted-date {
		margin-inline-end: auto;
	}

	.branch-item__summary {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.branch-item__collapsed-actions {
		position: absolute;
		z-index: var(--gl-branch-card-actions-zindex, 2);
		right: 0.4rem;
		bottom: 0.3rem;
		padding: 0.4rem 0.6rem;
		background-color: var(--gl-card-hover-background);
	}

	.branch-item:not(:focus-within):not(:hover) .branch-item__collapsed-actions {
		${oJ}
	}

	.pill {
		--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
	}

	.work-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}
	.work-item::part(base) {
		margin-block-end: 0;
	}

	.branch-item__section.mb-1 {
		margin-block: 0.4rem;
	}

	.branch-item__merge-target {
		margin-inline-end: auto;
	}

	.branch-item__row {
		display: flex;
		gap: 0.8rem;
	}

	.branch-item__row [full] {
		flex-grow: 1;
	}

	.branch-item__missing {
		--button-foreground: inherit;
	}

	:host-context(.vscode-dark) .branch-item__missing,
	:host-context(.vscode-high-contrast) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 12%);
	}

	:host-context(.vscode-light) .branch-item__missing,
	:host-context(.vscode-high-contrast-light) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 14%);
	}

	.branch-item__category {
		margin-inline-start: 0.6rem;
	}

	.launchpad-grouping--mergeable {
		color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
	}

	.launchpad-grouping--blocked {
		color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
	}

	.launchpad-grouping--attention {
		color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
	}

	.tracking__pill,
	.wip__pill {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.tracking__tooltip,
	.wip__tooltip {
		display: contents;
		vertical-align: middle;
	}

	.tracking__tooltip p,
	.wip__tooltip p {
		margin-block: 0;
	}

	p.tracking__tooltip--wip {
		margin-block-start: 1rem;
	}
`;let GlBranchCardBase=class GlBranchCardBase extends GlElement{constructor(){super(...arguments),this.showUpgrade=!1,this.busy=!1,this.expanded=!1,this.expandable=!1,this.onFocus=e=>{e.composedPath().some(e=>e.matches?.("action-item")??!1)||this.expanded||this.toggleExpanded(!0)}}static{this.styles=[rh,sK]}get branch(){return this._branch}set branch(e){this._branch=e,this.autolinksPromise=e?.autolinks,this.contributorsPromise=e?.contributors,this.issuesPromise=e?.issues,this.prPromise=e?.pr,this.mergeTargetPromise=e?.mergeTarget,this.remotePromise=e?.remote,this.wipPromise=e?.wip}get autolinks(){return this._autolinks}get autolinksPromise(){return this._autolinksPromise}set autolinksPromise(e){this._autolinksPromise!==e&&(this._autolinksPromise=e,this._autolinksPromise?.then(e=>this._autolinks=e,()=>this._autolinks=void 0))}get contributors(){return this._contributors}get contributorsPromise(){return this._contributorsPromise}set contributorsPromise(e){this._contributorsPromise!==e&&(this._contributorsPromise=e,this._contributorsPromise?.then(e=>this._contributors=e,()=>this._contributors=void 0))}get issues(){return this._issues}get issuesPromise(){return this._issuesPromise}set issuesPromise(e){this._issuesPromise!==e&&(this._issuesPromise=e,this._issuesPromise?.then(e=>this._issues=e,()=>this._issues=void 0))}get pr(){return this._pr}get prPromise(){return this._prPromise}set prPromise(e){this._prPromise!==e&&(this._prPromise=e,this._prPromise?.then(e=>{this._pr=e,this.launchpadItemPromise=e?.launchpad},()=>{this._pr=void 0,this.launchpadItemPromise=void 0}))}get launchpadItem(){return this._launchpadItem}get launchpadItemPromise(){return this._launchpadItemPromise}set launchpadItemPromise(e){this._launchpadItemPromise!==e&&(this._launchpadItemPromise=e,this._launchpadItemPromise?.then(e=>this._launchpadItem=e,()=>this._launchpadItem=void 0))}get mergeTarget(){return this._mergeTarget}get mergeTargetPromise(){return this._mergeTargetPromise}set mergeTargetPromise(e){this._mergeTargetPromise!==e&&(this._mergeTargetPromise=e,this._mergeTargetPromise?.then(e=>this._mergeTarget=e,()=>this._mergeTarget=void 0))}get remote(){return this._remote}get remotePromise(){return this._remotePromise}set remotePromise(e){this._remotePromise!==e&&(this._remotePromise=e,this._remotePromise?.then(e=>this._remote=e,()=>this._remote=void 0))}get wip(){return this._wip}get wipPromise(){return this._wipPromise}set wipPromise(e){this._wipPromise!==e&&(this._wipPromise=e,this._wipPromise?.then(e=>this._wip=e,()=>this._wip=void 0))}onExpandableChanged(){this.attachFocusListener()}get branchRef(){return{repoPath:this.repo,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get isWorktree(){return null!=this.branch.worktree}get cardIndicator(){return sX(sJ(this.pr,this.launchpadItem))??"base"}get branchCardIndicator(){if(this.branch.opened){if(this.wip?.pausedOpStatus!=null){if(this.wip?.hasConflicts)return"conflict";switch(this.wip.pausedOpStatus.type){case"cherry-pick":return"cherry-picking";case"merge":return"merging";case"rebase":return"rebasing";case"revert":return"reverting"}}if(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0)return"branch-changes";if(this.mergeTarget?.mergedStatus?.merged)return"branch-merged";switch(this.branch.status){case"ahead":return"branch-ahead";case"behind":return"branch-behind";case"diverged":return"branch-diverged";case"upToDate":return"branch-synced";case"missingUpstream":return"branch-missingUpstream";default:return}}}connectedCallback(){super.connectedCallback?.(),this.attachFocusListener()}disconnectedCallback(){super.disconnectedCallback?.(),this.eventController?.abort()}attachFocusListener(){this.eventController?.abort(),this.eventController=void 0,this.expandable&&(null==this.eventController&&(this.eventController=new AbortController),this.addEventListener("focusin",this.onFocus,{signal:this.eventController.signal}))}renderIssues(){let{autolinks:e,issues:t}=this,o=t?.length?t:e;return o?.length?e_`
			${o.map(e=>e_`
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<issue-icon state=${e.state} issue-id=${e.id}></issue-icon>
						</span>
						<a href=${e.url} class="branch-item__name branch-item__name--secondary">${e.title}</a>
						<span class="branch-item__identifier">#${e.id}</span>
					</p>
				`)}
		`:ex}renderWip(){let e=this.wip?.workingTreeState;if(null==e)return ex;let t=sQ(e);return e_`<gl-tooltip class="wip__pill" placement="bottom"
			><commit-stats
				added=${e.added}
				modified=${e.changed}
				removed=${e.deleted}
				symbol="icons"
			></commit-stats>
			<span class="wip__tooltip" slot="content">
				<p>${t.length?`${t.join(", ")} in the working tree`:"No working tree changes"}</p>
			</span>
		</gl-tooltip>`}renderAvatars(){let{contributors:e}=this;return e?.length?e_`<gl-avatar-list
			.avatars=${e.map(e=>({name:e.name,src:e.avatarUrl}))}
			max="1"
		></gl-avatar-list>`:ex}renderTracking(e=!1){let t,o;if(null==this.branch.upstream)return ex;let{state:r}=this.branch.upstream,i=0;if(e){let e=this.wip?.workingTreeState;if(null!=e){i=e.added+e.changed+e.deleted;let o=sQ(e);o.length&&(t=e_`<p class="tracking__tooltip--wip">${o.join(", ")} in the working tree</p>`)}}if(this.branch.upstream.missing)o=e_`${nU(this.branch.name)} is missing its upstream
			${nU(this.branch.upstream.name)}`;else{let e=[];r.behind&&e.push(`${op("commit",r.behind)} behind`),r.ahead&&e.push(`${op("commit",r.ahead)} ahead of`),o=e.length?e_`${nU(this.branch.name)} is
				${e.join(", ")}${nU(this.branch.upstream?.name)}`:e_`${nU(this.branch.name)} is up to date with
				${nU(this.branch.upstream?.name)}`}return e_`<gl-tooltip class="tracking__pill" placement="bottom"
			><gl-tracking-pill
				class="pill"
				colorized
				outlined
				always-show
				ahead=${r.ahead}
				behind=${r.behind}
				working=${i}
				?missingUpstream=${this.branch.upstream?.missing??!1}
			></gl-tracking-pill>
			<span class="tracking__tooltip" slot="content">${o}${t}</span></gl-tooltip
		>`}renderBranchActions(){let e=this.getBranchActions?.();return e?.length?e_`<action-nav>${e}</action-nav>`:ex}renderPrActions(){let e=this.getPrActions?.();return e?.length?e_`<action-nav>${e}</action-nav>`:ex}renderCollapsedActions(){if(this.expanded)return ex;let e=this.getCollapsedActions?.();return e?.length?e_`<action-nav class="branch-item__collapsed-actions">${e}</action-nav>`:ex}createWebviewCommandLink(e,t){return nT(e,"gitlens.views.home","",t?{...t,...this.branchRef}:this.branchRef)}createCommandLink(e,t){return rc(e,t?{...t,...this.branchRef}:this.branchRef)}renderTimestamp(){let{timestamp:e}=this.branch;return null==e?ex:e_`<formatted-date
			tooltip="Last commit on "
			.date=${new Date(e)}
			class="branch-item__date"
		></formatted-date>`}renderBranchItem(e){let t=this.renderWip(),o=this.renderTracking(),r=this.renderAvatars(),i=this.branch.opened?void 0:this.renderBranchIndicator?.(),n=this.renderMergeTargetStatus(),a=this.renderTimestamp();return e_`
			<gl-work-item
				?primary=${!this.branch.opened}
				?nested=${!this.branch.opened}
				.indicator=${this.branchCardIndicator}
				?expanded=${this.expanded}
			>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon"> ${this.renderBranchIcon()} </span>
						<span class="branch-item__name">${this.branch.name}</span>
					</p>
				</div>
				${eM(a||i||t||o||r,()=>e_`
						<div class="branch-item__section branch-item__section--details" slot="context">
							<p class="branch-item__changes">${a}${i}${t}${o}${r}</p>
						</div>
					`)}
				${eM(e||n,()=>e_`<div class="branch-item__actions" slot="actions">
							${n??ex}${e??ex}
						</div>`)}
				<span class="branch-item__summary" slot="summary">${this.renderTracking(!0)} ${r}</span>
			</gl-work-item>
		`}renderBranchIcon(){let e=this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0;return e_`<gl-branch-icon
			branch="${this.branch.name}"
			status="${this.branch.status}"
			?hasChanges=${e}
			upstream=${this.branch.upstream?.name}
			?worktree=${null!=this.branch.worktree}
			?is-default=${this.branch.worktree?.isDefault??!1}
		></gl-branch-icon>`}renderPrItem(){if(!this.pr)return this.branch.upstream?.missing===!1&&this.expanded?e_`
					<div>
						<button-container grouping="split" layout="full">
							<gl-button
								class="branch-item__missing"
								appearance="secondary"
								full
								href="${rc("gitlens.home.createPullRequest",{ref:this.branchRef,describeWithAI:!1,source:{source:"home",detail:"create-pr"}})}"
							>
								<code-icon icon="git-pull-request" slot="prefix"></code-icon>
								<span>Create a Pull Request</span>
							</gl-button>
							${this._homeState.orgSettings.ai&&this._homeState.aiEnabled&&this.remote?.provider?.supportedFeatures?.createPullRequestWithDetails?e_`<gl-button
										class="branch-item__missing"
										tooltip="Create a Pull Request with AI (Preview)"
										appearance="secondary"
										href="${rc("gitlens.home.createPullRequest",{ref:this.branchRef,describeWithAI:!0,source:{source:"home",detail:"create-pr"}})}"
									>
										<code-icon icon="sparkle"></code-icon>
									</gl-button>`:ex}
						</button-container>
					</div>
				`:ex;let e=this.branch.opened?sX(sJ(this.pr,this.launchpadItem))??"base":void 0,t=this.renderPrActions();return e_`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<pr-icon ?draft=${this.pr.draft} state=${this.pr.state} pr-id=${this.pr.id}></pr-icon>
						</span>
						<a href=${this.pr.url} class="branch-item__name branch-item__name--secondary"
							>${this.pr.title}</a
						>
						<span class="branch-item__identifier">#${this.pr.id}</span>
					</p>
				</div>
				${this.renderLaunchpadItem()}
				${eM(null!=t,()=>e_`<div class="branch-item__actions" slot="actions">${t}</div>`)}
			</gl-work-item>
		`}renderLaunchpadItem(){if(null==this.launchpadItem)return ex;let e=sJ(this.pr,this.launchpadItem);if(null==e)return ex;let t=nz.get(e),o=nL.get(e);if(null==t||null==o)return ex;let r=o.match(/\$\((.*?)\)/)[1].replace("gitlens","gl"),i=function(e,t){if(null==e||0===e.length)return e;if(null==t)return e.replace(oc,"");let o=function(e){let t=od.get(e);if(null!=t)return t;t=[];let o=e.length,r=0;for(;r<o;){let o=e.indexOf("${",r);if(-1===o)break;let i=e.indexOf("}",o);if(-1===i)break;let n=o+2,a="",l="",c="",d=!1,h="right",p="";if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(l=e.slice(t,n)),n++}else if(!oh(e.charCodeAt(n))){let t=n++;for(;n<i&&!oh(e.charCodeAt(n));)n++;t!==n&&(l=e.slice(t,n))}for(;n<i;){let t=e.charCodeAt(n);if(oh(t))a+=e[n++];else{if(124!==t)break;for(;n<i;){if((t=e.charCodeAt(++n))>=48&&t<=57){c+=e[n];continue}63===t?(d=!0,n++):45===t&&(h="left",n++);break}}}if(n<i){if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(p=e.slice(t,n)),n++}else if(!oh(e.charCodeAt(n))){let t=n++;for(;n<i&&!oh(e.charCodeAt(n));)n++;t!==n&&(p=e.slice(t,n))}}r=i+1,t.push({key:a,start:o,end:r,options:{prefix:l||void 0,suffix:p||void 0,truncateTo:c?parseInt(c,10):void 0,collapseWhitespace:d,padDirection:h}})}return od.set(e,t),t}(e);if(0===o.length)return e;let r=0,i="";for(let n of o)i+=e.slice(r,n.start)+(t[n.key]??""),r=n.end;return r<e.length&&(i+=e.slice(r)),i}(nN.get(this.launchpadItem.category)[1],{author:this.launchpadItem.author?.username??"unknown",createdDateRelative:oi(new Date(this.launchpadItem.createdDate))});return e_`<div class="branch-item__section branch-item__section--details" slot="context">
				<p class="launchpad-grouping--${sX(e)}">
					<gl-tooltip content="${i}">
						<a
							href=${rc("gitlens.showLaunchpad",{source:"home",state:{id:{uuid:this.launchpadItem.uuid,group:e}}})}
							class="launchpad__grouping"
						>
							<code-icon icon="${r}"></code-icon
							><span class="branch-item__category">${t.toUpperCase()}</span></a
						>
					</gl-tooltip>
				</p>
			</div>
			${r?e_`<span
						class="branch-item__summary launchpad-grouping--${sX(e)}"
						slot="summary"
						><gl-tooltip placement="bottom" content="${t}"
							><code-icon icon="${r}"></code-icon></gl-tooltip
					></span>`:ex}`}renderMergeTargetStatus(){return this.showUpgrade?e_`<gl-merge-target-upgrade class="branch-item__merge-target"></gl-merge-target-upgrade>`:this.branch.mergeTarget?e_`<gl-merge-target-status
			class="branch-item__merge-target"
			.branch=${this.branch}
			.targetPromise=${this.branch.mergeTarget}
		></gl-merge-target-status>`:ex}renderIssuesItem(){if(![...this.issues??[],...this.autolinks??[]].length)return ex;let e=this.branch.opened?"base":void 0;return e_`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">${this.renderIssues()}</div>
			</gl-work-item>
		`}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask(()=>{this.emit("gl-branch-card-expand-toggled",{expanded:e})})}};sV([S({context:"state",subscribe:!0}),ez()],GlBranchCardBase.prototype,"_homeState",2),sV([eL()],GlBranchCardBase.prototype,"repo",2),sV([eL({type:Boolean})],GlBranchCardBase.prototype,"showUpgrade",2),sV([eL({type:Object})],GlBranchCardBase.prototype,"branch",1),sV([ez()],GlBranchCardBase.prototype,"_autolinks",2),sV([ez()],GlBranchCardBase.prototype,"_contributors",2),sV([ez()],GlBranchCardBase.prototype,"_issues",2),sV([ez()],GlBranchCardBase.prototype,"_pr",2),sV([ez()],GlBranchCardBase.prototype,"_launchpadItem",2),sV([ez()],GlBranchCardBase.prototype,"_mergeTarget",2),sV([ez()],GlBranchCardBase.prototype,"_remote",2),sV([ez()],GlBranchCardBase.prototype,"_wip",2),sV([eL({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"busy",2),sV([eL({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expanded",2),sV([eL({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expandable",2),sV([t2("expandable")],GlBranchCardBase.prototype,"onExpandableChanged",1);let sY=class extends GlBranchCardBase{render(){return e_`
			<gl-card class="branch-item" focusable .indicator=${this.cardIndicator}>
				<div class="branch-item__container">
					${this.renderBranchItem(this.renderBranchActions())}${this.renderPrItem()}${this.renderIssuesItem()}
				</div>
				${this.renderCollapsedActions()}
			</gl-card>
		`}getCollapsedActions(){let e=[];return this.branch.worktree?e.push(e_`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
					alt-href=${this.createCommandLink("gitlens.home.openWorktree",{location:"newWindow"})}
				></action-item>`):e.push(e_`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),e}getBranchActions(){let e=[],t=this._homeState.orgSettings.ai&&this._homeState.aiEnabled;return this.branch.worktree?(e.push(e_`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
					alt-href=${this.createCommandLink("gitlens.home.openWorktree",{location:"newWindow"})}
				></action-item>`),t&&(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0?e.push(e_`<action-item
							label="Explain Working Changes (Preview)"
							icon="sparkle"
							href=${this.createCommandLink("gitlens.ai.explainWip:home")}
						></action-item>`):e.push(e_`<action-item
							label="Explain Branch Changes (Preview)"
							icon="sparkle"
							href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
						></action-item>`))):(e.push(e_`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),t&&e.push(e_`<action-item
						label="Explain Branch Changes (Preview)"
						icon="sparkle"
						href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
					></action-item>`)),e.push(e_`<action-item
				label="Fetch"
				icon="repo-fetch"
				href=${this.createCommandLink("gitlens.home.fetch")}
			></action-item>`),e.push(e_` <action-item
				label="Visualize Branch History"
				icon="graph-scatter"
				href=${rc("gitlens.visualizeHistory.branch:home",{type:"branch",repoPath:this.repo,branchId:this.branch.id})}
			></action-item>`),e.push(e_`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${rc("gitlens.home.openInGraph",{...this.branchRef,type:"branch"})}
			></action-item>`),e}getPrActions(){return[e_`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,e_`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,e_`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}renderBranchIndicator(){}};sY=sV([eE("gl-branch-card")],sY);let sZ=class extends lit_element_i{constructor(){super(...arguments),this.primary=!1,this.nested=!1,this.expanded=!1}render(){return e_`<gl-card
			.density=${this.primary?"tight":void 0}
			.grouping=${!1===this.nested?void 0:this.primary?"item-primary":"item"}
			.indicator=${this.indicator}
			>${this.renderContent()}</gl-card
		>`}renderContent(){let e=this.querySelectorAll('[slot="context"]').length>0||this.querySelectorAll('[slot="actions"]').length>0;return e_`
			<div class=${iN({"work-item":!0,"work-item_content-empty":!e})}>
				<header class="work-item__header">
					<slot class="work-item__main"></slot>
					${this.renderSummary()}
				</header>
				<div class="work-item__content">
					<slot class="work-item__context" name="context"></slot>
					<slot class="work-item__actions" name="actions"></slot>
				</div>
			</div>
		`}renderSummary(){return this.expanded?ex:e_`<slot class="work-item__summary" name="summary"></slot>`}};function sJ(e,t){if(null==t||e?.state!=="opened"||e.draft&&"unassigned-reviewers"===t.category)return;let o=nD.get(t.category);if(null!=o&&"other"!==o&&"draft"!==o&&"current-branch"!==o)return o}function sX(e){switch(e){case"mergeable":return"mergeable";case"blocked":return"blocked";case"follow-up":case"needs-review":return"attention"}}function sQ(e){let t=[];return e.added&&t.push(`${op("file",e.added??0)} added`),e.changed&&t.push(`${op("file",e.changed??0)} changed`),e.deleted&&t.push(`${op("file",e.deleted??0)} deleted`),t}sZ.styles=[T`
			.work-item {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.work-item_content-empty {
				gap: 0;
			}

			.work-item__header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 0.8rem;
			}

			.work-item__main {
				display: block;
				flex: 1;
				min-width: 0;
			}

			.work-item__summary {
				display: block;
				flex: none;
			}

			.work-item__content {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-height: 100px;

				transition-property: opacity, max-height, display;
				transition-duration: 0.2s;
				transition-behavior: allow-discrete;
			}

			:host(:not([expanded])) .work-item__content {
				display: none;
				opacity: 0;
				max-height: 0;
			}

			gl-card::part(base) {
				margin-block-end: 0;
				padding-top: var(--gl-card-vertical-padding, 0.8rem);
				padding-bottom: var(--gl-card-vertical-padding, 0.8rem);
			}
		`],sV([eL({type:Boolean,reflect:!0})],sZ.prototype,"primary",2),sV([eL({type:Boolean,reflect:!0})],sZ.prototype,"nested",2),sV([eL({reflect:!0})],sZ.prototype,"indicator",2),sV([eL({type:Boolean,reflect:!0})],sZ.prototype,"expanded",2),sZ=sV([eE("gl-work-item")],sZ);var s0=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,s2=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?s1(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&s0(t,o,n),n};let s5=class extends lit_element_i{render(){return e_`<slot></slot>`}};s5.styles=T`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);
			width: 100%;
		}

		::slotted(gl-breadcrumb-item:not(:last-of-type))::after {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			position: relative;
			left: -0.6rem;
			margin-right: -0.6rem;
			transition:
				left 0.3s cubic-bezier(0.25, 1, 0.5, 1),
				margin-right 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}

		::slotted(gl-breadcrumb-item[collapsed]:not(:hover):not(:focus-within):not(:last-of-type))::after {
			left: -1.2rem;
			margin-right: -1.2rem;
		}

		::slotted(:last-child:not(gl-breadcrumb-item:last-of-type)) {
			margin-left: 1rem;
		}
	`,s5=s2([eE("gl-breadcrumbs")],s5);let s8=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return e_`<div class=${iN({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?e_`<gl-tooltip
			content="${e?t?"Click to Expand":"Click to Collapse":this.iconTooltip}"
			placement="bottom"
		>
			<code-icon
				class="breadcrumb-icon"
				icon="${this.icon}"
				tabindex="0"
				@click=${e?this.onToggleCollapse:void 0}
				@keyup=${e?this.onToggleCollapse:void 0}
			></code-icon>
		</gl-tooltip>`:e_`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:ex}};s8.styles=[o0,T`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
			}

			:host([icon]) {
				min-width: calc(24px + 0.6rem);
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				cursor: default;
			}

			.breadcrumb-content {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				vertical-align: middle;
				max-width: 100%;
			}

			.breadcrumb-icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.collapsible .breadcrumb-icon {
				cursor: pointer;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			.breadcrumb-tooltip {
				display: inline-flex;
				align-items: center;
				vertical-align: middle;
			}

			slot[name='children'] {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				overflow: hidden;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) .breadcrumb-label,
			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) slot[name='children'] {
				max-width: 0;
			}
		`],s2([ez()],s8.prototype,"_collapsed",2),s2([eL({type:Boolean,reflect:!0})],s8.prototype,"collapsed",1),s2([eL({type:String})],s8.prototype,"collapsibleState",2),s2([eL()],s8.prototype,"icon",2),s2([eL()],s8.prototype,"iconTooltip",2),s2([eL({type:Number})],s8.prototype,"shrink",1),s8=s2([eE("gl-breadcrumb-item")],s8);let s6=class extends lit_element_i{render(){return e_`<slot></slot>`}};s6.styles=T`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;
			margin-right: 0.6rem;
		}

		:host::before {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			margin-right: 0.4rem;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
		}

		.breadcrumb-label {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,s6=s2([eE("gl-breadcrumb-item-child")],s6);var s3=Object.defineProperty,s4=Object.getOwnPropertyDescriptor,s9=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?s4(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&s3(t,o,n),n};let s7=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return e_`<div class="skeleton" style=${e}></div>`}};s7.styles=T`
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
	`,s9([eL({type:Number})],s7.prototype,"lines",2),s7=s9([eE("skeleton-loader")],s7);let ae=T`
	:host {
		--gl-color-mix-base: var(
			--gl-card-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%)
		);
	}

	.card {
		display: block;
		flex-direction: column;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.4rem;
		border-inline-start: 0.3rem solid transparent;
		/* border-inline-end: 0.3rem solid transparent; */
		background-color: var(--gl-card-background, color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%));
		margin-block-end: 0.6rem;
		position: relative;
	}

	:host-context(.vscode-dark) .card.is-base,
	:host-context(.vscode-high-contrast) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #fff 7%);
	}

	:host-context(.vscode-light) .card.is-base,
	:host-context(.vscode-high-contrast-light) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #000 5%);
	}

	.card.is-active {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitDecoration-addedResourceForeground));
	}

	.card.is-cherry-picking,
	.card.is-merging,
	.card.is-rebasing,
	.card.is-reverting {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor)
		);
	}

	.card.is-conflict {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor)
		);
	}

	.card.is-issue-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-issue-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-pr-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-merged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-mergedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-mergeable {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(var(--vscode-gitlens-launchpadIndicatorMergeableColor))
		);
	}

	.card.is-blocked {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorBlockedColor)
		);
	}

	.card.is-attention {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorAttentionColor)
		);
	}

	.card.is-branch-merged {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitlens-mergedPullRequestIconColor));
	}

	.card.is-branch-synced {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchUpToDateForegroundColor) 20%, transparent)
		);
	}

	.card.is-branch-diverged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor) 70%, transparent)
		);
	}

	.card.is-branch-behind {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-branch-ahead {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-info,
	.card.is-branch-changes {
		border-inline-start-color: var(--gl-card-indicator-border, color-mix(in lab, #1a79ff 80%, transparent));
	}

	.card.is-branch-missingUpstream {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor)
		);
	}

	.card--focusable {
		cursor: pointer;
	}

	.card--focusable:focus,
	.card:focus-within,
	.card:hover {
		background-color: var(
			--gl-card-hover-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 8%)
		);
	}

	.card--focusable:focus-visible {
		outline: 0.1rem solid var(--vscode-focusBorder);
	}

	.card__actions {
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		display: block;
	}

	.card__content {
		display: block;
	}

	.card__content::slotted(:first-child) {
		margin-block-start: 0;
	}

	.card__content::slotted(:last-child) {
		margin-block-end: 0;
	}

	:host-context(.vscode-dark) .card--grouping-item,
	:host-context(.vscode-high-contrast) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}

	:host-context(.vscode-light) .card--grouping-item,
	:host-context(.vscode-high-contrast-light) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
	}

	.card--grouping-item-primary {
		--gl-card-background: transparent;
		--gl-card-hover-background: transparent;
	}

	.card--density-tight {
		padding: 0;
	}
`;var at=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,ar=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ao(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&at(t,o,n),n};let ai=class extends lit_element_i{constructor(){super(...arguments),this._focusable=!1}get focusable(){return null!=this.href||this._focusable}set focusable(e){let t=this._focusable;this._focusable=e,this.requestUpdate("focusable",t)}get classNames(){return{card:!0,"card--focusable":this.focusable,[`card--grouping-${this.grouping}`]:null!=this.grouping,[`card--density-${this.density}`]:null!=this.density,[`is-${this.indicator}`]:null!=this.indicator}}render(){return null!=this.href?e_`<a part="base" class=${iN(this.classNames)} href=${this.href}
				>${this.renderContent()}</a
			>`:e_`<div part="base" tabindex=${this.focusable?0:-1} class=${iN(this.classNames)}>
			${this.renderContent()}
		</div>`}renderContent(){return e_`
			<slot class="card__content"></slot>
			<slot name="actions" class="card__actions"></slot>
		`}focus(e){null!=this.href?this.shadowRoot?.querySelector("a")?.focus(e):super.focus(e)}};ai.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ai.styles=[ae],ar([eL({reflect:!0})],ai.prototype,"indicator",2),ar([eL({reflect:!0})],ai.prototype,"grouping",2),ar([eL({reflect:!0})],ai.prototype,"density",2),ar([eL()],ai.prototype,"href",2),ar([eL({type:Boolean,reflect:!0})],ai.prototype,"focusable",1),ai=ar([eE("gl-card")],ai);var an=Object.defineProperty,as=Object.getOwnPropertyDescriptor,aa=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?as(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&an(t,o,n),n};let al=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?e_`<a href=${this.href}><slot></slot></a>`:e_`<slot></slot>`}};al.styles=[o1,T`
			:host {
				display: block;
				font-family: inherit;
				border: none;
				padding: 0 0.6rem;
				cursor: pointer;
				color: var(--vscode-menu-foreground);
				background-color: var(--vscode-menu-background);
				text-align: left;
				height: auto;
				line-height: 2.2rem;
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
			}

			:host([role='option']:hover) {
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-selectionBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}

			:host([aria-selected='true']) {
				opacity: 1;
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-background);
			}

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],aa([eL({type:Boolean,reflect:!0})],al.prototype,"disabled",2),aa([eL({reflect:!0})],al.prototype,"href",2),aa([eL({reflect:!0})],al.prototype,"role",2),al=aa([eE("menu-item")],al);var ac=Object.defineProperty,ad=Object.getOwnPropertyDescriptor;let ah=class extends lit_element_i{render(){return e_`<slot></slot>`}};ah.styles=[o1,T`
			:host {
				display: block;
				text-transform: uppercase;
				font-size: 0.84em;
				line-height: 2.2rem;
				padding-left: 0.6rem;
				padding-right: 0.6rem;
				margin: 0px;
				color: var(--vscode-menu-foreground);
				opacity: 0.6;
				user-select: none;
				-webkit-font-smoothing: auto;
			}
		`],ah=((e,t,o,r)=>{for(var i,n=r>1?void 0:r?ad(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ac(t,o,n),n})([eE("menu-label")],ah);let ap=T`
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
`,au=T`
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
`;var ag=Object.defineProperty,am=Object.getOwnPropertyDescriptor,ab=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?am(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ag(t,o,n),n};let af=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return e_`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};af.styles=[ap,au],ab([eL({type:Boolean})],af.prototype,"pulse",2),af=ab([eE("gl-indicator")],af);var av=Object.defineProperty,ay=Object.getOwnPropertyDescriptor,aw=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ay(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&av(t,o,n),n};let a_=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return e_`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?e_`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:ex}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){if(!this.icon)return ex;let{repository:e}=this;if(!e?.provider)return e_`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="repo" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:t}=e,o=t.integration?.connected;return e_`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${t.url??ex}
					aria-label=${`Open Repository on ${t.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===t.icon?"cloud":`gl-provider-${t.icon}`}
						aria-hidden="true"
					></code-icon>
					${eM(o,()=>e_`<gl-indicator class="indicator-dot"></gl-indicator>`)}
				</gl-button>
				<span slot="content">
					Open Repository on ${t.name}
					<hr />
					${eM(o,()=>e_`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${t.name}
							</span>
						`,()=>!1!==o?ex:e_`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${rc("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
								>
									Connect to ${e.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return ex;let{repository:e}=this;if(!e?.provider)return ex;let{provider:t}=e;return t.integration?.connected!==!1?ex:e_`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${rc("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};a_.styles=[rh,rp,sO,sR,T`
			:host([icons='1']:not([expandable])) {
				min-width: 7rem;
			}

			:host([icons='1'][expandable]) {
				min-width: 0;
			}

			:host([icons='2']:not([expandable])) {
				min-width: 9.4rem;
			}

			:host([icons='2'][expandable]) {
				min-width: 5.6rem;
			}

			.indicator-dot {
				--gl-indicator-color: green;
				--gl-indicator-size: 0.4rem;
				margin-left: -0.2rem;
			}

			/* :host([expandable]) .truncated-button {
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			} */

			:host([expandable]:not(:hover, :focus-within)) .truncated-button .picker-icon::before {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button {
				min-width: 0;
				max-width: 0;
			}
		`,sA],aw([eL({type:Boolean})],a_.prototype,"connectIcon",2),aw([eL({type:Boolean})],a_.prototype,"disabled",2),aw([eL({type:Boolean})],a_.prototype,"icon",2),aw([eL({type:Object})],a_.prototype,"repository",2),aw([eL({type:Boolean})],a_.prototype,"hasMultipleRepositories",2),aw([eL({type:Object})],a_.prototype,"source",2),aw([eL({type:Boolean,reflect:!0})],a_.prototype,"expandable",2),aw([eL({type:Number,reflect:!0})],a_.prototype,"icons",1),a_=aw([eE("gl-repo-button-group")],a_);let ak={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}};function a$(e){return e.startsWith("remotes/")?e.indexOf("/",8):e.indexOf("/")}let ax=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,aC=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,aS=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,aP=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,aO=/(^[0-9a-f]{40})\^[0-3]?$/;function aA(e,t){var o,r,i,n;let a;if(null==e)return"";t=!1===t?{}:{expand:!0,icon:!0,label:t?.label??t?.expand??!0,...t};let l=t?.quoted?`'${e.name}'`:e.name;switch(e.refType){case"branch":{let i;e.remote&&(l=`${(o=l).substring(0,a$(o))}: ${(r=l).substring(a$(r)+1)}`,l=t?.quoted?`'${l}'`:l),i=t.label?t.capitalize&&t.expand?`${e.remote?"Remote ":""}Branch `:`${e.remote?"remote ":""}branch `:"",a=`${i}${t.icon?`$(git-branch)${t6.Space}${l}`:l}`;break}case"tag":a=`${t.label?"tag ":""}${t.icon?`$(tag)${t6.Space}${l}`:l}`;break;default:if(e?.refType==="stash"||e?.refType==="revision"&&e?.stashName){let o;t.expand&&e.message&&(o=`${null!=e.stashNumber?`#${e.stashNumber}: `:""}${e.message.length>20?`${e.message.substring(0,20).trimEnd()}${t6.Ellipsis}`:e.message}`),a=`${t.label?"stash ":""}${t.icon?`$(archive)${t6.Space}${o??e.name}`:o??(e.stashNumber?`#${e.stashNumber}`:e.name)}`}else if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return aC.test(e);case"qualified-double-dot":return aS.test(e);case"qualified-triple-dot":return aP.test(e);default:return ax.test(e)}}(e.ref))a=l;else{let o,r;(t.expand&&e.message&&(o=e.message.length>20?` (${e.message.substring(0,20).trimEnd()}${t6.Ellipsis})`:` (${e.message})`),t.expand&&t.label&&(i=e.ref,i&&aO.test(i)))?(l=e.name.endsWith("^")?e.name.substring(0,e.name.length-1):e.name,t?.quoted&&(l=`'${l}'`),r="before "):r="",a=`${t.label?`${r}commit `:""}${t.icon?`$(git-commit)${t6.Space}${l}${o??""}`:`${l}${o??""}`}`}}return t.capitalize&&t.expand&&!1!==t.label?(n=a,`${n[0].toLocaleUpperCase()}${n.slice(1)}`):a}var aR=Object.defineProperty,aI=Object.getOwnPropertyDescriptor,aB=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aI(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aR(t,o,n),n};let aE=class extends lit_element_i{constructor(){super(...arguments),this.conflicts=!1,this.skipCommand="gitlens.home.skipPausedOperation",this.continueCommand="gitlens.home.continuePausedOperation",this.abortCommand="gitlens.home.abortPausedOperation",this.openEditorCommand="gitlens.home.openRebaseEditor"}get onSkipUrl(){return this.createCommandLink(this.skipCommand,this.pausedOpStatus)}get onContinueUrl(){return this.createCommandLink(this.continueCommand,this.pausedOpStatus)}get onAbortUrl(){return this.createCommandLink(this.abortCommand,this.pausedOpStatus)}get onOpenEditorUrl(){return this.createCommandLink(this.openEditorCommand,this.pausedOpStatus)}createCommandLink(e,t){return null!=this.webviewCommandContext&&(t=null==t?this.webviewCommandContext:{...t,...this.webviewCommandContext}),rc(e,t)}render(){return null==this.pausedOpStatus?ex:e_`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){let t=ak[e.type];return e_`<span class="label"
				>${this.conflicts?t.conflicts:t.label}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${aA(e.incoming,{expand:!1,icon:!1})} ${t.directionality}
				${aA(e.current,{expand:!1,icon:!1})}</span
			>`}let t=e.steps.total>0,o=ak[e.type];return e_`<span class="label"
				>${this.conflicts?o.conflicts:t?o.label:o.pending}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${aA(e.incoming,{expand:!1,icon:!1})} ${o.directionality}
				${aA(e.current??e.onto,{expand:!1,icon:!1})}</span
			>${t?e_`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
					>`:ex}`}renderActions(){if(null==this.pausedOpStatus)return ex;let e=this.pausedOpStatus.type;return e_`<action-nav class="actions">
			${eM("revert"!==e&&!("rebase"===e&&this.conflicts),()=>e_`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`)}
			${eM("merge"!==e,()=>e_`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`)}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
			${eM("rebase"===e,()=>e_`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`)}
		</action-nav>`}};aE.styles=[T`
			.status {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.6rem;
				width: 100%;
				max-width: 100%;
				margin-block: 0;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
			}

			:host([conflicts]) .status {
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}

			.label {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.icon,
			.steps,
			.actions {
				flex: none;
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],aB([eL({type:Boolean,reflect:!0})],aE.prototype,"conflicts",2),aB([eL({type:Object})],aE.prototype,"pausedOpStatus",2),aB([eL()],aE.prototype,"skipCommand",2),aB([eL()],aE.prototype,"continueCommand",2),aB([eL()],aE.prototype,"abortCommand",2),aB([eL()],aE.prototype,"openEditorCommand",2),aB([eL({type:Object})],aE.prototype,"webviewCommandContext",2),aE=aB([eE("gl-merge-rebase-status")],aE);var aT=Object.defineProperty,aL=Object.getOwnPropertyDescriptor,az=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aL(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aT(t,o,n),n};let aD=class extends tD(lit_element_i){constructor(){super(...arguments),this.repoCollapsed=!0}get isPro(){return rl(this._homeState.subscription.state)}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._activeOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?ex:this._activeOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>e_`<span>Error</span>`})}renderLoader(){return e_`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._activeOverviewState.state?this.renderLoader():this.renderComplete(this._activeOverviewState.state,!0)}renderComplete(e,t=!1){let o=e?.repository,r=e?.active;if(!o||!r)return e_`<span>None</span>`;let i=this._homeState.repositories.openCount>1;return e_`
			<gl-section ?loading=${t}>
				<gl-breadcrumbs slot="heading">
					<gl-breadcrumb-item collapsibleState="none" class="heading-repo-breadcrumb"
						><gl-repo-button-group
							.repository=${o}
							?disabled=${!i}
							?hasMultipleRepositories=${i}
							.source=${{source:"graph"}}
							?expandable=${!0}
							@gl-click=${this.onRepositorySelectorClicked}
							><span slot="tooltip">
								Switch to Another Repository...
								<hr />
								${o.name}
							</span></gl-repo-button-group
						></gl-breadcrumb-item
					>
					<gl-breadcrumb-item collapsibleState="none" icon="git-branch" class="heading-branch-breadcrumb"
						>${r.name}</gl-breadcrumb-item
					>
				</gl-breadcrumbs>
				<span class="section-heading-actions" slot="heading-actions">
					<gl-button
						aria-busy="${t??ex}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Fetch All"
						href=${rc("gitlens.home.fetch",void 0)}
						><code-icon icon="repo-fetch"></code-icon
					></gl-button>
					<gl-button
						aria-busy="${t??ex}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Visualize Repo History"
						href=${rc("gitlens.visualizeHistory.repo:home",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="graph-scatter"></code-icon></gl-button
					><gl-button
						aria-busy="${t??ex}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Open in Commit Graph"
						href=${rc("gitlens.home.openInGraph",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="gl-graph"></code-icon
					></gl-button>
				</span>
				${this.renderRepoBranchCard(r,o.path,t)}
			</gl-section>
		`}renderRepoBranchCard(e,t,o){return e_`<gl-active-branch-card
			.branch=${e}
			.repo=${t}
			?busy=${o}
			?showUpgrade=${!this.isPro}
		></gl-active-branch-card>`}onRepositorySelectorClicked(e){"label"===e.detail.part&&this._activeOverviewState.changeRepository()}};aD.styles=[rh,sK,rp,T`
			[hidden] {
				display: none;
			}

			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}

			gl-repo-button-group {
				text-transform: none;
			}

			gl-section::part(header) {
				margin-block-end: 0.2rem;
			}

			.section-heading-actions {
				flex: none;
				display: flex;
				align-items: center;
			}

			.section-heading-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
				/* margin-block: -1rem; */
			}

			.section-heading-provider {
				color: inherit;
			}

			.tooltip {
				text-transform: none;
			}

			.uppercase {
				text-transform: uppercase;
			}

			gl-breadcrumbs {
				--gl-tooltip-text-transform: none;
			}

			.heading-branch-breadcrumb {
				text-transform: none;
			}
		`],az([S({context:"state",subscribe:!0}),ez()],aD.prototype,"_homeState",2),az([S({context:"activeOverviewState"})],aD.prototype,"_activeOverviewState",2),az([ez()],aD.prototype,"repoCollapsed",2),aD=az([eE("gl-active-work")],aD);let aN=class extends GlBranchCardBase{connectedCallback(){super.connectedCallback?.(),this.toggleExpanded(!0)}render(){return e_`
			${this.renderBranchIndicator()}${this.renderIssuesItem()}${this.renderBranchItem(e_`${this.renderBranchStateActions()}${this.renderBranchActions()}`)}${this.renderPrItem()}
		`}renderActionsMenu(){let e=this._homeState.orgSettings.ai&&this._homeState.aiEnabled,t=this.busy,o=this.wip?.workingTreeState,r=null!=o&&o.added+o.changed+o.deleted>0,i=[];if(e)r&&(i.push(e_`<menu-item
						?disabled=${t}
						href=${this.createCommandLink("gitlens.ai.generateCommits:home")}
						>Generate Commits with AI (Preview)</menu-item
					>`),i.push(e_`<menu-item ?disabled=${t} href=${this.createCommandLink("gitlens.ai.explainWip:home")}
						>Explain Working Changes (Preview)</menu-item
					>`)),i.push(e_`<menu-item ?disabled=${t} href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
					>Explain Branch Changes (Preview)</menu-item
				>`),r&&i.push(e_`<menu-item
						?disabled=${t}
						href=${this.createCommandLink("gitlens.home.createCloudPatch")}
						>Share as Cloud Patch</menu-item
					>`);else if(r)return e_`
				<gl-button
					aria-busy=${t??ex}
					?disabled=${t}
					href=${this.createCommandLink("gitlens.home.createCloudPatch")}
					appearance="secondary"
					tooltip="Share as Cloud Patch"
					><code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`;if(0!==i.length)return e_`<gl-popover
			appearance="menu"
			trigger="click focus"
			placement="bottom-end"
			.arrow=${!1}
			distance="0"
		>
			<gl-button slot="anchor" appearance="toolbar" tooltipPlacement="top" aria-label="Additional Actions">
				<code-icon icon="ellipsis"></code-icon>
			</gl-button>
			<div slot="content">
				<menu-label>Actions</menu-label>
				${i}
			</div>
		</gl-popover>`}renderBranchStateActions(){let{name:e,upstream:t}=this.branch,o=[],r=()=>0===o.length?this.renderActionsMenu():e_`<div><button-container>${o}${this.renderActionsMenu()}</button-container></div>`,i=this.busy,n=this.wip?.workingTreeState;if(null!=n&&n.added+n.changed+n.deleted>0&&(this._homeState.orgSettings.ai&&this._homeState.aiEnabled?o.push(e_`
					<gl-button
						aria-busy=${i??ex}
						?disabled=${i}
						href=${this.createCommandLink("gitlens.ai.generateCommitMessage",{repoPath:this.repo,source:"home"})}
						appearance="secondary"
						tooltip="Generate Message &amp; Commit via SCM..."
						><code-icon icon="sparkle" slot="prefix"></code-icon>Commit
					</gl-button>
				`):o.push(e_`
					<gl-button
						aria-busy=${i??ex}
						?disabled=${i}
						href="command:workbench.view.scm"
						appearance="secondary"
						tooltip="Commit via SCM"
						><code-icon rotate="45" icon="arrow-up" slot="suffix"></code-icon>Commit
					</gl-button>
				`)),this.wip?.pausedOpStatus!=null)return r();if(t?.missing!==!1)return o.push(e_`
				<gl-button
					aria-busy=${i??ex}
					?disabled=${i}
					href=${this.createWebviewCommandLink("gitlens.views.home.publishBranch")}
					full
					appearance="secondary"
					><code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch<span slot="tooltip"
						>Publish (push) <strong>${e}</strong> to ${t?.name??"a remote"}</span
					></gl-button
				>
			`),r();if(t?.state?.ahead||t?.state?.behind){let e=!!t.state.ahead,n=!!t.state.behind;if(e&&n){let e=t?.name?`Pull from ${t.name}`:"Pull",n=t?.name?`Force Push to ${t.name}`:"Force Push";return o.push(e_`
					<gl-button
						aria-busy=${i??ex}
						?disabled=${i}
						href=${nT("gitlens.views.home.pull","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip=${e}
						><code-icon icon="repo-pull" slot="prefix"></code-icon> Pull
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill
					></gl-button>
					<gl-button
						aria-busy=${i??ex}
						?disabled=${i}
						href=${nT("gitlens.views.home.push","gitlens.views.home","",{force:!0})}
						appearance="secondary"
						density="compact"
						tooltip=${n}
						><code-icon icon="repo-force-push"></code-icon
					></gl-button>
				`),r()}if(n){let e=t?.name?`Pull from ${t.name}`:"Pull";return o.push(e_`
					<gl-button
						aria-busy=${i??ex}
						?disabled=${i}
						href=${nT("gitlens.views.home.pull","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip=${e}
						><code-icon icon="repo-pull" slot="prefix"></code-icon> Pull
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill
					></gl-button>
				`),r()}if(e){let e=t?.name?`Push to ${t.name}`:"Push";o.push(e_`
					<gl-button
						aria-busy=${i??ex}
						?disabled=${i}
						href=${nT("gitlens.views.home.push","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip=${e}
						><code-icon icon="repo-push" slot="prefix"></code-icon> Push
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
					</gl-button>
				`)}}return r()}renderBranchIndicator(){let e=this.wip;if(e?.pausedOpStatus!=null)return e_`<gl-merge-rebase-status
			?conflicts=${e.hasConflicts}
			.pausedOpStatus=${e.pausedOpStatus}
		></gl-merge-rebase-status>`}getBranchActions(){return[]}getPrActions(){return[e_`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,e_`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,e_`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}getCollapsedActions(){return[]}renderIssuesItem(){return[...this.issues??[],...this.autolinks??[]].length?super.renderIssuesItem():this.expanded?e_`<div class="branch-item__row" full>
				<span class="branch-item__missing" full>Current work item</span>
				<gl-tooltip hoist content="Associate an issue">
					<a
						href=${this.createCommandLink("gitlens.associateIssueWithBranch",{branch:this.branch.reference,source:"home"})}
						><span class="branch-item__icon"> <issue-icon></issue-icon> </span
					></a>
				</gl-tooltip>
			</div>`:ex}};aN.styles=[rh,sK,T`
			:host {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			span.branch-item__missing {
				color: var(--vscode-descriptionForeground);
				font-style: italic;
			}

			gl-work-item {
				--gl-card-vertical-padding: 0.4rem;
			}
		`],aN=az([eE("gl-active-branch-card")],aN);var aM=Object.defineProperty,aj=Object.getOwnPropertyDescriptor,aF=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aj(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aM(t,o,n),n};let aq=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return e_`<div class="progress-bar"></div>`}};aq.styles=T`
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
	`,aF([eL({reflect:!0})],aq.prototype,"mode",2),aF([eL({type:Boolean})],aq.prototype,"active",2),aF([eL()],aq.prototype,"position",2),aq=aF([eE("progress-indicator")],aq);var aU=Object.defineProperty,aW=Object.getOwnPropertyDescriptor,aH=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aW(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aU(t,o,n),n};let aG=class extends lit_element_i{constructor(){super(...arguments),this.loading=!1,this.headingLevel="3"}render(){return e_`
			<div class="section">
				<header class="section__header" part="header">
					<div
						class="section__heading"
						role="heading"
						aria-level=${(this.headingLevel?this.headingLevel:void 0)??ex}
					>
						<slot name="heading" class="section__headline"></slot>
					</div>
					<slot name="heading-actions" class="section__actions"></slot>
					<progress-indicator class="section__loader" ?active="${this.loading}"></progress-indicator>
				</header>
				<slot></slot>
			</div>
		`}};aG.styles=[T`
			.section {
				margin-bottom: 1.2rem;
			}
			.section__header {
				position: relative;
				display: flex;
				justify-content: space-between;
				gap: 8px;
				margin-block: 0 0.8rem;
			}
			.section__heading {
				min-width: 0;
				flex: 1;
				font-size: 1.3rem;
			}
			.section__headline {
				font-weight: normal;
				text-transform: uppercase;
			}

			.section__actions {
				margin-inline-start: auto;
			}

			.section__loader {
				position: absolute;
				left: 0;
				bottom: 0;
			}
		`],aH([eL({type:Boolean})],aG.prototype,"loading",2),aH([eL({attribute:"heading-level"})],aG.prototype,"headingLevel",2),aG=aH([eE("gl-section")],aG);let aV=class extends lit_element_i{constructor(){super(...arguments),this.isFetching=!1,this.onCardExpanded=e=>{let t=e.composedPath().find(e=>e.matches("gl-branch-card"));this.toggleSiblingCardsDebounced(t)},this.toggleSiblingCardsDebounced=t0(this.toggleSiblingCards.bind(this),100)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}toggleSiblingCards(e){e?.expanded===!0&&this.branchCards.forEach(t=>{t!==e&&(t.expanded=!1)})}renderSectionLabel(){return this.isFetching||0===this.branches.length?this.label:`${this.label} (${this.branches.length})`}render(){return e_`
			<gl-section ?loading=${this.isFetching}>
				<span slot="heading">${this.renderSectionLabel()}</span>
				<span slot="heading-actions"><slot name="heading-actions"></slot></span>
				${eM(this.branches.length>0,()=>this.branches.map(e=>e_`<gl-branch-card expandable .repo=${this.repo} .branch=${e}></gl-branch-card>`),()=>e_`<p>No ${this.label} branches</p>`)}
			</gl-section>
		`}};aH([eL({type:String})],aV.prototype,"label",2),aH([eL()],aV.prototype,"repo",2),aH([eL({type:Array})],aV.prototype,"branches",2),aH([eL({type:Boolean})],aV.prototype,"isFetching",2),aH([(b="gl-branch-card",(t,o)=>eD(t,o,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll(b)}}))],aV.prototype,"branchCards",2),aV=aH([eE("gl-branch-section")],aV);var aK=Object.defineProperty,aY=Object.getOwnPropertyDescriptor,aZ=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aY(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aK(t,o,n),n};let aJ=class extends tD(lit_element_i){constructor(){super(...arguments),this._disposable=[],this._summary=tQ(void 0),this._summaryState=new AsyncComputedState(async e=>await this._ipc.sendRequest(eK,{}))}get startWorkCommand(){return rc("gitlens.home.startWork",void 0)}get createBranchCommand(){return rc("gitlens.home.createBranch",void 0)}connectedCallback(){super.connectedCallback?.(),this._disposable.push(this._ipc.onReceiveMessage(e=>{!0===to.is(e)&&this._summaryState.run(!0)})),this._summaryState.run()}disconnectedCallback(){super.disconnectedCallback?.(),this._disposable.forEach(e=>e.dispose())}render(){return e_`
			<gl-section ?loading=${"pending"===this._summaryState.computed.status}>
				<span slot="heading">Launchpad</span>
				<div class="summary">${this.renderSummaryResult()}</div>
				<button-container grouping="gap-wide">
					<gl-button full class="start-work" href=${this.startWorkCommand}>Start Work on an Issue</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						class="start-work"
						href=${this.createBranchCommand}
						tooltip="Create New Branch"
						><code-icon icon="custom-start-work"></code-icon
					></gl-button>
				</button-container>
			</gl-section>
		`}renderSummaryResult(){return!1===this._homeState.hasAnyIntegrationConnected?e_`<ul class="menu">
				<li>
					<a
						class="launchpad-action"
						href="${rc("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
					>
						<code-icon class="launchpad-action__icon" icon="plug"></code-icon>
						<span>Connect to see PRs and Issue here</span>
					</a>
				</li>
			</ul>`:this._summaryState.render({pending:()=>this.renderPending(),complete:e=>this.renderSummary(e),error:()=>e_`<ul class="menu">
					<li>Error loading summary</li>
				</ul>`})}renderPending(){return null==this._summaryState.state?e_`
				<div class="loader">
					<skeleton-loader lines="1"></skeleton-loader>
					<skeleton-loader lines="1"></skeleton-loader>
				</div>
			`:this.renderSummary(this._summaryState.state)}renderSummary(e){if(null==e)return ex;if("error"in e)return e_`<ul class="menu">
				<li>Unable to load items</li>
			</ul>`;if(0===e.total)return e_`<ul class="menu">
				<li>You are all caught up!</li>
			</ul>`;if(!e.hasGroupedItems)return e_`<ul class="menu">
				<li>No pull requests need your attention</li>
				<li>(${e.total} other pull requests)</li>
			</ul>`;let t=[];for(let o of e.groups){let r;switch(o){case"mergeable":{if(0===(r=e.mergeable?.total??0))continue;let o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"mergeable"}}))}`;t.push(e_`<li>
							<a href=${o} class="launchpad-action launchpad-action--mergable">
								<code-icon class="launchpad-action__icon" icon="rocket"></code-icon>
								<span>${op("pull request",r)} can be merged</span>
							</a>
						</li>`);break}case"blocked":{if(0===(r=e.blocked?.total??0))continue;let o=[];e.blocked.unassignedReviewers&&o.push({count:e.blocked.unassignedReviewers,message:`${e.blocked.unassignedReviewers>1?"need":"needs"} reviewers`}),e.blocked.failedChecks&&o.push({count:e.blocked.failedChecks,message:`${e.blocked.failedChecks>1?"have":"has"} failed CI checks`}),e.blocked.conflicts&&o.push({count:e.blocked.conflicts,message:`${e.blocked.conflicts>1?"have":"has"} conflicts`});let i=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"blocked"}}))}`;1===o.length?t.push(e_`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span>${op("pull request",r)} ${o[0].message}</span>
								</a>
							</li>`):t.push(e_`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span
										>${op("pull request",r)} ${r>1?"are":"is"} blocked
										(${o.map(e=>`${e.count} ${e.message}`).join(", ")})</span
									>
								</a>
							</li>`);break}case"follow-up":{if(0===(r=e.followUp?.total??0))continue;let o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"follow-up"}}))}`;t.push(e_`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="report"></code-icon>
								<span
									>${op("pull request",r)} ${r>1?"require":"requires"}
									follow-up</span
								>
							</a>
						</li>`);break}case"needs-review":{if(0===(r=e.needsReview?.total??0))continue;let o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"needs-review"}}))}`;t.push(e_`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="comment-unresolved"></code-icon>
								<span
									>${op("pull request",r)} ${r>1?"need":"needs"} your
									review</span
								>
							</a>
						</li>`)}}}return e_`<menu class="menu">${t}</menu>`}};aJ.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},aJ.styles=[rh,T`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
			.summary {
				margin-bottom: 1rem;
			}

			.menu {
				list-style: none;
				padding-inline-start: 0;
				margin-block-start: 0;
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}

			.launchpad-action {
				display: flex;
				align-items: center;
				gap: 0.6rem;
				color: inherit;
				text-decoration: none;
			}
			.launchpad-action:hover {
				text-decoration: none;
			}

			.launchpad-action:hover span {
				text-decoration: underline;
			}

			.launchpad-action__icon {
				color: var(--gl-launchpad-action-color, inherit);
			}

			.launchpad-action:hover .launchpad-action__icon {
				color: var(--gl-launchpad-action-hover-color, inherit);
			}

			.launchpad-action--mergable {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorMergeableHoverColor);
			}

			.launchpad-action--blocked {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorBlockedHoverColor);
			}

			.launchpad-action--attention {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorAttentionHoverColor);
			}

			.loader {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}
		`],aZ([S({context:"state",subscribe:!0}),ez()],aJ.prototype,"_homeState",2),aZ([S({context:"ipc"})],aJ.prototype,"_ipc",2),aJ=aZ([eE("gl-launchpad")],aJ);let aX=(e,t,o)=>{let r=new Map;for(let i=t;i<=o;i++)r.set(e[i],i);return r},aQ=tN(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let r;void 0===o?o=t:void 0!==t&&(r=t);let i=[],n=[],a=0;for(let t of e)i[a]=r?r(t,a):a,n[a]=o(t,a),a++;return{values:n,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,r]){let i=e._$AH,{values:n,keys:a}=this.dt(t,o,r);if(!Array.isArray(i))return this.ut=a,n;let l=this.ut??=[],c=[],d,h,p=0,u=i.length-1,g=0,m=n.length-1;for(;p<=u&&g<=m;)if(null===i[p])p++;else if(null===i[u])u--;else if(l[p]===a[g])c[g]=tq(i[p],n[g]),p++,g++;else if(l[u]===a[m])c[m]=tq(i[u],n[m]),u--,m--;else if(l[p]===a[m])c[m]=tq(i[p],n[m]),tF(e,c[m+1],i[p]),p++,m--;else if(l[u]===a[g])c[g]=tq(i[u],n[g]),tF(e,i[p],i[u]),u--,g++;else if(void 0===d&&(d=aX(a,g,m),h=aX(l,p,u)),d.has(l[p]))if(d.has(l[u])){let t=h.get(a[g]),o=void 0!==t?i[t]:null;if(null===o){let t=tF(e,i[p]);tq(t,n[g]),c[g]=t}else c[g]=tq(o,n[g]),tF(e,i[p],o),i[t]=null;g++}else tW(i[u]),u--;else tW(i[p]),p++;for(;g<=m;){let t=tF(e,c[m+1]);tq(t,n[g]),c[g++]=t}for(;p<=u;){let e=i[p++];null!==e&&tW(e)}return this.ut=a,((e,t=tU)=>e._$AH=t)(e,c),e$}}),a0=T`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var a1=Object.defineProperty,a2=Object.getOwnPropertyDescriptor,a5=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?a2(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&a1(t,o,n),n};let a8=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return e_` <code-icon icon="check"></code-icon> `}render(){return e_`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};a8.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},a8.styles=[a0],a5([eL({type:Boolean,reflect:!0})],a8.prototype,"disabled",2),a5([eL({type:String})],a8.prototype,"value",2),a5([eL({type:Boolean})],a8.prototype,"defaultChecked",1),a5([eL({type:Boolean,reflect:!0})],a8.prototype,"checked",2),a8=a5([eE("gl-checkbox")],a8);var a6=Object.defineProperty,a3=Object.getOwnPropertyDescriptor,a4=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?a3(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&a6(t,o,n),n};let a9=T`
	.select {
		background: none;
		outline: none;
		border: none;
		text-decoration: none !important;
		font-weight: 500;
		color: var(--color-foreground--25);
	}
	.select option {
		color: var(--vscode-foreground);
		background-color: var(--vscode-dropdown-background);
	}
	.select:not(:disabled) {
		cursor: pointer;
		color: var(--color-foreground--50);
	}
	.select:not(:disabled):focus {
		outline: 1px solid var(--color-focus-border);
	}
	.select:not(:disabled):hover {
		color: var(--vscode-foreground);
		text-decoration: underline !important;
	}
`;let GlObjectSelect=class GlObjectSelect extends GlElement{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[a9]}render(){if(this.options)return e_`
			<select .disabled=${this.disabled} class="select" @change=${e=>this.onChange?.(e)}>
				${aQ(this.options,e=>{let t=this.getValue(e),o=this.getLabel(e);return e_`<option .value="${t}" ?selected=${this.value===t}>${o}</option>`})}
			</select>
		`}};a4([eL({type:Boolean})],GlObjectSelect.prototype,"disabled",2),a4([eL({type:String})],GlObjectSelect.prototype,"value",2),a4([eL({type:Array})],GlObjectSelect.prototype,"options",2);let a7=class extends GlObjectSelect{getValue(e){return e.value}getLabel(e){return e.label}onChange(e){let t=new CustomEvent("gl-change",{detail:{threshold:e.target.value}});this.dispatchEvent(t)}};a7=a4([eE("gl-branch-threshold-filter")],a7);var le=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,lo=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lt(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&le(t,o,n),n};let lr=class extends tD(lit_element_i){constructor(){super(...arguments),this.onChangeRecentThresholdFilter=e=>{this._inactiveOverviewState.filter.stale&&this._inactiveOverviewState.filter.recent&&this._ipc.sendCommand(e6,{stale:this._inactiveOverviewState.filter.stale,recent:{...this._inactiveOverviewState.filter.recent,threshold:e.detail.threshold}})}}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._inactiveOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?ex:this._inactiveOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>e_`<span>Error</span>`})}renderLoader(){return e_`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._inactiveOverviewState.state?this.renderLoader():this.renderComplete(this._inactiveOverviewState.state,!0)}renderComplete(e,t=!1){if(null==e)return ex;let{repository:o}=e;return e_`
			<gl-branch-section
				label="recent"
				.isFetching=${t}
				.repo=${o.path}
				.branches=${e.recent}
			>
				<gl-branch-threshold-filter
					slot="heading-actions"
					@gl-change=${this.onChangeRecentThresholdFilter}
					.options=${[{value:"OneDay",label:"1 day"},{value:"OneWeek",label:"1 week"},{value:"OneMonth",label:"1 month"}]}
					.disabled=${t}
					.value=${this._inactiveOverviewState.filter.recent?.threshold}
				></gl-branch-threshold-filter>
			</gl-branch-section>
			${eM(this._inactiveOverviewState.filter.stale?.show===!0&&e.stale,()=>e_`
					<gl-branch-section
						label="stale"
						.repo=${o.path}
						.branches=${e.stale}
					></gl-branch-section>
				`)}
		`}};lr.styles=[rh,T`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
		`],lo([S({context:"state",subscribe:!0}),ez()],lr.prototype,"_homeState",2),lo([S({context:"inactiveOverviewState"})],lr.prototype,"_inactiveOverviewState",2),lo([S({context:"ipc"})],lr.prototype,"_ipc",2),lr=lo([eE("gl-overview")],lr);var li=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,ls=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ln(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&li(t,o,n),n};let la=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;let{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this._state;return!o||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return e_`
			${eM(this.blockRepoFeatures,()=>e_`
					<p>
						<code-icon icon="question"></code-icon> Features which need a repository are currently
						unavailable
					</p>
				`)}
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Setup</h2>
				<div class="nav-list__item">
					<a class="nav-list__link" href="command:gitlens.showSettingsPage" aria-label="Open GitLens Settings"
						><code-icon class="nav-list__icon" icon="gear"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open GitLens Settings">
							<span>Open GitLens Settings</span></gl-tooltip
						>
					</a>
				</div>
				${eM(!this._state.hasAnyIntegrationConnected,()=>e_`
						<div class="nav-list__item" data-integrations="none">
							<a
								class="nav-list__link"
								href="${rc("gitlens.plus.cloudIntegrations.connect",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Connect an Integration on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="gl-unplug"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Connect an Integration on GitKraken.dev"
									><span>Connect an Integration</span></gl-tooltip
								>
							</a>
						</div>
					`,()=>e_`
						<div class="nav-list__item" data-integrations="connected">
							<a
								class="nav-list__link"
								href="${rc("gitlens.plus.cloudIntegrations.manage",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Manage Integrations on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="settings"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Manage Integrations on GitKraken.dev"
									><span>Manage Integrations</span></gl-tooltip
								>
							</a>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showSettingsPage!autolinks"
						aria-label="Open Autolinks Settings"
						><code-icon class="nav-list__icon" icon="link"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Autolinks Settings"
							><span>Configure Autolinks</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Popular</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showGraph"
						aria-label="Show Commit Graph"
						data-requires="repo"
						@click=${e=>this.onRepoFeatureClicked(e)}
					>
						<code-icon class="nav-list__icon" icon="gl-graph"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commit Graph">
							<span>Commit Graph</span>
						</gl-tooltip>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showLaunchpad?%7B%22source%22%3A%22home%22%7D"
						aria-label="Open Launchpad"
						><code-icon class="nav-list__icon" icon="rocket"></code-icon
						><gl-tooltip hoist class="nav-list__group" content="Open Launchpad"
							><span class="nav-list__label">Launchpad</span
							><span class="nav-list__desc">New!</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitsView"
						aria-label="Show Commits view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commits-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commits view">
							<span>Commits</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitDetailsView"
						aria-label="Show Inspect view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commit-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Inspect view">
							<span>Inspect</span></gl-tooltip
						>
					</a>
				</div>
				${eM(this.orgAllowsDrafts,()=>e_`
						<div class="nav-list__item">
							${eM(this._state.walkthroughSupported,()=>e_` <a
										class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
										href="${rc("gitlens.openWalkthrough",{step:"streamline-collaboration",source:{source:"home",detail:"old-home"}})}"
										data-requires="repo"
										data-org-requires="drafts"
										aria-label="Open Code Suggest walkthrough"
										><code-icon class="nav-list__icon" icon="gl-code-suggestion"></code-icon
										><gl-tooltip
											hoist
											class="nav-list__group"
											content="Open Code Suggest walkthrough"
											><span class="nav-list__label">Code Suggest</span
											><span class="nav-list__desc">New!</span></gl-tooltip
										>
									</a>`)}
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								preview
							></gl-feature-badge>
						</div>
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.showDraftsView"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Show Cloud Patches view"
								><code-icon class="nav-list__icon" icon="gl-cloud-patch"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Show Cloud Patches view"
									><span class="nav-list__label">Cloud Patches</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showFileHistoryView"
						aria-label="Show File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-history-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show File History view">
							<span>File History</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showTimelineView"
						aria-label="Show Visual File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="graph-scatter"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Visual File History view">
							<span>Visual File History</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showStashesView"
						aria-label="Show Stashes view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-stashes-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Stashes view">
							<span>Stashes</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showSearchAndCompareView"
						aria-label="Show Search &amp; Compare view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-search-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Search &amp; Compare view">
							<span>Search &amp; Compare</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorkspacesView"
						aria-label="Show Cloud Workspaces view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-workspaces-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Cloud Workspaces view">
							<span>Cloud Workspaces</span></gl-tooltip
						>
					</a>
					<gl-feature-badge placement="left" class="nav-list__access" cloud preview></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorktreesView"
						aria-label="Show Worktrees view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-worktrees-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Worktrees view">
							<span>Worktrees</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Activity Bar</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:workbench.view.extension.gitlens"
						aria-label="Show GitLens Side Bar"
						><code-icon class="nav-list__icon" icon="gl-gitlens"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Side Bar"
							><span>GitLens</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.extension.gitlensInspect"
						aria-label="Show GitLens Inspect Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-gitlens-inspect"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Inspect Side Bar"
							><span>GitLens Inspect</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.scm"
						aria-label="Show GitLens Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="source-control"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Source Control Side Bar"
							><span>Source Control</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h3 class="nav-list__title t-eyebrow sticky">Commands</h3>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"command:workbench.action.quickOpen?%22>GitLens%3A%22"}
						aria-label="Show GitLens Commands"
						><code-icon class="nav-list__icon" icon="symbol-event"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Commands"
							><span>Commands</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.gitCommands"
						aria-label="Open Git Command Palette"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="symbol-color"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Git Command Palette"
							><span>Git Command Palette</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Companion Tools</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken Browser Extension"
						><code-icon class="nav-list__icon" icon="extensions"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken Browser Extension"
							><span>GitKraken Browser Extension</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken CLI"
						><code-icon class="nav-list__icon" icon="terminal"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken CLI"
							><span>GitKraken CLI</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.dev?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try GitKraken.dev"
						><code-icon class="nav-list__icon" icon="globe"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try GitKraken.dev"
							><span>GitKraken.dev</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
		`}};la.styles=[o2,o8,o4,T``],ls([eL({type:Object})],la.prototype,"badgeSource",2),ls([S({context:"state",subscribe:!0}),ez()],la.prototype,"_state",2),la=ls([eE("gl-feature-nav")],la);let ll=T`
	:host {
		/* Banner color custom properties */
		--gl-banner-primary-background: var(--vscode-sideBar-background);
		--gl-banner-secondary-background: var(--vscode-editor-background);
		--gl-banner-primary-emphasis-background: var(--vscode-button-background);
		--gl-banner-secondary-emphasis-background: var(--vscode-button-secondaryBackground);
		--gl-banner-text-color: var(--vscode-foreground);
		--gl-banner-dim-text-color: var(--vscode-descriptionForeground);
		--gl-banner-transparency: 0.5;

		/* Layout properties */
		--gl-banner-padding: 1.2rem;
		--gl-banner-gap: 0.8rem;
		--gl-banner-border-radius: 0.4rem;

		/* Button customization - use 8px horizontal padding, keep original vertical padding */
		--gl-banner-button-padding: 0.4rem 0.8rem;

		display: block;
		margin-block-end: 1.2rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		padding: var(--gl-banner-padding);
		border-radius: var(--gl-banner-border-radius);
		position: relative;
		overflow: hidden;
	}

	/* Solid display mode - same as card background */
	.banner--solid {
		background-color: var(--gl-banner-primary-background);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-background) 100%, var(--vscode-foreground) 12%);
	}

	/* Outline display mode - emphasis color outline with secondary background */
	.banner--outline {
		background-color: var(--gl-banner-secondary-background);
		border: 2px solid var(--gl-banner-primary-emphasis-background);
	}

	/* Gradient display mode - horizontal gradient from primary to secondary emphasis */
	.banner--gradient {
		background: linear-gradient(
			to right,
			var(--gl-banner-primary-emphasis-background) 0%,
			var(--gl-banner-secondary-emphasis-background) 100%
		);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-emphasis-background) 50%, var(--gl-banner-secondary-emphasis-background) 50%);
	}

	/* Gradient transparent display mode - same gradient but with transparency */
	.banner--gradient-transparent {
		background: linear-gradient(
			to right,
			color-mix(in lab, var(--gl-banner-primary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))), transparent) 0%,
			color-mix(in lab, var(--gl-banner-secondary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))), transparent) 100%
		);
		border: 1px solid color-mix(
			in lab,
			color-mix(in lab, var(--gl-banner-primary-emphasis-background) 50%, var(--gl-banner-secondary-emphasis-background) 50%) calc(100% * (1 - var(--gl-banner-transparency))),
			transparent
		);
	}

	.banner__content {
		display: flex;
		flex-direction: column;
		gap: var(--gl-banner-gap);
		align-items: center;
		text-align: center;
	}

	.banner__title {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--gl-banner-text-color);
		margin: 0;
	}

	.banner__body {
		font-size: 1em;
		color: var(--gl-banner-text-color);
		margin: 0;
		line-height: 1.4;
	}

	.banner__buttons {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.8rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	.banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-foreground: var(--gl-banner-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-padding: var(--gl-banner-button-padding);
		font-size: 1.2em;
	}

	.banner__button--secondary {
		grid-column: 3;
		justify-self: end;
		white-space: nowrap;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 10%, transparent);
	}

	/* When only primary button exists, center it across the full width */
	.banner__buttons:has(.banner__button--primary):not(:has(.banner__button--secondary)) .banner__button--primary {
		grid-column: 1 / -1;
		justify-self: center;
	}

	/* Theme-specific adjustments */

	/* Light theme: Brighten gradient colors for better contrast with dark text */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-primary-emphasis-background: color-mix(in lab, var(--vscode-button-background) 40%, #fff 60%);
		--gl-banner-secondary-emphasis-background: color-mix(in lab, var(--vscode-button-secondaryBackground) 40%, #fff 60%);
	}

	/* Override text color for high contrast light theme specifically */
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-text-color: #000;
	}

	:host-context(.vscode-dark) .banner__button--primary,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-foreground: #fff;
	}

	:host-context(.vscode-light) .banner__button--primary,
	:host-context(.vscode-high-contrast-light) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 8%, #fff 25%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 15%, #fff 35%);
		--button-foreground: #000;
	}

	/* Make banner text darker in light themes */
	:host-context(.vscode-light) .banner__body,
	:host-context(.vscode-high-contrast-light) .banner__body {
		color: color-mix(in lab, var(--gl-banner-text-color) 20%, #000 80%);
	}

	/* Strong colors for banner title - pure black/white for maximum contrast */
	:host-context(.vscode-light) .banner__title,
	:host-context(.vscode-high-contrast-light) .banner__title {
		color: #000 !important;
	}

	:host-context(.vscode-dark) .banner__title,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__title {
		color: #fff !important;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.banner__buttons {
			flex-direction: column;
			width: 100%;
		}

		.banner__button {
			width: 100%;
		}
	}

	/* More aggressive responsive layout for narrow sidebars */
	@media (max-width: 400px) {
		.banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-top: 0.8rem;
			align-items: center;
			width: 100%;
		}

		.banner__button--primary,
		.banner__button--secondary {
			grid-column: unset;
			justify-self: unset;
			width: 100%;
			max-width: 200px;
		}

		.banner__button--primary {
			order: 1;
		}

		.banner__button--secondary {
			order: 2;
		}
	}

	/* Support for custom banner buttons layout */
	:host([data-banner-buttons-layout='column']) .banner__buttons,
	.banner__buttons[data-layout='column'] {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	:host([data-banner-buttons-layout='column']) .banner__button--primary,
	:host([data-banner-buttons-layout='column']) .banner__button--secondary,
	.banner__buttons[data-layout='column'] .banner__button--primary,
	.banner__buttons[data-layout='column'] .banner__button--secondary {
		grid-column: unset;
		justify-self: unset;
		width: 100%;
		max-width: 200px;
	}
`;var lc=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,lh=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ld(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lc(t,o,n),n};let lp=class extends lit_element_i{constructor(){super(...arguments),this.display="solid"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0}}render(){return e_`
			<div part="base" class=${iN(this.classNames)}>
				${this.renderContent()}
			</div>
		`}renderContent(){return e_`
			<div class="banner__content">
				${this.bannerTitle?this.renderTitle():""}
				${this.body?this.renderBody():""}
				${this.renderButtons()}
			</div>
		`}renderTitle(){return e_`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){return e_`<div class="banner__body">${this.body}</div>`}renderButtons(){let e=this.primaryButton,t=this.secondaryButton;return e||t?e_`
			<div class="banner__buttons">
				${e?this.renderPrimaryButton():""}
				${t?this.renderSecondaryButton():""}
			</div>
		`:""}renderPrimaryButton(){return e_`
			<gl-button
				class="banner__button banner__button--primary"
				href=${this.primaryButtonHref??ex}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){return e_`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??ex}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}};lp.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lp.styles=[ll],lh([eL({reflect:!0})],lp.prototype,"display",2),lh([eL({attribute:"banner-title"})],lp.prototype,"bannerTitle",2),lh([eL()],lp.prototype,"body",2),lh([eL({attribute:"primary-button"})],lp.prototype,"primaryButton",2),lh([eL({attribute:"primary-button-href"})],lp.prototype,"primaryButtonHref",2),lh([eL({attribute:"primary-button-command"})],lp.prototype,"primaryButtonCommand",2),lh([eL({attribute:"secondary-button"})],lp.prototype,"secondaryButton",2),lh([eL({attribute:"secondary-button-href"})],lp.prototype,"secondaryButtonHref",2),lh([eL({attribute:"secondary-button-command"})],lp.prototype,"secondaryButtonCommand",2),lp=lh([eE("gl-banner")],lp);var lu=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,lm=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lg(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lu(t,o,n),n};let lb=class extends lit_element_i{get shouldShow(){return!this._state.aiAllAccessBannerCollapsed}get bodyLabel(){return this.hasAdvancedOrHigher?"Opt in now to get unlimited GitKraken AI until July 11th!":"Opt in now to try all Advanced GitLens features with unlimited GitKraken AI for FREE until July 11th!"}get primaryButtonLabel(){return"Opt In Now"}get hasAdvancedOrHigher(){var e,t,o,r;return this._state.subscription.plan&&(e=this._state.subscription.plan.actual.id,t="advanced",rr(e)-rr(t)>=0)||(o=this._state.subscription.plan.effective.id,r="advanced",rr(o)-rr(r)>=0)}render(){return this.shouldShow?e_`
			<gl-banner
				display="gradient"
				banner-title="All Access Week - now until July 11th!"
				body="${this.bodyLabel}"
				primary-button="${this.primaryButtonLabel}"
				primary-button-href="${rc("gitlens.plus.aiAllAccess.optIn",{source:"home"})}"
				secondary-button="Dismiss"
				@gl-banner-secondary-click=${this.onSecondaryClick}
			></gl-banner>
		`:ex}onSecondaryClick(){this._ipc.sendCommand(e8,void 0)}};lb.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lb.styles=[T`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}
		`],lm([S({context:"state",subscribe:!0}),ez()],lb.prototype,"_state",2),lm([S({context:"ipc",subscribe:!0}),ez()],lb.prototype,"_ipc",2),lb=lm([eE("gl-ai-all-access-banner")],lb);var lf=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,ly=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lv(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lf(t,o,n),n};let lw=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||!0===this._state.amaBannerCollapsed?ex:e_`
			<gl-card indicator="info">
				<h4>Live AMA w/ the creator of GitLens</h4>
				<p>Feb 13 @ 1pm EST &mdash; <a href="${"https://www.gitkraken.com/lp/gitlensama?utm_source=githubdiscussion&utm_medium=hyperlink&utm_campaign=GLAMA&utm_id=GLAMA"}">Register now</a></p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._state.amaBannerCollapsed=!0,this._ipc.sendCommand(e1,{section:"feb2025AmaBanner",collapsed:!0})}};lw.styles=[o2,T`
			:host {
				margin-inline: 1.2rem;
			}
			h4 {
				font-weight: normal;
				margin-block-end: 0.4em;
			}

			p {
				margin-block: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],ly([S({context:"state",subscribe:!0}),ez()],lw.prototype,"_state",2),ly([S({context:"ipc",subscribe:!0}),ez()],lw.prototype,"_ipc",2),ly([ez()],lw.prototype,"closed",2),lw=ly([eE("gl-ama-banner")],lw);var l_=Object.defineProperty,lk=Object.getOwnPropertyDescriptor,l$=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lk(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&l_(t,o,n),n};let lx=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||this._state.hasAnyIntegrationConnected||this._state.integrationBannerCollapsed?ex:e_`
			<gl-card>
				<p><strong>GitLens is better with integrations!</strong></p>
				<p>
					Connect hosting services like GitHub and issue trackers like Jira to track progress and take action
					on PRs and issues related to your branches.
				</p>
				<button-container>
					<gl-button
						appearance="secondary"
						href="${rc("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
						full
						><code-icon icon="plug"></code-icon> Connect Integrations</gl-button
					>
				</button-container>
				<gl-button slot="actions" appearance="toolbar" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._ipc.sendCommand(e1,{section:"integrationBanner",collapsed:!0})}focus(){this._button.focus()}};lx.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lx.styles=[T`
			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}
		`],l$([S({context:"state",subscribe:!0}),ez()],lx.prototype,"_state",2),l$([S({context:"ipc",subscribe:!0}),ez()],lx.prototype,"_ipc",2),l$([ez()],lx.prototype,"closed",2),l$([eN("gl-button")],lx.prototype,"_button",2),lx=l$([eE("gl-integration-banner")],lx);var lC=Object.defineProperty,lS=Object.getOwnPropertyDescriptor,lP=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lS(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lC(t,o,n),n};let lO=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}get isNewInstall(){return this._state.newInstall}render(){return!0!==this._state.previewEnabled?e_`
				<gl-tooltip placement="bottom">
					<button class="text-button text-button--end" @click=${()=>this.togglePreview()}>
						New Home View <code-icon icon="arrow-right"></code-icon>
					</button>
					<p slot="content">
						<strong>Switch to the new Home View!</strong><br />
						We've reimagined GitLens' Home to be a more helpful daily workflow tool. We're continuing to
						refine this experience and welcome your feedback.
					</p>
				</gl-tooltip>
			`:this.closed||!0===this._state.previewCollapsed?ex:e_`
			<gl-card>
				<h4 class="title">Welcome to the GitLens Home View</h4>
				<p>
					Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
					requests, all in one intuitive hub.
					<a class="feedback" href="https://help.gitkraken.com/gitlens/home-view/">Learn more</a>
				</p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss Welcome" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}togglePreview(e=!1){this._ipc.sendCommand(e0),e&&(this.closed=!0)}onClose(){this.closed=!0,this._ipc.sendCommand(e1,{section:"newHomePreview",collapsed:!0})}focus(){this._button?.focus()}};lO.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lO.styles=[o2,T`
			.title {
				margin-block-end: 0.4em;
			}

			.text-button {
				padding: 0.4rem 0.8rem;
			}

			.text-button {
				appearance: none;
				background: none;
				border: none;
				color: inherit;
				text-align: end;
				cursor: pointer;
				width: 100%;
			}
			.text-button:hover,
			.text-button:focus-within {
				background-color: var(--gl-card-background);
			}
			.text-button:focus-visible {
				${oX}
			}

			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}

			.feedback {
				white-space: nowrap;
			}

			p {
				margin-block: 0;
			}
		`],lP([S({context:"state",subscribe:!0}),ez()],lO.prototype,"_state",2),lP([S({context:"ipc",subscribe:!0}),ez()],lO.prototype,"_ipc",2),lP([ez()],lO.prototype,"closed",2),lP([eN("button")],lO.prototype,"_button",2),lO=lP([eE("gl-preview-banner")],lO);var lA=Object.defineProperty,lR=Object.getOwnPropertyDescriptor,lI=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lR(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lA(t,o,n),n};let lB=class extends lit_element_i{render(){return e_`
			<gl-promo
				.promoPromise=${this.promos.getApplicablePromo(void 0,"home")}
				.source="${{source:"home"}}"
				class="promo-banner promo-banner--eyebrow"
				id="promo"
				type="link"
			></gl-promo>
		`}};lB.styles=[T`
			:host {
				display: block;
			}
			.promo-banner {
				text-align: center;
				margin-bottom: 1rem;
			}
			.promo-banner--eyebrow {
				color: var(--color-foreground--50);
				margin-bottom: 0.2rem;
			}
			.promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}
		`],lI([S({context:"promos"})],lB.prototype,"promos",2),lB=lI([eE("gl-promo-banner")],lB);var lE=Object.defineProperty,lT=Object.getOwnPropertyDescriptor,lL=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lT(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lE(t,o,n),n};let lz=class extends GlElement{get hasAlerts(){return!0===this.alertVisibility.header||void 0}get alertVisibility(){let e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||this._state.discovering||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return e_`
			${eM(this.alertVisibility.noRepo,()=>e_`
					<div id="no-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">No repository detected</h1>
						<div class="alert__description">
							<p>
								To use GitLens, open a folder containing a git repository or clone from a URL from the
								Explorer.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Open a Folder or Repository</gl-button
								>
							</p>
							<p class="mb-0">
								If you have opened a folder with a repository, please let us know by
								<a class="one-line" href="https://github.com/gitkraken/vscode-gitlens/issues/new/choose"
									>creating an Issue</a
								>.
							</p>
						</div>
					</div>
				`)}
			${eM(this.alertVisibility.unsafeRepo,()=>e_`
					<div id="unsafe-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">Unsafe repository</h1>
						<div class="alert__description">
							<p>
								Unable to open any repositories as Git blocked them as potentially unsafe, due to the
								folder(s) not being owned by the current user.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Manage in Source Control</gl-button
								>
							</p>
						</div>
					</div>
				`)}
			${eM(this.alertVisibility.untrusted,()=>e_`
					<div id="untrusted-alert" class="alert alert--info mb-0" aria-hidden="true">
						<h1 class="alert__title">Untrusted workspace</h1>
						<div class="alert__description">
							<p>Unable to open repositories in Restricted Mode.</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.trust.manage"
									>Manage Workspace Trust</gl-button
								>
							</p>
						</div>
					</div>
				`)}
		`}};lz.styles=[o2,o8,o3,T`
			.alert {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.one-line {
				white-space: nowrap;
			}

			gl-button.is-basic {
				max-width: 300px;
				width: 100%;
			}
			gl-button.is-basic + gl-button.is-basic {
				margin-top: 1rem;
			}
		`],lL([eL({type:Boolean,reflect:!0,attribute:"has-alerts"})],lz.prototype,"hasAlerts",1),lL([S({context:"state",subscribe:!0}),ez()],lz.prototype,"_state",2),lz=lL([eE("gl-repo-alerts")],lz);var lD=Object.defineProperty,lN=Object.getOwnPropertyDescriptor,lM=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lN(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lD(t,o,n),n};let lj=class extends GlAppHost{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}createStateProvider(e,t){return this.disposables.push(this._activeOverviewState=new ActiveOverviewState(t)),this.disposables.push(this._inactiveOverviewState=new InactiveOverviewState(t)),new HomeStateProvider(this,e,t)}connectedCallback(){super.connectedCallback?.(),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case ts.is(e):this._header.show();break;case tr.is(e):this._header.refreshPromo(),this.refreshAiAllAccessPromo()}}))}render(){return e_`
			<div class="home scrollable">
				<gl-home-header class="home__header"></gl-home-header>
				${eM(!this.state?.previewEnabled,()=>e_`<gl-preview-banner></gl-preview-banner>`)}
				${eM(this.state?.amaBannerCollapsed===!1,()=>e_`<gl-ama-banner></gl-ama-banner>`)}
				<gl-repo-alerts class="home__alerts"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					${eM(this.state?.previewEnabled===!0,()=>e_`
							<gl-preview-banner></gl-preview-banner>
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-active-work></gl-active-work>
							<gl-launchpad></gl-launchpad>
							<gl-overview></gl-overview>
						`,()=>e_`
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>
						`)}
				</main>
			</div>
		`}refreshAiAllAccessPromo(){this.allAccessPromoBanner?.requestUpdate()}};lj.styles=[o8,o5,o6],lM([C({context:"activeOverviewState"})],lj.prototype,"_activeOverviewState",2),lM([C({context:"inactiveOverviewState"})],lj.prototype,"_inactiveOverviewState",2),lM([eN("gl-home-header")],lj.prototype,"_header",2),lM([eN("gl-ai-all-access-banner")],lj.prototype,"allAccessPromoBanner",2),lj=lM([eE("gl-home-app")],lj);export{lj as GlHomeApp};