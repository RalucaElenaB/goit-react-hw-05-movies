"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[627],{627:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),u=n(439),a=n(757),c=n.n(a),s=n(791),i=n(689),o=n(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var f=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error("Request timed out"))}),e)}))},p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,u,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=f(5e3),n=o.Z.get("".concat("trending/movie/day","?api_key=").concat("f69b218f7039aed7eae0062e90da9fdc")),e.next=5,Promise.race([n,t]);case 5:return r=e.sent,u=r.data,a=u.results,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log("Something went wrong with API request",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),h=n(87),m=n(396),d=n(184),l=function(){var e=(0,s.useState)([]),t=(0,u.Z)(e,2),n=t[0],a=t[1],o=(0,i.TH)(),f=(0,s.useState)(!1),l=(0,u.Z)(f,2),v=l[0],w=l[1];return(0,s.useEffect)((function(){var e=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,e(1e3);case 3:return t.next=5,p();case 5:n=t.sent,a(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),w(!1)}),[]),(0,d.jsxs)(d.Fragment,{children:[v&&(0,d.jsx)(m.Z,{}),(0,d.jsx)("ul",{children:n.map((function(e,t){return(0,d.jsx)("li",{children:(0,d.jsx)(h.rU,{to:"./movies/".concat(e.id),state:{from:o.pathname+o.search},children:e.title})},t)}))})]})}}}]);
//# sourceMappingURL=627.082022cc.chunk.js.map