import{d as x,H as C,b as n,c as i,F as w,Y as D,f as s,g as l,w as m,e as r,t as c,L as f,n as N,$ as p,D as v,a0 as B,l as L}from"./entry.dIk865OX.js";import{u as I}from"./preview.5vhL3zaA.js";import{f as V}from"./date.3uOv5BcS.js";const $=["data-content-id"],z={key:0,class:"image"},E={key:0},F={class:"content"},S={class:"description"},j=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const h=t,_=C(()=>{var a,o;return(a=I())!=null&&a.isEnabled()?(o=h.article)==null?void 0:o._id:void 0});return(a,o)=>{var u;const y=p,d=v;return t.article._path&&t.article.title?(n(),i("article",{key:0,class:N({featured:t.featured}),"data-content-id":f(_)},[t.article.cover?(n(),i("div",z,[(u=t.article)!=null&&u.badges?(n(),i("div",E,[(n(!0),i(w,null,D(t.article.badges,(e,k)=>(n(),i("span",{key:k,style:B({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},c(typeof e=="string"?e:e.content),5))),128))])):s("",!0),l(d,{to:t.article._path},{default:m(()=>[l(y,{src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])]),_:1},8,["to"])])):s("",!0),r("div",F,[l(d,{to:t.article._path,class:"headline"},{default:m(()=>[r("h1",null,c(t.article.title),1)]),_:1},8,["to"]),r("p",S,c(t.article.description),1),r("time",null,c(("formatDate"in a?a.formatDate:f(V))(t.article.date)),1)])],10,$)):s("",!0)}}}),O=L(j,[["__scopeId","data-v-913aa384"]]);export{O as default};
