"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[5432],{71238:(e,t,s)=>{s.d(t,{KC:()=>o,j5:()=>n});const i="requestresizenotifications",o="resize",r=new Set,n=e=>class extends e{get _parentResizable(){return this.__parentResizable}set _parentResizable(e){const t=this.__parentResizable;this.__parentResizable=e,t!==e&&this._parentResizableChanged(e)}get _notifyingDescendant(){return this.__notifyingDescendant}set _notifyingDescendant(e){this.__notifyingDescendant=e}constructor(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];super(t),this.isAttached=!1,this._interestedResizables=[],this._notifyingDescendant=!1,this._onIronRequestResizeNotifications=this._onIronRequestResizeNotifications.bind(this),this.notifyResize=this.notifyResize.bind(this),this._onDescendantIronResize=this._onDescendantIronResize.bind(this),this.addEventListener(i,this._onIronRequestResizeNotifications,!0)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,setTimeout((()=>{this._requestResizeNotifications()}))}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(r.delete(this),window.removeEventListener("resize",this.notifyResize)),this._parentResizable=null}notifyResize(){this.isAttached&&(this._interestedResizables.forEach((e=>{this.resizerShouldNotify(e)&&this._notifyDescendant(e)})),this._fireResize())}assignParentResizable(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))}stopResizeNotificationsFor(e){const t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))}_subscribeIronResize(e){e.addEventListener(o,this._onDescendantIronResize)}_unsubscribeIronResize(e){e.removeEventListener(o,this._onDescendantIronResize)}resizerShouldNotify(e){return!0}_onDescendantIronResize(e){this._notifyingDescendant?e.stopPropagation():this._fireResize()}_fireResize(){this.dispatchEvent(new CustomEvent(o))}_onIronRequestResizeNotifications(e){const t=e.composedPath&&e.composedPath();let s;s=t||(e.path||[]);const i=s[0];i!==this&&(i.assignParentResizable(this),this._notifyDescendant(i),e.stopPropagation())}_parentResizableChanged(e){e&&window.removeEventListener("resize",this.notifyResize)}_notifyDescendant(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)}_requestResizeNotifications(){if(this.isAttached)if("loading"===document.readyState){const e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((e=>{e!==this&&e._findParent()})):(r.forEach((e=>{e!==this&&e._findParent()})),window.addEventListener("resize",this.notifyResize),this.notifyResize())}_findParent(){this.assignParentResizable(null),this.dispatchEvent(new CustomEvent(i,{bubbles:!0,cancelable:!0,composed:!0})),this._parentResizable?r.delete(this):r.add(this)}}},93051:(e,t,s)=>{s.r(t),s.d(t,{Scrollbar:()=>p});var i=s(5298);const o=11,r=11,n=11,l=11;var h,a=s(71238),c=s(7644),d=function(e,t,s,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(r<3?o(n):r>3?o(t,s,n):o(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n},b=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=h=class extends((0,a.j5)((0,c.z)(i.OC))){get scrollTop(){return this._scrollTop}set scrollTop(e){e>-1&&this._scrollTop!==e&&(this._scrollTop=e,this._scrollableElement&&(this._scrollableElement.scrollTop=e))}get scrollLeft(){return this._scrollLeft}set scrollLeft(e){e>-1&&this._scrollLeft!==e&&(this._scrollLeft=e,this._scrollableElement&&(this._scrollableElement.scrollLeft=e))}constructor(){super(),this.border=!1,this.vertHide=!1,this.horiHide=!1,this.alwaysShow=!1,this.outset=!1,this.dynamicOutset=!1,this.vertPadding=!1,this.horiPadding=!1,this._scrollThumbHeight=h.MIN_SCROLL_THUMB_HEIGHT,this._scrollThumbWidth=h.MIN_SCROLL_THUMB_WIDTH,this._scrollThumbTop=0,this._scrollThumbLeft=0,this._scrollThumbDraggingY=!1,this._scrollThumbDraggingX=!1,this._scrollVisibleY=!1,this._scrollVisibleX=!1,this._animationFrame=null,this._lastScrollThumbPositionY=0,this._lastScrollThumbPositionX=0,this._resizeObserverTargets=[],this._scrollTop=0,this._scrollLeft=0,this._onMouseOver=this._onMouseOver.bind(this),this._onMouseOut=this._onMouseOut.bind(this),this._onScroll=this._onScroll.bind(this),this._handleSlotchange=this._handleSlotchange.bind(this),this._handleResizeEvent=this._handleResizeEvent.bind(this),this._onThumbYMouseDown=this._onThumbYMouseDown.bind(this),this._onThumbXMouseDown=this._onThumbXMouseDown.bind(this),this._onThumbMouseUp=this._onThumbMouseUp.bind(this),this._onThumbMouseDrag=this._onThumbMouseDrag.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onMouseOver),this.addEventListener("mouseleave",this._onMouseOut),this.addEventListener("scroll-left-home",this._onScrollLeftHome),this.addEventListener(a.KC,this._handleResizeEvent)}disconnectedCallback(){this.removeEventListener("mouseenter",this._onMouseOver),this.removeEventListener("mouseleave",this._onMouseOut),this.removeEventListener("scroll-left-home",this._onScrollLeftHome),this.removeEventListener(a.KC,this._handleResizeEvent),super.disconnectedCallback()}scrollTo(e){this._scrollableElement&&this._scrollableElement.scrollTo&&this._scrollableElement.scrollTo(e)}scrollBy(e){this._scrollableElement&&this._scrollableElement.scrollBy&&this._scrollableElement.scrollBy(e)}get scrollWidth(){return this._scrollableElement.scrollWidth}get scrollHeight(){return this._scrollableElement.scrollHeight}getScrollHeight(){return this.scrollHeight}getScrollTop(){return this._scrollTop}getScrollLeft(){return this._scrollLeft}scrollLeftHome(){this._scrollableElement.scrollLeft=0}firstUpdated(e){super.firstUpdated(e),this._scrollableElement.addEventListener("scroll",this._onScroll),this._scrollThumbElementY.addEventListener("mousedown",this._onThumbYMouseDown),this._scrollThumbElementX.addEventListener("mousedown",this._onThumbXMouseDown),this._installResizeObserver()}updated(e){super.updated(e);for(const[t,s]of Object.entries({_scrollVisibleX:"--scrollbar-x-overflow",_scrollVisibleY:"--scrollbar-y-overflow"}))e.has(t)&&(this[t]?this._scrollableElement.style.setProperty(s,"1"):this._scrollableElement.style.setProperty(s,"0"))}render(){const[e,t]=(0,i.Yh)(this.tagName.toLowerCase(),{"vertical-hide":this.vertHide,"horizontal-hide":this.horiHide,"scroll-x-hidden":!this._scrollVisibleX,"scroll-y-hidden":!this._scrollVisibleY});return i.qy`
            <div class="${t}">
                <slot @slotchange="${this._handleSlotchange}"></slot>
            </div>
            ${this._renderScrollY(e)} ${this._renderScrollX(e)}
        `}_renderScrollY(e){const[t,s]=(0,i.Yh)(`${e}-scroller-y`,{"hidden-y":!this._scrollVisibleY||this.vertHide});return i.qy`
            <div class="${s}">
                <div
                    class="${t}-thumb"
                    style="height: ${this._scrollThumbHeight-o-r}px; top: ${this._scrollThumbTop+o}px;"
                >
                    <div class="${t}-inner"></div>
                </div>
            </div>
        `}_renderScrollX(e){const[t,s]=(0,i.Yh)(`${e}-scroller-x`,{"hidden-x":!this._scrollVisibleX||this.horiHide});return i.qy`
            <div class="${s}">
                <div
                    class="${t}-thumb"
                    style="width: ${this._scrollThumbWidth-n-l}px; left: ${this._scrollThumbLeft+n}px;"
                >
                    <div class="${t}-inner"></div>
                </div>
            </div>
        `}_handleSlotchange(e){const t=e.target;this._resizeObserverTargets.forEach((e=>{this._resizeObserver.unobserve(e)})),this._resizeObserverTargets=[],t.assignedNodes().filter((e=>1===e.nodeType&&e)).forEach((e=>{this._resizeObserver.observe(e),this._resizeObserverTargets.push(e)})),this._recalc()}_handleResizeEvent(){this._recalc()}_onThumbYMouseDown(e){e.preventDefault(),e.stopPropagation(),this._lastScrollThumbPositionY=e.clientY,this._scrollThumbDraggingY=!0,this.setAttribute("drag-y",""),document.addEventListener("mouseup",this._onThumbMouseUp),document.addEventListener("mousemove",this._onThumbMouseDrag),document.body.style.setProperty("pointer-events","none")}_onThumbXMouseDown(e){e.preventDefault(),e.stopPropagation(),this._lastScrollThumbPositionX=e.clientX,this._scrollThumbDraggingX=!0,this.setAttribute("drag-x",""),document.addEventListener("mouseup",this._onThumbMouseUp),document.addEventListener("mousemove",this._onThumbMouseDrag),document.body.style.setProperty("pointer-events","none")}_onThumbMouseUp(e){this._scrollThumbDraggingY&&(e.preventDefault(),this._scrollThumbDraggingY=!1,this.removeAttribute("drag-y")),this._scrollThumbDraggingX&&(e.preventDefault(),this._scrollThumbDraggingX=!1,this.removeAttribute("drag-x")),document.removeEventListener("mouseup",this._onThumbMouseUp),document.removeEventListener("mousemove",this._onThumbMouseDrag),document.body.style.removeProperty("pointer-events")}_onThumbMouseDrag(e){if(this._scrollThumbDraggingY||this._scrollThumbDraggingX){e.preventDefault(),e.stopPropagation();const t=this._scrollableElement,{offsetHeight:s,offsetWidth:i,scrollHeight:o,scrollWidth:r}=t,n=this.offsetHeight,l=this.offsetWidth;if(this._scrollThumbDraggingY){const i=e.clientY-this._lastScrollThumbPositionY,r=o/s*i;this._lastScrollThumbPositionY=e.clientY;const l=n/s,h=Math.min(Math.max(0,this._scrollThumbTop+i*l),n-this._scrollThumbHeight);this._scrollThumbTop=h,t.scrollTop=Math.min(t.scrollTop+r,o-s),this._scrollTop=t.scrollTop}if(this._scrollThumbDraggingX){const s=e.clientX-this._lastScrollThumbPositionX,o=r/i*s;this._lastScrollThumbPositionX=e.clientX;const n=l/i;this._scrollThumbLeft=Math.min(Math.max(0,this._scrollThumbLeft+s*n),l-this._scrollThumbWidth),t.scrollLeft=Math.min(t.scrollLeft+o,r-i),this._scrollLeft=t.scrollLeft}}}async _onScroll(){if(this._scrollableElement){const e=this._scrollableElement,{scrollTop:t,scrollHeight:s,scrollLeft:i,scrollWidth:o,clientHeight:r,clientWidth:n}=e,{offsetHeight:l,offsetWidth:h,_scrollThumbHeight:a,_scrollThumbWidth:c}=this,d=t/(s-r)*(l-a),b=i/(o-n)*(h-c);this._scrollThumbTop=Math.min(d,l-a),this._scrollThumbLeft=Math.min(b,h-c),this._scrollTop=e.scrollTop,this._scrollLeft=e.scrollLeft}await this.updateComplete,window.dispatchEvent(new Event("scroll")),this.dispatch("scroll")}_onMouseOver(){this._recalc(),this.setAttribute("hover","")}_onMouseOut(){this.removeAttribute("hover")}_installResizeObserver(){this._resizeObserver=new ResizeObserver((()=>{null===this._animationFrame&&(this._animationFrame=requestAnimationFrame((()=>{this._animationFrame=null,this._recalc()})))})),this._resizeObserver.observe(this._scrollableElement)}_recalc(){const{scrollHeight:e,scrollWidth:t,clientHeight:s,clientWidth:i}=this._scrollableElement,o=this.clientHeight/s,r=this.clientWidth/i,n=s/e;this._scrollThumbHeight=Math.max(n*s*o,h.MIN_SCROLL_THUMB_HEIGHT);const l=i/t;this._scrollThumbWidth=Math.max(l*i*r,h.MIN_SCROLL_THUMB_WIDTH),this._scrollVisibleY=e>s,this._scrollVisibleX=t>i}_onScrollLeftHome(e){e.stopPropagation(),this.scrollLeftHome()}};p.MIN_SCROLL_THUMB_HEIGHT=48+o+r,p.MIN_SCROLL_THUMB_WIDTH=48+n+l,d([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!0}),b("design:type",Object)],p.prototype,"border",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs,attribute:"vert-hide",reflect:!0}),b("design:type",Object)],p.prototype,"vertHide",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs,attribute:"hori-hide",reflect:!0}),b("design:type",Object)],p.prototype,"horiHide",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs,attribute:"always-show",reflect:!0}),b("design:type",Object)],p.prototype,"alwaysShow",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs,attribute:"outset",reflect:!0}),b("design:type",Object)],p.prototype,"outset",void 0),d([(0,i.MZ)({type:Boolean,attribute:"dynamic-outset",converter:i.Bs,reflect:!0}),b("design:type",Object)],p.prototype,"dynamicOutset",void 0),d([(0,i.MZ)({type:Boolean,attribute:"vert-padding",converter:i.Bs,reflect:!0}),b("design:type",Object)],p.prototype,"vertPadding",void 0),d([(0,i.MZ)({type:Boolean,attribute:"hori-padding",converter:i.Bs,reflect:!0}),b("design:type",Object)],p.prototype,"horiPadding",void 0),d([(0,i.MZ)({type:Number,attribute:!1}),b("design:type",Object),b("design:paramtypes",[Object])],p.prototype,"scrollTop",null),d([(0,i.MZ)({type:Number,attribute:!1}),b("design:type",Object),b("design:paramtypes",[Object])],p.prototype,"scrollLeft",null),d([(0,i.P)("div"),b("design:type",Object)],p.prototype,"_scrollableElement",void 0),d([(0,i.P)('div[class$="-scroller-y-thumb"]'),b("design:type",Object)],p.prototype,"_scrollThumbElementY",void 0),d([(0,i.P)('div[class$="-scroller-x-thumb"]'),b("design:type",Object)],p.prototype,"_scrollThumbElementX",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollThumbHeight",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollThumbWidth",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollThumbTop",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollThumbLeft",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollThumbDraggingY",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollThumbDraggingX",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollVisibleY",void 0),d([(0,i.wk)(),b("design:type",Object)],p.prototype,"_scrollVisibleX",void 0),p=h=d([(0,i.eV)({tagName:"scrollbar",styles:e=>[i.iF,(()=>{const{root:t,is:s}=(0,i.zz)(e);return i.AH`:host{position:relative;display:grid;grid-template:1fr / 1fr;height:100%;}:host([border]){border:1px solid var(--color-secondary-3);}:host([outset]){padding-right:16px;padding-bottom:16px;}:host([vert-padding]){padding-top:var(--container-inner-spacing-top-bottom, 16px);padding-bottom:var(--container-inner-spacing-top-bottom, 16px);height:calc(100% - 2 * var(--container-inner-spacing-top-bottom, 16px));}:host([hori-padding]){padding-left:var(--container-inner-spacing-left-right, 24px);padding-right:var(--container-inner-spacing-left-right, 24px);}${t}::-webkit-scrollbar{display:none;}:host([dynamic-outset]:not([hori-hide])) ${t}{padding-bottom:16px;}:host([dynamic-outset]:not([vert-hide])) ${t}{padding-right:16px;}:host([dynamic-outset]) ${s("scroll-y-hidden")}{padding-right:0 !important;}:host([dynamic-outset]) ${s("scroll-x-hidden")}{padding-bottom:0 !important;}${t}{height:100%;overflow-x:auto;overflow-y:auto;scroll-behavior:auto;overscroll-behavior:auto;scroll-snap-type:none;scrollbar-width:none;-ms-overflow-style:none;scroll-padding:var(--scroll-padding, 0);}${s("vertical-hide")}{overflow-y:hidden;}${s("horizontal-hide")}{overflow-x:hidden;}`})(),(()=>{const{root:t,child:s,is:n}=(0,i.zz)(e+"-scroller-y");return i.AH`${t}{position:absolute;z-index:4;width:6px;right:${5}px;top:0;bottom:0;background-color:rgba(0, 0, 0, 0);padding-top:${o}px;padding-bottom:${r}px;background-clip:content-box;}:host([vertical-hide]) ${t}, ${n("hidden-y")}{display:none;}:host(:not([always-show])) ${t}{opacity:0;transition:opacity 0.25s;}:host([drag-y]) ${t},:host([hover]) ${t}{opacity:1;transition:opacity 0s;}${s("thumb")}{width:8px;height:20px;margin-left:0;position:absolute;border-radius:0;opacity:1;left:-1px;top:0;background-color:transparent;transition:background-color 0.25s;}${s("inner")}{width:6px;height:100%;margin-left:1px;background-color:#00000033;transition:background-color 0.25s;}${s("thumb")}:hover,:host([drag-y]) ${s("thumb")}{background-color:#00000066;}${s("thumb")}:hover ${s("inner")},:host([drag-y]) ${s("thumb")} ${s("inner")}{background-color:transparent;}`})(),(()=>{const{root:t,child:s,is:o}=(0,i.zz)(e+"-scroller-x");return i.AH`${t}{position:absolute;z-index:4;height:6px;right:0;bottom:${5}px;left:0;background-color:rgba(0, 0, 0, 0);padding-left:${n}px;padding-right:${l}px;background-clip:content-box;}:host([vertical-hide]) ${t}, ${o("hidden-x")}{display:none;}:host(:not([always-show])) ${t}{opacity:0;transition:opacity 0.25s;}:host([drag-x]) ${t},:host([hover]) ${t}{opacity:1;transition:opacity 0s;}${s("thumb")}{width:20px;height:8px;margin-left:0;position:absolute;border-radius:0;opacity:1;left:0;top:-1px;background-color:transparent;transition:background-color 0.25s;}${s("inner")}{height:6px;width:100%;margin-top:1px;background-color:#00000033;transition:background-color 0.25s;}${s("thumb")}:hover,:host([drag-x]) ${s("thumb")}{background-color:#00000066;}${s("thumb")}:hover ${s("inner")},:host([drag-x]) ${s("thumb")} ${s("inner")}{background-color:transparent;}`})()],version:"2.0.74"}),b("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=5432.02a5e615.chunk.js.map