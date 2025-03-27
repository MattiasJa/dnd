"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[5555],{7644:(e,t,i)=>{i.d(t,{z:()=>n});const n=e=>class extends e{dispatch(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this).dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:!0,detail:t}));return s&&i?i():n&&n(),s}}},10431:(e,t,i)=>{i.d(t,{K:()=>n});const n=e=>class extends e{constructor(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];super(t),this._animationFrame=null,this._callback=this._callback.bind(this)}connectedCallback(){super.connectedCallback(),null===this._resizeObserverElem()&&this._installResizeObserver(this)}disconnectedCallback(){super.disconnectedCallback(),this._uninstallResizeObserver(this)}_installResizeObserver(e){if(this._resizeObserver=new ResizeObserver(this._callback),this._resizeObserver.observe(e),new Set(["inline","contents"]).has(window.getComputedStyle(e).display))throw new Error("ResizeObserver do nothing on inline elements")}_uninstallResizeObserver(e){this._resizeObserver&&(this._resizeObserver.unobserve(e),this._resizeObserver.disconnect())}_resizeObserverElem(){return null}_callback(e){this._animationFrame||(this._animationFrame=window.requestAnimationFrame((()=>{this._animationFrame=null,this._resizeObserverCallback(e)})))}}},35555:(e,t,i)=>{i.r(t),i.d(t,{Tab:()=>v,TabNotification:()=>a,Tabs:()=>b,TabsEvents:()=>r});var n=i(5298);const s="2.0.99";var o,a,r;!function(e){e.Remove="tabRemove",e.Add="tabAdd",e.RequestOpen="tabOpen",e.RequestClose="tabClose",e.Change="tabChange",e.RequestStateChange="tabStateChange"}(o||(o={})),function(e){e.None="none",e.Default="default",e.Error="error"}(a||(a={})),function(e){e.Change="change"}(r||(r={}));var l,d=i(7644),h=i(10431),c=i(71238),p=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},u=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let b=l=class extends((0,d.z)((0,h.K)((0,c.j5)(n.OC)))){get value(){return this._value}set value(e){this._value!==e&&e>-1&&e<this._tab.length&&this._openNewTab(this._tab[e])}constructor(){super(),this.heading="",this.navigation=!1,this.dense=!1,this.fullHeight=!1,this.lined=!1,this._value=-1,this._tab=[],this._prevIndex=0,this._shouldCenter=!1,this._tooltipText="",this._navigationClick=this._navigationClick.bind(this),this._tabRequestAddHandler=this._tabRequestAddHandler.bind(this),this._tabRequestOpenHandler=this._tabRequestOpenHandler.bind(this),this._onTabHover=this._onTabHover.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._mouseLeaveHandler=this._mouseLeaveHandler.bind(this),this._tabRequestStateHandler=this._tabRequestStateHandler.bind(this),this.addEventListener(o.Add,this._tabRequestAddHandler),this.addEventListener(o.RequestOpen,this._tabRequestOpenHandler),this.addEventListener("focusout",(()=>this._focusedElement=null)),this.addEventListener("keydown",this._handleKeydown),this.addEventListener(o.Change,(()=>this.requestUpdate())),this.addEventListener(o.RequestStateChange,this._tabRequestStateHandler)}connectedCallback(){this.style.setProperty("display","none");const e=[];e.push({module:()=>i.e(1734).then(i.bind(i,51734)),elem:["TooltipService","TooltipServiceDelay"]}),l.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")}))}disconnectedCallback(){this._panelWrapper&&this._panelWrapper.removeEventListener("mousedown",this._mouseDownHandler),this.removeEventListener("keydown",this._handleKeydown),this.removeEventListener("focusout",(()=>this._focusedElement=null)),document.removeEventListener("mouseup",this._mouseUpHandler),document.removeEventListener("mousemove",this._mouseMoveHandler),this._uninstallResizeObserver(this._panelDiv),super.disconnectedCallback()}firstUpdated(){this._tab.forEach((e=>{e.open&&(this._prevIndex=e.index)})),this._installResizeObserver(this._panelDiv)}update(e){super.update(e)}render(){const[e,t]=(0,n.Yh)(this.tagName.toLowerCase(),{navigation:this.navigation,fullHeight:this.fullHeight,dense:this.dense,lined:this.lined}),i=this._tab.map(((t,i)=>this._addView(e,t,i))),s=n.qy`<${l.TooltipService.tag} delay="${l.TooltipServiceDelay.Short}" class="${e}-tooltip" location="top-right"><span>${this._tooltipText}</span></${l.TooltipService.tag}>`,o=this.heading?n.qy`<div class="${e}-heading">${this.heading}</div>`:n.qy``;return n.qy`
            <div class="${t}">
                <div class="${e}-p-wrapper">
                    <div class="${e}-left">${o}</div>
                    <div class="${e}-panel">
                        ${s}
                        <div class="${e}-tabs">${i}</div>
                        <div class="${e}-right">
                            <slot name=${l.BUTTON_SLOT}></slot>
                        </div>
                    </div>
                </div>
                <div class="${e}-content">
                    <slot></slot>
                </div>
            </div>
        `}_resizeObserverElem(){return this._panelDiv}_resizeObserverCallback(e){e.forEach((e=>{e.contentRect.width<this._tabsDiv.scrollWidth?(this._panelWrapper.addEventListener("mousedown",this._mouseDownHandler),this._panelWrapper.addEventListener("mouseup",this._mouseLeaveHandler),this._panelWrapper.addEventListener("mouseleave",this._mouseLeaveHandler),this._panelDiv.style.cursor="grab",this._shouldCenter=!0):(this._panelWrapper.removeEventListener("mousedown",this._mouseDownHandler),this._panelWrapper.removeEventListener("mouseup",this._mouseLeaveHandler),this._panelWrapper.removeEventListener("mouseleave",this._mouseLeaveHandler),this._panelDiv.style.cursor="unset",this._shouldCenter=!1)}))}_enterLeft(e){const t=e.querySelector('div[class$="-button-border"]'),i=l.animations.enter.fromLeft;(t.animate?t.animate(i,{duration:200,iterations:1}):{onfinish:void 0}).onfinish=()=>{}}_enterRight(e){const t=e.querySelector('div[class$="-button-border"]'),i=l.animations.enter.fromRight;(t.animate?t.animate(i,{duration:200,iterations:1}):{onfinish:void 0}).onfinish=()=>{}}_exitLeft(e){const t=e.querySelector('div[class$="-button-border"]'),i=l.animations.enter.exitLeft;(t.animate?t.animate(i,{duration:150,iterations:1}):{onfinish:void 0}).onfinish=()=>{}}_exitRight(e){const t=e.querySelector('div[class$="-button-border"]'),i=l.animations.enter.exitRight;(t.animate?t.animate(i,{duration:150,iterations:1}):{onfinish:void 0}).onfinish=()=>{}}_addView(e,t,i){var s,o;const r=null!==(s=t.heading)&&void 0!==s?s:"Tab "+i,l=null!==(o=t.tooltip)&&void 0!==o?o:r,d=t.notificationType===a.Default?"default":"error",h=t.notificationType!==a.None?n.qy`<div class="${e}-button-notification-${d}"></div>`:null,c=t.open?"open":"closed",p=t.disabled?"disabled":c,u=t.error?"error":"";return n.qy` <button
            title="${l}"
            tabindex=${t.disabled||0!==i?-1:0}
            custom-disabled="${p}"
            ?disabled="${t.disabled}"
            has-error="${u}"
            @mouseover="${e=>this._handleMouseOver(e,t,i)}"
            class="${e}-button  ${e}-button-${p}"
            @click="${t.open||t.disabled?null:()=>this._navigationClick(i)}"
        >
            ${h}
            <div class="${e}-button-text">${r}</div>
            <div class="${e}-button-border"></div>
        </button>`}_handleKeydown(e){var t;if(e.target===this){const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("button"),n=[].slice.call(i),s=[];n.forEach((e=>{"disabled"===e.getAttribute("custom-disabled")&&s.push(e)})),s.forEach((e=>{const t=n.indexOf(e);n.splice(t,1)})),"ArrowRight"===e.key?this._handleArrowRight(e,n):"ArrowLeft"===e.key&&this._handleArrowLeft(e,n)}}_handleArrowRight(e,t){e.preventDefault();let i=this._focusedElement?t.indexOf(this._focusedElement):0;t.length<=i+1&&(i=-1),t[i+1].focus(),t[i+1].tabindex=0,this._focusedElement=t[i+1],t[i>=0?i:0].tabindex=-1}_handleArrowLeft(e,t){e.preventDefault();let i=this._focusedElement?t.indexOf(this._focusedElement):0;i-1<0&&(i=t.length),t[i-1].focus(),t[i-1].tabindex=0,this._focusedElement=t[i-1],t[i<=t.length-1?i:t.length-1].tabindex=-1}_handleMouseOver(e,t,i){t.disabledTooltipText&&t.disabled?this._onTabHover(e,t.disabledTooltipText,i):t.tooltipText&&this._onTabHover(e,t.tooltipText,i)}_onTabHover(e,t,i){e.target instanceof HTMLButtonElement&&(this._tooltipText=t,this.requestUpdate(),e.target.id="tooltip"+i,this._tooltipElement.objectId="tooltip"+i)}_navigationClick(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("button"),n=[].slice.call(i),s=n[e];if(e>=this._prevIndex?(this._exitRight(n[this._prevIndex]),this._enterLeft(s)):(this._exitLeft(n[this._prevIndex]),this._enterRight(s)),this._shouldCenter){let t=0;for(let i=0;i<e;i++)t+=n[i].getBoundingClientRect().width;e>0&&(t-=40),this._tabsDiv.scroll({left:t,top:0,behavior:"smooth"})}this._value<0&&(this._value=0),this._tab[this._value].fold((()=>{this._prevIndex=e,this._tab[e].expand((()=>{this._setValue(e),this.notifyResize()}))})),this.requestUpdate()}_tabRequestAddHandler(e){e.stopPropagation();const t=e.detail.element;this._tab.indexOf(t)>-1||(t.open?this._tab.forEach((e=>{e.open&&e.fold((()=>t.expand(null)))})):0===this._tab.length&&t.expand(null),t.index>-1?this._tab.splice(t.index,0,t):(this._tab.push(t),t.index=1===this._tab.length?0:this._tab[this._tab.length-2].index+1),this._tab.sort(((e,t)=>e.index<t.index?-1:1)),t.open&&this._setValue(t.index),t.addEventListener(o.Remove,(e=>this._tabRequestRemoveHandler(e,t)),{once:!0}),this.requestUpdate())}_tabRequestRemoveHandler(e,t){e.stopPropagation();const i=this._tab.indexOf(t);i>-1&&this._tab.splice(i,1),t.open&&this._tab.length>0&&this._tab[0]&&(this._tab[0].expand(null),this._setValue(0)),this.requestUpdate()}_setValue(e){this.setAttribute("value",""+e),this._value=e}_tabRequestOpenHandler(e){const t=e;return this._openNewTab(t.detail.element),e.preventDefault(),!1}_openNewTab(e){const t=this._value,i=t>-1?this._tab[t]:null;i?this.dispatch(r.Change,{prev:t,value:this._tab.indexOf(e)})&&i.fold((()=>{e.expand(),this._setValue(this._tab.indexOf(e))})):(e.expand(),this._setValue(this._tab.indexOf(e))),this.requestUpdate()}_mouseDownHandler(e){this._tabsDiv.style.userSelect="none",this._panelDiv.style.cursor="grabbing",document.addEventListener("mousemove",this._mouseMoveHandler),document.addEventListener("mouseup",this._mouseUpHandler),this._startX=e.pageX-this._tabsDiv.offsetLeft,this._scrollLeft=this._tabsDiv.scrollLeft}_mouseMoveHandler(e){const t=e.pageX-this._tabsDiv.offsetLeft-this._startX;this._tabsDiv.scrollTo({left:this._scrollLeft-t})}_mouseLeaveHandler(){this._panelDiv.style.cursor="grab",this._tabsDiv.style.userSelect="unset",this._panelWrapper.removeEventListener("mousemove",this._mouseMoveHandler)}_mouseUpHandler(){this._tabsDiv.style.userSelect="unset",document.removeEventListener("mousemove",this._mouseMoveHandler),document.removeEventListener("mouseup",this._mouseUpHandler)}_tabRequestStateHandler(){this.requestUpdate()}};b.BUTTON_SLOT="button-slot",b.animations={enter:{exitLeft:[{transform:"scaleX(1)",transformOrigin:"center left",backgroundColor:"#000"},{transform:"scaleX(0)",backgroundColor:"unset",transformOrigin:"center left"}],fromLeft:[{backgroundColor:"#9D9D9D"},{backgroundColor:"#000"}],fromRight:[{backgroundColor:"#9D9D9D"},{backgroundColor:"#000"}],exitRight:[{transform:"scaleX(1)",backgroundColor:"#000",transformOrigin:"center right"},{transform:"scaleX(0)",backgroundColor:"unset",transformOrigin:"center right"}]}},p([(0,n.MZ)({type:String,reflect:!0}),u("design:type",Object)],b.prototype,"heading",void 0),p([(0,n.MZ)({type:Boolean,converter:n.Bs}),u("design:type",Object)],b.prototype,"navigation",void 0),p([(0,n.MZ)({type:Boolean,converter:n.Bs}),u("design:type",Object)],b.prototype,"dense",void 0),p([(0,n.MZ)({type:Number,reflect:!0}),u("design:type",Object),u("design:paramtypes",[Object])],b.prototype,"value",null),p([(0,n.MZ)({type:Boolean,converter:n.Bs,reflect:!0,attribute:"full-height"}),u("design:type",Object)],b.prototype,"fullHeight",void 0),p([(0,n.MZ)({type:Boolean,converter:n.Bs,reflect:!0}),u("design:type",Object)],b.prototype,"lined",void 0),p([(0,n.P)('div[class$="-tabs"]'),u("design:type",Object)],b.prototype,"_tabsDiv",void 0),p([(0,n.P)('div[class*="-panel"]'),u("design:type",Object)],b.prototype,"_panelDiv",void 0),p([(0,n.P)('div[class*="-p-wrapper"]'),u("design:type",Object)],b.prototype,"_panelWrapper",void 0),p([(0,n.P)('[class*="-tooltip"]'),u("design:type",Object)],b.prototype,"_tooltipElement",void 0),p([(0,n.wk)(),u("design:type",Array)],b.prototype,"_tab",void 0),b=l=p([(0,n.eV)({tagName:"tabs",styles:e=>{const{root:t,child:i,is:s}=(0,n.zz)(e);return[n.iF,n.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}:host{display:block;width:100%;}:host([full-height]){height:100%;}${s("fullHeight")}{display:flex;flex-direction:column;height:100%;}${s("fullHeight")} ${i("content")}{flex-grow:1;height:calc(100% - 40px); }${t}{width:100%;}${i("panel")}{display:none;}${i("content")}{margin-top:8px;}${s("navigation")} ${i("panel")}{width:100%;margin:0;padding:0;display:flex;flex-direction:row;min-height:40px;align-items:flex-end;overflow:auto;justify-content:flex-end;}${i("p-wrapper")}{display:flex;flex-direction:row;align-items:center;width:100%;}${i("tabs")}{flex-grow:2;max-width:100%;display:flex;flex-direction:row;overflow:hidden;min-height:40px;}${i("left")}{display:flex;flex-direction:row;justify-content:end;align-items:center;height:100%;}${i("right")}{display:flex;flex-grow:2;flex-direction:row;justify-content:end;align-items:center;height:100%;}${i("button")}{display:flex;flex-direction:column;justify-content:end;align-items:center;position:relative;background:0;outline:0;border:0;font-size:14px;user-select:none;height:36px;padding:0;}${i("button")}[has-error="error"] ${i("button-text")}{color:${(0,n.Jy)("color_traffic_light_1")};}${i("button-open")}[has-error="error"] ${i("button-border")}{background-color:${(0,n.Jy)("color_traffic_light_1")} !important;}${i("button-error")}{cursor:pointer;color:${(0,n.Jy)("color_traffic_light_1")};}${i("button")}:last-child{padding-right:10px;}${i("button-text")}{margin-left:16px;font-weight:500;margin-right:16px;white-space:nowrap;}${i("button-border")}{height:3px;width:calc(100% - 32px);background:0;margin-bottom:0;margin-top:5px;}${s("dense")} ${i("button-notification-default")}{top:37.5%;transform:translateY(-37.5%);}${s("dense")} ${i("button-notification-error")}{top:37.5%;transform:translateY(-37.5%);}${i("button-notification-default")}{position:absolute;align-self:flex-end;margin-right:10px;top:52.5%;transform:translateY(-52.5%);right:-4px;height:7px;width:7px;background:black;}${i("button-notification-error")}{position:absolute;align-self:flex-end;margin-right:10px;top:52.5%;transform:translateY(-52.5%);right:-4px;height:7px;width:7px;background:${(0,n.Jy)("color_traffic_light_1")};}${s("lined")} ${i("tabs")}{border-bottom:1px solid ${(0,n.Jy)("color_secondary_3")};align-items:center;}${s("lined")} ${i("button")}{height:40px;}${s("lined")} ${i("button-border")}{margin-top:0px;width:100%;height:2px;transform:none;align-self:flex-end;}${s("lined")} ${i("button-text")}{height:100%;display:flex;align-items:center;}${s("lined")} ${i("button-closed")}:nth-child(1) ${i("button-border")}{width:100%;transform:none;}${s("lined")} ${i("button-open")}:nth-child(1) ${i("button-border")}{width:100%;transform:none;}${s("lined")} ${i("button-open")}:nth-child(1) ${i("button-border")}{width:100%;transform:none;}${s("lined")} ${i("button-closed")}:nth-child(1) ${i("button-text")}{margin-left:16px;}${s("lined")} ${i("button-error")}:nth-child(1) ${i("button-text")}{margin-left:16px;}${s("lined")} ${i("button-open")}:nth-child(1) ${i("button-text")}{margin-left:16px;}${s("lined")} ${i("button")}:last-child{padding-right:0px;}${s("dense")} ${i("button")}{height:24px;}${s("dense")} ${i("button-border")}{margin-top:2px;}${i("heading")}{display:flex;padding-right:10px;}${i("button-open")} ${i("button-border")}{background-color:${(0,n.Jy)("color_primary_3")};}${i("button-open")} ${i("button-text")}{color:${(0,n.Jy)("color_primary_3")};}${i("button-closed")}:not([disabled]){color:${(0,n.Jy)("color_secondary_8")};}${i("button-closed")}:not([disabled]):hover ${i("button-border")}{background-color:${(0,n.Jy)("color_secondary_8")};}${i("button-closed")}:not([disabled]):hover{cursor:pointer;}${i("button-closed")}:nth-child(1) ${i("button-text")}{margin-left:0;}${i("button-error")}:nth-child(1) ${i("button-text")}{margin-left:0;}${i("button-open")}:nth-child(1) ${i("button-text")}{margin-left:0;}${i("button-closed")}:nth-child(1) ${i("button-border")}{width:calc(100% - 16px);transform:translateX(-8px);}${i("button-open")}:nth-child(1) ${i("button-border")}{width:calc(100% - 16px);transform:translateX(-8px);}${i("button-error")}:nth-child(1) ${i("button-border")}{width:calc(100% - 16px);transform:translateX(-8px);}${i("button-disabled")}{color:${(0,n.Jy)("color_secondary_4")};}${i("button")}:focus-visible:before{content:' ';display:block;position:absolute;inset:0;border:2px dashed black;}::slotted([slot='button-slot']){padding-left:24px;}`]},version:s}),u("design:paramtypes",[])],b);var _=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},f=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let v=class extends((0,d.z)(n.OC)){constructor(){super(...arguments),this.index=-1,this.disabledTooltipText="",this.tooltipText="",this.tabResolver=void 0,this._disabled=!1,this._notificationType=a.None,this._open=!1,this._error=!1,this._withContent=!1}get heading(){return this._heading}set heading(e){if(this._heading!==e){const t=this._heading;this._heading=e,this._dispatchEvent(o.RequestStateChange,{element:this})||(this._heading=t)}}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._dispatchEvent(o.RequestStateChange,{element:this})||(this._disabled=!e))}get notificationType(){return this._notificationType}set notificationType(e){this._notificationType!==e&&(this._notificationType=e,this._dispatchEvent(o.Change,{element:this}))}get error(){return this._error}set error(e){this._error!==e&&(this._error=e,this._dispatchEvent(o.RequestStateChange,{element:this})||(this._error=!e))}get open(){return this._open}set open(e){this._open!==e&&this._dispatchEvent(e?o.RequestOpen:o.RequestClose,{element:this})&&(e?this.expand(null):this.fold(null))}connectedCallback(){super.connectedCallback(),this._slotChanged=this._slotChanged.bind(this),this._dispatchEvent(o.Add,{element:this})}disconnectedCallback(){this._dispatchEvent(o.Remove),super.disconnectedCallback()}fold(e){this._open=!1,this.removeAttribute("open"),this.requestUpdate(),e&&e(null)}async expand(e){this._withContent||void 0===this.tabResolver?(this._open=!0,this.setAttribute("open","true"),this.requestUpdate(),e&&(await this.updateComplete,e(null))):this.tabResolver(this).then((t=>{this._tabResolutionCallback(t,e)}))}async firstUpdated(e){super.firstUpdated(e),window.requestAnimationFrame((()=>{this._setupSlot(this._slot)}))}render(){const[,e]=(0,n.Yh)(this.tagName.toLowerCase(),{open:this.open});return n.qy` <div class="${e}"><slot @slotchange="${this._slotChanged}"></slot></div> `}_dispatchEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.dispatch(e,t)}_slotChanged(e){const t=e.target;this._setupSlot(t)}_setupSlot(e){const t=e&&e.assignedNodes().filter((e=>1===e.nodeType));this._withContent=t&&t.length>0}_tabResolutionCallback(e,t){"string"===typeof e?this.insertAdjacentHTML("beforeend",e):e instanceof HTMLElement&&this.appendChild(e),this._withContent=!0,this.expand(t)}};_([(0,n.MZ)({type:String}),f("design:type",Object),f("design:paramtypes",[Object])],v.prototype,"heading",null),_([(0,n.MZ)({type:Number,reflect:!0}),f("design:type",Object)],v.prototype,"index",void 0),_([(0,n.MZ)({type:Boolean,converter:n.Bs}),f("design:type",Object),f("design:paramtypes",[Object])],v.prototype,"disabled",null),_([(0,n.MZ)({type:Boolean}),f("design:type",Object)],v.prototype,"tooltip",void 0),_([(0,n.MZ)({type:String,reflect:!1,attribute:"disabled-tooltip-text"}),f("design:type",Object)],v.prototype,"disabledTooltipText",void 0),_([(0,n.MZ)({type:String,reflect:!1,attribute:"tooltip-text"}),f("design:type",Object)],v.prototype,"tooltipText",void 0),_([(0,n.MZ)({type:Function}),f("design:type",Function)],v.prototype,"tabResolver",void 0),_([(0,n.MZ)({type:a,attribute:"notification-type",reflect:!0}),f("design:type",String),f("design:paramtypes",[String])],v.prototype,"notificationType",null),_([(0,n.MZ)({type:Boolean,converter:n.Bs}),f("design:type",Object),f("design:paramtypes",[Object])],v.prototype,"error",null),_([(0,n.MZ)({type:Boolean,converter:n.Bs}),f("design:type",Object),f("design:paramtypes",[Object])],v.prototype,"open",null),_([(0,n.P)("slot"),f("design:type",HTMLSlotElement)],v.prototype,"_slot",void 0),_([(0,n.wk)(),f("design:type",Object)],v.prototype,"_withContent",void 0),v=_([(0,n.eV)({tagName:"tab",styles:e=>{const{root:t,is:i}=(0,n.zz)(e);return[n.iF,n.AH`@keyframes expand{from{opacity:0;}to{opacity:1;}}:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}${t}{display:none;}${i("open")}{animation:expand 0.5s;display:flex;height:100%;}`]},version:s})],v)},71238:(e,t,i)=>{i.d(t,{KC:()=>s,j5:()=>a});const n="requestresizenotifications",s="resize",o=new Set,a=e=>class extends e{get _parentResizable(){return this.__parentResizable}set _parentResizable(e){const t=this.__parentResizable;this.__parentResizable=e,t!==e&&this._parentResizableChanged(e)}get _notifyingDescendant(){return this.__notifyingDescendant}set _notifyingDescendant(e){this.__notifyingDescendant=e}constructor(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];super(t),this.isAttached=!1,this._interestedResizables=[],this._notifyingDescendant=!1,this._onIronRequestResizeNotifications=this._onIronRequestResizeNotifications.bind(this),this.notifyResize=this.notifyResize.bind(this),this._onDescendantIronResize=this._onDescendantIronResize.bind(this),this.addEventListener(n,this._onIronRequestResizeNotifications,!0)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,setTimeout((()=>{this._requestResizeNotifications()}))}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this.notifyResize)),this._parentResizable=null}notifyResize(){this.isAttached&&(this._interestedResizables.forEach((e=>{this.resizerShouldNotify(e)&&this._notifyDescendant(e)})),this._fireResize())}assignParentResizable(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))}stopResizeNotificationsFor(e){const t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))}_subscribeIronResize(e){e.addEventListener(s,this._onDescendantIronResize)}_unsubscribeIronResize(e){e.removeEventListener(s,this._onDescendantIronResize)}resizerShouldNotify(e){return!0}_onDescendantIronResize(e){this._notifyingDescendant?e.stopPropagation():this._fireResize()}_fireResize(){this.dispatchEvent(new CustomEvent(s))}_onIronRequestResizeNotifications(e){const t=e.composedPath&&e.composedPath();let i;i=t||(e.path||[]);const n=i[0];n!==this&&(n.assignParentResizable(this),this._notifyDescendant(n),e.stopPropagation())}_parentResizableChanged(e){e&&window.removeEventListener("resize",this.notifyResize)}_notifyDescendant(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)}_requestResizeNotifications(){if(this.isAttached)if("loading"===document.readyState){const e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((e=>{e!==this&&e._findParent()})):(o.forEach((e=>{e!==this&&e._findParent()})),window.addEventListener("resize",this.notifyResize),this.notifyResize())}_findParent(){this.assignParentResizable(null),this.dispatchEvent(new CustomEvent(n,{bubbles:!0,cancelable:!0,composed:!0})),this._parentResizable?o.delete(this):o.add(this)}}}}]);
//# sourceMappingURL=5555.2483461a.chunk.js.map