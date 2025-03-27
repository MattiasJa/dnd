"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[4008],{94008:(e,t,o)=>{o.r(t),o.d(t,{Card:()=>d,CardEvent:()=>i,CardSlot:()=>l,Cards:()=>p});var s=o(5298);const n="2.0.45";var l,i;!function(e){e.ICON="icon-slot",e.MAIN="main-heading-slot",e.SUB="sub-heading-slot",e.DESCRIPTION="description-slot"}(l||(l={})),function(e){e.Toggle="card-toggle",e.Submit="card-submit"}(i||(i={}));var c=function(e,t,o,s){var n,l=arguments.length,i=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(l<3?n(i):l>3?n(t,o,i):n(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},r=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.OC{constructor(){super(...arguments),this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("dblclick",this._handleDoubleClick)}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("dblclick",this._handleDoubleClick),super.disconnectedCallback()}render(){const[e,t]=(0,s.Yh)(this.tagName.toLowerCase(),{selected:this.selected,disabled:this.disabled});return s.qy`
            <div class="${t}" @click="${this._handleToggle}" tabindex="1">
                <div class="${e}-top">
                    <slot name="${l.ICON}"></slot>
                    <div class="${e}-heading">
                        <slot name="${l.MAIN}"></slot>
                        <div class="${e}-sub-heading">
                            <slot name="${l.SUB}"></slot>
                        </div>
                    </div>
                </div>
                <div class="${e}-description"><slot name="${l.DESCRIPTION}"></slot></div>
            </div>
        `}_handleKeyDown(e){"Enter"!==e.code&&"Space"!==e.code||(e.preventDefault(),this._handleToggle())}_handleDoubleClick(){this._dispatchEvent(i.Submit)}_handleToggle(){this.selected||(this.selected=!this.selected,this._dispatchEvent(i.Toggle))}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{selected:this.selected},bubbles:!0,composed:!0,cancelable:!0}))}};c([(0,s.MZ)({type:Boolean,reflect:!0,converter:s.Bs}),r("design:type",Object)],d.prototype,"selected",void 0),c([(0,s.MZ)({type:Boolean,reflect:!0,converter:s.Bs}),r("design:type",Object)],d.prototype,"disabled",void 0),d=c([(0,s.eV)({tagName:"card",styles:e=>{const{root:t,child:o,is:n}=(0,s.zz)(e);return[s.iF,s.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            :host {
                display: block;
            }

            ${t} {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: 278px;
                height: 340px;
                background: #0000000d;
                padding: 16px 24px 24px 24px;
                transition: background 0.3s;
                color: ${(0,s.Jy)("color_primary_3")};
                overflow: hidden;
                outline: none;
                text-overflow: ellipsis;
            }

            ${n("!selected")}:hover {
                transition: background 0.3s;
                background: #0000001a;
            }

            ${n("selected")} {
                background: ${(0,s.Jy)("color_secondary_10")};
                color: ${(0,s.Jy)("color_primary_2")};
                cursor: default;
            }
            ${o("heading")} {
                text-align: center;
                font-size: 24px;
                text-align: center;
                font-weight: 700;
            }
            ${o("top")} {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 16px;
                align-items: center;
            }
            ${o("sub-heading")} {
                padding: 16px 0px;
                font-size: 16px;
                font-weight: 700;
                text-align: center;
            }
            ${o("description")} {
                font-size: 14px;
                color: ${(0,s.Jy)("color_secondary_8")};
                text-align: center;
            }
            ::slotted([slot='icon-slot']) {
                font-size: 128px;
            }
            ${n("disabled")} {
                user-select: not-allowed;
                pointer-events: none;
            }
            ${n("disabled")} ${o("heading")} {
                color: ${(0,s.Jy)("color_secondary_4")};
            }
            ${n("disabled")} ${o("sub-heading")} {
                color: ${(0,s.Jy)("color_secondary_4")};
            }
            ${n("disabled")} ${o("description")} {
                color: ${(0,s.Jy)("color_secondary_4")};
            }
            ${n("disabled")} ::slotted([slot="icon-slot"]) {
                color: ${(0,s.Jy)("color_secondary_4")};
            }

            ${t}:focus-visible {
                outline: 2px solid ${(0,s.Jy)("color_primary_3")};
            }
        `]},version:n})],d);var a=function(e,t,o,s){var n,l=arguments.length,i=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(l<3?n(i):l>3?n(t,o,i):n(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i};let p=class extends s.OC{firstUpdated(e){super.firstUpdated(e)}render(){return s.qy` <slot></slot>`}};p=a([(0,s.eV)({tagName:"cards",styles:()=>[s.iF,s.AH`
            :host {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                flex-grow: 1;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 24px;
            }
        `],version:n})],p)}}]);
//# sourceMappingURL=4008.6c5d13b6.chunk.js.map