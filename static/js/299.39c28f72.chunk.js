"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[299],{299:(e,t,s)=>{s.r(t),s.d(t,{FileSelector:()=>p,FileSelectorChangeEvent:()=>a,FileSelectorEvent:()=>n,FileSelectorRejectEvent:()=>o,FileSelectorTextKey:()=>r,isDescendant:()=>d});var i=s(5298);var r;!function(e){e.DRAG_DROP_LABEL="dragDropLabel",e.BUTTON_LABEL="browseButtonLabel"}(r||(r={}));var n;!function(e){e.Change="file-selection-changed",e.Reject="file-reject"}(n||(n={}));class a extends Event{}class o extends Event{}const d=(e,t)=>{if(!e)return!1;if(e===t)return!0;for(;e.parentNode||e.host;)if((e=e.parentNode?e.parentNode:e.host)===t)return!0;return!1};var l,h=function(e,t,s,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(n<3?r(a):n>3?r(t,s,a):r(t,s))||a);return n>3&&a&&Object.defineProperty(t,s,a),a},c=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=l=class extends i.OC{get texts(){return this._texts}set texts(e){const t=this._texts;"string"===typeof e&&(e=JSON.parse(e)),this._texts=e,this.requestUpdate("texts",t)}get selectedFiles(){return this._files}set selectedFiles(e){this._externalChangeOfFiles=!0,this._files=[],this._handleFiles(e),this._externalChangeOfFiles=!1}constructor(){super(),this.acceptedFileExtensions=[],this.acceptedMIMETypes=[],this.multiple=!0,this.hideBrowseButton=!1,this.hideLabel=!1,this._baseClassName="",this._files=[],this._externalChangeOfFiles=!1,this._dragInside=!1,this._dragInBody=!1,this._texts={},this._isAccepted=!0,this._inputChange=async e=>{await this._handleFiles.call(this,e.target.files),this._resetInputValue()},this._dragenter=this._dragenter.bind(this),this._dragleave=this._dragleave.bind(this),this._dragenterBody=this._dragenterBody.bind(this),this._dragleaveBody=this._dragleaveBody.bind(this),this._drop=this._drop.bind(this),this._dropOutside=this._dropOutside.bind(this)}browseFiles(e){this._selectClick(e)}connectedCallback(){this.style.setProperty("display","none");const e=[];e.push({module:()=>Promise.all([s.e(5029),s.e(3854)]).then(s.bind(s,63854)),elem:["Button"]}),e.push({module:()=>s.e(7281).then(s.bind(s,17281)),elem:["Placeholder"]}),l.dynSubRegister(e,(()=>{super.connectedCallback(),this.style.removeProperty("display")})),this.addEventListener("dragenter",this._dragenter,!0),this.addEventListener("dragleave",this._dragleave,!0),this.addEventListener("dragover",this._dragover,!0),this.addEventListener("drop",this._drop,!0),document.body.addEventListener("dragenter",this._dragenterBody),document.body.addEventListener("dragleave",this._dragleaveBody),document.body.addEventListener("dragover",this._dragover),document.body.addEventListener("drop",this._dropOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragenter",this._dragenter),this.removeEventListener("dragleave",this._dragleave),this.removeEventListener("dragover",this._dragover),this.removeEventListener("drop",this._drop),document.body.removeEventListener("dragenter",this._dragenterBody),document.body.removeEventListener("dragleave",this._dragleaveBody),document.body.removeEventListener("dragover",this._dragover),document.body.removeEventListener("drop",this._dropOutside)}firstUpdated(){this.addEventListener("click",this._onClick)}render(){const[e,t]=(0,i.Yh)(this.tagName.toLowerCase(),{dragInside:this._dragInside,dragInBody:this._dragInBody,isAccepted:this._isAccepted});return this._baseClassName=e,i.qy`
            <div class="${t}">
                <div class="${e}-select-doc-area">
                    <div class="${e+"-input-wrapper"}">
                        <slot></slot>
                        ${this._renderPlaceholder(e,this._labelDragDrop())} ${this._renderBrowseButton()}
                        ${this._renderInput()}
                    </div>
                </div>
            </div>
        `}_renderPlaceholder(e,t){return this.hideLabel?i.qy``:i.qy`
                    <${l.Placeholder.tag} class="${e}-placeholder">
                        <span>${t}</span>
                    </${l.Placeholder.tag}>                    
                `}_renderBrowseButton(){return this.hideBrowseButton?i.qy``:i.qy`
        <${l.Button.tag}
            class="${this._baseClassName}-select-doc-button"
            @click=${this._selectClick}
            button-type="secondary"
            >${this._labelButton()}
            </${l.Button.tag}>
            `}_renderInput(){return i.qy`
            <input
                class="${this._baseClassName+"-input"}"
                type="file"
                @change=${this._inputChange}
                accept=${this.acceptedFileExtensions.map((e=>e.toLowerCase()))}
                ?multiple="${this.multiple}"
            />
        `}_labelDragDrop(){const e=this.dragDropLabel?this.dragDropLabel:this._texts[r.DRAG_DROP_LABEL];return e||"Upload or drag files here"}_labelButton(){const e=this.browseButtonLabel?this.browseButtonLabel:this._texts[r.BUTTON_LABEL];return e||"Default text for browse button label"}_selectClick(e){if(this.shadowRoot){const e=this.shadowRoot.querySelector("."+this._baseClassName+"-input");e&&e.click()}e.preventDefault(),e.stopImmediatePropagation()}_onClick(e){e.stopImmediatePropagation()}async _handleFiles(e){var t;(null===(t=this.acceptedFileExtensions)||void 0===t?void 0:t.length)>0?this._setFiles(this._handleAcceptedFiles(e)):this._setFiles(e),this._externalChangeOfFiles||this._dispatchChangedEvent(),this.requestUpdate()}_handleAcceptedFiles(e){const t=[];return Array.prototype.forEach.call(e,(e=>{this.acceptedFileExtensions.some((t=>e.name.toLowerCase().endsWith(t.toLowerCase())))?t.push(e):this._dispatchRejectEvent(e)})),t}_dispatchChangedEvent(){this.dispatchEvent(new CustomEvent(n.Change,{bubbles:!0,cancelable:!0,composed:!0}))}_dispatchRejectEvent(e){this.dispatchEvent(new CustomEvent(n.Reject,{bubbles:!0,composed:!0,detail:{file:e,type:e.type}}))}_setFiles(e){this._files=Array.from(e)}_resetInputValue(){this.inputElement.value=""}async _drop(e){e.preventDefault(),this._setDragInside(!1),this._setDragInBody(!1),await this._handleFiles.call(this,e.dataTransfer.files)}async _dropOutside(){this._setDragInside(!1),this._setDragInBody(!1)}_dragover(e){e.preventDefault()}_setDragInside(e){this._dragInside!==e&&(this._dragInside=e,this.requestUpdate())}_setDragInBody(e){this._dragInBody!==e&&(this._dragInBody=e,this.requestUpdate())}_dragenter(e){var t;this._isAccepted=!0,(null===(t=this.acceptedMIMETypes)||void 0===t?void 0:t.length)>0&&(e.dataTransfer&&e.dataTransfer.items&&e.dataTransfer.items.length>0&&e.dataTransfer.items[0].type?this._isAccepted=this.acceptedMIMETypes.includes(e.dataTransfer.items[0].type):console.warn(`No MIME type for this dragged object. Cant validate against ${this.acceptedMIMETypes}`)),this._setDragInside(!0)}_dragleave(e){d(e.relatedTarget,this)||this._setDragInside(!1)}_dragenterBody(){this._setDragInBody(!0)}_dragleaveBody(e){d(e.relatedTarget,document.body)||this._setDragInBody(!1)}};h([(0,i.MZ)({type:String,attribute:"drag-drop-label"}),c("design:type",Object)],p.prototype,"dragDropLabel",void 0),h([(0,i.MZ)({type:String,attribute:"browse-button-label"}),c("design:type",Object)],p.prototype,"browseButtonLabel",void 0),h([(0,i.MZ)({type:Array(),attribute:!1}),c("design:type",Array)],p.prototype,"acceptedFileExtensions",void 0),h([(0,i.MZ)({type:Array(),attribute:!1}),c("design:type",Array)],p.prototype,"acceptedMIMETypes",void 0),h([(0,i.MZ)({type:Boolean,converter:i.Bs}),c("design:type",Object)],p.prototype,"multiple",void 0),h([(0,i.MZ)({type:Boolean,attribute:"hide-browse-button",converter:i.Bs}),c("design:type",Object)],p.prototype,"hideBrowseButton",void 0),h([(0,i.MZ)({type:Boolean,attribute:"hide-label",converter:i.Bs}),c("design:type",Object)],p.prototype,"hideLabel",void 0),h([(0,i.MZ)({type:Object}),c("design:type",Object),c("design:paramtypes",[Object])],p.prototype,"texts",null),h([(0,i.MZ)({type:Array()}),c("design:type",Object),c("design:paramtypes",[Object])],p.prototype,"selectedFiles",null),h([(0,i.P)("input"),c("design:type",HTMLInputElement)],p.prototype,"inputElement",void 0),p=l=h([(0,i.eV)({tagName:"file-selector",styles:e=>{const{root:t,child:s,is:r}=(0,i.zz)(e),n=(0,i.Jy)("color_primary_1"),a=(0,i.Jy)("color_secondary_8");return[i.iF,i.AH`:host,:host::before,:host::after,:host *,:host *::before,:host *::after{box-sizing:border-box;}:host{display:inline-block;width:100%;height:100%;}${t}{border:none;border-radius:0;font-size:1rem;height:100%;appearance:button;position:relative;outline-color:transparent;outline-offset:-3px;transition:background-color 0.15s ease-in-out 0s,outline-color 0.15s ease-in-out 0s;text-align:center;text-decoration:none;text-transform:none;user-select:none;width:100%;vertical-align:top;}${s("inner")}{display:flex;align-items:center;justify-content:center;}${s("input-wrapper")}{display:inline-block;position:relative;width:100%;height:100%;}${s("input")}{display:none;}${r("dragInBody")}{outline:3px dashed;outline-color:${a};outline-offset:-3px;}${r("dragInside","isAccepted")}{outline:3px solid;outline-color:${n};outline-offset:-3px;}${r("dragInside","!isAccepted")}{outline:3px solid;outline-color:${(0,i.Jy)("color_traffic_light_1")};outline-offset:-3px;}${s("select-doc-area")}{height:100%;display:flex;justify-content:center;align-items:center;}${t}:focus-visible:before{content:' ';display:block;position:absolute;inset:1px;}`]},version:"2.0.100"}),c("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=299.39c28f72.chunk.js.map