import{_ as G,m as V,R as F,P as U}from"./icon-star-full-eab205d0.js";import{_ as S,o as c,c as u,F as v,h as y,a as t,m as D,r as m,t as i,b as g,w as B,n as p,d as _,l as f,v as w,x as k,p as E,f as L,j as M,g as $,e as z,k as R,i as T}from"./index-8e561d10.js";import{d as x}from"./drinkStore-bd8b6d11.js";import{c as C,C as O}from"./CommentDisplay-aaa78a8a.js";import{F as q}from"./FavoriteBtn-262bdf1a.js";import{R as H}from"./RateDisplay-19375105.js";import"./bootstrap.esm-c5ded4fc.js";import"./userPhoto-b894f591.js";import"./icon-favorite-active-69e4f444.js";const J="/whatToDrink/assets/icon-star-empty-8c79ce5f.svg";const K={props:["rate"],watch:{rate(){if(this.rate==="0"){const e=this.$refs.rateSelector;for(let o=0;o<e.length;o+=1)e[o].checked=!1}}},methods:{selectRate(e){this.$emit("emit-rate",e.target.value)}}},Q={class:"rateSelector list-unstyled mb-0"},W=["id","value"],X=["for"],Y=["alt"],Z=["alt"];function tt(e,o,n,h,s,r){return c(),u("ul",Q,[(c(),u(v,null,y([5,4,3,2,1],d=>t("li",{class:"rateSelector-item me-1",key:`rate ${d}`},[t("input",{class:"rateSelector-input",type:"radio",name:"rating",id:`rating-${d}`,value:`${d}`,onClick:o[0]||(o[0]=(...a)=>r.selectRate&&r.selectRate(...a)),ref_for:!0,ref:"rateSelector"},null,8,W),t("label",{class:"rateSelector-label",for:`rating-${d}`},[t("img",{class:"rateSelector-img rateSelector-img-empty",src:J,alt:`rating-empty-${d}`},null,8,Y),t("img",{class:"rateSelector-img rateSelector-img-full",src:G,alt:`rating-full-${d}`},null,8,Z)],8,X)])),64))])}const et=S(K,[["render",tt],["__scopeId","data-v-a4bf9846"]]);const ot={data(){return{firstSend:!1,addDate:{rate:"0",userName:"",sugar:"甜度",ice:"冰塊",content:""}}},components:{RateSelector:et},props:{propsData:{type:Object,default(){return{}}}},mixins:[V],methods:{...D(C,["postComment"]),getSelectRate(e){this.addDate.rate=e},sendComment(){if(this.firstSend=!0,this.hasData){const e={...this.propsData},o={id:e.shop.id,rate:e.shop.rate,rateNum:e.shop.rateNum},n={id:e.id,rate:e.rate,rateNum:e.comments.length};this.addDate={...this.addDate,shopId:e.shop.id,drinkId:e.id,date:new Date*1},this.postComment(this.addDate,n,o),this.modal.hide(),this.addDate={rate:"0",userName:"",sugar:"甜度",ice:"冰塊",content:""}}}},computed:{hasData(){const e={...this.addDate},o=Object.keys(e),n=[];for(let h=0;h<o.length;h+=1)e.rate==="0"&&n.push(!1),e.userName===""&&n.push(!1),e.sugar==="甜度"&&n.push(!1),e.ice==="冰塊"&&n.push(!1),e.content===""&&n.push(!1);return!n.length}}},b=e=>(E("data-v-97ba3983"),e=e(),L(),e),st={class:"modal fade",id:"addCommentModal",ref:"modal"},nt={class:"modal-dialog modal-lg modal-dialog-centered"},at={class:"modal-content rounded-4"},it={class:"modal-header border-bottom-0"},lt=b(()=>t("h1",{class:"modal-title fs-5 invisible",id:"addCommentModalLabel"},"撰寫評論",-1)),dt={class:"modal-body pt-0 pb-10"},rt={class:"container-fluid"},ct={class:"row gx-10 justify-content-center"},mt={class:"col-4"},pt=["src","alt"],ut={class:"py-1 px-4 mb-3 d-inline-block fs-normal2 fw-normal border border-gray-900 rounded-pill"},_t={class:"fs-5 mb-3"},ht={class:"fs-6 fw-medium"},ft={class:"ms-2"},gt=b(()=>t("span",{class:"mx-3"},"｜",-1)),bt={class:"ms-2"},vt={class:"d-flex align-items-center mb-6"},yt={class:"d-flex align-items-center mb-4"},Dt={class:"me-3"},kt=b(()=>t("label",{for:"addCommentName",class:"form-label fs-5 mb-0 me-3 fw-medium d-none"}," 姓名 ",-1)),Ct=M('<option selected disabled data-v-97ba3983>甜度</option><option value="無糖" data-v-97ba3983>無糖</option><option value="1 分糖" data-v-97ba3983>1 分糖</option><option value="微糖" data-v-97ba3983>微糖</option><option value="半糖" data-v-97ba3983>半糖</option><option value="少糖" data-v-97ba3983>少糖</option><option value="全糖" data-v-97ba3983>全糖</option><option value="多糖" data-v-97ba3983>多糖</option><option value="不記得" data-v-97ba3983>不記得</option>',9),St=[Ct],wt=M('<option selected disabled data-v-97ba3983>冰塊</option><option value="完全去冰" data-v-97ba3983>完全去冰</option><option value="去冰" data-v-97ba3983>去冰</option><option value="微冰" data-v-97ba3983>微冰</option><option value="半冰" data-v-97ba3983>半冰</option><option value="少冰" data-v-97ba3983>少冰</option><option value="多冰" data-v-97ba3983>多冰</option><option value="溫" data-v-97ba3983>溫</option><option value="熱" data-v-97ba3983>熱</option><option value="不記得" data-v-97ba3983>不記得</option>',10),$t=[wt],Rt={class:"d-flex align-items-center justify-content-end"},xt=b(()=>t("button",{type:"submit",form:"addCommentForm",class:"btn-custom btn-custom-primary-sm fw-medium"}," 確定送出 ",-1));function Mt(e,o,n,h,s,r){const d=m("RateSelector");return c(),u("div",st,[t("div",nt,[t("div",at,[t("div",it,[lt,t("button",{type:"button",class:"btn-close",onClick:o[0]||(o[0]=(...a)=>e.hideModal&&e.hideModal(...a))})]),t("div",dt,[t("div",rt,[t("div",ct,[t("div",mt,[t("img",{class:"img-full mb-3",style:{height:"200px"},src:n.propsData.imageUrl,alt:n.propsData.name},null,8,pt),t("h3",ut,i(n.propsData.shop.name),1),t("h2",_t,i(n.propsData.name),1),t("p",ht,[g(" M "),t("span",ft,"$ "+i(n.propsData.price.m),1),gt,g(" L "),t("span",bt,"$ "+i(n.propsData.price.l),1)])]),t("form",{id:"addCommentForm",class:"col-8",onSubmit:o[6]||(o[6]=B((...a)=>r.sendComment&&r.sendComment(...a),["prevent"]))},[t("div",vt,[t("h4",{class:p(["fs-5 me-3 transition-ease",{"text-accent-700":s.addDate.rate==="0"&&s.firstSend}])}," 評價星等 ",2),_(d,{rate:s.addDate.rate,onEmitRate:r.getSelectRate},null,8,["rate","onEmitRate"]),t("p",{class:p(["ms-2 py-1 px-4 bg-light text-accent-700 fw-medium border border-3 border-accent-600 rounded-pill opacity-0 transition-ease",{"opacity-100":s.addDate.rate==="0"&&s.firstSend}])}," 請選擇評價 ",2)]),t("div",yt,[t("div",Dt,[kt,f(t("input",{type:"text",class:p(["form-item form-control flex-fit py-2 px-4 rounded-pill",{"border-accent-600 bg-accent-100":s.addDate.userName===""&&s.firstSend}]),id:"addCommentName",placeholder:"暱稱","onUpdate:modelValue":o[1]||(o[1]=a=>s.addDate.userName=a)},null,2),[[w,s.addDate.userName,void 0,{trim:!0}]])]),f(t("select",{id:"type",class:p(["form-item form-select py-2 px-4 rounded-pill me-3",{"border-accent-600 bg-accent-100":s.addDate.sugar==="甜度"&&s.firstSend}]),style:{"max-width":"125px"},"onUpdate:modelValue":o[2]||(o[2]=a=>s.addDate.sugar=a)},St,2),[[k,s.addDate.sugar]]),f(t("select",{id:"type",class:p(["form-item form-select py-2 px-4 rounded-pill",{"border-accent-600 bg-accent-100":s.addDate.ice==="冰塊"&&s.firstSend}]),style:{"max-width":"125px"},"onUpdate:modelValue":o[3]||(o[3]=a=>s.addDate.ice=a)},$t,2),[[k,s.addDate.ice]])]),f(t("textarea",{rows:"6",class:p(["form-item py-3 px-4 mb-4 w-100 rounded-4",{"border-accent-600 bg-accent-100":s.addDate.content===""&&s.firstSend}]),placeholder:"你覺得這杯飲料如何呢？","onUpdate:modelValue":o[4]||(o[4]=a=>s.addDate.content=a)},null,2),[[w,s.addDate.content]]),t("div",Rt,[t("button",{type:"button",class:"btn-custom btn-custom-light-sm fw-medium me-3",onClick:o[5]||(o[5]=(...a)=>e.hideModal&&e.hideModal(...a))}," 取消評論 "),xt])],32)])])])])])],512)}const Nt=S(ot,[["render",Mt],["__scopeId","data-v-97ba3983"]]),At={data(){return{drinkId:0,sort:"最新日期"}},components:{RateDisplay:H,FavoriteBtn:q,RateGroup:F,CommentDisplay:O,AddCommentModal:Nt,PaginationComponent:U},props:["id"],watch:{singleDrink(){this.sortAction(1),this.getRateGroupInfo(this.singleDrink.comments)},sort(){this.sortAction(1)},comments(){this.getSingleDrink(this.id),this.getRateGroupInfo(this.singleDrink.comments),this.sortAction(1)}},methods:{...D(x,["getSingleDrink","joinIngredient"]),...D(C,["getComments","getRateGroupInfo","clickPin","filterUserComment","clickPage","sortCommentsFn"]),sortAction(e){const o=[...this.singleDrink.comments];this.sortCommentsFn(o,this.sort,e)},clickPageAction(e){this.clickPage(e),this.sortAction(this.pagination.current),this.$router.push(`${this.$route.path}#drink-comments`)},clickRateAction(e){this.clickPin(e),this.sortAction(1),this.$router.push(`${this.$route.path}#drink-rateGroup`)}},computed:{...$(x,["singleDrink"]),...$(C,["comments","rateGroup","pagination","sortComments"])},created(){this.getSingleDrink(this.id),this.getComments()}},Pt={class:"container pt-15 pb-25"},jt={class:"row justify-content-center"},It={class:"col-9 col-3xl-10"},Gt={class:"row"},Vt={class:"col-4"},Ft=["src","alt"],Ut={class:"col-8 d-flex flex-column justify-content-between"},Bt={class:"d-flex justify-content-between mb-8"},Et={class:"py-2 px-5 mb-3 d-inline-block fs-normal1 fw-normal border border-gray-900 rounded-pill"},Lt={class:"fs-3 mb-6"},zt={class:"list-unstyled d-flex mb-5"},Tt={class:"pe-6 border-end border-black"},Ot={class:"mb-2 fs-6 fw-medium"},qt={class:"ms-4"},Ht={class:"d-block text-gray-700 mb-1"},Jt={class:"d-block text-gray-700"},Kt={class:"ps-6"},Qt={class:"mb-2 fs-6 fw-medium"},Wt={class:"ms-4"},Xt={class:"d-block text-gray-700 mb-1"},Yt={class:"d-block text-gray-700"},Zt={class:"list-unstyled d-flex"},te={class:"text-end"},ee={class:"list-unstyled mb-0"},oe={class:"row justify-content-center pt-15",id:"drink-rateGroup"},se={class:"col-10"},ne={class:"col-2 d-flex align-items-center justify-content-center"},ae={class:"pt-15",id:"drink-comments"},ie={class:"d-flex align-items-center justify-content-end mb-6"},le=t("label",{for:"type",class:"me-4 fw-medium"},"排序",-1),de=t("option",{selected:"",value:"最新日期"},"最新日期",-1),re=t("option",{value:"評分最高"},"評分最高",-1),ce=t("option",{value:"最冰溫度"},"最冰溫度",-1),me=t("option",{value:"最少甜度"},"最少甜度",-1),pe=[de,re,ce,me];function ue(e,o,n,h,s,r){const d=m("RouterLink"),a=m("RateDisplay"),N=m("FavoriteBtn"),A=m("RateGroup"),P=m("CommentDisplay"),j=m("PaginationComponent"),I=m("AddCommentModal");return c(),u("div",Pt,[t("div",jt,[t("div",It,[t("section",Gt,[t("div",Vt,[t("img",{class:"img-full",src:e.singleDrink.imageUrl,alt:e.singleDrink.name},null,8,Ft)]),t("div",Ut,[t("div",Bt,[t("div",null,[t("h3",Et,[_(d,{to:`/shops/${e.singleDrink.shop.code}`},{default:z(()=>[g(i(e.singleDrink.shop.name),1)]),_:1},8,["to"])]),t("h2",Lt,i(e.singleDrink.name),1),t("ul",zt,[t("li",Tt,[t("p",Ot,[g(" M "),t("span",qt,"$ "+i(e.singleDrink.price.m),1)]),t("small",Ht,i(e.singleDrink.shop.size.m),1),t("small",Jt,i(e.singleDrink.calorie.m)+" 大卡 ",1)]),t("li",Kt,[t("p",Qt,[g(" L "),t("span",Wt,"$ "+i(e.singleDrink.price.l),1)]),t("small",Xt,i(e.singleDrink.shop.size.l),1),t("small",Yt,i(e.singleDrink.calorie.l)+" 大卡 ",1)])]),t("ul",Zt,[(c(!0),u(v,null,y(e.singleDrink.special,l=>(c(),u("li",{class:p(["py-1 px-4 fs-normal2 fw-medium rounded-pill me-2",{"bg-primary-300":l==="期間限定","bg-secondary-300":l==="僅限冷飲","bg-accent-300":l==="店家推薦","bg-gray-100 border border-gray-500":l==="固定糖冰"}]),key:`drinkSpecial ${l}`},i(l),3))),128))])]),t("div",te,[_(a,{class:"rateDisplay-md mb-3",rate:e.rateGroup.totalRateScore},null,8,["rate"]),_(N,{class:"btn-favorite",id:e.singleDrink.id},null,8,["id"])])]),t("ul",ee,[t("li",null,"咖啡因："+i(e.singleDrink.caffeine),1),t("li",null,"內容物："+i(e.joinIngredient(e.singleDrink.ingredient)),1)])])]),t("section",oe,[t("div",se,[_(A,{data:e.rateGroup,onEmitPin:r.clickRateAction},null,8,["data","onEmitPin"])]),t("div",ne,[t("button",{type:"button",class:"btn-custom btn-custom-primary fs-6 fw-bold px-0 w-100",onClick:o[0]||(o[0]=(...l)=>e.$refs.addCommentModal.showModal&&e.$refs.addCommentModal.showModal(...l))}," 撰寫評論 ")])]),t("section",ae,[t("div",ie,[le,f(t("select",{id:"type",class:"form-select py-2 px-4 border-black rounded-pill",style:{"max-width":"180px"},"onUpdate:modelValue":o[1]||(o[1]=l=>s.sort=l)},pe,512),[[k,s.sort]])]),(c(!0),u(v,null,y(e.sortComments,l=>(c(),R(P,{class:"mb-15",key:`comments ${l.id}`,commentData:l},null,8,["commentData"]))),128)),e.pagination.total>1?(c(),R(j,{key:0,pagination:e.pagination,onEmitPage:r.clickPageAction},null,8,["pagination","onEmitPage"])):T("",!0)])])]),_(I,{ref:"addCommentModal",propsData:e.singleDrink},null,8,["propsData"])])}const Ce=S(At,[["render",ue]]);export{Ce as default};
