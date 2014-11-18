/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-6d456da
 */
!function(){"use strict";function t(t,e,n,r,o){function l(t){function n(t,e){e.addClass("md-sticky-clone");var n={element:t,clone:e};return m.items.push(n),p.parent().prepend(n.clone),f(),function(){m.items.forEach(function(e,n){e.element[0]===t[0]&&(m.items.splice(n,1),e.clone.remove())}),f()}}function o(){m.items.forEach(l),m.items=m.items.sort(function(t,e){return t.top<e.top?-1:1});for(var t,e=p.prop("scrollTop"),n=m.items.length-1;n>=0;n--)if(e>m.items[n].top){t=m.items[n];break}s(t)}function l(t){var e=t.element[0];for(t.top=0,t.left=0;e&&e!==p[0];)t.top+=e.offsetTop,t.left+=e.offsetLeft,e=e.offsetParent;t.height=t.element.prop("offsetHeight"),t.clone.css("margin-left",t.left+"px")}function c(){var t=p.prop("scrollTop"),e=t>(c.prevScrollTop||0);c.prevScrollTop=t,0===t?s(null):e&&m.next?m.next.top-t<=0?s(m.next):m.current&&(m.next.top-t<=m.next.height?u(m.current,m.next.top-m.next.height-t):u(m.current,null)):!e&&m.current&&(t<m.current.top&&s(m.prev),m.current&&m.next&&(t>=m.next.top-m.current.height?u(m.current,m.next.top-t-m.current.height):u(m.current,null)))}function s(t){if(m.current!==t){m.current&&(u(m.current,null),a(m.current,null)),t&&a(t,"active"),m.current=t;var e=m.items.indexOf(t);m.next=m.items[e+1],m.prev=m.items[e-1],a(m.next,"next"),a(m.prev,"prev")}}function a(t,e){t&&t.state!==e&&(t.state&&(t.clone.attr("sticky-prev-state",t.state),t.element.attr("sticky-prev-state",t.state)),t.clone.attr("sticky-state",e),t.element.attr("sticky-state",e),t.state=e)}function u(t,n){t&&(null===n||void 0===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=n,t.clone.css(e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+n+"px,0)")))}var p=t.$element,f=r.debounce(o);i(p),p.on("$scrollstart",f),p.on("$scroll",c);var m;return m={prev:null,current:null,next:null,items:[],add:n,refreshElements:o}}function c(){var e,n=angular.element("<div>");t[0].body.appendChild(n[0]);for(var r=["sticky","-webkit-sticky"],o=0;o<r.length;++o)if(n.css({position:r[o],top:0,"z-index":2}),n.css("position")==r[o]){e=r[o];break}return n.remove(),e}function i(t){function e(){+o.now()-l>c?(n=!1,t.triggerHandler("$scrollend")):(t.triggerHandler("$scroll"),r(e))}var n,l,c=200;t.on("scroll touchmove",function(){n||(n=!0,r(e),t.triggerHandler("$scrollstart")),t.triggerHandler("$scroll"),l=+o.now()})}var s=c();return function(t,e,n){var r=e.controller("mdContent");if(r)if(s)e.css({position:s,top:0,"z-index":2});else{var o=r.$element.data("$$sticky");o||(o=l(r),r.$element.data("$$sticky",o));var c=o.add(e,n||e.clone());t.$on("$destroy",c)}}}angular.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",t),t.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}();