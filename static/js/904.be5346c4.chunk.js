"use strict";(self.webpackChunkbeer_recipes_app=self.webpackChunkbeer_recipes_app||[]).push([[904],{2320:function(e,n,t){t.d(n,{j:function(){return o}});var r,c=t(168),u=t(4709).Z.p(r||(r=(0,c.Z)(["\n  text-align: center;\n"]))),i=t(184),o=function(){return(0,i.jsxs)(u,{children:[(0,i.jsx)("p",{children:"Oops, something went wrong"}),(0,i.jsx)("p",{children:"(\u0e51\u2022\u0301 \ufe4f\u2022\u0300\u0e51\u273f)"})]})}},9904:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r,c,u=t(2791),i=t(7689),o=t(8650),s=t(9083),a=t(8440),f=t(6907),l=t(4577),d=t(5042),p=t(7448),v=t(168),h=t(4709),x=t(9126),g=t(1087),Z=(0,h.Z)(g.rU)(r||(r=(0,v.Z)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  text-decoration: none;\n  color: ",";\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colText}),(function(e){return e.theme.accent})),m=(0,h.Z)(x.RVs)(c||(c=(0,v.Z)(["\n  font-size: 20px;\n"]))),j=t(184),k=function(e){var n=e.path;return(0,j.jsxs)(Z,{to:n,children:[(0,j.jsx)(m,{}),(0,j.jsx)("span",{children:"Go back"})]})},b=t(2320),w=t(3189),R=function(){var e,n,t=null!==(e=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:a.LE,r=(0,i.UO)().recipeId,c=(0,o.Y)(s.g5),v=(0,o.Y)(s.XQ),h=(0,o.Y)(s.xU),x=(0,o.Y)(s.zh);(0,u.useEffect)((function(){r&&c(Number(r))}),[c,r]);var g=v&&!h&&!x,Z=!h&&x;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f.ql,{children:(0,j.jsx)("title",{children:w.q.title((null===v||void 0===v?void 0:v.name)||"","Recipe")})}),(0,j.jsx)(l.$,{children:(0,j.jsxs)(d.W,{children:[(0,j.jsx)(k,{path:t}),g&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{children:v.id}),(0,j.jsx)("div",{children:v.name})]}),h&&(0,j.jsx)(p.a,{}),Z&&(0,j.jsx)(b.j,{})]})})]})}},3189:function(e,n,t){t.d(n,{q:function(){return r}});var r={title:function(e,n){return e?e.slice(0,10):n},name:function(e){return e.length<=14?e:"".concat(e.slice(0,16),"...")},tagline:function(e){return e.length<=32?e:"".concat(e.slice(0,34),"...")}}},4577:function(e,n,t){t.d(n,{$:function(){return u}});var r,c=t(168),u=t(4709).Z.section(r||(r=(0,c.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"])))},9083:function(e,n,t){t.d(n,{EX:function(){return p},Kk:function(){return d},O2:function(){return r},XQ:function(){return i},g4:function(){return a},g5:function(){return f},kZ:function(){return u},tT:function(){return c},xU:function(){return o},z0:function(){return l},zh:function(){return s}});var r=function(e){return e.recipes},c=function(e){return e.selected},u=function(e){return e.deleted},i=function(e){return e.currentRecipe},o=function(e){return e.isLoading},s=function(e){return e.error},a=function(e){return e.get},f=function(e){return e.getById},l=function(e){return e.reduceRecipes},d=function(e){return e.removeSelectedRecipes},p=function(e){return e.toggleIsSelected}},8650:function(e,n,t){t.d(n,{Y:function(){return l}});var r=t(4165),c=t(3433),u=t(5861),i=t(5847),o=t(6854),s=t(1085),a=t(1243);a.Z.defaults.baseURL="https://api.punkapi.com/v2/beers";var f={get:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(n){var t,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/",{params:{page:n}});case 2:return t=e.sent,c=t.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getById:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(n){var t,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/".concat(n));case 2:return t=e.sent,c=t.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},l=(0,i.Ue)()((0,s.tJ)((0,o.n)((function(e){return{recipes:[],selected:[],deleted:[],currentRecipe:null,isLoading:!1,error:null,get:function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({error:null,isLoading:!0}),n.next=4,f.get(t);case 4:u=n.sent,e((function(e){return{recipes:1===t?u:[].concat((0,c.Z)(e.recipes),(0,c.Z)(u))}})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e({error:n.t0});case 11:return n.prev=11,e({isLoading:!1}),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}(),getById:function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({error:null,isLoading:!0}),n.next=4,f.getById(t);case 4:c=n.sent,e({currentRecipe:c[0]}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e({error:n.t0});case 11:return n.prev=11,e({isLoading:!1}),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}(),reduceRecipes:function(n){e((function(e){return{recipes:e.recipes.slice(n)}}))},toggleIsSelected:function(n){e((function(e){return{selected:e.selected.includes(n)?e.selected.filter((function(e){return e!==n})):[].concat((0,c.Z)(e.selected),[n])}}))},removeSelectedRecipes:function(){e((function(e){return{recipes:e.recipes.filter((function(n){var t=n.id;return!e.selected.includes(t)})),deleted:[].concat((0,c.Z)(e.deleted),(0,c.Z)(e.selected)),selected:[]}}))}}})),{name:"zustand/recipes"}))}}]);
//# sourceMappingURL=904.be5346c4.chunk.js.map