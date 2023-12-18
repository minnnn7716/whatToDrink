import{y as u,z as p,m as g,_ as d,r as f,o as _,c as y,a as c,t as m,b as D,p as R,e as v}from"./index-f2de034b.js";import{R as x}from"./RateDisplay-b1327330.js";import{_ as N}from"./userPhoto-8e961c51.js";const S=u("commentStore",{state:()=>({comments:[],rateGroup:{},pinRate:!1,pagination:{},sortComments:[]}),actions:{getComments(){const t="http://localhost:3000/comments";p.get(t).then(e=>{console.log(e),this.comments=e.data}).catch(e=>{console.log(e)})},clickPin(t){if(this.pinRate===t){this.pinRate=!1;return}this.pinRate=t},getRateGroupInfo(t){if(t){const e=t.length,s=this.totalRateScore(t),n=[];for(let a=1;a<=5;a+=1)n.push(this.eachRateLength(t,a));this.rateGroup={commentsNum:e,totalRateScore:s,eachRateNum:n}}},eachRateLength(t,e){return t.filter(s=>+s.rate===e).length},totalRateScore(t){let e="0";if(t.length){const s=t.map(n=>+n.rate);e=(s.reduce((n,a)=>n+a,0)/s.length).toFixed(1)}return e},filterUserComment(t){return[...this.comments].filter(s=>s.userName===t)},sortFn(t,e,s){let n=[];return e==="down"?n=t.sort((a,i)=>i[s]-a[s]):e==="up"&&(n=t.sort((a,i)=>a[s]-i[s])),n},sortSpecifyFn(t,e,s){const n=[];let a=[];for(let i=0;i<e.length;i+=1){let o=t.filter(r=>r[s]===e[i]);o=o.sort((r,l)=>l.rate-r.rate),n.push(o)}return a=n.reduce((i,o)=>i.concat(o),[]),a},sortCommentsFn(t,e,s=1){this.sort=e,this.currentCommentData=t;let n=[],a=[],i=[];if(this.pinRate?a=t.filter(o=>+o.rate===this.pinRate):a=t,e==="最新日期"&&(n=this.sortFn(a,"down","date")),e==="評分最高"&&(n=this.sortFn(a,"down","rate")),e==="最冰溫度"){const o=["多冰","少冰","半冰","微冰","去冰","完全去冰","溫","熱","不記得"];n=this.sortSpecifyFn(a,o,"ice")}if(e==="最少甜度"){const o=["無糖","1 分糖","微糖","半糖","少糖","全糖","多糖","不記得"];n=this.sortSpecifyFn(a,o,"sugar")}i=this.slicePage(n,s),this.sortComments=i},postComment(t,e,s){const n="http://localhost:3000/comments",a=this.rateAverage(s,t.rate),i=this.rateAverage(e,t.rate);p.post(n,t).then(o=>{console.log(o),this.patchRate("shops",a),this.patchRate("drinks",i),this.getComments()}).catch(o=>{console.log(o)})},slicePage(t,e=1){let s=[];if(t){const a=parseInt(t.length/6,10),i=t.length%6,o=i!==0;let r=null;i?r=a+1:r=a;const l={data:t,pageLimit:6,sliceNum:r,hasRemainder:o,currentPage:e};s=this.sliceFn(l)[e-1]}return s},sliceFn(t){const{data:e,pageLimit:s,sliceNum:n,hasRemainder:a,currentPage:i}=t,o=[];let r=0;for(let l=0;l<n;l+=1){let h=[];a&&n===l?h=e.slice(r):h=e.slice(r,r+s),o.push(h),r+=s}return this.pagination={total:o.length,current:i,prev:i>1,next:i<o.length},o},clickPage(t){let e=this.pagination.current;const s=this.pagination.total;typeof t=="number"?e=t:t==="prev"?e-=1:t==="next"&&(e+=1),this.pagination={...this.pagination,current:e,prev:e>1,next:e<s}},patchRate(t,e){const s=`http://localhost:3000/${t}/${e.id}`,n={rate:e.rate,rateNum:e.rateNum};p.patch(s,n).then(a=>{console.log(a)}).catch(a=>{console.log(a)})},rateAverage(t,e){const s=((Number(t.rate)*t.rateNum+Number(e))/(t.rateNum+1)).toFixed(1);return{id:t.id,rateNum:t.rateNum+1,rate:`${s}`}}}});const b={components:{RateDisplay:x},props:{commentData:{type:Object,default(){return{}}}},methods:{...g(S,["filterUserComment"]),getDate(t){return new Date(t).toLocaleDateString()}}},A=t=>(R("data-v-119d18a9"),t=t(),v(),t),C={class:"pt-6 flex-grow-1"},F={class:"commentDisplay h-100"},L=A(()=>c("div",{class:"commentDisplay-userPhoto"},[c("img",{class:"img-fluid",src:N,alt:"使用者頭像"})],-1)),w={class:"commentDisplay-header mb-4 d-flex justify-content-between"},k={class:"d-inline-block px-2 mb-1 bg-white"},I={class:"px-2 fs-normal2"},P={class:"px-2 fs-normal2"},j={class:"bg-white px-2"},B={class:"fs-normal2 text-end"},G=["innerHTML"];function O(t,e,s,n,a,i){const o=f("RateDisplay");return _(),y("div",C,[c("div",F,[L,c("div",w,[c("div",null,[c("h5",k,m(s.commentData.userName),1),c("p",I,m(t.filterUserComment(s.commentData.userName).length)+" 則評論",1),c("time",P,m(i.getDate(s.commentData.date)),1)]),c("div",j,[D(o,{rate:s.commentData.rate,class:"rateDisplay-sm mb-1"},null,8,["rate"]),c("p",B,m(s.commentData.sugar)+" / "+m(s.commentData.ice),1)])]),c("p",{class:"commentDisplay-content px-2",innerHTML:s.commentData.content},null,8,G)])])}const T=d(b,[["render",O],["__scopeId","data-v-119d18a9"]]);export{T as C,S as c};
