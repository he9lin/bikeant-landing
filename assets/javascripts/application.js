window.ScrollToLinks=function(e){function t(){e("a.scrollto").click(function(e){e.preventDefault(),n(this.hash)})}function n(t,n){var i=e.extend({gap:{y:-60}},n||{});console.log(t),e("html,body").scrollTo(t,t,i),e(".navbar-collapse").hasClass("in")&&e(".navbar-collapse").removeClass("in").addClass("collapse")}return{setup:t}}(jQuery),window.RedIntro=function(){function e(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};e.any()||$(window).stellar({horizontalScrolling:!1})}function t(){e()}return{setup:t}}(),window.FoodsterIntro=function(){function e(){"use strict";var e=$(window).height();$("#hero-carousel .item").css("height",e)}function t(){e(),$(document).scroll(function(){"use strict";$(this).scrollTop()>=$("header").position().top&&$("nav").addClass("navbar-shrink"),$(window).scrollTop()<$("header").height()+1&&$("nav").removeClass("navbar-shrink"),$("nav").hasClass("navbar-shrink")?$("body").addClass("navbar-shrink-margin"):$("body").removeClass("navbar-shrink-margin")}),$(window).scroll(function(){"use strict";$(this).scrollTop()>100?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()}),$("body").scrollspy({target:".navbar-shrink",offset:85}),$("a.page-scroll").bind("click",function(e){var t=$(this);t.hasClass("header-scroll")?$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"):$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-75},1500,"easeInOutExpo"),e.preventDefault()}),$(window).resize(function(){"use strict";e()}),$("#hero-carousel").on("slide.bs.carousel",function(){e()}),(new WOW).init()}return{setup:t}}(),window.HomeIntro=function(){function e(){function e(){$(window).scrollTop()<50?r.removeClass("scrolled"):r.addClass("scrolled")}e(),$(window).scroll(function(){e()})}function t(){return 0==$(".fullscreen-carousel").length?!1:void $(".fullscreen-carousel").flexslider({animation:"slide",animationSpeed:700,animationLoop:!0,slideshow:!0,easing:"swing",controlNav:!1,before:function(e){$(".fullscreen-carousel .overlay-hero .caption-hero").fadeOut().animate({top:"80px"},{queue:!1,easing:"easeOutQuad",duration:700}),e.slides.eq(e.currentSlide).delay(400),e.slides.eq(e.animatingTo).delay(400)},after:function(e){$(".fullscreen-carousel .flex-active-slide .caption-hero").fadeIn(2e3).animate({top:"0"},{queue:!1,easing:"easeOutQuad",duration:1200})},start:function(e){$("body").removeClass("loading")},useCSS:!0})}function n(){var e=($(window).width(),$(window).height());$(window).width()>767?$(".hero-slider .slides li").css("height",e):$(".hero-slider .slides li").css("height","400px")}function i(){e(),t()}var r=$(".x-main-nav");return n(),$(window).resize(function(){n()}),{setup:i}}(),window.HomeStart=function(e){function t(){function t(){e(window).scrollTop()<a-100?o.removeClass("scrolled"):o.addClass("scrolled")}t(),e(window).scroll(function(){t()})}function n(){r.height(a),e.backstretch(s),e(window).scroll(function(){var t=e(this).scrollTop(),n=e(window).height(),i=1.2-t/(10*n);$backstretch=e(".backstretch"),$backstretch.find("img").css({transform:"scale("+i+")","-webkit-transform":"scale("+i+")"}),r.find(".container").css({opacity:1.4-t/400}),e(window).scrollTop()>a?$backstretch.hide():$backstretch.show()})}function i(){n(),t()}var r=e(".x-home-start"),o=e(".x-main-nav"),s=r.data("image-url"),a=e(window).height()+50;return{setup:i}}(jQuery),window.WorkGallery=function(){function e(e){var t=e.find(".grid"),n=e.find(".x-categories-filter");t.imagesLoaded(function(){t.isotope({itemSelector:".grid-item"})}),n.on("click",".categories",function(e){e.preventDefault(),n.find(".active").removeClass("active"),$(this).addClass("active");var i=$(this).attr("data-filter");t.isotope({filter:i})})}function t(){var t=$("#work-gallery");e(t)}return{setup:t}}(),window.MultiGalleries=function(){function e(){$(".x-owl-carousel-item").owlCarousel({autoPlay:!1,autoHeight:!0,stopOnHover:!0,singleItem:!0,slideSpeed:350,pagination:!0,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:!0})}return{setup:e}}(),window.Map=function(){function e(){}return{setup:e}}(),/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}.call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===f.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var r=this;setTimeout(function(){r.check()})}function a(e){this.img=e}function l(e){this.src=e,h[e]=this}var c=e.jQuery,u=e.console,d=void 0!==u,f=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var a=r[o];this.addImage(a)}}},s.prototype.addImage=function(e){var t=new a(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&d&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return void this.complete();for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},c&&(c.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(c(this))}),a.prototype=new t,a.prototype.check=function(){var e=h[this.img.src]||new l(this.img.src);if(e.isConfirmed)return void this.confirm(e.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var h={};return l.prototype=new t,l.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},l.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},l.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},l.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s}),window.PageLoader=function(){function e(){$("body").imagesLoaded(function(){$("#page-loader").fadeOut(10,function(){})})}return{setup:e}}(),window.MonologButtons=function(e){function t(){var t=e("a.x-monolog-btn");t.click(function(t){t.preventDefault();var n=new Monolog({loader:!1,close:!0});n.show(),$div=e(e(this).attr("href")),n.setContent($div.html())})}return{setup:t}}(jQuery),window.Carousel=function(){function e(){$(".x-carousel").slick({dots:!0,speed:400,autoplay:!0,arrows:!1,easing:"easeInOutCubic"})}return{setup:e}}(),window.LateralMenu=function(){function e(){LateralMenu.$cd_lateral_nav.hasClass("lateral-menu-is-open")&&(LateralMenu.$lateral_menu_trigger.removeClass("is-clicked"),LateralMenu.$navigation.removeClass("lateral-menu-is-open"),LateralMenu.$content_wrapper.removeClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").removeClass("overflow-hidden")}),LateralMenu.$cd_lateral_nav.removeClass("lateral-menu-is-open"),$("html").hasClass("no-csstransitions")&&$("body").removeClass("overflow-hidden"))}function t(){LateralMenu.$lateral_menu_trigger.toggleClass("is-clicked"),LateralMenu.$navigation.toggleClass("lateral-menu-is-open"),LateralMenu.$content_wrapper.toggleClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").toggleClass("overflow-hidden")}),LateralMenu.$cd_lateral_nav.toggleClass("lateral-menu-is-open"),$("html").hasClass("no-csstransitions")&&$("body").toggleClass("overflow-hidden")}function n(){LateralMenu.$lateral_menu_trigger.on("click",function(e){e.preventDefault(),t()}),LateralMenu.$content_wrapper.on("click",function(t){$(t.target).is("#cd-menu-trigger, #cd-menu-trigger span")||e()}),LateralMenu.$cd_lateral_nav.find(".cd-single-item-wrapper a").on("click",function(t){this.hash&&(t.preventDefault(),e(),$("html, body").stop().animate({scrollTop:$(this.hash).offset().top+20},1500,"easeInOutExpo"))}),$(".item-has-children").children("a").on("click",function(e){e.preventDefault(),$(this).toggleClass("submenu-open").next(".sub-menu").slideToggle(200).end().parent(".item-has-children").siblings(".item-has-children").children("a").removeClass("submenu-open").next(".sub-menu").slideUp(200)})}function i(t){$.each(t,function(t,n){var i=new Hammer(n,{});i.on("panright",function(t){e()})})}function r(){this.$lateral_menu_trigger=$("#cd-menu-trigger"),this.$content_wrapper=$(".cd-main-content"),this.$cd_lateral_nav=$("#cd-lateral-nav"),this.$navigation=$("header"),n(),i([this.$cd_lateral_nav[0],this.$cd_lateral_nav.find(".cd-navigation li a")[0]])}return{setup:r}}(),window.MpTrack=function(){function e(){$(".mp-event-btn").click(function(e){e.preventDefault(),$el=$(e.target);var t=$el.data("event"),n=$el.data("event-info");return mixpanel.track(t,n),$el.addClass("disabled"),setTimeout(function(){window.location=$el.attr("href")},350),!1})}return{setup:e}}(),$(function(){$("#fullpage").fullpage({anchors:["page-0"],navigationPosition:"right",slidesNavigation:!0,slidesNavPosition:"bottom"}),ScrollToLinks.setup(),MonologButtons.setup(),Carousel.setup(),MpTrack.setup()});