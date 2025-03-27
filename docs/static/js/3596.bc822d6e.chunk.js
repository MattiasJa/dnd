"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[3596],{63596:(e,t,o)=>{o.r(t),o.d(t,{ContextMenu:()=>y,ContextMenuItem:()=>p,ContextMenuItemSlot:()=>m,ContextMenuPlacement:()=>s});var i=o(5298);var s;!function(e){e.BelowLeftAligned="below-left",e.BelowRightAligned="below-right",e.RightSideTopAligned="right-top",e.RightSideBottomAligned="right-bottom",e.LeftSideTopAligned="left-top",e.LeftSideBottomAligned="left-bottom",e.AboveLeftAligned="above-left",e.AboveRightAligned="above-right"}(s||(s={}));const l="2.0.195";var n=o(15652);var r,c=o(67303),d=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},a=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=r=class extends i.OC{get selected(){return this._selected}set selected(e){e!==this._selected&&(e?this.setAttribute("selected","true"):this.removeAttribute("selected"),this._selected=e,this.requestUpdate())}constructor(){super(),this.icon="",this.label="",this.disabled=!1,this.nested=!1,this.nestedPlacement="right-top",this.callback=null,this.open=!1,this.selectable=!1,this.clickItemClose=!1,this._selected=!1,this.addEventListener("click",this._handleClick)}connectedCallback(){this.style.setProperty("display","none");const e=[];r.subRegister(r),e.push({module:()=>o.e(9693).then(o.bind(o,59693)),elem:["Icon"]}),e.push({module:()=>Promise.all([o.e(5029),o.e(4560)]).then(o.bind(o,14560)),elem:["Dropdown"]}),r.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}resetOpenState(){if(this.open){let e;this.open=!1,this.item&&this.item.length>0?e=Array.from(this.shadowRoot.querySelectorAll("[class*='-li']")):this.nested&&(e=this.shadowRoot.querySelector('slot[name="child-slot"]').assignedElements()),e.forEach((e=>e.resetOpenState()))}}updated(e){super.updated(e),e.has("open")&&this.open&&this._dropdown&&(this._dropdown.object=this._li,this._dropdown.open=!0)}render(){const[e,t]=(0,i.Yh)(this.tagName.toLowerCase(),{selected:this.selected,open:this.open,disabled:this.disabled}),o=this.icon?i.qy`
                <${r.Icon.tag} class="${e}-icon" size="large"
                                             icon='${this.icon}'></${r.Icon.tag}>`:"",s=this.label?this.label:i.qy` <slot></slot>`,l=this.nested||this.item&&this.item.length>0,n=l?i.qy`
                <${r.Icon.tag} class="${e}-icon-expand" size="large"
                                             icon='${c.default}'></${r.Icon.tag}>`:null,d=l?this._nested(e):null;return i.qy`
            <li class="${t}">
                <button class="${e}-button" ?disabled=${this.disabled}>
                    ${o}
                    <label class="${e}-label"> ${s} </label>
                    ${n}
                </button>
            </li>
            ${d}
        `}_nested(e){const t=this.item&&this.item.length>0?this.item.map((t=>i.qy`
                        <${r.tag} class="${e}-li" selected='${!1}' @mousedown=${t.clickCallback} label='${t.label}' icon='${t.icon}' .item='${t.item}'>
                        </${r.tag}>`)):i.qy` <slot name="child-slot"></slot>`;return i.qy`
            <${r.Dropdown.tag}
                class='${e}-dropdown'
                open="${this.open}"
                disabled="${this.disabled}"
                click-outside-close="${!1}"
                controlled="false"
                animation-variant='none'
                force-placement="${this.nestedPlacement}"
                fixed-width="false">
                <ul class="${e}-items">
                    ${t}
                </ul>
            </${r.Dropdown.tag}>
        `}_handleClick(e){const t=e.composedPath().find((e=>"LI"===e.tagName)),o=t?t.getRootNode().host:e.target;if(o!==this)return this._closeOthers(o),void(o.selectable&&(o.selected=!0));this.selectable&&(this.selected=!0),o===this&&this._handleNestedClick(e)}_handleNestedClick(e){(this.nested||this.item&&this.item.length>0)&&(this.open=!this.open),this.clickItemClose&&this.dispatchEvent(new CustomEvent("close-item",{bubbles:!0,composed:!0})),this.disabled&&e.stopImmediatePropagation(),null!==this.callback&&this.callback(e)&&(this.parentElement.open=!1,e.stopImmediatePropagation())}_closeOthers(e){if(e.open)if(this.item&&this.item.length>0){const t=Array.from(this.shadowRoot.querySelectorAll("[class*='-li']"));t.includes(e)&&t.filter((t=>t!==e)).forEach((e=>e.open=!1))}else if(this.nested){const t=this.shadowRoot.querySelector('slot[name="child-slot"]').assignedElements();t.includes(e)&&t.filter((t=>t!==e)).forEach((e=>e.open=!1))}}};d([(0,i.MZ)({type:String}),a("design:type",Object)],p.prototype,"icon",void 0),d([(0,i.MZ)({type:String}),a("design:type",Object)],p.prototype,"label",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs}),a("design:type",Object)],p.prototype,"disabled",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs}),a("design:type",Object)],p.prototype,"nested",void 0),d([(0,i.MZ)({type:String,attribute:"nested-placement"}),a("design:type",Object)],p.prototype,"nestedPlacement",void 0),d([(0,i.MZ)({type:Object,attribute:!1}),a("design:type",Object)],p.prototype,"callback",void 0),d([(0,i.MZ)({type:Object,attribute:!1}),a("design:type",Array)],p.prototype,"item",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs}),a("design:type",Object)],p.prototype,"open",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs,attribute:"selectable"}),a("design:type",Object)],p.prototype,"selectable",void 0),d([(0,i.MZ)({type:Boolean,attribute:"click-item-close",converter:i.Bs}),a("design:type",Object)],p.prototype,"clickItemClose",void 0),d([(0,i.MZ)({type:Boolean,converter:i.Bs}),a("design:type",Object),a("design:paramtypes",[Object])],p.prototype,"selected",null),d([(0,i.P)('[class*="-dropdown"]'),a("design:type",Object)],p.prototype,"_dropdown",void 0),d([(0,i.P)("li"),a("design:type",Object)],p.prototype,"_li",void 0),d([(0,i.wk)(),a("design:type",Object)],p.prototype,"_selected",void 0),p=r=d([(0,i.eV)({tagName:"context-menu-item",styles:e=>{const{root:t,child:o,is:s}=(0,i.zz)(e),l=(0,i.Jy)("color_secondary_4");return[i.iF,i.AH`
            :host,
            :host::before,
            :host::after,
            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }

            ${t} {
                list-style-type: none;
            }

            ${o("label")} {
                font-size: 14px;
            }
            ${s("!disabled")} ${o("label")} {
                cursor: pointer;
            }

            @media (hover: hover) {
                ${s("!selected")} ${o("button")}:not([disabled]):hover {
                    background: #0000001a;
                    cursor: pointer;
                    color: ${(0,i.Jy)("color_primary_3")};
                }
            }

            ${s("!selected","open")} ${o("button")}:not([disabled]) {
                background: #0000001a;
            }

            ${s("!selected")} ${o("button")}:not([disabled]):active {
                background: ${l};
            }

            ${o("button")} {
                display: flex;
                flex-direction: row;
                align-items: center;
                white-space: nowrap;
                gap: 12px;
                width: 100%;
                border: none;
                background: none;
                height: 36px;
                padding: 0 24px;
                font-size: 20px;
            }

            ${s("selected")} ${o("button")} {
                background-color: ${(0,i.Jy)("color_primary_3")};
                color: ${(0,i.Jy)("color_primary_2")};
            }

            ${o("items")} {
                position: relative;
                padding: 0;
                margin: 0;
                z-index: 2;
            }

            ${o("icon-expand")} {
                margin-left: auto;
            }

            /* Code working only for Safari */
            @media not all and (min-resolution: 0.001dpcm) {
                @supports (-webkit-appearance: none) {
                    ${t} button:focus {
                        outline: none;
                        border: 2px solid ${(0,i.Jy)("color_primary_3")};
                        margin-left: -2px;
                    }
                }
            }
        `]},version:l}),a("design:paramtypes",[])],p);o(21910);var h,b=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},u=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let y=h=class extends i.OC{constructor(){super(),this.open=!1,this.disabled=!1,this.clickOutsideClose=!0,this.controlled=!1,this.fixedWidth=!1,this.object=null,this.objectId=null,this._close=async()=>{this.open&&(this.controlled||(this.open=!1),await this.updateComplete,this.dispatchEvent(new CustomEvent("close",{detail:{newState:!1,prevState:this.open},bubbles:!0,composed:!0})))},this.addEventListener("click",this._handleClick),(0,n.H)()}connectedCallback(){this.style.setProperty("display","none"),h.subRegister(p);const e=[];e.push({module:()=>Promise.all([o.e(5029),o.e(4560)]).then(o.bind(o,14560)),elem:["Dropdown"]}),h.dynSubRegister(e,(()=>{super.connectedCallback(),this.addEventListener("close-item",this._close),this.style.removeProperty("display")}))}disconnectedCallback(){var e;this.object&&(null===(e=this.object)||void 0===e?void 0:e.active)&&(this.object.active=!1),this.removeEventListener("close-item",this._close),super.disconnectedCallback()}updated(e){e.has("open")&&(this.open&&this.items&&this.items.virtualize&&setTimeout((()=>{var e,t;this._dropdown.shadowRoot.querySelector('[class*="container"]').scrollTop=36*Math.max(1,null!==(t=null!==(e=this.items.scrolledItem)&&void 0!==e?e:this.items.selectedItem)&&void 0!==t?t:1)}),100),this._toggleParentButton()),super.updated(e)}render(){const[e]=(0,i.Yh)(this.tagName.toLowerCase(),{});let t,o="";if(this.items){const s=(t,o)=>{var s;return i.qy`
                <${p.tag} class="${e}-li" selected='${o===(null===(s=this.items)||void 0===s?void 0:s.selectedItem)}' @mousedown=${t.clickCallback} label='${t.label}' icon='${t.icon}' .item='${t.item}'>
                </${p.tag}>`};this.items.virtualize?(t=i.qy`
                    <lit-virtualizer
                        .items=${this.items.item}
                        .renderItem=${s}
                        .scroller=${!1}
                    ></lit-virtualizer>
                `,o=`width:${this.items.width?this.items.width:"50px"}`):t=this.items.item.map(s)}else t=i.qy` <slot></slot>`;return i.qy`
            <${h.Dropdown.tag}
                class='${e}-dropdown'
                open="${this.open}"
                .parentObject="${this.parentElement}"
                .object="${this.object}"
                disabled="${this.disabled}"
                force-placement="${this.forcePlacement}"
                click-outside-close="${this.clickOutsideClose}"
                object-id="${this.objectId}"
                controlled="${this.controlled}"
                fixed-width="${this.fixedWidth}"
                animation-variant='none'
                @toggle=${this._toggle}
                @close=${this._toggle}>
                <ul class="${e}-items" style='${o}'>
                    ${t}
                </ul>
            </${h.Dropdown.tag}>
        `}_toggle(){if(this.open=this._dropdown.open,!this.open){this._getMenuItemChildren().forEach((e=>e.resetOpenState()))}}_toggleParentButton(){var e;void 0!==(null===(e=this.object)||void 0===e?void 0:e.active)&&(this.object.active=this.open)}_handleClick(e){const t=e.composedPath().find((e=>"LI"===e.tagName)),o=t?t.getRootNode().host:e.target,i=this._getMenuItemChildren();i.includes(o)&&i.filter((e=>e!==o)).forEach((e=>e.open=!1))}_getMenuItemChildren(){return this.items?Array.from(this.shadowRoot.querySelectorAll("[class*='-li']")):this.shadowRoot.querySelector("slot").assignedElements().filter((e=>e.nodeName.endsWith("CONTEXT-MENU-ITEM")))}};var m;b([(0,i.MZ)({type:Boolean,reflect:!0,converter:i.Bs}),u("design:type",Object)],y.prototype,"open",void 0),b([(0,i.MZ)({type:Boolean,converter:i.Bs}),u("design:type",Object)],y.prototype,"disabled",void 0),b([(0,i.MZ)({type:Boolean,attribute:"click-outside-close",converter:i.Bs}),u("design:type",Object)],y.prototype,"clickOutsideClose",void 0),b([(0,i.MZ)({type:s,attribute:"force-placement"}),u("design:type",String)],y.prototype,"forcePlacement",void 0),b([(0,i.MZ)({type:Boolean,converter:i.Bs}),u("design:type",Object)],y.prototype,"controlled",void 0),b([(0,i.MZ)({type:Boolean,reflect:!0,converter:i.Bs,attribute:"fixed-width"}),u("design:type",Object)],y.prototype,"fixedWidth",void 0),b([(0,i.MZ)({type:Object}),u("design:type",Object)],y.prototype,"object",void 0),b([(0,i.MZ)({type:String,reflect:!0,attribute:"object-id"}),u("design:type",Object)],y.prototype,"objectId",void 0),b([(0,i.MZ)({type:Object,attribute:!1}),u("design:type",Object)],y.prototype,"items",void 0),b([(0,i.P)('[class$="-dropdown"]'),u("design:type",Object)],y.prototype,"_dropdown",void 0),y=h=b([(0,i.eV)({tagName:"context-menu",styles:e=>{const{root:t,child:o}=(0,i.zz)(e),s=(0,i.Jy)("color_primary_2");return[i.iF,i.AH`
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
            }

            ${t} {
                position: relative;
            }

            ${o("items")} {
                position: relative;
                background: ${s};
                padding: 0;
                margin: 0;
                z-index: 2;
            }

            ${o("li")} {
                width: 100%;
                left: 0;
            }
        `]},version:l}),u("design:paramtypes",[])],y),function(e){e.DEFAULT="",e.CHILD_SLOT="child-slot"}(m||(m={}))}}]);
//# sourceMappingURL=3596.bc822d6e.chunk.js.map