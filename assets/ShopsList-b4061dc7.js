import{_ as n,m as c,g as p,r as d,o,c as e,a as t,F as _,h as i,b as h,w as u,n as m,t as S,u as f}from"./index-fe76a8c9.js";import{s as a}from"./shopStore-dd6f9bb7.js";const g={methods:{...c(a,["getShops"])},computed:{...p(a,["shops"])},created(){this.getShops()}},k={class:"allShop d-flex flex-column overflow-hidden"},x={class:"allShop-list list-unstyled mb-0 d-flex flex-grow-1"},$=["src","alt"];function y(l,b,v,C,L,w){const r=d("RouterLink");return o(),e("div",k,[t("ul",x,[(o(!0),e(_,null,i(l.shops,s=>(o(),e("li",{class:"allShop-item",key:`shop ${s.code}`},[h(r,{class:"allShop-link",style:f(`background-color: ${s.bgColor}`),to:`/shops/${s.code}`},{default:u(()=>[t("img",{class:"allShop-link-img",src:s.imageUrl,alt:s.name},null,8,$),t("span",{class:m(["allShop-link-tag border-2 border",`link-${s.textColor} border-${s.textColor}`])},S(s.name),3)]),_:2},1032,["style","to"])]))),128))])])}const F=n(g,[["render",y],["__scopeId","data-v-cc9d2098"]]);export{F as default};