(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{36:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var i,r,c,a=t(1),o=t(24),s=t.n(o),d=t(10),l=(t(36),t(4)),h=t(2),b=t(6),j=t(3),p=h.b.ul(i||(i=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),u=Object(h.b)(d.b)(r||(r=Object(j.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),x=t(0),m=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],g=function(){var n=Object(l.f)();return Object(x.jsx)("div",{children:Object(x.jsx)(p,{children:m.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(u,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},O=Object(a.memo)(g),f=h.b.div(c||(c=Object(j.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),E=function(n){var e=n.title,t=n.subtitle;return Object(x.jsxs)(f,{children:[Object(x.jsx)("h1",{children:e}),Object(x.jsx)("p",{children:t})]})},v=Object(a.memo)(E),y=t.p+"static/media/Mylogo.5487d9c7.png",A=function(n){var e=n.children;return Object(x.jsxs)("div",{id:"display_image",align:"center",children:[Object(x.jsx)("img",{src:y,alt:"Mylogo"}),Object(x.jsx)(v,{title:"Box Office",subtitle:"Are you looking for a movie or an actor?"}),Object(x.jsx)(O,{}),e]})},C=t(22),Q=t.n(C),w=t(28),I="https://api.tvmaze.com";function R(n){return k.apply(this,arguments)}function k(){return(k=Object(w.a)(Q.a.mark((function n(e){var t;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(I).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var S,M,F,U,B,Z=t(29),D=t.n(Z),K=Object(h.b)(D.a)(S||(S=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),L=h.b.div(M||(M=Object(j.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),N=h.b.div(F||(F=Object(j.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),X=(h.b.div(U||(U=Object(j.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Object(h.b)(L)(B||(B=Object(j.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"])))),V=function(n){var e=n.id,t=n.image,i=n.name,r=n.summary,c=n.onStarClick,a=n.isStarred,o=r?"".concat(r.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(x.jsxs)(X,{children:[Object(x.jsx)("div",{className:"img-wrapper",children:Object(x.jsx)("img",{src:t,alt:"show"})}),Object(x.jsx)("h1",{children:i}),Object(x.jsx)("p",{children:o}),Object(x.jsxs)("div",{className:"btns",children:[Object(x.jsx)(d.b,{to:"/show/".concat(e),children:"Read more"}),Object(x.jsx)("button",{type:"button",onClick:function(){return c(e,a)},children:Object(x.jsx)(N,{active:a})})]})]})},G=Object(a.memo)(V),Y="data:image/png;base64,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",P=t(11),W=t(30);function H(n,e){switch(e.type){case"ADD":return[].concat(Object(W.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function T(n,e,t){var i=Object(a.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),r=Object(b.a)(i,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[c,t]),[c,o]}function z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return T(H,[],n)}var q=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(P.a)(Object(P.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var J,_,$,nn,en,tn,rn,cn,an,on,sn,dn,ln,hn,bn=function(n){var e=n.data,t=z(),i=Object(b.a)(t,2),r=i[0],c=i[1],o=Object(a.useCallback)((function(n,e){c(e?{type:"REMOVE",showId:n}:{type:"ADD",showId:n})}),[c]);return Object(x.jsx)(K,{children:e.map((function(n){var e=n.show;return Object(x.jsx)(G,{id:e.id,name:e.name,image:e.image?e.image.medium:Y,summary:e.summary,onStarClick:o,isStarred:r.includes(e.id)},e.id)}))})},jn=Object(h.b)(L)(J||(J=Object(j.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),pn=function(n){var e=n.image,t=n.name,i=n.gender,r=n.country,c=n.birthday,a=n.deathday;return Object(x.jsxs)(jn,{children:[Object(x.jsx)("div",{className:"img-wrapper",children:Object(x.jsx)("img",{src:e,alt:"actor"})}),Object(x.jsxs)("h1",{children:[t," ",i?"(".concat(i,")"):null]}),Object(x.jsx)("p",{children:r?"Comes from ".concat(r):"No country known"}),c?Object(x.jsxs)("p",{children:["Born ",c]}):null,Object(x.jsx)("p",{className:"deathday",children:a?"Died ".concat(a):"Alive"})]})},un=function(n){var e=n.data;return Object(x.jsx)(K,{children:e.map((function(n){var e=n.person;return Object(x.jsx)(pn,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:Y},e.id)}))})},xn=h.b.input(_||(_=Object(j.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),mn=h.b.div($||($=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),gn=h.b.div(nn||(nn=Object(j.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),On=t(31),fn=h.b.label(en||(en=Object(j.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),En=function(n){var e=n.label,t=Object(On.a)(n,["label"]);return Object(x.jsxs)(fn,{htmlFor:t.id,children:[e,Object(x.jsx)("input",Object(P.a)(Object(P.a)({},t),{},{type:"radio"})),Object(x.jsx)("span",{})]})},vn=Object(a.memo)(En),yn=function(n){return n&&0===n.length?Object(x.jsx)("div",{children:"No results"}):n&&n.length>0?n[0].show?Object(x.jsx)(bn,{data:n}):Object(x.jsx)(un,{data:n}):null},An=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(a.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(b.a)(e,2),i=t[0],r=t[1],c=Object(a.useCallback)((function(e){r(e),sessionStorage.setItem(n,JSON.stringify(e))}),[n]);return[i,c]}(),e=Object(b.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(null),c=Object(b.a)(r,2),o=c[0],s=c[1],d=Object(a.useState)("shows"),l=Object(b.a)(d,2),h=l[0],j=l[1],p="shows"===h,u=function(){R("/search/".concat(h,"?q=").concat(t)).then((function(n){s(n)}))},m=Object(a.useCallback)((function(n){i(n.target.value)}),[i]),g=Object(a.useCallback)((function(n){j(n.target.value)}),[]);return Object(x.jsxs)(A,{children:[Object(x.jsx)(xn,{type:"text",placeholder:"Search for something",onChange:m,onKeyDown:function(n){13===n.keyCode&&u()},value:t}),Object(x.jsxs)(mn,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(vn,{label:"Shows",id:"shows-search",value:"shows",checked:p,onChange:g})}),Object(x.jsx)("div",{children:Object(x.jsx)(vn,{label:"Actors",id:"actors-search",value:"people",checked:!p,onChange:g})})]}),Object(x.jsx)(gn,{children:Object(x.jsx)("button",{type:"button",onClick:u,children:"Search"})}),yn(o)]})},Cn=function(){var n=z(),e=Object(b.a)(n,1)[0],t=Object(a.useState)(null),i=Object(b.a)(t,2),r=i[0],c=i[1],o=Object(a.useState)(!0),s=Object(b.a)(o,2),d=s[0],l=s[1],h=Object(a.useState)(null),j=Object(b.a)(h,2),p=j[0],u=j[1];return Object(a.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return R("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){c(n),l(!1)})).catch((function(n){u(n.message),l(!1)}))}else l(!1)}),[e]),Object(x.jsxs)(A,{children:[d&&Object(x.jsx)("div",{children:"Shows are still loading"}),p&&Object(x.jsxs)("div",{children:["Error occured: ",p]}),!d&&!r&&Object(x.jsx)("div",{children:"No shows were added"}),!d&&!p&&r&&Object(x.jsx)(bn,{data:r})]})},Qn=h.b.div(tn||(tn=Object(j.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),wn=h.b.div(rn||(rn=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),In=h.b.div(cn||(cn=Object(j.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),Rn=function(n){var e=n.name,t=n.rating,i=n.summary,r=n.tags,c=n.image;return Object(x.jsxs)(Qn,{children:[Object(x.jsx)("img",{src:c?c.original:Y,alt:"show-cover"}),Object(x.jsxs)("div",{className:"text-side",children:[Object(x.jsxs)(wn,{children:[Object(x.jsx)("h1",{children:e}),Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{active:!0}),Object(x.jsx)("span",{children:t.average||"N/A"})]})]}),Object(x.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:i}}),Object(x.jsxs)("div",{children:["Tags:"," ",Object(x.jsx)(In,{children:r.map((function(n,e){return Object(x.jsx)("span",{children:n},e)}))})]})]})]})},kn=h.b.div(an||(an=Object(j.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),Sn=function(n){var e=n.status,t=n.premiered,i=n.network;return Object(x.jsxs)(kn,{children:[Object(x.jsxs)("p",{children:["Status: ",Object(x.jsx)("span",{children:e})]}),Object(x.jsxs)("p",{children:["Premiered ",t," ",i?"on ".concat(i.name):null]})]})},Mn=h.b.div(on||(on=Object(j.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),Fn=h.b.div(sn||(sn=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),Un=function(n){var e=n.seasons;return Object(x.jsxs)(Mn,{children:[Object(x.jsxs)("p",{children:["Seasons in total: ",Object(x.jsx)("span",{children:e.length})]}),Object(x.jsxs)("p",{children:["Episodes in total:"," ",Object(x.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(x.jsx)(Fn,{children:e.map((function(n){return Object(x.jsxs)("div",{className:"season-item",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsxs)("p",{children:["Season ",n.number]}),Object(x.jsxs)("p",{children:["Episodes: ",Object(x.jsx)("span",{children:n.episodeOrder})]})]}),Object(x.jsxs)("div",{className:"right",children:["Aired:"," ",Object(x.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},Bn=h.b.div(dn||(dn=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),Zn=function(n){var e=n.cast;return Object(x.jsx)(Bn,{children:e.map((function(n,e){var t=n.person,i=n.character,r=n.voice;return Object(x.jsxs)("div",{className:"cast-item",children:[Object(x.jsx)("div",{className:"pic-wrapper",children:Object(x.jsx)("img",{src:t.image?t.image.medium:Y,alt:"cast-person"})}),Object(x.jsx)("div",{className:"actor",children:Object(x.jsxs)("span",{children:[Object(x.jsx)("span",{className:"bold",children:t.name})," | ",i.name," ",r?"| Voice":""]})})]},e)}))})},Dn=h.b.div(ln||(ln=Object(j.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),Kn=h.b.div(hn||(hn=Object(j.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),Ln=function(){var n=function(n){var e=Object(a.useReducer)(q,{show:null,isLoading:!0,error:null}),t=Object(b.a)(e,2),i=t[0],r=t[1];return Object(a.useEffect)((function(){var e=!0;return R("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&r({type:"FETCH_SUCCESS",show:n})})).catch((function(n){e&&r({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),i}(Object(l.g)().id),e=n.show,t=n.isLoading,i=n.error;return t?Object(x.jsx)("div",{children:"Data is being loaded"}):i?Object(x.jsxs)("div",{children:["Error occured: ",i]}):Object(x.jsxs)(Dn,{children:[Object(x.jsx)(Rn,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(x.jsxs)(Kn,{children:[Object(x.jsx)("h2",{children:"Details"}),Object(x.jsx)(Sn,{status:e.status,network:e.network,premiered:e.premiered})]}),Object(x.jsxs)(Kn,{children:[Object(x.jsx)("h2",{children:"Seasons"}),Object(x.jsx)(Un,{seasons:e._embedded.seasons})]}),Object(x.jsxs)(Kn,{children:[Object(x.jsx)("h2",{children:"Cast"}),Object(x.jsx)(Zn,{cast:e._embedded.cast})]})]})},Nn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Xn=function(){return Object(x.jsx)(h.a,{theme:Nn,children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)(An,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/starred",children:Object(x.jsx)(Cn,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/show/:id",children:Object(x.jsx)(Ln,{})}),Object(x.jsx)(l.a,{children:Object(x.jsx)("div",{children:"Not found"})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(d.a,{children:Object(x.jsx)(Xn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.dcfe93cf.chunk.js.map