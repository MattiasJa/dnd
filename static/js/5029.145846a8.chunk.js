"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[5029],{3044:(t,o,e)=>{var r;e.d(o,{V:()=>r}),function(t){t.Primary="primary",t.Secondary="secondary",t.Tertiary="tertiary",t.TertiaryOnBlack="tertiary-on-black",t.HighSeverity="high-severity"}(r||(r={}))},15029:(t,o,e)=>{e.d(o,{$:()=>d});var r=e(5298);var i=e(3044),n=e(72681),a=e(48353);var l,c=function(t,o,e,r){var i,n=arguments.length,a=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,o,e,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(o,e,a):i(o,e))||a);return n>3&&a&&Object.defineProperty(o,e,a),a},s=function(t,o){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,o)};let d=l=class extends r.OC{get loaded(){return this._loaded}set loaded(t){t&&this._loadingTimerHandle&&(clearTimeout(this._loadingTimerHandle),delete this._loadingTimerHandle),this._loaded!==t&&(t?(this._loaded=t,this.requestUpdate()):this._loadingTimerHandle=setTimeout((()=>{!t&&this.loaded&&void 0===this._loadingTimerHandle||(delete this._loadingTimerHandle,this._loaded=t,this.requestUpdate())}),400))}constructor(){super(),this.active=!1,this.disabled=!1,this.fullWidth=!1,this.fullHeight=!1,this.type=i.V.Primary,this.design=a.b.Default,this.compact=!1,this.buttonSize=n.M.Default,this.buttonType="button",this.unseenNotification=!1,this.iconAfter=!1,this._spinnerVariant="light-grey",this._loaded=!0,this._renderIconSlot=()=>r.qy`<slot name="${a.v.ICON}" @slotchange=${this._onIconSlotChange}></slot>`,this._onIconSlotChange=t=>{const o=t.target;this._hasIcon=o&&o.assignedNodes().length>0},this._disabled=()=>this.disabled||!this.loaded||this._loaderShown,this.addEventListener("click",this._onClick)}connectedCallback(){const t=[];t.push({module:()=>e.e(4132).then(e.bind(e,14132)),elem:["Loader"]}),t.push({module:()=>e.e(2979).then(e.bind(e,22979)),elem:["Spinner"]}),l.dynSubRegister(t,(()=>{this.addEventListener("loader-start",this._handleLoaderStart),this.addEventListener("loader-end",this._handleLoaderEnd),super.connectedCallback()}))}focus(){this._button.focus()}blur(){this._button.blur()}updated(t){t.has("active")&&t.get("active")&&!this.active&&this.dispatchEvent(new CustomEvent("button-active-toggle",{bubbles:!0,composed:!0,detail:{active:this.active}}))}render(){const[t,o]=(0,r.Yh)(this.tagName.toLowerCase(),{"full-width":this.fullWidth,"full-height":this.fullHeight,[this.type]:!0,disabled:this._disabled(),active:this.active,compact:this.compact,[this.buttonSize]:!0,[this.design]:!!this.design,"unseen-notifications":this.unseenNotification,responsive:this._hasIcon,"icon-after":this.iconAfter}),e=this._renderButtonLoader(t);return r.qy`
            <button
                class="${o}"
                ?disabled="${this._disabled()}"
                ?active="${this.active}"
                type="${(0,r.JR)(this.buttonType?this.buttonType:void 0)}"
                button-size="${this.buttonSize}"
            >
                <div class="${t}-inner">${e}</div>
            </button>
        `}_renderButtonLoader(t){this._setSpinnerVariant();const o=r.qy`<span class="${t}-label"><slot></slot></span>`,e=this.loaded&&!this._loaderShown?"unset":this._getButtonWidth()+"px";return this.design===a.b.Notification?r.qy`<div class="${t}-circle"><slot name="${a.v.NUMBER}"></slot></div>
                ${o}`:this._hasIcon?r.qy`<${l.Loader.tag} toggleable class="${t}-loader" loaded="${this.loaded}">
                <div class="${t}-loader-icon" slot="loader-slot"><${l.Spinner.tag} variant="${this._spinnerVariant}" size="16px"></${l.Spinner.tag}></div>
                    ${this._renderIconSlot()}
                </${l.Loader.tag}> ${o}`:r.qy`
                    <${l.Loader.tag} toggleable class="${t}-loader" loaded="${this.loaded}" style="width: ${e}">
                        <${l.Spinner.tag} variant="${this._spinnerVariant}" size="16px" slot="loader-slot">
                        </${l.Spinner.tag}>${this._renderIconSlot()} ${o}
                    </${l.Loader.tag}>
                `}_getButtonWidth(){return this._inner?this._inner.offsetWidth:0}_setSpinnerVariant(){switch(this.type){case i.V.Primary:this._spinnerVariant="grey";break;case i.V.TertiaryOnBlack:this._spinnerVariant="dark-grey";break;case i.V.HighSeverity:this._spinnerVariant="grey";break;default:this._spinnerVariant="light-grey"}}_handleLoaderStart(){this._showLoaderTimerHandle=setTimeout((()=>{this._loaderShown=!0}),400)}_handleLoaderEnd(){this._showLoaderTimerHandle&&(clearTimeout(this._showLoaderTimerHandle),delete this._showLoaderTimerHandle),this._loaderShown=!1}_onClick(t){if(this._disabled())t.stopImmediatePropagation();else if("submit"===this.buttonType){let t=this.form||this.closest("form");if(!t&&this.parentElement){const o=this.parentElement.querySelectorAll("form");1===o.length&&(t=o[0])}if(t){const o=document.createElement("button");o.type="submit",o.style.display="none",t.appendChild(o),o.click(),o.remove()}}}};c([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),s("design:type",Object)],d.prototype,"active",void 0),c([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),s("design:type",Object)],d.prototype,"disabled",void 0),c([(0,r.MZ)({type:Boolean,reflect:!0,attribute:"full-width",converter:r.Bs}),s("design:type",Object)],d.prototype,"fullWidth",void 0),c([(0,r.MZ)({type:Boolean,reflect:!0,attribute:"full-height",converter:r.Bs}),s("design:type",Object)],d.prototype,"fullHeight",void 0),c([(0,r.MZ)({type:i.V}),s("design:type",Object)],d.prototype,"type",void 0),c([(0,r.MZ)({type:a.b}),s("design:type",Object)],d.prototype,"design",void 0),c([(0,r.MZ)({type:Boolean,converter:r.Bs}),s("design:type",Object)],d.prototype,"compact",void 0),c([(0,r.MZ)({type:n.M,attribute:"button-size"}),s("design:type",Object)],d.prototype,"buttonSize",void 0),c([(0,r.MZ)({type:String,attribute:"button-type"}),s("design:type",Object)],d.prototype,"buttonType",void 0),c([(0,r.MZ)({type:Object,attribute:!1}),s("design:type",Object)],d.prototype,"form",void 0),c([(0,r.MZ)({type:Boolean,converter:r.Bs,attribute:"unseen-notifications"}),s("design:type",Object)],d.prototype,"unseenNotification",void 0),c([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs,attribute:"icon-after"}),s("design:type",Object)],d.prototype,"iconAfter",void 0),c([(0,r.MZ)({type:Boolean,converter:r.Bs}),s("design:type",Object),s("design:paramtypes",[Object])],d.prototype,"loaded",null),c([(0,r.wk)(),s("design:type",Object)],d.prototype,"_hasIcon",void 0),c([(0,r.wk)(),s("design:type",Object)],d.prototype,"_loaderShown",void 0),c([(0,r.P)("button"),s("design:type",Object)],d.prototype,"_button",void 0),c([(0,r.P)('[class$="-inner"]'),s("design:type",Object)],d.prototype,"_inner",void 0),d=l=c([(0,r.eV)({tagName:"button",styles:t=>{const{root:o,child:e,is:i}=(0,r.zz)(t);return[r.iF,r.AH`
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
            :host([full-width]) {
                width: 100%;
            }
            :host([full-height]) {
                height: 100%;
            }

            ${o} {
                border: 1px solid transparent;
                border-radius: 0;
                cursor: var(--button-cursor, pointer);
                font-size: 1rem;
                height: var(--button-height, 40px);
                outline: 0;
                appearance: auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                position: relative;
                text-align: center;
                text-decoration: none;
                text-transform: none;
                user-select: none;
                width: var(--button-width, auto);
                min-width: var(--button-min-width);
                vertical-align: top;
                line-height: normal;
                padding-left: var(--button-padding, 16px);
                padding-right: var(--button-padding, 16px);
                margin: 0;
                font-weight: var(--button-font-weight, 700);
                --expand-duration: 0.2s;
            }
            ${i("!compact")} ${e("loader-icon")} {
                padding: 4px;
                margin-right: 8px;
            }
            ${e("loader")} {
                --loader-display: flex;
                --loader-align: center;
                --loader-justify: center;
                --loader-slot-display: block;
                --loader-content-gap: 0px;
            }

            ${i("compact")} {
                width: 40px;
                padding: 0;
                font-size: 1.5rem;
            }
            ${i("compact","small")} {
                font-size: 1.5rem;
                width: 36px;
            }
            ${i("compact","large","!notification")} {
                font-size: 1.5rem;
                width: 48px;
            }
            ${i("compact","extra-small")} {
                width: 18px;
            }
            ${i("compact","inline-small")} {
                width: 24px;
            }
            ${i("compact")} ${e("label")} {
                display: none;
            }

            ${e("label")} {
                display: flex;
                align-items: center;
            }

            ${i("large")} {
                height: var(--button-height, 48px);
                font-size: 1.25rem;
            }
            ${i("inline-small")} {
                height: var(--button-height, 24px);
                font-size: 1rem;
            }
            ${i("small")} {
                height: var(--button-height, 36px);
                font-size: 0.875rem;
                font-weight: var(--button-font-weight, 700);
            }
            ${i("extra-small")} {
                height: var(--button-height, 18px);
                font-size: 1rem;
                font-weight: var(--button-font-weight, 700);
                padding: 0;
            }
            ${i("inline-button")} {
                height: 24px;
                padding: 0 12px;
                font-weight: 500 !important;
                font-size: 0.875rem;
                text-transform: none !important;
                background: ${(0,r.Jy)("color_secondary_2")} !important;
                color: var(--color-primary-3, #000);
            }

            ${i("!compact")} ::slotted([slot='icon-slot']) {
                margin-right: 8px;
                font-size: 1.5rem;
            }
            ${i("!compact","large")} ::slotted([slot='icon-slot']) {
                font-size: 1.5rem;
            }
            ${i("!compact","small")} ::slotted([slot='icon-slot']) {
                font-size: 1.5rem;
            }

            ${i("primary","!notification","!disabled")} {
                background-color: var(--color-primary-1);
                color: var(--color-primary-3, #000);
                text-transform: uppercase;
            }
            ${i("high-severity","!notification","!disabled")} {
                background-color: #e60046;
                color: var(--color-primary-2);
                text-transform: uppercase;
            }
            ${i("secondary","!notification","!disabled")} {
                background-color: var(--color-secondary-4, #666);
                color: var(--color-primary-3, #000);
                text-transform: uppercase;
            }
            ${i("tertiary","!notification","!disabled")} {
                font-weight: var(--button-font-weight, 700);
                background-color: var(--button-color, transparent);
                color: var(--button-text-color, var(--color-primary-3, #000));
            }
            ${i("tertiary-on-black","!disabled")} {
                font-weight: var(--button-font-weight, 700);
                background-color: var(--button-color, transparent);
                color: var(--button-text-color, var(--color-primary-2, #fff));
            }

            ${e("inner")} {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ${e("circle")} {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border: 2px solid var(--color-primary-2, #fff);
                border-radius: 50%;
                font-weight: bold;
                margin-right: 8px;
            }

            ${i("primary")} ${e("circle")} {
                border: 2px solid var(--color-primary-3, #000);
            }

            ${i("full-width")} {
                width: 100%;
            }
            ${i("full-height")} {
                height: 100%;
            }
            ${i("primary","!notification","disabled")} {
                color: #00000020;
                background: var(--color-primary-1);
                cursor: not-allowed;
                pointer-events: none;
                text-transform: uppercase;
            }
            ${i("secondary","!notification","disabled")} {
                color: #00000020;
                background: var(--color-secondary-4, #666);
                cursor: not-allowed;
                pointer-events: none;
                text-transform: uppercase;
            }
            ${i("tertiary","!notification","disabled")} {
                color: var(--button-text-color, #00000030);
                background: transparent;
                font-weight: var(--button-font-weight, 700);
                cursor: not-allowed;
                pointer-events: none;
            }
            ${i("tertiary-on-black","disabled")} {
                background: transparent;
                color: var(--button-text-color, #ffffff50);
                cursor: not-allowed;
                pointer-events: none;
            }
            ${i("high-severity","disabled")} {
                cursor: not-allowed;
                pointer-events: none;
                color: var(--button-text-color, #ffffff8a);
                background: #c1003b;
                text-transform: uppercase;
                font-weight: var(--button-font-weight, 700);
            }
            ${i("inline-button","disabled")} {
                color: ${(0,r.Jy)("color_secondary_4")} !important;
            }

            ${i("primary","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: #ffdf00;
                color: var(--color-primary-3, #000);
            }
            ${i("high-severity","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: #cc003e;
                color: var(--color-primary-2);
            }
            ${i("secondary","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: #b2b2b2;
                color: var(--color-primary-3, #000);
            }
            ${i("tertiary","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--button-hover-color, #0000001a);
                color: var(--button-hover-text-color, var(--color-primary-3, #000));
            }
            ${i("tertiary-on-black","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--button-hover-color, #ffffff26);
                color: var(--button-hover-text-color, var(--color-primary-2, #fff));
            }
            ${i("inline-button","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--button-hover-color, ${(0,r.Jy)("color_secondary_3")}) !important;
            }

            ${i("primary","!notification","!inline-button")}:active {
                background-color: #e5bf03 !important;
            }

            ${i("high-severity","!notification","!inline-button")}:active {
                background-color: #b20036 !important;
            }

            ${i("primary","active","!notification","!inline-button")} {
                background-color: #e5bf03 !important;
            }
            ${i("high-severity","active","!notification","!inline-button")} {
                background-color: #b20036 !important;
            }

            ${i("secondary","active","!notification","!inline-button")} {
                background-color: var(--color-secondary-6, #888) !important;
            }

            ${i("tertiary","active","!notification","!inline-button")} {
                background-color: var(--button-active-color, #00000033) !important;
            }

            ${i("tertiary-on-black","active","!notification","!inline-button")} {
                background-color: var(--button-active-color, #ffffff40) !important;
            }

            ${i("secondary","!notification","!inline-button")}:active {
                background-color: var(--color-secondary-6, #888) !important;
            }
            ${i("tertiary","!notification","!inline-button")}:active {
                background-color: var(--button-active-color, #00000033) !important;
            }
            ${i("tertiary-on-black","!notification","!inline-button")}:active {
                background-color: var(--button-active-color, #ffffff40) !important;
            }

            ${i("inline-button","primary")}:active {
                background-color: ${(0,r.Jy)("color_secondary_4")} !important;
            }

            ${o}:focus-visible:before {
                content: ' ';
                display: block;
                position: absolute;
                inset: 1px;
            }
            ${i("primary")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-primary-3, #000));
            }
            ${i("high-severity")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-primary-2, #fff));
            }
            ${i("secondary")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-primary-2, #fff));
            }
            ${i("tertiary")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-primary-3, #000));
            }
            ${i("tertiary-on-black")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-primary-2, #fff));
            }

            ${i("notification","compact")} ${e("circle")} {
                margin-right: unset;
            }
            ${i("notification","compact")} {
                width: unset !important;
            }
            ${i("notification")} {
                font-weight: normal;
                width: 144px;
                padding-left: var(--button-padding, 12px);
                padding-right: var(--button-padding, 12px);
                font-size: 12px;
            }
            ${i("notification")} ${e("inner")} {
                justify-content: flex-start;
            }
            ${i("notification","primary","!disabled")} {
                background-color: var(--button-color, var(--color-primary-1));
                color: var(--button-text-color, var(--color-primary-3, #000));
            }
            ${i("notification","secondary","!disabled")} {
                background-color: var(--button-color, var(--color-tertiary-8, #00f));
                color: var(--button-text-color, var(--color-primary-2, #fff));
            }
            ${i("notification","tertiary","!disabled")} {
                background-color: var(--button-color, var(--color-traffic-light-1, #f00));
                color: var(--button-text-color, var(--color-primary-2, #fff));
            }
            ${i("notification","!unseen-notifications","!disabled")} {
                background-color: var(--button-color, var(--color-primary-3, #000));
                color: var(--button-text-color, var(--color-primary-2, #fff));
            }
            ${i("notification","!unseen-notifications")} ${e("circle")} {
                border: unset;
                color: var(--color-primary-3, #000);
            }
            ${i("notification","primary","!unseen-notifications")} ${e("circle")} {
                background-color: var(--button-color, var(--color-primary-1));
            }
            ${i("notification","secondary","!unseen-notifications")} ${e("circle")} {
                background-color: var(--button-color, var(--color-tertiary-8, #00f));
            }
            ${i("notification","tertiary","!unseen-notifications")} ${e("circle")} {
                background-color: var(--button-color, var(--color-traffic-light-1, #f00));
            }

            ${i("notification","!unseen-notifications","!disabled")}:hover {
                background-color: var(--button-hover-color, #262626);
            }

            ${i("notification","primary","unseen-notifications","!disabled")}:hover {
                background-color: var(--button-hover-color, #ffdf00);
                color: var(--button-hover-text-color, var(--color-primary-3, #000));
            }
            ${i("notification","secondary","unseen-notifications","!disabled")}:hover {
                background-color: var(--button-hover-color, #089b9f);
                color: var(--button-hover-text-color, var(--color-primary-2, #fff));
            }
            ${i("notification","tertiary","unseen-notifications","!disabled")}:hover {
                background-color: var(--button-hover-color, #cf003f);
                color: var(--button-hover-text-color, var(--color-primary-2, #fff));
            }

            ${i("icon-after","!compact","!notification")} ${e("inner")} {
                display: flex;
                flex-direction: row-reverse;
            }

            ${i("icon-after","!compact","!notification")} ::slotted([slot='icon-slot']) {
                margin-right: 0px;
                margin-left: 8px;
                font-size: 1.5rem;
            }

            ${i("full-width","!compact","!notification")} ${e("loader")} {
                width: unset;
            }

            @media not all and (min-resolution: 0.001dpcm) {
                @supports (-webkit-appearance: none) {
                    ${o}:focus:before {
                        content: ' ';
                        display: block;
                        position: absolute;
                        inset: 1px;
                    }
                    ${i("primary")}:focus:before {
                        border: 2px solid var(--color-primary-3, #000);
                    }
                    ${i("secondary")}:focus:before {
                        border: 2px solid var(--color-primary-2, #fff);
                    }
                    ${i("tertiary")}:focus:before {
                        border: 2px solid var(--color-primary-3, #000);
                    }
                    ${i("tertiary-on-black")}:focus:before {
                        border: 2px solid var(--color-primary-2, #fff);
                    }
                    ${i("high-severity")}:focus:before {
                        border: 2px solid var(--color-primary-2, #fff);
                    }
                }
            }
        `,(0,r.iz)(`\n           @container small (width < 768px) {\n                ${i("responsive")} {\n                    width: 40px;\n                    padding: 0;\n                    font-size: 1.5rem;\n                }\n                ${i("responsive","small")} {\n                    font-size: 1.5rem;\n                    width: 36px;\n                }\n                ${i("responsive","large","!notification")} {\n                    font-size: 1.5rem;\n                    width: 48px;\n                }\n                ${i("responsive","extra-small")} {\n                    width: 18px;\n                    height: 18px;\n                    font-size: 1rem;\n                    font-weight: normal;\n                    padding: 0;\n                }\n                ${i("responsive","inline-small")} {\n                    width: 24px;\n                    height: 24px;\n                    font-size: 1rem !important;\n                }\n                ${i("responsive")} ::slotted([slot='icon-slot']) {\n                    margin-right: 0px !important;\n                    font-size: inherit !important;\n                }\n                ${i("responsive")} ${e("label")} {\n                    display: none;\n                }\n                ${i("responsive")} ${e("loader-icon")} {\n                    margin-right: 0px !important;\n                }\n            }\n        `)]},version:"2.0.82"}),s("design:paramtypes",[])],d)},48353:(t,o,e)=>{var r,i;e.d(o,{b:()=>i,v:()=>r}),function(t){t.ICON="icon-slot",t.LABEL="",t.NUMBER="number-slot"}(r||(r={})),function(t){t.Default="default",t.Notification="notification",t.Inline="inline-button"}(i||(i={}))},72681:(t,o,e)=>{var r;e.d(o,{M:()=>r}),function(t){t.Default="default",t.ExtraSmall="extra-small",t.Small="small",t.Large="large",t.InlineSmall="inline-small"}(r||(r={}))}}]);
//# sourceMappingURL=5029.145846a8.chunk.js.map