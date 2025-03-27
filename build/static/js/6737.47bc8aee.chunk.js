"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[1194,4247,6737],{14247:(e,t,i)=>{var o;i.d(t,{R:()=>o}),function(e){e.Failure="failure",e.Success="success",e.Basic="basic"}(o||(o={}))},36737:(e,t,i)=>{i.r(t),i.d(t,{ColorPicker:()=>b,ColorPickerEvent:()=>s,ColorPickerSize:()=>a});var o=i(5298);var r=i(56620);var a,s;!function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.XLARGE="xlarge"}(a||(a={})),function(e){e.COLOR_CHANGE="color-change",e.COLOR_INPUT="color-input"}(s||(s={}));var n,l=i(71965),d=i(14247),c=i(95812),p=i(40926),u=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s},h=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let b=n=class extends l.a{constructor(){super(...arguments),this.list=[],this._isFocused=!1,this._isOpen=!1,this._value="",this._dispatchOnChange=()=>this._dispatchEvent(s.COLOR_CHANGE,{target:this,value:this.value}),this._dispatchEvent=(e,t)=>this.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t})),this._buildColorDataList=e=>{var t;if(!this.list)return null;const i=0===this.list.length?null!==(t=n._colorsList)&&void 0!==t?t:n._colorsList=Object.entries(o.Lb).filter((e=>{let[t]=e;return t.startsWith("color_visualization_")})).map((e=>{let[t,i]=e;return i})):this.list;return(0,o.PP)(o.qy` <datalist class="${e}-list" id="colors">${r=i,r.map((e=>o.qy` <option value="${e}"></option>`))}</datalist>`);var r}}get value(){return this._value}set value(e){if(this._value!==e){const t=this._value;this._value=e||"",this.requestUpdate("value",t)}}focus(e){var t;null===(t=this._inputElement)||void 0===t||t.focus(e)}blur(){var e;null===(e=this._inputElement)||void 0===e||e.blur()}connectedCallback(){n.dynSubRegister([{module:()=>i.e(9693).then(i.bind(i,59693)),elem:["Icon"]}],(()=>{super.connectedCallback()}))}render(){const[e,t]=(0,o.Yh)(this.tagName.toLowerCase(),{disabled:this.disabled,readonly:this.readOnly,required:this.required,"full-width":this.fullWidth,[this.size||a.MEDIUM]:!0,validation:this.additionalFeedbackType===d.R.Failure,focused:this._isFocused,open:this._isOpen}),i=this._buildColorDataList(e);return o.qy`
            <div class="${t}">
                <div class="${e}-label-wrapper">
                    ${this.renderLabelWrapper(e)}
                    <slot
                        name="${c.S.LABEL_ICON_SLOT}"
                        class="${e}-${c.S.LABEL_ICON_SLOT}"
                    ></slot>
                </div>
                <div class="${e}-input-row" title="${(0,o.JR)(this._value)}">
                    <div class="${e}-border">
                        <input
                            id="${this.id}"
                            class="${e}-input"
                            type="color"
                            .value="${this.value}"
                            ?disabled="${!!this.disabled}"
                            ?readonly="${this.readOnly}"
                            list=${(0,o.JR)(i?"colors":void 0)}
                            @change=${this._onChange}
                            @focus=${this._onFocus}
                            @blur=${this._onBlur}
                            @copy=${this._onCopy}
                            @paste=${this._onPaste}
                        />
                        ${this._renderArrow(e)} ${i}
                    </div>
                </div>
                <div class="${e}-sub-row">
                    <div class="${e}-feedback-wrapper">${this._renderFeedback(e)}</div>
                </div>
            </div>
        `}renderLabelWrapper(e){return this.label?o.qy` <label id="${this.id}-label" for="${this.id}" class="${e}-label-root">
                  ${this._renderLabel(e)}
              </label>`:o.qy``}_renderArrow(e){return o.qy`
            <div class="${e}-arrow-background">
                <${n.Icon.tag} class="${e}-icon"
                                         icon=${p.default}
                                         ?flip-vertical="${this._isOpen}"
                >
                </${n.Icon.tag}>
            </div>
        `}_onChange(e){this._value!==e.target.value&&(this.value=e.target.value,this._dispatchOnChange()),this._isOpen=!1}_onFocus(){this._isFocused=!0,this._isOpen=!0}_onBlur(){this._isFocused=!1,this._isOpen=!1}_onCopy(e){e.clipboardData&&e.clipboardData.setData("text/plain",this._value),e.preventDefault()}_onPaste(e){if(e.clipboardData){const t=e.clipboardData.getData("text/plain");this._value!==t&&(this.value=t,this._dispatchOnChange())}e.preventDefault()}};u([(0,o.MZ)({type:a,reflect:!0}),h("design:type",String)],b.prototype,"size",void 0),u([(0,o.MZ)({type:Boolean,converter:o.Bs,attribute:"readonly"}),h("design:type",Object)],b.prototype,"readOnly",void 0),u([(0,o.MZ)({type:Boolean,converter:o.Bs,reflect:!1}),h("design:type",Object)],b.prototype,"required",void 0),u([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"full-width",converter:o.Bs}),h("design:type",Object)],b.prototype,"fullWidth",void 0),u([(0,o.MZ)({type:Object,converter:{fromAttribute:e=>e&&JSON.parse(e)||{},toAttribute:e=>JSON.stringify(e)},reflect:!0}),h("design:type",Array)],b.prototype,"list",void 0),u([(0,o.MZ)({type:String,reflect:!0}),h("design:type",String),h("design:paramtypes",[String])],b.prototype,"value",null),u([(0,o.P)("input"),h("design:type",HTMLInputElement)],b.prototype,"_inputElement",void 0),u([(0,o.wk)(),h("design:type",Object)],b.prototype,"_isFocused",void 0),u([(0,o.wk)(),h("design:type",Object)],b.prototype,"_isOpen",void 0),b=n=u([(0,o.eV)({tagName:"color-picker",styles:e=>{const{root:t,child:i,is:a}=(0,o.zz)(e);return[(0,r.v)(e),o.AH`:host, :host::before, :host::after, :host *, :host *::before, :host *::after {
            box-sizing: border-box;
        }

            :host {
                display: block;
            }

            ${t} {
                display: flex;
                flex-direction: column;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                white-space: nowrap !important;
                align-items: flex-start;
            }

            ${i("label-wrapper")} {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }

            ${i("label")} {
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                height: 21px;
                width: 100%;
            }

            ${i("label-icon-slot")} {
                color: var(--color-secondary-8);
            }

            ${i("label-root")} {
                font-size: 0;
                min-width: 0;
                width: 100%;
            }

            ${i("border")} {
                display: flex;
                align-items: center;
                background: white;
                justify-content: space-between;
                min-width: 0;
                width: inherit;
                position: relative;
                height: 100%;
                font-size: 14px;
            }

            ${i("border")}:after {
                content: ' ';
                display: block;
                position: absolute;
                border: var(--textfield-input-border, 1px solid var(--color-secondary-6));
                z-index: 0;
                pointer-events: none;
                inset: 0;
            }

            ${a("focused")} ${i("border")}:after {
                outline: var(--textfield-input-border-focused, 2px solid var(--color-secondary-10));
                border: none;
                inset: 2px;
                z-index: 1;
            }

            ${a("focused","validation")} ${i("border")}:after {
                border: none;
                outline: var(--textfield-input-border-focused, 2px solid var(--color-traffic-light-1));
            }

            ${a("!focused","!disabled","!readonly")} ${i("border")}:hover:after {
                border: 1px solid #7e7e7e;
                z-index: 1;
            }

            ${a("validation","!focused","!disabled","!readonly")} ${i("border")}:hover:after {
                border: 1px solid #b80038;
                z-index: 1;
            }

            ${a("validation")} ${i("border")}:after {
                border: 1px solid var(--color-traffic-light-1);
                z-index: 1;
            }

            ${a("small")} ${i("input-row")} {
                height: var(--textfield-input-height, 32px);
            }

            ${a("medium")} ${i("input-row")} {
                height: var(--textfield-input-height, 40px);
            }

            ${a("large")} ${i("input-row")} {
                height: var(--textfield-input-height, 48px);
            }

            ${a("xlarge")} ${i("input-row")} {
                height: var(--textfield-input-height, 56px);
            }

            ${i("input")} {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                background: none;
                border: 0;
                cursor: pointer;
                padding: 8px 28px 8px 8px;
                height: 100%;
            }

            ${i("input")}:focus {
                border-radius: 0;
                outline: none;
            }

            ::-webkit-color-swatch-wrapper {
                padding: 0;
            }

            ${i("arrow-background")} {
                position: absolute;
                right: 4px;
                pointer-events: none;
            }

            ${i("icon")} {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 1.5em;
            }`]},version:"0.0.0"})],b)},40926:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const o=(0,i(80129).p)({name:"down",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="m17.829 8.582 1.2 1.2L12.01 16.8 4.97 9.76l1.2-1.2 5.84 5.84 5.818-5.818Z"/></svg>'})},56620:(e,t,i)=>{i.d(t,{v:()=>r});var o=i(5298);const r=e=>{const{child:t,is:i}=(0,o.zz)(e);return[o.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            ${t("label")} {
                display: inline-block;
                text-align: left;
                font-size: 14px;
                margin-bottom: 7px;
                color: ${(0,o.Jy)("color_secondary_8")};
            }

            ${i("required")} ${t("label")}::after {
                content: ' *';
            }

            ${t("feedback-message")} {
                margin-top: 3px;
            }
        `]}},71965:(e,t,i)=>{i.d(t,{a:()=>s});var o=i(5298),r=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};class s extends o.OC{connectedCallback(){this.style.setProperty("display","none");const e=this._getChildImports();e.push({module:()=>i.e(5885).then(i.bind(i,25885)),elem:"FeedbackMessage"}),s.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}_getChildImports(){return[]}_renderLabel(e){return this.label?o.qy`<span class="${e}-label" title=${this.label}>${this.label}</span>`:o.s6}_renderFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"failure";return t||this.additionalFeedbackMessage?o.qy`
                <${s.FeedbackMessage.tag}
                    message-type="${this.additionalFeedbackType||i}"
                    class="${e}-feedback-message">
                    ${this.additionalFeedbackMessage||t||""}
                </${s.FeedbackMessage.tag}>
            `:o.s6}}r([(0,o.MZ)({type:String,reflect:!1}),a("design:type",Object)],s.prototype,"label",void 0),r([(0,o.MZ)({type:Boolean,converter:o.Bs,reflect:!1}),a("design:type",Object)],s.prototype,"disabled",void 0),r([(0,o.MZ)({type:String,attribute:"feedback-type"}),a("design:type",Object)],s.prototype,"additionalFeedbackType",void 0),r([(0,o.MZ)({type:String,attribute:"feedback-mess"}),a("design:type",Object)],s.prototype,"additionalFeedbackMessage",void 0)},80129:(e,t,i)=>{i.d(t,{m:()=>n,p:()=>s});var o=i(93656);let r;const a=()=>{if(!r){let e=window.studio;e||(e=window.studio={});let t=e.sui;t||(t=e.sui={});const i=`icons${o.r.split(".")[0]||o.r}`;r=r||t[i],r||(r=t[i]={})}return r},s=e=>{const t=a();return t[e.name]||(t[e.name]=e.data),e.name},n=e=>a()[e]},93656:(e,t,i)=>{i.d(t,{r:()=>o});const o="2.0.90"}}]);
//# sourceMappingURL=6737.47bc8aee.chunk.js.map