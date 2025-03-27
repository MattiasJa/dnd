"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[3355],{13355:(t,e,r)=>{r.r(e),r.d(e,{Badge:()=>l,BadgeType:()=>a,BadgeVariant:()=>i});var o=r(37982);var a,i;!function(t){t.Neutral="neutral",t.Info="info",t.Success="success",t.Warning="warning",t.Danger="danger"}(a||(a={})),function(t){t.Default="default",t.Text="text",t.TextLight="text-light"}(i||(i={}));var n=function(t,e,r,o){var a,i=arguments.length,n=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},s=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends o.OC{constructor(){super(...arguments),this.type=a.Neutral,this.variant=i.Default}render(){const[t,e]=(0,o.Yh)(this.tagName.toLowerCase(),{[this.type]:!0,[this.variant]:!0});let r=this._renderVariant(t);this.variant===i.Default&&this.type===a.Neutral&&(r=o.qy`<slot></slot>`);const n=this.variant===i.TextLight?o.qy`<slot class="${t}-text"></slot>`:null;return o.qy`
            <div class="${e}">
                <div class="${t}-badge">${r}</div>
                ${n}
            </div>
        `}_renderVariant(t){switch(this.variant){case i.Text:return o.qy`<slot class="${t}-text"></slot>`;case i.TextLight:case i.Default:default:return null}}};n([(0,o.MZ)({type:a,reflect:!0}),s("design:type",Object)],l.prototype,"type",void 0),n([(0,o.MZ)({type:i,reflect:!0}),s("design:type",Object)],l.prototype,"variant",void 0),l=n([(0,o.eV)({tagName:"badge",styles:t=>{const{is:e,child:r}=(0,o.zz)(t);return[o.iF,o.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}:host{display:inline-block;position:var(--badge-position, absolute);}${r("badge")}{font-size:var(--font-size-01);line-height:1;font-weight:var(--font-weight-04);padding:3px 6px;height:20px;vertical-align:middle;display:flex;align-items:center;justify-content:center;color:var(--color-text-default-inverted);}${e("default")} ${r("badge")}{padding:3px 4px;}${e("text-light")} ${r("badge")}{padding:3px 4px;}${e("neutral")} ${r("badge")}{color:var(--color-text-default);background:var(--color-surface-transparent);}${e("info")} ${r("badge")}{background:var(--color-surface-support-info);}${e("success")} ${r("badge")}{background:var(--color-surface-support-success);}${e("warning")} ${r("badge")}{color:var(--color-text-default);background:var(--color-surface-support-warning);}${e("danger")} ${r("badge")}{background:var(--color-surface-support-danger);}${e("default","!neutral")} ${r("badge")}{min-width:unset;width:8px;height:8px;border-radius:50%;}${e("default","!neutral")}::slotted(*){display:none;}${e("default","neutral")}::slotted(*){display:initial;}${e("default","neutral")} ${r("badge")}{min-width:20px;height:20px;color:var(--badge-text-color);background:transparent;border-radius:50%;}${e("text-light")} ${r("badge")}{min-width:unset;width:8px;height:8px;border-radius:50%;}${e("text-light")} ${r("text")}{font-size:var(--font-size-01);line-height:1;font-weight:var(--font-weight-04);color:var(--color-text-default);}${e("text")} ${r("badge")}{border-radius:10px;}${e("text-light")}{display:flex;flex-direction:row;gap:4px;align-items:center;}`]},version:"2.0.2"})],l)},37982:(t,e,r)=>{r.d(e,{OC:()=>v,Bs:()=>$,Yh:()=>x,AH:()=>a.AH,zz:()=>l,eV:()=>m,qy:()=>n.qy,JR:()=>i.J,MZ:()=>o.MZ,P:()=>o.P,wk:()=>o.wk,iF:()=>u,iz:()=>a.iz});var o=r(13170),a=r(37022),i=(r(33171),r(41821),r(80241),r(56440)),n=r(971),s=(r(41286),r(24607),r(53993),r(22677),r(18789));const l=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";t=t.trim();const r=(0,s.iz)(`.${t}`),o=(0,s.iz)(`.${t}-${e}`);function a(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];if(!r||!r[0])return(0,s.iz)(`.${t}-`);const a=r.map((e=>(e=e.trim(),`.${t}-${e}`))).join(" ");return(0,s.iz)(a)}function i(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];if(!r[0])return(0,s.iz)("");const i=t=>"!"===t[0];return(0,s.iz)(r.reduce(((e,r)=>e+(e=>i(e)?(e=e.substring(1),`:not(.${t}--${e})`):`.${t}--${e}`)(r=r.trim())),i(r[0][0])?o:""))}return{host:r,root:o,child:a,is:i,groupedIs:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return(0,s.iz)(r.map((e=>`${i(t)} ${a(e)}`)).join(","))}}};var c=r(94161);const d=(0,c.iz)("Roboto, Arial, Open Sans, Helvetica, sans-serif"),u=c.AH`
    html {
        font-size: var(--application-scaling, var(--application-scaling-s));
        zoom: var(--application-zoom);
        font-family: ${d};
        scrollbar-color: var(--scrollbar-color) transparent;
        scrollbar-width: thin;
    }

    div {
        scrollbar-color: var(--scrollbar-color) transparent;
        scrollbar-width: thin;
    }

    input,
    textarea,
    button,
    span,
    div,
    label,
    li,
    p,
    a,
    ul,
    tr,
    td,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${d};
    }

    table,
    th {
        font-family: ${d};
        font-size: 1.1em;
    }

    code {
        font-size: 1em;
    }

    p {
        font-size: var(--font-size-02);
    }

    h1 {
        margin-top: 0;
        margin-bottom: 16px;
        line-height: 27px;
        font-size: var(--font-size-07);
        font-weight: normal;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: var(--font-size-05);
        font-weight: normal;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: var(--font-size-02);
        font-weight: normal;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: normal;
    }

    h5 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: normal;
    }

    h6 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: normal;
    }

    ::-webkit-scrollbar {
        border-radius: 0;
        background: transparent;
    }
    ::-webkit-scrollbar:vertical {
        width: 20px; /* calc(4px + 2 * 8px); */
    }
    ::-webkit-scrollbar:horizontal {
        height: 20px; /* calc(4px + 2 * 8px); */
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background: var(--color-neutral-gray-200);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-track:vertical {
        border-left: 8px solid rgba(0, 0, 0, 0);
        border-right: 8px solid rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-track:horizontal {
        border-top: 8px solid rgba(0, 0, 0, 0);
        border-bottom: 8px solid rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-neutral-gray-300);
        background-clip: padding-box;
        border-radius: 0;
    }
    ::-webkit-scrollbar-thumb:vertical {
        border-left: 8px solid rgba(0, 0, 0, 0);
        border-right: 8px solid rgba(0, 0, 0, 0);
        margin-left: 8px;
    }
    ::-webkit-scrollbar-thumb:horizontal {
        border-top: 8px solid rgba(0, 0, 0, 0);
        border-bottom: 8px solid rgba(0, 0, 0, 0);
        margin-top: 8px;
    }

    ::-webkit-scrollbar-thumb:vertical:hover {
        border-left: 6px solid rgba(0, 0, 0, 0);
        border-right: 6px solid rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb:horizontal:hover {
        border-top: 6px solid rgba(0, 0, 0, 0);
        border-bottom: 6px solid rgba(0, 0, 0, 0);
    }
`;let g=window.studio;g||(g=window.studio={});let p=g.sui;p||(p=g.sui={});let b=p.registry;b||(b=p.registry=new Map),p.dump||(p.dump=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=console.info;let r=1;return!t&&b&&(e("components registry:"),b.forEach(((t,o)=>(e(`  ${r} : ${o} ${t.version}`),void++r)))),b});const f=function(t,e){const r=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(e?`${e.trim()}-`:"")+"elements"+`-${(t=>{const e=[];for(let r=0;r<t.length;r++){const o=t[r],a=o.toLowerCase();o!==a&&r>0&&e.push("-"),e.push(a)}return e.join("")})(t.tagName)}`+(r?`-${t.version.replace(/\./g,"-")}`:"")}(t,e,arguments.length>2&&void 0!==arguments[2]&&arguments[2]);if(!function(t){return window.customElements.get(t)}(r)){const e="function"===typeof t.generateStyles?t.generateStyles(r):t.styles;!function(t,e,r){var o;window.customElements.define(t,((o=class extends e{}).styles=r,o.version=e.version,o))}(r,t,e),b&&b.set(r,{version:t.version})}return r};var h;function m(t){return function(e){var r;return(r=class extends e{}).tagName=t.tagName,r.generateStyles=t.styles,r.version=t.version,r.sub=t.sub||[],r}}class v extends a.WF{static register(t){if(!this.tagName)throw Error("Subclass must set tagName : "+this.toString());const e=t=>{t.forEach((t=>{e(t.sub),this.subRegister(t)}))};return e(this.sub),f(this,t)}static subRegister(t){return t.tag||(t.tag=(0,n.Bk)(f(t,""))),t}static _filterUndefinedImports(t){const e=[];return(Array.isArray(t)?t:[t]).forEach((t=>{const r=[];(Array.isArray(t.elem)?t.elem:[t.elem]).forEach((t=>{void 0===h[t]&&r.push(t)})),r.length>0&&e.push({module:t.module,elem:r})})),e}}h=v,v.sub=[],v.dynSubRegister=(t,e)=>{const r=h._filterUndefinedImports(t);r.length>0?Promise.all(r.map((t=>t.module()))).then((t=>{t.forEach(((t,e)=>{r[e].elem.forEach((e=>{var r;const o=null!==(r=t[e])&&void 0!==r?r:t.default;o&&(o.tagName?h[e]=h.subRegister(o):h[e]=o)}))})),e()})).catch((t=>{window.console.error("error",t),e()})):e()};const x=(t,e)=>{t=t.trim();let r="";return e&&(r=Object.keys(e).reduce(((r,o)=>e[o]?`${r} ${t}--${o}`:r),r).trim()),[t,`${t}-root${r?" ":""}${r}`,r]},$=t=>"boolean"===typeof t?t:"number"===typeof t?0!==t:"string"===typeof t&&(""===t||"true"===t.toLowerCase())}}]);
//# sourceMappingURL=3355.83e860ca.chunk.js.map