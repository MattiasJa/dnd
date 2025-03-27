"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[1241],{41241:(t,e,o)=>{o.r(e),o.d(e,{InfoBox:()=>l,InfoBoxSlot:()=>s});var n=o(5298);var s;!function(t){t.ICON_SLOT="icon-slot"}(s||(s={}));var i=function(t,e,o,n){var s,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(i<3?s(r):i>3?s(e,o,r):s(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r},r=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends n.OC{constructor(){super(...arguments),this.centerIcon=!1,this.small=!1}render(){const[t,e]=(0,n.Yh)(this.tagName.toLowerCase(),{centerIcon:this.centerIcon,small:this.small});return n.qy`
            <div class="${e}">
                <slot name="${s.ICON_SLOT}"></slot>
                <div class="${t}-text">
                    <slot></slot>
                </div>
            </div>
        `}};i([(0,n.MZ)({type:Boolean,converter:n.Bs,attribute:"center-icon"}),r("design:type",Object)],l.prototype,"centerIcon",void 0),i([(0,n.MZ)({type:Boolean,converter:n.Bs}),r("design:type",Object)],l.prototype,"small",void 0),l=i([(0,n.eV)({tagName:"info-box",styles:t=>{const{root:e,child:o,is:s}=(0,n.zz)(t),i=(0,n.Jy)("color_secondary_8");return[n.iF,n.AH`
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
                width: 100%;
                height: auto;
                position: relative;
            }

            ${e} {
                background: var(--infobox-background, #0000000d);
                padding: 16px;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
            }

            ${s("centerIcon")} {
                align-items: center;
            }
            ${s("small")} ${o("text")} {
                font-size: 12px;
                line-height: 18px;
            }
            ${s("small")} ::slotted([slot='icon-slot']) {
                font-size: 20px;
            }

            ${o("text")} {
                color: var(--infobox-text-color, ${i});
                font-size: 14px;
                line-height: 21px;
            }
            ::slotted([slot='icon-slot']) {
                font-size: 24px;
                padding-right: 12px;
            }

            @media screen and (max-width: 300px) {
                ${e} {
                    flex-direction: column;
                }
                ::slotted([slot='icon-slot']) {
                    padding-bottom: 16px;
                }
            }
        `]},version:"2.0.21"})],l)}}]);
//# sourceMappingURL=1241.06b5e1d5.chunk.js.map