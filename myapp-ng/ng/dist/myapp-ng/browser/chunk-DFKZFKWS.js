import{a as De,b as Ae,d as ze,e as Be}from"./chunk-AAKEDZAU.js";import{a as ke,b as Ie,c as He,d as Oe,e as Fe,f as Ne}from"./chunk-S6ERIWPL.js";import{h as Re,i as je}from"./chunk-YDQS4CIW.js";import{f as Pe,i as Se,j as Te}from"./chunk-UKO2QFIO.js";import{a as F}from"./chunk-CL5O4MLV.js";import{a as fe,b as be,d as _e,e as ye,f as ve,g as Me,h as we,i as Ee,j as Ce}from"./chunk-OXBLWG67.js";import{G as ge,N as ue,Q as xe,S as H,T as O,k as ce,m as me,x as he,z as I}from"./chunk-SPZPY5CO.js";import"./chunk-MW4RWOSK.js";import{Ab as C,Bb as B,C as W,Cb as oe,Fb as D,Ib as L,Jb as g,Kb as re,Lb as se,M as K,Mb as A,Nb as P,Oa as m,Sb as de,Ta as J,Tb as S,U as M,Va as $,Vb as s,W as u,Y as r,_a as ee,bc as T,cb as h,d as v,da as Z,db as w,eb as x,g as R,ga as X,hb as ne,ib as te,j as q,ja as p,ka as G,nc as le,oa as Y,qa as j,qb as E,rb as ae,sb as ie,sc as k,ta as z,uc as y,vc as pe,w as U,wb as _,x as b,xb as o,yb as i,zb as c}from"./chunk-U5A7VQ4Z.js";var Le=new u("CdkAccordion");var Qe=(()=>{class t{accordion=r(Le,{optional:!0,skipSelf:!0});_changeDetectorRef=r(k);_expansionDispatcher=r(F);_openCloseAllSubscription=v.EMPTY;closed=new p;opened=new p;destroyed=new p;expandedChange=new p;id=r(I).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Y(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",y],disabled:[2,"disabled","disabled",y]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[T([{provide:Le,useValue:void 0}])]})}return t})(),Ve=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=w({type:t});static \u0275inj=M({})}return t})();var en=["body"],nn=["bodyWrapper"],tn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],an=["mat-expansion-panel-header","*","mat-action-row"];function on(t,f){}var rn=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],sn=["mat-panel-title","mat-panel-description","*"];function dn(t,f){t&1&&(C(0,"span",1),Z(),C(1,"svg",2),oe(2,"path",3),B()())}var qe=new u("MAT_ACCORDION"),Ue=new u("MAT_EXPANSION_PANEL"),ln=(()=>{class t{_template=r(J);_expansionPanel=r(Ue,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),We=new u("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),V=(()=>{class t extends Qe{_viewContainerRef=r(ee);_animationsDisabled=ge();_document=r(X);_ngZone=r(G);_elementRef=r(z);_renderer=r($);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new p;afterCollapse=new p;_inputChanges=new R;accordion=r(qe,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=r(I).getId("mat-expansion-panel-header-");constructor(){super();let e=r(We,{optional:!0});this._expansionDispatcher=r(F),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(K(null),b(()=>this.expanded&&!this._portal),W(1)).subscribe(()=>{this._portal=new Pe(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=h({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,l){if(n&1&&re(l,ln,5),n&2){let d;A(d=P())&&(a._lazyContent=d.first)}},viewQuery:function(n,a){if(n&1&&se(en,5)(nn,5),n&2){let l;A(l=P())&&(a._body=l.first),A(l=P())&&(a._bodyWrapper=l.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,a){n&2&&S("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",y],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[T([{provide:qe,useValue:void 0},{provide:Ue,useExisting:t}]),ne,j],ngContentSelectors:an,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){n&1&&(L(tn),g(0),o(1,"div",2,0)(3,"div",3,1)(5,"div",4),g(6,1),te(7,on,0,0,"ng-template",5),i(),g(8,2),i()()),n&2&&(m(),E("inert",a.expanded?null:""),m(2),_("id",a.id),E("aria-labelledby",a._headerId),m(4),_("cdkPortalOutlet",a._portal))},dependencies:[Se],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ke=(()=>{class t{panel=r(V,{host:!0});_element=r(z);_focusMonitor=r(ce);_changeDetectorRef=r(k);_parentChangeSubscription=v.EMPTY;constructor(){r(me).load(ue);let e=this.panel,n=r(We,{optional:!0}),a=r(new le("tabindex"),{optional:!0}),l=e.accordion?e.accordion._stateChanges.pipe(b(d=>!!(d.hideToggle||d.togglePosition))):q;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=U(e.opened,e.closed,l,e._inputChanges.pipe(b(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(b(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:he(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=h({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,a){n&1&&D("click",function(){return a._toggle()})("keydown",function(d){return a._keydown(d)}),n&2&&(E("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),de("height",a._getHeaderHeight()),S("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:pe(e)]},ngContentSelectors:sn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,a){n&1&&(L(rn),C(0,"span",0),g(1),g(2,1),g(3,2),B(),ae(4,dn,3,0,"span",1)),n&2&&(S("mat-content-hide-toggle",!a._showToggle()),m(4),ie(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})(),Ze=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return t})(),Xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})();var Ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=w({type:t});static \u0275inj=M({imports:[Ve,Te,xe]})}return t})();var N=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-sample-dialog"]],decls:7,vars:1,consts:[["mat-dialog-title",""],["mat-raised-button","",3,"mat-dialog-close"]],template:function(e,n){e&1&&(o(0,"h1",0),s(1,"Dialog title"),i(),o(2,"mat-dialog-content"),s(3,` This is just a sample dialog. Click close to dismiss!
`),i(),o(4,"mat-dialog-actions")(5,"button",1),s(6,"Close"),i()()),e&2&&(m(5),_("mat-dialog-close",!0))},dependencies:[Ne,Ie,He,Fe,Oe,O,H],encapsulation:2})};var Ye=class t{dialog=r(ke);showDialog(){this.dialog.open(N,{width:"500px"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-home"]],decls:58,vars:0,consts:[[1,"app-content","responsive-grid"],[1,"flex-row"],["mat-flat-button","",3,"click"],["mat-flat-button","",1,"accent"],["mat-flat-button","",1,"warn"],["appearance","outline"],["matInput","","placeholder","Enter some information"],["hideToggle",""],["appearance","outlined",1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu"],["mat-button",""]],template:function(e,n){e&1&&(o(0,"h2"),s(1,"Material Theming Example"),i(),o(2,"div",0)(3,"div")(4,"h3"),s(5,"Buttons"),i(),o(6,"div",1)(7,"button",2),D("click",function(){return n.showDialog()}),s(8,"Open"),i(),o(9,"button",3),s(10,"Accent"),i(),o(11,"button",4),s(12,"Warn"),i()(),c(13,"br")(14,"br"),o(15,"h3"),s(16,"Input Field"),i(),o(17,"mat-form-field",5),c(18,"input",6),i(),c(19,"br")(20,"br"),o(21,"h3"),s(22,"Checkbox"),i(),o(23,"mat-checkbox"),s(24,"Check this box!"),i(),c(25,"br")(26,"br"),o(27,"h3"),s(28,"Expansion panel"),i(),o(29,"mat-expansion-panel",7)(30,"mat-expansion-panel-header")(31,"mat-panel-title"),s(32," Expansion title "),i(),o(33,"mat-panel-description"),s(34," This is a summary of the content "),i()(),o(35,"p"),s(36,"This is the primary content of the panel."),i()(),c(37,"br")(38,"br"),i(),o(39,"div")(40,"h3"),s(41,"A card"),i(),o(42,"mat-card",8)(43,"mat-card-header"),c(44,"div",9),o(45,"mat-card-title"),s(46,"Shiba Inu"),i(),o(47,"mat-card-subtitle"),s(48,"Dog Breed"),i()(),c(49,"img",10),o(50,"mat-card-content")(51,"p"),s(52," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),i()(),o(53,"mat-card-actions")(54,"button",11),s(55,"LIKE"),i(),o(56,"button",11),s(57,"SHARE"),i()()()()())},dependencies:[O,H,Ce,fe,ve,Ee,_e,Me,we,ye,be,je,Re,Be,ze,Ae,De,Ge,V,Ke,Xe,Ze],styles:[".responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:1rem}.flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}mat-card[_ngcontent-%COMP%]{max-width:400px}.h3[_ngcontent-%COMP%]{font-weight:400}"]})};export{Ye as Home};
