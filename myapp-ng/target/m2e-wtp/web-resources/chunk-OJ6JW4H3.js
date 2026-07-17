import{a as Zt,b as Xt,d as tn}from"./chunk-CCXS3CET.js";import{a as jt,b as Wt,c as Gt,d as Qt,e as $t,f as qt}from"./chunk-S6ERIWPL.js";import{a as Ye,b as Ue}from"./chunk-GZYKFVCS.js";import{a as Kt,i as De}from"./chunk-YDQS4CIW.js";import{b as Ft,c as qe,d as Nt,f as Vt,h as Ht,i as Ke,t as zt}from"./chunk-UKO2QFIO.js";import{a as nn}from"./chunk-PGVQFJND.js";import{a as Yt}from"./chunk-VVK56JIE.js";import{a as Pe,b as Re,c as Jt,d as en,e as Oe}from"./chunk-STHTDICO.js";import"./chunk-CL5O4MLV.js";import"./chunk-CVEP5IOT.js";import{a as Ut,b as Ee}from"./chunk-XPNLZ7U5.js";import{a as ne,b as ie,c as Lt,d as ae,e as Bt,g as re,j as oe}from"./chunk-OXBLWG67.js";import{G as Se,M as $e,N as Pt,O as Rt,P as be,Q as ee,S as Ot,T as te,h as Qe,l as Mt,m as wt,r as It,x as St,y as Dt,z as Et}from"./chunk-SPZPY5CO.js";import{h as At}from"./chunk-MW4RWOSK.js";import{B as mt,Db as O,Fb as v,Gc as J,Hb as p,Hc as I,Ib as Y,Jb as U,K as pt,Kb as Z,L as ht,Lb as X,M as ye,Mb as _,Mc as kt,N as bt,Nb as g,O as ce,Oa as d,Rb as Me,Sa as Te,Sb as vt,T as Ce,Ta as ke,Tb as M,U as Q,Ub as he,Va as We,Vb as l,W as $,Wb as h,Xb as H,Y as c,_a as _t,a as ue,ac as yt,b as _e,ba as C,bc as G,ca as x,cb as b,cc as L,d as W,db as K,dc as Ge,eb as B,f as rt,fa as ze,fc as z,g as ge,gc as Ct,hb as me,ib as V,j as ot,ja as D,jb as gt,ka as de,kc as y,l as fe,mc as xt,oa as P,p as st,pb as ft,pc as Tt,qa as je,qb as R,ra as xe,rb as T,sb as k,sc as we,ta as q,tb as pe,ua as ut,ub as A,uc as w,v as lt,vb as F,vc as Ie,w as ve,wb as f,x as ct,xb as o,yb as s,z as dt,zb as u}from"./chunk-U5A7VQ4Z.js";var tt=["*"];function vn(i,a){i&1&&U(0)}var yn=["tabListContainer"],Cn=["tabList"],xn=["tabListInner"],Tn=["nextPaginator"],kn=["previousPaginator"],Mn=["content"];function wn(i,a){}var In=["tabBodyWrapper"],Sn=["tabHeader"];function Dn(i,a){}function En(i,a){if(i&1&&V(0,Dn,0,0,"ng-template",12),i&2){let e=p().$implicit;f("cdkPortalOutlet",e.templateLabel)}}function Pn(i,a){if(i&1&&l(0),i&2){let e=p().$implicit;h(e.textLabel)}}function Rn(i,a){if(i&1){let e=O();o(0,"div",7,2),v("click",function(){let n=C(e),r=n.$implicit,m=n.$index,N=p(),j=Me(1);return x(N._handleClick(r,j,m))})("cdkFocusChange",function(n){let r=C(e).$index,m=p();return x(m._tabFocusChanged(n,r))}),u(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),T(6,En,1,1,null,12)(7,Pn,1,1),s()()()}if(i&2){let e=a.$implicit,t=a.$index,n=Me(1),r=p();he(e.labelClass),M("mdc-tab--active",r.selectedIndex===t),f("id",r._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",r.fitInkBarToContent),R("tabIndex",r._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(t))("aria-selected",r.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),d(3),f("matRippleTrigger",n)("matRippleDisabled",e.disabled||r.disableRipple),d(3),k(e.templateLabel?6:7)}}function On(i,a){i&1&&U(0)}function Ln(i,a){if(i&1){let e=O();o(0,"mat-tab-body",13),v("_onCentered",function(){C(e);let n=p();return x(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){C(e);let r=p();return x(r._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){C(e);let r=p();return x(r._bodyCentered(n))}),s()}if(i&2){let e=a.$implicit,t=a.$index,n=p();he(e.bodyClass),f("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),R("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Bn=new $("MatTabContent"),An=(()=>{class i{template=c(ke);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,selectors:[["","matTabContent",""]],features:[G([{provide:Bn,useExisting:i}])]})}return i})(),Fn=new $("MatTabLabel"),sn=new $("MAT_TAB"),nt=(()=>{class i extends Ht{_closestTab=c(sn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=xe(i)))(n||i)}})();static \u0275dir=B({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[G([{provide:Fn,useExisting:i}]),me]})}return i})(),ln=new $("MAT_TAB_GROUP"),it=(()=>{class i{_viewContainerRef=c(_t);_closestTabGroup=c(ln,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ge;position=null;origin=null;isActive=!1;constructor(){c(wt).load(Pt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Vt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,r){if(t&1&&Z(r,nt,5)(r,An,7,ke),t&2){let m;_(m=g())&&(n.templateLabel=m.first),_(m=g())&&(n._explicitContent=m.first)}},viewQuery:function(t,n){if(t&1&&X(ke,7),t&2){let r;_(r=g())&&(n._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&R("id",null)},inputs:{disabled:[2,"disabled","disabled",w],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[G([{provide:sn,useExisting:i}]),je],ngContentSelectors:tt,decls:1,vars:0,template:function(t,n){t&1&&(Y(),gt(0,vn,1,0,"ng-template"))},encapsulation:2})}return i})(),Ze="mdc-tab-indicator--active",an="mdc-tab-indicator--no-transition",Xe=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(n=>n.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Nn=(()=>{class i{_elementRef=c(q);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Ze);return}let n=t.getBoundingClientRect(),r=e.width/n.width,m=e.left-n.left;t.classList.add(an),this._inkBarContentElement.style.setProperty("transform",`translateX(${m}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(an),t.classList.add(Ze),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ze)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",w]}})}return i})();var cn=(()=>{class i extends Nn{elementRef=c(q);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=xe(i)))(n||i)}})();static \u0275dir=B({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(R("aria-disabled",!!n.disabled),M("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",w]},features:[me]})}return i})(),rn={passive:!0},Vn=650,Hn=100,zn=(()=>{class i{_elementRef=c(q);_changeDetectorRef=c(we);_viewportRuler=c(qe);_dir=c(be,{optional:!0});_ngZone=c(de);_platform=c(Qe);_sharedResizeObserver=c(Kt);_injector=c(ze);_renderer=c(We);_animationsDisabled=Se();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ge;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ge;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new D;indexFocused=new D;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),rn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),rn))}ngAfterContentInit(){let e=this._dir?this._dir.change:fe("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(mt(32),ce(this._destroyed)),n=this._viewportRuler.change(150).pipe(ce(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Dt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Te(r,{injector:this._injector}),ve(e,n,t,this._items.changes,this._itemsResized()).pipe(ce(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!="function"?ot:this._items.changes.pipe(ye(this._items),bt(e=>new rt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(r=>t.next(r));return e.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),ht(1),ct(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!St(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:m}=t.elementRef.nativeElement,N,j;this._getLayoutDirection()=="ltr"?(N=r,j=N+m):(j=this._tabListInner.nativeElement.offsetWidth-r,N=j-m);let He=this.scrollDistance,at=this.scrollDistance+n;N<He?this.scrollDistance-=He-N:j>at&&(this.scrollDistance+=Math.min(j-at,N-He))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),lt(Vn,Hn).pipe(ce(ve(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:r}=this._scrollHeader(e);(r===0||r>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",w],selectedIndex:[2,"selectedIndex","selectedIndex",Ie]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),jn=(()=>{class i extends zn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Xe(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=xe(i)))(n||i)}})();static \u0275cmp=b({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,r){if(t&1&&Z(r,cn,4),t&2){let m;_(m=g())&&(n._items=m)}},viewQuery:function(t,n){if(t&1&&X(yn,7)(Cn,7)(xn,7)(Tn,5)(kn,5),t&2){let r;_(r=g())&&(n._tabListContainer=r.first),_(r=g())&&(n._tabList=r.first),_(r=g())&&(n._tabListInner=r.first),_(r=g())&&(n._nextPaginator=r.first),_(r=g())&&(n._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&M("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",w]},features:[me],ngContentSelectors:tt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(Y(),o(0,"div",5,0),v("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(m){return n._handlePaginatorPress("before",m)})("touchend",function(){return n._stopInterval()}),u(2,"div",6),s(),o(3,"div",7,1),v("keydown",function(m){return n._handleKeydown(m)}),o(5,"div",8,2),v("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),U(9),s()()(),o(10,"div",10,4),v("mousedown",function(m){return n._handlePaginatorPress("after",m)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),u(12,"div",6),s()),t&2&&(M("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),f("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),M("_mat-animation-noopable",n._animationsDisabled),d(2),R("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),M("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),f("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[$e,It],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),Wn=new $("MAT_TABS_CONFIG"),on=(()=>{class i extends Ke{_host=c(Je);_ngZone=c(de);_centeringSub=W.EMPTY;_leavingSub=W.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ye(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,selectors:[["","matTabBodyHost",""]],features:[me]})}return i})(),Je=(()=>{class i{_elementRef=c(q);_dir=c(be,{optional:!0});_ngZone=c(de);_injector=c(ze);_renderer=c(We);_diAnimationsDisabled=Se();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=W.EMPTY;_position;_previousPosition;_onCentering=new D;_beforeCentering=new D;_afterLeavingCenter=new D;_onCentered=new D(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(we);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Te(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Te(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&X(on,5)(Mn,5),t&2){let r;_(r=g())&&(n._portalHost=r.first),_(r=g())&&(n._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&R("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(o(0,"div",1,0),V(2,wn,0,0,"ng-template",2),s()),t&2&&M("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[on,Ft],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),dn=(()=>{class i{_elementRef=c(q);_changeDetectorRef=c(we);_ngZone=c(de);_tabsSubscription=W.EMPTY;_tabLabelSubscription=W.EMPTY;_tabBodySubscription=W.EMPTY;_diAnimationsDisabled=Se();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ut;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new D;focusChange=new D;animationDone=new D;selectedTabChange=new D(!0);_groupId;_isServer=!c(Qe).isBrowser;constructor(){let e=c(Wn,{optional:!0});this._groupId=c(Et).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,r)=>n.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,n=t[r];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ye(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new et;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ve(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,r){if(t&1&&Z(r,it,5),t&2){let m;_(m=g())&&(n._allTabs=m)}},viewQuery:function(t,n){if(t&1&&X(In,5)(Sn,5)(Je,5),t&2){let r;_(r=g())&&(n._tabBodyWrapper=r.first),_(r=g())&&(n._tabHeader=r.first),_(r=g())&&(n._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(R("mat-align-tabs",n.alignTabs),he("mat-"+(n.color||"primary")),vt("--mat-tab-animation-duration",n.animationDuration),M("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",w],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",w],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",w],selectedIndex:[2,"selectedIndex","selectedIndex",Ie],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ie],disablePagination:[2,"disablePagination","disablePagination",w],disableRipple:[2,"disableRipple","disableRipple",w],preserveContent:[2,"preserveContent","preserveContent",w],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[G([{provide:ln,useExisting:i}])],ngContentSelectors:tt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(Y(),o(0,"mat-tab-header",3,0),v("indexFocused",function(m){return n._focusChanged(m)})("selectFocusedIndex",function(m){return n.selectedIndex=m}),A(2,Rn,8,17,"div",4,pe),s(),T(4,On,1,0),o(5,"div",5,1),A(7,Ln,1,10,"mat-tab-body",6,pe),s()),t&2&&(f("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),ft("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),F(n._tabs),d(2),k(n._isServer?4:-1),d(),M("_mat-animation-noopable",n._animationsDisabled()),d(2),F(n._tabs))},dependencies:[jn,cn,Mt,$e,Ke,Je],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),et=class{index;tab};var mn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Q({imports:[ee]})}return i})();var se=class i{url=Yt.VEHICLE_URL;http=c(kt);vehiclesError=P("");vehicles$=this.http.get(this.url).pipe(st(a=>a.results.map(e=>_e(ue({},e),{cost_in_credits:isNaN(Number(e.cost_in_credits))?String(Math.floor(Math.random()*1e5)):e.cost_in_credits}))),pt(1),dt(a=>(this.vehiclesError.set(this.getErrorMessage(a)),fe([]))));vehicles=nn(this.vehicles$,{initialValue:[]});selectedVehicle=P(void 0);vehicleSelected(a){let e=this.vehicles().find(t=>t.name===a);this.selectedVehicle.set(e)}filmsResource=xt({params:()=>this.selectedVehicle(),loader:async({params:a})=>{if(!a||!a.films?.length)return[];let e=a.films.map(t=>fetch(t).then(n=>n.json()));return Promise.all(e)}});vehicleFilms=y(()=>this.filmsResource.value()??[]);isLoadingFilms=this.filmsResource.isLoading;filmsError=this.filmsResource.error;handleError(a){console.error(this.getErrorMessage(a))}getErrorMessage(a){return a.error instanceof ErrorEvent?`An error occurred: ${a.error.message}`:`Server returned code: ${a.status}, error message is: ${a.message}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Ce({token:i,factory:i.\u0275fac,providedIn:"root"})};var pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Q({imports:[Ye,ee,Ye]})}return i})();var S=class i{cartItems=P([]);subTotal=y(()=>this.cartItems().reduce((a,e)=>a+e.quantity*Number(e.vehicle.cost_in_credits),0));deliveryFee=y(()=>this.subTotal()<1e4?999:0);tax=y(()=>Math.round(this.subTotal()*10.75)/100);totalPrice=y(()=>this.subTotal()+this.deliveryFee()+this.tax());addToCart(a){let e=this.cartItems().findIndex(t=>t.vehicle.name===a.name);e===-1?this.cartItems.update(t=>[...t,{vehicle:a,quantity:1}]):this.cartItems.update(t=>[...t.slice(0,e),_e(ue({},t[e]),{quantity:t[e].quantity+1}),...t.slice(e+1)])}removeFromCart(a){this.cartItems.update(e=>e.filter(t=>t.vehicle.name!==a.vehicle.name))}updateInCart(a,e){this.cartItems.update(t=>t.map(n=>n.vehicle.name===a.vehicle.name?{vehicle:a.vehicle,quantity:e}:n))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Ce({token:i,factory:i.\u0275fac,providedIn:"root"})};function $n(i,a){if(i&1&&(o(0,"li"),l(1),s()),i&2){let e=a.$implicit;d(),h(e.title)}}function qn(i,a){if(i&1){let e=O();o(0,"mat-dialog-content")(1,"mat-card",0)(2,"mat-card-header")(3,"mat-card-title",1),l(4),s()(),o(5,"mat-card-content",2)(6,"span",3),l(7,"Price (credits):"),s(),o(8,"span",4),l(9),L(10,"currency"),s()(),o(11,"mat-card-content",2)(12,"span",3),l(13,"Classification:"),s(),o(14,"span",4),l(15),s()(),o(16,"mat-card-content",2)(17,"span",3),l(18,"Crew:"),s(),o(19,"span",4),l(20),s()(),o(21,"mat-card-content",2)(22,"span",3),l(23,"Passengers:"),s(),o(24,"span",4),l(25),s()(),o(26,"mat-card-content",2)(27,"span",3),l(28,"Cargo Capacity:"),s(),o(29,"span",4),l(30),s()(),o(31,"mat-card-content",2)(32,"span",3),l(33,"Films:"),s(),o(34,"span",4)(35,"ul"),A(36,$n,2,1,"li",null,pe),s()()()()(),o(38,"mat-dialog-actions")(39,"button",5),v("click",function(){let n=C(e),r=p();return x(r.addToCart(n))}),l(40,"Add to Cart "),s(),o(41,"button",6),l(42,"Close"),s()()}if(i&2){let e=a,t=p();d(4),H("Name: ",t.pageTitle()," "),d(5),h(z(10,7,e.cost_in_credits,"USD","symbol")),d(6),h(e.vehicle_class),d(5),h(e.crew),d(5),H("",e.passengers," "),d(5),h(e.cargo_capacity),d(6),F(t.vehicleFilms()),d(5),f("mat-dialog-close",!0)}}var Le=class i{errorMessage="";cartService=c(S);vehicleService=c(se);vehicle=this.vehicleService.selectedVehicle;pageTitle=y(()=>this.vehicle()?`Detail for: ${this.vehicle()?.name}`:"No vehicle selected");vehicleFilms=this.vehicleService.vehicleFilms;addToCart(a){a&&this.cartService.addToCart(a)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["vehicle-detail-dialog"]],decls:1,vars:1,consts:[["appearance","outlined"],["mat-dialog-title",""],[1,"label-value-pair"],[1,"label"],[1,"value"],["mat-flat-button","",1,"primary",3,"click"],["mat-raised-button","",1,"warn",3,"mat-dialog-close"]],template:function(e,t){if(e&1&&T(0,qn,43,11),e&2){let n;k((n=t.vehicle())?0:-1,n)}},dependencies:[qt,Wt,Gt,$t,Qt,te,Ot,pn,I,oe,ne,ae,re,ie,J],styles:[".label[_ngcontent-%COMP%]{margin-right:10px;font-weight:700}.value[_ngcontent-%COMP%]{color:gray}mat-card[_ngcontent-%COMP%]{max-width:400px}"]})};var Yn=(i,a)=>a.name;function Un(i,a){if(i&1){let e=O();o(0,"mat-list-item",2),v("click",function(){let n=C(e).$implicit,r=p();return x(r.onSelected(n.name))}),l(1),s(),u(2,"mat-divider")}if(i&2){let e,t=a.$implicit,n=p();M("active",t.name===((e=n.selectedVehicle())==null?null:e.name)),d(),H(" ",t.name," ")}}function Zn(i,a){if(i&1&&(o(0,"div",1),l(1),s()),i&2){let e=p();d(),h(e.errorMessage())}}var Be=class i{pageTitle="Swapi Vehicles";vehicleService=c(se);dialog=c(jt);vehicles=this.vehicleService.vehicles;selectedVehicle=this.vehicleService.selectedVehicle;errorMessage=this.vehicleService.vehiclesError;onSelected(a){this.vehicleService.vehicleSelected(a),this.showDialog()}showDialog(){this.dialog.open(Le,{width:"400px"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["vehicle-list"]],decls:6,vars:2,consts:[[1,"page-title"],[1,"alert","alert-danger"],[3,"click"]],template:function(e,t){e&1&&(o(0,"h1",0),l(1),s(),o(2,"mat-list"),A(3,Un,3,3,null,null,Yn),s(),T(5,Zn,2,1,"div",1)),e&2&&(d(),h(t.pageTitle),d(2),F(t.vehicles()),d(2),k(t.errorMessage()?5:-1))},dependencies:[I,Oe,Jt,en,Pe,Ee,te,tn,Re],styles:[".active[_ngcontent-%COMP%]{background-color:#0000000a;font-weight:700}.page-title[_ngcontent-%COMP%]{padding:16px;margin:0}.alert-danger[_ngcontent-%COMP%]{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb;padding:12px;margin:16px;border-radius:4px}"]})};var un=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Q({imports:[zt,Ue,ee,Nt,De,Ue]})}return i})();function Xn(i,a){if(i&1){let e=O();o(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),l(3,"Cart Item"),s(),u(4,"span",1),o(5,"button",2),v("click",function(){C(e);let n=p();return x(n.onRemove())}),o(6,"mat-icon"),l(7,"delete"),s()()(),o(8,"mat-card-content",3)(9,"span",4),l(10,"Name:"),s(),o(11,"span",5),l(12),s()(),o(13,"mat-card-content",3)(14,"span",4),l(15," Class: "),s(),o(16,"span",5),l(17),s()(),o(18,"mat-card-content",3)(19,"span",4),l(20,"Price (credits):"),s(),o(21,"span",5),l(22),L(23,"currency"),s()(),o(24,"mat-card-content",3)(25,"span",4),l(26,"Quantity:"),s(),o(27,"span",5)(28,"button",6),v("click",function(){C(e);let n=p();return x(n.decrementItem())}),o(29,"mat-icon"),l(30,"remove"),s()(),o(31,"span"),l(32),s(),o(33,"button",7),v("click",function(){C(e);let n=p();return x(n.incrementItem())}),o(34,"mat-icon"),l(35,"add"),s()()()(),o(36,"mat-card-content",3)(37,"span",4),l(38,"Cost:"),s(),o(39,"span",5),l(40),L(41,"currency"),s()()()}if(i&2){let e=a,t=p();d(12),h(e.vehicle.name),d(5),h(e.vehicle.vehicle_class),d(5),h(z(23,6,t.price(),"USD","symbol")),d(6),f("disabled",e.quantity===1),d(4),h(e.quantity),d(8),h(z(41,10,t.exPrice(),"USD","symbol"))}}var Ae=class i{cartService=c(S);item=Tt.required();qtyArr=P([1,2,3,4,5,6,7,8]);price=y(()=>{let a=this.item().vehicle.cost_in_credits,e=Number(a);return isNaN(e)?0:e});exPrice=y(()=>this.item().quantity*this.price());onSelectionChange(a){this.cartService.updateInCart(this.item(),Number(a))}onRemove(){this.cartService.removeFromCart(this.item())}removeItem(){this.cartService.removeFromCart(this.item())}incrementItem(){this.cartService.updateInCart(this.item(),this.item().quantity+1)}decrementItem(){this.cartService.updateInCart(this.item(),this.item().quantity-1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["cart-item"]],inputs:{item:[1,"item"]},decls:1,vars:1,consts:[["appearance","filled"],[1,"spacer"],["mat-icon-button","","color","warn","aria-label","nav icon-button with delete icon",3,"click"],[1,"label-value-pair"],[1,"label"],[1,"value"],["mat-icon-button","",3,"click","disabled"],["mat-icon-button","",3,"click"]],template:function(e,t){if(e&1&&T(0,Xn,42,14,"mat-card",0),e&2){let n;k((n=t.item())?0:-1,n)}},dependencies:[I,oe,ne,ae,re,ie,At,De,te,Rt,Ee,Ut,un,J],styles:["mat-card[_ngcontent-%COMP%]{margin:10px auto;padding:15px;font-size:14px}mat-card-title[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.label-value-pair[_ngcontent-%COMP%]{padding:4px 0}.label[_ngcontent-%COMP%]{margin-right:10px;font-weight:700}.value[_ngcontent-%COMP%]{color:gray;align-self:flex-end}"]})};var Jn=(i,a)=>a.vehicle.name;function ei(i,a){if(i&1&&u(0,"cart-item",0),i&2){let e=a.$implicit;f("item",e)}}var Fe=class i{cartService=c(S);cartItems=this.cartService.cartItems;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["cart-list"]],decls:2,vars:0,consts:[[3,"item"]],template:function(e,t){e&1&&A(0,ei,1,1,"cart-item",0,Jn),e&2&&F(t.cartItems())},dependencies:[I,Ae,Oe],encapsulation:2})};function ti(i,a){if(i&1&&(o(0,"dd",5),l(1),L(2,"currency"),s()),i&2){let e=p(2);d(),h(z(2,1,e.deliveryFee(),"USD","symbol"))}}function ni(i,a){i&1&&(o(0,"dd",6),l(1,"Free"),s())}function ii(i,a){if(i&1&&(o(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title-group")(3,"mat-card-title",1),l(4,"Order summary"),s(),o(5,"mat-card-subtitle"),l(6),s(),o(7,"mat-card-subtitle"),l(8),s()(),u(9,"mat-divider"),s(),o(10,"mat-card-content",2)(11,"div",3)(12,"dl",4)(13,"dt"),l(14,"Original price"),s(),o(15,"dd",5),l(16),L(17,"currency"),s()(),o(18,"dl")(19,"dt",4),l(20,"Delivery Fee"),s(),T(21,ti,3,5,"dd",5)(22,ni,2,0,"dd",6),s(),o(23,"dl")(24,"dt",4),l(25,"Tax"),s(),o(26,"dd",5),l(27),L(28,"currency"),s()()(),u(29,"mat-divider"),o(30,"div",7)(31,"dl")(32,"dt"),l(33,"Total"),s(),o(34,"dd"),l(35),L(36,"currency"),s()()()()()),i&2){let e=p();d(6),H("Total Items: ",e.cartItems().length),d(2),H("Total Quantity: ",e.cartCount()),d(8),h(Ge(17,6,e.subTotal())),d(5),k(e.deliveryFee()?21:e.deliveryFee()?-1:22),d(6),h(Ge(28,8,e.tax())),d(8),h(z(36,10,e.totalPrice(),"USD","symbol"))}}function ai(i,a){i&1&&(o(0,"p",0),l(1," No items in cart"),s())}function ri(i,a){i&1&&l(0,` No items in cart
`)}var Ne=class i{cartService=c(S);cartItems=this.cartService.cartItems;subTotal=this.cartService.subTotal;deliveryFee=this.cartService.deliveryFee;tax=this.cartService.tax;totalPrice=this.cartService.totalPrice;cartCount=y(()=>this.cartService.cartItems().reduce((a,e)=>a+e.quantity,0));static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["cart-total"]],decls:4,vars:1,consts:[["noItems",""],[1,"text-center"],[1,"label-value-pair"],[1,"summary-list"],[1,"label"],[1,"value"],[1,"value",2,"color","red"],[1,"summary-total"]],template:function(e,t){e&1&&(T(0,ii,37,14,"mat-card")(1,ai,2,0,"p",0),V(2,ri,1,0,"ng-template",null,0,Ct)),e&2&&k(t.cartItems().length?0:1)},dependencies:[I,oe,ne,ae,re,Bt,ie,Lt,Re,Pe,J],styles:["[_nghost-%COMP%]{display:block}mat-card-title.text-center[_ngcontent-%COMP%]{margin:0 auto;padding:.5rem 0}.summary-list[_ngcontent-%COMP%], .summary-total[_ngcontent-%COMP%]{padding:1rem 0}.summary-list[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], .summary-total[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:.5rem 0;font-size:1rem}.summary-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#666}.summary-total[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .summary-total[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{font-weight:700;font-size:1.1rem}.text-green[_ngcontent-%COMP%]{color:#28a745}.summary-actions[_ngcontent-%COMP%]{justify-content:flex-end;gap:.5rem;padding:1rem!important}mat-card[_ngcontent-%COMP%]{margin:10px auto;padding:15px;font-size:14px}mat-card-title[_ngcontent-%COMP%]{font-size:14px;font-weight:700}mat-cart-subtitle[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.label-value-pair[_ngcontent-%COMP%]{padding:4px 0}.label[_ngcontent-%COMP%]{margin-right:10px;font-weight:700}.value[_ngcontent-%COMP%]{color:gray;align-self:flex-end}"]})};var Ve=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["cart-shell"]],decls:5,vars:0,consts:[[1,"content","responsive-grid"],[1,"flex-row"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div")(2,"div",1),u(3,"cart-list")(4,"cart-total"),s()()())},dependencies:[Fe,Ne],styles:[".responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:1rem}.flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}"]})};function oi(i,a){if(i&1&&(o(0,"span",5),l(1,"Cart"),s()),i&2){let e=p();f("matBadge",yt(e.cartCount()>0?e.cartCount():""))}}var _n=class i{pageTitle=P("Star Wars Vehicle for Sales");cartService=c(S);cartCount=y(()=>this.cartService.cartItems().reduce((a,e)=>a+e.quantity,0));static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["sw-app"]],decls:10,vars:1,consts:[[1,"responsive-grid"],[1,"flex-row"],["animationDuration","0ms","mat-stretch-tabs","false","mat-align-tabs","start"],["label","Vehicle List"],["mat-tab-label",""],["matBadgePosition","after","matBadgeOverlap","false","matBadgeColor","primary",3,"matBadge"]],template:function(e,t){e&1&&(o(0,"h2"),l(1),s(),o(2,"div",0)(3,"div",1)(4,"mat-tab-group",2)(5,"mat-tab",3),u(6,"vehicle-list"),s(),o(7,"mat-tab"),V(8,oi,2,2,"ng-template",4),u(9,"cart-shell"),s()()()()),e&2&&(d(),h(t.pageTitle()))},dependencies:[I,mn,nt,it,dn,Xt,Zt,Ve,Be],encapsulation:2})};export{_n as VehiclesApp};
