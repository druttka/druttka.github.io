(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},5577:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var r=n(5893),o=n(1664),i=(n(7294),n(6395)),a=n.n(i),u=function(){return(0,r.jsx)("footer",{className:a().footer,children:(0,r.jsx)(o.default,{href:"/attribution",children:"Attribution"})})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},u=n(6273),c=n(387),l=n(7190);var f={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),i=a.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,p=i.as,v=e.children,m=e.replace,h=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,g=o(l.useIntersection({rootMargin:"200px"}),2),w=g[0],x=g[1],j=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=x&&n&&u.isLocalURL(d),t="undefined"!==typeof _?_:r&&r.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(r,d,p,{locale:t})}),[p,d,x,_,n,r]);var k={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:a}))}(e,r,d,p,m,h,y,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof _?_:r&&r.locale,L=r&&r.isLocaleDomain&&u.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);k.href=L||u.addBasePath(u.addLocale(p,E,r&&r.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=i.useRef(),s=o(i.useState(!1),2),d=s[0],p=s[1],v=o(i.useState(t?t.current:null),2),m=v[0],h=v[1],y=i.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return i.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&h(t.current)}),[t]),[y,d]};var i=n(7294),a=n(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},5075:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(9008),i=n(5577),a=n(1673),u=n.n(a);t.default=function(){return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"David Ruttka"}),(0,r.jsx)("meta",{name:"description",content:"David Ruttka's personal website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:u().main,children:[(0,r.jsx)("h1",{className:u().title,children:"Hello, I'm David."}),(0,r.jsx)("p",{className:u().description,children:"I'm thinking about what I want to put here next."})]}),(0,r.jsx)(i.$,{})]})}},6395:function(e){e.exports={footer:"footer_footer__LV2HF"}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc",linkList:"Home_linkList__GoDHY"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);