"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[2808,6295],{8676:(e,t,i)=>{i.r(t),i.d(t,{Slider:()=>g,SliderEvent:()=>o,SliderEventType:()=>l,isNumber:()=>p,parseNumericalValue:()=>d,roundToSignificantDecimals:()=>u});var s=i(71965),n=i(5298),a=i(56620);var l,r=i(47745);!function(e){e.Change="change",e.Input="input"}(l||(l={}));class o extends r.C{}const p=e=>!isNaN(e),d=(e,t)=>{if(!p(e)){const i=parseFloat(e.replace(",","."));return p(i)?i:t}return parseFloat(e)};function u(e,t){if(0===e||t<=0)return 0;const i=Math.pow(10,t-Math.ceil(Math.log10(Math.abs(e))));return Math.round(e*i)/i}var h,c=function(e,t,i,s){var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l},b=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let g=h=class extends s.a{get steps(){return this._steps}set steps(e){const t=this._steps,i=this._steps.filter((e=>!this._textFieldInsertedSteps.includes(e))),s=e.filter((e=>!this._textFieldInsertedSteps.includes(e)));this._arraysEqual(i,s)||(this._textFieldInsertedSteps=[]);const n=this._textFieldInsertedSteps.filter((t=>!e.includes(t)));this._steps=[...e,...n].sort(((e,t)=>e-t)),this.inputElement&&this.inputElement.step!==this.getStepSize(this._steps).toString()&&(this.inputElement.step=this.getStepSize(this._steps).toString()),this.requestUpdate("steps",t)}get value(){return this.inputElement?this.inputElement.value:this._value}set value(e){let t=this._value;if(e!==t){if(this.steps.length>0){const t=Number(e);this._value=t.toString()}else this._value=this._trimValue(Number(e),this.minValue,this.maxValue,this.step);this.inputElement&&this.inputElement.value!==this._value&&(t=this.inputElement.value,this.inputElement.value=this._value),this.requestUpdate("value",t)}}constructor(){super(),this.minValue=0,this.maxValue=100,this.step=1,this.showMinMax=!0,this.hasInput=!1,this._value="",this._steps=[],this._textFieldInsertedSteps=[],this._isFocused=!1}focus(e){this.inputElement&&this.inputElement.focus(e)}blur(){this.inputElement&&this.inputElement.blur()}connectedCallback(){h.dynSubRegister([{module:()=>Promise.all([i.e(8804),i.e(4247)]).then(i.bind(i,18804)),elem:["TextField"]}],(()=>{super.connectedCallback()}))}render(){const[e,t]=(0,n.Yh)(this.tagName.toLowerCase(),{isFocused:this._isFocused,disabled:this.disabled,minmax:this.showMinMax}),i=this.label?n.qy`<span class="${e}-label">${this.label}</span>`:n.qy``,s=n.qy`<span class="${e}-value">
            <p class="${e}-message">${this.value}</p>
        </span>`,a=this.steps.length>0?this._renderDatalist():null,l=this.steps.length>0?this.getStepSize(this.steps):this.step;return n.qy`
            <label class="${t}">
                ${i}
                <div class="${e}-input-content-wrapper">
                    <div class="${e}-input-content">
                        ${this.hasInput&&this.steps.length>0?n.qy``:n.qy`<div class="${e}-wrapper">${s}</div>`}
                        <div class="${e}-wrapper-content">
                            <input
                                class="${e}-slider"
                                type="range"
                                .step="${l}"
                                min="${this.minValue}"
                                max="${this.maxValue}"
                                .value="${this.value}"
                                ?disabled=${!!this.disabled}
                                @input="${this._onInput}"
                                @blur="${this._onBlur}"
                                @change="${this._onChange}"
                                @keydown="${this._handleKeyDown}"
                                list="ticks"
                            />
                            ${a}
                        </div>
                        ${this.showMinMax&&!this.disabled?n.qy`<div class="${e}-content-min-max">
                                  <span class="${e}-min">${this.minValue}</span>
                                  <span class="${e}-max">${this.maxValue}</span>
                              </div>`:n.qy``}
                    </div>
                    ${this.hasInput&&this.steps.length>0?n.qy`<${h.TextField.tag}
                              class="${e}-input-field"
                              size="small"
                              type="number"
                              .value="${this.value}"
                              ?disabled=${!!this.disabled}
                              @change=${this._onTextFieldChange}
                              @input=${this._onTextFieldInput}
                          ></${h.TextField.tag}>`:n.qy``}
                </div>
            </label>
        `}_renderDatalist(){return n.qy`<datalist id="ticks">${this.steps.map((e=>n.qy`<option value="${e}"></option>`))}</datalist>`}getStepSize(e){const t=e.reduce(((e,t)=>{var i;const s=(null===(i=t.toString().split(".")[1])||void 0===i?void 0:i.length)||0;return Math.max(e,s)}),0);return Math.pow(10,-t)}_getClosestStep(e){return this.steps.reduce(((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t))}_onInput(e){e.stopPropagation();const t=e.target;if(this.steps.length>0){const e=Number(t.value),i=this._getClosestStep(e).toString();t.value=i,this.value=i}else this.value=t.value;this.dispatchEvent(new o(l.Input,{detail:{value:Number(this.value)}}))}_onChange(){this.dispatchEvent(new o(l.Change,{detail:{value:Number(this.value)}}))}_onTextFieldInput(e){e.stopPropagation()}_resetTextField(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[class$="-input-field"]');t.value="",setTimeout((()=>{t.value=this.value}),0)}_onTextFieldChange(e){e.stopPropagation();const t=e.target.value;if(t===this.value)return;if(""===t)return void this._resetTextField();const i=u(d(t,Number(this.value)),6);if(i!==Number(this.value))if(i>=this.minValue&&i<=this.maxValue)this.steps.includes(i)||(this._textFieldInsertedSteps=[...this._textFieldInsertedSteps,i],this.steps=[...this.steps,i].sort(((e,t)=>e-t))),this.value=i.toString(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0}));else{if(i>this.maxValue&&this.value===this.maxValue.toString()||i<this.minValue&&this.value===this.minValue.toString())return void this._resetTextField();const e=i<this.minValue?this.minValue:this.maxValue;this.value=e.toString(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0}))}else this._resetTextField()}_onBlur(e){e.target&&(this._isFocused=!1,this.requestUpdate("_isFocused"))}_handleKeyDown(e){if("Tab"!==e.code&&(e.preventDefault(),"ArrowRight"===e.code||"ArrowLeft"===e.code)){const t="ArrowLeft"===e.code?-1:1;if(this.steps.length>0){const e=this.steps.indexOf(Number(this.value))+t,i=this.steps[e];if(void 0===i)return;this.value=i.toString()}else{const e=Number(this.value)+t*this.step;if(e<this.minValue||e>this.maxValue)return;this.value=e.toString()}this.inputElement.dispatchEvent(new Event("input",{bubbles:!0})),this._isFocused=!0,this.requestUpdate("_isFocused")}}_trimValue(e,t,i,s){let n=Math.max(t,Math.min(i,e));if(s>0){const e=(n-t)%s;n-=e,e>=s/2&&(n+=s)}return String(n)}_arraysEqual(e,t){return e.length===t.length&&e.every(((e,i)=>e===t[i]))}};c([(0,n.MZ)({type:Number,attribute:"min-value",reflect:!0}),b("design:type",Object)],g.prototype,"minValue",void 0),c([(0,n.MZ)({type:Number,attribute:"max-value",reflect:!0}),b("design:type",Object)],g.prototype,"maxValue",void 0),c([(0,n.MZ)({type:Number,reflect:!0}),b("design:type",Object)],g.prototype,"step",void 0),c([(0,n.MZ)({reflect:!1,attribute:!1,type:Array()}),b("design:type",Array),b("design:paramtypes",[Array])],g.prototype,"steps",null),c([(0,n.MZ)({type:Boolean,converter:n.Bs,attribute:"show-min-max"}),b("design:type",Object)],g.prototype,"showMinMax",void 0),c([(0,n.MZ)({type:Boolean,attribute:"has-input",reflect:!0}),b("design:type",Object)],g.prototype,"hasInput",void 0),c([(0,n.MZ)({type:String,reflect:!0}),b("design:type",String),b("design:paramtypes",[String])],g.prototype,"value",null),c([(0,n.P)("input"),b("design:type",HTMLInputElement)],g.prototype,"inputElement",void 0),g=h=c([(0,n.eV)({tagName:"slider",styles:e=>{const{root:t,child:i,is:s}=(0,n.zz)(e),l=(0,n.Jy)("color_primary_3"),r=(0,n.Jy)("color_secondary_3"),o=(0,n.Jy)("color_secondary_10");return[(0,a.v)(e),n.AH`${t}{display:flex;flex-direction:column;align-items:flex-start;width:100%;}${i("input-content-wrapper")}{display:grid;grid-template-columns:2fr auto;align-items:center;width:100%;}${i("input-content")}{display:flex;flex-direction:column;width:100%;}${i("input-field")}{padding:0 0 19px 16px;width:var(--input-width, 100px);}${i("content-min-max")}{font-size:12px;position:relative;width:100%;display:flex;align-items:flex-end;justify-content:space-between;height:16px;}${i("wrapper")}{font-size:12px;position:relative;width:100%;display:flex;align-items:center;height:16px;}${i("wrapper-content")}{font-size:12px;position:relative;width:100%;display:flex;align-items:center;height:22px;}${i("min")}{color:var(--color-secondary-7);padding-right:8px;font-size:12px;}${i("max")}{color:var(--color-secondary-7);padding-left:8px;font-size:12px;}${i("value")}{position:absolute;top:0;right:0;display:flex;flex-direction:column;align-items:center;width:max-content;}${i("message")}{font-size:12px;color:${o};margin:0;padding:0;font-weight:bold;}${i("slider")}{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;outline:none;margin:0;cursor:pointer;}${i("slider")}::-webkit-slider-runnable-track{width:100%;height:2px;background:${l};}${i("slider")}::-moz-range-track{width:100%;height:2px;background:${l};}${i("slider")}::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:8px;height:16px;margin-top:-7px;background:${l};}${i("slider")}::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:8px;height:16px;margin-top:-7px;background:${l};border:none;border-radius:0;}${s("isFocused")} ${i("slider")}::-webkit-slider-thumb{outline:2px solid ${l};outline-offset:1px;}${s("isFocused")} ${i("slider")}::-moz-range-thumb{outline:2px solid ${l};outline-offset:1px;}${i("slider")}:focus-visible::-webkit-slider-thumb{outline:2px solid ${l};outline-offset:1px;}${i("slider")}:focus-visible::-moz-range-thumb{outline:2px solid ${l};outline-offset:1px;}${i("slider")}:active::-webkit-slider-thumb{background:var(--color-secondary-10);}${i("slider")}:active::-moz-range-thumb{background:var(--color-secondary-10);}${s("disabled")} ${i("slider")}{background:${r};}${s("disabled")} ${i("slider")}::-webkit-slider-thumb{background:${r};}${s("disabled")} ${i("slider")}::-moz-range-thumb{background:${r};}`]},version:"2.0.66"}),b("design:paramtypes",[])],g)},47745:(e,t,i)=>{var s;i.d(t,{C:()=>n}),function(e){e.Change="change"}(s||(s={}));class n extends CustomEvent{constructor(e,t){super(e,Object.assign({composed:!0,bubbles:!0,cancelable:!0},t))}}},56620:(e,t,i)=>{i.d(t,{v:()=>n});var s=i(5298);const n=e=>{const{child:t,is:i}=(0,s.zz)(e);return[s.AH`
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
                color: ${(0,s.Jy)("color_secondary_8")};
            }

            ${i("required")} ${t("label")}::after {
                content: ' *';
            }

            ${t("feedback-message")} {
                margin-top: 3px;
            }
        `]}},71965:(e,t,i)=>{i.d(t,{a:()=>l});var s=i(5298),n=function(e,t,i,s){var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};class l extends s.OC{connectedCallback(){this.style.setProperty("display","none");const e=this._getChildImports();e.push({module:()=>i.e(5885).then(i.bind(i,25885)),elem:"FeedbackMessage"}),l.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}_getChildImports(){return[]}_renderLabel(e){return this.label?s.qy`<span class="${e}-label" title=${this.label}>${this.label}</span>`:s.s6}_renderFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"failure";return t||this.additionalFeedbackMessage?s.qy`
                <${l.FeedbackMessage.tag}
                    message-type="${this.additionalFeedbackType||i}"
                    class="${e}-feedback-message">
                    ${this.additionalFeedbackMessage||t||""}
                </${l.FeedbackMessage.tag}>
            `:s.s6}}n([(0,s.MZ)({type:String,reflect:!1}),a("design:type",Object)],l.prototype,"label",void 0),n([(0,s.MZ)({type:Boolean,converter:s.Bs,reflect:!1}),a("design:type",Object)],l.prototype,"disabled",void 0),n([(0,s.MZ)({type:String,attribute:"feedback-type"}),a("design:type",Object)],l.prototype,"additionalFeedbackType",void 0),n([(0,s.MZ)({type:String,attribute:"feedback-mess"}),a("design:type",Object)],l.prototype,"additionalFeedbackMessage",void 0)}}]);
//# sourceMappingURL=6295.c9138f0e.chunk.js.map