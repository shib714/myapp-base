import{a as Ft,b as At,c as Lt,d as jt}from"./chunk-CCXS3CET.js";import{a as Fe,b as he,c as Ae,d as $,f as kt,l as Dt,m as St,p as Tt,s as Et,t as It}from"./chunk-UKO2QFIO.js";import{a as ct,b as mt,c as ut}from"./chunk-DB7SY3ZP.js";import{a as Bt,c as Ot,d as Vt,e as Nt}from"./chunk-STHTDICO.js";import"./chunk-CL5O4MLV.js";import"./chunk-CVEP5IOT.js";import{a as zt}from"./chunk-LFXRNG6Z.js";import{a as Pt,b as Rt}from"./chunk-XPNLZ7U5.js";import{G as K,I as j,M as wt,N as yt,O as Mt,P as ue,Q as pe,R as Ct,T as xt,a as lt,d as pt,e as ht,h as ce,k as q,m as _t,t as ft,u as gt,x as me,y as bt,z as vt}from"./chunk-SPZPY5CO.js";import"./chunk-MW4RWOSK.js";import{Ab as Ie,B as He,Bb as Je,C as ne,D as Se,Db as A,Eb as et,Ec as dt,Fb as C,Gb as tt,Hb as _,Ib as B,Jb as v,Kb as de,Lb as U,M as P,Mb as w,N as Te,Nb as y,O as p,Oa as h,Rb as le,Sa as Q,Sb as Pe,T as We,Ta as Xe,Tb as M,U as ie,Ub as nt,Va as ae,Vb as c,W as k,Wb as Re,Xa as Ue,Xb as it,Y as a,_a as Ze,a as xe,ac as rt,b as ze,ba as f,bc as Z,ca as g,cb as b,cc as at,d as te,da as Qe,db as oe,dc as ot,eb as Ee,fa as R,g as u,ga as V,hb as se,ja as D,jb as qe,ka as N,kc as st,l as ke,na as Ye,oa as S,p as De,pa as Ge,qb as F,rb as Y,sb as G,sc as E,ta as T,ua as re,ub as Ke,uc as L,vb as $e,w as O,wb as X,x as I,xb as d,yb as s,zb as m}from"./chunk-U5A7VQ4Z.js";var Ht=[{path:"",pathMatch:"full",redirectTo:"home",title:"Home"},{path:"home",loadComponent:()=>import("./chunk-DFKZFKWS.js").then(i=>i.Home),title:"Home"},{path:"profile-form",loadComponent:()=>import("./chunk-W3FLUNUI.js").then(i=>i.ProfileForm),title:"Profile Signal Form"},{path:"sw-app",loadComponent:()=>import("./chunk-OJ6JW4H3.js").then(i=>i.VehiclesApp),title:"SW Vehicles"},{path:"products",loadComponent:()=>import("./chunk-NJQQ77YJ.js").then(i=>i.ProductList),title:"Sgopping Cart App"},{path:"cart",loadComponent:()=>import("./chunk-AHSTTT62.js").then(i=>i.CartList),title:"Sgopping Cart"},{path:"composable-form",loadComponent:()=>import("./chunk-ZWIMQIAX.js").then(i=>i.ComposableForm),title:"Composable signal Form"}];var Wt={providers:[Ye(),ut(Ht)]};var tn=["mat-menu-item",""],nn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],rn=["mat-icon, [matMenuItemIcon]","*"];function an(i,l){i&1&&(Qe(),d(0,"svg",2),m(1,"polygon",3),s())}var on=["*"];function sn(i,l){if(i&1){let e=A();Ie(0,"div",0),tt("click",function(){f(e);let n=_();return g(n.closed.emit("click"))})("animationstart",function(n){f(e);let r=_();return g(r._onAnimationStart(n.animationName))})("animationend",function(n){f(e);let r=_();return g(r._onAnimationDone(n.animationName))})("animationcancel",function(n){f(e);let r=_();return g(r._onAnimationDone(n.animationName))}),Ie(1,"div",1),v(2),Je()()}if(i&2){let e=_();nt(e._classList),M("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),et("id",e.panelId),F("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ve=new k("MAT_MENU_PANEL"),J=(()=>{class i{_elementRef=a(T);_document=a(V);_focusMonitor=a(q);_parentMenu=a(Ve,{optional:!0});_changeDetectorRef=a(E);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new u;_focused=new u;_highlighted=!1;_triggersSubmenu=!1;constructor(){a(_t).load(yt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&C("click",function(o){return n._checkDisabled(o)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(F("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),M("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",L],disableRipple:[2,"disableRipple","disableRipple",L]},exportAs:["matMenuItem"],attrs:tn,ngContentSelectors:rn,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(B(nn),v(0),d(1,"span",0),v(2,1),s(),m(3,"div",1),Y(4,an,2,0,":svg:svg",2)),t&2&&(h(3),X("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),h(),G(n._triggersSubmenu?4:-1))},dependencies:[wt],encapsulation:2,changeDetection:0})}return i})();var dn=new k("MatMenuContent");var ln=new k("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Be="_mat-menu-enter",_e="_mat-menu-exit",H=(()=>{class i{_elementRef=a(T);_changeDetectorRef=a(E);_injector=a(R);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=K();_allItems;_directDescendantItems=new re;_classList={};_panelAnimationState="void";_animationDone=new u;_isAnimating=S(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=xe({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new D;close=this.closed;panelId=a(vt).getId("mat-menu-panel-");constructor(){let e=a(ln);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new bt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(P(this._directDescendantItems),Te(e=>O(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(P(this._directDescendantItems),Te(t=>O(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:me(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Q(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ze(xe({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===_e;(t||e===Be)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Be||e===_e)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(_e),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Be:_e)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(P(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,r){if(t&1&&de(r,dn,5)(r,J,5)(r,J,4),t&2){let o;w(o=y())&&(n.lazyContent=o.first),w(o=y())&&(n._allItems=o),w(o=y())&&(n.items=o)}},viewQuery:function(t,n){if(t&1&&U(Xe,5),t&2){let r;w(r=y())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&F("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",L],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:L(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Z([{provide:Ve,useExisting:i}])],ngContentSelectors:on,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(B(),qe(0,sn,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),cn=new k("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=a(R);return()=>Dt(i)}});var z=new WeakMap,mn=(()=>{class i{_canHaveBackdrop;_element=a(T);_viewContainerRef=a(Ze);_menuItemInstance=a(J,{optional:!0,self:!0});_dir=a(ue,{optional:!0});_focusMonitor=a(q);_ngZone=a(N);_injector=a(R);_scrollStrategy=a(cn);_changeDetectorRef=a(E);_animationsDisabled=K();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=te.EMPTY;_menuCloseSubscription=te.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=a(Ve,{optional:!0});this._parentMaterialMenu=t instanceof H?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&z.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=z.get(t);z.set(t,this),n&&n!==this&&n._closeMenu();let r=this._createOverlay(t),o=r.getConfig(),x=o.positionStrategy;this._setPosition(t,x),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof H&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(p(t.close)).subscribe(()=>{x.withLockedPosition(!1).reapplyLastPosition(),x.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof H&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(ne(1)).subscribe(()=>{t.detach(),z.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&z.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Et(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof H&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new St({positionStrategy:Tt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX==="start"?"after":"before",o=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,o)})})}_setPosition(e,t){let[n,r]=e.xPosition==="before"?["end","start"]:["start","end"],[o,x]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[we,ye]=[o,x],[Me,Ce]=[n,r],W=0;if(this._triggersSubmenu()){if(Ce=n=e.xPosition==="before"?"start":"end",r=Me=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let je=this._parentMaterialMenu.items.first;this._parentInnerPadding=je?je._getHostElement().offsetTop:0}W=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(we=o==="top"?"bottom":"top",ye=x==="top"?"bottom":"top");t.withPositions([{originX:n,originY:we,overlayX:Me,overlayY:o,offsetY:W},{originX:r,originY:we,overlayX:Ce,overlayY:o,offsetY:W},{originX:n,originY:ye,overlayX:Me,overlayY:x,offsetY:-W},{originX:r,originY:ye,overlayX:Ce,overlayY:x,offsetY:-W}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:ke(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(I(o=>this._menuOpen&&o!==this._menuItemInstance)):ke();return O(e,n,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new kt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return z.get(e)===this}_triggerIsAriaDisabled(){return L(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Ue()};static \u0275dir=Ee({type:i})}return i})(),Gt=(()=>{class i extends mn{_cleanupTouchstart;_hoverSubscription=te.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new D;onMenuOpen=this.menuOpened;menuClosed=new D;onMenuClose=this.menuClosed;constructor(){super(!0);let e=a(ae);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{ht(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){pt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=Ee({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&C("click",function(o){return n._handleClick(o)})("mousedown",function(o){return n._handleMousedown(o)})("keydown",function(o){return n._handleKeydown(o)}),t&2&&F("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[se]})}return i})();var Xt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=oe({type:i});static \u0275inj=ie({imports:[Ct,It,pe,$]})}return i})();var Ut=["*"],pn=["content"],hn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],_n=["mat-drawer","mat-drawer-content","*"];function fn(i,l){if(i&1){let e=A();d(0,"div",1),C("click",function(){f(e);let n=_();return g(n._onBackdropClicked())}),s()}if(i&2){let e=_();M("mat-drawer-shown",e._isShowingBackdrop())}}function gn(i,l){i&1&&(d(0,"mat-drawer-content"),v(1,2),s())}var bn=new k("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Zt=new k("MAT_DRAWER_CONTAINER"),ee=(()=>{class i extends he{_platform=a(ce);_changeDetectorRef=a(E);_container=a(Le);constructor(){let e=a(T),t=a(Fe),n=a(N);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Pe("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),M("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[Z([{provide:he,useExisting:i}]),se],ngContentSelectors:Ut,decls:1,vars:0,template:function(t,n){t&1&&(B(),v(0))},encapsulation:2,changeDetection:0})}return i})(),Ne=(()=>{class i{_elementRef=a(T);_focusTrapFactory=a(gt);_focusMonitor=a(q);_platform=a(ce);_ngZone=a(N);_renderer=a(ae);_interactivityChecker=a(ft);_doc=a(V);_container=a(Zt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=j(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=j(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(j(e))}_opened=S(!1);_openedVia=null;_animationStarted=new u;_animationEnd=new u;openedChange=new D(!0);_openedStream=this.openedChange.pipe(I(e=>e),De(()=>{}));openedStart=this._animationStarted.pipe(I(()=>this.opened),Se(void 0));_closedStream=this.openedChange.pipe(I(e=>!e),De(()=>{}));closedStart=this._animationStarted.pipe(I(()=>!this.opened),Se(void 0));_destroyed=new u;onPositionChanged=new D;_content;_modeChanged=new u;_injector=a(R);_changeDetectorRef=a(E);constructor(){this.openedChange.pipe(p(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!me(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),o(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",n),o=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Q(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(ne(1)).subscribe(o=>r(o?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&U(pn,5),t&2){let r;w(r=y())&&(n._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(F("align",null)("tabIndex",n.mode!=="side"?"-1":null),Pe("visibility",!n._container&&!n.opened?"hidden":null),M("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ut,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(B(),d(0,"div",1,0),v(2),s())},dependencies:[he],encapsulation:2,changeDetection:0})}return i})(),Le=(()=>{class i{_dir=a(ue,{optional:!0});_element=a(T);_ngZone=a(N);_changeDetectorRef=a(E);_animationDisabled=K();_transitionsEnabled=!1;_allDrawers;_drawers=new re;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=j(e)}_autosize=a(bn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:j(e)}_backdropOverride=null;backdropClick=new D;_start=null;_end=null;_left=null;_right=null;_destroyed=new u;_doCheckSubject=new u;_contentMargins={left:null,right:null};_contentMarginChanges=new u;get scrollable(){return this._userContent||this._content}_injector=a(R);constructor(){let e=a(ce),t=a(Ae);this._dir?.change.pipe(p(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(p(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(P(this._allDrawers),p(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(P(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(He(10),p(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(p(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(p(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(p(this._drawers.changes)).subscribe(()=>{Q({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(p(O(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,r){if(t&1&&de(r,ee,5)(r,Ne,5),t&2){let o;w(o=y())&&(n._content=o.first),w(o=y())&&(n._allDrawers=o)}},viewQuery:function(t,n){if(t&1&&U(ee,5),t&2){let r;w(r=y())&&(n._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&M("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Z([{provide:Zt,useExisting:i}])],ngContentSelectors:_n,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(B(hn),Y(0,fn,1,2,"div",0),v(1),v(2,1),Y(3,gn,2,0,"mat-drawer-content")),t&2&&(G(n.hasBackdrop?0:-1),h(3),G(n._content?-1:3))},dependencies:[ee],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return i})();var qt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=oe({type:i});static \u0275inj=ie({imports:[$,pe,$]})}return i})();var ge=class i{appTheme=S("system");themes=[{name:"light",icon:"light_mode"},{name:"dark",icon:"dark_mode"},{name:"system",icon:"desktop_windows"}];selectedTheme=st(()=>this.themes.find(l=>l.name===this.appTheme()));getThemes(){return this.themes}setTheme(l){this.appTheme.set(l)}constructor(){Ge(()=>{let l=this.appTheme(),e=l==="system"?"light dark":l;document.body.style.colorScheme=e})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=We({token:i,factory:i.\u0275fac,providedIn:"root"})};var yn=(i,l)=>l.name;function Mn(i,l){if(i&1){let e=A();d(0,"button",19),C("click",function(){let n=f(e).$implicit,r=_();return g(r.themeService.setTheme(n.name))}),d(1,"mat-icon"),c(2),s(),d(3,"span"),c(4),at(5,"titlecase"),s()()}if(i&2){let e,t=l.$implicit,n=_();M("selected-theme",((e=n.themeService.selectedTheme())==null?null:e.name)===t.name),h(2),Re(t.icon),h(2),it("",ot(5,4,t.name)," ")}}var be=class i{document=a(V);themeService=a(ge);cartService=a(zt);cartItems=this.cartService.cartItems;onThemeChange(l){this.document.body.classList.toggle("dark")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-nav"]],decls:49,vars:4,consts:[["themeMenu","matMenu"],["drawer",""],["mat-icon-button","","aria-label","nav icon-button with menu icon",3,"click"],[1,"nav-spacer"],["mat-icon-button","","routerLink","cart"],["matBadgePosition","after","matBadgeOverlap","false","matBadgeColor","primary",3,"matBadge"],["mat-icon-button","","aria-label","nav icon-button with share icon",1,"nav-icon"],["mat-icon-button","",3,"mat-menu-trigger-for"],["mat-menu-item","",3,"selected-theme"],[1,"container"],["mode","side",1,"nav-sidenav"],["role","list"],["routerLink","home","routerLinkActive","active"],["routerLink","profile-form","routerLinkActive","active"],["routerLink","composable-form","routerLinkActive","active"],["routerLink","sw-app","routerLinkActive","active"],["routerLink","products","routerLinkActive","active"],[1,"app-container",3,"click"],[1,"app-content"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1){let n=A();d(0,"mat-toolbar")(1,"button",2),C("click",function(){f(n);let o=le(23);return g(o.toggle())}),d(2,"mat-icon"),c(3,"menu"),s()(),d(4,"span"),c(5,"Signal forms, Shopping Cart in Angular 21 with unit test "),s(),m(6,"span",3),d(7,"button",4)(8,"span",5)(9,"mat-icon"),c(10,"shopping_cart"),s()()(),d(11,"button",6)(12,"mat-icon"),c(13,"logout"),s()(),d(14,"button",7)(15,"mat-icon"),c(16),s()(),d(17,"mat-menu",null,0),Ke(19,Mn,6,6,"button",8,yn),s()(),d(21,"mat-drawer-container",9)(22,"mat-drawer",10,1)(24,"mat-list",11)(25,"mat-list-item",12)(26,"mat-icon"),c(27,"home"),s(),c(28," Home"),s(),m(29,"mat-divider"),s(),d(30,"mat-list",11)(31,"mat-list-item",13),c(32,"Profile Signal Form "),s(),m(33,"mat-divider"),s(),d(34,"mat-list",11)(35,"mat-list-item",14),c(36,"Composable Signal Form "),s(),m(37,"mat-divider"),s(),d(38,"mat-list",11)(39,"mat-list-item",15),c(40,"SW Vehicle"),s(),m(41,"mat-divider"),s(),d(42,"mat-list",11)(43,"mat-list-item",16),c(44,"Shopping Cart"),s(),m(45,"mat-divider"),s()(),d(46,"mat-drawer-content",17),C("click",function(){f(n);let o=le(23);return g(o.close())}),d(47,"main",18),m(48,"router-outlet"),s()()()}if(e&2){let n,r=le(18);h(8),X("matBadge",rt(t.cartItems().length)),h(6),X("mat-menu-trigger-for",r),h(2),Re((n=t.themeService.selectedTheme())==null?null:n.icon),h(3),$e(t.themeService.getThemes())}},dependencies:[mt,ct,jt,Lt,xt,Mt,Rt,Pt,qt,Ne,Le,ee,Nt,Ot,Vt,Bt,Xt,H,J,Gt,At,Ft,dt],styles:["mat-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:start;--mat-toolbar-container-background-color: var(--mat-sys-primary);--mat-toolbar-container-text-color: var(--mat-sys-on-primary);--mat-icon-button-icon-color: var(--mat-sys-on-primary)}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.nav-sidenav[_ngcontent-%COMP%]{padding:10px;width:275px;--mat-sidenav-container-background-color: var(--mat-sys-outline-variant);--mat-sidenav-container-text-color: var(--mat-sys-on-surface)}.app-container[_ngcontent-%COMP%]{padding-left:20px;background-color:var(--mat-sys-surface)}.app-content[_ngcontent-%COMP%]{flex:1;padding:15px;background-color:var(--mat-sys-tartiary);min-height:calc(100vh - 64px)}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.selected-theme[_ngcontent-%COMP%]{--mat-menu-item-icon-color: var(--mat-sys-primary);--mat-menu-item-label-text-color: var(--mat-sys-primary)}"]})};var ve=class i{title=S("angular-21.2.3");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&m(0,"app-nav")},dependencies:[be],encapsulation:2})};lt(ve,Wt).catch(i=>console.error(i));
