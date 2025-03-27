"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[1734,6496],{5340:(e,t,i)=>{var o;i.d(t,{U:()=>o}),function(e){e.Show="sui-tooltip-show",e.Hide="sui-tooltip-hide",e.Hover="hover",e.Unhover="unhover",e.Opened="open-tooltip",e.Closed="close-tooltip"}(o||(o={}))},5588:(e,t,i)=>{i.d(t,{BB:()=>o,GP:()=>s,Tz:()=>r});const o=window.requestIdleCallback||function(e){return setTimeout((()=>{e({didTimeout:!1,timeRemaining:()=>Math.max(0,50)})}),50)},s=window.cancelIdleCallback||clearTimeout;function r(e){let t,i,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return function(){const h=arguments,d=()=>{t=null,r=e(...h)};return"idle"===n?(i&&s(i),i=o((()=>{r=e(...h)}))):(clearTimeout(t),t=setTimeout(d,n)),r}}},46988:(e,t,i)=>{var o,s;i.d(t,{c:()=>o,i:()=>s}),function(e){e.Auto="auto",e.TopRight="top-right",e.TopLeft="top-left",e.BottomRight="bottom-right",e.BottomLeft="bottom-left",e.TopCenter="top-right",e.RightCenter="top-right",e.LeftCenter="top-left",e.BottomCenter="bottom-right"}(o||(o={})),function(e){e[e.None=0]="None",e[e.Short=1]="Short",e[e.Long=2]="Long"}(s||(s={}))},51734:(e,t,i)=>{i.r(t),i.d(t,{Timer:()=>n,TooltipService:()=>a,TooltipServiceDelay:()=>r.i,TooltipServiceEvents:()=>o.U,TooltipServiceLocation:()=>r.c});var o=i(5340);var s=i(5298),r=i(46988);class n{constructor(e,t){this.callback=e,this.remaining=t,this.resume()}pause(){window.clearTimeout(this.timerId),this.timerId=null,this.remaining-=Date.now()-this.start}resume(){this.timerId||(this.start=Date.now(),this.timerId=window.setTimeout(this.callback,this.remaining))}}var h,d=i(5588),l=function(e,t,i,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(s=e[h])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n},c=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=h=class extends s.OC{constructor(){super(),this.object=null,this.objectId=null,this.triggerShow="mouseover",this.triggerHide="mouseout",this.show=!1,this.disabled=!1,this.location=r.c.Auto,this.ownWidth=!1,this.delay=r.i.Short,this.hoverable=!1,this._onTriggerShow=this._onTriggerShow.bind(this),this._onTriggerHide=this._onTriggerHide.bind(this)}static show(e){h._dispatchEvent(o.U.Show,Object.assign({},e))}static hide(e){h._dispatchEvent(o.U.Hide,{root:e})}disconnectedCallback(){this.show&&(this.show=!1),super.disconnectedCallback()}async firstUpdated(e){var t,i;super.firstUpdated(e),await new Promise((e=>setTimeout(e,0))),this.objectId&&!this.object&&this.parentElement&&(this.object=this.parentElement.querySelector(`#${this.objectId}`)),this.show&&"none"!==this.triggerHide?null===(t=this.object)||void 0===t||t.addEventListener(this.triggerHide,this._onTriggerHide,{once:!0}):this.show||"none"===this.triggerShow||null===(i=this.object)||void 0===i||i.addEventListener(this.triggerShow,this._onTriggerShow,{once:!0}),this.addEventListener(o.U.Hover,(()=>{this._unshowHandle&&this._unshowHandle.pause()})),this.addEventListener(o.U.Unhover,(()=>{this._unshowHandle&&this._unshowHandle.resume()}))}update(e){super.update(e),this._updateShow(e),this._updateObjectId(e),this._updateObject(e),this._updateTriggerShow(e),this._updateTriggerHide(e)}render(){return s.qy`<slot></slot>`}_updateTriggerHide(e){var t,i;const o=e.get("triggerHide");void 0!==o&&o!==this.triggerHide&&this.show&&("none"!==o&&(null===(t=this.object)||void 0===t||t.removeEventListener(o,this._onTriggerHide)),"none"!==this.triggerHide&&(null===(i=this.object)||void 0===i||i.addEventListener(this.triggerHide,this._onTriggerHide,{once:!0})))}_updateTriggerShow(e){var t,i;const o=e.get("triggerShow");void 0===o||o===this.triggerShow||this.show||("none"!==o&&(null===(t=this.object)||void 0===t||t.removeEventListener(o,this._onTriggerShow)),"none"!==this.triggerShow&&(null===(i=this.object)||void 0===i||i.addEventListener(this.triggerShow,this._onTriggerShow,{once:!0})))}_updateObject(e){var t,i;const o=e.get("object");void 0!==o&&(this.show&&"none"!==this.triggerHide?(null!==o&&o.removeEventListener(this.triggerHide,this._onTriggerHide),null===(t=this.object)||void 0===t||t.addEventListener(this.triggerHide,this._onTriggerHide,{once:!0})):this.show||"none"===this.triggerShow||(null!==o&&o.removeEventListener(this.triggerShow,this._onTriggerShow),null===(i=this.object)||void 0===i||i.addEventListener(this.triggerShow,this._onTriggerShow,{once:!0})))}_updateObjectId(e){void 0!==e.get("objectId")&&(this.object=this.objectId&&this.parentElement?this.parentElement.querySelector(`#${this.objectId}`):null)}_updateShow(e){var t,i;const o=e.get("show");void 0!==o&&o!==this.show&&(this._toggle(),this.show&&"none"!==this.triggerHide?null===(t=this.object)||void 0===t||t.addEventListener(this.triggerHide,this._onTriggerHide,{once:!0}):this.show||"none"===this.triggerShow||null===(i=this.object)||void 0===i||i.addEventListener(this.triggerShow,this._onTriggerShow,{once:!0}))}_toggle(){if(!this.disabled){if(this.show)return this._requestIdleCallback||(this._requestIdleCallback=(0,d.BB)((()=>{this._requestIdleCallback=void 0,h.show({root:this,object:this.object,location:this.location,ownWidth:this.ownWidth,delay:this.delay,hideCallback:()=>{this.show=!1,this._dispatchSelfEvent(o.U.Closed)},showCallback:()=>{this._dispatchSelfEvent(o.U.Opened)}})}))),void window.addEventListener("scroll",this._onTriggerHide);window.removeEventListener("scroll",this._onTriggerHide)}this._requestIdleCallback&&((0,d.GP)(this._requestIdleCallback),this._requestIdleCallback=void 0),h.hide(this)}_onTriggerShow(){var e;this._unshowHandle&&(this._unshowHandle.pause(),this._unshowHandle=void 0),this.show||(this.show=!0),"none"!==this.triggerHide&&(null===(e=this.object)||void 0===e||e.addEventListener(this.triggerHide,this._onTriggerHide,{once:!0}))}_onTriggerHide(){var e;this.show&&("none"!==this.triggerShow&&(null===(e=this.object)||void 0===e||e.addEventListener(this.triggerShow,this._onTriggerShow,{once:!0})),this.hoverable?this._unshowHandle=new n((()=>{this.show=!1,this._unshowHandle=void 0}),100):this.show=!1)}_dispatchSelfEvent(e){return this.dispatchEvent(new CustomEvent(e,{cancelable:!0,bubbles:!0,composed:!0}))}};a._dispatchEvent=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:Object.assign({},t)}))},l([(0,s.MZ)({type:Object,attribute:!1}),c("design:type",Object)],a.prototype,"object",void 0),l([(0,s.MZ)({type:String,reflect:!0,attribute:"object-id"}),c("design:type",Object)],a.prototype,"objectId",void 0),l([(0,s.MZ)({type:String,reflect:!0,attribute:"trigger-show"}),c("design:type",String)],a.prototype,"triggerShow",void 0),l([(0,s.MZ)({type:String,reflect:!0,attribute:"trigger-hide"}),c("design:type",String)],a.prototype,"triggerHide",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0,converter:s.Bs}),c("design:type",Object)],a.prototype,"show",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0,converter:s.Bs}),c("design:type",Object)],a.prototype,"disabled",void 0),l([(0,s.MZ)({type:r.c,reflect:!0}),c("design:type",Object)],a.prototype,"location",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0,converter:s.Bs,attribute:"own-width"}),c("design:type",Object)],a.prototype,"ownWidth",void 0),l([(0,s.MZ)({type:r.i,reflect:!0}),c("design:type",Object)],a.prototype,"delay",void 0),l([(0,s.MZ)({type:Boolean,reflect:!0,converter:s.Bs}),c("design:type",Object)],a.prototype,"hoverable",void 0),a=h=l([(0,s.eV)({tagName:"tooltip-service",styles:()=>[s.iF,s.AH`
            :host {
                display: none;
            }
        `],version:"2.0.54"}),c("design:paramtypes",[])],a)}}]);
//# sourceMappingURL=1734.fd45211a.chunk.js.map