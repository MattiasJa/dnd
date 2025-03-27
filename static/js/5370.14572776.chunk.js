"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[2740,2808,5370,6738],{15370:(e,t,i)=>{i.r(t),i.d(t,{Search:()=>m,SearchEvent:()=>u,SearchEventType:()=>r,SearchSize:()=>a});var o=i(71965),s=i(5298);var a;!function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.XLARGE="xlarge"}(a||(a={}));var n=i(56620);var r,l=i(56016),d=i(37986),c=i(47745);!function(e){e.Change="change",e.Input="input",e.SearchSubmit="search-submit"}(r||(r={}));class u extends c.C{}var p,h=function(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n},b=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=p=class extends o.a{constructor(){super(...arguments),this.placeholder="",this.showInput=!1,this.alwaysOpen=!1,this.disableAutocomplete=!1,this.fullWidth=!1,this.database=[],this.size=a.MEDIUM,this._currentFocus=-1,this._autocompleteHide=!0,this._value=""}get value(){return this._value}set value(e){const t=this._value;t!==e&&(this._value=e,this.requestUpdate("value",t))}focus(e){this.showInput||this.alwaysOpen?this._input.focus(e):this._submitButton.focus(e)}blur(){this._submitButton.blur(),this._input.blur()}_getChildImports(){const e=[];return e.push({module:()=>i.e(9693).then(i.bind(i,59693)),elem:["Icon"]}),e}firstUpdated(){this._clickDocumentHandler=this._clickDocumentHandler.bind(this),this._handleDisable(),this.addEventListener("keydown",this.keyHandler)}updated(e){super.updated(e);void 0!==e.get("_autocompleteHide")&&(this._autocompleteHide?document.removeEventListener("click",this._clickDocumentHandler):document.addEventListener("click",this._clickDocumentHandler))}update(e){super.update(e);const t=e.has("alwaysOpen");(e.has("showInput")||t)&&(this.showInput||this.alwaysOpen||this.resetState())}render(){const[e,t]=(0,s.Yh)(this.tagName.toLowerCase(),{opened:this.showInput||this.alwaysOpen,"open-anim":!this.alwaysOpen,disabled:this.disabled,[this.size]:!0,fullWidth:this.fullWidth}),i=this.value&&(this.showInput||this.alwaysOpen)?s.qy`
                    <${p.Icon.tag}
                        icon=${l.default}
                        size="small"
                        class="${e}-reset-button"
                        id="reset-button"
                        @click="${this._handleResetButton}"
                        tabindex="0"
                        role="button"
                    ></${p.Icon.tag}>`:null;return s.qy`
            <div class="${t}">
                <label class="${e}-wrapper">
                    <div class="${e}-border">
                        <input
                            class="${e}-input"
                            id="search-input"
                            type="text"
                            .value="${this.value}"
                            placeholder="${(0,s.JR)(""===this.value&&""!==this.placeholder?this.placeholder:void 0)}"
                            ?disabled="${!!this.disabled}"
                            autocomplete="off"
                            @input="${this._onInput}"
                            @focus="${this._onFocus}"
                            @change="${this._onChange}"
                        />
                    </div>
                </label>
                <div class="${e}-icon-handler">
                    ${i}
                    <${p.Icon.tag}
                        icon=${d.default}
                        class="${e}-submit-button"
                        disabled="${!!this.disabled||this.alwaysOpen}"
                        id="submit-button"
                        @click="${this._handleSearchButton}"
                        tabindex="0"
                        role="button"
                    ></${p.Icon.tag}>
                </div>
                ${this._renderAutocomplete(e)}
            </div>
        `}keyHandler(e){const t=e.composedPath()[0],i=this.shadowRoot.querySelector("div[class$=-autocomplete-items]");i?this._handleKeysForAutocomplete(i,e):" "!==e.key&&"Enter"!==e.key||"submit-button"!==t.id?" "!==e.key&&"Enter"!==e.key||"reset-button"!==t.id||(e.preventDefault(),this.resetState()):(e.preventDefault(),this._handleSearchButton())}_handleKeysForAutocomplete(e,t){const i=e.getElementsByTagName("div");switch(t.key){case"ArrowDown":this._currentFocus++,this._currentFocus>=i.length&&(this._currentFocus=0);break;case"ArrowUp":this._currentFocus--,this._currentFocus<0&&(this._currentFocus=i.length-1);break;case"Enter":t.preventDefault(),this._currentFocus>-1&&i&&i[this._currentFocus].click();break;case"Escape":this._autocompleteHide=!0}}resetState(){this._value="",this._input.value="",this._autocompleteHide=!0}_handleSearchButton(){this.value&&(this.showInput||this.alwaysOpen)&&this.dispatchEvent(new u(r.SearchSubmit,{detail:this})),this.alwaysOpen||(this.showInput=!this.showInput),this._handleDisable(),this.requestUpdate()}_handleResetButton(){this.resetState(),this.dispatchEvent(new u(r.Change,{detail:{value:this.value}}))}_handleDisable(){const e=this.shadowRoot.querySelector("input#search-input");this.showInput||this.alwaysOpen?(e.removeAttribute("disabled"),this.alwaysOpen||e.focus()):e.setAttribute("disabled","true")}_clickDocumentHandler(e){e.target!==this&&(this._autocompleteHide=!0)}_renderAutocomplete(e){if(!this.value||this._autocompleteHide||this.disableAutocomplete)return this._autocompleteHide=!0,s.qy``;let t=0,i=-1;const o=` ${e}-autocomplete-item-active`,a=this.database.map((a=>{const n=this.matcher?this.matcher(a,this.value):(r=a,l=this.value,r.toLowerCase().indexOf(l.toLowerCase()));var r,l;if(n>-1){const r=a.substring(0,n),l=a.substring(n,n+this.value.length),d=a.substring(n+this.value.length);return++t,++i,s.qy` <div
                    class="${e}-autocomplete-item${i===this._currentFocus?o:""}"
                    @click="${this._itemClickHandler}"
                >
                    ${r}<strong>${l}</strong>${d}
                    <input type="hidden" value="${a}" />
                </div>`}return s.qy``}));return t>0?s.qy` <div class="${e}-autocomplete-items">${a}</div> `:(this._autocompleteHide=!0,s.qy``)}_itemClickHandler(e){const t=this.shadowRoot.querySelector("input#search-input"),i=e.currentTarget;t.value=i.querySelector("input").value,this.value=t.value,this._autocompleteHide=!0}_onFocus(){this._currentFocus=-1}_onInput(e){this.value=e.target.value,this._autocompleteHide=!1,this._currentFocus=-1,e.stopPropagation(),this.dispatchEvent(new u(r.Input,{detail:{value:this.value}}))}_onChange(e){e.stopPropagation(),this.dispatchEvent(new u(r.Change,{detail:{value:this.value}}))}};h([(0,s.MZ)({type:String,reflect:!1}),b("design:type",Object)],m.prototype,"placeholder",void 0),h([(0,s.MZ)({type:String,reflect:!0}),b("design:type",String),b("design:paramtypes",[String])],m.prototype,"value",null),h([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"show-input",reflect:!1}),b("design:type",Object)],m.prototype,"showInput",void 0),h([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"always-open",reflect:!1}),b("design:type",Object)],m.prototype,"alwaysOpen",void 0),h([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"disable-autocomplete",reflect:!1}),b("design:type",Object)],m.prototype,"disableAutocomplete",void 0),h([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"full-width",reflect:!1}),b("design:type",Object)],m.prototype,"fullWidth",void 0),h([(0,s.MZ)({type:Array,reflect:!1}),b("design:type",Array)],m.prototype,"database",void 0),h([(0,s.MZ)({type:a,reflect:!0}),b("design:type",Object)],m.prototype,"size",void 0),h([(0,s.MZ)({type:Function,reflect:!1,attribute:!1}),b("design:type",Object)],m.prototype,"matcher",void 0),h([(0,s.wk)(),b("design:type",Object)],m.prototype,"_currentFocus",void 0),h([(0,s.wk)(),b("design:type",Object)],m.prototype,"_autocompleteHide",void 0),h([(0,s.P)('[class*="-submit-button"]'),b("design:type",Object)],m.prototype,"_submitButton",void 0),h([(0,s.P)('[class*="-input"]'),b("design:type",Object)],m.prototype,"_input",void 0),m=p=h([(0,s.eV)({tagName:"search",styles:e=>{const{root:t,child:i,is:o}=(0,s.zz)(e),a=(0,s.Jy)("color_secondary_1"),r=(0,s.Jy)("color_secondary_6"),l=(0,s.Jy)("color_secondary_10"),d=(0,s.Jy)("color_primary_2");return[(0,n.v)(e),s.AH`
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
                position: relative;
                height: 40px;
            }

            ${o("small")} {
                height: 32px;
            }

            ${o("medium")} {
                height: 40px;
            }

            ${o("large")} {
                height: 48px;
            }

            ${o("xlarge")} {
                height: 56px;
            }

            ${o("small")} ${i("input")} {
                min-height: 32px;
                height: 32px;
            }

            ${o("medium")} ${i("input")} {
                min-height: 40px;
                height: 40px;
            }

            ${o("large")} ${i("input")} {
                min-height: 48px;
                height: 48px;
            }

            ${o("xlarge")} ${i("input")} {
                min-height: 56px;
                height: 56px;
            }

            ${o("small")} ${i("submit-button")} {
                min-width: 28px;
                min-height: 28px;
            }

            ${o("medium")} ${i("submit-button")} {
                min-width: 36px;
                min-height: 36px;
            }

            ${o("large")} ${i("submit-button")} {
                min-width: 44px;
                min-height: 44px;
            }

            ${o("xlarge")} ${i("submit-button")} {
                min-width: 52px;
                min-height: 52px;
            }

            ${i("wrapper")} {
                position: absolute;
                right: 0;
                width: unset;
                border-radius: 0;
            }

            ${i("input")}::placeholder {
                color: ${r};
            }

            ${i("input")} {
                width: 0;
                margin: 0;
                min-height: 40px;
                height: 40px;
                padding: 0;
                border: none;
                border-radius: 0;
                outline: none;
                float: right;
            }

            ${o("open-anim")} ${i("input")} {
                transition:
                    width 0.35s,
                    padding 0.35s;
            }

            ${i("border")} {
                position: relative;
                width: 0;
                float: right;
            }

            ${o("open-anim")} ${i("border")} {
                transition: width 0.35s;
            }

            ${i("border")}:after {
                content: ' ';
                display: block;
                position: absolute;

                border: none;
                z-index: 0;
                pointer-events: none;
                inset: 0;
            }

            ${o("opened")} ${i("border")}:after {
                border: var(--search-input-border, 1px solid ${r});
            }

            ${o("opened")} ${i("border")}:hover:after {
                border: 1px solid #7e7e7e;
            }

            ${o("opened")} ${i("border")}:focus-within:after {
                border: 2px solid ${l};
            }

            ${i("input")}:disabled {
                background: transparent;
            }

            ${o("opened")} ${i("border")} {
                width: var(--search-width, 240px);
                max-width: var(--search-max-width, 240px);
                min-width: var(--search-min-width, 40px);
            }

            ${o("opened")} ${i("input")} {
                width: var(--search-width, 240px);
                max-width: var(--search-max-width, 240px);
                min-width: var(--search-min-width, 40px);
                padding-left: 16px;
                padding-right: 56px;
            }

            ${o("fullWidth","opened")} ${i("wrapper")} {
                width: 100%;
            }

            ${o("fullWidth","opened")} ${i("border")} {
                width: 100%;
                max-width: 100%;
            }

            ${o("fullWidth","opened")} ${i("input")} {
                width: 100%;
                max-width: 100%;
            }

            ${i("")}reset-button:focus-visible,
            ${i("")}submit-button:focus-visible {
                outline: 2px solid ${l} !important;
                inset: 2px;
            }

            ${i("icon-handler")} {
                position: absolute;
                top: 2px;
                right: 2px;
                display: flex;
                align-items: center;
                display: flex;
                justify-content: flex-end;
                z-index: 1;
            }

            ${i("")}reset-button,
            ${i("")}submit-button {
                cursor: pointer;
                background: ${d};
                font-size: 12px;
            }

            ${i("")}submit-button[disabled="true"] {
                cursor: auto;
            }

            ${i("submit-button")} {
                min-width: 40px;
                min-height: 38px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent;
                font-size: 1.5rem;
                user-select: none;
            }

            @media (hover: hover) {
                ${i("submit-button")}:not([disabled="true"]):hover {
                    background: ${a};
                }
            }

            ${i("autocomplete")} {
                position: relative;
                display: inline-block;
            }

            ${i("autocomplete-items")} {
                position: absolute;
                top: calc(100% - 1px);
                right: 0;
                width: 240px;
                z-index: 4;
                border-top: 0;
                background: ${d};
                padding: 16px 0;
                overflow-wrap: break-word;
                border: 1px solid ${l};
                text-align: left;
            }

            ${o("fullWidth")} ${i("autocomplete-items")} {
                width: 100%;
            }

            ${i("autocomplete-item")} {
                padding: 5px 16px;
                cursor: pointer;
                background-color: #fff;
                font-size: 14px;
            }

            ${i("autocomplete-item")}:hover {
                background-color: #e9e9e9;
            }

            ${i("autocomplete-item-active")} {
                background-color: DodgerBlue !important;
                color: #ffffff;
            }
        `]},version:"2.0.138"})],m)},37986:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const o=(0,i(80129).p)({name:"search",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.056 14.329a5.402 5.402 0 0 1-6.947-8.22 5.4 5.4 0 0 1 8.22 6.947l5.144 5.144-1.273 1.273zm-5.887-1.644a3.9 3.9 0 1 0 5.516-5.516 3.9 3.9 0 0 0-5.516 5.516" clip-rule="evenodd"/></svg>'})},47745:(e,t,i)=>{var o;i.d(t,{C:()=>s}),function(e){e.Change="change"}(o||(o={}));class s extends CustomEvent{constructor(e,t){super(e,Object.assign({composed:!0,bubbles:!0,cancelable:!0},t))}}},56016:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const o=(0,i(80129).p)({name:"cancel",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 5.4 5.4 6.6l5.4 5.4-5.4 5.4 1.2 1.2 5.4-5.4 5.4 5.4 1.2-1.2-5.4-5.4 5.4-5.4-1.2-1.2-5.4 5.4z"/></svg>'})},56620:(e,t,i)=>{i.d(t,{v:()=>s});var o=i(5298);const s=e=>{const{child:t,is:i}=(0,o.zz)(e);return[o.AH`
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
        `]}},71965:(e,t,i)=>{i.d(t,{a:()=>n});var o=i(5298),s=function(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};class n extends o.OC{connectedCallback(){this.style.setProperty("display","none");const e=this._getChildImports();e.push({module:()=>i.e(5885).then(i.bind(i,25885)),elem:"FeedbackMessage"}),n.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}_getChildImports(){return[]}_renderLabel(e){return this.label?o.qy`<span class="${e}-label" title=${this.label}>${this.label}</span>`:o.s6}_renderFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"failure";return t||this.additionalFeedbackMessage?o.qy`
                <${n.FeedbackMessage.tag}
                    message-type="${this.additionalFeedbackType||i}"
                    class="${e}-feedback-message">
                    ${this.additionalFeedbackMessage||t||""}
                </${n.FeedbackMessage.tag}>
            `:o.s6}}s([(0,o.MZ)({type:String,reflect:!1}),a("design:type",Object)],n.prototype,"label",void 0),s([(0,o.MZ)({type:Boolean,converter:o.Bs,reflect:!1}),a("design:type",Object)],n.prototype,"disabled",void 0),s([(0,o.MZ)({type:String,attribute:"feedback-type"}),a("design:type",Object)],n.prototype,"additionalFeedbackType",void 0),s([(0,o.MZ)({type:String,attribute:"feedback-mess"}),a("design:type",Object)],n.prototype,"additionalFeedbackMessage",void 0)},80129:(e,t,i)=>{i.d(t,{m:()=>r,p:()=>n});var o=i(93656);let s;const a=()=>{if(!s){let e=window.studio;e||(e=window.studio={});let t=e.sui;t||(t=e.sui={});const i=`icons${o.r.split(".")[0]||o.r}`;s=s||t[i],s||(s=t[i]={})}return s},n=e=>{const t=a();return t[e.name]||(t[e.name]=e.data),e.name},r=e=>a()[e]},93656:(e,t,i)=>{i.d(t,{r:()=>o});const o="2.0.90"}}]);
//# sourceMappingURL=5370.14572776.chunk.js.map