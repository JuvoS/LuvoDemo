webpackJsonp([2],{"2o5g":function(t,e,n){!function(t,e){e(n("WJJ6"),n("dyOy"))}(0,function(e,o){"use strict";function i(){var t=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return e.replace(/[xy]/g,function(n,o){if(o<e.length-2){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===n?i:7&i|8).toString(16)}return Math.floor(10*Math.random())})}function a(t){this.namespace=t}function r(t){var e={},n="-",o=y.get("uuid"),a=k.get("uuid"),r=T.ca_s,c=T.ca_n;return o?(n=o,k.set("uuid",o)):a?(n=a,y.set("uuid",a,{expires:31536e3,path:"/",domain:J})):n=d(),e.guid=n,e.userid=y.get("userid")||"-",e.sessionid=y.get("sessionid")||i(),y.set("sessionid",e.sessionid,{path:"/",domain:J}),e.landing=T.landing||(document.referrer&&S.hostname.indexOf("guazi.com")>=0?0:1)||r&&c?1:0,e}function c(t){function n(t){o();var e=u(S.query),n=a.filter(function(t){return!!new RegExp(t[0],"i").test(S.hostname)&&e[t[1]]});n.length?t.ca_kw=C&&e[n[0][1]]||"-":t.ca_kw="-",y.set("cainfo",JSON.stringify(t),{expires:31536e3,path:"/",domain:J})}function o(){y.remove("cainfo",{path:"/",domain:"m.guazi.com"}),y.remove("cainfo",{path:"/",domain:".m.guazi.com"})}var i=y.get("cainfo");i=i?JSON.parse(i):null;var a=f(),r=T.ca_s,c=T.ca_n,s=i||{ca_s:"self",ca_n:c||"self",ca_medium:"-",ca_term:"-",ca_content:"-",ca_campaign:"-",ca_kw:"-",ca_i:"-",scode:"-"},d=a.filter(function(t){return new RegExp(t[0],"i").test(S.hostname)});if(r&&c){for(var l in T)-1===l.indexOf("ca_")&&"scode"!==l&&delete T[l];s=e(s,T),n(s)}else d.length&&(s.ca_s="seo_"+d[0][0],n(s));return s||{}}function s(){var t=encodeURIComponent(C);return p(t)>512&&(t=g(t)),{page:P,pagetype:"-",line:"-",referer:t||"-",city:y.get("cityDomain")||"-"}}function u(t){return t=t||window.location.search||window.location.hash,t.replace(/^.*\?/,"").split("&").map(function(t){return t.split("=")}).reduce(function(t,e){return e[0].trim()&&(t[e[0]]=e[1]),t},{})}function d(){var t=i();return l("uuid",t),t}function l(t,e){y.set(t,e,{expires:31536e3,path:"/",domain:J}),k.set(t,e)}function f(){return[["baidu","wd"],["baidu","word"],["images.google","q"],["google","q"],["yahoo","p"],["msn","q"],["live","q"],["soso","w"],["sogou","query"],["bing","q"],["so.360.cn","q"],["so.com","q"],["haosou.com","q"],["haoso.com","q"],["easou","q"],["sm.cn","q"],["youdao","q"]]}function p(t){for(var e=0,n=t.length;n--;)e+=t.charCodeAt(n)>255?2:1;return e}function g(t,e){for(var n=0,o=0;o<(e||511);)o+=t.charCodeAt(n)>255?2:1,n++;return t.slice(0,n)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+"="+t[n]);return e.join("&")}function v(t,e){var n=new Image;return n.onload=function(){e&&e()},n.onerror=function(){e&&e(new Error("network error"))},setTimeout(function(){e&&e(new Error("timeout"))},1e4),n.src=this.server+t.toLowerCase(),n}e="default"in e?e.default:e,o="default"in o?o.default:o;var w=Object.freeze({generateUUIDV4:i}),y=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){function n(t,e){var n={};if(o(t)&&t.length>0)for(var i=e?s:r,a=t.split(/;\s/g),c=void 0,u=void 0,d=void 0,l=0,f=a.length;l<f;l++){if((d=a[l].match(/([^=]+)=/i))instanceof Array)try{c=s(d[1]),u=i(a[l].substring(d[1].length+1))}catch(t){}else c=s(a[l]),u="";c&&(n[c]=u)}return n}function o(t){return"string"==typeof t}function i(t){return o(t)&&""!==t}function a(t){if(!i(t))throw new TypeError("Cookie name must be a non-empty string")}function r(t){return t}var c=e,s=decodeURIComponent,u=encodeURIComponent;c.get=function(t,e){a(t),e="function"==typeof e?{converter:e}:e||{};var o=n(document.cookie,!e.raw);return(e.converter||r)(o[t])},c.set=function(t,e,n){a(t),n=n||{};var o=n.expires,r=n.domain,c=n.path;n.raw||(e=u(String(e)));var s=t+"="+e,d=o;return"number"==typeof d&&(d=new Date(Date.now()+1e3*o)),d instanceof Date&&(s+="; expires="+d.toGMTString()),i(r)&&(s+="; domain="+r),i(c)&&(s+="; path="+c),n.secure&&(s+="; secure"),document.cookie=s,s},c.remove=function(t,e){return e=e||{},e.expires=new Date(0),this.set(t,"",e)}}),b=window.GJLocalStorage||window.localStorage;a.prototype.set=function(t,e){var n=this.dump();n[t]={value:e},n=JSON.stringify(n);try{b.setItem(this.namespace,n)}catch(t){return!1}return b.getItem(this.namespace)===n},a.prototype.get=function(t){var e=this.dump();if(e[t])return e[t].value},a.prototype.remove=function(t){this.set(t,void 0)},a.prototype.clear=function(){b.removeItem(this.namespace)},a.prototype.dump=function(){var t=b.getItem(this.namespace)||"{}";try{t=JSON.parse(t)}catch(e){t={}}return t};var x=a,k=new x("GUAZI_TRACKER"),_=document.getElementsByName("js-waf-seo-referer")[0],C=_?_.value:document.referrer,S=new o(C.toLocaleLowerCase()),T=u(),P=encodeURIComponent(window.location.href),J=".guazi.com";document.domain.match(J)||(J=location.host.match(/\.\S+\.com/)[0]);var E=Object.freeze({getUserInfo:r,getCaInfo:c,getPageInfo:s}),M=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),O=r,R=c,N=s,L=window.sessionStorage,j=document.getElementsByTagName("head")[0].getAttribute("_tracker")||y.get("_tracker")&&JSON.parse(y.get("_tracker")),U=j?JSON.parse(j):{},z=".guazi.com",B=function(){function t(n,o,a){h(this,t),this.server=o||document.location.protocol+"//t.guazi.com/t.gif?",this.conf=e({platform:"-",tracking_type:"pageload",pageid:i()},n);var r=a&&a.iframe_url,c=r?"&iframeUrl="+encodeURIComponent(r):"";if(!document.domain.match(z)){var s=document.createElement("iframe"),u=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");s.setAttribute("style","display: none"),s.setAttribute("src",window.location.protocol+"//sta.guazi.com/static/cross.html?origin="+encodeURIComponent(u)+c),document.body.appendChild(s)}this.options=e({ca_from_url:!1},a)}return M(t,[{key:"send",value:function(t,o){var i=e({},O(),R({ca_from_url:this.options.ca_from_url}),N(),U||{},this.conf,t||{});if("pageload"===i.tracking_type&&(!t||t.pagetype,this.conf.pagetype=(t||{}).pagetype),L){var a=JSON.parse(L.getItem("_tracker"))||{},r=new Date;if(a.clientTime&&a.pagetype!==i.pagetype&&"pageload"===i.tracking_type&&(a.time_on_page=r-new Date(a.clientTime),a.tracking_type="timeOnPage",v.call(this,m(a))),"pageload"===i.tracking_type)try{L.setItem("_tracker",JSON.stringify(e(!1,i,{clientTime:new Date})))}catch(t){}}if(/Guazi|guazi|ganji/i.test(window.navigator.userAgent)){return void n("kg4h").invoke("getDeviceInfo",null,function(t){t.code||t.error||(i.guid=t.deviceId),v.call(this,m(i),o)}.bind(this))}return v.call(this,m(i),o)}},{key:"updateConfig",value:function(t){e(this.conf,t)}}]),t}();B.Cookie=y,B.Utils=E,B.UUID=w,t.exports=B})},BIIw:function(t,e){},Blvd:function(t,e,n){n("bxKP")},CF4o:function(t,e){},GrJT:function(t,e,n){(function(t){n("CF4o");var e=n("JCT4");n("HuU2");var o=n("JPxS");n("Muxw");n("TZbX");n("vq8w"),n("LmJU");var i=n("ZOKS");n("YA7v");var a=n("JFwb");n("XOBy"),n("vbDd");var r=n("l6W0");n("Blvd"),new(e.extend({init:function(){this.$container=t(document),this.$pagination=t("#gz-pagination"),this.curState={brand:t('[data-input-t = "brand"]').val(),price:t('[data-input-t = "price"]').val(),downpay:t('[data-input-t = "downpay"]').val(),month_pay:t('[data-input-t = "month_pay"]').val(),sort:t('[data-input-t = "sort"]').val(),page:t('[data-input-t = "page"]').val(),size:t('[data-input-t = "size"]').val()},this.onEvent(),new a,new i,new r,this.setLog()},onEvent:function(){var e=this;t(document).on("click","a[data-type]",function(){var n=t(this);if(!(n.closest(".focus").length>0)){var o=n.attr("data-type"),i=n.attr("data-v");e.jumpToURL(o,i)}}),t(document).on("click","[data-filter]",function(){var n=t(this),o=n.attr("data-filter");e.jumpToURL(o,null)}),t("#filter-bar").find(".reset").on("click",function(){t.extend(e.curState,{brand:"",price:"",downpay:"",month_pay:"",sort:"",page:""});var n=window.location.href.split("?")[0],o=e.parseUrlToNew(e.curState);window.location.href=n+"?"+o}),t(document).on("click","[data-sort]",function(){var n=t(this),o=n.attr("data-v"),i=n.attr("data-sort")+"";if("-1"===n.attr("data-sort"))e.jumpToURL("sort","sort0");else{var a=i[o];e.jumpToURL("sort","sort"+a)}}),this.initPagination()},jumpToURL:function(t,e){if(!t)throw new Error("当前点击按钮的data类型为空");if(!this.curState.hasOwnProperty(t))throw new Error("请检查curState属性名与后台返回的对应的属性名是否一致或后台返回了新定义的属性！");this.curState.page=1,this.curState[t]=null===e?"":e;var n=window.location.href.split("?")[0],o=this.parseUrlToNew(this.curState);window.location.href=n+"?"+o},parseUrlToNew:function(e){var n=window.location.search.split("?")[1],o={};return n&&(o=this.deSerializeURL(n)),t.extend(o,this.curState),t.param(o)},deSerializeURL:function(t){var e={};if(!t)return e;for(var n=t.split("&"),o=0,i=n.length;o<i;o++){var a=n[o].split("=");e[a[0]]=a[1]}return e},initPagination:function(){if(0!=t("#gz-pagination").length){var e=this;this.pageRender=t("#gz-pagination .wrap").GzPagination({curPage:t('[data-input-t = "page"]').val(),size:t('[data-input-t = "size"]').val(),total:t('[data-input-t = "total"]').val(),maxBtnNum:9,btnClass:"page-num",pageTurnClass:""}),this.$pagination.on("click",".page-num",function(){var n=t(this);if(!n.hasClass("active")){var o=+t("#gz-pagination .active").attr("data-text"),i=Math.ceil(t('[data-input-t = "total"]').val()/t('[data-input-t = "size"]').val()),a=0;n.hasClass("dot")||(n.hasClass("prePage")?1!=o&&(a=o-1,e.curState.page=a,e.jumpToURL("page",a)):n.hasClass("nextPage")?o!=i&&(a=o+1,e.curState.page=a,e.jumpToURL("page",a)):(a=+n.attr("data-text"),e.curState.page=a,e.jumpToURL("page",a)))}})}},setLog:function(){window.onload=function(){(new o).sendMessage({platform:"xinche",service:"xinche_web",id:"xinche_web"}),n("nMt/").listen("list"),window.tracker&&window.tracker.send({referrer:document.referrer,city:city_domain,pagetype:"list",tracking_type:"pageload"})}}}))}).call(e,n("7t+N"))},JFwb:function(t,e,n){(function(e){n("aRFk");var o=n("JCT4"),i=o.extend({init:function(){this.$container=e("#side-menu"),this.onEvent()},onEvent:function(){var t=this,n=this.$container.offset().left;e(window).on("scroll",function(){var o=(e(this),document.documentElement.scrollTop||document.body.scrollTop),i=t.sumFixMinRange(),a=t.sumFixMaxRange(),r=t.getMaxTop();if(o>=a)return void t.$container.css({position:"absolute",top:r,left:"0"});o>=i?t.$container.css({position:"fixed",top:"0",left:n}):t.$container.css({position:"static",top:"auto",left:"auto"})}),e(window).trigger("scroll")},sumFixMinRange:function(){var t=e("#modles-sort").height();return e("#modles-sort").offset().top+t},sumFixMaxRange:function(){var t=e(".container").height(),n=this.$container.height();return e(".container").offset().top+t-n},getMaxTop:function(){var t=e(".container").height(),n=this.$container.height();return e(".container")[0].offsetTop+t-n}});t.exports=i}).call(e,n("7t+N"))},JPxS:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=[];return t.forEach(function(t){var i={};i.key=t.name,i.resValue=t.responseEnd-t.requestStart,i.conValue=t.connectEnd-t.connectStart,(i.resValue>=e||i.conValue>=n)&&o.push(i)}),o},o=function(t){var e=[],n={};n.name="进入页面的方式";var o="";switch(t){case 0:o="点击链接、地址栏输入、表单提交、脚本操作等方式加载";break;case 1:o="通过[重新加载]按钮或者location.reload()方法加载";break;case 2:o="网页通过[前进]或[后退]按钮加载";break;default:o="任何其他来源的加载"}return n.value=o,e.push(n),e},i=function(t){var e=new Image;return e.onerror=function(){e=null},e.onload=e.onerror,e.src=t,!0},a=function(t){var e=[],n={key:"DNS查询耗时",value:t.domainLookupEnd-t.domainLookupStart},o={key:"TCP链接耗时",value:t.connectEnd-t.connectStart},i={key:"request请求耗时",value:t.responseEnd-t.responseStart},a={key:"解析dom树耗时",value:t.domComplete-t.domInteractive},r={key:"白屏时间",value:t.responseStart-t.navigationStart},c={key:"domready时间",value:t.domContentLoadedEventEnd-t.navigationStart};return e=e.concat(n,o,i,a,r,c)},r=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e=e.slice(0,e.length-1)},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){if(window.ActiveXObject){var t=["MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"],e=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var r=i.value;try{return new(0,window.ActiveXObject)(r)}catch(t){continue}}}catch(t){n=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw o}}}else if(window.XMLHttpRequest)return new XMLHttpRequest;throw new Error("XMLHttp object could not be created.")},u=function(t){var e=s(),n=[],o=void 0,i=function(t,e){"undefined"===e&&(e=""),n[n.length]=t+"="+e};for(var a in t.data)if("object"===c(t.data[a]))for(var r in t.data[a])i(a+"["+r+"]",t.data[a][r]);else i(a,t.data[a]);o=n.join("&"),"POST"===t.method.toUpperCase()?(e.open(t.method,t.url,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")):e.open(t.method,t.url+"?"+o,!0),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var n=null;if(t.dataType)switch(t.dataType.toUpperCase()){case"JSON":n=JSON.parse(e.responseText);break;case"XML":n=e.responseXML;break;case"HTML":default:n=e.responseText}else n=JSON.parse(e.responseText);void 0!==t.success&&t.success(n)}else if(4===e.readyState){var o=["500","501","502","503","504","505","404"];o.join(",").indexOf(e.status.toString())>=0&&void 0!==t.error&&t.error(e.status,e.responseText)}},"POST"===t.method.toUpperCase()?e.send(o):e.send(null)},d=function(t,e,n){u({url:t,data:e,method:"POST",dataType:"json",success:n})},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=n("WJJ6"),p=function(){function n(e){t(this,n),this.config=f({platform:document.body.getAttribute("data-platform"),service:document.body.getAttribute("data-service"),id:document.body.getAttribute("data-id"),url:document.body.getAttribute("data-url"),resValue:document.body.getAttribute("data-res-value"),conValue:document.body.getAttribute("data-con-value"),name:document.body.getAttribute("data-name")},e)}return l(n,[{key:"sendMessage",value:function(t){if(this.config=f(this.config,t),"performance"in window&&"getEntriesByType"in window.performance&&window.performance.getEntriesByType("resource")instanceof Array){var n=window.document.cookie,c=n.indexOf("gzCityDomain");c=-1===c?n.indexOf("cityDomain"):c;var s="-";c>=0&&(s=n.substring(c).split(";")[0].split("=")[1]);var u=e(performance.getEntries(),this.config.resValue,this.config.conValue);u.forEach(function(t){t.key=encodeURIComponent(t.key)});var l={platform:this.config.platform,service:this.config.service,id:this.config.id,timing:JSON.stringify(a(performance.timing)),resources:JSON.stringify(u),useragent:navigator.userAgent,addressCity:s,localurl:encodeURIComponent(window.location.href),typekind:JSON.stringify(o(performance.navigation))};if(this.config.url)return d(this.config.url,l,this.config.callback),l;var p=document.location.protocol+(this.config.name||"//t.guazi.com/p.gif?")+r(l);return i(p),p}console.warn("浏览器不支持performance")}}]),n}();return p.version="1.0.2",p})},LmJU:function(t,e,n){n("uiHp")},Muxw:function(t,e,n){(function(t){!function(){t.fn.GzPagination=function(n,o){return 0==t(this).length?void console.error("paginationjs初始化时未获取到父级容器!"):new e(t(this),n,o)};var e=function(e,n,o){var i={curPage:1,size:15,total:15,btnClass:"page-num",pageTurnClass:"",preText:"",nextText:"",maxBtnNum:9};this.$container=e,this.config=t.extend({},i,n||{}),this.config.totalPage=Math.ceil(this.config.total/this.config.size),this.renderPage(),o&&o()};e.prototype._temp=function(t,e,n){return'<a class="'+t+'" data-text="'+n+'" href="javascript:;">'+e+"</a>"},e.prototype.renderPage=function(t){var e=this,n=this.config;if(this._html=[],t&&(n.curPage=t),n.curPage<1||n.curPage>n.totalPage||void 0==n.curPage||isNaN(n.curPage))return void console.error("renderPage函数获取到的curPage值不正常 error curPage:"+n.curPage+", totalPage:"+n.totalPage);this._frame={left:0,right:0},function(t,n,o,i,a,r,c){if(i>=o)r.left=2,r.right=o-1,e._renderNum();else{var s=Math.ceil(i/2),u=Math.floor(i/2),d="";t+u>=o?(r.left=o-i+2,r.right=o-1,d="left"):t<=s?(r.left=2,r.right=i-1,d="right"):(r.left=t-u+1,r.right=t+u-1),e._renderNum(),e._renderDot(d)}o>1&&e._renderMinMax(),o>1&&e._renderPreNext()}(+n.curPage,n.size,+n.totalPage,+n.maxBtnNum,this._temp,this._frame,this._html),e.$container.html(e._html.join(""))},e.prototype._renderNum=function(){for(var t=this._html,e=this._frame,n=this._temp,o=this.config,i=e.left;i<=e.right;i++)i==o.curPage?t.push(n(o.btnClass+" active",i,i)):t.push(n(o.btnClass,i,i))},e.prototype._renderDot=function(t){var e=this._html,n=(this._frame,this._temp),o=this.config;"left"==t?(e.shift(),e.unshift(n(o.btnClass+" dot","...","dot"))):"right"==t?(e.pop(),e.push(n(o.btnClass+" dot","...","dot"))):(e.shift(),e.unshift(n(o.btnClass+" dot","...","dot")),e.pop(),e.push(n(o.btnClass+" dot","...","dot")))},e.prototype._renderPreNext=function(){var t=this._html,e=(this._frame,this._temp),n=this.config;n.curPage<=1?(t.unshift(e(n.btnClass+" prePage n",n.preText,"prePage")),t.push(e(n.btnClass+" nextPage",n.nextText,"nextPage"))):n.curPage>=n.totalPage?(t.unshift(e(n.btnClass+" prePage",n.preText,"prePage")),t.push(e(n.btnClass+" nextPage n",n.nextText,"nextPage"))):(t.unshift(e(n.btnClass+" prePage",n.preText,"prePage")),t.push(e(n.btnClass+" nextPage",n.nextText,"nextPage")))},e.prototype._renderMinMax=function(){var t=this._html,e=(this._frame,this._temp),n=this.config;n.curPage<=1?t.unshift(e(n.btnClass+" active",1,1)):t.unshift(e(n.btnClass,1,1)),n.curPage>=n.totalPage?t.push(e(n.btnClass+" active",n.totalPage,n.totalPage)):t.push(e(n.btnClass,n.totalPage,n.totalPage))}}()}).call(e,n("7t+N"))},TZbX:function(t,e,n){(function(e){var n=e(document),o=(n.find("#mask"),e("body"),n.find(".alert_phone_input")),i=n.find(".booking-popup"),a=n.find("#sub-success");t.exports.tijiaoAjax=function(t,n,o,i){e.ajax({url:"/"+domain+"/clue/add",type:"post",data:{phone:t,position:n,brand_id:o||"",tag_id:i||"",csrfToken:e('meta[name="csrf-token"]').attr("content")},headers:{"X-CSRF-TOKEN":e('meta[name="csrf-token"]').attr("content")},success:function(){e(".sub-success").show(),e(".bg-mask").show(),e("body").addClass("body-style");var n={tracking_type:"submit",telphone:t};window.tracker&&window.tracker.send(n)}})},t.exports.brandAjax=function(t,n,o,i){e.ajax({url:"/"+domain+"/clue/add",type:"post",data:{phone:t,position:n,brand_id:o||"",tag_id:i||"",csrfToken:e('meta[name="csrf-token"]').attr("content")},headers:{"X-CSRF-TOKEN":e('meta[name="csrf-token"]').attr("content")},success:function(){e(".sub-success").show(),e(".bg-mask").show(),e("body").addClass("body-style"),e(".pop-box").hide()}})},t.exports.fycIndexSubmit=function(t,n,r){e.ajax({url:"/"+domain+"/fyc/clue/add",type:"post",data:{phone:t,csrfToken:e('meta[name="csrf-token"]').attr("content"),car_id_secret:n},headers:{"X-CSRF-TOKEN":e('meta[name="csrf-token"]').attr("content")},success:function(t){0==t.code?(o.hide(),i.show(),a.show()):console.error("错误code码:"+t.code)},error:function(t,e){console.error("预约买车提交请求错误!")},complete:function(t,e){r&&r(),"timeout"==e&&console.error("预约买车提交请求超时!")}})}}).call(e,n("7t+N"))},XOBy:function(t,e,n){n("oAow")},YA7v:function(t,e){},ZOKS:function(t,e,n){(function(e){n("jvYR");var o=n("JCT4"),i=n("K/7R"),a=n("jDhr"),r=n("TZbX"),c=o.extend({init:function(){this.$container=e("#booking-car"),this.onEvent(),this.isSending=!1;var t=window.location.pathname;this.eventid=null,this.pagetype=null,this.eventBus=i(),"/index"==t||"/"==t||""==t?(this.eventid="05951329",this.pagetype="index"):/\/www\/fyc\/brifinfo/.test(t)?(this.eventid="05334881",this.pagetype="detail"):"/car/list"==t&&(this.eventid="",this.pagetype="list")},onEvent:function(){var t=this,n=this.$container,o=e(document),i=n.find(".phone-area"),c=n.find(".phone-input"),s=o.find(".booking-popup"),u=s.find(".closed-btn"),d=e(".booking-popup").find(".popup-bak");n.find(".phone-btn").on("click",function(){if(!t.isSending){var e=c.val();a.isPhone(e)?(t.isSending=!0,r.fycIndexSubmit(e,"",function(){t.isSending=!1,window.tracker&&window.tracker.send({tracking_type:"submit",eventid:t.eventid,telphone:e,referrer:document.referrer,city:city_domain,pagetype:t.pagetype})})):(i.addClass("err"),c.val("请输入正确手机号"))}}),c.on("focus",function(){i.hasClass("err")&&(e(this).val(""),i.removeClass("err"))}),u.on("click",function(){c.val(""),s.hide()}),d.click(function(){u.trigger("click")}),o.on("click",function(t){var n=e(t.target);n.hasClass("phone-btn")||n.hasClass("phone-input")||"请输入正确手机号"==c.val()&&(i.removeClass("err"),c.val(""))})}});t.exports=c}).call(e,n("7t+N"))},aRFk:function(t,e){},bxKP:function(t,e){},"gw3/":function(t,e){},jvYR:function(t,e){},kg4h:function(t,e){function n(t){if(window.WebViewJavascriptBridge)return t(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(e),setTimeout(function(){document.documentElement.removeChild(e)},0)}function o(t){window.WebViewJavascriptBridge?t(window.WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(e,n){t(window.WebViewJavascriptBridge)},!1)}var i,a=[],r=[];Object.defineProperty(window,"WebViewJavascriptBridge",{configurable:!0,enumerable:!0,set:function(t){t.callHandler&&(i=t,a.forEach(function(t){setTimeout(function(){window.WebViewJavascriptBridge.callHandler.apply(null,t)},0)}),r.forEach(function(t){setTimeout(function(){window.WebViewJavascriptBridge.registerHandler.apply(null,t)},0)}),r=[],a=[])},get:function(){return i}});var c=/Guazi|guazi|ganji/i.test(window.navigator.userAgent);!function(){c&&(window.navigator.userAgent.indexOf("Android")>-1?o(function(t){t._messageHandler||t.init(function(t,e){e({"Javascript Responds":"Wee!"})})}):n(function(t){window.WebViewJavascriptBridge=t}))}(),e.invoke=function(){window.WebViewJavascriptBridge?window.WebViewJavascriptBridge.callHandler.apply(this,arguments):a.push(arguments)},e.register=function(){window.WebViewJavascriptBridge?window.WebViewJavascriptBridge.registerHandler.apply(this,arguments):r.push(arguments)}},l6W0:function(t,e,n){(function(e){n("n1mu");var o=n("JCT4"),i=o.extend({init:function(){this.$container=e("#models-list"),this.onEvent(),this.$container.find(".lazy").lazyload({threshold:300})},onEvent:function(){}});t.exports=i}).call(e,n("7t+N"))},n1mu:function(t,e){},"nMt/":function(t,e,n){(function(t){var o=n("2o5g"),i=new o({platform:"web",line:"xinche"},"",{iframe_url:"//www.maodou.com/sapi/track/middle"});window.tracker=i,e.listen=function(e){t("body").on("click","[data-gzlog]",function(n){var o={tracking_type:"click"},a=t(n.currentTarget);t.each(a.data("gzlog").split("&"),function(t,e){var n=e.split("=");o[n[0]]=n[1]}),o.pagetype=e||"",i.send(o)})}}).call(e,n("7t+N"))},oAow:function(t,e){},uiHp:function(t,e){},vbDd:function(t,e,n){n("gw3/")},vq8w:function(t,e,n){n("BIIw")}},["GrJT"]);