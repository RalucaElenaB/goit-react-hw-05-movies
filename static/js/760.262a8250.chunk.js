"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[760],{760:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(439),r=n(689),c=n(791),i=n(861),o=n(757),s=n.n(o),u=n(340),f=function(){var e=(0,i.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"credits","en-US","f69b218f7039aed7eae0062e90da9fdc",u.Z.defaults.baseURL="https://api.themoviedb.org/3/",e.prev=4,e.next=7,u.Z.get("movie/".concat(t,"/").concat("credits","?api_key=").concat("f69b218f7039aed7eae0062e90da9fdc","&language=").concat("en-US"));case 7:return n=e.sent,a=n.data,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(4),console.log("Something wrong with API",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),h=n(184),d=function(){var e=(0,r.UO)().movieId,t=(0,c.useState)([]),n=(0,a.Z)(t,2),i=n[0],o=n[1];return(0,c.useEffect)((function(){var t=!0;return f(e).then((function(e){t&&o(e.cast)})),function(){return t=!1}}),[]),(0,h.jsx)("div",{className:"cast-section",children:(0,h.jsx)("ul",{children:0===i.length?(0,h.jsx)("p",{children:"There is no data in the TMDB database for the cast of this film."}):i.map((function(e,t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500"+e.profile_path:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:e.name?e.original_name:"Actor coming soon"}),(0,h.jsx)("h3",{children:e.name}),(0,h.jsx)("p",{children:e.character})]},t)}))})})}}}]);
//# sourceMappingURL=760.262a8250.chunk.js.map