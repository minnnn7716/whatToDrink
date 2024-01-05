import{_ as T,m as g,j as C,r as p,o as i,c as r,a as e,d as o,e as l,t as _,F as u,h as x,n as f,b as c,g as b,k as v,i as B,p as N,f as V}from"./index-b93c5667.js";import{d as w}from"./drinkStore-973bcf5a.js";import{C as R,c as A}from"./CommentDisplay-7d9b4888.js";import{R as G}from"./RateDisplay-55162780.js";import{S as j,a as L}from"./SwitchBtnGroup-21b41ebf.js";const H="/whatToDrink/assets/index-kind-all-d64ccaf8.webp",E="/whatToDrink/assets/index-kind-tea-e5021ef9.webp",F="/whatToDrink/assets/index-kind-special-046e5409.webp",z="/whatToDrink/assets/index-kind-milktea-0795d19f.webp",M="/whatToDrink/assets/index-wheel-person-8790bbfe.svg",U="/whatToDrink/assets/index-wheel-drink-8afc1d3d.svg",q="/whatToDrink/assets/index-wheel-wheel-50e003bf.svg",J="/whatToDrink/assets/index-wheel-drink-sm-531509b7.svg",K="/whatToDrink/assets/index-wheel-wheel-sm-2c8f86bd.svg",O="/whatToDrink/assets/icon-arrow-start-a6829c1a.svg",P="/whatToDrink/assets/icon-arrow-end-f8b3418a.svg";const Q={data(){return{searchType:"",recommendSelect:1}},components:{CommentDisplay:R,RateDisplay:G,SearchBar:j,SwitchBtnGroup:L},methods:{...g(w,["getDrinksShopComment"]),...g(A,["getComments"]),translateNum(a){return a<10?`0${a}`:a}},computed:{...C(w,["recommendDrinks"]),recommendItem(){return this.recommendDrinks[this.recommendSelect-1]}},created(){this.getDrinksShopComment(),this.getComments()}},t=a=>(N("data-v-8f439ad4"),a=a(),V(),a),W={class:"index"},X={class:"index-header d-flex align-items-center justify-content-center"},Y={class:"container"},Z={class:"row"},$={class:"col-12 col-lg-8 mx-auto d-flex flex-column align-items-center pt-15 pt-md-0"},ee=v('<h2 class="index-header-title-container mb-6 text-accent" data-v-8f439ad4><div class="index-header-title-upper" data-v-8f439ad4><span class="index-header-title" data-v-8f439ad4>今</span><span class="index-header-title" data-v-8f439ad4>天</span><span class="index-header-title" data-v-8f439ad4>你</span><span class="index-header-title" data-v-8f439ad4>要</span><span class="index-header-title" data-v-8f439ad4>喝</span><span class="index-header-title" data-v-8f439ad4>什</span><span class="index-header-title" data-v-8f439ad4>麼</span><span class="index-header-title" data-v-8f439ad4>？</span></div><div class="index-header-title-lower" data-v-8f439ad4><span class="index-header-title" data-v-8f439ad4>今</span><span class="index-header-title" data-v-8f439ad4>天</span><span class="index-header-title" data-v-8f439ad4>你</span><span class="index-header-title" data-v-8f439ad4>要</span><span class="index-header-title" data-v-8f439ad4>喝</span><span class="index-header-title" data-v-8f439ad4>什</span><span class="index-header-title" data-v-8f439ad4>麼</span><span class="index-header-title" data-v-8f439ad4>？</span></div></h2><h3 class="d-flex fs-6 fs-md-4 fw-bold mb-12" data-v-8f439ad4><p class="index-header-subtitle me-minus4 bg-primary rounded-pill" data-v-8f439ad4> 給我一個支點 </p><p class="index-header-subtitle bg-secondary rounded-pill" data-v-8f439ad4> 給你一杯飲料 </p></h3>',2),se={class:"index-header-searchContainer d-flex flex-column flex-md-row"},te=t(()=>e("span",{"data-name":"drinks"},"飲料",-1)),ne=t(()=>e("span",{"data-name":"shops"},"店家",-1)),ae={class:"py-18 pb-md-0 py-lg-25 position-relative"},de=t(()=>e("div",{class:"position-absolute top-0 translate-middle-y py-8",id:"index-type"},null,-1)),oe={class:"container"},le={class:"row flex-column flex-lg-row align-items-center justify-content-center"},ce=t(()=>e("div",{class:"col-12 col-lg-3 mb-8 mb-lg-0"},[e("h4",{class:"title-angleStar fs-5 fs-md-4 fw-bold mb-4"},"還是沒有想法嗎？"),e("p",{class:"title-angleStar-content fs-6 fs-md-5"},[c(" 通通給你，"),e("br"),c(" 慢慢挑～慢慢選～"),e("br")])],-1)),ie={class:"col-12 col-lg-7 col-3xl-9 d-flex flex-wrap flex-md-nowrap row list-unstyled mb-0"},me={class:"col-6 col-md-3 btn-roundImgAndText px-4 px-lg-0 mb-6 me-0 me-lg-10"},re=t(()=>e("img",{class:"mb-2 mb-md-5",src:H,alt:"全部店面"},null,-1)),_e=t(()=>e("p",{class:"fs-5 fw-medium text-black"},"全部店面",-1)),he={class:"col-6 col-md-3 btn-roundImgAndText px-4 px-lg-0 mb-6 me-0 me-lg-10"},pe=t(()=>e("img",{class:"mb-2 mb-md-5",src:E,alt:"純茶飲料"},null,-1)),fe=t(()=>e("p",{class:"fs-5 fw-medium text-black"},"純茶飲料",-1)),ue={class:"col-6 col-md-3 btn-roundImgAndText px-4 px-lg-0 me-0 me-lg-10"},xe=t(()=>e("img",{class:"mb-2 mb-md-5",src:F,alt:"特調飲料"},null,-1)),be=t(()=>e("p",{class:"fs-5 fw-medium text-black"},"特調飲料",-1)),ge={class:"col-6 col-md-3 btn-roundImgAndText px-4 px-lg-0"},we=t(()=>e("img",{class:"mb-2 mb-md-5",src:z,alt:"奶奶飲料"},null,-1)),ve=t(()=>e("p",{class:"fs-5 fw-medium text-black"},"奶奶飲料",-1)),ke={class:"index-wheel py-10 py-md-18"},ye={class:"index-wheel-container"},De={class:"index-wheel-text text-center text-white lh-base"},Se=t(()=>e("h4",{class:"mb-8 fs-4 fs-lg-3 fw-bold lh-base"},[c(" 阿姨，我不想努力了..."),e("br"),c("沒關係！ ")],-1)),Ie=t(()=>e("p",{class:"mb-8 fs-6 fs-lg-5"},[c(" 轉盤啊～轉盤～"),e("br"),c(" 世界上最適合我的飲料是哪一杯？ ")],-1)),Te=v('<img class="index-wheel-img-person d-none d-md-inline-block" src="'+M+'" data-v-8f439ad4><img class="index-wheel-img-drink d-none d-lg-inline-block" src="'+U+'" data-v-8f439ad4><img class="index-wheel-img-wheel d-none d-md-inline-block" src="'+q+'" data-v-8f439ad4><img class="index-wheel-img-drink-sm d-md-none" src="'+J+'" data-v-8f439ad4><img class="index-wheel-img-wheel-sm d-md-none" src="'+K+'" data-v-8f439ad4>',5),Ce={class:"pt-10 pb-20 py-lg-25"},Be={class:"container"},Ne={class:"row"},Ve={class:"col-12 col-lg-10 col-3xl-12 mx-auto"},Re={class:"d-flex align-items-center justify-content-between mb-3 mb-md-10"},Ae=t(()=>e("h4",{class:"title-angleStar title-angleStar-sm-noImg fs-5 fs-md-4 fw-bold me-5"}," 好評飲品推推 ",-1)),Ge={class:"d-none d-md-flex flex-grow-1 d-flex align-items-center"},je={class:"font-handwriting fs-5 fs-md-4 fw-bold me-5"},Le={class:"list-unstyled mb-0 d-flex align-items-center"},He=["onClick"],Ee=t(()=>e("div",{class:"divider flex-grow-1 mx-3"},null,-1)),Fe={class:"list-unstyled mb-0 d-flex align-items-center"},ze={class:"me-6"},Me=t(()=>e("img",{src:O,alt:"上一則"},null,-1)),Ue=[Me],qe=t(()=>e("img",{src:P,alt:"下一則"},null,-1)),Je=[qe],Ke={class:"d-flex flex-row-reverse d-md-none align-items-center px-2 mb-6"},Oe={class:"font-handwriting fs-4 fw-bold me-1"},Pe=t(()=>e("div",{class:"divider flex-grow-1 mx-3"},null,-1)),Qe={class:"list-unstyled mb-0 d-flex align-items-center"},We=["onClick"],Xe={class:"row index-comment ps-5 pe-2 px-md-0"},Ye={class:"index-comment-start col-12 col-lg-6 mb-md-10 mb-lg-0"},Ze=["src","alt"],$e={class:"index-comment-start-title title-stroke-2 fs-4 fs-md-3 fw-bold lh-base"},es={class:"index-comment-start-info fs-5 fs-md-4 title-stroke-2 font-handwriting fw-bold"},ss={key:0},ts={class:"ms-2"},ns={key:1},as={key:2},ds={class:"ms-2"},os={class:"d-none d-md-block col-12 col-lg-6 overflow-auto"};function ls(a,h,cs,is,d,s){const k=p("SwitchBtnGroup"),y=p("SearchBar"),m=p("RouterLink"),D=p("RateDisplay"),S=p("CommentDisplay");return i(),r("div",W,[e("header",X,[e("div",Y,[e("div",Z,[e("div",$,[ee,e("div",se,[o(k,{class:"switchBtnGroup-light switchBtnGroup-text me-0 mb-3 me-md-4 mb-md-0",onEmitBtn:h[0]||(h[0]=n=>d.searchType=n)},{start:l(()=>[te]),end:l(()=>[ne]),_:1}),o(y,{searchType:d.searchType},null,8,["searchType"])])])])])]),e("section",ae,[de,e("div",oe,[e("div",le,[ce,e("ul",ie,[e("li",me,[o(m,{to:"/shops"},{default:l(()=>[re,_e]),_:1})]),e("li",he,[o(m,{to:"/search?type=drinks&keyword=純茶"},{default:l(()=>[pe,fe]),_:1})]),e("li",ue,[o(m,{to:"/search?type=drinks&keyword=特調"},{default:l(()=>[xe,be]),_:1})]),e("li",ge,[o(m,{to:"/search?type=drinks&keyword=奶系列"},{default:l(()=>[we,ve]),_:1})])])])])]),e("section",ke,[e("div",ye,[e("div",De,[Se,Ie,o(m,{to:"/wheel",class:"btn-custom btn-custom-primary fs-6 fs-lg-4 fs-xxl-5 fw-bold"},{default:l(()=>[c(" 請賜與我飲料 ")]),_:1})]),Te])]),e("section",Ce,[e("div",Be,[e("div",Ne,[e("div",Ve,[e("div",Re,[Ae,e("div",Ge,[e("p",je,_(s.translateNum(d.recommendSelect))+"｜"+_(s.translateNum(a.recommendDrinks.length)),1),e("ul",Le,[(i(!0),r(u,null,x(a.recommendDrinks.length,n=>(i(),r("li",{key:`recommend ${n}`},[e("button",{type:"button",class:f(["btn-carouselDot",{active:n===d.recommendSelect,"me-2":n!==a.recommendDrinks.length}]),onClick:I=>d.recommendSelect=n},null,10,He)]))),128))]),Ee]),e("ul",Fe,[e("li",ze,[e("button",{type:"button",class:f(["btn-arrow",{disabled:d.recommendSelect===1}]),onClick:h[1]||(h[1]=n=>d.recommendSelect-=1)},Ue,2)]),e("li",null,[e("button",{type:"button",class:f(["btn-arrow",{disabled:d.recommendSelect===a.recommendDrinks.length}]),onClick:h[2]||(h[2]=n=>d.recommendSelect+=1)},Je,2)])])]),e("div",Ke,[e("p",Oe,_(s.translateNum(d.recommendSelect))+"｜"+_(s.translateNum(a.recommendDrinks.length)),1),Pe,e("ul",Qe,[(i(!0),r(u,null,x(a.recommendDrinks.length,n=>(i(),r("li",{key:`recommend ${n}`},[e("button",{type:"button",class:f(["btn-carouselDot",{active:n===d.recommendSelect,"me-2":n!==a.recommendDrinks.length}]),onClick:I=>d.recommendSelect=n},null,10,We)]))),128))])]),e("div",Xe,[e("div",Ye,[o(m,{to:`/drink/${s.recommendItem.id}`},{default:l(()=>[e("img",{class:"img-full",src:s.recommendItem.imageUrl,alt:s.recommendItem.name},null,8,Ze)]),_:1},8,["to"]),e("div",null,[e("h5",$e,[o(m,{to:`/drink/${s.recommendItem.id}`},{default:l(()=>[c(_(s.recommendItem.name),1)]),_:1},8,["to"]),o(m,{to:`/shops/${s.recommendItem.shop.code}`,class:"index-comment-start-tag pt-3 pb-2 px-1 px-md-2 bg-white border border-gray-900 rounded-pill fs-normal2 fs-md-6"},{default:l(()=>[c(_(s.recommendItem.shop.name),1)]),_:1},8,["to"])])]),e("p",es,[s.recommendItem.price.m?(i(),r("span",ss,[c(" M "),e("span",ts,"$ "+_(s.recommendItem.price.m),1)])):b("",!0),s.recommendItem.price.m&&s.recommendItem.price.l?(i(),r("span",ns," ｜ ")):b("",!0),s.recommendItem.price.l?(i(),r("span",as,[c(" L "),e("span",ds,"$ "+_(s.recommendItem.price.l),1)])):b("",!0)]),o(m,{to:{path:`/drink/${s.recommendItem.id}`,hash:"#drink-comments"}},{default:l(()=>[o(D,{class:"index-comment-start-rate rateDisplay-lg hasHandText title-stroke-2",rate:s.recommendItem.rate},null,8,["rate"])]),_:1},8,["to"])]),e("div",os,[(i(!0),r(u,null,x(s.recommendItem.comments,n=>(i(),B(S,{class:"mb-12 h-auto",key:`index-comment ${n.id}`,commentData:n},null,8,["commentData"]))),128))])])])])])])])}const fs=T(Q,[["render",ls],["__scopeId","data-v-8f439ad4"]]);export{fs as default};
