"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[5984],{37982:(t,o,e)=>{e.d(o,{OC:()=>m,Bs:()=>y,Yh:()=>x,AH:()=>i.AH,zz:()=>c,eV:()=>g,qy:()=>a.qy,JR:()=>n.J,MZ:()=>r.MZ,P:()=>r.P,wk:()=>r.wk,iF:()=>p,iz:()=>i.iz});var r=e(13170),i=e(37022),n=(e(33171),e(41821),e(80241),e(56440)),a=e(971),l=(e(41286),e(24607),e(53993),e(22677),e(18789));const c=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";t=t.trim();const e=(0,l.iz)(`.${t}`),r=(0,l.iz)(`.${t}-${o}`);function i(){for(var o=arguments.length,e=new Array(o),r=0;r<o;r++)e[r]=arguments[r];if(!e||!e[0])return(0,l.iz)(`.${t}-`);const i=e.map((o=>(o=o.trim(),`.${t}-${o}`))).join(" ");return(0,l.iz)(i)}function n(){for(var o=arguments.length,e=new Array(o),i=0;i<o;i++)e[i]=arguments[i];if(!e[0])return(0,l.iz)("");const n=t=>"!"===t[0];return(0,l.iz)(e.reduce(((o,e)=>o+(o=>n(o)?(o=o.substring(1),`:not(.${t}--${o})`):`.${t}--${o}`)(e=e.trim())),n(e[0][0])?r:""))}return{host:e,root:r,child:i,is:n,groupedIs:function(t){for(var o=arguments.length,e=new Array(o>1?o-1:0),r=1;r<o;r++)e[r-1]=arguments[r];return(0,l.iz)(e.map((o=>`${n(t)} ${i(o)}`)).join(","))}}};var s=e(94161);const d=(0,s.iz)("Roboto, Arial, Open Sans, Helvetica, sans-serif"),p=s.AH`
    html {
        font-size: var(--application-scaling, var(--application-scaling-s));
        zoom: var(--application-zoom);
        font-family: ${d};
        scrollbar-color: var(--scrollbar-color) transparent;
        scrollbar-width: thin;
    }

    div {
        scrollbar-color: var(--scrollbar-color) transparent;
        scrollbar-width: thin;
    }

    input,
    textarea,
    button,
    span,
    div,
    label,
    li,
    p,
    a,
    ul,
    tr,
    td,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${d};
    }

    table,
    th {
        font-family: ${d};
        font-size: 1.1em;
    }

    code {
        font-size: 1em;
    }

    p {
        font-size: var(--font-size-02);
    }

    h1 {
        margin-top: 0;
        margin-bottom: 16px;
        line-height: 27px;
        font-size: var(--font-size-07);
        font-weight: normal;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: var(--font-size-05);
        font-weight: normal;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: var(--font-size-02);
        font-weight: normal;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: normal;
    }

    h5 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: normal;
    }

    h6 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: normal;
    }

    ::-webkit-scrollbar {
        border-radius: 0;
        background: transparent;
    }
    ::-webkit-scrollbar:vertical {
        width: 20px; /* calc(4px + 2 * 8px); */
    }
    ::-webkit-scrollbar:horizontal {
        height: 20px; /* calc(4px + 2 * 8px); */
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background: var(--color-neutral-gray-200);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-track:vertical {
        border-left: 8px solid rgba(0, 0, 0, 0);
        border-right: 8px solid rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-track:horizontal {
        border-top: 8px solid rgba(0, 0, 0, 0);
        border-bottom: 8px solid rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-neutral-gray-300);
        background-clip: padding-box;
        border-radius: 0;
    }
    ::-webkit-scrollbar-thumb:vertical {
        border-left: 8px solid rgba(0, 0, 0, 0);
        border-right: 8px solid rgba(0, 0, 0, 0);
        margin-left: 8px;
    }
    ::-webkit-scrollbar-thumb:horizontal {
        border-top: 8px solid rgba(0, 0, 0, 0);
        border-bottom: 8px solid rgba(0, 0, 0, 0);
        margin-top: 8px;
    }

    ::-webkit-scrollbar-thumb:vertical:hover {
        border-left: 6px solid rgba(0, 0, 0, 0);
        border-right: 6px solid rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb:horizontal:hover {
        border-top: 6px solid rgba(0, 0, 0, 0);
        border-bottom: 6px solid rgba(0, 0, 0, 0);
    }
`;let u=window.studio;u||(u=window.studio={});let b=u.sui;b||(b=u.sui={});let h=b.registry;h||(h=b.registry=new Map),b.dump||(b.dump=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const o=console.info;let e=1;return!t&&h&&(o("components registry:"),h.forEach(((t,r)=>(o(`  ${e} : ${r} ${t.version}`),void++e)))),h});const f=function(t,o){const e=function(t,o){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(o?`${o.trim()}-`:"")+"elements"+`-${(t=>{const o=[];for(let e=0;e<t.length;e++){const r=t[e],i=r.toLowerCase();r!==i&&e>0&&o.push("-"),o.push(i)}return o.join("")})(t.tagName)}`+(e?`-${t.version.replace(/\./g,"-")}`:"")}(t,o,arguments.length>2&&void 0!==arguments[2]&&arguments[2]);if(!function(t){return window.customElements.get(t)}(e)){const o="function"===typeof t.generateStyles?t.generateStyles(e):t.styles;!function(t,o,e){var r;window.customElements.define(t,((r=class extends o{}).styles=e,r.version=o.version,r))}(e,t,o),h&&h.set(e,{version:t.version})}return e};var v;function g(t){return function(o){var e;return(e=class extends o{}).tagName=t.tagName,e.generateStyles=t.styles,e.version=t.version,e.sub=t.sub||[],e}}class m extends i.WF{static register(t){if(!this.tagName)throw Error("Subclass must set tagName : "+this.toString());const o=t=>{t.forEach((t=>{o(t.sub),this.subRegister(t)}))};return o(this.sub),f(this,t)}static subRegister(t){return t.tag||(t.tag=(0,a.Bk)(f(t,""))),t}static _filterUndefinedImports(t){const o=[];return(Array.isArray(t)?t:[t]).forEach((t=>{const e=[];(Array.isArray(t.elem)?t.elem:[t.elem]).forEach((t=>{void 0===v[t]&&e.push(t)})),e.length>0&&o.push({module:t.module,elem:e})})),o}}v=m,m.sub=[],m.dynSubRegister=(t,o)=>{const e=v._filterUndefinedImports(t);e.length>0?Promise.all(e.map((t=>t.module()))).then((t=>{t.forEach(((t,o)=>{e[o].elem.forEach((o=>{var e;const r=null!==(e=t[o])&&void 0!==e?e:t.default;r&&(r.tagName?v[o]=v.subRegister(r):v[o]=r)}))})),o()})).catch((t=>{window.console.error("error",t),o()})):o()};const x=(t,o)=>{t=t.trim();let e="";return o&&(e=Object.keys(o).reduce(((e,r)=>o[r]?`${e} ${t}--${r}`:e),e).trim()),[t,`${t}-root${e?" ":""}${e}`,e]},y=t=>"boolean"===typeof t?t:"number"===typeof t?0!==t:"string"===typeof t&&(""===t||"true"===t.toLowerCase())},95984:(t,o,e)=>{e.r(o),e.d(o,{Button:()=>p,ButtonDesign:()=>l,ButtonSize:()=>n,ButtonSlot:()=>a,ButtonType:()=>i});var r=e(37982);var i,n,a,l;!function(t){t.Primary="primary",t.Secondary="secondary",t.Tertiary="tertiary",t.TertiaryOnBlack="tertiary-on-black",t.HighSeverity="high-severity"}(i||(i={})),function(t){t.Default="medium",t.ExtraSmall="xsmall",t.InlineSmall="inline-small",t.XLarge="xlarge",t.Large="large",t.Medium="medium",t.Small="small",t.XSmall="xsmall"}(n||(n={})),function(t){t.ICON="icon-slot",t.LABEL="",t.NUMBER="number-slot"}(a||(a={})),function(t){t.Default="default",t.Notification="notification",t.Inline="default"}(l||(l={}));var c,s=function(t,o,e,r){var i,n=arguments.length,a=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,o,e,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(o,e,a):i(o,e))||a);return n>3&&a&&Object.defineProperty(o,e,a),a},d=function(t,o){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,o)};let p=c=class extends r.OC{get loaded(){return this._loaded}set loaded(t){if(this._loaded!==t){let o=0;!1===t&&(o=400),setTimeout((()=>{this._loaded=t,this.requestUpdate()}),o)}}constructor(){super(),this.active=!1,this.disabled=!1,this.fullWidth=!1,this.fullHeight=!1,this.type=i.Primary,this.design=l.Default,this.compact=!1,this.buttonSize=n.Medium,this.buttonType="button",this.unseenNotification=!1,this.iconAfter=!1,this._loaded=!0,this._renderIconSlot=()=>r.qy`<slot name="${a.ICON}" @slotchange=${this._onIconSlotChange}></slot>`,this._onIconSlotChange=t=>{const o=t.target;this._hasIcon=o&&o.assignedNodes().length>0},this.addEventListener("click",this._onClick)}connectedCallback(){const t=[];t.push({module:()=>e.e(7240).then(e.bind(e,7240)),elem:["Loader"]}),t.push({module:()=>e.e(567).then(e.bind(e,567)),elem:["Spinner"]}),c.dynSubRegister(t,(()=>{this.addEventListener("loader-start",this._handleLoaderStart),this.addEventListener("loader-end",this._handleLoaderEnd),super.connectedCallback()}))}focus(){this._button.focus()}blur(){this._button.blur()}updated(t){t.has("active")&&t.get("active")&&!this.active&&this.dispatchEvent(new CustomEvent("button-active-toggle",{bubbles:!0,composed:!0,detail:{active:this.active}}))}render(){const[t,o]=(0,r.Yh)(this.tagName.toLowerCase(),{"full-width":this.fullWidth,"full-height":this.fullHeight,[this.type]:!0,disabled:this.disabled,active:this.active,compact:this.compact,[this.buttonSize]:!0,[this.design]:!!this.design,"unseen-notifications":this.unseenNotification,responsive:this._hasIcon,"icon-after":this.iconAfter}),e=this._renderButtonLoader(t);return r.qy`
            <button
                class="${o}"
                ?disabled="${this.disabled}"
                ?active="${this.active}"
                type="${(0,r.JR)(this.buttonType?this.buttonType:void 0)}"
                button-size="${this.buttonSize}"
            >
                <div class="${t}-inner">${e}</div>
            </button>
        `}_renderButtonLoader(t){const o=r.qy`<span class="${t}-label"
            ><slot @slotchange="${this._handleTitleChange}"></slot
        ></span>`,e=this.loaded&&!this._loaderShown?"unset":this._getButtonWidth()+"px";return this.design===l.Notification?r.qy`<div class="${t}-circle"><slot name="${a.NUMBER}"></slot></div>
                ${o}`:this._hasIcon?r.qy`<${c.Loader.tag} toggleable class="${t}-loader" loaded="${this.loaded}">
                <div class="${t}-loader-icon" slot="loader-slot"><${c.Spinner.tag} size="16px"></${c.Spinner.tag}></div>
                    ${this._renderIconSlot()}
                </${c.Loader.tag}> ${o}`:r.qy`
                    <${c.Loader.tag} toggleable class="${t}-loader" loaded="${this.loaded}" style="width: ${e}">
                        <${c.Spinner.tag} size="16px" slot="loader-slot">
                        </${c.Spinner.tag}>${this._renderIconSlot()} ${o}
                    </${c.Loader.tag}>
                `}_handleTitleChange(t){t.target.assignedNodes().forEach((t=>{t.nodeType===Node.TEXT_NODE&&this._capitalizeFirstLetter(t)}))}_capitalizeFirstLetter(t){const o=t.textContent.trim();if(o){const e=o.charAt(0).toUpperCase()+o.slice(1).toLowerCase();t.textContent=e}}_getButtonWidth(){return this._inner?this._inner.offsetWidth:0}_handleLoaderStart(){setTimeout((()=>{this._loaderShown=!0}),400)}_handleLoaderEnd(){this._loaderShown=!1}_onClick(t){if(this.disabled)t.stopImmediatePropagation();else if("submit"===this.buttonType){let t=this.form||this.closest("form");if(!t&&this.parentElement){const o=this.parentElement.querySelectorAll("form");1===o.length&&(t=o[0])}if(t){const o=document.createElement("button");o.type="submit",o.style.display="none",t.appendChild(o),o.click(),o.remove()}}}};s([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),d("design:type",Object)],p.prototype,"active",void 0),s([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),d("design:type",Object)],p.prototype,"disabled",void 0),s([(0,r.MZ)({type:Boolean,reflect:!0,attribute:"full-width",converter:r.Bs}),d("design:type",Object)],p.prototype,"fullWidth",void 0),s([(0,r.MZ)({type:Boolean,reflect:!0,attribute:"full-height",converter:r.Bs}),d("design:type",Object)],p.prototype,"fullHeight",void 0),s([(0,r.MZ)({type:i}),d("design:type",Object)],p.prototype,"type",void 0),s([(0,r.MZ)({type:l}),d("design:type",Object)],p.prototype,"design",void 0),s([(0,r.MZ)({type:Boolean,converter:r.Bs}),d("design:type",Object)],p.prototype,"compact",void 0),s([(0,r.MZ)({type:n,attribute:"button-size"}),d("design:type",Object)],p.prototype,"buttonSize",void 0),s([(0,r.MZ)({type:String,attribute:"button-type"}),d("design:type",Object)],p.prototype,"buttonType",void 0),s([(0,r.MZ)({type:Object,attribute:!1}),d("design:type",Object)],p.prototype,"form",void 0),s([(0,r.MZ)({type:Boolean,converter:r.Bs,attribute:"unseen-notifications"}),d("design:type",Object)],p.prototype,"unseenNotification",void 0),s([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs,attribute:"icon-after"}),d("design:type",Object)],p.prototype,"iconAfter",void 0),s([(0,r.MZ)({type:Boolean,converter:r.Bs}),d("design:type",Object),d("design:paramtypes",[Object])],p.prototype,"loaded",null),s([(0,r.wk)(),d("design:type",Object)],p.prototype,"_hasIcon",void 0),s([(0,r.wk)(),d("design:type",Object)],p.prototype,"_loaderShown",void 0),s([(0,r.P)("button"),d("design:type",Object)],p.prototype,"_button",void 0),s([(0,r.P)('[class$="-inner"]'),d("design:type",Object)],p.prototype,"_inner",void 0),p=c=s([(0,r.eV)({tagName:"button",styles:t=>{const{root:o,child:e,is:i}=(0,r.zz)(t);return[r.iF,r.AH`
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
                font-size: var(--font-size-02);
                height: var(--button-height, 40px);
                outline: 0;
                appearance: auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                position: relative;
                text-align: center;
                text-decoration: none;
                user-select: none;
                width: var(--button-width, auto);
                min-width: var(--button-min-width);
                vertical-align: top;
                line-height: normal;
                padding-left: var(--button-padding, 23px);
                padding-right: var(--button-padding, 23px);
                margin: 0;
                font-weight: var(--font-weight-04);
                --expand-duration: 0.2s;
            }
            ${i("!compact","!icon-after")} ${e("loader-icon")} {
                padding: 0px 2px;
                margin-right: 8px;
            }

            ${i("!compact","icon-after")} ${e("loader-icon")} {
                margin-left: 8px;
                padding: 0px 2px;
            }

            ${e("loader")} {
                --loader-display: flex;
                --loader-align: center;
                --loader-justify: center;
                --loader-slot-display: block;
                --loader-content-gap: 0px;
            }

            ${e("combobox")} {
                width: 40px;
                height: 100%;
                background: blue;
            }

            /* Compact styles */

            ${i("compact")} {
                width: 40px;
                padding: 0 !important;
                font-size: 1.5rem;
            }
            ${i("compact","table-move")} {
                width: 24px;
                height: 100%;
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

            /* Sized above will be removed soon */

            ${i("compact","xlarge")} {
                width: 56px;
            }
            ${i("compact","large")} {
                width: 48px;
            }
            ${i("compact","medium")} {
                width: 40px;
            }
            ${i("compact","small")} {
                width: 32px;
            }
            ${i("compact","xsmall")} {
                width: 24px;
            }

            ${i("compact")} ${e("label")} {
                display: none;
            }

            ${e("label")} {
                display: flex;
                align-items: center;
            }
            /* Sizes */
            ${i("inline-small")} {
                height: var(--button-height, 24px);
            }
            ${i("small")} {
                height: var(--button-height, 36px);
            }
            ${i("extra-small")} {
                height: var(--button-height, 18px);
                padding: 0;
            }
            ${i("inline-button")} {
                height: 24px;
                padding: 0 12px;
                background: var(--color-neutral-gray-25) !important;
                color: var(--color-text-default);
            }
            /* Sizes above will be removed soon */

            ${i("xlarge")} {
                font-size: var(--font-size-03);
                height: var(--button-height, 56px);
                padding-left: var(--button-padding, 32px);
                padding-right: var(--button-padding, 32px);
            }
            ${i("large")} {
                height: var(--button-height, 48px);
                padding-left: var(--button-padding, 27px);
                padding-right: var(--button-padding, 27px);
            }
            ${i("medium")} {
                height: var(--button-height, 40px);
                padding-left: var(--button-padding, 23px);
                padding-right: var(--button-padding, 23px);
            }
            ${i("small")} {
                height: var(--button-height, 32px);
                padding-left: var(--button-padding, 19px);
                padding-right: var(--button-padding, 19px);
            }
            ${i("xsmall")} {
                font-size: var(--font-size-01);
                height: var(--button-height, 24px);
                padding-left: var(--button-padding, 8px);
                padding-right: var(--button-padding, 8px);
            }

            /* Slot styles */

            ${i("table-move","compact","!icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--font-size, var(--font-size-01));
            }

            ${i("xlarge","compact","!icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--icon-size, 28px);
            }
            ${i("table-move","compact","icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--icon-size, var(--icon-size-01));
            }
            ${i("large","compact","!icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--icon-size, 24px);
            }
            ${i("medium","compact","!icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--icon-size, 24px);
            }
            ${i("small","compact","!icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--icon-size, 20px);
            }
            ${i("xsmall","compact","!icon-after")} ::slotted([slot='icon-slot']) {
                font-size: var(--icon-size, 20px);
            }
            ${i("!compact","xsmall","!icon-after")} ::slotted([slot='icon-slot']) {
                margin-right: 2px;
                font-size: var(--icon-size, 20px);
            }
            ${i("!compact","small","!icon-after")} ::slotted([slot='icon-slot']) {
                margin-right: 2px;
                font-size: var(--icon-size, 20px);
            }
            ${i("!compact","medium","!icon-after")} ::slotted([slot='icon-slot']) {
                margin-right: 4px;
                font-size: var(--icon-size, 24px);
            }
            ${i("!compact","large","!icon-after")} ::slotted([slot='icon-slot']) {
                margin-right: 4px;
                font-size: var(--icon-size, 24px);
            }
            ${i("!compact","xlarge","!icon-after")} ::slotted([slot='icon-slot']) {
                margin-right: 8px;
                font-size: var(--icon-size, 28px);
            }

            ${i("!compact","xsmall","icon-after")} ::slotted([slot='icon-slot']) {
                margin-left: 2px;
                font-size: var(--icon-size, 20px);
            }
            ${i("!compact","small","icon-after")} ::slotted([slot='icon-slot']) {
                margin-left: 2px;
                font-size: var(--icon-size, 20px);
            }
            ${i("!compact","medium","icon-after")} ::slotted([slot='icon-slot']) {
                margin-left: 4px;
                font-size: var(--icon-size, 24px);
            }
            ${i("!compact","large","icon-after")} ::slotted([slot='icon-slot']) {
                margin-left: 4px;
                font-size: var(--icon-size, 24px);
            }
            ${i("!compact","xlarge","icon-after")} ::slotted([slot='icon-slot']) {
                margin-left: 8px;
                font-size: var(--icon-size, 28px);
            }

            /* Default styles */

            ${i("primary","!notification","!disabled")} {
                background-color: var(--color-surface-action-primary);
                color: var(--color-text-default);
            }
            ${i("high-severity","!notification","!disabled")} {
                background-color: var(--color-surface-support-danger);
                color: var(--color-text-default-inverted);
            }
            ${i("secondary","!notification","!disabled")} {
                background-color: var(--color-surface-action-secondary);
                color: var(--color-text-default);
            }
            ${i("tertiary","!notification","!disabled")} {
                background-color: var(--button-color, transparent);
                color: var(--color-text-default);
            }
            ${i("tertiary-on-black","!disabled")} {
                font-weight: 700;
                background-color: var(--button-color, transparent);
                color: var(--color-text-default-inverted);
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
                border: 2px solid var(--color-primary-2, var(--color-neutral-white));
                border-radius: 50%;
                font-weight: bold;
                margin-right: 8px;
            }

            ${i("primary")} ${e("circle")} {
                border: 2px solid var(--color-primary-3, var(--color-neutral-black));
            }

            ${i("full-width")} {
                width: 100%;
            }
            ${i("full-height")} {
                height: 100%;
            }

            /* Disabled styles */

            ${i("primary","!notification","disabled")} {
                color: var(--color-text-disabled-transparent);
                background: var(--color-surface-action-primary);
                pointer-events: none;
            }
            ${i("secondary","!notification","disabled")} {
                color: var(--color-text-disabled-transparent);
                background: var(--color-surface-action-disabled-full);
                pointer-events: none;
            }
            ${i("tertiary","!notification","disabled")} {
                color: var(--button-text-color, var(--color-text-disabled-transparent));
                background: transparent;
                font-weight: 700;
                pointer-events: none;
            }
            ${i("tertiary-on-black","disabled")} {
                background: transparent;
                color: var(--button-text-color, var(--color-text-disabled-transparent));
                pointer-events: none;
            }
            ${i("high-severity","disabled")} {
                pointer-events: none;
                color: var(--button-text-color, var(--color-text-disabled-inverted));
                background: var(--color-surface-support-danger-active);
            }
            ${i("inline-button","disabled")} {
                color: var(--color-text-disabled-transparent) !important;
            }

            /* Hover states */

            ${i("primary","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--color-surface-action-primary-hover);
            }
            ${i("high-severity","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--color-surface-support-danger-hover);
            }
            ${i("secondary","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--color-surface-action-secondary-hover);
            }
            ${i("tertiary","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--button-hover-color, var(--color-surface-action-hover));
            }
            ${i("tertiary-on-black","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--button-hover-color, #ffffff26);
                color: var(--button-hover-text-color, var(--color-primary-2, var(--color-text-default-inverted)));
            }
            ${i("inline-button","!disabled")}:hover {
                transition: background-color var(--expand-duration) ease-in;
                background-color: var(--button-hover-color, var(--color-surface-action-secondary-hover)) !important;
            }

            /* Active states */

            ${i("primary","!notification","!inline-button")}:active {
                background-color: var(--color-surface-action-primary-active) !important;
            }

            ${i("high-severity","!notification","!inline-button")}:active {
                background-color: var(--color-surface-support-danger-active) !important;
            }

            ${i("primary","active","!notification","!inline-button")} {
                background-color: var(--color-surface-action-primary-active) !important;
            }
            ${i("high-severity","active","!notification","!inline-button")} {
                background-color: var(--color-surface-support-danger-active) !important;
            }

            ${i("secondary","active","!notification","!inline-button")} {
                background-color: var(--color-surface-action-secondary-active) !important;
            }

            ${i("tertiary","active","!notification","!inline-button")} {
                background-color: var(--button-active-color, var(--color-surface-action-active)) !important;
            }

            ${i("tertiary-on-black","active","!notification","!inline-button")} {
                background-color: var(--button-active-color, #ffffff40) !important;
            }

            ${i("secondary","!notification","!inline-button")}:active {
                background-color: var(--color-surface-action-secondary-active) !important;
            }
            ${i("tertiary","!notification","!inline-button")}:active {
                background-color: var(--button-active-color, var(--color-surface-action-active)) !important;
            }
            ${i("tertiary-on-black","!notification","!inline-button")}:active {
                background-color: var(--button-active-color, #ffffff40) !important;
            }

            ${i("inline-button","primary")}:active {
                background-color: var(--color-surface-action-secondary-active) !important;
            }

            /* Focus states */

            ${o}:focus-visible:before {
                content: ' ';
                display: block;
                position: absolute;
                inset: 1px;
            }
            ${i("primary")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-neutral-black));
            }
            ${i("high-severity")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-neutral-white));
            }
            ${i("secondary")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-neutral-white));
            }
            ${i("tertiary")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-neutral-black));
            }
            ${i("tertiary-on-black")}:focus-visible:before {
                border: 2px dashed var(--button-focus-color, var(--color-neutral-white));
            }

            /* Notification styles (deprecated, will be moved to separate component) */
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
                background-color: var(--button-color, var(--color-surface-action-primary));
                color: var(--button-text-color, var(--color-text-default));
            }
            ${i("notification","secondary","!disabled")} {
                background-color: var(--button-color, var(--color-tertiary-signal-blue));
                color: var(--button-text-color, var(--color-text-default-inverted));
            }
            ${i("notification","tertiary","!disabled")} {
                background-color: var(--button-color, var(--color-tertiary-red));
                color: var(--button-text-color, var(--color-text-default-inverted));
            }
            ${i("notification","!unseen-notifications","!disabled")} {
                background-color: var(--button-color, var(--color-neutral-black));
                color: var(--button-text-color, var(--color-text-default-inverted));
            }
            ${i("notification","!unseen-notifications")} ${e("circle")} {
                border: unset;
                color: var(--color-text-default);
            }
            ${i("notification","primary","!unseen-notifications")} ${e("circle")} {
                background-color: var(--button-color, var(--color-surface-action-primary));
            }
            ${i("notification","secondary","!unseen-notifications")} ${e("circle")} {
                background-color: var(--button-color, var(--color-tertiary-signal-blue));
            }
            ${i("notification","tertiary","!unseen-notifications")} ${e("circle")} {
                background-color: var(--button-color, var(--color-tertiary-red));
            }

            ${i("notification","!unseen-notifications","!disabled")}:hover {
                background-color: var(--color-neutral-black-transparent-900);
            }

            ${i("notification","primary","unseen-notifications","!disabled")}:hover {
                background-color: var(--color-surface-action-primary-hover);
                color: var(--button-hover-text-color, var(--color-text-default));
            }
            ${i("notification","secondary","unseen-notifications","!disabled")}:hover {
                background-color: var(--button-hover-color, var(--color-tertiary-turqoise));
                color: var(--button-hover-text-color, var(--color-text-default-inverted));
            }
            ${i("notification","tertiary","unseen-notifications","!disabled")}:hover {
                background-color: var(--button-hover-color, var(--color-surface-support-danger-hover));
                color: var(--button-hover-text-color, var(--color-text-default-inverted));
            }

            ${i("icon-after","!compact","!notification")} ${e("inner")} {
                display: flex;
                flex-direction: row-reverse;
            }

            ${i("icon-after","!compact","!notification")} ::slotted([slot='icon-slot']) {
                margin-right: 0px;
                margin-left: 4px;
                font-size: var(--icon-size, 1.5rem);
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
                        border: 2px solid var(--color-neutral-black);
                    }
                    ${i("secondary")}:focus:before {
                        border: 2px solid var(--color-neutral-white);
                    }
                    ${i("tertiary")}:focus:before {
                        border: 2px solid var(--color-neutral-black);
                    }
                    ${i("tertiary-on-black")}:focus:before {
                        border: 2px solid var(--color-neutral-white);
                    }
                    ${i("high-severity")}:focus:before {
                        border: 2px solid var(--color-neutral-white);
                    }
                }
            }
        `,(0,r.iz)(`\n           @container small (width < 768px) {\n                ${i("responsive")} {\n                    width: 40px;\n                    padding: 0;\n                    font-size: 1.5rem;\n                }\n                ${i("responsive","small")} {\n                    font-size: 1.5rem;\n                    width: 36px;\n                }\n                ${i("responsive","large","!notification")} {\n                    font-size: 1.5rem;\n                    width: 48px;\n                }\n                ${i("responsive","extra-small")} {\n                    width: 18px;\n                    height: 18px;\n                    font-size: 1rem;\n                    font-weight: normal;\n                    padding: 0;\n                }\n                ${i("responsive","inline-small")} {\n                    width: 24px;\n                    height: 24px;\n                    font-size: 1rem !important;\n                }\n                ${i("responsive")} ::slotted([slot='icon-slot']) {\n                    margin-right: 0px !important;\n                    font-size: inherit !important;\n                }\n                ${i("responsive")} ${e("label")} {\n                    display: none;\n                }\n                ${i("responsive")} ${e("loader-icon")} {\n                    margin-right: 0px !important;\n                }\n            }        \n        `)]},version:"2.0.32"}),d("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=5984.5b5cd09e.chunk.js.map