"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).adminlte={})}(void 0,function(e){var t=function(s){var e="ControlSidebar",n="lte.controlsidebar",t="."+n,o=s.fn[e],a={COLLAPSED:"collapsed"+t,EXPANDED:"expanded"+t},r=".control-sidebar",l=".control-sidebar-content",t='[data-widget="control-sidebar"]',d=".main-header",c=".main-footer",h="control-sidebar-animate",u="control-sidebar-open",f="control-sidebar-slide-open",g="layout-fixed",p="layout-navbar-fixed",b="layout-sm-navbar-fixed",m="layout-md-navbar-fixed",y="layout-lg-navbar-fixed",_="layout-xl-navbar-fixed",v="layout-footer-fixed",C="layout-sm-footer-fixed",w="layout-md-footer-fixed",x="layout-lg-footer-fixed",S="layout-xl-footer-fixed",H={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l"},i=function(){function i(e,t){this._element=e,this._config=t,this._init()}var e=i.prototype;return e.collapse=function(){this._config.controlsidebarSlide?(s("html").addClass(h),s("body").removeClass(f).delay(300).queue(function(){s(r).hide(),s("html").removeClass(h),s(this).dequeue()})):s("body").removeClass(u);var e=s.Event(a.COLLAPSED);s(this._element).trigger(e)},e.show=function(){this._config.controlsidebarSlide?(s("html").addClass(h),s(r).show().delay(10).queue(function(){s("body").addClass(f).delay(300).queue(function(){s("html").removeClass(h),s(this).dequeue()}),s(this).dequeue()})):s("body").addClass(u);var e=s.Event(a.EXPANDED);s(this._element).trigger(e)},e.toggle=function(){s("body").hasClass(u)||s("body").hasClass(f)?this.collapse():this.show()},e._init=function(){var e=this;this._fixHeight(),this._fixScrollHeight(),s(window).resize(function(){e._fixHeight(),e._fixScrollHeight()}),s(window).scroll(function(){(s("body").hasClass(u)||s("body").hasClass(f))&&e._fixScrollHeight()})},e._fixScrollHeight=function(){var e={scroll:s(document).height(),window:s(window).height(),header:s(d).outerHeight(),footer:s(c).outerHeight()},t=Math.abs(e.window+s(window).scrollTop()-e.scroll),o=s(window).scrollTop(),i=!1,n=!1;s("body").hasClass(g)&&((s("body").hasClass(p)||s("body").hasClass(b)||s("body").hasClass(m)||s("body").hasClass(y)||s("body").hasClass(_))&&"fixed"===s(d).css("position")&&(i=!0),(s("body").hasClass(v)||s("body").hasClass(C)||s("body").hasClass(w)||s("body").hasClass(x)||s("body").hasClass(S))&&"fixed"===s(c).css("position")&&(n=!0),0===o&&0===t?(s(r).css("bottom",e.footer),s(r).css("top",e.header),s(r+", "+r+" "+l).css("height",e.window-(e.header+e.footer))):t<=e.footer?!1===n?(s(r).css("bottom",e.footer-t),s(r+", "+r+" "+l).css("height",e.window-(e.footer-t))):s(r).css("bottom",e.footer):o<=e.header?!1===i?(s(r).css("top",e.header-o),s(r+", "+r+" "+l).css("height",e.window-(e.header-o))):s(r).css("top",e.header):!1===i?(s(r).css("top",0),s(r+", "+r+" "+l).css("height",e.window)):s(r).css("top",e.header))},e._fixHeight=function(){var e,t=s(window).height(),o=s(d).outerHeight(),i=s(c).outerHeight();s("body").hasClass(g)&&(e=t-o,(s("body").hasClass(v)||s("body").hasClass(C)||s("body").hasClass(w)||s("body").hasClass(x)||s("body").hasClass(S))&&"fixed"===s(c).css("position")&&(e=t-o-i),s(r+" "+l).css("height",e),void 0!==s.fn.overlayScrollbars&&s(r+" "+l).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}))},i._jQueryInterface=function(o){return this.each(function(){var e=s(this).data(n),t=s.extend({},H,s(this).data());if(e||(e=new i(this,t),s(this).data(n,e)),"undefined"===e[o])throw new Error(o+" is not a function");e[o]()})},i}();return s(document).on("click",t,function(e){e.preventDefault(),i._jQueryInterface.call(s(this),"toggle")}),s.fn[e]=i._jQueryInterface,s.fn[e].Constructor=i,s.fn[e].noConflict=function(){return s.fn[e]=o,i._jQueryInterface},i}(jQuery),o=function(n){var e="Layout",s="lte.layout",t=n.fn[e],a=".main-header",o=".main-sidebar",r=".main-sidebar .sidebar",l=".content-wrapper",d=".control-sidebar-content",c='[data-widget="control-sidebar"]',h=".main-footer",u='[data-widget="pushmenu"]',f=".login-box",g=".register-box",i="sidebar-focused",p="layout-fixed",b="control-sidebar-slide-open",m="control-sidebar-open",y={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,loginRegisterAutoHeight:!0},_=function(){function i(e,t){this._config=t,this._element=e,this._init()}var e=i.prototype;return e.fixLayoutHeight=function(e){void 0===e&&(e=null);var t=0;(n("body").hasClass(b)||n("body").hasClass(m)||"control_sidebar"==e)&&(t=n(d).height());var o={window:n(window).height(),header:0!==n(a).length?n(a).outerHeight():0,footer:0!==n(h).length?n(h).outerHeight():0,sidebar:0!==n(r).length?n(r).height():0,control_sidebar:t},e=this._max(o),t=this._config.panelAutoHeight;!1!==(t=!0===t?0:t)&&(e==o.control_sidebar?n(l).css("min-height",e+t):e==o.window?n(l).css("min-height",e+t-o.header-o.footer):n(l).css("min-height",e+t-o.header),this._isFooterFixed()&&n(l).css("min-height",parseFloat(n(l).css("min-height"))+o.footer)),n("body").hasClass(p)&&(!1!==t&&n(l).css("min-height",e+t-o.header-o.footer),void 0!==n.fn.overlayScrollbars&&n(r).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}))},e.fixLoginRegisterHeight=function(){var e;0===n(f+", "+g).length?n("body, html").css("height","auto"):0!==n(f+", "+g).length&&(e=n(f+", "+g).height(),n("body").css("min-height")!==e&&n("body").css("min-height",e))},e._init=function(){var e=this;this.fixLayoutHeight(),!0===this._config.loginRegisterAutoHeight?this.fixLoginRegisterHeight():Number.isInteger(this._config.loginRegisterAutoHeight)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),n(r).on("collapsed.lte.treeview expanded.lte.treeview",function(){e.fixLayoutHeight()}),n(u).on("collapsed.lte.pushmenu shown.lte.pushmenu",function(){e.fixLayoutHeight()}),n(c).on("collapsed.lte.controlsidebar",function(){e.fixLayoutHeight()}).on("expanded.lte.controlsidebar",function(){e.fixLayoutHeight("control_sidebar")}),n(window).resize(function(){e.fixLayoutHeight()}),setTimeout(function(){n("body.hold-transition").removeClass("hold-transition")},50)},e._max=function(t){var o=0;return Object.keys(t).forEach(function(e){t[e]>o&&(o=t[e])}),o},e._isFooterFixed=function(){return"fixed"===n(".main-footer").css("position")},i._jQueryInterface=function(o){return void 0===o&&(o=""),this.each(function(){var e=n(this).data(s),t=n.extend({},y,n(this).data());e||(e=new i(n(this),t),n(this).data(s,e)),"init"===o||""===o?e._init():"fixLayoutHeight"!==o&&"fixLoginRegisterHeight"!==o||e[o]()})},i}();return n(window).on("load",function(){_._jQueryInterface.call(n("body"))}),n(r+" a").on("focusin",function(){n(o).addClass(i)}),n(r+" a").on("focusout",function(){n(o).removeClass(i)}),n.fn[e]=_._jQueryInterface,n.fn[e].Constructor=_,n.fn[e].noConflict=function(){return n.fn[e]=t,_._jQueryInterface},_}(jQuery),i=function(n){var e="PushMenu",s="lte.pushmenu",t="."+s,o=n.fn[e],a={COLLAPSED:"collapsed"+t,SHOWN:"shown"+t},r={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0},i='[data-widget="pushmenu"]',l="body",d="#sidebar-overlay",c=".wrapper",h="sidebar-collapse",u="sidebar-open",f="sidebar-closed",g=function(){function i(e,t){this._element=e,this._options=n.extend({},r,t),n(d).length||this._addOverlay(),this._init()}var e=i.prototype;return e.expand=function(){this._options.autoCollapseSize&&n(window).width()<=this._options.autoCollapseSize&&n(l).addClass(u),n(l).removeClass(h).removeClass(f),this._options.enableRemember&&localStorage.setItem("remember"+t,u);var e=n.Event(a.SHOWN);n(this._element).trigger(e)},e.collapse=function(){this._options.autoCollapseSize&&n(window).width()<=this._options.autoCollapseSize&&n(l).removeClass(u).addClass(f),n(l).addClass(h),this._options.enableRemember&&localStorage.setItem("remember"+t,h);var e=n.Event(a.COLLAPSED);n(this._element).trigger(e)},e.toggle=function(){n(l).hasClass(h)?this.expand():this.collapse()},e.autoCollapse=function(e){void 0===e&&(e=!1),this._options.autoCollapseSize&&(n(window).width()<=this._options.autoCollapseSize?n(l).hasClass(u)||this.collapse():1==e&&(n(l).hasClass(u)?n(l).removeClass(u):n(l).hasClass(f)&&this.expand()))},e.remember=function(){this._options.enableRemember&&(localStorage.getItem("remember"+t)==h?this._options.noTransitionAfterReload?n("body").addClass("hold-transition").addClass(h).delay(50).queue(function(){n(this).removeClass("hold-transition"),n(this).dequeue()}):n("body").addClass(h):this._options.noTransitionAfterReload?n("body").addClass("hold-transition").removeClass(h).delay(50).queue(function(){n(this).removeClass("hold-transition"),n(this).dequeue()}):n("body").removeClass(h))},e._init=function(){var e=this;this.remember(),this.autoCollapse(),n(window).resize(function(){e.autoCollapse(!0)})},e._addOverlay=function(){var e=this,t=n("<div />",{id:"sidebar-overlay"});t.on("click",function(){e.collapse()}),n(c).append(t)},i._jQueryInterface=function(o){return this.each(function(){var e=n(this).data(s),t=n.extend({},r,n(this).data());e||(e=new i(this,t),n(this).data(s,e)),"string"==typeof o&&o.match(/collapse|expand|toggle/)&&e[o]()})},i}();return n(document).on("click",i,function(e){e.preventDefault();e=e.currentTarget;"pushmenu"!==n(e).data("widget")&&(e=n(e).closest(i)),g._jQueryInterface.call(n(e),"toggle")}),n(window).on("load",function(){g._jQueryInterface.call(n(i))}),n.fn[e]=g._jQueryInterface,n.fn[e].Constructor=g,n.fn[e].noConflict=function(){return n.fn[e]=o,g._jQueryInterface},g}(jQuery),n=function(a){var e="Treeview",n="lte.treeview",t="."+n,o=a.fn[e],r={SELECTED:"selected"+t,EXPANDED:"expanded"+t,COLLAPSED:"collapsed"+t,LOAD_DATA_API:"load"+t},s=".nav-item",l=".nav-treeview",d=".menu-open",i='[data-widget="treeview"]',c="menu-open",h="sidebar-collapse",u={trigger:i+" "+".nav-link",animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},f=function(){function i(e,t){this._config=t,this._element=e}var e=i.prototype;return e.init=function(){this._setupListeners()},e.expand=function(e,t){var o,i,n=this,s=a.Event(r.EXPANDED);this._config.accordion&&(i=(o=t.siblings(d).first()).find(l).first(),this.collapse(i,o)),e.stop().slideDown(this._config.animationSpeed,function(){t.addClass(c),a(n._element).trigger(s)}),this._config.expandSidebar&&this._expandSidebar()},e.collapse=function(e,t){var o=this,i=a.Event(r.COLLAPSED);e.stop().slideUp(this._config.animationSpeed,function(){t.removeClass(c),a(o._element).trigger(i),e.find(d+" > "+l).slideUp(),e.find(d).removeClass(c)})},e.toggle=function(e){var t=a(e.currentTarget),o=t.parent(),i=o.find("> "+l);(i.is(l)||(i=!o.is(s)?o.parent().find("> "+l):i).is(l))&&(e.preventDefault(),(t=t.parents(s).first()).hasClass(c)?this.collapse(a(i),t):this.expand(a(i),t))},e._setupListeners=function(){var t=this;a(document).on("click",this._config.trigger,function(e){t.toggle(e)})},e._expandSidebar=function(){a("body").hasClass(h)&&a(this._config.sidebarButtonSelector).PushMenu("expand")},i._jQueryInterface=function(o){return this.each(function(){var e=a(this).data(n),t=a.extend({},u,a(this).data());e||(e=new i(a(this),t),a(this).data(n,e)),"init"===o&&e[o]()})},i}();return a(window).on(r.LOAD_DATA_API,function(){a(i).each(function(){f._jQueryInterface.call(a(this),"init")})}),a.fn[e]=f._jQueryInterface,a.fn[e].Constructor=f,a.fn[e].noConflict=function(){return a.fn[e]=o,f._jQueryInterface},f}(jQuery);e.ControlSidebar=t,e.Layout=o,e.PushMenu=i,e.Treeview=n,Object.defineProperty(e,"__esModule",{value:!0})}),$("document").ready(function(){$(".custom-file-input").on("change",function(){var e=$(this).val().split("\\").pop();$(this).siblings(".custom-file-label").addClass("selected").html(e)}),$("#thumbnail-input").on("change",function(){var e=$(this).val().split("\\").pop();$(this).siblings(".custom-file-label").addClass("selected").html(e)}),$("#mainForm").on("submit",function(){$("#submit-btn-icon").remove(),$("#spinner").addClass("spinner-border spinner-border-sm")}),$(".btn-action-spinner").on("click",function(){$(this).html('<span id="spinner" class="spinner-border spinner-border-sm" style="vertical-align: middle;" role="status" aria-hidden="true"></span>')})});