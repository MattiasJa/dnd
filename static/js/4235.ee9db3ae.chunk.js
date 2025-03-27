"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[4235],{4235:(e,t,i)=>{i.r(t),i.d(t,{FormSegment:()=>o,FormSegmentHeadingLevel:()=>s});var r=i(5298);var s;!function(e){e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4"}(s||(s={}));var d=function(e,t,i,r){var s,d=arguments.length,n=d<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(d<3?s(n):d>3?s(t,i,n):s(t,i))||n);return d>3&&n&&Object.defineProperty(t,i,n),n},n=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends r.OC{get disabled(){return this._disabled}set disabled(e){const t=this._disabled;t!==e&&(this._disabled=e,this._slot.assignedNodes().filter((e=>1===e.nodeType)).forEach((t=>{e?t.setAttribute("disabled","true"):t.removeAttribute("disabled")})),this.requestUpdate("disabled",t))}constructor(){super(),this.headingLevel=s.H2,this._disabled=!1}render(){const[e,t]=(0,r.Yh)(this.tagName.toLowerCase(),{});return r.qy`
            <div class="${t}">
                ${this._renderHeading(e)}
                <div class="${e}-grid">
                    <slot></slot>
                </div>
            </div>
        `}_renderHeading(e){return this.heading&&[s.H1,s.H2,s.H3,s.H4].indexOf(this.headingLevel)>-1?r.qy`<${(0,r.Bk)(this.headingLevel)} class='${e}-heading'>${this.heading}</${(0,r.Bk)(this.headingLevel)}>`:r.qy``}};o.ICON_SLOT="icon-slot",o.LABEL_SLOT="",d([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),n("design:type",Object),n("design:paramtypes",[Object])],o.prototype,"disabled",null),d([(0,r.MZ)({type:String}),n("design:type",Object)],o.prototype,"heading",void 0),d([(0,r.MZ)({type:String,attribute:"heading-level"}),n("design:type",Object)],o.prototype,"headingLevel",void 0),d([(0,r.P)("slot"),n("design:type",HTMLSlotElement)],o.prototype,"_slot",void 0),o=d([(0,r.eV)({tagName:"form-segment",styles:e=>{const{child:t}=(0,r.zz)(e);return[r.iF,r.AH`
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
                width: 100%;
            }

            ${t("grid")} {
                display: grid;
                grid-template-columns: repeat(12, [col] 1fr);
                grid-column-gap: var(--grid-column-gap, 16px);
                grid-row-gap: var(--grid-row-gap, 20px);
            }

            ${t("grid")} ::slotted(*) {
                grid-column: var(--column-span, span 12);
                box-sizing: border-box;
            }

            @media screen and (max-width: ${r.U6}px) {
                ${t("grid")} ::slotted(*) {
                    grid-column: var(--column-span-tablet, span 12);
                }
            }
            @media screen and (max-width: ${r.mo}px) {
                ${t("grid")} ::slotted(*) {
                    grid-column: var(--column-span-mobile, span 12);
                }
            }
        `]},version:"2.0.36"}),n("design:paramtypes",[])],o)}}]);
//# sourceMappingURL=4235.ee9db3ae.chunk.js.map