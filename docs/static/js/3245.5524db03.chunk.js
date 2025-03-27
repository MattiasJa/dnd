"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[3245],{73245:(t,e,i)=>{i.r(e),i.d(e,{PlotSettings:()=>h});var s=i(5298);const n=(t,e,i)=>s.qy`
        <div class="settings-entry">
            <div class="settings-title">
                ${t}
                <div class="settings-content" data-testid=${e}>${i}</div>
            </div>
        </div>
    `,o=(t,e)=>s.qy`
        <${t} 
            .value="${e.value}" 
            .upperBound="${e.steps[e.steps.length-1]}"
            .lowerBound="${e.steps[0]}"
            size="small"
            .steps="${e.steps}"
            @change="${t=>{e.onChange(t)}}">
        </${t}>
    `;function a(t){return null!==t&&"object"===typeof t&&!Array.isArray(t)}function l(t,e){const i=Object.assign({},t);return Object.keys(e).forEach((s=>{const n=t[s],o=e[s];a(n)&&a(o)?i[s]=l(n,o):i[s]=o})),i}var d,c=function(t,e,i,s){var n,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},r=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};const p=[8,10,12,14,16,18,24,36,48,72],g=[1,1.5,2,2.5,3,4,6,8,10];let h=d=class extends s.OC{constructor(){super(...arguments),this.dispatchSettingsChange=t=>e=>{const i=t(e.detail.option.value),s=l(this.settings,i),n=new CustomEvent("settings-change",{bubbles:!0,composed:!0,detail:{change:i,newSettings:s}});this.dispatchEvent(n)}}connectedCallback(){this.style.setProperty("display","none");const t=[];t.push({module:()=>i.e(2036).then(i.bind(i,72036)),elem:["Counter"]}),t.push({module:()=>i.e(7695).then(i.bind(i,87695)),elem:["Divider"]}),d.dynSubRegister(t,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}render(){var t,e,i,a,l,c,r,h;if(this.settings)return s.qy`
            <div>
            <h1 style="padding-left: 8px; padding-top: 8px; margin: 0px">Appearance</h1>
            <${d.Divider.tag}>               
            </${d.Divider.tag}>
            <div class='settings-section'>
            ${(null===(e=null===(t=this.hideSettings)||void 0===t?void 0:t.axis)||void 0===e?void 0:e.title)?null:n("Axis title size:","axis-title-size-entry",o(d.Counter.tag,{value:this.settings.axis.x.titleFontSize,steps:p,onChange:this.dispatchSettingsChange((t=>({axis:{x:{titleFontSize:t},y:{titleFontSize:t}}})))}))}
            ${(null===(a=null===(i=this.hideSettings)||void 0===i?void 0:i.axis)||void 0===a?void 0:a.tick)?null:n("Axis value size:","axis-value-size-entry",o(d.Counter.tag,{value:this.settings.axis.x.tickFontSize,steps:p,onChange:this.dispatchSettingsChange((t=>({axis:{x:{tickFontSize:t},y:{tickFontSize:t}}})))}))}
            <div style="padding-bottom: 8px">
            <${d.Divider.tag}>               
            </${d.Divider.tag}>
            </div>
            ${(null===(c=null===(l=this.hideSettings)||void 0===l?void 0:l.traceSize)||void 0===c?void 0:c.line)?null:n("Line size:","trace-line-size-entry",o(d.Counter.tag,{value:this.settings.traceSize.line,steps:g,onChange:this.dispatchSettingsChange((t=>({traceSize:{line:t}})))}))}
            ${(null===(h=null===(r=this.hideSettings)||void 0===r?void 0:r.traceSize)||void 0===h?void 0:h.point)?null:n("Point size:","trace-point-size-entry",o(d.Counter.tag,{value:this.settings.traceSize.point,steps:g,onChange:this.dispatchSettingsChange((t=>({traceSize:{point:t}})))}))}
            </div>
            </div>
        `}};c([(0,s.MZ)(),r("design:type",Object)],h.prototype,"settings",void 0),c([(0,s.MZ)(),r("design:type",Object)],h.prototype,"hideSettings",void 0),h=d=c([(0,s.eV)({tagName:"plot-settings",version:"0.0.164",styles:t=>[s.iF,s.AH`:host,:host::before,:host::after,:host *,:host *::before .settings-entry{display:flex;flex-direction:column;padding:8px 8px;}.settings-title{font-size:14px;color:${(0,s.Jy)("color_secondary_7")};font-family:Roboto;padding-bottom:7px;}.settings-content{color:initial;padding-top:7px;}.settings-section{padding:8px;}`]})],h)}}]);
//# sourceMappingURL=3245.5524db03.chunk.js.map