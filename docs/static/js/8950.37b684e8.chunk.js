"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[8950],{38950:(t,e,a)=>{a.r(e),a.d(e,{ComposablePlotEngine:()=>l});var r=a(5298);var o,i=function(t,e,a,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(i<3?o(s):i>3?o(e,a,s):o(e,a))||s);return i>3&&s&&Object.defineProperty(e,a,s),s},s=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=o=class extends r.OC{constructor(){super(...arguments),this._parser=t=>{if(this.config){const{heading:e,watermark:a,main:i,scale:s}=this.config,l=Object.fromEntries(s.map((t=>{let{name:e,scaleType:a,domain:r,symmetric:o}=t;const s=!!i[0].serie&&i[0].serie.some((t=>t.scaleX===e||t.scaleY===e)),l={};return!a&&s||(l.scaleType=null!==a&&void 0!==a?a:"linear"),!r&&s||(l.domain=null!==r&&void 0!==r?r:[0,1]),l.symmetricDomain=!!o,l.padding={type:"pixel",start:5,end:5},[e,l]})));return r.qy`
                <${o.ComposablePlot.tag}
                    class="${t}-plot"
                    heading="${e}"
                    watermark="${a}"
                    .scaleSettings=${l}
                    .backgroundColor=${i[0].backgroundColor}
                    .backgroundOpacity=${i[0].backgroundOpacity}
                >
                    ${this._axis(t)}
                    ${this._grid(t)}
                    ${this._data(t)}
                </${o.ComposablePlot.tag}>
            `}return r.s6},this._axis=t=>{const{config:e}=this,a=null===e||void 0===e?void 0:e.main;return e&&a?e.scale.map((e=>{let{name:i,orientation:s}=e;const l=a[0].axis.find((t=>t.scaleName===i));if(l){const{slot:e,scaleX:a,scaleY:n}="vertical"===s?{slot:"axis-y",scaleY:i}:{slot:"axis-x",scaleX:i};return r.qy`
                        <${o.Axis.tag}
                            class="${t}-axis"
                            slot=${l.flip?e+"2":e}
                            label=${l.label}
                            orientation="${s}"
                            .axisColor="${l.axisColor}"
                            .labelColor="${l.labelColor}"
                            .tickColor="${l.tickColor||l.axisColor}"
                            scale-x=${a}
                            scale-y=${n}
                            flip=${!!l.flip}
                        ></${o.Axis.tag}>
                    `}return r.s6})):r.s6},this._data=t=>{var e;const a=null===(e=this.config)||void 0===e?void 0:e.main;if(a&&Array.isArray(a)&&a[0].serie){const e=a[0].serie.filter((t=>"bar"===t.type)).length;let i=0;return r.qy`${a[0].serie.map((a=>{let{scaleX:s,scaleY:l,type:n,color:c,dataX:d,dataY:u,colorBy:g,groupBy:f}=a;const $=this._getPlotData(d,u);if($){let a;g?a=this._getData(g):f&&(a=this._getData(f));const y=this._formatPlotData(d,u,$,f?a:void 0);if("line"===n){return(Array.isArray(y[0])?y:[y]).map(((e,i)=>{var n;const d="object"===typeof c&&a?c[null!==(n=e[0].group)&&void 0!==n?n:i]:c;return r.qy`
                                <${o.SVGLine.tag}
                                    class="${t}-line"
                                    .scaleX=${s}
                                    .scaleY=${l}
                                    .color=${(0,r.JR)(d)}
                                    .data=${y}
                                ></${o.SVGLine.tag}>`}))}if("scatter"===n)return r.qy`
                            <${o.SVGScatter.tag}
                                class="${t}-scatter"
                                .scaleX=${s}
                                .scaleY=${l}
                                .defaultStyle=${t=>{let{index:e}=t;return{fillColor:"object"===typeof c&&a?c[a[e]+""]:(0,r.JR)(c)}}}
                                .data=${y}
                            ></${o.SVGScatter.tag}>`;if("line-scatter"===n){return(Array.isArray(y[0])?y:[y]).map(((e,i)=>{var n;const d="object"===typeof c&&a?c[null!==(n=e[0].group)&&void 0!==n?n:i]:c;return r.qy`
                                <${o.SVGLine.tag}
                                    class="${t}-line"
                                    .scaleX=${s}
                                    .scaleY=${l}
                                    .color=${(0,r.JR)(d)}
                                    .data=${e}
                                ></${o.SVGLine.tag}>
                                <${o.SVGScatter.tag}
                                    class="${t}-scatter"
                                    .scaleX=${s}
                                    .scaleY=${l}
                                    .defaultStyle=${{fillColor:(0,r.JR)(d)}}
                                    .data=${e}
                                ></${o.SVGScatter.tag}>
                            `}))}if("bar"===n)return r.qy`
                            <${o.SVGBar.tag}
                                class="${t}-bar"
                                .scaleX=${s}
                                .scaleY=${l}
                                .defaultStyle=${t=>{let{index:e}=t;return{fillColor:g&&c?c[a[e]]:(0,r.JR)(c)}}}
                                .data=${y}
                                .group=${{index:i++,totalCount:e,spacing:2,offsetY:void 0}}
                                .vertical=${!1}
                            ></${o.SVGBar.tag}>`}return r.s6}))}`}return r.s6},this._grid=t=>{var e;const a=null===(e=this.config)||void 0===e?void 0:e.main;if(a&&a[0]){const{mode:e,origin:i,color:s,originColor:l,densityX:n,densityY:c}=a[0].grid||{};return e?r.qy`
                    <${o.SVGGrid.tag}
                        class="${t}-grid"
                        .mode=${e}
                        .origin=${(0,r.JR)(i)}
                        .color=${(0,r.JR)(s)}
                        .originColor=${(0,r.JR)(l)}
                        .densityX=${(0,r.JR)(n)}
                        .densityY=${(0,r.JR)(c)}></${o.SVGGrid.tag}>
                `:r.s6}return r.s6}}connectedCallback(){o.dynSubRegister([{module:()=>a.e(5276).then(a.bind(a,75276)),elem:["ComposablePlot","Axis","SVGGrid","SVGLine","SVGScatter","SVGBar"]}],(()=>{super.connectedCallback()}))}render(){const[t,e]=(0,r.Yh)(this.tagName.toLowerCase(),{});return r.qy` <div class="${e}">${this._parser(t)}</div>`}_getData(t){if(t){if(this.data&&this.data[t])return this.data[t];if(this.config&&this.config.data&&this.config[t])return this.config.data[t]}return[]}_getPlotData(t,e){return t&&e?{[t]:this._getData(t),[e]:this._getData(e)}:{}}_formatPlotData(t,e,a,r){if(Array.isArray(a[t])&&Array.isArray(a[e])){const o=a[t].map(((t,o)=>({x:t,y:a[e][o],group:r?r[o]:null})));return r?this._groupBy(o):o}if(Array.isArray(a)&&a.every((a=>"object"===typeof a&&null!=a[t]&&null!=a[e]))){const o=a.map(((a,o)=>{let{[t]:i,[e]:s}=a;return{x:i,y:s,group:r?r[o]:null}}));return r?this._groupBy(o):o}throw new Error("Invalid data format")}_groupBy(t){const e=new Map;return t.forEach((t=>{let{x:a,y:r,group:o}=t;null!=o&&(e.has(o)||e.set(o,[]),e.get(o).push({x:a,y:r,group:o}))})),Array.from(e.values())}};i([(0,r.MZ)({type:Object,attribute:"config",reflect:!0,converter:{fromAttribute:t=>t&&JSON.parse(t)||{},toAttribute:t=>JSON.stringify(t)}}),s("design:type",Object)],l.prototype,"config",void 0),i([(0,r.MZ)(),s("design:type",Object)],l.prototype,"data",void 0),l=o=i([(0,r.eV)({tagName:"composable-plot-engine",styles:t=>{const{root:e}=(0,r.zz)(t);return[r.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}:host{display:block;width:100%;height:100%;}${e}{display:block;width:100%;height:100%;}`]},version:"0.0.0"})],l)}}]);
//# sourceMappingURL=8950.37b684e8.chunk.js.map