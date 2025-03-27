"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[27],{90027:(e,t,o)=>{o.r(t),o.d(t,{TabController:()=>p,TabControllerEvent:()=>c,TabControllerSize:()=>r,TabMarker:()=>d,TabMarkerEvent:()=>s});var i=o(5298);const n="1.0.5";var r,s;!function(e){e.Default="default",e.Large="large"}(r||(r={})),function(e){e.TabChange="tab-change"}(s||(s={}));var l=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.OC{constructor(){super(...arguments),this.lined=!1,this.disabled=!1,this.error=!1,this.selected=!1,this.size=r.Default}render(){const[e,t]=(0,i.Yh)(this.tagName.toLowerCase(),{lined:this.lined,disabled:this.disabled,error:this.error,selected:this.selected,[this.size]:!0,first:this.index<=1});return i.qy`
            <button
                tabindex=${this.disabled?-1:0}
                custom-disabled="no"
                ?disabled="${this.disabled}"
                has-error="errorstr"
                class="${t}"
                @click="${this._handleTabClick}"
            >
                <div class="${e}-button-text">
                    <slot></slot>
                </div>
                <div class="${e}-button-border"></div>
            </button>
        `}_handleTabClick(){this.disabled||this._dispatchEvent(s.TabChange)}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{tab:this,index:this.index},bubbles:!0,composed:!0,cancelable:!0}))}};var c;l([(0,i.MZ)({type:Number,reflect:!0}),a("design:type",Object)],d.prototype,"index",void 0),l([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!0}),a("design:type",Object)],d.prototype,"lined",void 0),l([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!0}),a("design:type",Object)],d.prototype,"disabled",void 0),l([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!0}),a("design:type",Object)],d.prototype,"error",void 0),l([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!0}),a("design:type",Object)],d.prototype,"selected",void 0),l([(0,i.MZ)({type:r,reflect:!0}),a("design:type",Object)],d.prototype,"size",void 0),d=l([(0,i.eV)({tagName:"tab-marker",styles:e=>{const{root:t,child:o,is:n}=(0,i.zz)(e);return[i.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}:host{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;flex-shrink:0;}${t}{display:flex;flex-direction:column;justify-content:end;align-items:center;position:relative;background:0;outline:0;border:0;user-select:none;height:32px;overflow:hidden;padding:0;cursor:pointer;font-family:Roboto,Arial,Open Sans,Helvetica,sans-serif;}${n("!selected","!error")}:hover ${o("button-border")}{background-color:${(0,i.Jy)("color_secondary_7")};transition:background-color 0.15s;}${o("button-text")}{margin-left:16px;display:inline-block;font-weight:500;font-size:14px;margin-right:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:${(0,i.Jy)("color_secondary_8")};white-space:nowrap;margin-bottom:7px;}${o("button-border")}{height:1px;width:calc(100% - 32px);background:0;margin-bottom:0;position:absolute;}${n("disabled")}{pointer-events:none;}${n("disabled")} ${o("button-text")}{color:${(0,i.Jy)("color_secondary_4")};}${n("disabled")} ${o("button-border")}{opacity:0;}${n("selected")}{cursor:initial;}${n("selected")} ${o("button-border")}{height:2px;background-color:black;}${n("selected")} ${o("button-text")}{color:black;}${n("first","!lined")} ${o("button-text")}{margin-left:0;}${n("error")}:hover ${o("button-border")}{transition:background-color 0.15s;background-color:${(0,i.Jy)("color_traffic_light_1")} !important;}${n("error")} ${o("button-text")}{color:${(0,i.Jy)("color_traffic_light_1")};}${n("error","selected")} ${o("button-border")}{background-color:${(0,i.Jy)("color_traffic_light_1")} !important;}${n("default")}{height:32px;}${n("default","lined")} ${o("button-text")}{margin-bottom:0;}${n("large")}{height:48px;}${n("large")} ${o("button-text")}{margin-bottom:15px;}${n("large","lined")} ${o("button-text")}{margin-bottom:0;}${n("lined")} ${o("button-border")}{margin-top:0px;width:100%;position:absolute;height:1px;bottom:0;transform:none;align-self:flex-end;}${n("lined","selected")} ${o("button-border")}{height:2px;background-color:black;}${n("first","!lined")} ${o("button-border")}{left:0;width:calc(100% - 16px);}${n("lined")} ${o("button-text")}{height:100%;display:flex;align-items:center;}${t}:focus-visible:before{content:' ';display:block;position:absolute;inset:0;border:2px dashed black;}`]},version:n})],d),function(e){e.TabControllerChange="tab-controller-change"}(c||(c={}));var b=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},h=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends i.OC{get selectedTab(){return this._selectedTab}set selectedTab(e){e!==this._selectedTab&&(this._selectedTab=e,this._changeSelectedTab(e),this.requestUpdate())}constructor(){super(),this.lined=!1,this.size=r.Default,this._tabs=[],this._tabChangeHandler=this._tabChangeHandler.bind(this),this.addEventListener(s.TabChange,this._tabChangeHandler)}disconnectedCallback(){this.removeEventListener(s.TabChange,this._tabChangeHandler),super.disconnectedCallback()}render(){const[e,t]=(0,i.Yh)(this.tagName.toLowerCase(),{lined:this.lined,[this.size]:!0});return i.qy`
            <div class="${t}">
                <div class="${e}-content">
                    <div class="${e}-content-wrapper">
                        <slot class="${e}-slot-wrapper" @slotchange="${this._handleSlotChange}"></slot>
                    </div>
                </div>
            </div>
        `}_handleSlotChange(e){let t=!1;this._tabs=[];e.target.assignedElements().forEach(((e,o)=>{const i=e;i.index=o+1,i.lined=this.lined,i.size=this.size,this._tabs.push(i),(i.selected||this.selectedTab===i.index)&&(t=!0,this.selectedTab=i.index,i.selected=!0)})),t||(this._tabs[0].selected=!0,this.selectedTab=this._tabs[0].index)}_tabChangeHandler(e){this._tabs.forEach((t=>{t.index===e.detail.index?(t.selected=!0,this.selectedTab=t.index):t.selected=!1})),this._scrollToSelectedTab()}_changeSelectedTab(e){this._tabs.forEach((t=>{t.index===e?(t.selected=!0,this.selectedTab=t.index,this._dispatchEvent(c.TabControllerChange,t),this._scrollToSelectedTab()):t.selected=!1}))}_scrollToSelectedTab(){if(this.selectedTab>0&&this._tabs[this.selectedTab-1]&&this._tabs[this.selectedTab-1]instanceof d){const e=this.shadowRoot.querySelector('[class$="-content-wrapper"]'),t=this._tabs[this.selectedTab-1];if(e&&t){const o=e.getBoundingClientRect(),i=t.getBoundingClientRect();e.scrollTo({left:e.scrollLeft+(i.left-o.left+i.width/2-o.width/2),behavior:"smooth"})}}}_dispatchEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{tab:t,index:t.index},bubbles:!0,composed:!0,cancelable:!0}))}};b([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!0}),h("design:type",Object)],p.prototype,"lined",void 0),b([(0,i.MZ)({type:r,reflect:!0}),h("design:type",Object)],p.prototype,"size",void 0),b([(0,i.MZ)({type:Number,reflect:!0,attribute:"selected-tab"}),h("design:type",Number),h("design:paramtypes",[Number])],p.prototype,"selectedTab",null),b([(0,i.wk)(),h("design:type",Object)],p.prototype,"_tabs",void 0),p=b([(0,i.eV)({tagName:"tab-controller",styles:e=>{const{is:t,child:o}=(0,i.zz)(e);return[i.AH`${o("content")}{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;overflow:hidden;width:100%;}${o("slot-wrapper")}{max-width:100%;width:100%;display:flex;flex-direction:row;}${o("content-wrapper")}{max-width:100%;display:flex;flex-direction:row;overflow:hidden;}${t("lined")} ${o("content")}{box-sizing:border-box;border-bottom:1px solid ${(0,i.Jy)("color_secondary_3")};outline:0;}${t("lined","default")} ${o("content")}{height:32px;}${t("lined","large")} ${o("content")}{height:48px;}`]},version:n}),h("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=27.50c18810.chunk.js.map