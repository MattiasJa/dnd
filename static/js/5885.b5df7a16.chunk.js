"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[4247,5885,8266],{14247:(e,t,a)=>{var c;a.d(t,{R:()=>c}),function(e){e.Failure="failure",e.Success="success",e.Basic="basic"}(c||(c={}))},25885:(e,t,a)=>{a.r(t),a.d(t,{FeedbackDefaultMessage:()=>i,FeedbackMessage:()=>o,FeedbackMessageType:()=>n.R});var c=a(5298);var n=a(14247);var s=function(e,t,a,c){var n,s=arguments.length,r=s<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,c);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,a,r):n(t,a))||r);return s>3&&r&&Object.defineProperty(t,a,r),r},r=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends c.OC{render(){const[e,t]=(0,c.Yh)(this.tagName.toLocaleLowerCase(),{failure:this.feedbackType===n.R.Failure,success:this.feedbackType===n.R.Success,basic:this.feedbackType===n.R.Basic});return c.qy`
            <p class="${t}">
                <span class="${e}">
                    <slot></slot>
                </span>
            </p>
        `}};var i;s([(0,c.MZ)({type:n.R,attribute:"message-type"}),r("design:type",Object)],o.prototype,"feedbackType",void 0),o=s([(0,c.eV)({tagName:"feedback-message",styles:e=>{const{root:t,is:a}=(0,c.zz)(e),n=(0,c.Jy)("color_traffic_light_1"),s=(0,c.Jy)("color_secondary_7"),r=(0,c.Jy)("color_primary_3");return[c.iF,(0,c.iz)(`\n        ${t} {\n            text-align:left;\n            text-decoration: none;\n            text-transform: none;\n            font-size: 14px;\n            margin:0;\n        }\n        ${a("basic")} {\n            color: ${r};\n        }\n        ${a("failure")} {\n            color: ${n};\n        }\n        ${a("success")}{\n            color: ${s}\n        }\n        `)]},version:"2.0.43"})],o),function(e){e.Save="Saving...",e.SuccessfullySaved="Changes saved",e.CharsLimitExceededFailure="Character limit exceeded",e.InvalidUpdate="The information you want to update are no longer valid, please refresh information in order to proceed."}(i||(i={}))}}]);
//# sourceMappingURL=5885.b5df7a16.chunk.js.map