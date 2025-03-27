"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[5629],{5340:(t,e,o)=>{var i;o.d(e,{U:()=>i}),function(t){t.Show="sui-tooltip-show",t.Hide="sui-tooltip-hide",t.Hover="hover",t.Unhover="unhover",t.Opened="open-tooltip",t.Closed="close-tooltip"}(i||(i={}))},5629:(t,e,o)=>{o.r(e),o.d(e,{AnimationProperties:()=>a,Tooltip:()=>d,TooltipLocation:()=>r,TooltipTheme:()=>s});var i=o(5298);const n=i.AH;var r,s;!function(t){t.Auto="auto",t.TopRight="top-right",t.TopLeft="top-left",t.BottomRight="bottom-right",t.BottomLeft="bottom-left",t.TopCenter="top-right",t.RightCenter="top-right",t.LeftCenter="top-left",t.BottomCenter="bottom-right"}(r||(r={})),function(t){t.Default="default",t.Plot="plot"}(s||(s={}));const a={0:{delay:0,duration:0},1:{delay:.5,duration:.2},2:{delay:1,duration:.2}};var h=o(5340),l=o(46988),c=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},p=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let d=class extends i.OC{get manager(){return this._manager}set manager(t){const e=this._manager;t!==e&&(t?(window.addEventListener(h.U.Show,this._managerShow),window.addEventListener(h.U.Hide,this._managerHide)):(window.removeEventListener(h.U.Show,this._managerShow),window.removeEventListener(h.U.Hide,this._managerHide)),this._manager=t,this.requestUpdate("manager",e))}constructor(){super(),this.message="",this.location=r.TopLeft,this.hide=!1,this.controlled=!1,this.object=null,this.objectId=null,this.theme=s.Default,this.ownWidth=!1,this.delay=l.i.Short,this._hover=!1,this._initialLocation=r.TopLeft,this._container=null,this._manager=!1,this._contentCount=0,this._updatePositions=this._updatePositions.bind(this),this._onTooltipMouseenter=this._onTooltipMouseenter.bind(this),this._onTooltipMouseleave=this._onTooltipMouseleave.bind(this),this._clickObject=this._clickObject.bind(this),this._managerHide=this._managerHide.bind(this),this._managerShow=this._managerShow.bind(this)}async show(){await this.updateComplete,this._isElementOutViewport(!0)}close(){this._isElementOutViewport(!1)}async firstUpdated(t){super.firstUpdated(t),await new Promise((t=>setTimeout(t,0))),this._findContainer(),this._initialLocation=this.location,this.objectId&&!this.object&&this.parentElement&&(this.object=this.parentElement.querySelector(`#${this.objectId}`))}update(t){super.update(t);t.get("objectId")&&(this.objectId&&this.parentElement?this.object=this.parentElement.querySelector(`#${this.objectId}`):this.object=null);void 0!==t.get("object")&&(this.object?this.style.position="fixed":this.style.removeProperty("position"))}render(){const[t,e]=(0,i.Yh)(this.tagName.toLowerCase(),{hide:this.hide||!this.message&&!this.manager,hover:!!this.object||this._hover,manager:this.manager,"own-width":this.ownWidth}),{delay:o,duration:n}=a[this.delay],r=this.message?this.message:i.qy` <slot></slot>`,s="top-left"===this.location||"bottom-right"===this.location?"left":"right";return this._contentCount>0?i.qy`
                <div
                    class="${e}"
                    style="--tooltip-delay:${o}s; --tooltip-duration:${n}s"
                >
                    <div
                        class="${t}-trigger ${t}-container ${t}-container-${this.location}"
                    >
                        <div
                            class="${t}-wrapper ${t}-${this.location}"
                            @mouseenter="${this._onTooltipMouseenter}"
                            @mouseleave="${this._onTooltipMouseleave}"
                            style="pointer-events: all"
                        >
                            <div class="${t}-message">${r}</div>
                            <div class="${t}-arrow-${s}"></div>
                        </div>
                    </div>
                </div>
            `:null}_onTooltipMouseenter(){this._currentTooltipServiceOptions&&this._currentTooltipServiceOptions.root&&this._currentTooltipServiceOptions.root.dispatchEvent(new CustomEvent(h.U.Hover,{detail:{}}))}_onTooltipMouseleave(){this._currentTooltipServiceOptions&&this._currentTooltipServiceOptions.root&&this._currentTooltipServiceOptions.root.dispatchEvent(new CustomEvent(h.U.Unhover,{detail:{}}))}_clickObject(){this._isElementOutViewport(!1)}_isElementOutViewport(t){if(this._hover=t,null!=this.object&&this.shadowRoot)return void(this._hover&&(this._updatePositions(),document.addEventListener("scroll",this._updatePositions),this.object.addEventListener("click",this._clickObject)));const e=this.shadowRoot.querySelector("[class*=wrapper]");if(e)if(this.manager&&this._currentTooltipServiceOptions&&this.location===r.Auto){const t=this._currentTooltipServiceOptions.object.getBoundingClientRect(),{width:o,height:i}=e.getBoundingClientRect(),{spaceAbove:n,spaceBelow:r,spaceToLeft:s,spaceToRight:a}=this._calculateSpace(t),h=10,l=o/2+h,c=this._getValign(n,i,h,r),p=this._getHalign(s,l,a);this._updateLocation(c,p)}else this._updateLocationNonManaged(e)}_updateLocation(t,e){this.location=t&&e?t+"-"+e:r.TopLeft}_updateLocationNonManaged(t){this.location=this.location===r.Auto?r.TopLeft:this.location;const{topOutViewport:e,leftOutViewport:o,rightOutViewport:i,bottomOutViewport:n}=this._outViewport(t.getBoundingClientRect());e&&(this.location=r.BottomLeft),e&&o&&(this.location=r.BottomRight),(i||e&&i)&&(this.location=r.BottomLeft),n&&(this.location=r.TopLeft),(n&&o||o)&&(this.location=r.TopRight),e&&i&&o&&n&&(this.location=this._initialLocation)}_getHalign(t,e,o){return t<e&&o>=e?"right":t>=e&&o<e?"left":"right"}_getValign(t,e,o,i){return t>e+o?"top":i>e+o?"bottom":"top"}_calculateSpace(t){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{spaceAbove:t.top,spaceBelow:o-t.bottom,spaceToLeft:t.left,spaceToRight:e-t.right}}_findContainer(){return null===this._container&&(this._container=document.body.querySelector('div[class="sartorius-ui-tooltips"]'),null===this._container&&(this._container=document.createElement("div"),this._container.className="sartorius-ui-tooltips",this._container.style.position="absolute",this._container.style.zIndex="2000",document.body.appendChild(this._container))),this._container}async _updatePositions(){await this.updateComplete,await this._updateInnerPositions(this.object)}async _updateInnerPositions(t){if(t){const e=t.getBoundingClientRect();this.style.top=e.y+"px",this.style.left=e.x+"px",this.style.width=e.width+"px",this.style.height=e.height+"px",this.style.pointerEvents="none"}}_outViewport(t){return{topOutViewport:t.top<0,leftOutViewport:t.left<0,rightOutViewport:t.right>window.innerWidth,bottomOutViewport:t.bottom>window.innerHeight}}_managerHide(t){this._hide(t.detail.root)}_hide(t){if(this._currentTooltipServiceOptions&&this._currentTooltipServiceOptions.root===t){for(this._hover=!1;this.firstChild&&this.lastChild;)this.removeChild(this.lastChild);this._currentTooltipServiceOptions&&this._currentTooltipServiceOptions.hideCallback&&this._currentTooltipServiceOptions.hideCallback(),this._currentTooltipServiceOptions=void 0}}async _managerShow(t){this._currentTooltipServiceOptions&&this._hide(this._currentTooltipServiceOptions.root),t.detail&&t.detail.root&&(this._currentTooltipServiceOptions=t.detail,this.location=t.detail.location||"auto",this.ownWidth=t.detail.ownWidth||!1,this.delay=t.detail.delay||l.i.Short,this._copyChildren(t.detail.root,this),["size","resizeable","draggable"].forEach((e=>{void 0!==t.detail[e]&&(this[e]=t.detail[e])})),await this._updateInnerPositions(t.detail.root.object),this._isElementOutViewport(!0),this._currentTooltipServiceOptions&&this._currentTooltipServiceOptions.showCallback&&this._currentTooltipServiceOptions.showCallback())}_copyChildren(t,e){this._contentCount=t.childNodes.length;let o=0;for(;t.childNodes&&o<t.childNodes.length;)e.appendChild(t.childNodes[o].cloneNode(!0)),++o}};c([(0,i.MZ)({type:String}),p("design:type",Object)],d.prototype,"message",void 0),c([(0,i.MZ)({type:r,reflect:!0}),p("design:type",Object)],d.prototype,"location",void 0),c([(0,i.MZ)({type:Boolean,reflect:!0,converter:i.Bs}),p("design:type",Object)],d.prototype,"hide",void 0),c([(0,i.MZ)({type:Boolean,reflect:!0,converter:i.Bs}),p("design:type",Object)],d.prototype,"controlled",void 0),c([(0,i.MZ)({type:Object}),p("design:type",Object)],d.prototype,"object",void 0),c([(0,i.MZ)({type:String,reflect:!0,attribute:"object-id"}),p("design:type",Object)],d.prototype,"objectId",void 0),c([(0,i.MZ)({type:s,reflect:!0}),p("design:type",Object)],d.prototype,"theme",void 0),c([(0,i.MZ)({type:Boolean,reflect:!0,converter:i.Bs,attribute:"own-width"}),p("design:type",Object)],d.prototype,"ownWidth",void 0),c([(0,i.MZ)({type:l.i,reflect:!0,attribute:"delay"}),p("design:type",Object)],d.prototype,"delay",void 0),c([(0,i.MZ)({type:Boolean,reflect:!0,converter:i.Bs}),p("design:type",Object),p("design:paramtypes",[Object])],d.prototype,"manager",null),c([(0,i.wk)(),p("design:type",Object)],d.prototype,"_hover",void 0),d=c([(0,i.eV)({tagName:"tooltip",styles:t=>{const{child:e,is:o}=(0,i.zz)(t),r=(0,i.Jy)("color_primary_2"),s=(0,i.Jy)("color_primary_3");return[i.iF,n`
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
                display: flex;
            }

            :host([manager]),
            :host([controlled]) {
                display: inline-block;
                position: fixed;
            }

            ${o("manager")} {
                width: 100%;
                height: 100%;
            }

            ${e("container")} {
                display: flex;
                align-items: center;
                flex-direction: column-reverse;
                position: relative;
            }

            ${o("manager")} ${e("container")} {
                width: 100%;
                height: 100%;
            }

            ${e("wrapper")} {
                visibility: hidden;
                opacity: 0;

                position: absolute;
                display: flex;
                flex-direction: column;
                z-index: var(--tool-tip-z-index, 2000);
                width: max-content;
            }

            ${e("arrow-left")} {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 7px 0 0 8px;
                border-color: ${s} transparent transparent transparent;
            }

            ${e("arrow-right")} {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 7px 8px 0 0;
                border-color: ${s} transparent transparent transparent;
            }

            ${e("message")} {
                font-size: 12px;
                background-color: ${s};
                color: ${r};
                margin: 0;
                padding: 8px 10px;
            }

            ${o("!own-width")} ${e("message")} {
                max-width: 200px;
            }

            ${e("top-right")} {
                align-items: flex-start;
                bottom: 100%;
                left: 50%;
                margin-bottom: 5px;
            }

            ${e("top-left")} {
                align-items: flex-end;
                bottom: 100%;
                right: 50%;
                margin-bottom: 5px;
            }

            ${e("container-bottom-right")} {
                flex-direction: column;
            }

            ${e("bottom-right")} {
                flex-direction: column-reverse;
                top: 100%;
                left: 50%;
                margin-top: 0px;
            }

            ${e("bottom-right")} ${e("arrow-left")} {
                transform: rotate(180deg);
            }

            ${e("bottom-left")} {
                flex-direction: column-reverse;
                align-items: flex-end;
                top: 100%;
                right: 50%;
                margin-top: 0px;
            }

            ${e("bottom-left")} ${e("arrow-right")} {
                transform: rotate(180deg);
            }

            ${e("bottom-center")} {
                flex-direction: column-reverse;
                top: 100%;
                left: 50%;
                margin-top: 0px;
            }

            ${e("bottom-center")} ${e("arrow-right")} {
                transform: rotate(180deg);
            }

            ${e("top-center")} {
                align-items: flex-start;
                bottom: 100%;
                left: 50%;
                margin-bottom: 5px;
            }

            ${e("right-center")} {
                align-items: flex-start;
                bottom: 100%;
                left: 50%;
                margin-bottom: 5px;
            }

            ${e("left-center")} {
                align-items: flex-start;
                bottom: 100%;
                left: 50%;
                margin-bottom: 5px;
            }
            ${o("!hide","hover")} ${e("trigger")} ${e("top-center")},
            ${o("!hide","hover")} ${e("trigger")} ${e("right-center")},
            ${o("!hide","hover")} ${e("trigger")} ${e("left-center")},
            ${o("!hide","hover")} ${e("trigger")} ${e("bottom-center")},
            ${o("!hide","hover")} ${e("trigger")} ${e("top-right")},
            ${o("!hide","hover")} ${e("trigger")} ${e("top-left")},
            ${o("!hide","hover")} ${e("trigger")} ${e("bottom-right")},
            ${o("!hide","hover")} ${e("trigger")} ${e("bottom-left")} {
                visibility: visible;
                opacity: 1;
                transition: opacity var(--tooltip-duration);
                transition-delay: var(--tooltip-delay);
            }

            :host([theme='plot']) ::slotted(p) {
                margin: 0;
            }
        `]},version:"2.0.74"}),p("design:paramtypes",[])],d)},46988:(t,e,o)=>{var i,n;o.d(e,{c:()=>i,i:()=>n}),function(t){t.Auto="auto",t.TopRight="top-right",t.TopLeft="top-left",t.BottomRight="bottom-right",t.BottomLeft="bottom-left",t.TopCenter="top-right",t.RightCenter="top-right",t.LeftCenter="top-left",t.BottomCenter="bottom-right"}(i||(i={})),function(t){t[t.None=0]="None",t[t.Short=1]="Short",t[t.Long=2]="Long"}(n||(n={}))}}]);
//# sourceMappingURL=5629.3f7842ae.chunk.js.map