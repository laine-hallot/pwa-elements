var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r["throw"](t))}catch(t){o(t)}}function s(t){t.done?n(t.value):i(t.value).then(a,u)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(a&&(a=0,u[0]&&(n=0)),n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-335782c2.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.c;r=t.h}],execute:function(){var i=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}";var o=t("pwa_camera_modal",function(){function t(t){e(this,t);this.onPhoto=n(this,"onPhoto",7);this.noDeviceError=n(this,"noDeviceError",7);this.facingMode="user"}t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t;var e=this;return __generator(this,(function(n){t=document.createElement("pwa-camera-modal-instance");t.facingMode=this.facingMode;t.addEventListener("onPhoto",(function(t){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(n){if(!this._modal){return[2]}e=t.detail;this.onPhoto.emit(e);return[2]}))}))}));t.addEventListener("noDeviceError",(function(t){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.noDeviceError.emit(t);return[2]}))}))}));document.body.append(t);this._modal=t;return[2]}))}))};t.prototype.dismiss=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(!this._modal){return[2]}this._modal&&this._modal.parentNode.removeChild(this._modal);this._modal=null;return[2]}))}))};t.prototype.render=function(){return r("div",null)};return t}());o.style=i}}}));
//# sourceMappingURL=p-6200738f.system.entry.js.map