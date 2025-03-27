"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[188,2498,2808,4247,6328],{14247:(e,t,i)=>{var n;i.d(t,{R:()=>n}),function(e){e.Failure="failure",e.Success="success",e.Basic="basic"}(n||(n={}))},14942:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=(0,i(80129).p)({name:"clock",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.708 12.3V7.194h-1.386v5.682l2.73 2.73.984-.978z"/><path fill-rule="evenodd" d="M16.578 7.362a6.6 6.6 0 0 0-9.336 0 6.6 6.6 0 0 0 0 9.336 6.6 6.6 0 0 0 9.336 0 6.6 6.6 0 0 0 0-9.336m.846-.846c-3.048-3.048-7.986-3.048-11.028 0-3.048 3.048-3.048 7.986 0 11.028 3.048 3.048 7.986 3.048 11.028 0 3.048-3.048 3.048-7.986 0-11.028" clip-rule="evenodd"/></svg>'})},47745:(e,t,i)=>{var n;i.d(t,{C:()=>s}),function(e){e.Change="change"}(n||(n={}));class s extends CustomEvent{constructor(e,t){super(e,Object.assign({composed:!0,bubbles:!0,cancelable:!0},t))}}},56620:(e,t,i)=>{i.d(t,{v:()=>s});var n=i(5298);const s=e=>{const{child:t,is:i}=(0,n.zz)(e);return[n.AH`
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
                color: ${(0,n.Jy)("color_secondary_8")};
            }

            ${i("required")} ${t("label")}::after {
                content: ' *';
            }

            ${t("feedback-message")} {
                margin-top: 3px;
            }
        `]}},71965:(e,t,i)=>{i.d(t,{a:()=>r});var n=i(5298),s=function(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},o=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};class r extends n.OC{connectedCallback(){this.style.setProperty("display","none");const e=this._getChildImports();e.push({module:()=>i.e(5885).then(i.bind(i,25885)),elem:"FeedbackMessage"}),r.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}_getChildImports(){return[]}_renderLabel(e){return this.label?n.qy`<span class="${e}-label" title=${this.label}>${this.label}</span>`:n.s6}_renderFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"failure";return t||this.additionalFeedbackMessage?n.qy`
                <${r.FeedbackMessage.tag}
                    message-type="${this.additionalFeedbackType||i}"
                    class="${e}-feedback-message">
                    ${this.additionalFeedbackMessage||t||""}
                </${r.FeedbackMessage.tag}>
            `:n.s6}}s([(0,n.MZ)({type:String,reflect:!1}),o("design:type",Object)],r.prototype,"label",void 0),s([(0,n.MZ)({type:Boolean,converter:n.Bs,reflect:!1}),o("design:type",Object)],r.prototype,"disabled",void 0),s([(0,n.MZ)({type:String,attribute:"feedback-type"}),o("design:type",Object)],r.prototype,"additionalFeedbackType",void 0),s([(0,n.MZ)({type:String,attribute:"feedback-mess"}),o("design:type",Object)],r.prototype,"additionalFeedbackMessage",void 0)},80129:(e,t,i)=>{i.d(t,{m:()=>a,p:()=>r});var n=i(93656);let s;const o=()=>{if(!s){let e=window.studio;e||(e=window.studio={});let t=e.sui;t||(t=e.sui={});const i=`icons${n.r.split(".")[0]||n.r}`;s=s||t[i],s||(s=t[i]={})}return s},r=e=>{const t=o();return t[e.name]||(t[e.name]=e.data),e.name},a=e=>o()[e]},92498:(e,t,i)=>{i.r(t),i.d(t,{TimePicker:()=>b,TimePickerTextKey:()=>a});var n=i(71965),s=i(5298),o=i(14247);var r=i(56620);var a;!function(e){e.INVALID="invalid"}(a||(a={}));var l,u=i(14942),d=i(47745);!function(e){e.Change="change",e.Invalid="invalid"}(l||(l={}));class c extends d.C{}var h,p=function(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},_=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let b=h=class extends n.a{constructor(){super(...arguments),this.placeholder={hour:"HH",minute:"mm"},this.required=!1,this._inputFocused=!1,this._inputValue="",this._invalid=null,this._texts={[a.INVALID]:"Invalid date format"},this._contextMenu=!1,this._renderVirtualInput=(e,t,i,n,o)=>s.qy`
        <div class="${e}-wrapper">
            <span class="${e}-width">${o}</span>
            <input
                class="${e}-inputs ${e}-${t}"
                type="number"
                placeholder="${o}"
                .value="${i}"
                ?required=${this.required}
                ?disabled="${!!this.disabled}"
                @input=${e=>this._onInput(e,o.length)}
                @change=${n}
                @focus=${this._onInputFocus}
                @blur=${this._onInputBlur}
            />
        </div>
    `,this._renderDivider=e=>s.qy` <span class="${e}-divider">:</span> `,this._onChangeHour=e=>{this._hour=this._onChange(e,this._hour,this.placeholder.hour.length),this._updateInputValue()},this._onChangeMinute=e=>{this._minute=this._onChange(e,this._minute,this.placeholder.minute.length),this._updateInputValue()},this._updateInputValue=()=>{this._hour&&this._minute?this.value=`${this._hour}:${this._minute}`:(this._invalid=null,this._inputValue=""),this.dispatchEvent(new c(l.Change,{detail:Object.assign({value:this.value,hour:this._hour,minute:this._minute},this._invalid?{invalid:!0}:{})}))},this._onChange=(e,t,i)=>{const n=e.target.value;return isNaN(n)?"":parseInt(n,10)<0?(e.target.value=t,t):this._pad(n,i)},this._onInput=(e,t)=>{e.target.value=e.target.value.length>t?e.target.value.slice(0,t):e.target.value,e.target===this._hourInput&&e.target.value.length>=t&&this._minuteInput.focus()},this._pad=function(e,t){return(""+e).padStart(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0")}}get value(){return this._inputValue}set value(e){const t=this.value;e!==t&&(this._inputValue=e||"",this._validateSetValue(),this.requestUpdate("value",t))}get texts(){return this._texts}set texts(e){const t=this._texts;"string"===typeof e&&(e=JSON.parse(e)),this._texts=e,this.requestUpdate("texts",t)}focus(e){this._contextMenu=!0,this._hourInput.focus(e),this._inputFocused=!0}blur(){this._hourInput.blur(),this._inputFocused=!1,this._contextMenu=!1}_getChildImports(){const e=[];return e.push({module:()=>Promise.all([i.e(7135),i.e(3596),i.e(7303)]).then(i.bind(i,63596)),elem:"ContextMenu"}),e.push({module:()=>i.e(9693).then(i.bind(i,59693)),elem:["Icon"]}),e}render(){const[e,t]=(0,s.Yh)(this.tagName.toLowerCase(),{disabled:this.disabled,required:this.required,focused:this._inputFocused,validation:null!==this._invalid||this.additionalFeedbackType===o.R.Failure});return s.qy`
            <label class="${t}">
                ${this._renderLabel(e)}
                <div class="${e}-input-row">
                    <div class='${e}-outer' id="wrapper">
                        <${h.Icon.tag} class='${e}-icon' icon=${u.default} size='large'></${h.Icon.tag}>
                        ${this._renderVirtualInput(e,"hour",this._hour,this._onChangeHour,this.placeholder.hour)}
                        ${this._renderDivider(e)}
                        ${this._renderVirtualInput(e,"minute",this._minute,this._onChangeMinute,this.placeholder.minute)}
                    </div>
                    <div class="${e}-feedback-wrapper">
                        ${this._renderFeedback(e,null!==this._invalid?this._texts[a.INVALID]:"")}
                    </div>

                    ${this._renderPicker(e)}
                </div>
            </label>
        `}_renderPicker(e){const t=[];let i=0,n=-1,o=-1;Array.from({length:24},((e,s)=>{const r=this._pad(s,2);t.push({label:`${r}:00`,hour:s,minute:0}),this._hour===r&&(o=i,"00"===this._minute&&(n=i)),i++,t.push({label:`${r}:30`,hour:s,minute:30}),this._hour===r&&"30"===this._minute&&(n=i),i++}));const r={width:"auto",virtualize:!0,selectedItem:n,scrolledItem:n>-1?n:o,item:t.map((e=>{let{label:t,hour:i,minute:n}=e;return{label:t,clickCallback:()=>{this._contextMenu=!1,this.value=`${this._pad(i,2)}:${this._pad(n,2)}`,this._updateInputValue()}}}))};return this._contextMenu?s.qy`
                <${h.ContextMenu.tag}
                    class='${e}-cc'
                    object-id='wrapper'
                    controlled=${!0}
                    fixed-width=${!0}
                    open=${this._contextMenu}
                    click-outside-close=${!0}
                    .items=${r}
                    @close=${()=>{this._contextMenu=!1}}
                >
                </${h.ContextMenu.tag}>
            `:s.qy``}_onInputFocus(e){const t=e.target;t&&t.value&&setTimeout((()=>t.select()),0),this._inputFocused=!0,this._contextMenu=!0}async _onInputBlur(){this._inputFocused=!1}_validateSetValue(){const e=this._inputValue.split(":"),t=parseInt(e[0],10),i=parseInt(e[1],10);(isNaN(t)||t<0||t>23||isNaN(i)||i<0||i>59)&&this._inputValue?(this._invalid=a.INVALID,this.dispatchEvent(new c(l.Invalid,{}))):(this._invalid=null,this._hour=this._pad(t,2),this._minute=this._pad(i,2))}};p([(0,s.MZ)({type:Object,reflect:!1,attribute:!1}),_("design:type",Object)],b.prototype,"placeholder",void 0),p([(0,s.MZ)({type:Boolean,converter:s.Bs,reflect:!1}),_("design:type",Object)],b.prototype,"required",void 0),p([(0,s.MZ)({type:String,reflect:!0}),_("design:type",String),_("design:paramtypes",[String])],b.prototype,"value",null),p([(0,s.MZ)({type:Object,attribute:!1}),_("design:type",Object),_("design:paramtypes",[Object])],b.prototype,"texts",null),p([(0,s.wk)(),_("design:type",Object)],b.prototype,"_inputFocused",void 0),p([(0,s.wk)(),_("design:type",Object)],b.prototype,"_hour",void 0),p([(0,s.wk)(),_("design:type",Object)],b.prototype,"_minute",void 0),p([(0,s.P)('[class*="-hour"]'),_("design:type",Object)],b.prototype,"_hourInput",void 0),p([(0,s.P)('[class*="-minute"]'),_("design:type",Object)],b.prototype,"_minuteInput",void 0),p([(0,s.wk)(),_("design:type",Object)],b.prototype,"_contextMenu",void 0),b=h=p([(0,s.eV)({tagName:"time-picker",styles:e=>{const{root:t,child:i,is:n}=(0,s.zz)(e);return[(0,r.v)(e),s.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}${t}{display:flex;flex-direction:column;align-items:flex-start;width:fit-content;min-width:80px;}${i("outer")}{display:inline-flex;overflow:hidden;position:relative;align-items:center;height:40px;min-width:0;width:100%;margin-right:14px;background-color:${(0,s.Jy)("color_primary_2")};}${i("outer")}:after{content:' ';display:block;position:absolute;border:1px solid ${(0,s.Jy)("color_secondary_3")};inset:0;z-index:0;pointer-events:none;}${n("focused")} ${i("outer")}:after{border:1px solid ${(0,s.Jy)("color_primary_3")};z-index:1;}${n("!focused","!disabled")} ${i("outer")}:hover:after{border:1px solid ${(0,s.Jy)("color_secondary_6")};z-index:1;}${n("validation")} ${i("outer")}:after{border:1px solid ${(0,s.Jy)("color_traffic_light_1")};z-index:1;}${n("disabled")} ${i("outer")}{outline:none;background-color:${(0,s.Jy)("color_secondary_2")};}${i("icon")}{margin:0 14px;}${i("divider")}{pointer-events:none;padding:0 2px;font-size:14px;color:${(0,s.Jy)("color_secondary_7")};}${i("wrapper")}{position:relative;height:100%;font-size:14px;}${i("inputs")}{border:none;padding:0;letter-spacing:0;text-align:left;width:100%;height:100%;position:absolute;left:0;color:var(--color-primary-3);-moz-appearance:textfield;}${i("width")}{visibility:hidden;}${i("inputs")}::-webkit-inner-spin-button{display:none;}${i("inputs")}:focus{outline:0;}${i("input-row")}{position:relative;display:flex;flex-direction:column;}`]},version:"2.0.108"})],b)},93656:(e,t,i)=>{i.d(t,{r:()=>n});const n="2.0.90"}}]);
//# sourceMappingURL=2498.345cc72b.chunk.js.map