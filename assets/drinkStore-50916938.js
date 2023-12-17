import{y as a,z as r}from"./index-cd4327d4.js";const c=a("drinkStore",{state:()=>({drinks:[],sortDrinks:[],singleDrink:{price:{m:"",l:""},calorie:{m:"",l:""},ingredient:{base:[],mix:[],material:[]},shop:{name:"",size:{m:"",l:""}},comments:[]},selectType:"請選擇",wheelOptionData:{base:[],mix:[],material:[]}}),actions:{getDrinks(){const e="https://what-to-drink-api-vercel.vercel.app/drinks?_expand=shop";r.get(e).then(t=>{console.log(t),this.drinks=t.data}).catch(t=>{console.log(t)})},getDrinksShopComment(){const e="https://what-to-drink-api-vercel.vercel.app/drinks?_expand=shop&_embed=comments";r.get(e).then(t=>{console.log(t),this.drinks=t.data}).catch(t=>{console.log(t)})},getSingleDrink(e){const t=`https://what-to-drink-api-vercel.vercel.app/drinks/${e}?_expand=shop&_embed=comments`;r.get(t).then(n=>{console.log(n),this.singleDrink=n.data}).catch(n=>{console.log(n)})},getSearchDrink(e,t){const n="https://what-to-drink-api-vercel.vercel.app";let i=`/drinks?q=${t}&_expand=shop`;e==="shops"&&(i=`/drinks?${t}&_expand=shop`),r.get(`${n}${i}`).then(s=>{console.log(s),this.drinks=s.data,this.sortData()}).catch(s=>{console.log(s)})},joinIngredient(e){return Object.values(e).map(i=>i.join("、")).filter(i=>i.length>0).join("、")},sortData(e,t="id"){t==="price"||t==="calorie"?this.sortDrinks=this.sortTwoSizeFn(e,t):this.sortDrinks=this.sortFn(e,t)},sortFn(e,t){console.log("sortFn");const n=[...this.drinks];return e==="up"?n.sort((i,s)=>i[t]-s[t]):e==="down"&&n.sort((i,s)=>s[t]-i[t]),n},sortTwoSizeFn(e,t){console.log("sortTwoSizeFn");const n=[...this.drinks];return e==="up"?n.sort((i,s)=>(i[t].m||i[t].l)-(s[t].m||s[t].l)):e==="down"&&n.sort((i,s)=>(s[t].m||s[t].l)-(i[t].m||i[t].l)),n},getDrinkType(e){const t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n].type)===-1&&t.push(e[n].type);return t},getIngredientKind(e){const t={base:[],mix:[],material:[]},n=Object.keys(t);for(let i=0;i<e.length;i+=1)for(let s=0;s<n.length;s+=1)for(let o=0;o<e[i].ingredient[n[s]].length;o+=1){const h=t[n[s]],l=e[i].ingredient[n[s]][o];h.indexOf(l)===-1&&t[n[s]].push(l)}return t},getWheelOption(){const e=[...this.drinks];let t={};if(e.length){const n=this.getDrinkType(e);if(this.selectType==="隨機")for(let i=0;i<n.length;i+=1)t=this.getIngredientKind(e);else{for(let i=0;i<n.length;i+=1){let s=[];s=e.filter(o=>o.type===n[i]),t[n[i]]=this.getIngredientKind(s)}t=t[this.selectType]}}this.wheelOptionData=t},changeType(e){this.selectType=e}},getters:{recommendDrinks(){let e=[{id:0,shopId:0,name:"",imageUrl:"",price:{m:0,l:0},rate:"0.0",shop:{name:"",code:""},comments:[]}];return this.drinks.length&&(e=[...this.drinks],e.sort((t,n)=>n.rate-t.rate),e=e.slice(0,5)),e},typeKind(){const e=[...this.drinks];let t=[];return e.length&&(t=this.getDrinkType(e)),t}}});export{c as d};
