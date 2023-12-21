import{C as k}from"./bootstrap.esm-c5ded4fc.js";import{_ as p,r as v,o as u,c as m,a as e,w as h,b as n,d as a,e as _,n as d,p as g,f as w,F as C}from"./index-8e561d10.js";import{_ as S,a as N}from"./icon-favorite-active-69e4f444.js";const T={data(){return{active:!1,collapse:""}},watch:{$route(){this.judgeActive()}},methods:{judgeActive(){const o=["/shops","/#index-type","/wheel","/favorites"],t=this.$route.fullPath;o.indexOf(t)===-1?this.active=!1:this.active=t},toggleCollapse(){this.collapse.toggle()},routerPush(o){this.$router.push(o),this.collapse.hide()}},created(){this.judgeActive()},mounted(){this.collapse=new k(this.$refs.collapse,{toggle:!1}),this.collapse.hide()}},i=o=>(g("data-v-bb9e9d78"),o=o(),w(),o),$={class:"navbar navbar-expand-lg fixed-top"},P={class:"container-fluid"},F=i(()=>e("br",null,null,-1)),j=i(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),L=[j],I={class:"collapse navbar-collapse",ref:"collapse"},R={class:"navbar-nav ms-auto me-0 me-md-8 mb-0 mb-md-2 mb-lg-0 justify-content-center"},V={class:"nav-item my-5 my-md-0"},A=i(()=>e("p",{class:"font-handwriting fs-2"},"Shops",-1)),B=i(()=>e("p",null,"全部店家",-1)),E=[A,B],D={class:"nav-item my-5 my-md-0"},H=i(()=>e("p",{class:"font-handwriting fs-2"},"Categories",-1)),O=i(()=>e("p",null,"四大種類",-1)),W=[H,O],z={class:"nav-item my-5 my-md-0"},M=i(()=>e("p",{class:"font-handwriting fs-2"},"Spin, Spin",-1)),Y=i(()=>e("p",null,"轉吧轉吧",-1)),q=[M,Y],G={class:"nav-item my-5 my-md-0"},J=i(()=>e("p",{class:"font-handwriting fs-2"},"About",-1)),K=i(()=>e("p",null,"關於我們",-1)),Q=[J,K],U={class:"d-flex align-items-center justify-content-end justify-content-md-center ms-md-3 my-5 my-md-0"},X=i(()=>e("img",{class:"btn-hoverSwitch-default",src:S,alt:"喜愛清單"},null,-1)),Z=i(()=>e("img",{class:"btn-hoverSwitch-active",src:N,alt:"喜愛清單"},null,-1)),ee=i(()=>e("p",{class:"font-handwriting fs-2"},"Favorite",-1)),te=i(()=>e("p",null,"喜愛飲品",-1)),se=[ee,te];function oe(o,t,f,b,s,c){const l=v("RouterLink");return u(),m("nav",$,[e("div",P,[e("h1",null,[e("a",{href:"#",class:"navbar-brand",onClick:t[0]||(t[0]=h(r=>c.routerPush("/"),["prevent"]))},[n(" What "),F,n(" to Drink ")])]),e("button",{class:"navbar-toggler border-0",type:"button",onClick:t[1]||(t[1]=(...r)=>c.toggleCollapse&&c.toggleCollapse(...r))},L),e("div",I,[e("ul",R,[e("li",V,[a(l,{to:"/shops",class:d(["nav-link px-4 d-none d-md-inline-block",{active:s.active==="/shops"}])},{default:_(()=>[n(" 全部店家 ")]),_:1},8,["class"]),e("a",{href:"#",class:d(["nav-link-sm d-md-none text-secondary-700",{active:s.active==="/shops",others:s.active&&s.active!=="/shops"}]),onClick:t[2]||(t[2]=h(r=>c.routerPush("/shops"),["prevent"]))},E,2)]),e("li",D,[a(l,{to:"/#index-type",class:d(["nav-link px-4 d-none d-md-inline-block",{active:s.active==="/#index-type"}])},{default:_(()=>[n(" 四大種類 ")]),_:1},8,["class"]),e("a",{href:"#",class:d(["nav-link-sm d-md-none text-secondary-700",{active:s.active==="/#index-type",others:s.active&&s.active!=="/#index-type"}]),onClick:t[3]||(t[3]=h(r=>c.routerPush("/#index-type"),["prevent"]))},W,2)]),e("li",z,[a(l,{to:"/wheel",class:d(["nav-link px-4 d-none d-md-inline-block",{active:s.active==="/wheel"}])},{default:_(()=>[n(" 轉吧轉吧 ")]),_:1},8,["class"]),e("a",{href:"#",class:d(["nav-link-sm d-md-none text-secondary-700",{active:s.active==="/wheel",others:s.active&&s.active!=="/wheel"}]),onClick:t[4]||(t[4]=h(r=>c.routerPush("/wheel"),["prevent"]))},q,2)]),e("li",G,[a(l,{to:"/about",class:d(["nav-link px-4 d-none d-md-inline-block",{active:s.active==="/about"}])},{default:_(()=>[n(" 關於我們 ")]),_:1},8,["class"]),e("a",{href:"#",class:d(["nav-link-sm d-md-none text-secondary-700",{active:s.active==="/about",others:s.active&&s.active!=="/about"}]),onClick:t[5]||(t[5]=h(r=>c.routerPush("/about"),["prevent"]))},Q,2)]),e("li",U,[a(l,{to:"/favorites",class:"btn-custom btn-hoverSwitch d-none d-md-inline-block"},{default:_(()=>[X,Z]),_:1}),e("a",{href:"#",class:d(["nav-link-sm nav-item d-md-none text-accent-700 flex-grow-1",{active:s.active==="/favorites",others:s.active&&s.active!=="/favorites"}]),onClick:t[6]||(t[6]=h(r=>c.routerPush("/favorites"),["prevent"]))},se,2)])])],512)])])}const ne=p(T,[["render",oe],["__scopeId","data-v-bb9e9d78"]]);const ie={methods:{ToTop(){window.scrollTo(0,0)}}},x=o=>(g("data-v-6b96b16e"),o=o(),w(),o),le={class:"footer bg-primary"},ae={class:"container-fluid"},ce={class:"row"},re={class:"footer-content col-10 mx-auto py-12 d-flex flex-column flex-md-row align-items-end justify-content-between"},de={class:"footer-side d-none d-md-flex list-unstyled align-items-end mb-0"},_e={class:"footer-item"},he={class:"footer-item"},ve={class:"footer-item"},pe={class:"footer-item"},ue=x(()=>e("br",null,null,-1)),me=x(()=>e("p",{class:"footer-side text-center text-md-end fs-normal2"},[n(" 資料、圖片來源皆來自網路，"),e("br",{class:"d-md-none"}),n("僅用來做為學習用途 ")],-1));function fe(o,t,f,b,s,c){const l=v("RouterLink");return u(),m("footer",le,[e("div",ae,[e("div",ce,[e("div",re,[e("ul",de,[e("li",_e,[a(l,{to:{name:"Home",hash:"#index-type"},class:"footer-link"},{default:_(()=>[n("四大種類")]),_:1})]),e("li",he,[a(l,{to:"/shops",class:"footer-link"},{default:_(()=>[n("全部店家")]),_:1})]),e("li",ve,[a(l,{to:"/wheel",class:"footer-link"},{default:_(()=>[n("轉吧轉吧")]),_:1})]),e("li",pe,[a(l,{to:"/about",class:"footer-link"},{default:_(()=>[n("關於我們")]),_:1})])]),a(l,{to:"/",class:"footer-brand fs-3 btn-hoverScale"},{default:_(()=>[n(" What "),ue,n(" to Drink ")]),_:1}),me,e("button",{onClick:t[0]||(t[0]=h((...r)=>c.ToTop&&c.ToTop(...r),["prevent"])),type:"button",class:"footer-toTop fs-6"},"TOP")])])])])}const be=p(ie,[["render",fe],["__scopeId","data-v-6b96b16e"]]),ge={data(){return{navbarStatus:!1}},components:{NavbarComponent:ne,FooterComponent:be},watch:{$route:"listenerScroll"},methods:{listenerScroll(){this.$route.path==="/"?window.addEventListener("scroll",this.toggleNav):(window.removeEventListener("scroll",this.toggleNav),this.navbarStatus=!0)},toggleNav(){const o=window.scrollY,t=window.innerHeight/3;o>t?this.navbarStatus=!0:this.navbarStatus=!1}},mounted(){this.listenerScroll()}};function we(o,t,f,b,s,c){const l=v("NavbarComponent"),r=v("RouterView"),y=v("FooterComponent");return u(),m(C,null,[a(l,{class:d({showNav:s.navbarStatus})},null,8,["class"]),a(r,{class:"view"}),a(y)],64)}const Ce=p(ge,[["render",we]]);export{Ce as default};
