"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{840:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(689),s=n(791),c=n(861),i=n(757),o=n.n(i),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h=function(){var e=(0,c.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(t,"/").concat("reviews","?api_key=").concat("f69b218f7039aed7eae0062e90da9fdc","&language=").concat("en-US"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log("Something wrong with API",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=n(184),f=function(){var e=(0,a.UO)().movieId,t=(0,s.useState)([]),n=(0,r.Z)(t,2),c=n[0],i=n[1];return(0,s.useEffect)((function(){h(e).then((function(e){i(e.results)}))}),[]),(0,l.jsx)("div",{className:"reviews",children:0===c.length?(0,l.jsx)("p",{children:"There are no reviews in the TMDB database for this film."}):c.map((function(e,t){return(0,l.jsxs)("div",{className:"reviews-item",children:[(0,l.jsx)("h4",{children:"Author"}),(0,l.jsx)("p",{className:"reviews-p",children:e.author}),(0,l.jsx)("h4",{children:"Review"}),(0,l.jsx)("h5",{className:"reviews-h5",children:e.content})]},t)}))})}}}]);
//# sourceMappingURL=840.6f38a9bd.chunk.js.map