"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[5926],{35926:(t,e,o)=>{o.r(e),o.d(e,{Progress:()=>n,ProgressSize:()=>s,ProgressSlot:()=>i});var r=o(5298);var i,s;!function(t){t.ACTION_SLOT="action-slot"}(i||(i={})),function(t){t.SMALL="small",t.MEDIUM="medium",t.LARGE="large"}(s||(s={}));var l=function(t,e,o,r){var i,s=arguments.length,l=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(s<3?i(l):s>3?i(e,o,l):i(e,o))||l);return s>3&&l&&Object.defineProperty(e,o,l),l},a=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let n=class extends r.OC{constructor(){super(...arguments),this.value=0,this.min=0,this.max=1,this.unit="%",this.horizontal=!1,this.size=s.SMALL,this.radius=45,this.duration=0,this.onGray=!1,this._renderUnit=t=>this.unit?r.JW`
                  <text dominant-baseline="middle" text-anchor="middle" x="50" y="65">
                      <tspan class="${t}-unit">${this.unit}</tspan>
                  </text>
              `:null,this._getLabel=()=>this.label?"function"===typeof this.label?this.label():this.label:""+Math.round(100*this.value)}update(t){super.update(t);void 0!==t.get("duration")&&(clearTimeout(this._counter),this.duration&&this._percentageCounter(this.duration/100))}render(){const[t,e]=(0,r.Yh)(this.tagName.toLowerCase(),{}),{min:o,max:s,radius:l,value:a}=this,n=a/(s-o),c=2*Math.PI*l,h=`${n*c} ${c}`,p=this._getLabel(),d=this.horizontal?r.JW`

                  <rect class="${t}-full" x="0" width="100%" y="0" height="100%" stroke-width='0'> </rect>
                  <rect class="${t}-bar" x="0" width="${100*n}%" y="0" height="100%" stroke-width='0'> </rect>
              `:r.JW`
                  <circle
                      class="${t}-full"
                      cx="50"
                      cy="50"
                      fill-opacity="0"
                      r="${this.radius}"
                      stroke-width="4"
                  ></circle>
                  <circle
                      class="${t}-bar"
                      cx="50"
                      cy="50"
                      fill-opacity="0"
                      r="${this.radius}"
                      stroke-dasharray=${h}
                      stroke-width="5"
                      transform="rotate(-90 50 50)"
                  ></circle>

                  <text dominant-baseline="middle" text-anchor="middle" x="50" y="50">
                      <tspan class="${t}-value">${p}</tspan>
                  </text>
                  ${this._renderUnit(t)}
              `;return r.qy`
            <svg class="${e}" viewBox="0 0 100 100" preserveAspectRatio="none">${d}</svg>${this.horizontal?r.qy`<span class="${t}-horizontal-value">${p} ${this.unit}</span>`:null}
            ${this.horizontal?r.qy` <slot name="${i.ACTION_SLOT}"></slot>`:null}
        `}_percentageCounter(t){this._counter=setTimeout((()=>{this.value<1?(this.value+=.01,this._percentageCounter(this.duration/100)):clearTimeout(this._counter)}),t)}};l([(0,r.MZ)({type:Number,reflect:!0}),a("design:type",Object)],n.prototype,"value",void 0),l([(0,r.MZ)({type:Number}),a("design:type",Object)],n.prototype,"min",void 0),l([(0,r.MZ)({type:Number}),a("design:type",Object)],n.prototype,"max",void 0),l([(0,r.MZ)({type:String}),a("design:type",Object)],n.prototype,"label",void 0),l([(0,r.MZ)({type:String,reflect:!0}),a("design:type",Object)],n.prototype,"unit",void 0),l([(0,r.MZ)({type:Boolean,reflect:!0,converter:r.Bs}),a("design:type",Object)],n.prototype,"horizontal",void 0),l([(0,r.MZ)({type:s,reflect:!0}),a("design:type",Object)],n.prototype,"size",void 0),l([(0,r.MZ)({type:Number}),a("design:type",Object)],n.prototype,"radius",void 0),l([(0,r.MZ)({type:Number}),a("design:type",Object)],n.prototype,"duration",void 0),l([(0,r.MZ)({type:Boolean,converter:r.Bs,attribute:"on-gray",reflect:!0}),a("design:type",Object)],n.prototype,"onGray",void 0),n=l([(0,r.eV)({tagName:"progress",styles:t=>{const{root:e,child:o}=(0,r.zz)(t);return[r.iF,r.AH`:host{--progress-width:158px;--progress-height:158px;--progress-text-color:black;display:inline-block;width:var(--progress-width);height:var(--progress-height);}:host([horizontal]){--progress-height:4px;display:flex;}:host([horizontal][size='small']){--progress-width:200px;}:host([horizontal][size='medium']){--progress-width:300px;}:host([horizontal][size='large']){--progress-width:400px;}:host([horizontal]) ${o("full")}{stroke:#c6c6c6;fill:#c6c6c6;}:host([horizontal]) ${o("bar")}{stroke:#3c3c3c;fill:#3c3c3c;}:host([onGray]){--progress-text-color:white;}${e}{display:block;width:100%;height:100%;}${o("full")}{stroke:${(0,r.Jy)("color_secondary_3")};fill:${(0,r.Jy)("color_secondary_3")};}:host([onGray]) ${o("full")}{stroke:${(0,r.Jy)("color_secondary_9")};fill:${(0,r.Jy)("color_secondary_9")};}${o("bar")}{stroke:${(0,r.Jy)("color_primary_1")};fill:${(0,r.Jy)("color_primary_1")};transition:stroke-dasharray 300ms linear;}${o("horizontal-value")}{display:flex;font-size:14px;max-width:67px;min-width:37.5px;align-items:center;justify-content:center;margin-left:8px;color:#6f6f6f;}::slotted([slot='action-slot']){display:flex;font-size:20px;align-items:center;}${o("value")}{fill:var(--progress-text-color);font:normal normal bold 22px/42px Roboto;}${o("unit")}{fill:var(--progress-text-color);font:normal normal normal 11px/24px Roboto;}`]},version:"2.0.45"})],n)}}]);
//# sourceMappingURL=5926.d2b697c6.chunk.js.map