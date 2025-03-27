"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[8685],{8685:(e,t,o)=>{o.r(t),o.d(t,{Link:()=>c,LinkSlot:()=>n});var r=o(5298);var n;!function(e){e.ICON_SLOT="link-icon-slot"}(n||(n={}));var l=function(e,t,o,r){var n,l=arguments.length,a=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(l<3?n(a):l>3?n(t,o,a):n(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.OC{render(){var e;const[,t]=(0,r.Yh)(this.tagName.toLowerCase(),{onBlack:!!this.onBlack});return r.qy` <a
            href="${null!==(e=this.url)&&void 0!==e?e:""}"
            class="${t}"
            rel="noopener noreferrer"
            target="${this.openSeparate?"_blank":""}"
            @click=${e=>{this.callback&&(this.callback(e),e.preventDefault(),e.stopPropagation())}}
            ><slot name="${n.ICON_SLOT}"></slot><slot></slot
        ></a>`}};l([(0,r.MZ)({type:String,reflect:!0}),a("design:type",Object)],c.prototype,"url",void 0),l([(0,r.MZ)({type:Function,reflect:!1}),a("design:type",Object)],c.prototype,"callback",void 0),l([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs,attribute:"on-black"}),a("design:type",Object)],c.prototype,"onBlack",void 0),l([(0,r.MZ)({type:Boolean,converter:r.Bs,attribute:"open-separate"}),a("design:type",Object)],c.prototype,"openSeparate",void 0),c=l([(0,r.eV)({tagName:"link",styles:e=>{const{root:t,is:o}=(0,r.zz)(e);return[r.iF,r.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            ${t} {
                cursor: pointer;
                color: ${(0,r.Jy)("color_tertiary_5")};
                text-decoration: none;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            ${t}:hover {
                text-decoration: underline;
            }
            ${o("!onBlack")}:visited {
                color: ${(0,r.Jy)("color_tertiary_4")};
            }

            ::slotted([slot='link-icon-slot']) {
                margin-right: 7px;
            }

            ${o("onBlack")} {
                color: ${(0,r.Jy)("color_primary_2")};
            }

            ${o("onBlack")}:visited {
                color: ${(0,r.Jy)("color_primary_2")};
            }
        `]},version:"2.0.18"})],c)}}]);
//# sourceMappingURL=8685.e577b978.chunk.js.map