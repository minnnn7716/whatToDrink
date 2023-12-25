import{_ as U,m as B,R as E,P as L}from"./icon-star-full-decb21c9.js";import{_ as w,o as r,c as u,F as k,h as D,a as t,m as y,r as m,t as i,b as g,w as z,n as p,d as _,l as f,v as $,x as S,p as I,f as A,j as N,g as R,e as T,k as x,i as O}from"./index-641355be.js";import{d as M}from"./drinkStore-490a1e2d.js";import{c as C,C as q}from"./CommentDisplay-0065ee73.js";import{F as H}from"./FavoriteBtn-327831c0.js";import{R as J}from"./RateDisplay-b3c06f54.js";import"./bootstrap.esm-c5ded4fc.js";import"./icon-favorite-active-69e4f444.js";const K="/whatToDrink/assets/icon-star-empty-8c79ce5f.svg";const Q={props:["rate"],watch:{rate(){if(this.rate==="0"){const e=this.$refs.rateSelector;for(let o=0;o<e.length;o+=1)e[o].checked=!1}}},methods:{selectRate(e){this.$emit("emit-rate",e.target.value)}}},W={class:"rateSelector list-unstyled mb-0"},X=["id","value"],Y=["for"],Z=["alt"],tt=["alt"];function et(e,o,n,h,s,c){return r(),u("ul",W,[(r(),u(k,null,D([5,4,3,2,1],d=>t("li",{class:"rateSelector-item me-1",key:`rate ${d}`},[t("input",{class:"rateSelector-input",type:"radio",name:"rating",id:`rating-${d}`,value:`${d}`,onClick:o[0]||(o[0]=(...a)=>c.selectRate&&c.selectRate(...a)),ref_for:!0,ref:"rateSelector"},null,8,X),t("label",{class:"rateSelector-label",for:`rating-${d}`},[t("img",{class:"rateSelector-img rateSelector-img-empty",src:K,alt:`rating-empty-${d}`},null,8,Z),t("img",{class:"rateSelector-img rateSelector-img-full",src:U,alt:`rating-full-${d}`},null,8,tt)],8,Y)])),64))])}const ot=w(Q,[["render",et],["__scopeId","data-v-a4bf9846"]]);const st={data(){return{firstSend:!1,addDate:{rate:"0",userName:"",sugar:"甜度",ice:"冰塊",content:""}}},components:{RateSelector:ot},props:{propsData:{type:Object,default(){return{}}}},mixins:[B],methods:{...y(C,["postComment"]),getSelectRate(e){this.addDate.rate=e},sendComment(){if(this.firstSend=!0,this.hasData){const e={...this.propsData},o={id:e.shop.id,rate:e.shop.rate,rateNum:e.shop.rateNum},n={id:e.id,rate:e.rate,rateNum:e.comments.length};this.addDate={...this.addDate,shopId:e.shop.id,drinkId:e.id,date:new Date*1},this.postComment(this.addDate,n,o),this.modal.hide(),this.firstSend=!1,this.addDate={rate:"0",userName:"",sugar:"甜度",ice:"冰塊",content:""}}}},computed:{hasData(){const e={...this.addDate},o=Object.keys(e),n=[];for(let h=0;h<o.length;h+=1)e.rate==="0"&&n.push(!1),e.userName===""&&n.push(!1),e.sugar==="甜度"&&n.push(!1),e.ice==="冰塊"&&n.push(!1),e.content===""&&n.push(!1);return!n.length}}},b=e=>(I("data-v-618ce348"),e=e(),A(),e),nt={class:"modal fade",id:"addCommentModal",ref:"modal"},at={class:"modal-dialog modal-lg modal-dialog-centered"},it={class:"modal-content rounded-4"},lt={class:"modal-header border-bottom-0 pb-2 p-md-4"},dt=b(()=>t("h1",{class:"modal-title fs-5 invisible",id:"addCommentModalLabel"},"撰寫評論",-1)),ct={class:"modal-body pt-0 pb-10"},rt={class:"container-fluid"},mt={class:"row flex-column flex-md-row gx-md-10 justify-content-center"},pt={class:"col-12 col-md-4"},ut=["src","alt"],_t={class:"py-2 px-4 mb-3 d-inline-block fs-normal2 fw-normal border border-gray-900 rounded-pill"},ht={class:"drinkInfo pb-4 pb-md-0 mb-4 mb-md-0"},ft={class:"fs-5 mb-0 mb-md-3"},gt={class:"fs-normal2 fs-md-6 fw-medium"},bt={class:"ms-2"},vt=b(()=>t("span",{class:"mx-3"},"｜",-1)),kt={class:"ms-2"},Dt={class:"d-flex flex-column flex-md-row align-items-md-center mb-6"},yt={class:"d-flex align-items-center"},St=b(()=>t("p",{class:"mt-2 mt-md-0 ms-md-2 py-1 px-4 rounded-pill"}," 請選擇評價 ",-1)),Ct=[St],wt={class:"row gx-3 align-items-center mb-4"},$t={class:"col-12 col-md-4 mb-4 mb-md-0"},Rt=b(()=>t("label",{for:"addCommentName",class:"form-label fs-5 mb-0 me-3 fw-medium d-none"}," 姓名 ",-1)),xt={class:"col-6 col-md-4"},Mt=N('<option selected disabled data-v-618ce348>甜度</option><option value="無糖" data-v-618ce348>無糖</option><option value="1 分糖" data-v-618ce348>1 分糖</option><option value="微糖" data-v-618ce348>微糖</option><option value="半糖" data-v-618ce348>半糖</option><option value="少糖" data-v-618ce348>少糖</option><option value="全糖" data-v-618ce348>全糖</option><option value="多糖" data-v-618ce348>多糖</option><option value="不記得" data-v-618ce348>不記得</option>',9),It=[Mt],At={class:"col-6 col-md-4"},Nt=N('<option selected disabled data-v-618ce348>冰塊</option><option value="完全去冰" data-v-618ce348>完全去冰</option><option value="去冰" data-v-618ce348>去冰</option><option value="微冰" data-v-618ce348>微冰</option><option value="半冰" data-v-618ce348>半冰</option><option value="少冰" data-v-618ce348>少冰</option><option value="多冰" data-v-618ce348>多冰</option><option value="溫" data-v-618ce348>溫</option><option value="熱" data-v-618ce348>熱</option><option value="不記得" data-v-618ce348>不記得</option>',10),Pt=[Nt],jt={class:"d-flex align-items-center justify-content-end"},Vt=b(()=>t("button",{type:"submit",form:"addCommentForm",class:"btn-custom btn-custom-primary-sm fw-medium"}," 確定送出 ",-1));function Gt(e,o,n,h,s,c){const d=m("RateSelector");return r(),u("div",nt,[t("div",at,[t("div",it,[t("div",lt,[dt,t("button",{type:"button",class:"btn-close",onClick:o[0]||(o[0]=(...a)=>e.hideModal&&e.hideModal(...a))})]),t("div",ct,[t("div",rt,[t("div",mt,[t("div",pt,[t("img",{class:"img-full mb-3 d-none d-md-block",style:{height:"200px"},src:n.propsData.imageUrl,alt:n.propsData.name},null,8,ut),t("h3",_t,i(n.propsData.shop.name),1),t("div",ht,[t("h2",ft,i(n.propsData.name),1),t("p",gt,[g(" M "),t("span",bt,"$ "+i(n.propsData.price.m),1),vt,g(" L "),t("span",kt,"$ "+i(n.propsData.price.l),1)])])]),t("form",{id:"addCommentForm",class:"col-12 col-md-8",onSubmit:o[6]||(o[6]=z((...a)=>c.sendComment&&c.sendComment(...a),["prevent"]))},[t("div",Dt,[t("div",yt,[t("h4",{class:p(["fs-5 me-3 transition-ease",{"text-accent-700":s.addDate.rate==="0"&&s.firstSend}])}," 評價星等 ",2),_(d,{rate:s.addDate.rate,onEmitRate:c.getSelectRate},null,8,["rate","onEmitRate"])]),t("div",{class:p(["rateAlert",{active:s.addDate.rate==="0"&&s.firstSend}])},Ct,2)]),t("div",wt,[t("div",$t,[Rt,f(t("input",{type:"text",class:p(["form-item form-control flex-fit py-2 px-4 rounded-pill",{"border-accent-600 bg-accent-100":s.addDate.userName===""&&s.firstSend}]),id:"addCommentName",placeholder:"暱稱","onUpdate:modelValue":o[1]||(o[1]=a=>s.addDate.userName=a)},null,2),[[$,s.addDate.userName,void 0,{trim:!0}]])]),t("div",xt,[f(t("select",{id:"type",class:p(["form-item form-select py-2 px-4 rounded-pill",{"border-accent-600 bg-accent-100":s.addDate.sugar==="甜度"&&s.firstSend}]),"onUpdate:modelValue":o[2]||(o[2]=a=>s.addDate.sugar=a)},It,2),[[S,s.addDate.sugar]])]),t("div",At,[f(t("select",{id:"type",class:p(["form-item form-select py-2 px-4 rounded-pill",{"border-accent-600 bg-accent-100":s.addDate.ice==="冰塊"&&s.firstSend}]),"onUpdate:modelValue":o[3]||(o[3]=a=>s.addDate.ice=a)},Pt,2),[[S,s.addDate.ice]])])]),f(t("textarea",{rows:"6",class:p(["form-item py-3 px-4 mb-4 w-100 rounded-4",{"border-accent-600 bg-accent-100":s.addDate.content===""&&s.firstSend}]),placeholder:"你覺得這杯飲料如何呢？","onUpdate:modelValue":o[4]||(o[4]=a=>s.addDate.content=a)},null,2),[[$,s.addDate.content]]),t("div",jt,[t("button",{type:"button",class:"btn-custom btn-custom-light-sm fw-medium me-3",onClick:o[5]||(o[5]=(...a)=>e.hideModal&&e.hideModal(...a))}," 取消評論 "),Vt])],32)])])])])])],512)}const Ft=w(st,[["render",Gt],["__scopeId","data-v-618ce348"]]);const Ut={data(){return{drinkId:0,sort:"最新日期"}},components:{RateDisplay:J,FavoriteBtn:H,RateGroup:E,CommentDisplay:q,AddCommentModal:Ft,PaginationComponent:L},props:["id"],watch:{singleDrink(){this.sortAction(1),this.getRateGroupInfo(this.singleDrink.comments)},sort(){this.sortAction(1)},comments(){this.getSingleDrink(this.id),this.getRateGroupInfo(this.singleDrink.comments),this.sortAction(1)}},methods:{...y(M,["getSingleDrink","joinIngredient"]),...y(C,["getComments","getRateGroupInfo","clickPin","filterUserComment","clickPage","sortCommentsFn"]),sortAction(e){const o=[...this.singleDrink.comments];this.sortCommentsFn(o,this.sort,e)},clickPageAction(e){this.clickPage(e),this.sortAction(this.pagination.current),this.$router.push(`${this.$route.path}#drink-comments`)},clickRateAction(e){this.clickPin(e),this.sortAction(1),this.$router.push(`${this.$route.path}#drink-rateGroup`)}},computed:{...R(M,["singleDrink"]),...R(C,["comments","rateGroup","pagination","sortComments"])},created(){this.getSingleDrink(this.id),this.getComments()}},v=e=>(I("data-v-81d651c7"),e=e(),A(),e),Bt={class:"container pt-8 pt-md-15 pb-8 pb-md-12"},Et={class:"row justify-content-center"},Lt={class:"col-12 col-md-9 col-3xl-10"},zt={class:"row"},Tt={class:"col-12 col-md-4 mb-3 mb-md-0 drinkImg"},Ot=["src","alt"],qt={class:"col-12 col-md-8 d-flex flex-column justify-content-between"},Ht={class:"d-flex justify-content-between mb-0 mb-md-8"},Jt={class:"py-2 px-5 mb-3 d-inline-block fs-normal2 fs-md-normal1 fw-normal border border-gray-900 rounded-pill"},Kt={class:"fs-4 fs-md-3 mb-3 mb-md-6"},Qt={class:"list-unstyled d-flex mb-0 mb-md-5"},Wt={class:"pe-6 border-end border-black"},Xt={class:"mb-2 fs-normal1 fs-md-6 fw-medium"},Yt={class:"ms-4"},Zt={class:"d-block text-gray-700 mb-1"},te={class:"d-block text-gray-700"},ee={class:"ps-6"},oe={class:"mb-2 fs-normal1 fs-md-6 fw-medium"},se={class:"ms-4"},ne={class:"d-block text-gray-700 mb-1"},ae={class:"d-block text-gray-700"},ie={class:"list-unstyled d-flex"},le={class:"text-end"},de={class:"list-unstyled mb-0"},ce={class:"row justify-content-center pt-10 pt-md-15",id:"drink-rateGroup"},re={class:"col-12 col-md-10"},me={class:"col-6 col-md-2 d-flex align-items-center justify-content-center"},pe={class:"pt-15",id:"drink-comments"},ue={class:"d-flex align-items-center justify-content-end mb-6"},_e=v(()=>t("label",{for:"type",class:"me-4 fw-medium"},"排序",-1)),he=v(()=>t("option",{selected:"",value:"最新日期"},"最新日期",-1)),fe=v(()=>t("option",{value:"評分最高"},"評分最高",-1)),ge=v(()=>t("option",{value:"最冰溫度"},"最冰溫度",-1)),be=v(()=>t("option",{value:"最少甜度"},"最少甜度",-1)),ve=[he,fe,ge,be];function ke(e,o,n,h,s,c){const d=m("RouterLink"),a=m("RateDisplay"),P=m("FavoriteBtn"),j=m("RateGroup"),V=m("CommentDisplay"),G=m("PaginationComponent"),F=m("AddCommentModal");return r(),u("div",Bt,[t("div",Et,[t("div",Lt,[t("section",zt,[t("div",Tt,[t("img",{class:"img-full",src:e.singleDrink.imageUrl,alt:e.singleDrink.name},null,8,Ot)]),t("div",qt,[t("div",Ht,[t("div",null,[t("h3",Jt,[_(d,{to:`/shops/${e.singleDrink.shop.code}`},{default:T(()=>[g(i(e.singleDrink.shop.name),1)]),_:1},8,["to"])]),t("h2",Kt,i(e.singleDrink.name),1),t("ul",Qt,[t("li",Wt,[t("p",Xt,[g(" M "),t("span",Yt,"$ "+i(e.singleDrink.price.m),1)]),t("small",Zt,i(e.singleDrink.shop.size.m),1),t("small",te,i(e.singleDrink.calorie.m)+" 大卡 ",1)]),t("li",ee,[t("p",oe,[g(" L "),t("span",se,"$ "+i(e.singleDrink.price.l),1)]),t("small",ne,i(e.singleDrink.shop.size.l),1),t("small",ae,i(e.singleDrink.calorie.l)+" 大卡 ",1)])]),t("ul",ie,[(r(!0),u(k,null,D(e.singleDrink.special,l=>(r(),u("li",{class:p(["py-1 px-4 fs-normal2 fw-medium rounded-pill me-2",{"bg-primary-300":l==="期間限定","bg-secondary-300":l==="僅限冷飲","bg-accent-300":l==="店家推薦","bg-gray-100 border border-gray-500":l==="固定糖冰"}]),key:`drinkSpecial ${l}`},i(l),3))),128))])]),t("div",le,[_(a,{class:"rateDisplay-md mb-3 d-none d-md-block",rate:e.rateGroup.totalRateScore},null,8,["rate"]),_(P,{class:"btn-favorite",id:e.singleDrink.id},null,8,["id"])])]),t("ul",de,[t("li",null,"咖啡因："+i(e.singleDrink.caffeine),1),t("li",null,"內容物："+i(e.joinIngredient(e.singleDrink.ingredient)),1)])])]),t("section",ce,[t("div",re,[_(j,{data:e.rateGroup,onEmitPin:c.clickRateAction},null,8,["data","onEmitPin"])]),t("div",me,[t("button",{type:"button",class:"btn-custom btn-custom-primary fs-6 fw-bold px-0 w-100 py-3",onClick:o[0]||(o[0]=(...l)=>e.$refs.addCommentModal.showModal&&e.$refs.addCommentModal.showModal(...l))}," 撰寫評論 ")])]),t("section",pe,[t("div",ue,[_e,f(t("select",{id:"type",class:"form-select py-2 px-4 border-black rounded-pill",style:{"max-width":"180px"},"onUpdate:modelValue":o[1]||(o[1]=l=>s.sort=l)},ve,512),[[S,s.sort]])]),(r(!0),u(k,null,D(e.sortComments,l=>(r(),x(V,{class:"mb-15",key:`comments ${l.id}`,commentData:l},null,8,["commentData"]))),128)),e.pagination.total>1?(r(),x(G,{key:0,pagination:e.pagination,onEmitPage:c.clickPageAction},null,8,["pagination","onEmitPage"])):O("",!0)])])]),_(F,{ref:"addCommentModal",propsData:e.singleDrink},null,8,["propsData"])])}const Me=w(Ut,[["render",ke],["__scopeId","data-v-81d651c7"]]);export{Me as default};
