!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var o=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.smoothElement=[].slice.call(document.getElementsByClassName(t.triggerClass)),this.duration=t.duration,this.animationId,this.movePosition,this.startScrollY,this.smoothElement.forEach((function(e){e.addEventListener("click",(function(e){n.targetId=e.currentTarget.getAttribute(t.targetValue),"#"===n.targetId?n.targetPosition=0:document.querySelector(n.targetId).getBoundingClientRect().top+pageYOffset+innerHeight>document.body.clientHeight?n.targetPosition=document.body.clientHeight-innerHeight:n.targetPosition=document.querySelector(n.targetId).getBoundingClientRect().top+pageYOffset-document.getElementById("js-header").offsetHeight,n.startTime=Date.now(),n.startScrollY=pageYOffset,n.smoothScroll()}))}))}var t,n,o;return t=e,(n=[{key:"easeInOutQuad",value:function(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}},{key:"smoothScroll",value:function(){var e=this,t=Math.min(1,(Date.now()-this.startTime)/this.duration);this.movePosition=this.startScrollY+(this.targetPosition-this.startScrollY)*this.easeInOutQuad(t),window.scrollTo(0,this.movePosition),t<1&&(this.animationId=requestAnimationFrame((function(){e.smoothScroll()})))}}])&&i(t.prototype,n),o&&i(t,o),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;n.config={elemment:document.getElementsByClassName("js-inView"),reference:window,className:"add-inView",visibleType:"top",responsive:!1,reverse:!1,callback:function(){}},n._execute=n._execute.bind(n),n.count=0,t&&function(e,t){for(var n in t)e[n]=t[n]}(n.config,t),n.config.elemment&&n._initialize()}var t,n,i;return t=e,(n=[{key:"_initialize",value:function(){var e=this;e._execute(),e.config.reference.addEventListener("scroll",e._execute),e.config.reference.addEventListener("resize",e._execute)}},{key:"_dispose",value:function(){this.config.reference.removeEventListener("scroll",this._execute),this.config.reference.removeEventListener("resize",this._execute)}},{key:"_execute",value:function(){for(var e=0;e<this._getElemmentLength();e++)this._jadgeInView(this.config.elemment[e])}},{key:"_getElemmentLength",value:function(){return this.config.elemment.length}},{key:"_hasClass",value:function(e){return-1!==e.className.split(" ").indexOf(this.config.className)}},{key:"_getReferenceOffset",value:function(){return this.config.reference===window?window.pageYOffset:this.config.reference.scrollTop}},{key:"_getThisOffset",value:function(e,t){var n=e.getBoundingClientRect().top+this._getReferenceOffset(),i="number"==typeof t?t:0;return"middle"===t?i=e.offsetHeight/2:"bottom"===t&&(i=e.offsetHeight),n+i}},{key:"_jadgeInView",value:function(e){var t=this,n=t._getThisOffset(e,t.config.visibleType);if(t._getReferenceOffset()+innerHeight>=n)t._hasClass(e)||(e.className+=" "+t.config.className,e.className=e.className.replace(/^\s|\s$/g,""),t.config.callback(e),t.config.reverse||(t.count++,t._getElemmentLength()===t.count&&t._dispose()));else if(t.config.reverse&&t._hasClass(e)){var i=" "+e.className+" ";e.className=i.replace(" "+t.config.className+" ","").replace(/^\s|\s$/g,""),t.config.callback(e)}}}])&&s(t.prototype,n),i&&s(t,i),e}();document,window,function(){!function(e,t){function n(e){e.preventDefault()}var i,s,a=e.getElementById("js-kvScroll");t.addEventListener("load",(function(){setTimeout((function(){t.scrollTo(0,0)}),10),t.addEventListener("mousewheel",n,{passive:!1}),t.addEventListener("touchmove",n,{passive:!1}),e.body.classList.add("add-loaded")})),a.addEventListener("transitionend",(function(){t.removeEventListener("mousewheel",n,{passive:!1}),t.removeEventListener("touchmove",n,{passive:!1}),e.body.classList.remove("add-lock"),new r({visibleType:"middle"})}));var c,l,d=!1,u=!1;t.addEventListener("touchstart",(function(e){c=e.changedTouches[0].clientY}));var f=function(e){s=e.changedTouches[0].clientY,i=this.clientHeight,d=c<=s&&this.scrollTop<=0,u=c>=s&&this.scrollHeight-this.scrollTop<=i,(d||u)&&e.preventDefault()},v=function(e){l=f.bind(e),t.addEventListener("touchmove",l,{passive:!1})},g=e.getElementById("js-header"),m=e.getElementById("js-kvLogoWrap");t.addEventListener("scroll",(function(){m.getBoundingClientRect().bottom<=0?g.classList.add("add-visible"):g.classList.remove("add-visible")}));var h=!1,p=function(){var n=.01*t.innerHeight,i=m.clientHeight,o=g.clientHeight;e.documentElement.style.setProperty("--vh","".concat(n,"px")),h||(e.documentElement.style.setProperty("--loadVh","".concat(n,"px")),h=!0,e.documentElement.style.setProperty("--kvLogoWrapHeight","".concat(i,"px"))),e.documentElement.style.setProperty("--headerHeight","".concat(o,"px"))};t.addEventListener("load",p),t.addEventListener("resize",p);var y=e.getElementById("js-navHmbg"),b=e.getElementById("js-nav"),E=function(){y.classList[y.classList.contains("add-open")?"remove":"add"]("add-open"),m.getBoundingClientRect().bottom<=0||y.classList.contains("add-open")?g.classList.add("add-visible"):g.classList.remove("add-visible"),e.body.classList[y.classList.contains("add-open")?"add":"remove"]("add-lock"),y.classList.contains("add-open")?(p(),v(b)):t.removeEventListener("touchmove",l,{passive:!1}),b.classList[y.classList.contains("add-open")?"add":"remove"]("add-open")};y.addEventListener("click",(function(){E()})),b.addEventListener("click",(function(){E()}));new o({triggerClass:"js-pageLink",targetValue:"href",duration:300})}(document,window)}()}]);