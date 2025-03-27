"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[2036,3519,6966],{5515:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=(0,i(80129).p)({name:"add",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.848 4.8h-1.697v6.352H4.8v1.697h6.351V19.2h1.697v-6.351H19.2v-1.697h-6.352z"/></svg>'})},45764:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=(0,i(80129).p)({name:"minus",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M4.8 12.848v-1.697h14.4v1.697z"/></svg>'})},72036:(e,t,i)=>{i.r(t),i.d(t,{Counter:()=>u,CounterEvent:()=>a,CounterSize:()=>n});var s=i(5298),h=i(5515),l=i(45764);var n;!function(e){e.Medium="medium",e.Small="small"}(n||(n={}));var a;!function(e){e.Change="change",e.Input="input"}(a||(a={}));var r,d=function(e,t,i,s){var h,l=arguments.length,n=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(h=e[a])&&(n=(l<3?h(n):l>3?h(t,i,n):h(t,i))||n);return l>3&&n&&Object.defineProperty(t,i,n),n},o=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=r=class extends s.OC{get value(){return this._value}set value(e){const t=this.value;this._setValue(e,t)&&this.requestUpdate("value",t)}constructor(){super(),this.upperBound=9999,this.lowerBound=0,this.stepSize=1,this.steps=[],this.strict=!1,this.unit="",this.disabled=!1,this.error=!1,this.size=n.Medium,this._value=0|this.lowerBound,this._decimalSize=0,this._handleMinus=this._handleMinus.bind(this),this._handlePlus=this._handlePlus.bind(this),this._handleInput=this._handleInput.bind(this),this._handleChange=this._handleChange.bind(this),this._handleNextStep=this._handleNextStep.bind(this),this._handlePrevStep=this._handlePrevStep.bind(this),this._handleTexFieldSizeChange=this._handleTexFieldSizeChange.bind(this)}connectedCallback(){this.style.setProperty("display","none");const e=[];e.push({module:()=>Promise.all([i.e(5029),i.e(3854)]).then(i.bind(i,63854)),elem:["Button"]}),e.push({module:()=>i.e(9693).then(i.bind(i,59693)),elem:["Icon"]}),e.push({module:()=>Promise.all([i.e(8804),i.e(188)]).then(i.bind(i,18804)),elem:["TextField"]}),r.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}render(){const[e,t]=(0,s.Yh)(this.tagName.toLowerCase(),{error:this.error,[this.size]:!0}),i=this._handleTexFieldSizeChange();return s.qy`
            <div class="${t}">
                <div class="${e}-button-wrapper">
                    <${r.Button.tag}
                        class="${e}-decrease"
                        compact="true"
                        type="secondary"
                        disabled="${this.disabled||(0===this.steps.length?this.value===this.lowerBound:this.value<=this.steps[0])}"
                        @click="${0===this.steps.length?this._handleMinus:this._handlePrevStep}"
                        full-height
                        full-width
                        data-testid="decrease">
                        <${r.Icon.tag}
                            slot="icon-slot"
                            icon=${l.default}></${r.Icon.tag}>
                    </${r.Button.tag}>
                </div>
                <${r.TextField.tag}
                    style="
                        --textfield-input-padding: ${""===this.unit?"10.5px 15px":"10.5px 6px"}; 
                        --textfield-root-width: ${this.width?this.width+"px":i}; 
                        --textfield-root-min-width: ${i};"
                    class="${e}-text"
                    force-unit
                    .value=${this._value}
                    disabled="${this.disabled}"
                    unit="${this.unit}"
                    @input="${this.strict?null:this._handleInput}"
                    @change="${this._handleChange}"
                    size="${this.size}"
                    data-testid="input">
                </${r.TextField.tag}>
                <div class="${e}-button-wrapper">
                    <${r.Button.tag}
                        class="${e}-increase"
                        compact="true"
                        type="secondary"
                        disabled="${this.disabled||(0===this.steps.length?this.value===this.upperBound:this.value>=this.steps[this.steps.length-1])}"
                        @click="${0===this.steps.length?this._handlePlus:this._handleNextStep}"
                        full-height
                        full-width
                        data-testid="increase">
                        <${r.Icon.tag}
                            slot="icon-slot"
                            icon=${h.default}></${r.Icon.tag}>
                    </${r.Button.tag}>
                </div>
            </div>
        `}firstUpdated(e){super.firstUpdated(e),0===this.steps.length||this.value||(this.value=this.steps[0]),this._decideDecimal()}_handleInput(e){isNaN(e.target.value)&&(this.error=!0)}_handleChange(e){e.preventDefault(),e.stopPropagation();const t=this.value;this._setValue(e.target.value,t)&&(this._dispatchEvent(a.Change),this.requestUpdate("value",t))}_setValue(e,t){const i=this._strictValue(e);if(i<=this.lowerBound)this._value=this.lowerBound,this.error=!1;else if(i>=this.upperBound)this._value=this.upperBound,this.error=!1;else{if(isNaN(i))return this.error=!0,!1;this._value=Number(i),this.error=!1}if(t!==this._value)return!0;if(t!==e){const e=this.shadowRoot.querySelector('[class*="-text"]');e.value="",e.value=t}return!1}_strictValue(e){if(this.strict&&0!==this.steps.length){return this.steps.reduce(((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t))}return this.strict&&0===this.steps.length?Math.round(e/this.stepSize)*this.stepSize:e}_handleNextStep(){const e=this.steps.indexOf(Number(this.value),0);if(e<this.steps.length-1&&-1!==e)this.value=this.steps[e+1];else{const e=this.steps.filter((e=>e>this.value));let t=1/0;e.forEach((e=>{e<t&&(t=e)})),this.value<=this.steps[this.steps.length-1]?this.value=t:this.value=this.steps[this.steps.length-1]}this._dispatchEvent(a.Change)}_handlePrevStep(){const e=this.steps.indexOf(Number(this.value),0);if(e>0&&-1!==e)this.value=this.steps[e-1];else{const e=this.steps.filter((e=>e<this.value));let t=0;e.forEach((e=>{e>t&&(t=e)})),this.value>=this.steps[0]?this.value=t:this.value=this.steps[0]}this._dispatchEvent(a.Change)}_handleMinus(){this.lowerBound<this.value?this.value=Number((this.value-this.stepSize).toFixed(this._decimalSize)):this.value=this.lowerBound,this._dispatchEvent(a.Change)}_handlePlus(){this.upperBound>this.value?this.value=Number((this.value+this.stepSize).toFixed(this._decimalSize)):this.value=this.upperBound,this._dispatchEvent(a.Change)}_decideDecimal(){this.stepSize>=1&&(this._decimalSize=1),this.stepSize<=.1&&this.stepSize>=.01?this._decimalSize=2:this._decimalSize=3}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(e,{detail:{option:this,value:this._value},bubbles:!0,cancelable:!0}))}_handleTexFieldSizeChange(){return""===this.unit&&this.size===n.Medium?"68px":""!==this.unit&&this.size===n.Medium?"85px":""===this.unit&&this.size===n.Small?"67px":""!==this.unit&&this.size===n.Small?"84px":""}};d([(0,s.MZ)({type:Number,reflect:!1,attribute:"upper-bound"}),o("design:type",Object)],u.prototype,"upperBound",void 0),d([(0,s.MZ)({type:Number,reflect:!1,attribute:"lower-bound"}),o("design:type",Object)],u.prototype,"lowerBound",void 0),d([(0,s.MZ)({type:Number,reflect:!1,attribute:"step-size"}),o("design:type",Object)],u.prototype,"stepSize",void 0),d([(0,s.MZ)({reflect:!1,attribute:!1,type:Array()}),o("design:type",Array)],u.prototype,"steps",void 0),d([(0,s.MZ)({type:Boolean,converter:s.Bs,reflect:!1}),o("design:type",Object)],u.prototype,"strict",void 0),d([(0,s.MZ)({type:String,reflect:!1}),o("design:type",Object)],u.prototype,"unit",void 0),d([(0,s.MZ)({type:Boolean,converter:s.Bs}),o("design:type",Object)],u.prototype,"disabled",void 0),d([(0,s.MZ)({type:Boolean,converter:s.Bs}),o("design:type",Object)],u.prototype,"error",void 0),d([(0,s.MZ)({type:n,reflect:!0}),o("design:type",Object)],u.prototype,"size",void 0),d([(0,s.MZ)({type:Number}),o("design:type",Object)],u.prototype,"width",void 0),d([(0,s.MZ)({type:Number,reflect:!0}),o("design:type",Number),o("design:paramtypes",[Number])],u.prototype,"value",null),u=r=d([(0,s.eV)({tagName:"counter",styles:e=>{const{root:t,child:i,is:h}=(0,s.zz)(e),l=(0,s.Jy)("color_primary_1");return[s.AH`
            ${t} {
                display: flex;
                flex-direction: row;
            }

            ${i("text")} {
                --textfield-input-min-width: 30px;
            }

            ${i("wrapper")} {
                display: inline-block;
                position: relative;
            }

            ${h("error")} {
                --textfield-input-border: 1px solid ${(0,s.Jy)("color_traffic_light_1")};
                --textfield-input-border-focused: 1px solid ${(0,s.Jy)("color_traffic_light_1")};
            }

            ${i("description")} {
                margin-left: 16px;
                font-size: 14px;
                color: ${(0,s.Jy)("color_secondary_7")};
            }

            ${i("button-wrapper")} {
                user-select: none;
            }

            ${h("medium")} ${i("button-wrapper")} {
                height: 40px;
                width: 40px;
            }

            ${h("small")} ${i("button-wrapper")} {
                height: 32px;
                width: 32px;
            }

            @media (hover: hover) {
                ${t}:hover input:not(:disabled) ~ ${i("thumb")} {
                    outline: ${l} solid 6px;
                }
            }
        `]},version:"2.0.142"}),o("design:paramtypes",[])],u)},80129:(e,t,i)=>{i.d(t,{m:()=>a,p:()=>n});var s=i(93656);let h;const l=()=>{if(!h){let e=window.studio;e||(e=window.studio={});let t=e.sui;t||(t=e.sui={});const i=`icons${s.r.split(".")[0]||s.r}`;h=h||t[i],h||(h=t[i]={})}return h},n=e=>{const t=l();return t[e.name]||(t[e.name]=e.data),e.name},a=e=>l()[e]},93656:(e,t,i)=>{i.d(t,{r:()=>s});const s="2.0.90"}}]);
//# sourceMappingURL=2036.2c0f0d06.chunk.js.map