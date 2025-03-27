"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[3716],{5588:(t,e,i)=>{i.d(e,{BB:()=>s,GP:()=>r,Tz:()=>o});const s=window.requestIdleCallback||function(t){return setTimeout((()=>{t({didTimeout:!1,timeRemaining:()=>Math.max(0,50)})}),50)},r=window.cancelIdleCallback||clearTimeout;function o(t){let e,i,o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return function(){const n=arguments,h=()=>{e=null,o=t(...n)};return"idle"===a?(i&&r(i),i=s((()=>{o=t(...n)}))):(clearTimeout(e),e=setTimeout(h,a)),o}}},43716:(t,e,i)=>{i.r(e),i.d(e,{GridLayout:()=>j});var s=i(5298);const r=(t,e)=>t.key!==e.key&&(!(t.posX+t.width<=e.posX)&&(!(t.posX>=e.posX+e.width)&&(!(t.posY+t.height<=e.posY)&&t.posY<e.posY+e.height))),o=(t,e)=>{for(const i of t)if(r(i,e))return i},a=(t,e,i)=>{e.posY+=1;for(let s=t.map((t=>t.key)).indexOf(e.key)+1;s<t.length;s++){const o=t[s];if(o.posY>e.posY+e.height)break;r(e,o)&&a(t,o,i+e.height)}e.posY=i},n=t=>t&&t.slice(0).sort((function(t,e){return t.posY>e.posY||t.posY===e.posY&&t.posX>e.posX?1:t.posY===e.posY&&t.posX===e.posX?0:-1})),h=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t.dispatchEvent(new CustomEvent(e,{detail:i}))},d=(t,e,i)=>{if(1===t.width){const t=Math.min(...e);return{posX:e.indexOf(t),posY:t}}const s=[],r=i+1-t.width;for(let a=0;a<r;a++){const i=e.slice(a,a+t.width);s[a]=Math.max(...i)}const o=Math.min(...s);return{posX:s.indexOf(o),posY:o}},l=(t,e,i,s,r)=>{if(r){r=!1;const a={posX:i.posX,posY:Math.max(i.height-e.posY,0),width:i.width,height:i.height,key:"-1"};if(!o(t,a))return g(t,i,void 0,a.posY,s,r)}return g(t,i,void 0,i.posY+1,s,r)},g=(t,e,i,s,o,a)=>{if(e.posY===s&&e.posX===i)return t;const h=e.posY;void 0!==i&&(e.posX=i),void 0!==s&&(e.posY=s),e.hasMoved=!0;let d=n(t);void 0!==s&&h>=s&&(d=d.reverse());const g=((t,e)=>t.filter((t=>r(t,e))))(d,e),p=t.findIndex((t=>t.key===e.key));t[p]=e;for(let r=0,n=g.length;r<n;r++){const i=g[r];i.hasMoved||(t=l([...t],e,i,o,a))}return t},p="2.0.22",c=t=>{if(!t||"object"!=typeof t)return t;if("[object Date]"===Object.prototype.toString.call(t))return new Date(t.getTime());if(Array.isArray(t))return t.map(c);const e={};return Object.keys(t).forEach((function(i){e[i]=c(t[i])})),e},u=(t,e)=>{if(t.type.startsWith("touch")){if(void 0===e)return;const i=((t,e)=>{const i=t.targetTouches&&Array.prototype.find.call(t.targetTouches,(t=>e===t.identifier))||t.changedTouches&&Array.prototype.find.call(t.changedTouches,(t=>e===t.identifier));return{x:i?i.clientX:0,y:i?i.clientY:0}})(t,e);return{x:i.x,y:i.y}}return{x:t.clientX,y:t.clientY}};let y="";const m=t=>"function"===typeof t||"[object Function]"===Object.prototype.toString.call(t),_=(t,e)=>(y||(y=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find((e=>m(t[e])))),!(!y||!m(t[y]))&&(y&&t[y](e)));var f=function(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},b=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let v=class extends s.OC{constructor(){super(...arguments),this.disabled=!1,this._dragging=!1}firstUpdated(){this.addEventListener("mousedown",this._dragStart.bind(this),{capture:!0,passive:!1}),this.addEventListener("touchstart",this._dragStart.bind(this),{capture:!0,passive:!1}),document.addEventListener("mousemove",this._drag.bind(this),{capture:!0,passive:!1}),document.addEventListener("touchmove",this._drag.bind(this),{capture:!0,passive:!1}),document.addEventListener("mouseup",this._dragEnd.bind(this),{capture:!0,passive:!1}),document.addEventListener("touchcancel",this._dragEnd.bind(this),{capture:!0,passive:!1}),document.addEventListener("touchend",this._dragEnd.bind(this),{capture:!0,passive:!1}),this.addEventListener("container-rendered",this._handleContainer.bind(this))}render(){return s.qy`<slot></slot>`}_initTempHandle(){return this.handle?this.handle:this._dragHandle}_dragStart(t){var e;if(!t.composedPath().find((t=>"BUTTON"===t.tagName))&&!this.disabled){const i=this._initTempHandle(),s=i?((t,e,i)=>{const s=t.composedPath().reverse();for(;s.length;){const t=s.pop();if(_(t,e))return t;if(t===i)return null}return null})(t,i,this.offsetParent):null;if(null!==s){t.preventDefault(),t.stopPropagation(),this._draggable&&(this._draggableHeader.removeAttribute("dropped"),this._draggableHeader.setAttribute("lifted","true")),"touchstart"===t.type&&(this._touchIdentifier=(e=t).targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:0);const i=u(t,this._touchIdentifier);i&&(this.startX=i.x,this.startY=i.y,this._dragging=!0,h(this,"dragStart",{startX:this.startX,startY:this.startY,node:s}))}}}_drag(t){if(this._dragging&&!this.disabled){t.preventDefault(),t.stopPropagation();const e=u(t,this._touchIdentifier);if(!e)return;let i=e.x-this.startX,s=e.y-this.startY;this.grid&&(i=Math.round(i/this.grid[0])*this.grid[0],s=Math.round(s/this.grid[1])*this.grid[1]),(i||s)&&h(this,"dragging",{deltaX:i,deltaY:s})}}_dragEnd(t){if(this._dragging&&!this.disabled){t.preventDefault(),t.stopPropagation();const e=u(t,this._touchIdentifier);if(!e)return;const i=e.x-this.startX,s=e.y-this.startY,r=i<5&&i>-5&&s<5&&s>-5;this._draggableHeader&&this._draggable.clickable&&r&&this._draggableHeader.setAttribute("clicked","true"),this._touchIdentifier=void 0,this._dragging=!1,this._draggable&&(this._draggableHeader.removeAttribute("lifted"),this._draggableHeader.setAttribute("dropped","true")),h(this,"dragEnd")}}_handleContainer(t){t.detail.item.draggable=!0,this._draggableHeader=t.detail.item.shadowRoot.querySelector('[class$="-header"]'),this._draggableHeader&&(this._dragHandle="."+this._draggableHeader.className),this._draggable=t.detail.item}};f([(0,s.MZ)({type:Array}),b("design:type",Array)],v.prototype,"grid",void 0),f([(0,s.MZ)({type:Boolean,reflect:!0}),b("design:type",Object)],v.prototype,"disabled",void 0),f([(0,s.MZ)(),b("design:type",String)],v.prototype,"handle",void 0),v=f([(0,s.eV)({tagName:"grid-layout-draggable",styles:()=>[s.iF,s.AH``],version:p})],v);var w,P=function(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},X=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let $=w=class extends s.OC{constructor(){super(...arguments),this.disabled=!1}connectedCallback(){w.subRegister(v),super.connectedCallback()}render(){return s.qy`
            ${this.disabled?"":s.qy`
                      <${v.tag}
                          .handle=${this.handle}
                          @dragging=${this._resize}
                          @dragStart=${this._resizeStart}
                          @dragEnd=${this._resizeEnd}
                      >
                          <slot></slot>
                      </${v.tag}>
                  `}
        `}_resizeStart(t){const e=t;e.preventDefault(),e.stopPropagation(),this.startWidth=this.clientWidth,this.startHeight=this.clientHeight;const i=e.detail&&e.detail.node;this._resizeKey=i&&["bc","bl","cl","cr","tr","tc","tl"].find((t=>i.matches(`[class*="-${t}"]`)))||"br",h(this,"resizeStart")}_resize(t){if(t.preventDefault(),t.stopPropagation(),void 0!==this.startWidth&&void 0!==this.startHeight){const{deltaX:e,deltaY:i}=t.detail;0===i&&0===e||h(this,"resize",Object.assign(Object.assign({},this._getResizeProps(this.startWidth,this.startHeight,e,i)),{deltaX:e,deltaY:i}))}}_getResizeProps(t,e,i,s){switch(this._resizeKey){case"bc":return{width:t,height:e+s,dragX:!1,dragY:!1};case"bl":return{width:t-i,height:e+s,dragX:!0,dragY:!0};case"cr":return{width:t+i,height:e,dragX:!1,dragY:!1};case"cl":return{width:t-i,height:e,dragX:!0,dragY:!1};case"tr":return{width:t+i,height:e-s,dragX:!1,dragY:!0};case"tc":return{width:t,height:e-s,dragX:!1,dragY:!0};case"tl":return{width:t-i,height:e-s,dragX:!0,dragY:!0};default:return{width:t+i,height:e+s,dragX:!1,dragY:!1}}}_resizeEnd(t){t.preventDefault(),t.stopPropagation(),this.startWidth=void 0,this.startHeight=void 0,h(this,"resizeEnd")}};P([(0,s.MZ)({attribute:!1}),X("design:type",String)],$.prototype,"handle",void 0),P([(0,s.MZ)({type:Boolean}),X("design:type",Object)],$.prototype,"disabled",void 0),$=w=P([(0,s.eV)({tagName:"grid-layout-resizable",styles:()=>[s.iF,s.AH`
            :host {
                position: relative;
                display: block;
                height: 100%;
            }
        `],version:p})],$);var z,H=function(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},M=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let Y=z=class extends s.OC{constructor(){super(...arguments),this.margin=[0,0],this.containerPadding=[0,0],this.minWidth=1,this.minHeight=1,this.isDraggable=!0,this.isResizable=!0,this._isDragging=!1,this._isResizing=!1,this._firstLayoutFinished=!1}connectedCallback(){z.subRegister(v),z.subRegister($),super.connectedCallback()}updated(t){if(t.has("parentWidth")||t.has("margin")||t.has("columns")||t.has("containerPadding")||t.has("minHeight")||t.has("minWidth")||t.has("maxWidth")||t.has("maxHeight")||t.has("rowHeight")||t.has("posX")||t.has("_isDragging")&&!this._isDragging){this._columnWidth=(this.parentWidth-this.margin[0]*(this.columns-1)-2*this.containerPadding[0])/this.columns,this._fullColumnWidth=this._columnWidth+this.margin[0],this._fullRowHeight=this.rowHeight+this.margin[1],this._minWidthPX=this._fullColumnWidth*this.minWidth-this.margin[0];const t=void 0!==this.maxWidth?Math.min(this.maxWidth,this.columns-this.posX):this.columns-this.posX;this._maxWidthPX=this._fullColumnWidth*t-this.margin[0],this._minHeightPX=this._fullRowHeight*this.minHeight-this.margin[1],this._maxHeightPX=this._fullRowHeight*(this.maxHeight||1/0)-this.margin[1]}this._isDragging||(this._itemLeftPX=Math.round(this.posX*this._fullColumnWidth+this.containerPadding[0]),this._itemTopPX=this.parentWidth?Math.round(this.posY*this._fullRowHeight+this.containerPadding[1]):0,this._isResizing||(this._itemWidthPX=this.width*this._columnWidth+Math.max(0,this.width-1)*this.margin[0],this._itemHeightPX=this.height*this.rowHeight+Math.max(0,this.height-1)*this.margin[1],!this._firstLayoutFinished&&this.parentWidth>0&&setTimeout((()=>this._firstLayoutFinished=!0),200)))}render(){const[t,e]=(0,s.Yh)(this.tagName.toLowerCase(),{dragging:this._isDragging,resizing:this._isResizing,finished:this._firstLayoutFinished});let i=s.qy`<slot></slot>`;return this.isDraggable&&(i=s.qy`
                <${v.tag}
                    class='${t}-drag'
                    .handle=${this.dragHandle}
                    @dragStart=${this._dragStart}
                    @dragging=${this._drag}
                    @dragEnd=${this._dragEnd}
                >
                    ${i}
                </${v.tag}>
            `),this.isResizable&&(i=s.qy`
                <${$.tag}
                    class='${t}-resize'
                    .handle=${this.resizeHandle}
                    @resizeStart=${this._resizeStart}
                    @resize=${this._resize}
                    @resizeEnd=${this._resizeEnd}
                >
                    ${i}
                </${$.tag}>
            `),s.qy`
            <div
                class="${e}"
                style="left: ${this._itemLeftPX}px;top: ${this._itemTopPX}px;width: ${this._itemWidthPX}px; height: ${this._itemHeightPX}px"
            >
                ${i}
            </div>
        `}_resizeStart(){this._isResizing=!0,this._isDragging=!1,this._initDragStart(),h(this,"resizeStart")}_resize(t){if(this._isResizing){let{width:e,height:i}=t.detail;const{deltaX:s,deltaY:r,dragX:o,dragY:a}=t.detail,n=this._calcDragPos(s,r);e=Math.max(this._minWidthPX,e),e=Math.min(this._maxWidthPX,e),i=Math.max(this._minHeightPX,i),i=Math.min(this._maxHeightPX,i),this._itemWidthPX=e,this._itemHeightPX=i;const d=Math.round((e+this.margin[0])/this._fullColumnWidth),l=Math.round((i+this.margin[1])/this._fullRowHeight);d===this.width&&l===this.height||h(this,"resize",{newWidth:d,newHeight:l,newPosX:o&&n?n.newPosX:void 0,newPosY:a&&n?n.newPosY:void 0})}}_resizeEnd(){this._isResizing=!1,h(this,"resizeEnd")}_dragStart(){this.isDraggable&&(this._initDragStart(),this._isDragging=!0,h(this,"dragStart"))}_initDragStart(){const t=this.gridItem.getBoundingClientRect(),e=this.offsetParent.getBoundingClientRect();this._startLeft=t.left-e.left,this._startTop=t.top-e.top,this._startPosX=this.posX,this._startPosY=this.posY}_drag(t){if(void 0!==this._startPosX&&void 0!==this._startPosY&&void 0!==this._startLeft&&void 0!==this._startTop&&this.isDraggable){const{deltaX:e,deltaY:i}=t.detail,s=this._calcDragPos(e,i);s&&h(this,"dragging",s)}}_calcDragPos(t,e){this._itemLeftPX=this._startLeft+t,this._itemTopPX=this._startTop+e;const i=Math.round(t/this._fullColumnWidth),s=Math.round(e/this._fullRowHeight);if(s||i){let t=this._startPosX+i,e=this._startPosY+s;return t=Math.max(0,t),e=Math.max(0,e),t=Math.min(this.columns-this.width,t),{newPosX:t,newPosY:e}}return null}_dragEnd(){this._isDragging=!1,this._startLeft=void 0,this._startTop=void 0,this._startPosX=void 0,this._startPosY=void 0,h(this,"dragEnd")}};H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"width",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"height",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"posX",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"posY",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"rowHeight",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"columns",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"parentWidth",void 0),H([(0,s.MZ)({type:Array}),M("design:type",Array)],Y.prototype,"margin",void 0),H([(0,s.MZ)({type:Array}),M("design:type",Array)],Y.prototype,"containerPadding",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Object)],Y.prototype,"minWidth",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Object)],Y.prototype,"minHeight",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"maxWidth",void 0),H([(0,s.MZ)({type:Number}),M("design:type",Number)],Y.prototype,"maxHeight",void 0),H([(0,s.MZ)({type:Boolean}),M("design:type",Object)],Y.prototype,"isDraggable",void 0),H([(0,s.MZ)({type:Boolean}),M("design:type",Object)],Y.prototype,"isResizable",void 0),H([(0,s.MZ)({attribute:!1}),M("design:type",String)],Y.prototype,"resizeHandle",void 0),H([(0,s.MZ)({attribute:!1}),M("design:type",String)],Y.prototype,"dragHandle",void 0),H([(0,s.MZ)(),M("design:type",String)],Y.prototype,"key",void 0),H([(0,s.MZ)({type:Boolean}),M("design:type",Object)],Y.prototype,"_isDragging",void 0),H([(0,s.MZ)({type:Boolean}),M("design:type",Object)],Y.prototype,"_isResizing",void 0),H([(0,s.MZ)({type:Boolean}),M("design:type",Object)],Y.prototype,"_firstLayoutFinished",void 0),H([(0,s.P)("div"),M("design:type",HTMLElement)],Y.prototype,"gridItem",void 0),H([(0,s.wk)(),M("design:type",Number)],Y.prototype,"_itemTopPX",void 0),H([(0,s.wk)(),M("design:type",Number)],Y.prototype,"_itemLeftPX",void 0),H([(0,s.wk)(),M("design:type",Number)],Y.prototype,"_itemWidthPX",void 0),H([(0,s.wk)(),M("design:type",Number)],Y.prototype,"_itemHeightPX",void 0),Y=z=H([(0,s.eV)({tagName:"grid-layout-item",styles:t=>{const{root:e,is:i}=(0,s.zz)(t);return[s.iF,s.AH`
            ${e} {
                position: absolute;
                transition: all 250ms;
                z-index: auto;
                opacity: 0;
            }

            ${i("dragging")} {
                transition: none;
                z-index: 5;
            }

            ${i("resizing")} {
                transition-property: transform;
                z-index: 5;
                opacity: 0.8 !important;
            }

            ${i("finished")} {
                opacity: 1;
            }

            :host([placeholder]) div {
                background-color: ${(0,s.Jy)("color_primary_3")};
                opacity: 0.05;
                z-index: 1;
            }
        `]},version:p})],Y);var R,k=i(5588),x=function(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},O=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let j=R=class extends s.OC{constructor(){super(...arguments),this.layout=[],this.sortStyle="default",this.margin=[10,10],this.containerPadding=[20,20],this.rowHeight=30,this.columns=12,this.dragDisabled=!1,this.resizeDisabled=!1,this.resizing=!1,this.dragging=!1,this._width=0,this._layout=[]}get _layoutHeight(){const t=(t=>{let e=0;for(const i of t){const t=i.posY+i.height;e=t>e?t:e}return e})(this._layout);return t*this.rowHeight+(t-1)*this.margin[1]+2*this.containerPadding[1]}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect()}connectedCallback(){R.subRegister(Y),super.connectedCallback(),this.updateComplete.then((()=>this._attachObserver()))}updated(t){super.updated(t),t.has("layout")?this._setupLayout():t.has("columns")&&this._updateLayout(c(this.layout)),this.style.height=`${this._layoutHeight}px`}render(){var t;return(null===(t=this._layout)||void 0===t?void 0:t.length)?s.qy`
            ${(0,s.ux)(this._layout,(t=>t.key),(t=>{let e=this.itemRenderer&&this.itemRenderer(t.key);return e||(e=s.qy`<slot name="slot-item-${t.key}"></slot>`),s.qy`
                        <${Y.tag}
                            .width=${t.width}
                            .height=${t.height}
                            .posY=${t.posY}
                            .posX=${t.posX}
                            .minWidth=${t.minWidth||1}
                            .minHeight=${t.minHeight||1}
                            .maxWidth=${t.maxHeight}
                            .maxHeight=${t.maxHeight}
                            .key=${t.key}
                            .parentWidth=${this._width}
                            .columns=${this.columns}
                            .rowHeight=${this.rowHeight}
                            .margin=${this.margin}
                            .containerPadding=${this.containerPadding}
                            .isDraggable=${!this.dragDisabled}
                            .isResizable=${!this.resizeDisabled}
                            .resizeHandle=${this.resizeHandle}
                            .dragHandle=${this.dragHandle}
                            @resizeStart=${this._itemResizeStart}
                            @resize=${this._itemResize}
                            @resizeEnd=${this._itemResizeEnd}
                            @dragStart=${this._itemDragStart}
                            @dragging=${this._itemDrag}
                            @dragEnd=${this._itemDragEnd}
                        >
                            ${e}
                        </${Y.tag}>
                    `}))}
            ${this._renderPlaceHolder()}
        `:s.qy``}_setupLayout(){var t,e;this.layout&&(t=this.layout,e=this._layout,t===e||t.length===e.length&&!t.some(((t,i)=>{const s=e[i],r=Object.keys(t);return r.length!==Object.keys(s).length||r.some((e=>t[e]!==s[e]))}))||(this._updateLayout(this.layout,!0),h(this,"layout-changed",{layout:this._layout})))}_updateLayout(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("masonry"===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.sortStyle))this._layout=((t,e)=>{const i=[],s=n(t)||[],r=new Array(e).fill(0);for(const o of s){o.width>e&&(o.width=e);const t=d(o,r,e),s=Object.assign(Object.assign({},o),t);i.push(s);for(let e=t.posX;e<t.posX+o.width;e++)r[e]+=o.height}return i})(t,this.columns);else{const i=e?((t,e)=>{for(const i of t)i.width>e&&(i.width=e),i.posX+i.width>e&&(i.posX=e-i.width),i.posX<0&&(i.posX=0);return t})(t,this.columns):t;this._layout=(t=>{const e=[],i=[],s=n(t);for(const r of s){for(;r.posY>0&&!o(e,r);)r.posY--;let n;for(;n=o(e,r);)a(s,r,n.posY+n.height);delete r.hasMoved,e.push(r),i[t.indexOf(r)]=r}return i})(i)}}_itemResizeStart(t){this._oldItemIndex=this._layout.findIndex((e=>e.key===t.currentTarget.key)),this._placeholder=this._layout[this._oldItemIndex],this._oldItemLayout=this._layout[this._oldItemIndex]}_itemResize(t){if(this._oldItemLayout&&void 0!==this._oldItemIndex){const{newWidth:e,newHeight:i,newPosX:s,newPosY:r}=t.detail,o=Object.assign(Object.assign({},this._oldItemLayout),{width:e,height:i}),a=g([...this._layout],Object.assign({},o),s,r,this.columns,!0);this._updateLayout(a,!1,"default"),this._placeholder=this._layout.find((t=>t.key===this._oldItemLayout.key))}}_itemResizeEnd(){const t=this._layout.find((t=>{var e;return t.key===(null===(e=this._oldItemLayout)||void 0===e?void 0:e.key)}));this._placeholder=void 0,this.layout&&this._oldItemLayout!==t&&(h(this,"item-changed",{item:this._placeholder,layout:this._layout}),this._oldItemLayout=void 0,this._oldItemIndex=void 0)}_itemDragStart(t){const e=this._layout.findIndex((e=>e.key===t.currentTarget.key));this._placeholder=this._layout[e],this._oldItemLayout=this._layout.find((e=>e.key===t.currentTarget.key))}_itemDrag(t){if(this._oldItemLayout){t.stopPropagation(),t.preventDefault();const{newPosX:e,newPosY:i}=t.detail;if(this._prevPosX!==e||this._prevPosY!==i){this._prevPosX=e,this._prevPosY=i;const t=g([...this._layout],Object.assign({},this._oldItemLayout),e,i,this.columns,!0);this._updateLayout(t,!1,"default"),this._placeholder=this._layout.find((t=>t.key===this._oldItemLayout.key))}}}_itemDragEnd(){const t=this._layout.find((t=>t.key===this._oldItemLayout.key));this._placeholder=void 0,this.layout&&this._oldItemLayout!==t&&(h(this,"item-changed",{item:this._placeholder,layout:this._layout}),this._oldItemLayout=void 0,this._oldItemIndex=void 0)}_renderPlaceHolder(){return this._placeholder?s.qy`
            <${Y.tag}
                .width=${this._placeholder.width}
                .height=${this._placeholder.height}
                .posY=${this._placeholder.posY}
                .posX=${this._placeholder.posX}
                .key=${this._placeholder.key}
                .parentWidth=${this.clientWidth}
                .columns=${this.columns}
                .rowHeight=${this.rowHeight}
                .margin=${this.margin}
                .containerPadding=${this.containerPadding}
                .isDraggable=${!1}
                .isResizable=${!1}
                placeholder
            >
            </${Y.tag}>
        `:s.qy``}async _attachObserver(){this._resizeObserver||(this._resizeObserver=new ResizeObserver((0,k.Tz)((()=>this._measureLayoutWidth()),100))),this._resizeObserver.observe(this)}_measureLayoutWidth(){this.parentElement&&(this._width=this.parentElement.clientWidth)}};x([(0,s.MZ)({type:Array}),O("design:type",Array)],j.prototype,"layout",void 0),x([(0,s.MZ)(),O("design:type",String)],j.prototype,"sortStyle",void 0),x([(0,s.MZ)({type:Array}),O("design:type",Array)],j.prototype,"margin",void 0),x([(0,s.MZ)({type:Array}),O("design:type",Array)],j.prototype,"containerPadding",void 0),x([(0,s.MZ)({type:Number}),O("design:type",Object)],j.prototype,"rowHeight",void 0),x([(0,s.MZ)({type:Number}),O("design:type",Object)],j.prototype,"columns",void 0),x([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"drag-disabled"}),O("design:type",Object)],j.prototype,"dragDisabled",void 0),x([(0,s.MZ)({type:Boolean,converter:s.Bs,attribute:"resize-disabled"}),O("design:type",Object)],j.prototype,"resizeDisabled",void 0),x([(0,s.MZ)({attribute:!1}),O("design:type",String)],j.prototype,"resizeHandle",void 0),x([(0,s.MZ)({attribute:!1}),O("design:type",String)],j.prototype,"dragHandle",void 0),x([(0,s.MZ)({type:Boolean,attribute:!0,reflect:!0}),O("design:type",Boolean)],j.prototype,"resizing",void 0),x([(0,s.MZ)({type:Boolean,attribute:!0,reflect:!0}),O("design:type",Boolean)],j.prototype,"dragging",void 0),x([(0,s.MZ)(),O("design:type",Function)],j.prototype,"itemRenderer",void 0),x([(0,s.wk)(),O("design:type",Object)],j.prototype,"_width",void 0),x([(0,s.wk)(),O("design:type",Array)],j.prototype,"_layout",void 0),x([(0,s.wk)(),O("design:type",Object)],j.prototype,"_placeholder",void 0),j=R=x([(0,s.eV)({tagName:"grid-layout",styles:()=>[s.iF,s.AH`
            :host {
                display: block;
                position: relative;
            }

            :host([dragging]),
            :host([resizing]),
            :host([dragging]) lit-grid-item,
            :host([resizing]) lit-grid-item {
                user-select: none;
                touch-action: none;
            }
        `],version:p})],j)}}]);
//# sourceMappingURL=3716.597994c6.chunk.js.map