(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{120:function(e,n,t){e.exports=t(244)},239:function(e,n,t){},244:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(15),c=t.n(i),o=t(17),u=t(9),l=t(12),s=t(35),p=t(18),m=t(6),f=t.n(m),d=t(11),b=t(62),v=t.n(b),h="810cef9b256b121526d76a171f2f8138",g="https://api.themoviedb.org/3/",E="http://image.tmdb.org/t/p/",x=function(){var e=Object(d.a)(f.a.mark((function e(n,t,r){var a,i,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"&language=".concat(t):"",i=r?"&query=".concat(r):"",c="".concat(g).concat(n,"?api_key=").concat(h).concat(a).concat(i),e.next=5,v.a.get(c).then((function(e){return e.data}));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("search/movie","ko",n);case 2:return t=e.sent.results,r=t.map((function(e){return{id:e.id,title:e.title,vote_average:e.vote_average,poster_path:e.poster_path?"".concat(E,"w500").concat(e.poster_path):null}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=t(245),w=function(){return{type:"movieApp/GET_LIKELIST",result:function(){for(var e=[],n=0;n<localStorage.length;n++){var t=localStorage.key(n),r=JSON.parse(localStorage.getItem(t));e.push(r)}return e}()}},k=Object(j.a)(Object(s.a)({},"movieApp/GET_LIKELIST",(function(e,n){var t=n.result;return Object(p.a)(Object(p.a)({},e),{},{likeList:{likeListSuccess:!0,result:t}})})),{likeList:{likeListSuccess:!1,result:[{id:"",title:"",rate:"",poster:""}]}}),_=t(13),y=t(44),S=t(4),T=t(5);function z(){var e=Object(S.a)(['\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -9px;\n  margin: 0 auto;\n  width: 0;\n  height: 0;\n  border-bottom: 7px solid white;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n']);return z=function(){return e},e}function I(){var e=Object(S.a)(["\n          flex-direction: column;\n          margin-left: 1.7rem;\n          height: 25px;\n          text-align: center;\n          li {\n          }\n          .nav_menu {\n            cursor: pointer;\n            width: ",";\n            margin-bottom: 30px;\n            span {\n              font-size: small;\n            }\n            & + li {\n              border-top: 2px solid white;\n            }\n          }\n          li:not(.nav_menu) {\n            display: ",";\n            background-color: rgba(20, 20, 20, 0.9);\n            transform: translateX(-38%);\n          }\n          li > a {\n            width: 100%;\n            padding: 13px 50px;\n            display: inline-block;\n            &:hover {\n              background-color: rgba(100, 100, 100, 0.5);\n            }\n          }\n        "]);return I=function(){return e},e}function L(){var e=Object(S.a)(["\n          ","\n          margin-left: 15px;\n          li {\n            ","\n            padding-left: 18px;\n            a:hover {\n              font-weight: 600;\n            }\n          }\n          .nav_menu {\n            display: none;\n          }\n        "]);return L=function(){return e},e}function A(){var e=Object(S.a)(["\n  ","\n  color: white;\n  font-size: 1.2em;\n  ","\n"]);return A=function(){return e},e}function N(){var e=Object(S.a)(["\n          display: flex;\n          align-items: center;\n          height: 100%;\n        "]);return N=function(){return e},e}function R(){var e=Object(S.a)(["\n          ","\n        "]);return R=function(){return e},e}function M(){var e=Object(S.a)(["\n  ","\n\n  & > a {\n    font-size: 1.8rem;\n    font-weight: bold;\n  }\n"]);return M=function(){return e},e}function C(){var e=Object(S.a)(["\n  ","\n  justify-content: space-between;\n  position: fixed;\n  background-color: ",";\n  transition: background-color 0.3s linear;\n  padding: 20px 40px;\n  height: 70px;\n  width: 100%;\n  z-index: 4;\n"]);return C=function(){return e},e}var D="\n  display: flex;\n  align-items: center;\n",F=T.b.nav(C(),D,(function(e){return e.isScroll?"rgba(20,20,20,0.95);":""})),q=T.b.section(M(),(function(e){return e.mobile?Object(T.a)(N()):Object(T.a)(R(),D)})),G=T.b.ul(A(),"\n  list-style: none;\n  padding: 0;\n  margin: 0;\n",(function(e){return e.mobile?Object(T.a)(I(),(function(e){return e.menuOpen?"27%":"100%"}),(function(e){return e.menuOpen?"":"none"})):Object(T.a)(L(),D,D)})),B=T.b.div(z()),V=t(78),J=t.n(V),U={searchResults:{searchSuccess:!1,result:[{id:"",title:"",vote_average:"",poster_path:""}]}},X=function(){var e=Object(d.a)(f.a.mark((function e(n){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return",{type:"movieApp/GET_SEARCH_RESULTS",searchResults:U.searchResults});case 2:return e.next=4,O(n);case 4:return t=e.sent,e.abrupt("return",{type:"movieApp/GET_SEARCH_RESULTS",searchResults:{searchSuccess:!0,result:t}});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=Object(j.a)(Object(s.a)({},"movieApp/GET_SEARCH_RESULTS",(function(e,n){var t=n.searchResults;return Object(p.a)(Object(p.a)({},e),{},{searchResults:t})})),U),H=t(248);function K(){var e=Object(S.a)(["\n          opacity: 1;\n          margin-right: 0px;\n          transition: opacity 0.5s ease 0.1s, margin-right 0.5s ease;\n        "]);return K=function(){return e},e}function W(){var e=Object(S.a)(["\n          opacity: 0;\n          margin-right: 15px;\n          transition: opacity 0.1s ease, margin-right 0.5s ease;\n          pointer-events: none;\n        "]);return W=function(){return e},e}function Y(){var e=Object(S.a)(["\n  position: relative;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  z-index: 5;\n  ",";\n"]);return Y=function(){return e},e}function P(){var e=Object(S.a)(["\n  width: ",";\n  opacity: ",";\n  position: absolute;\n  right: -15px;\n  margin-right: 10px;\n  padding: 5px 10px;\n  border-radius: 3px;\n  border-color: white;\n  background-color: rgba(20, 20, 20, 0.9);\n  transition: width 0.7s, opacity 0.7s ease;\n  &:hover {\n    border-color: white;\n  }\n  span {\n    color: white;\n    font-size: 1.4rem;\n  }\n  input {\n    background-color: rgba(20, 20, 20, 0);\n    color: white;\n    font-size: 1.1em;\n    margin: 0 5px;\n  }\n"]);return P=function(){return e},e}function Z(){var e=Object(S.a)(["\n  position: relative;\n  font-size: 1.4rem;\n  color: white;\n"]);return Z=function(){return e},e}var $=T.b.div(Z()),ee=Object(T.b)(H.a)(P(),(function(e){return e.searchopen?"250px":"10px"}),(function(e){return e.searchopen?"1":"0"})),ne=T.b.button(Y(),(function(e){return e.searchopen?Object(T.a)(W()):Object(T.a)(K())})),te=t(251);t(188);var re=a.a.memo((function(){var e=Object(u.b)(),n=Object(r.useState)(!1),t=Object(_.a)(n,2),i=t[0],c=t[1],o=Object(r.useState)(""),s=Object(_.a)(o,2),p=s[0],m=s[1],f=Object(r.useState)(!0),d=Object(_.a)(f,2),b=d[0],v=d[1],h=Object(r.useRef)(null),g=Object(l.f)(),E=Object(l.g)(),x=function(e,n){var t=Object(r.useState)(""),a=Object(_.a)(t,2),i=a[0],c=a[1];return Object(r.useEffect)((function(){var t=setTimeout((function(){return c(e)}),n);return function(){return clearTimeout(t)}}),[e,n]),i}(p,800);Object(r.useEffect)((function(){var n=E.search,t=J.a.parse(n).q;t?(O(),m(t),e(X(t))):(g.push("/"),c(!1),j())}),[]),Object(r.useEffect)((function(){if(""!==x||b||(g.goBack(),v(!0)),x){var n="/search?q=".concat(p);b?(g.push(n),v(!1)):g.replace(n)}e(X(x))}),[x]),Object(r.useEffect)((function(){E.pathname.includes("search")||(j(),v(!0))}),[E.pathname]);var O=function(){c(!0),h.current.focus()},j=function(){var e=E.pathname,n=J.a.parse(E.search).q;e.includes("search")&&n?c(!0):(c(!1),m(""))},w=function(){i?j():O()};return a.a.createElement($,{onBlur:w},a.a.createElement(ee,{ref:h,value:p,placeholder:"Search",prefix:a.a.createElement(te.a,null),searchopen:i?1:0,onChange:function(e){return m(e.target.value)}}),a.a.createElement(ne,{searchopen:i?1:0,onClick:w},a.a.createElement(te.a,null)))}));var ae=a.a.memo((function(){var e=Object(r.useState)(!1),n=Object(_.a)(e,2),t=n[0],i=n[1],c=Object(r.useState)(!1),u=Object(_.a)(c,2),l=u[0],s=u[1],p=Object(y.useMediaQuery)({query:"(max-width: 1199px)"}),m=Object(r.useRef)(null);Object(r.useEffect)((function(){window.addEventListener("scroll",(function(e){var n=e.srcElement.scrollingElement.scrollTop;s(n>=50)})),window.addEventListener("click",f)}));var f=function(e){t&&!m.current.contains(e.target)&&i(!1)},d=function(){p&&i(!t)};return a.a.createElement(F,{isScroll:l},a.a.createElement(q,{mobile:p},a.a.createElement(o.b,{to:"/"},"Movies"),a.a.createElement(G,{ref:m,mobile:p,menuOpen:t},a.a.createElement("li",{className:"nav_menu",onClick:d},"\uba54\ub274",a.a.createElement("span",null,"\u25bc")),a.a.createElement("li",null,a.a.createElement(B,null),a.a.createElement(o.b,{to:"/list/latest",onClick:d},"\ucd5c\uc2e0\uc21c")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/list/trend",onClick:d},"\uc778\uae30\uc21c")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/list/rated",onClick:d},"\ud3c9\uc810\uc21c")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/mymovie",onClick:d},"\ub098\uc758 \uc601\ud654")))),a.a.createElement(re,null))})),ie=t(252);function ce(){var e=Object(S.a)(["\n          top: 0;\n          height: 100%;\n          padding: 0 5px;\n          background-color: rgb(20, 20, 20, 0);\n          transition: all 0.5s ease;\n          span,\n          div {\n            opacity: 0;\n            transition: all 0.5s ease;\n          }\n        "]);return ce=function(){return e},e}function oe(){var e=Object(S.a)(["\n          bottom: 0;\n          height: auto;\n          background-color: rgb(20, 20, 20, 0.7);\n          padding: 8px 5px 12px;\n          span,\n          div {\n            opacity: 1;\n          }\n        "]);return oe=function(){return e},e}function ue(){var e=Object(S.a)(["\n  ","\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n\n  span {\n    text-align: center;\n    font-weight: 700;\n    font-size: 1.45rem;\n  }\n"]);return ue=function(){return e},e}function le(){var e=Object(S.a)(["\n      position: absolute;\n      top: 0;\n      right: 0;\n    "]);return le=function(){return e},e}function se(){var e=Object(S.a)(["\n  ","\n\n  font-size: 2.2rem;\n  padding: 15px 10px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  ","\n  ","\n  svg {\n    filter: drop-shadow(1px 0px 2px rgba(0, 0, 0, 0.4));\n  }\n"]);return se=function(){return e},e}function pe(){var e=Object(S.a)(["\n  position: relative;\n  height: 100%;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n  }\n  &:hover {\n    & > span {\n      opacity: 1;\n    }\n    & > span:hover {\n      transform: scale(1.15);\n    }\n    & > a > div {\n      background-color: rgb(20, 20, 20, 0.7);\n      span {\n        opacity: 1;\n      }\n      div {\n        opacity: 1;\n      }\n    }\n  }\n"]);return pe=function(){return e},e}function me(){var e=Object(S.a)(["\n  width: 100%;\n  margin: 1rem auto;\n  padding: 30px 50px 10px;\n  ","\n  h2 {\n    color: white;\n    font-size: 1.7rem;\n    font-weight: 600;\n    border-bottom: 1px solid #eee;\n    padding: 0 15px 15px;\n    margin-bottom: 30px;\n  }\n"]);return me=function(){return e},e}var fe=T.b.div(me(),(function(e){return e.nobanner&&"padding-top: 100px; margin-top: 0;"})),de=T.b.div(pe()),be=Object(T.b)(ie.a)(se(),(function(e){return!e.detailpage&&Object(T.a)(le())}),(function(e){return e.liked?"color: #ff7875;":"color: #eee;"}),(function(e){return e.mobile?"opacity: 1; ":"opacity: 0;"})),ve=T.b.div(ue(),(function(e){return e.mobile?Object(T.a)(oe()):Object(T.a)(ce())})),he=t(82),ge=t.n(he),Ee=t(250),xe=t(253);function Oe(){var e=Object(S.a)(["\n  width: ",";\n  display: flex;\n  color: #ffbc0b;\n  overflow: hidden;\n  position: absolute;\n  text-shadow: 2px 2px 5px #d29b09;\n  top: 0;\n  transition: all 0.5s;\n"]);return Oe=function(){return e},e}function je(){var e=Object(S.a)(["\n  display: flex;\n  position: relative;\n"]);return je=function(){return e},e}function we(){var e=Object(S.a)(["\n  display: flex;\n  position: relative;\n  margin-top: ",";\n  width: fit-content;\n"]);return we=function(){return e},e}var ke=T.b.div(we(),(function(e){return e.detailpage?"8px":"15px;"})),_e=T.b.div(je()),ye=T.b.div(Oe(),(function(e){return e.percent?10*e.percent+"%":"0%"})),Se=a.a.memo((function(e){return a.a.createElement(ke,null,a.a.createElement(_e,null,a.a.createElement(xe.a,null),a.a.createElement(xe.a,null),a.a.createElement(xe.a,null),a.a.createElement(xe.a,null),a.a.createElement(xe.a,null)),a.a.createElement(ye,{percent:e.rate},a.a.createElement(xe.a,null),a.a.createElement(xe.a,null),a.a.createElement(xe.a,null),a.a.createElement(xe.a,null),a.a.createElement(xe.a,null)))}));var Te,ze=function(e){var n=Object(y.useMediaQuery)({query:"(max-width: 1199px)"}),t=Object(y.useMediaQuery)({query:"(max-width: 575px)"}),i=Object(r.useState)(e.liked),c=Object(_.a)(i,2),l=c[0],s=c[1],p=Object(u.b)();return e.slider?a.a.createElement(de,null,a.a.createElement(o.b,{to:"/movie/".concat(e.id)},a.a.createElement("img",{src:e.poster?e.poster:ge.a,alt:e.title}),a.a.createElement(ve,{mobile:n?1:0},a.a.createElement("span",null,e.title),a.a.createElement(Se,{rate:e.rate})))):a.a.createElement(Ee.a,{xl:4,lg:6,md:8,sm:12,xs:24},a.a.createElement(de,{mobile:t?1:0},a.a.createElement(o.b,{to:"/movie/".concat(e.movieId)},a.a.createElement("img",{src:e.poster?e.poster:ge.a,alt:e.title}),a.a.createElement(ve,{mobile:n?1:0},a.a.createElement("span",null,e.title),a.a.createElement(Se,{rate:e.rate}))),a.a.createElement(be,{onClick:function(){l?function(){var n=e.movieId;localStorage.removeItem(n)}():function(){var n=e.movieId,t=e.rate,r={id:n,title:e.title,rate:t,poster:e.poster};localStorage.setItem(n,JSON.stringify(r))}(),s(!l),e.mymovie&&p(w())},liked:l?1:0,mobile:n?1:0})))},Ie=function(){var e=Object(d.a)(f.a.mark((function e(n,t,r){var a,i,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"&language=".concat(t):"",i=r?"&query=".concat(r):"",c="".concat(g).concat(n,"?api_key=").concat(h).concat(a).concat(i),e.next=5,v.a.get(c).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),Le=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie(n,"ko");case 2:return t=e.sent.results,r=t.map((function(e){return{id:e.id,title:e.title,vote_average:e.vote_average,poster_path:"".concat(E,"w500").concat(e.poster_path)}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(d.a)(f.a.mark((function e(n){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie("movie/".concat(n),"ko");case 2:return t=e.sent,e.abrupt("return",{id:Number(n),title:t.title,original_title:t.original_title,tagline:t.tagline,backdrop_path:"".concat(E,"original").concat(t.backdrop_path)});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie("movie/".concat(n),"ko");case 2:return t=e.sent,r=t.genres.map((function(e){return e.name})).join(", "),e.abrupt("return",{id:Number(n),title:t.title,original_title:t.original_title,overview:t.overview,genres:r,runtime:t.runtime,vote_average:t.vote_average,backdrop_path:"".concat(E,"original").concat(t.backdrop_path),poster_path:t.poster_path?"".concat(E,"w500").concat(t.poster_path):null});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Re=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie("movie/".concat(n,"/credits"));case 2:return t=e.sent,r=(r=t.cast.slice(0,10)).map((function(e){return{cast_id:e.id,character:e.character,name:e.name,profile_path:e.profile_path?"".concat(E,"w200").concat(e.profile_path):null}})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie("movie/".concat(n,"/videos"));case 2:return t=e.sent,r=t.results.map((function(e){if("YouTube"===e.site)return{url:"".concat("https://www.youtube.com/watch?v=").concat(e.key),thumbnail:"https://img.youtube.com/vi/".concat(e.key,"/mqdefault.jpg")}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie("movie/".concat(n,"/images"));case 2:return t=e.sent,r=t.backdrops.map((function(e){return"".concat(E,"original").concat(e.file_path)})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),De=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie("movie/".concat(n,"/similar"),"ko");case 2:return t=e.sent,r=(r=t.results.slice(0,8)).map((function(e){return{id:e.id,title:e.title,original_title:e.original_title,vote_average:e.vote_average,poster_path:"".concat(E,"w500").concat(e.poster_path)}})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(d.a)(f.a.mark((function e(n){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le(n);case 2:return t=e.sent,e.abrupt("return",{type:"movieApp/GET_MOVIES",result:t});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),qe=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,Le(n);case 3:r=e.sent;case 4:return a=r[Math.floor(Math.random()*r.length)].id,e.next=8,Ae(a);case 8:if(!((t=e.sent).title&&t.tagline&&t.backdrop_path)){e.next=12;break}return t={type:"movieApp/GET_MAINBANNERS",result:t},e.abrupt("break",14);case 12:e.next=4;break;case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(d.a)(f.a.mark((function e(n){var t,r,a,i,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne(n);case 2:return t=e.sent,e.next=5,Re(n);case 5:return r=e.sent,e.next=8,Me(n);case 8:return a=e.sent,e.next=11,Ce(n);case 11:return i=e.sent,e.next=14,De(n);case 14:return c=e.sent,e.abrupt("return",{type:"movieApp/GET_MOVIE_DETAIL",result:Object(p.a)(Object(p.a)({},t),{},{casts:r,videos:a,images:i,similarMovies:c})});case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Be=Object(j.a)((Te={},Object(s.a)(Te,"movieApp/GET_MOVIES",(function(e,n){var t=n.result;return Object(p.a)(Object(p.a)({},e),{},{movies:{moviesSuccess:!0,result:t}})})),Object(s.a)(Te,"movieApp/GET_MAINBANNERS",(function(e,n){var t=n.result;return Object(p.a)(Object(p.a)({},e),{},{mainBanner:{bannerSuccess:!0,result:t}})})),Object(s.a)(Te,"movieApp/GET_MOVIE_DETAIL",(function(e,n){var t=n.result;return Object(p.a)(Object(p.a)({},e),{},{movieDetail:{detailSuccess:!0,result:t}})})),Te),{movies:{moviesSuccess:!1,result:[{id:"",title:"",vote_average:"",poster_path:""}]},mainBanner:{bannerSuccess:!1,result:{id:"",title:"",original_title:"",tagline:"",backdrop_path:""}},movieDetail:{detailSuccess:!1,result:{id:"",title:"",original_title:"",overview:"",genres:"",runtime:"",vote_average:"",backdrop_path:"",poster_path:"",casts:[{cast_id:"",character:"",name:"",profile_path:""}],videos:[{url:"",thumbnail:""}],images:[],similarMovies:[{id:"",title:"",original_title:"",vote_average:"",poster_path:""}]}}}),Ve=t(85);function Je(){var e=Object(S.a)(["\n  background-color: rgba(109, 109, 110, 0.8);\n  height: auto;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  padding: 8px 1.8rem;\n  font-size: 1.2rem;\n  &:hover {\n    color: white;\n    background-color: rgba(109, 109, 110, 0.5);\n  }\n"]);return Je=function(){return e},e}function Ue(){var e=Object(S.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px 40px 60px;\n  h2,\n  p {\n    color: white;\n  }\n  h2 {\n    font-size: 2.3rem;\n    font-weight: bold;\n    margin-bottom: 13px;\n  }\n  p {\n    padding-left: 2px;\n    font-size: 1.3rem;\n  }\n"]);return Ue=function(){return e},e}function Xe(){var e=Object(S.a)(["\n  width: 100%;\n  height: 800px;\n  top: 0;\n  left: 0;\n  background: linear-gradient(\n    /* */ to bottom,\n    rgba(20, 20, 20, 0) 0%,\n    rgba(20, 20, 20, 0.5) 65%,\n    rgba(20, 20, 20, 0.75) 83%,\n    rgba(20, 20, 20, 1) 92%\n  );\n"]);return Xe=function(){return e},e}function Qe(){var e=Object(S.a)(["\n  position: relative;\n  background: radial-gradient(rgba(20, 20, 20, 0) 30%, rgba(20, 20, 20, 0.1) 60%, rgba(20, 20, 20, 0.7) 95%),\n    "," no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  height: 750px;\n"]);return Qe=function(){return e},e}var He=T.b.article(Qe(),(function(e){return e.image&&"url(".concat(e.image,") ")})),Ke=T.b.div(Xe()),We=T.b.div(Ue()),Ye=Object(T.b)(Ve.a)(Je());var Pe=a.a.memo((function(e){var n=e.type,t=Object(u.b)(),i=Object(u.c)((function(e){return e.movie.mainBanner})).result,c=Object(l.f)();return Object(r.useEffect)((function(){t(qe(n))}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(He,{image:i.backdrop_path},a.a.createElement("div",{className:"player"}),a.a.createElement(Ke,null),a.a.createElement(We,null,a.a.createElement("h2",null,i.title),a.a.createElement("p",null,i.tagline),a.a.createElement(Ye,{onClick:function(){return c.push("/movie/".concat(i.id))}},"\uc790\uc138\ud788 \ubcf4\uae30"))))})),Ze=t(249),$e={trend:"trending/movie/week",latest:"movie/now_playing",rated:"movie/top_rated"};var en=a.a.memo((function(e){var n=e.match,t=Object(u.b)(),i=Object(l.g)(),c=n.params.type;c=c||"trend";var o=Object(u.c)((function(e){return e.movie.movies})),s=o.moviesSuccess,p=o.result,m=Object(u.c)((function(e){return e.search.searchResults})),f=m.searchSuccess,d=m.result,b=Object(u.c)((function(e){return e.like.likeList.result})).map((function(e){return e.id})),v=Object(r.useState)(!1),h=Object(_.a)(v,2),g=h[0],E=h[1];return Object(r.useEffect)((function(){i.pathname.includes("search")?E(!0):E(!1),window.scrollTo(0,0)})),Object(r.useEffect)((function(){t(Fe($e[c])),window.scrollTo(0,0)}),[c]),g?a.a.createElement(r.Fragment,null,f&&a.a.createElement(r.Fragment,null,a.a.createElement(fe,{nobanner:!0},a.a.createElement(Ze.a,{gutter:[20,30]},d.map((function(e){return a.a.createElement(ze,{nobanner:!0,key:e.id,movieId:e.id,title:e.title,rate:e.vote_average,poster:e.poster_path?e.poster_path:null,liked:b.includes(e.id)})})))))):a.a.createElement(r.Fragment,null,s&&a.a.createElement(r.Fragment,null,a.a.createElement(Pe,{type:$e[c]}),a.a.createElement(fe,null,a.a.createElement(Ze.a,{gutter:[20,30]},p.map((function(e){return a.a.createElement(ze,{key:e.id,movieId:e.id,title:e.title,rate:e.vote_average,poster:e.poster_path?e.poster_path:null,liked:b.includes(e.id)})}))))))})),nn=t(254);function tn(){var e=Object(S.a)(["\n  position: relative;\n  color: white;\n  padding: 0 12vw;\n  margin-bottom: 10vh;\n  h2 {\n    color: white;\n    font-size: 1.8rem;\n    font-weight: 800;\n    margin-bottom: 20px;\n  }\n  div > button {\n    z-index: 2;\n    width: auto;\n    height: auto;\n  }\n  div > button:before {\n    font-size: 35px;\n  }\n  .slick-track {\n    margin: 0;\n  }\n  .slick-slide {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  @media (max-width: 1400px) {\n    padding: 0 8vw;\n  }\n  @media (max-width: 1199px) {\n    padding: 0 5vw;\n  }\n"]);return tn=function(){return e},e}var rn=Object(T.a)(tn());function an(){var e=Object(S.a)(["\n  font-size: 1.2em;\n  padding: 5px 8px;\n  color: #ccc;\n"]);return an=function(){return e},e}function cn(){var e=Object(S.a)(["\n  position: absolute;\n  top: calc(50% - (3rem / 2));\n  left: calc(50% - (3rem / 2));\n  font-size: 3rem;\n"]);return cn=function(){return e},e}function on(){var e=Object(S.a)(["\n  width: 22vw;\n  height: auto;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width: 1199px) {\n    width: 25vw;\n  }\n  @media (max-width: 960px) {\n    width: 40vw;\n  }\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n"]);return on=function(){return e},e}function un(){var e=Object(S.a)(["\n  list-style: none;\n  display: inline-flex;\n  padding: 0;\n  margin: 0;\n  margin-left: 10px;\n\n  li {\n    cursor: pointer;\n    font-size: 1.1rem;\n    padding: 3px;\n    margin: 0 5px;\n  }\n  li.active {\n    border-bottom: 2px solid firebrick;\n  }\n"]);return un=function(){return e},e}function ln(){var e=Object(S.a)(["\n  ","\n  h2 {\n    display: inline-block;\n  }\n  .slick-list {\n    height: 100%;\n  }\n"]);return ln=function(){return e},e}var sn=T.b.section(ln(),rn),pn=T.b.ul(un()),mn=T.b.div(on()),fn=Object(T.b)(nn.a)(cn()),dn=T.b.div(an());var bn=function(){var e=Object(u.c)((function(e){return e.like.likeList})),n=e.likeListSuccess,t=e.result;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]),a.a.createElement(r.Fragment,null,a.a.createElement(fe,{nobanner:!0},a.a.createElement("h2",null,"\ub098\uc758 \uc601\ud654"),n?a.a.createElement(Ze.a,{gutter:[20,30]},t.map((function(e){return a.a.createElement(ze,{key:e.id,movieId:e.id,title:e.title,rate:e.rate,poster:e.poster?e.poster:null,liked:!0,nobanner:!0,mymovie:!0})}))):a.a.createElement(dn,null,"\uc88b\uc544\uc694\ub97c \ub204\ub978 \uc601\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))};function vn(){var e=Object(S.a)(["\n  font-size: 1.1rem;\n  span {\n    margin: 0 8px;\n  }\n"]);return vn=function(){return e},e}function hn(){var e=Object(S.a)(["\n  h2 {\n    display: inline-block;\n    color: white;\n    font-size: 2.4rem;\n    font-weight: bold;\n    margin-bottom: 13px;\n  }\n"]);return hn=function(){return e},e}function gn(){var e=Object(S.a)(["\n  padding: 40px 15px 0 30px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  & > div > div:last-child {\n    font-size: 2rem;\n  }\n  p {\n    font-size: 1.15rem;\n    margin-top: 55px;\n    padding: 5px;\n    overflow: auto;\n  }\n\n  @media (max-width: 1199px) {\n    text-align: center;\n    padding-left: 0;\n    padding-right: 0;\n    & > div > div:last-child {\n      margin: 0 auto;\n      margin-top: 15px;\n    }\n  }\n"]);return gn=function(){return e},e}function En(){var e=Object(S.a)(["\n  margin-right: 5px;\n  height: 100%;\n  img {\n    width: auto;\n    height: 100%;\n    border-radius: 8px;\n  }\n\n  @media (max-width: 1199px) {\n    height: 495px;\n  }\n"]);return En=function(){return e},e}function xn(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: ",";\n  padding: 0 12vw;\n  margin-top: -210px;\n\n  @media (max-width: 1400px) {\n    padding: 0 8vw;\n  }\n  @media (max-width: 1199px) {\n    padding: 0 5vw;\n  }\n"]);return xn=function(){return e},e}function On(){var e=Object(S.a)(["\n  background: linear-gradient(rgba(20, 20, 20, 0.5) 0%, rgba(20, 20, 20, 0.5) 100%),\n    ","no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  height: 510px;\n"]);return On=function(){return e},e}function jn(){var e=Object(S.a)(["\n  position: relative;\n  width: 100%;\n  color: white;\n  margin-bottom: 10vh;\n"]);return jn=function(){return e},e}var wn=T.b.section(jn()),kn=T.b.div(On(),(function(e){return e.image&&"url(".concat(e.image,") ")})),_n=T.b.section(xn(),(function(e){return e.mobile?"column":"row"}),(function(e){return e.mobile?"auto":"480px"})),yn=T.b.div(En()),Sn=T.b.div(gn()),Tn=T.b.div(hn()),zn=T.b.div(vn());var In=a.a.memo((function(){var e=Object(y.useMediaQuery)({query:"(max-width: 1199px)"}),n=Object(u.c)((function(e){return e.movie.movieDetail.result})),t=Object(r.useState)(null!==localStorage.getItem(n.id)),i=Object(_.a)(t,2),c=i[0],o=i[1];return a.a.createElement(wn,null,a.a.createElement(kn,{image:n.backdrop_path}),a.a.createElement(_n,{mobile:e?1:0},n.poster_path&&a.a.createElement(yn,null,a.a.createElement("img",{src:n.poster_path,alt:n.title})),a.a.createElement(Sn,null,a.a.createElement("div",null,a.a.createElement(Tn,null,a.a.createElement("h2",null,n.title),a.a.createElement(be,{detailpage:"true",onClick:function(){c?localStorage.removeItem(n.id):function(){var e={id:n.id,title:n.title,rate:n.vote_average,poster:n.poster_path};localStorage.setItem(n.id,JSON.stringify(e))}(),o(!c)},liked:c?1:0,mobile:1})),a.a.createElement(zn,null,a.a.createElement("span",null,n.genres),a.a.createElement("span",null,n.runtime,"\ubd84")),a.a.createElement(Se,{detailpage:"true",rate:n.vote_average})),a.a.createElement("p",null,n.overview))))}));function Ln(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n\n  span:first-child {\n    font-weight: 800;\n    font-size: 17px;\n  }\n  span:last-child {\n    font-size: 15px;\n    color: #c7c7c7;\n    text-align: center;\n  }\n"]);return Ln=function(){return e},e}function An(){var e=Object(S.a)(["\n  ","\n  .slick-list {\n    text-align: center;\n  }\n  .slick-track {\n    @media (min-width: 767px) {\n      margin: 0;\n    }\n  }\n"]);return An=function(){return e},e}var Nn=T.b.section(An(),rn),Rn=T.b.div(Ln()),Mn=t(47),Cn=t.n(Mn),Dn=(t(72),t(73),t(247)),Fn=t(255),qn={infinite:!1,speed:500,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};var Gn=function(){var e=Object(u.c)((function(e){return e.movie.movieDetail.result.casts}));return a.a.createElement(Nn,null,a.a.createElement("h2",null,"\ucd9c\uc5f0"),a.a.createElement(Cn.a,qn,e.map((function(e){return a.a.createElement(a.a.Fragment,{key:e.cast_id},a.a.createElement(Dn.a,{size:150,src:e.profile_path,icon:!e.profile_path&&a.a.createElement(Fn.a,null)}),a.a.createElement(Rn,null,a.a.createElement("span",null,e.name),a.a.createElement("span",null,e.character)))}))))},Bn=t(110),Vn={infinite:!1,speed:500,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]};var Jn=function(){var e=Object(r.useState)("image"),n=Object(_.a)(e,2),t=n[0],i=n[1],c=Object(u.c)((function(e){return e.movie.movieDetail.result})),o=c.images,l=c.videos;Object(r.useEffect)((function(){Object(Bn.a)(".imgThumbnail",{margin:50,background:"rgba(20, 20, 20, .9)"})}));var s=function(e){var n=e.currentTarget,t=n.dataset.type;document.querySelectorAll(".media").forEach((function(e){e.classList.remove("active")})),n.classList.add("active"),i(t)};return a.a.createElement(sn,null,a.a.createElement("h2",null,"\ubbf8\ub514\uc5b4"),a.a.createElement(pn,null,a.a.createElement("li",{className:"media active",onClick:s,"data-type":"image"},"\uc774\ubbf8\uc9c0"),a.a.createElement("li",{className:"media",onClick:s,"data-type":"video"},"\ub3d9\uc601\uc0c1")),a.a.createElement(a.a.Fragment,null,"image"===t&&(o.length>0?a.a.createElement(Cn.a,Vn,o.map((function(e,n){return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement(mn,null,a.a.createElement("img",{className:"imgThumbnail",src:e,alt:"".concat(c.title," \uc774\ubbf8\uc9c0")})))}))):a.a.createElement(dn,null,"\uc601\ud654 \uc774\ubbf8\uc9c0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),"video"===t&&(l.length>0?a.a.createElement(Cn.a,Vn,l.map((function(e,n){return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement(mn,null,a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:e.thumbnail,alt:"".concat(c.title," \uc601\uc0c1")}),a.a.createElement(fn,null))))}))):a.a.createElement(dn,null,"\uad00\ub828 \uc601\uc0c1\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))))};function Un(){var e=Object(S.a)(["\n  ","\n  h2 {\n    display: inline-block;\n  }\n  .slick-slide {\n    & > div {\n      width: 80%;\n      height: 100%;\n    }\n  }\n"]);return Un=function(){return e},e}var Xn=T.b.section(Un(),rn),Qn={infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};var Hn=function(){var e=Object(u.c)((function(e){return e.movie.movieDetail.result.similarMovies}));return a.a.createElement(a.a.Fragment,null,e.length>0&&a.a.createElement(Xn,null,a.a.createElement("h2",null,"\ube44\uc2b7\ud55c \uc601\ud654"),a.a.createElement(Cn.a,Qn,e.map((function(e){return a.a.createElement(ze,{key:e.id,id:e.id,title:e.title,rate:e.vote_average,poster:e.poster_path?e.poster_path:null,slider:"true"})})))))},Kn=t(111);var Wn=function(e){var n=e.match,t=Object(u.b)(),i=n.params.movieId,c=Object(u.c)((function(e){return e.movie.movieDetail})).detailSuccess,o=Object(r.useState)(!0),l=Object(_.a)(o,2),s=l[0],p=l[1];return Object(r.useEffect)((function(){var e=!0;return function(){var n=Object(d.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=t,n.next=3,Ge(i);case 3:n.t1=n.sent,(0,n.t0)(n.t1),e&&p(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),window.scrollTo(0,0),function(){e=!1,p(!0)}}),[i]),a.a.createElement(a.a.Fragment,null,c&&!s?a.a.createElement("section",null,a.a.createElement(In,null),a.a.createElement(Gn,null),a.a.createElement(Jn,null),a.a.createElement(Hn,null)):a.a.createElement(Kn.WaveTopBottomLoading,{color:"firebrick",size:"large"}))};t(239);var Yn=function(){var e=Object(u.b)();return Object(r.useEffect)((function(){e(w())}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:en}),a.a.createElement(l.a,{exact:!0,path:"/list/:type",component:en}),a.a.createElement(l.a,{exact:!0,path:"/mymovie",component:bn}),a.a.createElement(l.a,{exact:!0,path:"/movie/:movieId",component:Wn}),a.a.createElement(l.a,{exact:!0,path:"/search",component:en})))},Pn=t(43),Zn=t(113),$n=t.n(Zn),et=t(114),nt=Object(Pn.c)({movie:Be,like:k,search:Q}),tt=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),rt=Object(Pn.a)(et.a,$n.a)(Pn.d);c.a.render(a.a.createElement(u.a,{store:rt(nt,tt)},a.a.createElement(o.a,null,a.a.createElement(Yn,null))),document.getElementById("root"))},82:function(e,n,t){e.exports=t.p+"static/media/no-poster.d38bc38a.png"}},[[120,1,2]]]);
//# sourceMappingURL=main.982083e2.chunk.js.map