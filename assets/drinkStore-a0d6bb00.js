import{y as a,z as r}from"./index-f2de034b.js";const c=a("drinkStore",{state:()=>({drinks:[],sortDrinks:[],singleDrink:{price:{m:"",l:""},calorie:{m:"",l:""},ingredient:{base:[],mix:[],material:[]},shop:{name:"",size:{m:"",l:""}},comments:[]},selectType:"請選擇",firstSelectType:!1,wheelOptionData:{base:[],mix:[],material:[]}}),actions:{getDrinks(){const e="http://localhost:3000/drinks?_expand=shop";r.get(e).then(t=>{console.log(t),this.drinks=t.data}).catch(t=>{console.log(t)})},getDrinksShopComment(){const e="http://localhost:3000/drinks?_expand=shop&_embed=comments";r.get(e).then(t=>{console.log(t),this.drinks=t.data}).catch(t=>{console.log(t)})},getSingleDrink(e){const t=`http://localhost:3000/drinks/${e}?_expand=shop&_embed=comments`;r.get(t).then(i=>{console.log(i),this.singleDrink=i.data}).catch(i=>{console.log(i)})},getSearchDrink(e,t){const i="http://localhost:3000";let n=`/drinks?q=${t}&_expand=shop`;e==="shops"&&(n=`/drinks?${t}&_expand=shop`),r.get(`${i}${n}`).then(s=>{console.log(s),this.drinks=s.data,this.sortData()}).catch(s=>{console.log(s)})},joinIngredient(e){return Object.values(e).map(n=>n.join("、")).filter(n=>n.length>0).join("、")},sortData(e,t="id"){t==="price"||t==="calorie"?this.sortDrinks=this.sortTwoSizeFn(e,t):this.sortDrinks=this.sortFn(e,t)},sortFn(e,t){console.log("sortFn");const i=[...this.drinks];return e==="up"?i.sort((n,s)=>n[t]-s[t]):e==="down"&&i.sort((n,s)=>s[t]-n[t]),i},sortTwoSizeFn(e,t){console.log("sortTwoSizeFn");const i=[...this.drinks];return e==="up"?i.sort((n,s)=>(n[t].m||n[t].l)-(s[t].m||s[t].l)):e==="down"&&i.sort((n,s)=>(s[t].m||s[t].l)-(n[t].m||n[t].l)),i},getDrinkType(e){const t=[];for(let i=0;i<e.length;i+=1)t.indexOf(e[i].type)===-1&&t.push(e[i].type);return t},getIngredientKind(e){const t={base:[],mix:[],material:[]},i=Object.keys(t);for(let n=0;n<e.length;n+=1)for(let s=0;s<i.length;s+=1)for(let o=0;o<e[n].ingredient[i[s]].length;o+=1){const h=t[i[s]],l=e[n].ingredient[i[s]][o];h.indexOf(l)===-1&&t[i[s]].push(l)}return t},getWheelOption(){const e=[...this.drinks];let t={base:[],mix:[],material:[]};if(this.selectType==="請選擇"){this.wheelOptionData=t;return}if(e.length){const i=this.getDrinkType(e);if(this.selectType==="隨機")for(let n=0;n<i.length;n+=1)t=this.getIngredientKind(e);else{for(let n=0;n<i.length;n+=1){let s=[];s=e.filter(o=>o.type===i[n]),t[i[n]]=this.getIngredientKind(s)}t=t[this.selectType]}}this.wheelOptionData=t},changeType(e){this.selectType!=="請選擇"&&(this.firstSelectType=!0),this.selectType=e},changeFirstSelectType(e){this.firstSelectType=e}},getters:{recommendDrinks(){let e=[{id:0,shopId:0,name:"",imageUrl:"",price:{m:0,l:0},rate:"0.0",shop:{name:"",code:""},comments:[]}];return this.drinks.length&&(e=[...this.drinks],e.sort((t,i)=>i.rate-t.rate),e=e.slice(0,5)),e},typeKind(){const e=[...this.drinks];let t=[];return e.length&&(t=this.getDrinkType(e)),t}}});export{c as d};
