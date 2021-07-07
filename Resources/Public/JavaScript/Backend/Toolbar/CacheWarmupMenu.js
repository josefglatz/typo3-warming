/*! For license information please see CacheWarmupMenu.js.LICENSE.txt */
define("TYPO3/CMS/Warming/Backend/Toolbar/CacheWarmupMenu",["TYPO3/CMS/Core/Ajax/AjaxRequest","jquery","TYPO3/CMS/Backend/Modal","TYPO3/CMS/Backend/ActionButton/ImmediateAction","TYPO3/CMS/Backend/Icons","TYPO3/CMS/Backend/Notification","TYPO3/CMS/Backend/Viewport"],((t,e,r,n,o,a,i)=>(()=>{var s={659:(t,e,r)=>{"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,{Z:()=>n})},730:(t,e,r)=>{"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,{Z:()=>o})},119:(t,e,r)=>{"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:()=>n})},513:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:()=>o})},162:(t,e,r)=>{t.exports=r(47)},742:(t,e,r)=>{"use strict";var n;r.d(e,{Z:()=>o}),function(t){t.Site="site",t.Page="page"}(n||(n={}));const o=n},931:(t,e,r)=>{"use strict";r.d(e,{default:()=>l});var n=r(659),o=r(730),a=r(119),i=r(273),s=r.n(i),u=r(140),c=r.n(u);const l=new(function(){function t(){(0,n.Z)(this,t),(0,a.Z)(this,"$modal",void 0),(0,a.Z)(this,"$progressBar",void 0),(0,a.Z)(this,"$allCounter",void 0),(0,a.Z)(this,"$failedCounter",void 0)}return(0,o.Z)(t,[{key:"createModal",value:function(){var t=this.buildInitialModalContent();c().currentModal?(this.$modal=c().currentModal,this.$modal.show(),this.$modal.find(".modal-body").empty().append(t)):this.$modal=this.createModalWithContent(t),this.$modal.find(".modal-footer").hide()}},{key:"updateProgress",value:function(t){var e=t.getProgressInPercent(),r=t.getNumberOfFailedUrls(),n=t.progress,o=n.current,a=n.total;this.$progressBar.attr("aria-valuenow",o),this.$progressBar.attr("aria-valuemax",a),this.$progressBar.css("width","".concat(e,"%")),this.$progressBar.html("".concat(e.toFixed(2),"%")),r>0&&(this.$progressBar.addClass("progress-bar-warning"),this.$failedCounter.show().html("Failed: ".concat(r))),this.$allCounter.html("Processed: <strong>".concat(o,"</strong><br>Total: <strong>").concat(a,"</strong>")),o>=a&&this.$progressBar.removeClass("progress-bar-warning").addClass(r>0?"progress-bar-danger":"progress-bar-success")}},{key:"getModal",value:function(){return this.$modal}},{key:"getReportButton",value:function(){return this.$modal.find("button[name=tx-warming-open-report]")}},{key:"getRetryButton",value:function(){return this.$modal.find("button[name=tx-warming-retry]")}},{key:"dismiss",value:function(){c().dismiss()}},{key:"buildInitialModalContent",value:function(){var t=s()("<div>");return this.$progressBar=s()('<div class="progress-bar progress-bar-striped">').attr("role","progressbar").attr("aria-valuemin",0).attr("aria-valuemax",0).attr("aria-valuenow",0),this.$allCounter=s()("<div>").html("Crawling sitemaps..."),this.$failedCounter=s()('<div class="badge badge-danger">'),this.$failedCounter.hide(),t.append(s()('<div class="tx-warming-progress progress">').append(this.$progressBar)).append(s()('<div class="tx-warming-counter">').append(this.$allCounter,this.$failedCounter)),t}},{key:"createModalWithContent",value:function(t){return c().advanced({title:TYPO3.lang["cacheWarmup.modal.title"],content:t,size:c().sizes.small,buttons:[{text:"Show report",icon:"actions-list-alternative",btnClass:"btn-primary",name:"tx-warming-open-report"},{text:"Run again",icon:"actions-refresh",btnClass:"btn-default",name:"tx-warming-retry"},{text:"Close",btnClass:"btn-default",trigger:function(){c().dismiss()}}]})}}]),t}())},824:(t,e,r)=>{"use strict";r.d(e,{default:()=>g});var n=r(513),o=r(659),a=r(730),i=r(119),s=r(273),u=r.n(s),c=r(981),l=r.n(c),f=r(234),h=r.n(f),p=r(140),d=r.n(p);const g=new(function(){function t(){(0,o.Z)(this,t),(0,i.Z)(this,"progress",void 0),(0,i.Z)(this,"panelCount",0)}return(0,a.Z)(t,[{key:"createModalAction",value:function(t){var e=this;return{label:TYPO3.lang["cacheWarmup.notification.action.showReport"],action:new(l())((function(){return e.createModal(t)}))}}},{key:"createModal",value:function(t){var e=this;this.progress=t,Promise.all([h().getIcon("actions-view-page",h().sizes.small),h().getIcon("content-info",h().sizes.small)]).then((function(t){var r=(0,n.Z)(t,2),o=r[0],a=r[1];d().dismiss(),e.panelCount=0;var i=e.buildModalContent(o,a);d().advanced({title:TYPO3.lang["cacheWarmup.modal.title"],content:i,size:d().sizes.large})}))}},{key:"createPanel",value:function(t,e,r,n){var o=this;return this.panelCount++,u()("<div>").addClass("panel panel-".concat(e," panel-table")).addClass((function(){return o.panelCount>1?"panel-space":""})).append(u()("<div>").addClass("panel-heading").text("".concat(t," (").concat(r.length,")")),u()("<div>").addClass("table-fit table-fit-wrap").append(u()("<table>").addClass("table table-striped table-hover").append(u()("<tbody>").append(r.map((function(t){return u()("<tr>").append(u()("<td>").addClass("col-title").text(t),u()("<td>").addClass("col-control").append(u()("<a>").attr("href",t).attr("target","_blank").addClass("btn btn-default btn-sm").html("".concat(n," ").concat(TYPO3.lang["cacheWarmup.modal.action.view"]))))}))))))}},{key:"buildModalContent",value:function(t,e){var r=u()("<div>");this.progress.getNumberOfFailedUrls()>0&&r.append(this.createPanel(TYPO3.lang["cacheWarmup.modal.panel.failed"],"danger",this.progress.urls.failed,t)),this.progress.getNumberOfSuccessfulUrls()>0&&r.append(this.createPanel(TYPO3.lang["cacheWarmup.modal.panel.successful"],"success",this.progress.urls.successful,t));var n=this.progress.progress.total>0?"".concat(TYPO3.lang["cacheWarmup.modal.total"]," ").concat(this.progress.progress.total):TYPO3.lang["cacheWarmup.modal.message.noUrlsCrawled"];return r.append(u()("<div>").addClass("badge badge-info").html("".concat(e," ").concat(n))),r}}]),t}())},47:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={};function v(){}function y(){}function m(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(I([])));x&&x!==r&&n.call(x,a)&&(b=x);var C=m.prototype=v.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,s){var u=l(t[o],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=C.constructor=m,m.constructor=y,y.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},k(S.prototype),S.prototype[i]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(C),u(C,s,"Generator"),C[a]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},981:t=>{"use strict";t.exports=n},234:t=>{"use strict";t.exports=o},140:t=>{"use strict";t.exports=r},207:t=>{"use strict";t.exports=a},684:t=>{"use strict";t.exports=i},379:e=>{"use strict";e.exports=t},273:t=>{"use strict";t.exports=e}},u={};function c(t){var e=u[t];if(void 0!==e)return e.exports;var r=u[t]={exports:{}};return s[t](r,r.exports,c),r.exports}c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var l={};return(()=>{"use strict";c.r(l),c.d(l,{CacheWarmupMenu:()=>B,default:()=>q});var t=c(513);function e(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function s(t){e(i,o,a,s,u,"next",t)}function u(t){e(i,o,a,s,u,"throw",t)}s(void 0)}))}}var n,o=c(659),a=c(730),i=c(119),s=c(162),u=c.n(s),f=new Uint8Array(16);function h(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(f)}const p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(t){return"string"==typeof t&&p.test(t)};for(var g=[],v=0;v<256;++v)g.push((v+256).toString(16).substr(1));const y=function(t,e,r){var n=(t=t||{}).random||(t.rng||h)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(g[t[e+0]]+g[t[e+1]]+g[t[e+2]]+g[t[e+3]]+"-"+g[t[e+4]]+g[t[e+5]]+"-"+g[t[e+6]]+g[t[e+7]]+"-"+g[t[e+8]]+g[t[e+9]]+"-"+g[t[e+10]]+g[t[e+11]]+g[t[e+12]]+g[t[e+13]]+g[t[e+14]]+g[t[e+15]]).toLowerCase();if(!d(r))throw TypeError("Stringified UUID is invalid");return r}(n)};var m;!function(t){t.Failed="failed",t.Warning="warning",t.Success="success",t.Unknown="unknown"}(m||(m={}));const b=m,w=function(){function t(e){(0,o.Z)(this,t),(0,i.Z)(this,"state",b.Unknown),(0,i.Z)(this,"progress",{current:0,total:0}),(0,i.Z)(this,"urls",{failed:[],successful:[]}),(0,i.Z)(this,"response",{title:"",message:""}),e&&this.update(e)}return(0,a.Z)(t,[{key:"update",value:function(t){return t.state&&Object.values(b).includes(t.state)&&(this.state=t.state),t.progress&&(this.progress=t.progress),t.urls&&(this.urls=t.urls),t.title&&(this.response.title=t.title),t.message&&(this.response.message=t.message),this}},{key:"getNumberOfFailedUrls",value:function(){return this.urls.failed.length}},{key:"getNumberOfSuccessfulUrls",value:function(){return this.urls.successful.length}},{key:"getProgressInPercent",value:function(){return 0!==this.progress.total?Number(this.progress.current/this.progress.total*100):Number(0)}}]),t}();var x=c(379),C=c.n(x);function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var S=function(){function e(){(0,o.Z)(this,e)}return(0,a.Z)(e,[{key:"startRequestWithQueryParams",value:function(t){return new(C())(this.getUrl(t).toString()).post({}).then(function(){var t=r(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.resolve();case 2:return r=t.sent,t.abrupt("return",new w(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getUrl",value:function(e){var r,n=new URL(TYPO3.settings.ajaxUrls.tx_warming_cache_warmup_legacy,window.location.origin),o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}(e.entries());try{for(o.s();!(r=o.n()).done;){var a=(0,t.Z)(r.value,2),i=a[0],s=a[1];n.searchParams.append(i,s)}}catch(t){o.e(t)}finally{o.f()}return n}}]),e}(),P=c(931),O=c(824);function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const E=function(){function e(){(0,o.Z)(this,e),(0,i.Z)(this,"source",void 0),(0,i.Z)(this,"progress",void 0)}return(0,a.Z)(e,[{key:"startRequestWithQueryParams",value:function(t){var e=this;return P.default.createModal(),this.source=new EventSource(this.getUrl(t).toString(),{withCredentials:!0}),this.progress=new w,new Promise((function(t,r){e.source.addEventListener("warmupProgress",(function(t){return e.updateProgress(t)}),!1),e.source.addEventListener("warmupFinished",(function(r){P.default.getModal().find(".modal-footer").show(),e.finishWarmup(r),t(e.progress)}),!1),e.source.addEventListener("message",(function(){return e.reject(r)}),!1),e.source.addEventListener("error",(function(){return e.reject(r)}),!1)}))}},{key:"getUrl",value:function(e){var r,n=new URL(TYPO3.settings.ajaxUrls.tx_warming_cache_warmup,window.location.origin),o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}(e.entries());try{for(o.s();!(r=o.n()).done;){var a=(0,t.Z)(r.value,2),i=a[0],s=a[1];n.searchParams.append(i,s)}}catch(t){o.e(t)}finally{o.f()}return n}},{key:"closeSource",value:function(){return this.source.close(),EventSource.CLOSED===this.source.readyState}},{key:"updateProgress",value:function(t){var e=JSON.parse(t.data);this.progress.update(e),P.default.updateProgress(this.progress)}},{key:"finishWarmup",value:function(t){var e=this,r=JSON.parse(t.data);this.progress.update(r),this.closeSource(),P.default.getReportButton().off("button.clicked").on("button.clicked",(function(){return O.default.createModal(e.progress)}))}},{key:"reject",value:function(t){this.closeSource(),P.default.dismiss(),t()}}],[{key:"isSupported",value:function(){return!!window.EventSource}}]),e}();var I,j=c(742);!function(t){t[t.EventSource=0]="EventSource",t[t.Ajax=1]="Ajax"}(I||(I={}));const Z=I,W=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.Z.Site;(0,o.Z)(this,t),(0,i.Z)(this,"requestType",void 0),(0,i.Z)(this,"requestId",void 0),(0,i.Z)(this,"pageId",void 0),(0,i.Z)(this,"mode",void 0),this.requestId=t.generateRequestId(),this.pageId=e,this.mode=r,this.requestType=E.isSupported()?Z.EventSource:Z.Ajax}return(0,a.Z)(t,[{key:"runWarmup",value:function(){return Z.EventSource===this.requestType?this.doWarmupWithEventSource():this.doWarmupWithAjax()}},{key:"doWarmupWithEventSource",value:function(){return(new E).startRequestWithQueryParams(this.getQueryParams())}},{key:"doWarmupWithAjax",value:function(){return(new S).startRequestWithQueryParams(this.getQueryParams())}},{key:"getQueryParams",value:function(){return new URLSearchParams({pageId:this.pageId.toString(),mode:this.mode,requestId:this.requestId})}}],[{key:"generateRequestId",value:function(){return y()}}]),t}();var L,A=c(273),M=c.n(A),$=c(234),_=c.n($),U=c(207),N=c.n(U),R=c(684),Y=c.n(R);!function(t){t.container="#eliashaeussler-typo3warming-backend-toolbaritems-cachewarmuptoolbaritem",t.dropdownTable=".dropdown-table",t.menuItem="a.toolbar-cache-warmup-action",t.toolbarIcon=".toolbar-item-icon .t3js-icon",t.useragentCopy="button.toolbar-cache-warmup-useragent-copy-action",t.useragentCopyIcon=".t3js-icon",t.useragentCopyText=".toolbar-cache-warmup-useragent-copy-text"}(L||(L={}));var B=function(){function e(){var t=this;(0,o.Z)(this,e),(0,i.Z)(this,"notificationDuration",15),Y().Topbar.Toolbar.registerEvent((function(){return t.initializeEvents()}))}return(0,a.Z)(e,[{key:"initializeEvents",value:function(){var t=this;M()(L.container).ready((function(){return t.fetchSites()})),M()(L.container).on("click",L.menuItem,(function(e){e.preventDefault();var r=M()(e.currentTarget).attr("data-page-id");r&&t.warmupCache(Number(r))})),M()(L.container).on("click",L.useragentCopy,(function(e){e.preventDefault();var r=M()(e.currentTarget).attr("data-text");r&&t.copyUserAgentToClipboard(r)}))}},{key:"warmupCache",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.Z.Site,n=M()(L.toolbarIcon,L.container),o=n.clone();M()(L.container).removeClass("open"),_().getIcon("spinner-circle-light",_().sizes.small).then((function(t){n.replaceWith(t)}));var a=new W(t,r);a.runWarmup().then((function(n){e.showNotification(n),Z.EventSource===a.requestType&&P.default.getRetryButton().off("button.clicked").on("button.clicked",(function(){e.warmupCache(t,r)}))}),this.errorNotification).finally((function(){M()(L.toolbarIcon,L.container).replaceWith(o)}))}},{key:"fetchSites",value:function(){var t=M()(L.toolbarIcon,L.container),e=t.clone();M()(L.container).removeClass("open"),_().getIcon("spinner-circle-light",_().sizes.small).then((function(e){t.replaceWith(e)})),new(C())(TYPO3.settings.ajaxUrls.tx_warming_fetch_sites).get().then(function(){var t=r(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.resolve();case 2:r=t.sent,M()(L.dropdownTable,L.container).html(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){M()(L.toolbarIcon,L.container).replaceWith(e)}))}},{key:"copyUserAgentToClipboard",value:function(e){var n=M()(L.useragentCopyIcon,L.useragentCopy),o=n.clone();_().getIcon("spinner-circle-light",_().sizes.small).then((function(t){n.replaceWith(t)})),Promise.all([navigator.clipboard.writeText(e),_().getIcon("actions-check",_().sizes.small)]).then(function(){var e=r(u().mark((function e(r){var n,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,t.Z)(r,2),o=n[1],M()(L.useragentCopyText).text(TYPO3.lang["cacheWarmup.toolbar.copy.successful"]),M()(L.useragentCopyIcon,L.useragentCopy).replaceWith(o);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){M()(L.useragentCopyIcon,L.useragentCopy).replaceWith(o)}))}},{key:"showNotification",value:function(t){var e=t.response,r=e.title,n=e.message,o=O.default.createModalAction(t);switch(t.state){case b.Failed:N().error(r,n,this.notificationDuration,[o]);break;case b.Warning:N().warning(r,n,this.notificationDuration,[o]);break;case b.Success:N().success(r,n,this.notificationDuration,[o]);break;case b.Unknown:N().notice(r,n,this.notificationDuration);break;default:this.errorNotification()}}},{key:"errorNotification",value:function(){N().error(TYPO3.lang["cacheWarmup.notification.error.title"],TYPO3.lang["cacheWarmup.notification.error.message"])}}]),e}();const q=new B})(),l})()));
//# sourceMappingURL=CacheWarmupMenu.js.map