import{_ as l,o as h,c as d,l as m,v as _,a as n,n as o,q as S,p as b,e as B,s as c,d as i}from"./index-fe76a8c9.js";const v="/whatToDrink/assets/icon-search-eaa6d023.svg";const w={data(){return{searchWord:"",alertShow:!1,firstSearch:!1,searchPage:!1}},watch:{searchWord(){this.searchWord===""?this.alertShow=!0:this.alertShow=!1}},props:["searchType"],methods:{searchFn(){if(this.searchWord===""){this.firstSearch=!0,this.alertShow=!0;return}this.firstSearch=!1,this.$router.push(`/search?type=${this.searchType}&keyword=${this.searchWord}`)}},created(){this.$route.path==="/search"&&(this.searchPage=!0)}},p=s=>(b("data-v-b73247c4"),s=s(),B(),s),y={class:"flex-grow-1 position-relative"},I=p(()=>n("label",{for:"search",class:"form-label d-none"},"想喝的飲料",-1)),x=p(()=>n("img",{src:v,alt:"搜尋"},null,-1)),g=[x];function k(s,t,u,f,e,r){return h(),d("div",y,[I,m(n("input",{type:"text",id:"search",class:o(["form-control h-100 ps-8 rounded-pill fs-6",{"border-3 border-accent-700":e.firstSearch&&e.alertShow}]),placeholder:"想喝什麼告訴我吧！","onUpdate:modelValue":t[0]||(t[0]=a=>e.searchWord=a),onKeyup:t[1]||(t[1]=S((...a)=>r.searchFn&&r.searchFn(...a),["enter"]))},null,34),[[_,e.searchWord,void 0,{trim:!0}]]),n("button",{type:"button",class:"btn btn-hoverScale border-0 p-2 position-absolute top-50 end-0 translate-middle",onClick:t[2]||(t[2]=(...a)=>r.searchFn&&r.searchFn(...a))},g),n("p",{class:o(["position-absolute mt-3 py-2 px-4 bg-light text-accent-700 border border-3 border-accent-700 fw-bold rounded-pill opacity-0 transition-ease",{"opacity-75":e.firstSearch&&e.alertShow,"start-50 translate-middle-x":e.searchPage}])}," 輸入框空白是找不到的喲 ",2)])}const $=l(w,[["render",k],["__scopeId","data-v-b73247c4"]]);const W={data(){return{selectItem:"",startBtn:"",endBtn:""}},props:["defaultSelect"],emits:["emit-btn"],watch:{defaultSelect(){this.defaultSelect&&(this.selectItem=this.defaultSelect)}},methods:{clickItem(s){this.selectItem=s,this.$emit("emit-btn",this.selectItem)}},mounted(){this.startBtn=this.$refs.startBtn.children[0].dataset.name,this.endBtn=this.$refs.endBtn.children[0].dataset.name,this.defaultSelect?this.selectItem=this.defaultSelect:this.selectItem=this.startBtn,this.$emit("emit-btn",this.selectItem)}},F={class:"switchBtnGroup rounded-pill"};function T(s,t,u,f,e,r){return h(),d("div",F,[n("button",{ref:"startBtn",type:"button",class:o(["rounded-pill me-2",{active:e.startBtn===e.selectItem}]),onClick:t[0]||(t[0]=a=>r.clickItem(e.startBtn))},[c(s.$slots,"start",{},()=>[i("start")])],2),n("button",{ref:"endBtn",type:"button",class:o(["rounded-pill",{active:e.endBtn===e.selectItem}]),onClick:t[1]||(t[1]=a=>r.clickItem(e.endBtn))},[c(s.$slots,"end",{},()=>[i("end")])],2)])}const G=l(W,[["render",T]]);export{$ as S,G as a};