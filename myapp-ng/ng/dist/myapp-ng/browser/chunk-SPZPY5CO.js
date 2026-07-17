import{$ as Le,Aa as et,Ab as Qe,Ac as rn,B as z,Ba as yt,Bb as Je,C as Ce,Ca as G,Cb as Z,Da as $,E as Re,Ea as He,Fa as ze,Ga as Ve,Ha as Ke,Ia as Ge,Ib as wt,Ic as sn,Ja as $e,Jb as Y,Jc as cn,Ka as We,Kc as dn,L as gt,La as j,Lc as ln,M as Oe,O as _t,P as ke,Pa as nt,Q as O,Qa as Ze,Ra as Ye,Sa as Xe,T as d,Tb as X,U as w,Ua as W,Ub as tn,Va as qe,W as g,X as p,Y as s,_ as Ne,a as v,cb as S,d as Ae,db as I,eb as T,f as ht,fa as M,g as y,ga as f,h as Me,hb as Et,ja as V,ka as b,l as Te,la as Kt,lb as $t,oa as tt,ob as Wt,p as P,pa as Fe,q as De,qa as Pe,qb as Zt,s as Se,ta as x,tc as en,ua as Gt,uc as C,va as Be,vc as nn,wa as B,x as vt,xa as je,xc as on,ya as K,yc as ot,za as Ue,zc as an}from"./chunk-U5A7VQ4Z.js";var at=class{_doc;constructor(o){this._doc=o}manager},xt=(()=>{class n extends at{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,a,i){return t.addEventListener(e,a,i),()=>this.removeEventListener(t,e,a,i)}removeEventListener(t,e,a,i){return t.removeEventListener(e,a,i)}static \u0275fac=function(e){return new(e||n)(p(f))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Mt=new g(""),Qt=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(r=>{r.manager=this});let a=t.filter(r=>!(r instanceof xt));this._plugins=a.slice().reverse();let i=t.find(r=>r instanceof xt);i&&this._plugins.push(i)}addEventListener(t,e,a,i){return this._findPluginFor(e).addEventListener(t,e,a,i)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(i=>i.supports(t)),!e)throw new O(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(p(Mt),p(b))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Yt="ng-app-id";function mn(n){for(let o of n)o.remove()}function un(n,o){let t=o.createElement("style");return t.textContent=n,t}function eo(n,o,t,e){let a=n.head?.querySelectorAll(`style[${Yt}="${o}"],link[${Yt}="${o}"]`);if(a)for(let i of a)i.removeAttribute(Yt),i instanceof HTMLLinkElement?e.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function qt(n,o){let t=o.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Jt=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,e,a,i={}){this.doc=t,this.appId=e,this.nonce=a,eo(t,e,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,e){for(let a of t)this.addUsage(a,this.inline,un);e?.forEach(a=>this.addUsage(a,this.external,qt))}removeStyles(t,e){for(let a of t)this.removeUsage(a,this.inline);e?.forEach(a=>this.removeUsage(a,this.external))}addUsage(t,e,a){let i=e.get(t);i?i.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,a(t,this.doc)))})}removeUsage(t,e){let a=e.get(t);a&&(a.usage--,a.usage<=0&&(mn(a.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])mn(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:a}]of this.inline)a.push(this.addElement(t,un(e,this.doc)));for(let[e,{elements:a}]of this.external)a.push(this.addElement(t,qt(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(p(f),p(B),p(et,8),p(K))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Xt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},te=/%COMP%/g;var fn="%COMP%",no=`_nghost-${fn}`,oo=`_ngcontent-${fn}`,ao=!0,io=new g("",{factory:()=>ao});function ro(n){return oo.replace(te,n)}function so(n){return no.replace(te,n)}function bn(n,o){return o.map(t=>t.replace(te,n))}var ee=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,e,a,i,r,c,l=null,m=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=r,this.ngZone=c,this.nonce=l,this.tracingService=m,this.defaultRenderer=new it(t,r,c,this.tracingService)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let a=this.getOrCreateRenderer(t,e);return a instanceof At?a.applyToHost(t):a instanceof rt&&a.applyStyles(),a}getOrCreateRenderer(t,e){let a=this.rendererByCompId,i=a.get(e.id);if(!i){let r=this.doc,c=this.ngZone,l=this.eventManager,m=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,E=this.tracingService;switch(e.encapsulation){case yt.Emulated:i=new At(l,m,e,this.appId,u,r,c,E);break;case yt.ShadowDom:return new It(l,t,e,r,c,this.nonce,E,m);case yt.ExperimentalIsolatedShadowDom:return new It(l,t,e,r,c,this.nonce,E);default:i=new rt(l,m,e,u,r,c,E);break}a.set(e.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(e){return new(e||n)(p(Qt),p(Jt),p(B),p(io),p(f),p(b),p(et),p(Ye,8))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),it=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,t,e,a){this.eventManager=o,this.doc=t,this.ngZone=e,this.tracingService=a}destroy(){}destroyNode=null;createElement(o,t){return t?this.doc.createElementNS(Xt[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(pn(o)?o.content:o).appendChild(t)}insertBefore(o,t,e){o&&(pn(o)?o.content:o).insertBefore(t,e)}removeChild(o,t){t.remove()}selectRootElement(o,t){let e=typeof o=="string"?this.doc.querySelector(o):o;if(!e)throw new O(-5104,!1);return t||(e.textContent=""),e}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,e,a){if(a){t=a+":"+t;let i=Xt[a];i?o.setAttributeNS(i,t,e):o.setAttribute(t,e)}else o.setAttribute(t,e)}removeAttribute(o,t,e){if(e){let a=Xt[e];a?o.removeAttributeNS(a,t):o.removeAttribute(`${e}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,e,a){a&(nt.DashCase|nt.Important)?o.style.setProperty(t,e,a&nt.Important?"important":""):o.style[t]=e}removeStyle(o,t,e){e&nt.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,e){o!=null&&(o[t]=e)}setValue(o,t){o.nodeValue=t}listen(o,t,e,a){if(typeof o=="string"&&(o=ot().getGlobalEventTarget(this.doc,o),!o))throw new O(5102,!1);let i=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(o,t,i)),this.eventManager.addEventListener(o,t,i,a)}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;o(t)===!1&&t.preventDefault()}}};function pn(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var It=class extends it{hostEl;sharedStylesHost;shadowRoot;constructor(o,t,e,a,i,r,c,l){super(o,a,i,c),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let m=e.styles;m=bn(e.id,m);for(let E of m){let N=document.createElement("style");r&&N.setAttribute("nonce",r),N.textContent=E,this.shadowRoot.appendChild(N)}let u=e.getExternalStyles?.();if(u)for(let E of u){let N=qt(E,a);r&&N.setAttribute("nonce",r),this.shadowRoot.appendChild(N)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,e){return super.insertBefore(this.nodeOrShadowRoot(o),t,e)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},rt=class extends it{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,t,e,a,i,r,c,l){super(o,i,r,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=a;let m=e.styles;this.styles=l?bn(l,m):m,this.styleUrls=e.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ze.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},At=class extends rt{contentAttr;hostAttr;constructor(o,t,e,a,i,r,c,l){let m=a+"-"+e.id;super(o,t,e,i,r,c,l,m),this.contentAttr=ro(m),this.hostAttr=so(m)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let e=super.createElement(o,t);return super.setAttribute(e,this.contentAttr,""),e}};var Tt=class n extends rn{supportsDOMEvents=!0;static makeCurrent(){an(new n)}onAndCancel(o,t,e,a){return o.addEventListener(t,e,a),()=>{o.removeEventListener(t,e,a)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=lo();return t==null?null:mo(t)}resetBaseElement(){st=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return sn(document.cookie,o)}},st=null;function lo(){return st=st||document.head.querySelector("base"),st?st.getAttribute("href"):null}function mo(n){return new URL(n,document.baseURI).pathname}var uo=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),hn=["alt","control","meta","shift"],po={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},fo={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},vn=(()=>{class n extends at{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,a,i){let r=n.parseEventName(e),c=n.eventCallback(r.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ot().onAndCancel(t,r.domEventName,c,i))}static parseEventName(t){let e=t.toLowerCase().split("."),a=e.shift();if(e.length===0||!(a==="keydown"||a==="keyup"))return null;let i=n._normalizeKey(e.pop()),r="",c=e.indexOf("code");if(c>-1&&(e.splice(c,1),r="code."),hn.forEach(m=>{let u=e.indexOf(m);u>-1&&(e.splice(u,1),r+=m+".")}),r+=i,e.length!=0||i.length===0)return null;let l={};return l.domEventName=a,l.fullKey=r,l}static matchEventFullKeyCode(t,e){let a=po[t.key]||t.key,i="";return e.indexOf("code.")>-1&&(a=t.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),hn.forEach(r=>{if(r!==a){let c=fo[r];c(t)&&(i+=r+".")}}),i+=a,i===e)}static eventCallback(t,e,a){return i=>{n.matchEventFullKeyCode(i,t)&&a.runGuarded(()=>e(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(p(f))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();async function bo(n,o,t){let e=v({rootComponent:n},ho(o,t));return en(e)}function ho(n,o){return{platformRef:o?.platformRef,appProviders:[...Eo,...n?.providers??[]],platformProviders:yo}}function vo(){Tt.makeCurrent()}function go(){return new Kt}function _o(){return Be(document),document}var yo=[{provide:K,useValue:dn},{provide:je,useValue:vo,multi:!0},{provide:f,useFactory:_o}];var Eo=[{provide:Ne,useValue:"root"},{provide:Kt,useFactory:go},{provide:Mt,useClass:xt,multi:!0},{provide:Mt,useClass:vn,multi:!0},ee,Jt,Qt,{provide:W,useExisting:ee},{provide:cn,useClass:uo},[]];var oi=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(e){return new(e||n)(p(f))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:function(e){let a=null;return e?a=new(e||n):a=p(xo),a},providedIn:"root"})}return n})(),xo=(()=>{class n extends wo{_doc;constructor(t){super(),this._doc=t}sanitize(t,e){if(e==null)return null;switch(t){case j.NONE:return e;case j.HTML:return $(e,"HTML")?G(e):We(this._doc,String(e)).toString();case j.STYLE:return $(e,"Style")?G(e):e;case j.SCRIPT:if($(e,"Script"))return G(e);throw new O(5200,!1);case j.URL:return $(e,"URL")?G(e):$e(String(e));case j.RESOURCE_URL:if($(e,"ResourceURL"))return G(e);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(t){return He(t)}bypassSecurityTrustStyle(t){return ze(t)}bypassSecurityTrustScript(t){return Ve(t)}bypassSecurityTrustUrl(t){return Ke(t)}bypassSecurityTrustResourceUrl(t){return Ge(t)}static \u0275fac=function(e){return new(e||n)(p(f))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ct(n){return n.buttons===0||n.detail===0}function dt(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var ne;function gn(){if(ne==null){let n=typeof document<"u"?document.head:null;ne=!!(n&&(n.createShadowRoot||n.attachShadow))}return ne}function oe(n){if(gn()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function ae(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let o=n.shadowRoot.activeElement;if(o===n)break;n=o}return n}function D(n){return n.composedPath?n.composedPath()[0]:n.target}var ie;try{ie=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ie=!1}var _=(()=>{class n{_platformId=s(K);isBrowser=this._platformId?ln(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ie)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var lt;function _n(){if(lt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>lt=!0}))}finally{lt=lt||!1}return lt}function q(n){return _n()?n:!!n.capture}function re(n,o=0){return yn(n)?Number(n):arguments.length===2?o:0}function yn(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function R(n){return n instanceof x?n.nativeElement:n}var En=new g("cdk-input-modality-detector-options"),wn={ignoreKeys:[18,17,224,91,16]},xn=650,se={passive:!0,capture:!0},In=(()=>{class n{_platform=s(_);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Me(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=D(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<xn||(this._modality.next(ct(t)?"keyboard":"mouse"),this._mostRecentTarget=D(t))};_onTouchstart=t=>{if(dt(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=D(t)};constructor(){let t=s(b),e=s(f),a=s(En,{optional:!0});if(this._options=v(v({},wn),a),this.modalityDetected=this._modality.pipe(gt(1)),this.modalityChanged=this.modalityDetected.pipe(Re()),this._platform.isBrowser){let i=s(W).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,se),i.listen(e,"mousedown",this._onMousedown,se),i.listen(e,"touchstart",this._onTouchstart,se)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mt=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(mt||{}),An=new g("cdk-focus-monitor-default-options"),Dt=q({passive:!0,capture:!0}),St=(()=>{class n{_ngZone=s(b);_platform=s(_);_inputModalityDetector=s(In);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(f);_stopInputModalityDetector=new y;constructor(){let t=s(An,{optional:!0});this._detectionMode=t?.detectionMode||mt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=D(t);for(let a=e;a;a=a.parentElement)t.type==="focus"?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=R(t);if(!this._platform.isBrowser||a.nodeType!==1)return Te();let i=oe(a)||this._document,r=this._elementInfo.get(a);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new y,rootNode:i};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=R(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let i=R(t),r=this._document.activeElement;i===r?this._getClosestElementsInfo(i).forEach(([c,l])=>this._originChanged(c,e,l)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===mt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===mt.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?xn:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),i=D(t);!a||!a.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Dt),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Dt)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(_t(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Dt),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Dt),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,i)=>{(i===t||a.checkChildren&&i.contains(t))&&e.push([i,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Io=(()=>{class n{_elementRef=s(x);_focusMonitor=s(St);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new V;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(e=>{this._focusOrigin=e,this.cdkFocusChange.emit(e)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var Ct=new WeakMap,k=(()=>{class n{_appRef;_injector=s(M);_environmentInjector=s(Le);load(t){let e=this._appRef=this._appRef||this._injector.get(Wt),a=Ct.get(e);a||(a={loaders:new Set,refs:[]},Ct.set(e,a),e.onDestroy(()=>{Ct.get(e)?.refs.forEach(i=>i.destroy()),Ct.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(on(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ot=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Rt;function Ao(){if(Rt===void 0&&(Rt=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Rt=n.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return Rt}function Fi(n){return Ao()?.createHTML(n)||n}function ce(n){return Array.isArray(n)?n:[n]}var Mn=new Set,U,kt=(()=>{class n{_platform=s(_);_nonce=s(et,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):To}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Mo(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Mo(n,o){if(!Mn.has(n))try{U||(U=document.createElement("style"),o&&U.setAttribute("nonce",o),U.setAttribute("type","text/css"),document.head.appendChild(U)),U.sheet&&(U.sheet.insertRule(`@media ${n} {body{ }}`,0),Mn.add(n))}catch(t){console.error(t)}}function To(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var de=(()=>{class n{_mediaMatcher=s(kt);_zone=s(b);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Tn(ce(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let a=Tn(ce(t)).map(r=>this._registerQuery(r).observable),i=De(a);return i=Se(i.pipe(Ce(1)),i.pipe(gt(1),z(0))),i.pipe(P(r=>{let c={matches:!1,breakpoints:{}};return r.forEach(({matches:l,query:m})=>{c.matches=c.matches||l,c.breakpoints[m]=l}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new ht(r=>{let c=l=>this._zone.run(()=>r.next(l));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(Oe(e),P(({matches:r})=>({query:t,matches:r})),_t(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tn(n){return n.map(o=>o.split(",")).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}function Do(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let o=0;o<n.addedNodes.length;o++)if(!(n.addedNodes[o]instanceof Comment))return!1;for(let o=0;o<n.removedNodes.length;o++)if(!(n.removedNodes[o]instanceof Comment))return!1;return!0}return!1}var Dn=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sn=(()=>{class n{_mutationObserverFactory=s(Dn);_observedElements=new Map;_ngZone=s(b);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=R(t);return new ht(a=>{let r=this._observeElement(e).pipe(P(c=>c.filter(l=>!Do(l))),vt(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{a.next(c)})});return()=>{r.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new y,a=this._mutationObserverFactory.create(i=>e.next(i));a&&a.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:a,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:a}=this._observedElements.get(t);e&&e.disconnect(),a.complete(),this._observedElements.delete(t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nr=(()=>{class n{_contentObserver=s(Sn);_elementRef=s(x);event=new V;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=re(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(z(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",C],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Cn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=I({type:n});static \u0275inj=w({providers:[Dn]})}return n})();var Nn=(()=>{class n{_platform=s(_);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return Co(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=So(Bo(t));if(e&&(Rn(e)===-1||!this.isVisible(e)))return!1;let a=t.nodeName.toLowerCase(),i=Rn(t);return t.hasAttribute("contenteditable")?i!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Fo(t)?!1:a==="audio"?t.hasAttribute("controls")?i!==-1:!1:a==="video"?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Po(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function So(n){try{return n.frameElement}catch{return null}}function Co(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Ro(n){let o=n.nodeName.toLowerCase();return o==="input"||o==="select"||o==="button"||o==="textarea"}function Oo(n){return No(n)&&n.type=="hidden"}function ko(n){return Lo(n)&&n.hasAttribute("href")}function No(n){return n.nodeName.toLowerCase()=="input"}function Lo(n){return n.nodeName.toLowerCase()=="a"}function Ln(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let o=n.getAttribute("tabindex");return!!(o&&!isNaN(parseInt(o,10)))}function Rn(n){if(!Ln(n))return null;let o=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}function Fo(n){let o=n.nodeName.toLowerCase(),t=o==="input"&&n.type;return t==="text"||t==="password"||o==="select"||o==="textarea"}function Po(n){return Oo(n)?!1:Ro(n)||ko(n)||n.hasAttribute("contenteditable")||Ln(n)}function Bo(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Nt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_enabled=!0;constructor(o,t,e,a,i=!1,r){this._element=o,this._checker=t,this._ngZone=e,this._document=a,this._injector=r,i||this.attachAnchors()}destroy(){let o=this._startAnchor,t=this._endAnchor;o&&(o.removeEventListener("focus",this.startAnchorListener),o.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){let t=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return o=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(o),!!e}return t.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){let t=this._getRegionBoundary("start");return t&&t.focus(o),!!t}focusLastTabbableElement(o){let t=this._getRegionBoundary("end");return t&&t.focus(o),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let t=o.children;for(let e=0;e<t.length;e++){let a=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(a)return a}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let t=o.children;for(let e=t.length-1;e>=0;e--){let a=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(a)return a}return null}_createAnchor(){let o=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add("cdk-visually-hidden"),o.classList.add("cdk-focus-trap-anchor"),o.setAttribute("aria-hidden","true"),o}_toggleAnchorTabIndex(o,t){o?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){this._injector?Xe(o,{injector:this._injector}):setTimeout(o)}},Fn=(()=>{class n{_checker=s(Nn);_ngZone=s(b);_document=s(f);_injector=s(M);constructor(){s(k).load(Ot)}create(t,e=!1){return new Nt(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),jo=(()=>{class n{_elementRef=s(x);_focusTrapFactory=s(Fn);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){s(_).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let e=t.autoCapture;e&&!e.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=ae(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",C],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",C]},exportAs:["cdkTrapFocus"],features:[Pe]})}return n})();var L=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(L||{}),On="cdk-high-contrast-black-on-white",kn="cdk-high-contrast-white-on-black",le="cdk-high-contrast-active",Pn=(()=>{class n{_platform=s(_);_hasCheckedHighContrastMode=!1;_document=s(f);_breakpointSubscription;constructor(){this._breakpointSubscription=s(de).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return L.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,a=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(a&&a.backgroundColor||"").replace(/ /g,"");switch(t.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return L.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return L.BLACK_ON_WHITE}return L.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(le,On,kn),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===L.BLACK_ON_WHITE?t.add(le,On):e===L.WHITE_ON_BLACK&&t.add(le,kn)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Uo=(()=>{class n{constructor(){s(Pn)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||n)};static \u0275mod=I({type:n});static \u0275inj=w({imports:[Cn]})}return n})();var Ho=200,Lt=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(o,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:Ho;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(o),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let t=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(ke(t=>this._pressedLetters.push(t)),z(o),vt(()=>this._pressedLetters.length>0),P(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,i=this._items[a];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Bn(n,...o){return o.length?o.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Ft=class{_items;_activeItemIndex=tt(-1);_activeItem=tt(null);_wrap=!1;_typeaheadSubscription=Ae.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,t){this._items=o,o instanceof Gt?this._itemChangesSubscription=o.changes.subscribe(e=>this._itemsChanged(e.toArray())):$t(o)&&(this._effectRef=Fe(()=>this._itemsChanged(o()),{injector:t}))}tabOut=new y;change=new y;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Lt(t,{debounceInterval:typeof o=="number"?o:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,t=10){return this._pageUpAndDown={enabled:o,delta:t},this}setActiveItem(o){let t=this._activeItem();this.updateActiveItem(o),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(o){let t=o.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(i=>!o[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(i<r?i:r-1,-1);break}else return;default:(a||Bn(o,"shiftKey"))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let t=this._getItemsArray(),e=typeof o=="number"?o:t.indexOf(o),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+o*e+t.length)%t.length,i=t[a];if(!this._skipPredicateFn(i)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,t){let e=this._getItemsArray();if(e[o]){for(;this._skipPredicateFn(e[o]);)if(o+=t,!e[o])return;this.setActiveItem(o)}}_getItemsArray(){return $t(this._items)?this._items():this._items instanceof Gt?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let t=this._activeItem();if(t){let e=o.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var me=class extends Ft{_origin="program";setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var ue={},pe=class n{_appId=s(B);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){return this._appId!=="ng"&&(o+=this._appId),ue.hasOwnProperty(o)||(ue[o]=0),`${o}${t?n._infix+"-":""}${ue[o]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var Un=" ";function zo(n,o,t){let e=Bt(n,o);t=t.trim(),!e.some(a=>a.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(Un)))}function Vo(n,o,t){let e=Bt(n,o);t=t.trim();let a=e.filter(i=>i!==t);a.length?n.setAttribute(o,a.join(Un)):n.removeAttribute(o)}function Bt(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var Hn="cdk-describedby-message",Pt="cdk-describedby-host",be=0,es=(()=>{class n{_platform=s(_);_document=s(f);_messageRegistry=new Map;_messagesContainer=null;_id=`${be++}`;constructor(){s(k).load(Ot),this._id=s(B)+"-"+be++}describe(t,e,a){if(!this._canBeDescribed(t,e))return;let i=fe(e,a);typeof e!="string"?(jn(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,a),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,e,a){if(!e||!this._isElementNode(t))return;let i=fe(e,a);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e=="string"){let r=this._messageRegistry.get(i);r&&r.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Pt}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(Pt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let a=this._document.createElement("div");jn(a,this._id),a.textContent=t,e&&a.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(fe(t,e),{messageElement:a,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(t),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(t){let e=Bt(t,"aria-describedby").filter(a=>a.indexOf(Hn)!=0);t.setAttribute("aria-describedby",e.join(" "))}_addMessageReference(t,e){let a=this._messageRegistry.get(e);zo(t,"aria-describedby",a.messageElement.id),t.setAttribute(Pt,this._id),a.referenceCount++}_removeMessageReference(t,e){let a=this._messageRegistry.get(e);a.referenceCount--,Vo(t,"aria-describedby",a.messageElement.id),t.removeAttribute(Pt)}_isElementDescribedByMessage(t,e){let a=Bt(t,"aria-describedby"),i=this._messageRegistry.get(e),r=i&&i.messageElement.id;return!!r&&a.indexOf(r)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e=="object")return!0;let a=e==null?"":`${e}`.trim(),i=t.getAttribute("aria-label");return a?!i||i.trim()!==a:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function fe(n,o){return typeof n=="string"?`${o||""}/${n}`:n}function jn(n,o){n.id||(n.id=`${Hn}-${o}-${be++}`)}var ut=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(ut||{}),jt,H;function cs(){if(H==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return H=!1,H;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)H=!0;else{let n=Element.prototype.scrollTo;n?H=!/\{\s*\[native code\]\s*\}/.test(n.toString()):H=!1}}return H}function ds(){if(typeof document!="object"||!document)return ut.NORMAL;if(jt==null){let n=document.createElement("div"),o=n.style;n.dir="rtl",o.width="1px",o.overflow="auto",o.visibility="hidden",o.pointerEvents="none",o.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",n.appendChild(t),document.body.appendChild(n),jt=ut.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,jt=n.scrollLeft===0?ut.NEGATED:ut.INVERTED),n.remove()}return jt}function ms(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Q,zn=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ps(){if(Q)return Q;if(typeof document!="object"||!document)return Q=new Set(zn),Q;let n=document.createElement("input");return Q=new Set(zn.filter(o=>(n.setAttribute("type",o),n.type===o))),Q}var Ko=new g("MATERIAL_ANIMATIONS"),Vn=null;function Go(){return s(Ko,{optional:!0})?.animationsDisabled||s(Ue,{optional:!0})==="NoopAnimations"?"di-disabled":(Vn??=s(kt).matchMedia("(prefers-reduced-motion)").matches,Vn?"reduced-motion":"enabled")}function J(){return Go()!=="enabled"}function xs(n){return n==null?"":typeof n=="string"?n:`${n}px`}function As(n){return n!=null&&`${n}`!="false"}function Ms(n,o=/\s+/){let t=[];if(n!=null){let e=Array.isArray(n)?n:`${n}`.split(o);for(let a of e){let i=`${a}`.trim();i&&t.push(i)}}return t}var A=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(A||{}),he=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=A.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},Kn=q({passive:!0,capture:!0}),ve=class{_events=new Map;addHandler(o,t,e,a){let i=this._events.get(t);if(i){let r=i.get(e);r?r.add(a):i.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Kn)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let i=a.get(t);i&&(i.delete(e),i.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,Kn)))}_delegateEventHandler=o=>{let t=D(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(i=>i.handleEvent(o))})}},pt={enterDuration:225,exitDuration:150},$o=800,Gn=q({passive:!0,capture:!0}),$n=["mousedown","touchstart"],Wn=["mouseup","mouseleave","touchend","touchcancel"],Wo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),ft=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ve;constructor(o,t,e,a,i){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=R(e)),i&&i.get(k).load(Wo)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=v(v({},pt),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let r=e.radius||Zo(o,t,a),c=o-a.left,l=t-a.top,m=i.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-r}px`,u.style.top=`${l-r}px`,u.style.height=`${r*2}px`,u.style.width=`${r*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(u);let E=window.getComputedStyle(u),N=E.transitionProperty,we=E.transitionDuration,zt=N==="none"||we==="0s"||we==="0s, 0s"||a.width===0&&a.height===0,F=new he(this,u,e,zt);u.style.transform="scale3d(1, 1, 1)",F.state=A.FADING_IN,e.persistent||(this._mostRecentTransientRipple=F);let bt=null;return!zt&&(m||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let xe=()=>{bt&&(bt.fallbackTimer=null),clearTimeout(Ie),this._finishRippleTransition(F)},Vt=()=>this._destroyRipple(F),Ie=setTimeout(Vt,m+100);u.addEventListener("transitionend",xe),u.addEventListener("transitioncancel",Vt),bt={onTransitionEnd:xe,onTransitionCancel:Vt,fallbackTimer:Ie}}),this._activeRipples.set(F,bt),(zt||!m)&&this._finishRippleTransition(F),F}fadeOutRipple(o){if(o.state===A.FADING_OUT||o.state===A.HIDDEN)return;let t=o.element,e=v(v({},pt),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",o.state=A.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=R(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,$n.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Wn.forEach(t=>{this._triggerElement.addEventListener(t,this,Gn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===A.FADING_IN?this._startFadeOutTransition(o):o.state===A.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=A.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=A.HIDDEN,t!==null&&(o.element.removeEventListener("transitionend",t.onTransitionEnd),o.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=ct(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$o;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!dt(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===A.VISIBLE||o.config.terminateOnPointerUp&&o.state===A.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&($n.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(Wn.forEach(t=>o.removeEventListener(t,this,Gn)),this._pointerUpEventsRegistered=!1))}};function Zo(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var ge=new g("mat-ripple-global-options"),Us=(()=>{class n{_elementRef=s(x);_animationsDisabled=J();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(b),e=s(_),a=s(ge,{optional:!0}),i=s(M);this._globalOptions=a||{},this._rippleRenderer=new ft(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,v(v({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,a){e&2&&X("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Yo={capture:!0},Xo=["focus","mousedown","mouseenter","touchstart"],_e="mat-ripple-loader-uninitialized",ye="mat-ripple-loader-class-name",Zn="mat-ripple-loader-centered",Ut="mat-ripple-loader-disabled",Yn=(()=>{class n{_document=s(f);_animationsDisabled=J();_globalRippleOptions=s(ge,{optional:!0});_platform=s(_);_ngZone=s(b);_injector=s(M);_eventCleanups;_hosts=new Map;constructor(){let t=s(W).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Xo.map(e=>t.listen(this._document,e,this._onInteraction,Yo)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(_e,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(ye))&&t.setAttribute(ye,e.className||""),e.centered&&t.setAttribute(Zn,""),e.disabled&&t.setAttribute(Ut,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ut,""):t.removeAttribute(Ut)}_onInteraction=t=>{let e=D(t);if(e instanceof HTMLElement){let a=e.closest(`[${_e}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(ye)),t.append(e);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??pt.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??pt.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(Ut),rippleConfig:{centered:t.hasAttribute(Zn),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},l=new ft(c,this._ngZone,e,this._platform,this._injector),m=!c.rippleDisabled;m&&l.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:l,hasSetUpEvents:m}),t.removeAttribute(_e)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var qo=["mat-icon-button",""],Qo=["*"],Jo=new g("MAT_BUTTON_CONFIG");function qn(n){return n==null?void 0:nn(n)}var Ee=(()=>{class n{_elementRef=s(x);_ngZone=s(b);_animationsDisabled=J();_config=s(Jo,{optional:!0});_focusMonitor=s(St);_cleanupClick;_renderer=s(qe);_rippleLoader=s(Yn);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(k).load(Xn);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=T({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,a){e&2&&(Zt("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),tn(a.color?"mat-"+a.color:""),X("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",C],disabled:[2,"disabled","disabled",C],ariaDisabled:[2,"aria-disabled","ariaDisabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],tabIndex:[2,"tabIndex","tabIndex",qn],_tabindex:[2,"tabindex","_tabindex",qn]}})}return n})(),ta=(()=>{class n extends Ee{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Et],attrs:qo,ngContentSelectors:Qo,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(wt(),Z(0,"span",0),Y(1),Z(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ea=new g("cdk-dir-doc",{providedIn:"root",factory:()=>s(f)}),na=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Qn(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?na.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var oa=(()=>{class n{get value(){return this.valueSignal()}valueSignal=tt("ltr");change=new V;constructor(){let t=s(ea,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Qn(e||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ht=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=I({type:n});static \u0275inj=w({})}return n})();var Jn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=I({type:n});static \u0275inj=w({imports:[Ht]})}return n})();var aa=["matButton",""],ia=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ra=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var to=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),_c=(()=>{class n extends Ee{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=sa(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?to.get(this._appearance):null,i=to.get(t);a&&e.remove(...a),e.add(...i),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Et],attrs:aa,ngContentSelectors:ra,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(wt(ia),Z(0,"span",0),Y(1),Qe(2,"span",1),Y(3,1),Je(),Y(4,2),Z(5,"span",2)(6,"span",3)),e&2&&X("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function sa(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var yc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=I({type:n});static \u0275inj=w({imports:[Jn,Ht]})}return n})();export{bo as a,oi as b,wo as c,ct as d,dt as e,ae as f,D as g,_ as h,re as i,R as j,St as k,Io as l,k as m,Ot as n,Fi as o,ce as p,kt as q,nr as r,Cn as s,Nn as t,Fn as u,jo as v,Uo as w,Bn as x,me as y,pe as z,es as A,ut as B,cs as C,ds as D,ms as E,ps as F,J as G,xs as H,As as I,Ms as J,ft as K,ge as L,Us as M,Xn as N,ta as O,oa as P,Ht as Q,Jn as R,_c as S,yc as T};
