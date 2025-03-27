"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[567],{567:(e,t,r)=>{r.r(t),r.d(t,{Spinner:()=>o,SpinnerSize:()=>l,SpinnerVariant:()=>n});var a=r(37982);var i=function(e,t,r,a){var i,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o},s=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.OC{constructor(){super(...arguments),this.size="64px",this.label=""}render(){const[e,t]=(0,a.Yh)(this.tagName.toLowerCase(),{}),r=""!==this.label?a.qy`<div class="${e}-label">${this.label}</div>`:null;let i;switch(this.size){case"large":i="64px";break;case"medium":i="32px";break;case"small":i="16px";break;default:i=this.size}return a.qy`
            <div class="${e}-wrapper">
                <svg
                    class="${t}"
                    width="${i}"
                    height="${i}"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle class="${e}-circle" cx="100" cy="100" r="90" fill="none" stroke-width="20" />
                    <path
                        class="${e}-arc"
                        d=" M 100 10 A 90 90 0 0 1 190 100"
                        fill="none"
                        stroke-width="20"
                        shape-rendering="geometricPrecision"
                    />
                </svg>
                ${r}
            </div>
        `}};var l,n;i([(0,a.MZ)(),s("design:type",Object)],o.prototype,"size",void 0),i([(0,a.MZ)({type:String,reflect:!1}),s("design:type",Object)],o.prototype,"label",void 0),o=i([(0,a.eV)({tagName:"spinner",styles:e=>{const{root:t,child:r}=(0,a.zz)(e);return[a.iF,a.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            :host {
                display: contents;
            }

            ${t} {
                overflow: visible;
                animation: rotate 1s infinite linear;
            }

            ${r("wrapper")} {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            ${r("label")} {
                margin-top: 8px;
                color: var(--color-text-muted);
            }

            ${r("circle")} {
                stroke: var(--color-surface-transparent);
            }

            ${r("arc")} {
                stroke: var(--color-surface-action-active-full);
            }

            @keyframes rotate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(359deg);
                }
            }
        `]},version:"2.0.28"})],o),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(l||(l={})),function(e){e.LIGHT_GREY="light-grey",e.DARK_GREY="dark-grey",e.GREY="grey"}(n||(n={}))}}]);
//# sourceMappingURL=567.d767598e.chunk.js.map