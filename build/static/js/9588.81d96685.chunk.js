"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[1194,5023,6605,6859,7097,9588,9959],{39588:(e,t,l)=>{l.r(t),l.d(t,{PlotLegend:()=>f});var i=l(5298);const n=i.AH;var o=l(40926),r=l(71149),a=l(60669),s=l(71759),d=l(52739),c=l(87167);function h(e,t,l){const i=e.filter((e=>""!==e));if(!i.length)return"";let n=i[0];for(let o=1;o<i.length;o++)for(;!t(i[o],n);)if(n=l(n),!n)return"";return n}const g=e=>h(e,((e,t)=>e.startsWith(t)),(e=>e.slice(0,-1))),p=e=>h(e,((e,t)=>e.endsWith(t)),(e=>e.slice(1)));var u,m=function(e,t,l,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,l):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,l,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,l,r):n(t,l))||r);return o>3&&r&&Object.defineProperty(t,l,r),r},v=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=u=class extends i.OC{constructor(){var e;super(...arguments),e=this,this.legendData=[],this.selection=[],this.hiddenIds=[],this.togglableVisibility=!0,this.hoveredElement=void 0,this.fixedWidth=!1,this._cache={size:"xsmall",itemHeight:24,font:12,spacings:55,buttonSize:"extra-small",group:[]},this._closeContextMenu=()=>this._openGroup=void 0,this._renderIcon=(e,t)=>i.qy`
        <${u.Icon.tag}
            class=${e}
            icon=${t}
            slot="icon-slot"
        ></${u.Icon.tag}>
    `,this._getRectangleSVG=function(t){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:"4",y:""+e._cache.itemHeight/2,width:"6",height:6};return i.JW`<rect class="label-icon" fill="${t}" x=${l.x} y=${l.y} transform="translate(0, -${l.height/2})" width=${l.width} height=${l.height} />`}}connectedCallback(){this.style.setProperty("display","none"),u.dynSubRegister([{module:()=>l.e(3051).then(l.bind(l,93051)),elem:["Scrollbar"]},{module:()=>Promise.all([l.e(5029),l.e(3854)]).then(l.bind(l,63854)),elem:["Button"]},{module:()=>l.e(9693).then(l.bind(l,59693)),elem:["Icon"]},{module:()=>Promise.all([l.e(7135),l.e(3596),l.e(7303)]).then(l.bind(l,63596)),elem:["ContextMenu","ContextMenuItem"]}],(()=>{super.connectedCallback(),this.style.removeProperty("display")})),this._updateSize()}exportSVG(){var e,t;let l=0;const{font:n,itemHeight:o}=this._cache,r=o,a=Number(getComputedStyle(this).getPropertyValue("--legend-width").split("ch")[0]),s=null!==(t=null===(e=this.shadowRoot.querySelector('[class*="-scroller"]'))||void 0===e?void 0:e.scrollTop)&&void 0!==t?t:0,d=Array.from(this.shadowRoot.querySelectorAll(".legend-group")),c=this.legendData.map(((e,t)=>{const s=this._cache.group[t].textMode,c=i.JW`<text font-size="${n}" dominant-baseline="middle">${e.title}</text>`,h=d[t].classList.contains("closed"),g=e.legendItems.filter((e=>!h)),p=e.legendItems.every((e=>e.labelIcon&&"gradient"===e.labelIcon.marker)),u=g.map(((e,t,l)=>{const d=r/2+t*o,c=this.selection.includes(e.label),{viewBox:h,elems:g}=this._getLabelIcon(e,c,t,l,p);let u;u=p?i.JW`
                        <svg width="18px" height="100%" >
                            ${g}
                        </svg>
                    `:h?i.JW`
                        <svg width="14px" height="${o}" viewBox=${h} >
                            ${g}
                        </svg>
                    `:g;const m=c?i.JW`<rect fill="rgba(0, 0, 0, .12)" x="-4" y="0" width="100%" height="${this._cache.itemHeight}"/>`:i.s6,v=this.hiddenIds.indexOf(e.label)>-1?"legend-hidden-item":"";return i.JW`
                    <g transform="translate(0 ${d})" class="${v}">
                        ${m}
                        ${u}
                        <text x="18" y="${o/2}" font-size="${n}" fill="black" dominant-baseline="middle">${this._truncateSvgText(e.label,a,s)}</text>
                    </g>
                `})),m=l,v=r+o*g.length+8;let f;return l+=v,p&&(f=i.JW`
                        <g transform="translate(0 ${r/2})"> 
                        ${this._getGradientRect(e.legendItems)}
                        </g>`),i.JW`
                <style>.legend-hidden-item * {fill: #B2B2B2}</style>
                <g class="legend-group" transform="translate(4 ${m+r/2})">
                    ${c}
                    ${h?i.s6:[u,f]}
                </g>
            `}));return i.JW`
            <g class="legend" fill="${i.Lb.color_secondary_5}" stroke="none" transform="translate(0,-${s})">
                ${c}
            </g>
        `}update(e){if(e.has("size")){e.get("size")!==this.size&&this._updateSize()}e.has("legendData")&&this._updateTruncatedLabels(),super.update(e)}render(){const[e,t]=(0,i.Yh)(this.tagName.toLowerCase(),{[this._cache.size]:!0,"fixed-width":this.fixedWidth});return i.qy`
            <div class="${t}">
                <${u.Scrollbar.tag} class="${e}-scroller" hori-hide>
                    ${this._renderCustomLegend()}
                    ${this._renderContextMeny()}
                </${u.Scrollbar.tag}>
            </div> `}_renderContextMeny(){if(this._openGroup){const e=this._openGroup.group,t=e.legendItems.map((e=>e.label)),l=this.hiddenIds.filter((e=>t.includes(e))).length,n=t.filter((e=>!this.hiddenIds.includes(e))).every((e=>this.selection.includes(e))),o=l===t.length,r=n?{label:"Deselect",icon:c.default}:{label:"Select",icon:d.default},h=o?{label:"Show",icon:a.default}:{label:"Hide",icon:s.default};return i.qy`
                <${u.ContextMenu.tag}
                    class='group-meny'
                    .object=${this._openGroup.button}
                    controlled=${!0}
                    fixed-width=${!1}
                    open=${!!this._openGroup}
                    click-outside-close=${!0}
                    @close=${()=>{this._closeContextMenu()}}
                >
                    <${u.ContextMenuItem.tag} label=${r.label}
                                                       icon=${r.icon} @click=${t=>{var l,i;null===(i=null===(l=null===e||void 0===e?void 0:e.groupEvent)||void 0===l?void 0:l.labelsEvent)||void 0===i||i.call(l,e.legendItems.map((e=>e.label)),e,t),this._closeContextMenu()}}></${u.ContextMenuItem.tag}>
                    <${u.ContextMenuItem.tag} label=${h.label}
                                                       icon=${h.icon} @click=${t=>{var l,i;null===(i=null===(l=e.groupEvent)||void 0===l?void 0:l.rightGroupEvent)||void 0===i||i.call(l,e.legendItems.map((e=>e.label)),e,t),this._closeContextMenu()}}></${u.ContextMenuItem.tag}>
                </${u.ContextMenu.tag}>
            `}return i.s6}_updateSize(){var e,t;let l;l=this.size&&"auto"!==this.size?null!==(t=this.size)&&void 0!==t?t:"xsmall":(null===(e=this.parentElement)||void 0===e?void 0:e.tagName.endsWith("COMPOSABLE-PLOT"))?"xsmall":"small",this._cache.size=l,"xsmall"===l?(this._cache.font=12,this._cache.itemHeight=24,this._cache.buttonSize="extra-small",this._cache.spacings=55):(this._cache.font=14,this._cache.itemHeight=36,this._cache.buttonSize="small",this._cache.spacings=71)}_getGradientRect(e){const t=e.map((e=>{var t;return null===(t=e.labelIcon)||void 0===t?void 0:t.color})),l=100/(t.length-1),n=t.map(((e,t)=>{const n=t*l;return i.JW`<stop offset="${n}%" style="stop-color:${e};stop-opacity:1"></stop>`})),o=this._cache.itemHeight;return i.JW`
                            <defs>
                                <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="grad">
                                    ${n}
                                </linearGradient>
                            </defs>
                            <rect style="" x="5" y="0" width="8" height="${o*t.length}" fill="url(#grad)"></rect>        
        `}_renderCustomLegend(){var e;return null===(e=this.legendData)||void 0===e?void 0:e.filter((e=>e.legendItems.length)).map(((e,t)=>{var l;const n=e.legendItems.every((e=>e.labelIcon&&"gradient"===e.labelIcon.marker)),r=i.JW`${e.legendItems.map(((l,i)=>this._renderLegendItem(l,e,i,t,n)))}`;let a;return n&&(a=i.JW`
                        <svg style="position: absolute;display: block;padding-left: 4px;width: 22px;height: 100%;"> 
                           ${this._getGradientRect(e.legendItems)}
                        </svg>`),i.qy`
                    <div
                        class="legend-group"
                        style="--legend-item-direction: ${null!==(l=this._cache.group[t].textMode)&&void 0!==l?l:"rtl"}"
                    >
                        <div
                            class="legend-group-head"
                            @click=${e=>{e.target.parentElement.classList.toggle("closed")}}
                        >
                            <span class="legend-group-title">${e.title}</span>
                            <div class="legend-group-controls">
                                ${this._renderMoreButton(e)} ${this._renderIcon("legend-chevron",o.default)}
                            </div>
                        </div>
                        <div class="legend-group-content">
                            <div style="position: relative;overflow: hidden;">${a}${r}</div>
                        </div>
                    </div>
                `}))}_renderMoreButton(e){var t;if(e&&e.groupEvent){const l=!!e.groupEvent.labelsEvent,n=!!(null===(t=e.groupEvent)||void 0===t?void 0:t.rightGroupEvent);if(l||n)return i.qy`
                    <${u.Button.tag}
                        class="group-more-button"
                        type='tertiary'
                        button-size=${this._cache.buttonSize}
                        compact='true'
                        @click="${t=>{this._openGroup=this._openGroup?void 0:{button:t.target,group:e},t.stopPropagation()}}"
                    >
                        ${this._renderIcon("group-more-icon",r.default)}
                    </${u.Button.tag}>

                `}return i.s6}_renderLegendItem(e,t,l,n,o){var r,a,s,d,c;const h=e.rightSlotIcon&&this.togglableVisibility?i.qy`
                    <div class="legend-button">
                        <${u.Button.tag}
                            type='tertiary'
                            button-size=${this._cache.buttonSize}
                            compact='true'
                            @click="${l=>{var i;return null===(i=e.rightSlotEvent)||void 0===i?void 0:i.call(e,[e.label],t,l)}}"
                        >
                            ${this._renderIcon("item-right-icon",e.rightSlotIcon)}
                        </${u.Button.tag}>
                    </div>
                `:"",{viewBox:g,elems:p}=this._getLabelIcon(e,null===(r=this.selection)||void 0===r?void 0:r.includes(e.label),l,t.legendItems,o);return i.qy`
            <span
                class="legend-item${(null===(a=this.selection)||void 0===a?void 0:a.includes(e.label))?" selected":""} ${this.hiddenIds.includes(e.label)?" hidden":""}"
                @mouseenter="${()=>{this._legendItemHoverEnter(e.label,t.title,e.labelIcon.color)}}"
                @mouseleave="${()=>{this._legendItemHoverLeave(e.label,t.title,e.labelIcon.color)}}"
            >
                <span
                    title="${e.label}"
                    class="legend-item-left ${e.label!==(null===(s=this.hoveredElement)||void 0===s?void 0:s.metadata.id)||t.title!==(null===(d=this.hoveredElement)||void 0===d?void 0:d.metadata.groupTitle)&&t.title!==(null===(c=this.hoveredElement)||void 0===c?void 0:c.metadata.label)?"":"plot-hovered"}  ${e.labelEvent?"clickable":""}"
                    @click="${l=>{var i;return null===(i=e.labelEvent)||void 0===i?void 0:i.call(e,[e.label],t,l)}}"
                >
                    <svg class="marker-icon" width="18px" height="100%" viewBox=${(0,i.JR)(g||null)}>
                        ${p}
                    </svg>
                    <span class="legend-item-label">
                        <span> ${e.label} </span>
                    </span>
                </span>
                <span
                    class="legend-item-right 
                      ${e.rightSlotEvent?"clickable":""} 
                      ${e.labelEvent?"":"no-hover-color"}"
                >
                    ${h}
                </span>
            </span>
        `}_legendItemHoverLeave(e,t,l){this.dispatchEvent(new CustomEvent("legend-item-hover",{bubbles:!0,detail:{target:{metadata:{id:e,groupTitle:t,color:l}},hovering:!1}}))}_legendItemHoverEnter(e,t,l){this.dispatchEvent(new CustomEvent("legend-item-hover",{bubbles:!0,detail:{target:{metadata:{id:e,groupTitle:t,color:l}},hovering:!0}}))}_getCircleSVG(e,t){return i.JW`<circle class="label-icon" fill="${e}" cx="7" cy="${this._cache.itemHeight/2}" r=${t?"4":"3"} />`}_getMarkerSVG(e,t,l,n,o){const r=e.labelIcon,a=r.marker,s=r.color;if(!a)return{marker:i.JW``};switch(a){case"circle":return this._getMarkerSVGCircle(s,t);case"rectangle":return this._getMarkerSVGRectangle(s,t);case"full":return this._getMarkerSVGFull(s,t);case"gradient":return this._getMarkerSVGGradient(l,n,s,e,o,t);case"icon":return this._getMarkerSVGIcon(r,t,s);default:return console.warn(`Unknown marker type '${a}'`),{marker:i.JW``}}}_getMarkerSVGCircle(e,t){return{marker:this._getCircleSVG(e,t)}}_getMarkerSVGRectangle(e,t){return{marker:this._getRectangleSVG(e,t?{x:"3",y:""+this._cache.itemHeight/2,width:"8",height:8}:void 0)}}_getMarkerSVGFull(e,t){return{marker:this._getRectangleSVG(e,Object.assign({y:""+this._cache.itemHeight/2,height:this._cache.itemHeight},t?{x:"2",width:"10"}:{x:"3",width:"8"}))}}_getMarkerSVGGradient(e,t,l,n,o,r){var a;const s=e===t.length-1?l:null===(a=t[e+1].labelIcon)||void 0===a?void 0:a.color,d=n.label?[i.JW`<rect fill="#333" x="4" y="${this._cache.itemHeight/2}" width="1" height="1"  ></rect><rect fill="#333" x="13" y="${this._cache.itemHeight/2}" width="1" height="1"  ></rect>`,i.JW`<rect fill="white" opacity='0.33' x="5" y="${this._cache.itemHeight/2}" width="8" height="1"></rect>`]:[null,null];return{marker:o?i.JW`${d[0]}${d[1]}`:i.JW`
                         <defs>
                            <linearGradient id="grad${e}" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:${l};stop-opacity:1" />
                                <stop offset="100%" style="stop-color:${s};stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        ${d[0]}
                        ${this._getRectangleSVG(`url(#grad${e})`,Object.assign({y:""+this._cache.itemHeight/2,height:this._cache.itemHeight},r?{x:"2",width:"16"}:{x:"3",width:"8"}))}
                        ${d[1]}
                    `}}_getMarkerSVGIcon(e,t,l){const{d:n,viewBox:o}=e.icon,r=n.map((e=>i.JW`<path d="${e}"></path>`)),a=t?"translate(-2, -2),scale(1.2, 1.2)":null;return{viewBox:o,marker:i.JW`<g class="label-icon" fill="${l}" transform="${(0,i.JR)(a)}" >${r}</g>`}}_getLineSVG(e,t,l){if(!l)return i.JW``;switch(l){case"solid":return i.JW`<line class="label-icon" stroke-width=${t?"3":"1"} stroke="${e}" x1="1" y1="${this._cache.itemHeight/2}" x2="13" y2="${this._cache.itemHeight/2}" />`;case"dashed":return i.JW`<line class="label-icon" stroke-width=${t?"3":"1"} stroke-dasharray="2 1" stroke="${e}" x1="2" y1="${this._cache.itemHeight/2}" x2="16" y2="${this._cache.itemHeight/2}" />`;default:return console.warn(`Unknown line type '${l}'`),i.JW``}}_getLabelIcon(e,t,l,i,n){const o=e.labelIcon;if(!o)return{elems:void 0};if(!o.marker&&!o.line)return{elems:this._getCircleSVG(o.color,t)};const{marker:r,viewBox:a}=this._getMarkerSVG(e,t,l,i,n);return{viewBox:a,elems:[r,this._getLineSVG(o.color,t,o.line)]}}_updateTruncatedLabels(){const e=[];this.legendData.forEach((t=>{const l=t.legendItems.map((e=>{var t;return null!==(t=e.label)&&void 0!==t?t:""}));e.push({textMode:0===g(l).length&&p(l).length>0?"ltr":"rtl"})})),this._cache=Object.assign(Object.assign({},this._cache),{group:e})}_truncateSvgText(e,t,l){if(e.length<=t)return e;const i=t-3;return i<=0?"":"rtl"===l?"..."+e.slice(-i):e.slice(0,i)+"..."}};m([(0,i.MZ)(),v("design:type",Array)],f.prototype,"legendData",void 0),m([(0,i.MZ)(),v("design:type",Array)],f.prototype,"selection",void 0),m([(0,i.MZ)(),v("design:type",Array)],f.prototype,"hiddenIds",void 0),m([(0,i.MZ)({type:Boolean,attribute:"togglable-visibility",converter:i.Bs}),v("design:type",Object)],f.prototype,"togglableVisibility",void 0),m([(0,i.MZ)(),v("design:type",Object)],f.prototype,"hoveredElement",void 0),m([(0,i.MZ)({type:String,reflect:!0}),v("design:type",String)],f.prototype,"size",void 0),m([(0,i.MZ)({type:Number,reflect:!0,attribute:"max-characters"}),v("design:type",Object)],f.prototype,"maxCharacters",void 0),m([(0,i.MZ)({type:Boolean,reflect:!0,attribute:"fixed-width"}),v("design:type",Object)],f.prototype,"fixedWidth",void 0),m([(0,i.wk)(),v("design:type",Object)],f.prototype,"_cache",void 0),m([(0,i.wk)(),v("design:type",Object)],f.prototype,"_openGroup",void 0),f=u=m([(0,i.eV)({tagName:"plot-legend",styles:e=>{const{root:t,is:l}=(0,i.zz)(e);return[i.iF,i.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            :host {
                display: block;
                height: 100%;
                user-select: none;
            }

            ${t} {
                width: 100%;
                height: 100%;
            }

            ${l("fixed-width")} {
                width: var(--legend-width);
            }

            .legend-group {
                padding-bottom: 12px;
            }

            .legend-group-content {
                display: grid;
                grid-template-rows: 1fr;
                transition: grid-template-rows 0.3s ease-in-out;
            }

            .closed .legend-group-content {
                grid-template-rows: 0fr;
            }

            .legend-group-head {
                display: flex;
                align-items: center;
                color: var(--color-secondary-8, #6f6f6f);
                padding-left: 4px;
                padding-right: 4px;
                user-select: none;
                cursor: pointer;
                justify-content: space-between;
                gap: 2px;
            }

            .legend-group-head:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }

            .legend-group-title {
                pointer-events: none;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .legend-group-controls {
                display: flex;
                align-items: center;
                pointer-events: none;
            }

            .group-more-button {
                pointer-events: all;
            }

            .group-more-icon {
                pointer-events: none;
            }

            .legend-chevron {
                font-size: 16px;
                pointer-events: none;
                transition: transform 0.15s linear;
                transform: rotate(180deg);
            }

            ${l("small")} .legend-chevron {
                font-size: 20px;
            }

            .closed .legend-chevron {
                transform: rotate(0deg);
            }

            ${l("xsmall")} .legend-group-head {
                font-size: var(--legend-group-xsmall-font-size, 12px);
                height: var(--legend-group-xsmall-height, 24px);
            }

            ${l("small")} .legend-group-head {
                font-size: var(--legend-group-small-font-size, 14px);
                height: var(--legend-group-small-height, 36px);
            }

            .legend-item {
                display: flex;
                flex-direction: row;
                white-space: nowrap;
            }

            ${l("xsmall")} .legend-item {
                height: var(--legend-item-xsmall-height, 24px);
            }

            ${l("small")} .legend-item {
                height: var(--legend-item-small-height, 36px);
            }

            .legend-item:not(.hidden) .clickable {
                cursor: pointer;
            }

            .legend-item.hidden .clickable {
                cursor: default;
            }

            .legend-item.selected .legend-item-left,
            .legend-item.selected .legend-item-right {
                background-color: rgba(0, 0, 0, 0.12);
            }

            .legend-item.hidden .legend-item-label {
                color: ${(0,i.Jy)("color_secondary_5")};
                font-weight: initial;
            }

            .legend-item.hidden .label-icon {
                fill: ${(0,i.Jy)("color_secondary_3")};
                stroke: ${(0,i.Jy)("color_secondary_3")};
            }

            .legend-item-left {
                flex: 1;
                display: flex;
                align-items: center;
                gap: 4px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .legend-item-label {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                direction: var(--legend-item-direction, rtl);
                unicode-bidi: isolate;
                text-align: left;
            }

            ${l("xsmall")} .legend-item-label {
                font-size: var(--legend-item-xsmall-font-size, 12px);
            }

            ${l("small")} .legend-item-label {
                font-size: var(--legend-item-small-font-size, 14px);
            }

            .legend-item:not(.hidden):hover .clickable.legend-item-left {
                background-color: rgba(0, 0, 0, 0.08);
            }

            .legend-item:not(.hidden):hover .clickable.legend-item-right {
                background-color: rgba(0, 0, 0, 0.08);
            }

            .legend-item:not(.hidden) .clickable.legend-item-left.plot-hovered {
                background-color: rgba(0, 0, 0, 0.08);
            }

            .legend-item:not(.hidden) .clickable.legend-item-right.plot-hovered {
                background-color: rgba(0, 0, 0, 0.08);
            }

            .marker-icon {
                z-index: 1;
                padding-left: 4px;
            }

            .no-hover-color {
                background-color: white !important;
            }

            .legend-item-right {
                display: flex;
                align-items: center;
            }

            .legend-item .legend-item-right .legend-button {
                opacity: 0;
            }

            .legend-item:hover .legend-item-right .legend-button,
            .hidden .legend-item-right .legend-button {
                opacity: 1;
            }

            .legend-button {
                transition: margin-right 0.25s ease-in-out;

                margin-right: calc(3px + 10px * var(--scrollbar-y-overflow, 0));
            }
        `,n`
            @container (min-width: 0px) {
              :host {
                --legend-width: 20ch;
                max-width: var(--legend-width);
              }
            }
                    
            @container (max-width: 640px) {
              :host {
                 --legend-width: 16ch;
              }
            }
            
            @container (max-width: 540px) {
              :host {
                 --legend-width: 14ch;
              }
            }
            
            @container (max-width: 440px) {
              :host {
                 --legend-width: 12ch;
              }
            }
            
            @container (max-width: 320px) {
              :host {
                 --legend-width: 8ch;
              }
              .legend-item-left {
                gap: 0;
              }
              .legend-item-label {
                text-overflow: clip;
              }
            }
            
            @container (max-width: 220px) {
              :host {
                 --legend-width: 5ch;
              }
              .legend-item-left {
                gap: 0;
              }
              .marker-icon {
                padding-left: 0;
              }
              .legend-item-label {
                text-overflow: clip;
              }
            }
            
            @container (max-width: 120px) {
              :host {
                 --legend-width: 0;
              }
            }
`]},version:"0.0.108"})],f)},40926:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i=(0,l(80129).p)({name:"down",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="m17.829 8.582 1.2 1.2L12.01 16.8 4.97 9.76l1.2-1.2 5.84 5.84 5.818-5.818Z"/></svg>'})},52739:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i=(0,l(80129).p)({name:"selectAll",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.98 16.02h10.44V5.58H7.98zM6.6 17.4V4.2h13.2v13.2z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.52 18.48V7.2H4.08v12.72H16.8v-1.44z" clip-rule="evenodd"/><path d="m17.256 9.1-1.06-1.06-3.94 3.939-2.052-2.053-1.06 1.06 3.113 3.114z"/></svg>'})},60669:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i=(0,l(80129).p)({name:"eye",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19.686 11.778a9.7 9.7 0 0 0-1.854-2.394 8.264 8.264 0 0 0-11.634 0 9.7 9.7 0 0 0-1.854 2.394l-.102.204.102.204a9.5 9.5 0 0 0 1.854 2.394 8.264 8.264 0 0 0 11.634 0 9.9 9.9 0 0 0 1.854-2.394l.102-.204-.096-.204zm-7.68-3.27c1.92 0 3.48 1.548 3.486 3.468 0 1.92-1.548 3.48-3.468 3.486a3.48 3.48 0 0 1-3.486-3.468v-.012a3.475 3.475 0 0 1 3.468-3.474" clip-rule="evenodd"/></svg>'})},71149:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i=(0,l(80129).p)({name:"moreVertical",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M10.8 13.2v-2.4h2.4v2.4zm0-4.8V6h2.4v2.4zm0 9.6v-2.4h2.4V18z"/></svg>'})},71759:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i=(0,l(80129).p)({name:"eyeStrike",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.894 19.866 4.044 5.016l.936-.936 14.85 14.85z"/><path fill-rule="evenodd" d="m15.468 12.018 2.46 2.454a9.7 9.7 0 0 0 1.734-2.28l.102-.204-.096-.204a9.7 9.7 0 0 0-1.854-2.394 8.24 8.24 0 0 0-7.254-2.268l1.392 1.392h.03c1.92 0 3.48 1.548 3.486 3.468v.042zm-3.528 3.444a3.47 3.47 0 0 1-3.42-3.414L6.024 9.54a9.7 9.7 0 0 0-1.698 2.244l-.102.204.102.204a9.5 9.5 0 0 0 1.854 2.394 8.27 8.27 0 0 0 7.17 2.286z" clip-rule="evenodd"/></svg>'})},80129:(e,t,l)=>{l.d(t,{m:()=>a,p:()=>r});var i=l(93656);let n;const o=()=>{if(!n){let e=window.studio;e||(e=window.studio={});let t=e.sui;t||(t=e.sui={});const l=`icons${i.r.split(".")[0]||i.r}`;n=n||t[l],n||(n=t[l]={})}return n},r=e=>{const t=o();return t[e.name]||(t[e.name]=e.data),e.name},a=e=>o()[e]},87167:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i=(0,l(80129).p)({name:"excludeAll",data:'<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.98 16.02h10.44V5.58H7.98zM6.6 17.4V4.2h13.2v13.2z" clip-rule="evenodd"/><path d="m13.2 9.74-2.016-2.016-1.06 1.06 2.015 2.016-2.015 2.015 1.06 1.06 2.016-2.014 2.015 2.015 1.06-1.06L14.26 10.8l2.016-2.015-1.061-1.06L13.2 9.738Z"/><path fill-rule="evenodd" d="M5.52 18.48V7.2H4.08v12.72H16.8v-1.44z" clip-rule="evenodd"/></svg>'})},93656:(e,t,l)=>{l.d(t,{r:()=>i});const i="2.0.90"}}]);
//# sourceMappingURL=9588.81d96685.chunk.js.map