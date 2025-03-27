"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[4560],{14560:(e,t,i)=>{i.r(t),i.d(t,{AnimationVariant:()=>s,Dropdown:()=>h,DropdownPlacement:()=>o});var o,n=i(5298);!function(e){e.BelowLeftAligned="below-left",e.BelowRightAligned="below-right",e.RightSideTopAligned="right-top",e.RightSideBottomAligned="right-bottom",e.LeftSideTopAligned="left-top",e.LeftSideBottomAligned="left-bottom",e.AboveLeftAligned="above-left",e.AboveRightAligned="above-right"}(o||(o={}));var s;!function(e){e.None="none",e.Default="default",e.Select="select"}(s||(s={}));var l,c=i(15029),r=function(e,t,i,o){var n,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(s<3?n(l):s>3?n(t,i,l):n(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=l=class extends n.OC{constructor(){super(...arguments),this.open=!1,this.disabled=!1,this.clickOutsideClose=!0,this.controlled=!1,this.object=null,this.parentObject=null,this.fixedWidth=!1,this.noOverflow=!1,this.objectId=null,this.animationVariant=s.Default,this.placement=o.BelowLeftAligned,this._firstRenderComplete=!1,this._intersectionObserver=null,this._close=async()=>{this.placement=this._calculatePlacement(),this.open&&(this.controlled||(this.open=!1),this._toggleParentButton(),await this.updateComplete,this.dispatchEvent(new CustomEvent("close",{detail:{newState:!1,prevState:this.open},bubbles:!0,composed:!0})))}}connectedCallback(){if(l.Scrollbar)super.connectedCallback();else{const e=[];e.push({module:()=>i.e(3051).then(i.bind(i,93051)),elem:["Scrollbar"]}),l.dynSubRegister(e,(()=>{super.connectedCallback()}))}this._toggle=this._toggle.bind(this),this._handleResize=this._handleResize.bind(this),this._handleScroll=this._handleScroll.bind(this),this._handleIntersection=this._handleIntersection.bind(this),this._handleWindowClick=this._handleWindowClick.bind(this)}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll,!0),window.removeEventListener("resize",this._handleResize),window.removeEventListener("click",this._handleWindowClick,!0),null!==this._intersectionObserver&&this._intersectionObserver.disconnect(),this.object&&this.object.removeEventListener("click",this._toggle),super.disconnectedCallback()}async firstUpdated(e){if(this.objectId&&null===this.object&&(this.parentElement||this.parentObject)){const e=this.parentObject?this.parentObject:this.parentElement;this.object=e.querySelector(`#${this.objectId}`)}null!==this.object&&this.object.addEventListener("click",this._toggle),this.placement=this._calculatePlacement(),this._initialStyle(),this._firstRenderComplete=!0,this.open&&window.requestAnimationFrame((()=>{this.placement=this._calculatePlacement(),this._updateOpen()})),super.firstUpdated(e)}update(e){var t;e.has("open")&&this._firstRenderComplete&&this._shouldUpdateOpen(),e.has("navigated")&&(this.placement=this._calculatePlacement(),this._checkWindowBoundaries()),e.has("forcePlacement")&&(this.placement=null!==(t=this.forcePlacement)&&void 0!==t?t:o.BelowLeftAligned),e.has("clickOutsideClose")&&this.open&&this._updateClickOutsideClose();void 0!==e.get("objectId")&&(null!==this.objectId&&this.parentElement?this.object=this.parentElement.querySelector(`#${this.objectId}`):this.object=null);const i=e.get("object");void 0!==i&&this._updateObject(i),super.update(e)}render(){const[e,t]=(0,n.Yh)(this.tagName.toLowerCase(),{open:this.open,fixedWidth:this.fixedWidth,noOverflow:this.noOverflow}),i=this.noOverflow?n.qy`
                  <div class="${e}-items container ${this.placement}">
                      <slot></slot>
                  </div>
              `:n.qy`
                <${l.Scrollbar.tag} class="${e}-items container ${this.placement}">
                    <slot></slot>
                </${l.Scrollbar.tag}>
            `;return n.qy`
            <div
                @click=${e=>{null==this.object&&e.stopPropagation()}}
                class="${t}"
            >
                <div class="${e}-button trigger"></div>
                ${i}
            </div>
        `}_initialStyle(){this.style.pointerEvents="none",this.style.position="fixed",this.style.zIndex="10"}_checkObject(){const e=this.object.getBoundingClientRect();this.trigger.style.width=e.width+"px",this.trigger.style.height=e.height+"px",this.trigger.style.left=e.left+"px",this.trigger.style.top=e.top+"px",this.style.top=this.object.offsetTop+"px",this.style.left=this.object.offsetLeft+"px",this.trigger&&this.trigger.offsetParent&&this.getBoundingClientRect().top!==e.top?(this.style.top=e.top+"px",this.style.left=e.left+"px"):(this.style.top=this.object.offsetTop+"px",this.style.left=this.object.offsetLeft+"px")}_calculatePlacement(){if(!this.trigger||!this.container)return o.BelowLeftAligned;if(null!==this.object&&this._checkObject(),this.forcePlacement)return this.forcePlacement;const{clientWidth:e,clientHeight:t}=this.container;return this._decidePlacement(e,t)}_decidePlacement(e,t){const i=this.trigger.getBoundingClientRect(),{width:n,height:s}=i,{spaceAbove:l,spaceBelow:c,spaceToLeft:r,spaceToRight:a}=this._calculateSpace(i);return c>t&&a+n>e?o.BelowLeftAligned:c>t&&r>e?o.BelowRightAligned:a>e&&c+s>t?o.RightSideTopAligned:r>e&&c+s>t?o.LeftSideTopAligned:a>e&&c>-1&&l+s>t?o.RightSideBottomAligned:r>e&&c>-1&&l+s>t?o.LeftSideBottomAligned:l>t?this._checkAbovePlacement(a,r,n,e):this.placement}_checkAbovePlacement(e,t,i,n){return t+i>n?o.AboveRightAligned:e+i>n?o.AboveLeftAligned:this.placement}_calculateSpace(e){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{spaceAbove:e.top,spaceBelow:i-e.bottom,spaceToLeft:e.left,spaceToRight:t-e.right}}_updateObject(e){null!==e&&e.removeEventListener("click",this._toggle),null!==this.object&&(this.object.addEventListener("click",this._toggle),this.open&&(this.placement=this._calculatePlacement(),this.open=!1,this.requestUpdate("open",!0),setTimeout((()=>{this.placement=this._calculatePlacement(),this.open=!0,this.requestUpdate("open",!1)}),150)))}_updateClickOutsideClose(){this.clickOutsideClose?window.addEventListener("click",this._handleWindowClick,!0):window.removeEventListener("click",this._handleWindowClick,!0)}_shouldUpdateOpen(){if(this.open)this.placement=this._calculatePlacement(),this._checkWindowBoundaries(),this._updateOpen();else{if(this.object instanceof c.$){this.object.active=!1}this._updateClose()}}_updateOpen(){this.animationVariant!==s.None&&this._startAnimation(this.animationVariant===s.Default?"show":"expand"),window.addEventListener("scroll",this._handleScroll,!0),window.addEventListener("resize",this._handleResize),this.clickOutsideClose&&window.addEventListener("click",this._handleWindowClick,!0),this._installIntersectionObserver()}_updateClose(){this.animationVariant!==s.None&&this._startAnimation(this.animationVariant===s.Default?"hide":"retract"),window.removeEventListener("scroll",this._handleScroll,!0),window.removeEventListener("resize",this._handleResize),this.clickOutsideClose&&window.removeEventListener("click",this._handleWindowClick,!0),this._uninstallIntersectionObserver()}_checkWindowBoundaries(){const e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=this.trigger?this.trigger.getBoundingClientRect():{x:0,y:0,height:0,top:0};let i=!0,n=t.y,s=e-n;switch(this.placement){case o.BelowRightAligned:case o.LeftSideTopAligned:case o.RightSideTopAligned:case o.BelowLeftAligned:n=t.y,s=e-n;break;case o.AboveLeftAligned:case o.RightSideBottomAligned:case o.LeftSideBottomAligned:case o.AboveRightAligned:i=!1,n=t.top,s=n}s<this.container.scrollHeight?(this.container.style.height=i?s-t.height-28+"px":s-18+"px",this.container.style.minHeight="40px",this.container.style.overflowX="hidden"):this.container.style.removeProperty("height")}_handleIntersection(e){e.forEach((e=>{e.isIntersecting||this._close()}))}_handleResize(){this._toggle()}_handleScroll(){this.open&&(this.placement=this._calculatePlacement(),setTimeout((()=>{this._checkWindowBoundaries()}),500))}_handleWindowClick(e){e.target===this.object||-1!==e.composedPath().indexOf(this.object)||e.composedPath().includes(this)||this._close()}_startAnimation(e){if(this.container){this.container.style.animationName=e,this.container.style.overflow="hidden";const t=setTimeout((()=>{this.container.style.animationName=""}),300);let i;const o=()=>{this.container.style.animationName="",this.container.style.removeProperty("overflow"),clearTimeout(t),clearTimeout(i)};i=setTimeout((()=>{this.container.style.removeProperty("overflow"),this.container.removeEventListener("animationend",o)}),350),this.container.addEventListener("animationend",o,{once:!0})}}async _toggle(e){this.placement=this._calculatePlacement(),this.fixedWidth?this.container.style.setProperty("overflowX","hidden"):this.container.style.removeProperty("overflowX"),this._checkWindowBoundaries(),this.controlled||(this.open=!this.open),this._toggleParentButton(),await this.updateComplete,this.dispatchEvent(new CustomEvent("toggle",{detail:{newState:!this.open,prevState:this.open,triggerEvent:e},bubbles:!0,composed:!0}))}_toggleParentButton(){if(this.object instanceof c.$){const e=this.object;this.open?e.active=!0:e.active=!1}}_uninstallIntersectionObserver(){null!==this._intersectionObserver&&this.object&&this._intersectionObserver.unobserve(this.object)}_installIntersectionObserver(){this.object&&(null===this._intersectionObserver&&(this._intersectionObserver=new window.IntersectionObserver(this._handleIntersection,{root:null,rootMargin:"0px",threshold:0})),this._intersectionObserver.observe(this.object))}};r([(0,n.MZ)({type:Boolean,reflect:!0,converter:n.Bs}),a("design:type",Object)],h.prototype,"open",void 0),r([(0,n.MZ)({type:Boolean,converter:n.Bs}),a("design:type",Object)],h.prototype,"disabled",void 0),r([(0,n.MZ)({type:Boolean,attribute:"click-outside-close",converter:n.Bs}),a("design:type",Object)],h.prototype,"clickOutsideClose",void 0),r([(0,n.MZ)({type:o,attribute:"force-placement"}),a("design:type",String)],h.prototype,"forcePlacement",void 0),r([(0,n.MZ)({type:Boolean,converter:n.Bs}),a("design:type",Object)],h.prototype,"controlled",void 0),r([(0,n.MZ)({type:Object}),a("design:type",Object)],h.prototype,"object",void 0),r([(0,n.MZ)({type:Object}),a("design:type",Object)],h.prototype,"parentObject",void 0),r([(0,n.MZ)({type:Boolean,reflect:!0,converter:n.Bs,attribute:"fixed-width"}),a("design:type",Object)],h.prototype,"fixedWidth",void 0),r([(0,n.MZ)({type:Boolean,reflect:!0,converter:n.Bs,attribute:"no-overflow"}),a("design:type",Object)],h.prototype,"noOverflow",void 0),r([(0,n.MZ)({type:String,reflect:!0,attribute:"object-id"}),a("design:type",Object)],h.prototype,"objectId",void 0),r([(0,n.MZ)({type:s,attribute:"animation-variant"}),a("design:type",Object)],h.prototype,"animationVariant",void 0),r([(0,n.wk)(),a("design:type",Object)],h.prototype,"placement",void 0),r([(0,n.P)(".trigger"),a("design:type",HTMLElement)],h.prototype,"trigger",void 0),r([(0,n.P)(".container"),a("design:type",HTMLElement)],h.prototype,"container",void 0),h=l=r([(0,n.eV)({tagName:"dropdown",styles:e=>{const{child:t,is:i}=(0,n.zz)(e);return[n.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            :host {
                display: inline-block;
            }

            :host([disabled='true']) * {
                pointer-events: none;
            }

            ${t("items")} {
                position: absolute;
                pointer-events: none;
                box-shadow: 0px 3px 6px #00000026;
                background: var(--dropdown-background, var(--color-primary-2, #fff));
                padding: var(--dropdown-padding, 16px 0);
                margin: 0;
                opacity: 0;
                z-index: 1;
                animation-duration: 0.25s;
                visibility: hidden;
                display: block;
                width: initial;
                height: initial;
            }

            ${t("container")} {
                max-height: 100vh;
            }

            ${i("open")} ${t("items")} {
                pointer-events: auto;
                opacity: 1;
                animation-duration: 0.25s;
                visibility: visible;
            }

            ${i("fixedWidth")} ${t("items")} {
                width: 100%;
            }

            ${i("noOverflow")} ${t("items")} {
                overflow: hidden;
            }

            @keyframes show {
                0% {
                    transform: scale(1);
                    opacity: 0;
                    visibility: visible;
                }
                1% {
                    transform: scale(0);
                    opacity: 0;
                }
                99% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            @keyframes hide {
                0% {
                    transform: scale(1);
                    opacity: 1;
                    visibility: visible;
                }
                99% {
                    transform: scale(0);
                    opacity: 0;
                    visibility: visible;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                    visibility: hidden;
                }
            }
            @keyframes expand {
                0% {
                    max-height: 100vh;
                    opacity: 0;
                    visibility: visible;
                }
                1% {
                    max-height: 0px;
                    opacity: 0;
                }
                99% {
                    max-height: 100vh;
                    opacity: 1;
                }
            }
            @keyframes retract {
                0% {
                    max-height: 100vh;
                    opacity: 1;
                    visibility: visible;
                }
                99% {
                    max-height: 0px;
                    opacity: 0;
                    visibility: visible;
                }
                100% {
                    max-height: 100vh;
                    opacity: 0;
                    visibility: hidden;
                }
            }

            .${(0,n.iz)(o.BelowRightAligned)} {
                top: 100%;
                right: 0;
                transform-origin: top right;
            }

            .${(0,n.iz)(o.BelowLeftAligned)} {
                top: 100%;
                left: 0;
                transform-origin: top left;
            }

            .${(0,n.iz)(o.RightSideTopAligned)} {
                top: 0;
                left: 100%;
                transform-origin: top left;
            }

            .${(0,n.iz)(o.RightSideBottomAligned)} {
                bottom: 0;
                left: 100%;
                transform-origin: bottom left;
            }

            .${(0,n.iz)(o.LeftSideTopAligned)} {
                top: 0;
                right: 100%;
                transform-origin: top right;
            }

            .${(0,n.iz)(o.LeftSideBottomAligned)} {
                bottom: 0;
                right: 100%;
                transform-origin: bottom right;
            }

            .${(0,n.iz)(o.AboveRightAligned)} {
                bottom: 100%;
                right: 0;
                transform-origin: bottom right;
            }

            .${(0,n.iz)(o.AboveLeftAligned)} {
                bottom: 100%;
                left: 0;
                transform-origin: bottom left;
            }
        `]},version:"2.0.95"})],h)}}]);
//# sourceMappingURL=4560.414c9ff7.chunk.js.map