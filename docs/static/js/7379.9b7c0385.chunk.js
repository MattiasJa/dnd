"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[2808,7379],{37379:(e,t,i)=>{i.r(t),i.d(t,{Switch:()=>h,SwitchEvent:()=>r,SwitchEventType:()=>s});var o=i(71965),n=i(5298),c=i(56620);var s,a=i(47745);!function(e){e.Change="change"}(s||(s={}));class r extends a.C{}var l,d=function(e,t,i,o){var n,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(c<3?n(s):c>3?n(t,i,s):n(t,i))||s);return c>3&&s&&Object.defineProperty(t,i,s),s},p=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=l=class extends o.a{get value(){return""+this.checked}set value(e){const t=""+this.checked;t!==e&&(this.checked="true"===e,this._checkboxElement&&(this._checkboxElement.checked=this.checked),this.requestUpdate("value",t))}constructor(){super(),this.checked=!1,this.descriptiveText=!1,this.description="",this.tooltipText="",this._handleKeyDown=this._handleKeyDown.bind(this)}focus(e){this._checkboxElement&&this._checkboxElement.focus(e)}blur(){this._checkboxElement&&this._checkboxElement.blur()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown),super.disconnectedCallback()}_getChildImports(){const e=[];return e.push({module:()=>i.e(1734).then(i.bind(i,51734)),elem:["TooltipService"]}),e}render(){const[e,t]=(0,n.Yh)(this.tagName.toLowerCase(),{disabled:this.disabled}),i=""!==this.tooltipText?n.qy`<${l.TooltipService.tag} object-id="switch-tooltip" location="top-right"><span>${this.tooltipText}</span></${l.TooltipService.tag}>`:null,o=this.descriptiveText?n.qy`<div class="${e}-description-on">on</div>`:null,c=this.descriptiveText?n.qy`<div class="${e}-description-off">off</div>`:null,s=""!==this.description?n.qy`<label class="${e}-description">${this.description}</label>`:null;return n.qy`
            <label class="${t}" @change=${this._handleChange}>
                <div class="${e}-container">
                    ${c}
                    <div class="${e}-wrapper">
                        <input type="checkbox" .checked=${this.checked} ?disabled=${!!this.disabled} />
                        <div class="${e}-path"></div>
                        <div class="${e}-thumb" id="switch-tooltip"></div>
                        ${i}
                    </div>
                    ${o} ${s}
                </div>
            </label>
        `}_handleKeyDown(e){"Enter"!==e.code&&"Space"!==e.code||(e.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new r(s.Change,{})))}_handleChange(){this.checked=this._checkboxElement.checked,this.dispatchEvent(new r(s.Change,{}))}};d([(0,n.MZ)({type:Boolean,reflect:!0,converter:n.Bs}),p("design:type",Object)],h.prototype,"checked",void 0),d([(0,n.MZ)({type:Boolean,converter:n.Bs,attribute:"descriptive-text"}),p("design:type",Object)],h.prototype,"descriptiveText",void 0),d([(0,n.MZ)({type:String,reflect:!1}),p("design:type",Object)],h.prototype,"description",void 0),d([(0,n.MZ)({type:String,reflect:!1,attribute:"tooltip-text"}),p("design:type",Object)],h.prototype,"tooltipText",void 0),d([(0,n.MZ)({type:String,reflect:!1}),p("design:type",String),p("design:paramtypes",[String])],h.prototype,"value",null),d([(0,n.P)("input"),p("design:type",Object)],h.prototype,"_checkboxElement",void 0),h=l=d([(0,n.eV)({tagName:"switch",styles:e=>{const{root:t,child:i,is:o}=(0,n.zz)(e),s=(0,n.Jy)("color_primary_1"),a=(0,n.Jy)("color_primary_3"),r=(0,n.Jy)("color_secondary_3"),l=(0,n.Jy)("color_secondary_10"),d=(0,n.Jy)("color_secondary_8"),p=(0,n.Jy)("color_secondary_7");return[(0,c.v)(e),n.AH`${t}{display:flex;flex-direction:column;align-items:flex-start;}${i("container")}{display:flex;flex-direction:row;align-items:center;}${i("wrapper")}{display:inline-block;position:relative;}${i("description")}{margin-left:16px;font-size:16px;font-weight:medium;color:${a};}${i("description-on")}{margin-left:16px;font-size:16px;font-weight:medium;color:${a};}${i("description-off")}{margin-right:16px;font-size:16px;font-weight:medium;color:${d};}@media (hover:hover){${t}:hover input:not(:disabled) ~ ${i("thumb")}{background:${l};}}${t} input{width:100%;height:100%;left:0;top:0;margin:0;position:absolute;-webkit-appearance:none;-moz-appearance:none;cursor:pointer;-o-appearance:none;appearance:none;}${t} input:disabled{cursor:auto;}${i("path")}{width:33px;height:8px;margin:4px 0;background:${r};transition:background 0.2s;}${i("thumb")}{position:absolute;left:0;top:0;width:16px;height:16px;cursor:pointer;background:${a};transition:left 0.2s;}input:checked ~ ${i("thumb")}{left:calc(100% - 16px);transition:left 0.2s;}input:checked:enabled ~ ${i("path")}{background:${s};transition:background 0.2s;}${o("disabled")} ${i("description-off")}{color:${p};}${o("disabled")} ${i("description-on")}{color:${p};}${o("disabled")} ${i("description")}{color:${p};}input:disabled ~ ${i("thumb")}{cursor:auto;background:${d};}input:checked:disabled ~ ${i("path")}{cursor:auto;background:#cbbd33;}input:disabled ~ ${i("path")}{cursor:auto;background:${r};}${t} input:focus{outline:none;border:none;}${t} input:focus-visible{outline:none;border:none;}input:focus-visible ~ ${i("thumb")}{outline:none;border:2px solid ${s};}@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none){${t} input:focus{outline:none;border:1px solid ${a};}}}`]},version:"2.0.73"}),p("design:paramtypes",[])],h)},47745:(e,t,i)=>{var o;i.d(t,{C:()=>n}),function(e){e.Change="change"}(o||(o={}));class n extends CustomEvent{constructor(e,t){super(e,Object.assign({composed:!0,bubbles:!0,cancelable:!0},t))}}},56620:(e,t,i)=>{i.d(t,{v:()=>n});var o=i(5298);const n=e=>{const{child:t,is:i}=(0,o.zz)(e);return[o.AH`
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
        `]}},71965:(e,t,i)=>{i.d(t,{a:()=>s});var o=i(5298),n=function(e,t,i,o){var n,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(c<3?n(s):c>3?n(t,i,s):n(t,i))||s);return c>3&&s&&Object.defineProperty(t,i,s),s},c=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};class s extends o.OC{connectedCallback(){this.style.setProperty("display","none");const e=this._getChildImports();e.push({module:()=>i.e(5885).then(i.bind(i,25885)),elem:"FeedbackMessage"}),s.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}_getChildImports(){return[]}_renderLabel(e){return this.label?o.qy`<span class="${e}-label" title=${this.label}>${this.label}</span>`:o.s6}_renderFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"failure";return t||this.additionalFeedbackMessage?o.qy`
                <${s.FeedbackMessage.tag}
                    message-type="${this.additionalFeedbackType||i}"
                    class="${e}-feedback-message">
                    ${this.additionalFeedbackMessage||t||""}
                </${s.FeedbackMessage.tag}>
            `:o.s6}}n([(0,o.MZ)({type:String,reflect:!1}),c("design:type",Object)],s.prototype,"label",void 0),n([(0,o.MZ)({type:Boolean,converter:o.Bs,reflect:!1}),c("design:type",Object)],s.prototype,"disabled",void 0),n([(0,o.MZ)({type:String,attribute:"feedback-type"}),c("design:type",Object)],s.prototype,"additionalFeedbackType",void 0),n([(0,o.MZ)({type:String,attribute:"feedback-mess"}),c("design:type",Object)],s.prototype,"additionalFeedbackMessage",void 0)}}]);
//# sourceMappingURL=7379.9b7c0385.chunk.js.map