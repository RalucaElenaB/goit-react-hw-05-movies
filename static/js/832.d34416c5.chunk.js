"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[832],{202:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(689),a=n(87),c=n(184),u=function(){var e,t=(0,r.TH)(),n=(null===(e=t.state)||void 0===e?void 0:e.from)||"/movies";return(0,c.jsx)("div",{children:(0,c.jsx)(a.OL,{className:"button",to:n,state:{from:t.pathname},children:"Back"})})}},832:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(184),i=function(e){var t=e.onSubmit,n=e.onChange,r=e.query;return(0,s.jsxs)("form",{onSubmit:t,children:[(0,s.jsx)("input",{type:"text",placeholder:"movie search",value:r,onChange:n}),(0,s.jsx)("button",{"aria-label":"search",type:"submit",children:(0,s.jsx)("span",{className:"search",children:"Search"})})," "]})},o=n(791),l=n(87),f=n(340);f.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.get("".concat("search/movie","?api_key=").concat("f69b218f7039aed7eae0062e90da9fdc","&query=").concat(t,"&language=").concat("en-US","&include_adult=false"));case 3:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log("Something wrong with API",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=n(689),d=n(202);l.rU;var p=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,o.useState)([]),p=(0,a.Z)(f,2),m=p[0],x=p[1],g=(0,l.lr)(),b=(0,a.Z)(g,2),j=b[0],w=b[1],y=(0,v.TH)();(0,o.useEffect)((function(){if(null!==j.get("query")){var e=j.get("query"),t=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:n=e.sent,x(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t(e),_()}}),[j]);var _=function(){c("")};return(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Z,{}),(0,s.jsx)("h1",{children:"Movie Search"}),(0,s.jsx)(i,{onSubmit:function(e){e.preventDefault(),""!==n.trim()&&w({query:n})},onChange:function(e){c(e.currentTarget.value.toLowerCase())},query:n}),(0,s.jsx)("ul",{children:m.map((function(e,t){return(0,s.jsx)("li",{children:(0,s.jsx)(l.rU,{to:"./".concat(e.id),state:{from:y.pathname+y.search},children:e.title})},t)}))})]})}}}]);
//# sourceMappingURL=832.d34416c5.chunk.js.map