"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[7281],{17281:(e,t,o)=>{o.r(t),o.d(t,{Placeholder:()=>c});var r=o(5298);var n=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.OC{constructor(){super(...arguments),this.container=!1,this.onGray=!1}render(){const[e,t]=(0,r.Yh)(this.tagName.toLowerCase(),{container:this.container,onGray:this.onGray});return r.qy`
            <div class="${t}">
                <p class="${e}-text-wrapper">
                    <slot class="${e}-text"></slot>
                </p>
            </div>
        `}};n([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),a("design:type",Object)],c.prototype,"container",void 0),n([(0,r.MZ)({type:Boolean,converter:r.Bs,attribute:"on-gray"}),a("design:type",Object)],c.prototype,"onGray",void 0),c=n([(0,r.eV)({tagName:"placeholder",styles:e=>{const{root:t,child:o,is:n}=(0,r.zz)(e);return[r.iF,r.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            ${t} {
                display: flex;
                width: 100%;
                height: fit-content;
                align-items: flex-start;
                justify-content: center;
                background: transparent;
            }
            ${o("text-wrapper")} {
                margin: 0;
                padding: 36px 3px;
                max-width: 70%;
                line-height: 21px;
                text-align: center;
            }
            ${o("text")} {
                font-size: 14px;
                font-style: italic;
                color: ${(0,r.Jy)("color_secondary_7")};
            }
            ${n("onGray")} ${o("text")} {
                color: ${(0,r.Jy)("color_secondary_8")};
            }
            ${n("container")} {
                height: 100%;
                align-items: center;
            }
        `]},version:"2.0.36"})],c)}}]);
//# sourceMappingURL=7281.ce3746af.chunk.js.map