"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[1342,8961],{7644:(e,t,i)=>{i.d(t,{z:()=>s});const s=e=>class extends e{dispatch(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this).dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:!0,detail:t}));return n&&i?i():s&&s(),n}}},71238:(e,t,i)=>{i.d(t,{KC:()=>n,j5:()=>a});const s="requestresizenotifications",n="resize",o=new Set,a=e=>class extends e{get _parentResizable(){return this.__parentResizable}set _parentResizable(e){const t=this.__parentResizable;this.__parentResizable=e,t!==e&&this._parentResizableChanged(e)}get _notifyingDescendant(){return this.__notifyingDescendant}set _notifyingDescendant(e){this.__notifyingDescendant=e}constructor(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];super(t),this.isAttached=!1,this._interestedResizables=[],this._notifyingDescendant=!1,this._onIronRequestResizeNotifications=this._onIronRequestResizeNotifications.bind(this),this.notifyResize=this.notifyResize.bind(this),this._onDescendantIronResize=this._onDescendantIronResize.bind(this),this.addEventListener(s,this._onIronRequestResizeNotifications,!0)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,setTimeout((()=>{this._requestResizeNotifications()}))}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this.notifyResize)),this._parentResizable=null}notifyResize(){this.isAttached&&(this._interestedResizables.forEach((e=>{this.resizerShouldNotify(e)&&this._notifyDescendant(e)})),this._fireResize())}assignParentResizable(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))}stopResizeNotificationsFor(e){const t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))}_subscribeIronResize(e){e.addEventListener(n,this._onDescendantIronResize)}_unsubscribeIronResize(e){e.removeEventListener(n,this._onDescendantIronResize)}resizerShouldNotify(e){return!0}_onDescendantIronResize(e){this._notifyingDescendant?e.stopPropagation():this._fireResize()}_fireResize(){this.dispatchEvent(new CustomEvent(n))}_onIronRequestResizeNotifications(e){const t=e.composedPath&&e.composedPath();let i;i=t||(e.path||[]);const s=i[0];s!==this&&(s.assignParentResizable(this),this._notifyDescendant(s),e.stopPropagation())}_parentResizableChanged(e){e&&window.removeEventListener("resize",this.notifyResize)}_notifyDescendant(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)}_requestResizeNotifications(){if(this.isAttached)if("loading"===document.readyState){const e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((e=>{e!==this&&e._findParent()})):(o.forEach((e=>{e!==this&&e._findParent()})),window.addEventListener("resize",this.notifyResize),this.notifyResize())}_findParent(){this.assignParentResizable(null),this.dispatchEvent(new CustomEvent(s,{bubbles:!0,cancelable:!0,composed:!0})),this._parentResizable?o.delete(this):o.add(this)}}},71342:(e,t,i)=>{i.r(t),i.d(t,{Collapse:()=>d,CollapseEvent:()=>n});var s=i(5298);var n;!function(e){e.Toggle="collapse-toggle"}(n||(n={}));var o=i(7644),a=i(71238),h=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},r=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends((0,o.z)((0,a.j5)(s.OC))){constructor(){super(),this.noAnimation=!1,this.a11yLabeledBy="",this.contentId="",this._animating=!1,this._desiredSize="0px",this._open=!1,this._horizontal=!1,this._classOpen=this._open,this._classClosed=!this._open,this.afterReflow=(e,t)=>{this._div.style[this._dimensionMax]=e,t?this._addSingletonTransitionEventHandler(this,this._transitionEnd):this._transitionEnd()},this._addSingletonTransitionEventHandler=this._addSingletonTransitionEventHandler.bind(this),this._transitionEnd=this._transitionEnd.bind(this)}get open(){return this._open}set open(e){const t=this._open;t!==e&&(this._open=e,this.setAttribute("aria-hidden",""+!this._open),this._open&&this.focus(),this._classClosed=!1,this._updateSize(this._open?"auto":"0px",!0),this._classOpen=!1,this.requestUpdate("open",t))}get horizontal(){return this._horizontal}set horizontal(e){const t=this._horizontal;if(t!==e){if(this._horizontal=e,this._div){const e="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this._div.style[e]=""}this._updateSize(this._open?"auto":"0px",!1),this.requestUpdate("horizontal",t)}}toggle(){this.open=!this.open}show(){this.open=!0}hide(){this.open=!1}firstUpdated(e){if(super.firstUpdated(e),this._classClosed){this._div.style[this._dimensionMax]="0px";const e="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this._div.style[e]=""}}render(){const[e,t]=(0,s.Yh)(this.tagName.toLowerCase(),{closed:this._classClosed,open:this._classOpen});return s.qy`
            <div
                id="${(0,s.JR)(this.contentId)}"
                class="${t}"
                role="region"
                aria-labelledby="${(0,s.JR)(this.a11yLabeledBy)}"
            >
                <div class="${e}-inner">
                    <slot class="${e}-slot"></slot>
                </div>
            </div>
        `}_updateSize(e,t){e="auto"===e?"":e;let i=t&&!this.noAnimation&&this._desiredSize!==e;this._desiredSize=e,this._updateTransition(!1),requestAnimationFrame((async()=>{if(this._div)if(i){const t=this._calcSize();""===e&&(this._div.style[this._dimensionMax]="",e=this._calcSize()),this._div.style[this._dimensionMax]=t,setTimeout((()=>{i=e!==t,this._updateTransition(!0),this.afterReflow(e,i)}),0)}else this.afterReflow(e,i)}))}get _dimension(){return this.horizontal?"width":"height"}get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"}_calcSize(){return this._div["width"===this._dimension?"offsetWidth":"offsetHeight"]+"px"}_updateTransition(e){this._div&&(this._div.style.transitionDuration=e&&!this.noAnimation?"":"0s")}_transitionEnd(){this._div.style[this._dimensionMax]=this._desiredSize,this._classClosed=!this.open,this._classOpen=this.open,this._animating=!1,this.notifyResize(),this.dispatch(n.Toggle)}_addSingletonTransitionEventHandler(e,t){this._animating=!0;const i=setTimeout((()=>{this._animating&&(t(),this._animating=!1)}),500);e.addEventListener("transitionend",(()=>{clearTimeout(i),t(),this._animating=!1}),{once:!0})}};d.CURRENT_SLOT="current-slot",h([(0,s.MZ)({type:Boolean,reflect:!0,attribute:"no-animation"}),r("design:type",Object)],d.prototype,"noAnimation",void 0),h([(0,s.MZ)({type:String,reflect:!0,attribute:"a11y-labeled-by"}),r("design:type",Object)],d.prototype,"a11yLabeledBy",void 0),h([(0,s.MZ)({type:String,reflect:!0,attribute:"content-id"}),r("design:type",Object)],d.prototype,"contentId",void 0),h([(0,s.wk)(),r("design:type",Object)],d.prototype,"_classOpen",void 0),h([(0,s.wk)(),r("design:type",Object)],d.prototype,"_classClosed",void 0),h([(0,s.P)("div"),r("design:type",Object)],d.prototype,"_div",void 0),h([(0,s.MZ)({type:Boolean,reflect:!0}),r("design:type",Object),r("design:paramtypes",[Object])],d.prototype,"open",null),h([(0,s.MZ)({type:Boolean,reflect:!0}),r("design:type",Object),r("design:paramtypes",[Object])],d.prototype,"horizontal",null),d=h([(0,s.eV)({tagName:"collapse",styles:e=>{const{root:t,child:i,is:n}=(0,s.zz)(e);return[s.iF,s.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}:host{display:block;width:100%;}${t}{display:block;transition-duration:var(--expand-transition-duration, 250ms);-webkit-transition-duration:var(--expand-transition-duration, 250ms);overflow:visible;}${i("inner")}{padding-bottom:var(--collapse-bottom-padding, 0px);}${n("closed")}{display:none;}${n("!open")}{overflow:hidden;}`]},version:"2.0.48"}),r("design:paramtypes",[])],d)}}]);
//# sourceMappingURL=1342.2acf8afe.chunk.js.map