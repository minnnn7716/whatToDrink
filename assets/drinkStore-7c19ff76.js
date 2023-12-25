import{y as l,z as a,A as o}from"./index-26db4ad0.js";const d=l("drinkStore",{state:()=>({drinks:[],sortDrinks:[],singleDrink:{price:{m:"",l:""},calorie:{m:"",l:""},ingredient:{base:[],mix:[],material:[]},shop:{name:"",size:{m:"",l:""}},comments:[]},selectType:"請選擇",firstSelectType:!1,wheelOptionData:{base:[],mix:[],material:[]}}),actions:{getDrinks(){const t="https://what-to-drink-api-vercel.vercel.app/drinks?_expand=shop";a.get(t).then(e=>{this.drinks=e.data}).catch(()=>{o.emit("push-message",{style:"danger",title:"取得資料失敗",content:"出現系統問題，請聯絡管理員，謝謝！"})})},getDrinksShopComment(){const t="https://what-to-drink-api-vercel.vercel.app/drinks?_expand=shop&_embed=comments";a.get(t).then(e=>{this.drinks=e.data}).catch(()=>{o.emit("push-message",{style:"danger",title:"取得店家評論失敗",content:"出現系統問題，請聯絡管理員，謝謝！"})})},getSingleDrink(t){const e=`https://what-to-drink-api-vercel.vercel.app/drinks/${t}?_expand=shop&_embed=comments`;a.get(e).then(i=>{this.singleDrink=i.data}).catch(()=>{o.emit("push-message",{style:"danger",title:"取得資料失敗",content:"出現系統問題，請聯絡管理員，謝謝！"})})},getSearchDrink(t,e){const i="https://what-to-drink-api-vercel.vercel.app";let n=`/drinks?q=${e}&_expand=shop`;t==="shops"&&(n=`/drinks?${e}&_expand=shop`),a.get(`${i}${n}`).then(s=>{this.drinks=s.data,this.sortData()}).catch(()=>{o.emit("push-message",{style:"danger",title:"取得資料失敗",content:"出現系統問題，請聯絡管理員，謝謝！"})})},joinIngredient(t){return Object.values(t).map(n=>n.join("、")).filter(n=>n.length>0).join("、")},sortData(t,e="id"){e==="price"||e==="calorie"?this.sortDrinks=this.sortTwoSizeFn(t,e):this.sortDrinks=this.sortFn(t,e)},sortFn(t,e){const i=[...this.drinks];return t==="up"?i.sort((n,s)=>n[e]-s[e]):t==="down"&&i.sort((n,s)=>s[e]-n[e]),i},sortTwoSizeFn(t,e){const i=[...this.drinks];return t==="up"?i.sort((n,s)=>(n[e].m||n[e].l)-(s[e].m||s[e].l)):t==="down"&&i.sort((n,s)=>(s[e].m||s[e].l)-(n[e].m||n[e].l)),i},getDrinkType(t){const e=[];for(let i=0;i<t.length;i+=1)e.indexOf(t[i].type)===-1&&e.push(t[i].type);return e},getIngredientKind(t){const e={base:[],mix:[],material:[]},i=Object.keys(e);for(let n=0;n<t.length;n+=1)for(let s=0;s<i.length;s+=1)for(let r=0;r<t[n].ingredient[i[s]].length;r+=1){const p=e[i[s]],h=t[n].ingredient[i[s]][r];p.indexOf(h)===-1&&e[i[s]].push(h)}return e},getWheelOption(){const t=[...this.drinks];let e={base:[],mix:[],material:[]};if(this.selectType==="請選擇"){this.wheelOptionData=e;return}if(t.length){const i=this.getDrinkType(t);if(this.selectType==="隨機")for(let n=0;n<i.length;n+=1)e=this.getIngredientKind(t);else{for(let n=0;n<i.length;n+=1){let s=[];s=t.filter(r=>r.type===i[n]),e[i[n]]=this.getIngredientKind(s)}e=e[this.selectType]}}this.wheelOptionData=e},changeType(t){this.selectType!=="請選擇"&&(this.firstSelectType=!0),this.selectType=t},changeFirstSelectType(t){this.firstSelectType=t}},getters:{recommendDrinks(){let t=[{id:0,shopId:0,name:"",imageUrl:"",price:{m:0,l:0},rate:"0.0",shop:{name:"",code:""},comments:[]}];return this.drinks.length&&(t=[...this.drinks],t.sort((e,i)=>i.rate-e.rate),t=t.slice(0,5)),t},typeKind(){const t=[...this.drinks];let e=[];return t.length&&(e=this.getDrinkType(t)),e}}});export{d};
