!function(a,b){"use strict";function c(){function a(a,c){return b.extend(new(b.extend(function(){},{prototype:a})),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){if(d[a]=b.extend({reloadOnSearch:!0},e,a&&c(a,e)),a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[f]=b.extend({redirectTo:a},c(f,e))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(c,e,f,g,h,i,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i="string"==typeof e[f]?decodeURIComponent(e[f]):e[f];h&&i&&(d[h.name]=i)}return d}function m(){var a=n(),d=q.current;a&&d&&a.$$route===d.$$route&&b.equals(a.pathParams,d.pathParams)&&!a.reloadOnSearch&&!p?(d.params=a.params,b.copy(d.params,f),c.$broadcast("$routeUpdate",d)):(a||d)&&(p=!1,c.$broadcast("$routeChangeStart",a,d),q.current=a,a&&a.redirectTo&&(b.isString(a.redirectTo)?e.path(o(a.redirectTo,a.params)).search(a.params).replace():e.url(a.redirectTo(a.pathParams,e.path(),e.search())).replace()),g.when(a).then(function(){if(a){var c,d,e=b.extend({},a.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a)}),b.isDefined(c=a.template)?b.isFunction(c)&&(c=c(a.params)):b.isDefined(d=a.templateUrl)&&(b.isFunction(d)&&(d=d(a.params)),d=k.getTrustedResourceUrl(d),b.isDefined(d)&&(a.loadedTemplateUrl=d,c=i.get(d,{cache:j}).then(function(a){return a.data}))),b.isDefined(c)&&(e.$template=c),g.all(e)}}).then(function(e){a==q.current&&(a&&(a.locals=e,b.copy(a.params,f)),c.$broadcast("$routeChangeSuccess",a,d))},function(b){a==q.current&&c.$broadcast("$routeChangeError",a,d,b)}))}function n(){var c,f;return b.forEach(d,function(d){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function o(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var p=!1,q={routes:d,reload:function(){p=!0,c.$evalAsync(m)}};return c.$on("$locationChangeSuccess",m),q}]}function d(){this.$get=function(){return{}}}function e(a,c,d,e,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(g,h,i,j,k){function l(){n&&(n.$destroy(),n=null),o&&(f.leave(o),o=null)}function m(){var i=a.current&&a.current.locals,j=i&&i.$template;if(j){var m=g.$new(),r=k(m,b.noop);r.html(j),f.enter(r,null,o||h,function(){!b.isDefined(p)||p&&!g.$eval(p)||c()}),l();var s=d(r.contents()),t=a.current;if(n=t.scope=m,o=r,t.controller){i.$scope=n;var u=e(t.controller,i);t.controllerAs&&(n[t.controllerAs]=u),r.data("$ngControllerController",u),r.children().data("$ngControllerController",u)}s(n),n.$emit("$viewContentLoaded"),n.$eval(q)}else l()}var n,o,p=i.autoscroll,q=i.onload||"";g.$on("$routeChangeSuccess",m),m()}}}var f=b.module("ngRoute",["ng"]).provider("$route",c);f.provider("$routeParams",d),f.directive("ngView",e),e.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]}(window,window.angular),function(a,b,c){"use strict";b.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(d,e){function f(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType==k)return c}}function g(a,b){return f(a)==f(b)}var h=b.noop,i=b.forEach,j=e.$$selectors,k=1,l="$$ngAnimateState",m="ng-animate",n={running:!0};d.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(a,c,d,e,k,o){function p(a){if(a){var b=[],e={},f=a.substr(1).split(".");(d.transitions||d.animations)&&f.push("");for(var g=0;g<f.length;g++){var h=f[g],i=j[h];i&&!e[h]&&(b.push(c.get(i)),e[h]=!0)}return b}}function q(a,b,c,d,e,g,j){function n(a){if(r(),a===!0)return v(),void 0;var b=c.data(l);b&&(b.done=v,c.data(l,b)),o(D,"after",v)}function o(d,e,f){function g(a,b){var c=b+"Complete",e=d[a];e[c]=!0,(e[j]||h)();for(var g=0;g<d.length;g++)if(!d[g][c])return;f()}var j=e+"End";i(d,function(d,f){var h=function(){g(f,e)};return"before"!=e||"enter"!=a&&"move"!=a?(d[e]?d[j]=B?d[e](c,b,h):d[e](c,h):h(),void 0):(h(),void 0)})}function q(){j&&k(j,0,!1)}function r(){r.hasBeenRun||(r.hasBeenRun=!0,g())}function v(){if(!v.hasBeenRun){v.hasBeenRun=!0;var a=c.data(l);a&&(B?t(c):(a.closeAnimationTimeout=k(function(){t(c)},0,!1),c.data(l,a))),q()}}var w=f(c);if(!w)return r(),v(),void 0;var x=w.className,y=x+" "+b,z=(" "+y).replace(/\s+/g,".");d||(d=e?e.parent():c.parent());var A=p(z),B="addClass"==a||"removeClass"==a,C=c.data(l)||{};if(u(c,d)||0===A.length)return r(),v(),void 0;var D=[];if(C.running&&B&&C.structural||i(A,function(d){if(!d.allowCancel||d.allowCancel(c,a,b)){var e,f=d[a];"leave"==a?(e=f,f=null):e=d["before"+a.charAt(0).toUpperCase()+a.substr(1)],D.push({before:e,after:f})}}),0===D.length)return r(),q(),void 0;var E=" "+x+" ";C.running&&(k.cancel(C.closeAnimationTimeout),t(c),s(C.animations),C.beforeComplete?(C.done||h)(!0):B&&!C.structural&&(E="removeClass"==C.event?E.replace(C.className,""):E+C.className+" "));var F=" "+b+" ";return"addClass"==a&&E.indexOf(F)>=0||"removeClass"==a&&-1==E.indexOf(F)?(r(),q(),void 0):(c.addClass(m),c.data(l,{running:!0,event:a,className:b,structural:!B,animations:D,done:n}),o(D,"before",n),void 0)}function r(a){var c=f(a);i(c.querySelectorAll("."+m),function(a){a=b.element(a);var c=a.data(l);c&&(s(c.animations),t(a))})}function s(a){var b=!0;i(a,function(c){a.beforeComplete||(c.beforeEnd||h)(b),a.afterComplete||(c.afterEnd||h)(b)})}function t(a){g(a,e)?n.disabled||(n.running=!1,n.structural=!1):(a.removeClass(m),a.removeData(l))}function u(a,b){if(n.disabled)return!0;if(g(a,e))return n.disabled||n.running;do{if(0===b.length)break;var c=g(b,e),d=c?n:b.data(l),f=d&&(!!d.disabled||!!d.running);if(c||f)return f;if(c)return!0}while(b=b.parent());return!0}return e.data(l,n),o.$$postDigest(function(){o.$$postDigest(function(){n.running=!1})}),{enter:function(b,c,d,e){this.enabled(!1,b),a.enter(b,c,d),o.$$postDigest(function(){q("enter","ng-enter",b,c,d,h,e)})},leave:function(b,c){r(b),this.enabled(!1,b),o.$$postDigest(function(){q("leave","ng-leave",b,null,null,function(){a.leave(b)},c)})},move:function(b,c,d,e){r(b),this.enabled(!1,b),a.move(b,c,d),o.$$postDigest(function(){q("move","ng-move",b,c,d,h,e)})},addClass:function(b,c,d){q("addClass",c,b,null,null,function(){a.addClass(b,c)},d)},removeClass:function(b,c,d){q("removeClass",c,b,null,null,function(){a.removeClass(b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)t(b);else{var c=b.data(l)||{};c.disabled=!0,b.data(l,c)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]),e.register("",["$window","$sniffer","$timeout",function(d,e,g){function j(a){R.push(a),g.cancel(F),F=g(function(){i(R,function(a){a()}),R=[],F=null,P={}},10,!1)}function l(a,b){var c=b?P[b]:null;if(!c){var e,f,g,h,j=0,l=0,n=0,o=0;i(a,function(a){if(a.nodeType==k){var b=d.getComputedStyle(a)||{};g=b[A+G],j=Math.max(m(g),j),h=b[A+H],e=b[A+I],l=Math.max(m(e),l),f=b[C+I],o=Math.max(m(f),o);var c=m(b[C+G]);c>0&&(c*=parseInt(b[C+J],10)||1),n=Math.max(c,n)}}),c={total:0,transitionPropertyStyle:h,transitionDurationStyle:g,transitionDelayStyle:e,transitionDelay:l,transitionDuration:j,animationDelayStyle:f,animationDelay:o,animationDuration:n},b&&(P[b]=c)}return c}function m(a){var c=0,d=b.isString(a)?a.split(/\s*,\s*/):[];return i(d,function(a){c=Math.max(parseFloat(a)||0,c)}),c}function n(a){var b=a.parent(),c=b.data(K);return c||(b.data(K,++Q),c=Q),c+"-"+f(a).className}function o(a,b){var c=n(a),d=c+" "+b,e={},f=P[d]?++P[d].total:0;if(f>0){var g=b+"-stagger",h=c+" "+g,j=!P[h];j&&a.addClass(g),e=l(a,h),j&&a.removeClass(g)}a.addClass(b);var k=l(a,d),m=Math.max(k.transitionDuration,k.animationDuration);if(0===m)return a.removeClass(b),!1;var o="";return k.transitionDuration>0?(a.addClass(M),o+=N+" ",p(a)):q(a),i(b.split(" "),function(a,b){o+=(b>0?" ":"")+a+"-active"}),a.data(L,{className:b,activeClassName:o,maxDuration:m,classes:b+" "+o,timings:k,stagger:e,ii:f}),!0}function p(a){f(a).style[A+H]="none"}function q(a){f(a).style[C]="none 0s"}function r(a){var b=A+H,c=f(a);c.style[b]&&c.style[b].length>0&&(c.style[b]="")}function s(a){var b=C,c=f(a);c.style[b]&&c.style[b].length>0&&(c.style[b]="")}function t(a,b,c){function d(a){a.stopPropagation();var b=a.originalEvent||a,d=b.$manualTimeStamp||b.timeStamp||Date.now(),e=parseFloat(b.elapsedTime.toFixed(O));Math.max(d-o,0)>=n&&e>=l&&c()}var g=a.data(L),h=f(a);if(-1==h.className.indexOf(b)||!g)return c(),void 0;var i,j=g.timings,k=g.stagger,l=g.maxDuration,m=g.activeClassName,n=1e3*Math.max(j.transitionDelay,j.animationDelay),o=Date.now(),p=D+" "+B,q=g.ii,r="",s=[];if(j.transitionDuration>0){var t=j.transitionPropertyStyle;if(-1==t.indexOf("all")){i=!0;var v=e.msie?"-ms-zoom":"border-spacing";r+=E+"transition-property: "+t+", "+v+"; ",r+=E+"transition-duration: "+j.transitionDurationStyle+", "+j.transitionDuration+"s; ",s.push(E+"transition-property"),s.push(E+"transition-duration")}}if(q>0){if(k.transitionDelay>0&&0===k.transitionDuration){var w=j.transitionDelayStyle;i&&(w+=", "+j.transitionDelay+"s"),r+=E+"transition-delay: "+u(w,k.transitionDelay,q)+"; ",s.push(E+"transition-delay")}k.animationDelay>0&&0===k.animationDuration&&(r+=E+"animation-delay: "+u(j.animationDelayStyle,k.animationDelay,q)+"; ",s.push(E+"animation-delay"))}if(s.length>0){var x=h.getAttribute("style")||"";h.setAttribute("style",x+" "+r)}return a.on(p,d),a.addClass(m),function(){a.off(p,d),a.removeClass(m),y(a,b);var c=f(a);for(var e in s)c.style.removeProperty(s[e])}}function u(a,b,c){var d="";return i(a.split(","),function(a,e){d+=(e>0?",":"")+(c*b+parseInt(a,10))+"s"}),d}function v(a,b){return o(a,b)?function(c){c&&y(a,b)}:void 0}function w(a,b,c){return a.data(L)?t(a,b,c):(y(a,b),c(),void 0)}function x(a,b,c){var d=v(a,b);if(!d)return c(),void 0;var e=d;return j(function(){r(a),s(a),e=w(a,b,c)}),function(a){(e||h)(a)}}function y(a,b){a.removeClass(b),a.removeClass(M),a.removeData(L)}function z(a,c){var d="";return a=b.isArray(a)?a:a.split(/\s+/),i(a,function(a,b){a&&a.length>0&&(d+=(b>0?" ":"")+a+c)}),d}var A,B,C,D,E="";a.ontransitionend===c&&a.onwebkittransitionend!==c?(E="-webkit-",A="WebkitTransition",B="webkitTransitionEnd transitionend"):(A="transition",B="transitionend"),a.onanimationend===c&&a.onwebkitanimationend!==c?(E="-webkit-",C="WebkitAnimation",D="webkitAnimationEnd animationend"):(C="animation",D="animationend");var F,G="Duration",H="Property",I="Delay",J="IterationCount",K="$$ngAnimateKey",L="$$ngAnimateCSS3Data",M="ng-animate-start",N="ng-animate-active",O=3,P={},Q=0,R=[];return{allowCancel:function(a,c,d){var e=(a.data(L)||{}).classes;if(!e||["enter","leave","move"].indexOf(c)>=0)return!0;var g=a.parent(),h=b.element(f(a).cloneNode());h.attr("style","position:absolute; top:-9999px; left:-9999px"),h.removeAttr("id"),h.html(""),i(e.split(" "),function(a){h.removeClass(a)});var j="addClass"==c?"-add":"-remove";h.addClass(z(d,j)),g.append(h);var k=l(h);return h.remove(),Math.max(k.transitionDuration,k.animationDuration)>0},enter:function(a,b){return x(a,"ng-enter",b)},leave:function(a,b){return x(a,"ng-leave",b)},move:function(a,b){return x(a,"ng-move",b)},beforeAddClass:function(a,b,c){var d=v(a,z(b,"-add"));return d?(j(function(){r(a),s(a),c()}),d):(c(),void 0)},addClass:function(a,b,c){return w(a,z(b,"-add"),c)},beforeRemoveClass:function(a,b,c){var d=v(a,z(b,"-remove"));return d?(j(function(){r(a),s(a),c()}),d):(c(),void 0)},removeClass:function(a,b,c){return w(a,z(b,"-remove"),c)}}}])}])}(window,window.angular),function(a,b,c){"use strict";function d(a){return null!=a&&""!==a&&"hasOwnProperty"!==a&&g.test("."+a)}function e(a,b){if(!d(b))throw f("badmember",'Dotted member path "@{0}" is invalid.',b);for(var e=b.split("."),g=0,h=e.length;h>g&&a!==c;g++){var i=e[g];a=null!==a?a[i]:c}return a}var f=b.$$minErr("$resource"),g=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;b.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(a,d){function g(a){return h(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function h(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function i(a,b){this.template=a,this.defaults=b||{},this.urlParams={}}function j(g,h,q){function r(a,b){var c={};return b=n({},h,b),m(b,function(b,d){p(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?e(a,b.substr(1)):b}),c}function s(a){return a.resource}function t(a){o(a||{},this)}var u=new i(g);return q=n({},k,q),m(q,function(e,g){var h=/^(POST|PUT|PATCH)$/i.test(e.method);t[g]=function(g,i,j,k){var q,v,w,x={};switch(arguments.length){case 4:w=k,v=j;case 3:case 2:if(!p(i)){x=g,q=i,v=j;break}if(p(g)){v=g,w=i;break}v=i,w=j;case 1:p(g)?v=g:h?q=g:x=g;break;case 0:break;default:throw f("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var y=this instanceof t,z=y?q:e.isArray?[]:new t(q),A={},B=e.interceptor&&e.interceptor.response||s,C=e.interceptor&&e.interceptor.responseError||c;m(e,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(A[b]=o(a))}),h&&(A.data=q),u.setUrlParams(A,n({},r(q,e.params||{}),x),e.url);var D=a(A).then(function(a){var c=a.data,d=z.$promise;if(c){if(b.isArray(c)!==!!e.isArray)throw f("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",e.isArray?"array":"object",b.isArray(c)?"array":"object");e.isArray?(z.length=0,m(c,function(a){z.push(new t(a))})):(o(c,z),z.$promise=d)}return z.$resolved=!0,a.resource=z,a},function(a){return z.$resolved=!0,(w||l)(a),d.reject(a)});return D=D.then(function(a){var b=B(a);return(v||l)(b,a.headers),b},C),y?D:(z.$promise=D,z.$resolved=!1,z)},t.prototype["$"+g]=function(a,b,c){p(a)&&(c=b,b=a,a={});var d=t[g].call(this,a,this,b,c);return d.$promise||d}}),t.bind=function(a){return j(g,n({},h,a),q)},t}var k={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},l=b.noop,m=b.forEach,n=b.extend,o=b.copy,p=b.isFunction;return i.prototype={setUrlParams:function(a,c,d){var e,h,i=this,j=d||i.template,k=i.urlParams={};m(j.split(/\W/),function(a){if("hasOwnProperty"===a)throw f("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(j)&&(k[a]=!0)}),j=j.replace(/\\:/g,":"),c=c||{},m(i.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:i.defaults[d],b.isDefined(e)&&null!==e?(h=g(e),j=j.replace(new RegExp(":"+d+"(\\W|$)","g"),h+"$1")):j=j.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),j=j.replace(/\/+$/,""),j=j.replace(/\/\.(?=\w+($|\?))/,"."),a.url=j.replace(/\/\\\./,"/."),m(c,function(b,c){i.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},j}])}(window,window.angular),function(a,b,c){"use strict";b.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(a,d){function e(){var a,e,f,i;for(a in h)k(g[a])&&d.cookies(a,c);for(a in g)e=g[a],b.isString(e)?e!==h[a]&&(d.cookies(a,e),i=!0):b.isDefined(h[a])?g[a]=h[a]:delete g[a];if(i){i=!1,f=d.cookies();for(a in g)g[a]!==f[a]&&(k(f[a])?delete g[a]:g[a]=f[a],i=!0)}}var f,g={},h={},i=!1,j=b.copy,k=b.isUndefined;return d.addPollFn(function(){var b=d.cookies();f!=b&&(f=b,j(b,h),j(b,g),i&&a.$apply())})(),i=!0,a.$watch(e),g}]).factory("$cookieStore",["$cookies",function(a){return{get:function(c){var d=a[c];return d?b.fromJson(d):d},put:function(c,d){a[c]=b.toJson(d)},remove:function(b){delete a[b]}}}])}(window,window.angular),function(a,b){"use strict";function c(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return f(b,i(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function d(a){var c=[],d=i(c,b.noop);return d.chars(a),c.join("")}function e(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function f(a,c){function d(a,d,f,h){if(d=b.lowercase(d),x[d])for(;s.last()&&y[s.last()];)e("",s.last());w[d]&&s.last()==d&&e("",d),h=t[d]||!!h,h||s.push(d);var i={};f.replace(m,function(a,b,c,d,e){var f=c||d||e||"";i[b]=g(f)}),c.start&&c.start(d,i,h)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=s.length-1;f>=0&&s[f]!=d;f--);if(f>=0){for(e=s.length-1;e>=f;e--)c.end&&c.end(s[e]);s.length=f}}var f,h,i,s=[],u=a;for(s.last=function(){return s[s.length-1]};a;){if(h=!0,s.last()&&z[s.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+s.last()+"[^>]*>","i"),function(a,b){return b=b.replace(p,"$1").replace(r,"$1"),c.chars&&c.chars(g(b)),""}),e("",s.last());else if(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),h=!1)):q.test(a)?(i=a.match(q),i&&(a=a.replace(i[0],""),h=!1)):o.test(a)?(i=a.match(l),i&&(a=a.substring(i[0].length),i[0].replace(l,e),h=!1)):n.test(a)&&(i=a.match(k),i&&(a=a.substring(i[0].length),i[0].replace(k,d),h=!1)),h){f=a.indexOf("<");var v=0>f?a:a.substring(0,f);a=0>f?"":a.substring(f),c.chars&&c.chars(g(v))}if(a==u)throw j("badparse","The sanitizer was unable to parse the following block of html: {0}",a);u=a}e()}function g(a){if(!a)return"";var b=E.exec(a),c=b[1],d=b[3],e=b[2];return e&&(D.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in D?D.textContent:D.innerText),c+e+d}function h(a){return a.replace(/&/g,"&amp;").replace(s,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&z[a]&&(d=a),d||A[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),i="img"===a&&"src"===g||"background"===g;C[g]!==!0||B[g]===!0&&!c(d,i)||(e(" "),e(f),e('="'),e(h(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||A[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(h(a))}}}var j=b.$$minErr("$sanitize"),k=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,l=/^<\s*\/\s*([\w:-]+)[^>]*>/,m=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,n=/^</,o=/^<\s*\//,p=/<!--(.*?)-->/g,q=/<!DOCTYPE([^>]*?)>/i,r=/<!\[CDATA\[(.*?)]]>/g,s=/([^\#-~| |!])/g,t=e("area,br,col,hr,img,wbr"),u=e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=e("rp,rt"),w=b.extend({},v,u),x=b.extend({},u,e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),y=b.extend({},v,e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),z=e("script,style"),A=b.extend({},t,x,y,w),B=e("background,cite,href,longdesc,src,usemap"),C=b.extend({},B,e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),D=document.createElement("pre"),E=/^(\s*)([\s\S]*?)(\s*)$/;b.module("ngSanitize",[]).provider("$sanitize",c),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,e=/^mailto:/;return function(f,g){function h(a){a&&n.push(d(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&(n.push('target="'),n.push(g),n.push('" ')),n.push('href="'),n.push(a),n.push('">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]==j[3]&&(k="mailto:"+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(e,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular);