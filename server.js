!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(9);var u=[{path:"/",exact:!0,component:((r=o)&&r.__esModule?r:{default:r}).default}];t.default=u},function(e,t,n){"use strict";var r=d(n(4)),o=d(n(5)),u=d(n(0)),a=n(6),l=n(1),i=d(n(7)),c=d(n(8)),f=d(n(2));function d(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)();s.use((0,o.default)()),s.use(r.default.static("public")),s.get("/",(function(e,t,n){var r=f.default.find((function(t){return(0,l.matchPath)(e.url,t)}))||{};(r.fetchInitialData?r.FetchInitialData(e.path):Promise.resolve()).then((function(n){var r={data:n},o=(0,a.renderToString)(u.default.createElement(l.StaticRouter,{location:e.url,context:r},u.default.createElement(c.default,null)));t.send('<!DOCTYPE html>\n    <html>\n      <head>\n        <script src="/bundle.js" defer><\/script>\n        <script>window.__INITIAL_DATA__ = '+(0,i.default)(n)+'<\/script>\n      </head>\n        <body>\n            <div id="app">'+o+"</div>\n        </body>\n    </html>")})).catch(n)})),s.listen(3e3,(function(){console.log("Server is listening on port: 3000")}))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=f(u),l=f(n(2)),i=n(1),c=f(n(10));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(i.Switch,null,l.default.map((function(e){var t=e.path,n=e.exact,o=e.component,u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["path","exact","component"]);return a.default.createElement(i.Route,{key:t,path:t,exact:n,render:function(e){return a.default.createElement(o,r({},e,u))}})})),a.default.createElement(i.Route,{render:function(e){return a.default.createElement(c.default,e)}})))}}]),t}(u.Component);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return u.default.createElement("div",null,u.default.createElement("h1",null,"Buen Trabajo Néstor"))};var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return u.default.createElement("h1",null,"Ha habido un error 404")};var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r}}]);