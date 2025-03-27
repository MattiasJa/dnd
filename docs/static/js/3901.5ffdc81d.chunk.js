"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[2808,3901],{3901:(e,t,o)=>{o.r(t),o.d(t,{Toggle:()=>u,ToggleEvent:()=>d,ToggleEventType:()=>r,ToggleSlot:()=>n,ToggleValue:()=>a});var i=o(71965),s=o(5298);var l=o(56620);var n;!function(e){e.DEFAULT="unused",e.LEFT_TOGGLE="left-toggle",e.RIGHT_TOGGLE="right-toggle"}(n||(n={}));var r,a,h=o(47745);!function(e){e.Change="change"}(r||(r={}));class d extends h.C{}!function(e){e.Left="left",e.Right="right",e.None="none"}(a||(a={}));var c,g=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},p=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=c=class extends i.a{get right(){return this._right}set right(e){const t=this._value;(e&&"right"!==this._value||!e&&"right"===this._value)&&(this._right=e,this._left=!1,this._value=e?"right":"none",this.requestUpdate("value",t))}get left(){return this._left}set left(e){const t=this._value;(e&&"left"!==this._value||!e&&"left"===this._value)&&(this._left=e,this._right=!1,this._value=e?"left":"none",this.requestUpdate("value",t))}get value(){return this._value}set value(e){const t=this._value;t!==e&&(this._value=e,this._value===a.Left?(this._left=!0,this._right=!1):this._value===a.Right?(this._left=!1,this._right=!0):this._value===a.None&&(this._left=!1,this._right=!1),this.requestUpdate("value",t))}constructor(){super(),this.onBlack=!1,this.numToggles=0,this.tooltips=!1,this.tooltipTexts=[],this._value="none",this._left=!1,this._right=!1,this._slottedLabel=new Map,this._updateTooltip=e=>{var t;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#tooltip");o&&e(o)},this._handleFocusin=()=>{this.addEventListener("focusout",this._handleFocusout),this.addEventListener("keydown",this._handleKeyDown)},this._handleFocusout=()=>{this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("focusout",this._handleFocusout)},this._handleKeyDown=this._handleKeyDown.bind(this),this.addEventListener("focusin",this._handleFocusin)}focus(e){this.shadowRoot.querySelector(`[type="${"none"!==this.value?"tertiary-on-black":"tertiary"}"]`).focus(e)}blur(){this.shadowRoot.activeElement&&this.shadowRoot.activeElement.blur()}_getChildImports(){const e=[];return e.push({module:()=>Promise.all([o.e(5029),o.e(3854)]).then(o.bind(o,63854)),elem:["Button"]}),e.push({module:()=>o.e(1734).then(o.bind(o,51734)),elem:["TooltipService"]}),e}render(){const[e,t]=(0,s.Yh)(this.tagName.toLowerCase(),{right:"right"===this.value,left:"left"===this.value,onBlack:this.onBlack,disabled:!!this.disabled,required:!!this.required}),o=this.label?s.qy`<span class="${e}-label">${this.label}</span>`:s.qy``,i=this.numToggles>0?Array.from(new Array(this.numToggles),((e,t)=>t+1)).map(((t,o)=>{const i=o+1;return this._renderToggle(e,`${i}`,`toggle-slot-${i}`)})):s.qy`
                      ${this._renderToggle(e,"left",n.LEFT_TOGGLE)}
                      ${this._renderToggle(e,"right",n.RIGHT_TOGGLE)}
                  `,l=this.numToggles>0&&this.tooltips?s.qy`
                    <${c.TooltipService.tag} id='tooltip' trigger-show='none'
                                                  trigger-hide='none'></${c.TooltipService.tag}>`:null;return s.qy`
            <label class="${t}">
                ${l} ${o}
                <div class="${e}-wrapper">${i}</div>
            </label>
        `}_selectToggle(e,t){e.preventDefault(),"right"===t&&this._toggleable(this._right)?(this._right=!this._right,this._left=!1,this._onChange(this._right?a.Right:a.None)):"left"===t&&this._toggleable(this._left)?(this._left=!this._left,this._right=!1,this._onChange(this._left?a.Left:a.None)):this.numToggles&&this._toggleable(this.value===t)&&this._onChange(this.value===t?a.None:t)}_toggleable(e){return!((this.required||this.mandatory)&&e)}_renderToggle(e,t,o){var i;return s.qy`
            <${c.Button.tag}
                class="${e}-${t}"
                id="toggle-${t}"
                data-testid="toggle-${t}"
                button-size="small"
                type="${this.value===t?"tertiary-on-black":"tertiary"}"
                disabled=${!!this.disabled||(null!==(i=this.disabledToggle)&&void 0!==i?i:[]).some((e=>String(e)===t))}
                @click="${e=>this._selectToggle(e,t)}"
                @mouseenter=${e=>{var o;const i=t-1;this.tooltips&&(null===(o=this.tooltipTexts)||void 0===o?void 0:o[i])&&this._updateTooltip((t=>{t.object=e.target,t.innerHTML=this.tooltipTexts[i],t.show=!0}))}}
                @mouseleave=${()=>this._updateTooltip((e=>{e.show=!1}))}
                tabindex=${(0,s.JR)(this.value===t||"none"===this.value&&("1"===t||"left"===t)?void 0:-1)}
                style='--button-width: ${this._slottedLabel.get(t)>0?"auto":"36px"};'
            >
                <slot slot="icon-slot" name="${o}"></slot>
                <slot name="${o}-label" @slotchange=${e=>{this._slottedLabel.set(t,e.target.assignedElements().length),this.requestUpdate()}}></slot>
            </${c.Button.tag}>
        `}_handleKeyDown(e){const t=this.shadowRoot.activeElement;if((null===t||void 0===t?void 0:t.parentElement)&&("ArrowLeft"===e.code||"ArrowRight"===e.code)){let o;if(e.preventDefault(),"ArrowLeft"===e.code){o=t.previousElementSibling||t.parentElement.lastElementChild}else if("ArrowRight"===e.code){o=t.nextElementSibling||t.parentElement.firstElementChild}o.removeAttribute("tabindex"),o.focus(),t.setAttribute("tabindex","-1")}}_onChange(e){this.value=e,this.dispatchEvent(new d(r.Change,{detail:{value:e}}))}};g([(0,s.MZ)({type:Boolean,converter:s.Bs}),p("design:type",Object),p("design:paramtypes",[Object])],u.prototype,"right",null),g([(0,s.MZ)({type:Boolean,converter:s.Bs}),p("design:type",Object),p("design:paramtypes",[Object])],u.prototype,"left",null),g([(0,s.MZ)({type:Boolean,converter:s.Bs}),p("design:type",Object)],u.prototype,"required",void 0),g([(0,s.MZ)({type:Boolean,converter:s.Bs}),p("design:type",Object)],u.prototype,"mandatory",void 0),g([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"on-black"}),p("design:type",Object)],u.prototype,"onBlack",void 0),g([(0,s.MZ)({type:String,attribute:"value",reflect:!0}),p("design:type",Object),p("design:paramtypes",[Object])],u.prototype,"value",null),g([(0,s.MZ)({type:Number,attribute:"num-toggles",reflect:!0}),p("design:type",Object)],u.prototype,"numToggles",void 0),g([(0,s.MZ)({type:Boolean,converter:s.Bs,reflect:!1}),p("design:type",Object)],u.prototype,"tooltips",void 0),g([(0,s.MZ)({type:Array,reflect:!1,attribute:!1}),p("design:type",Array)],u.prototype,"tooltipTexts",void 0),g([(0,s.MZ)({type:Array,reflect:!1,attribute:!1}),p("design:type",Array)],u.prototype,"disabledToggle",void 0),u=c=g([(0,s.eV)({tagName:"toggle",styles:e=>{const{root:t,child:o,is:i}=(0,s.zz)(e);return[(0,l.v)(e),s.AH`
            ${t} {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                background: transparent;
                user-select: none;
                --button-padding: 7px;
                --button-height: 32px;
            }

            ${o("wrapper")} {
                display: flex;
                flex-direction: row;
            }

            ${i("onBlack")} ${o("wrapper")} {
                border: 1px solid #dadada;
            }

            ${i("disabled")} [type='tertiary-on-black'] {
                background: #c6c6c6;
                --button-text-color: white;
            }

            ${i("disabled")} [type='tertiary'] {
                background: #0000000d;
            }

            ${i("disabled","onBlack")} [type='tertiary'] {
                background: #f5f5f5;
            }

            ${i("onBlack")} [type='tertiary'] {
                --button-hover-color: #e5e5e5;
                --button-color: #f5f5f5;
            }

            [type='tertiary-on-black'] {
                background: #3c3c3c;
            }

            [type='tertiary'] {
                --button-text-color: initial;
                --button-hover-text-color: initial;
                --button-hover-color: #00000026;
                --button-color: #0000000d;
            }

            [type]:not([type='']):not(:first-child) {
                border-left: 1px solid #00000033;
            }

            ::slotted([slot*='-label']) {
                padding-left: 7px;
                padding-right: 7px;
            }
        `]},version:"2.0.106"}),p("design:paramtypes",[])],u)},47745:(e,t,o)=>{var i;o.d(t,{C:()=>s}),function(e){e.Change="change"}(i||(i={}));class s extends CustomEvent{constructor(e,t){super(e,Object.assign({composed:!0,bubbles:!0,cancelable:!0},t))}}},56620:(e,t,o)=>{o.d(t,{v:()=>s});var i=o(5298);const s=e=>{const{child:t,is:o}=(0,i.zz)(e);return[i.AH`
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
                color: ${(0,i.Jy)("color_secondary_8")};
            }

            ${o("required")} ${t("label")}::after {
                content: ' *';
            }

            ${t("feedback-message")} {
                margin-top: 3px;
            }
        `]}},71965:(e,t,o)=>{o.d(t,{a:()=>n});var i=o(5298),s=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},l=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};class n extends i.OC{connectedCallback(){this.style.setProperty("display","none");const e=this._getChildImports();e.push({module:()=>o.e(5885).then(o.bind(o,25885)),elem:"FeedbackMessage"}),n.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}_getChildImports(){return[]}_renderLabel(e){return this.label?i.qy`<span class="${e}-label" title=${this.label}>${this.label}</span>`:i.s6}_renderFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"failure";return t||this.additionalFeedbackMessage?i.qy`
                <${n.FeedbackMessage.tag}
                    message-type="${this.additionalFeedbackType||o}"
                    class="${e}-feedback-message">
                    ${this.additionalFeedbackMessage||t||""}
                </${n.FeedbackMessage.tag}>
            `:i.s6}}s([(0,i.MZ)({type:String,reflect:!1}),l("design:type",Object)],n.prototype,"label",void 0),s([(0,i.MZ)({type:Boolean,converter:i.Bs,reflect:!1}),l("design:type",Object)],n.prototype,"disabled",void 0),s([(0,i.MZ)({type:String,attribute:"feedback-type"}),l("design:type",Object)],n.prototype,"additionalFeedbackType",void 0),s([(0,i.MZ)({type:String,attribute:"feedback-mess"}),l("design:type",Object)],n.prototype,"additionalFeedbackMessage",void 0)}}]);
//# sourceMappingURL=3901.5ffdc81d.chunk.js.map