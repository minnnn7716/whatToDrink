<script>
import '../../../node_modules/bootstrap/js/src/modal'
import FavoriteBtn from '../../components/FavoriteBtn.vue'
import RateDisplay from '../../components/RateDisplay.vue'
import RateGroup from '../../components/RateGroup.vue'
import RateSelector from '../../components/RateSelector.vue'
import CommentDisplay from '../../components/CommentDisplay.vue'

export default {
  components: {
    RateDisplay,
    FavoriteBtn,
    RateGroup,
    RateSelector,
    CommentDisplay
  }
}
</script>
<template>
  <div class="container pt-15 pb-25">
    <div class="row justify-content-center">
      <div class="col-9 col-3xl-10">
        <section class="row mb-15">
          <div class="col-4">
            <img class="img-full" src="../../assets/images/drinkPhoto.png" alt="" />
          </div>
          <div class="col-8 d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between mb-8">
              <div>
                <h3
                  class="py-2 px-5 mb-3 d-inline-block fs-normal1 fw-normal border border-gray-900 rounded-pill"
                >
                  五十嵐
                </h3>
                <h2 class="fs-3 mb-6">黃金 JOJO 蕎麥茶</h2>
                <ul class="list-unstyled d-flex mb-5">
                  <li class="pe-6 border-end border-black">
                    <p class="mb-1 fs-6 fw-medium">M <span class="ms-4">$ 50</span></p>
                    <small class="text-gray-700">500ml</small>
                  </li>
                  <li class="ps-6">
                    <p class="mb-1 fs-6 fw-medium">L <span class="ms-4">$60</span></p>
                    <small class="text-gray-700">700ml</small>
                  </li>
                </ul>
                <ul class="list-unstyled d-flex">
                  <li class="py-1 px-4 bg-secondary-300 fs-normal2 fw-medium rounded-pill me-2">
                    店家推薦
                  </li>
                  <li class="py-1 px-4 bg-accent-300 fs-normal2 fw-medium rounded-pill">
                    期間限定
                  </li>
                </ul>
              </div>
              <div class="text-end">
                <RateDisplay class="rateDisplay-md hasHandText strokeTitle mb-3" />
                <FavoriteBtn class="btn-favorite" />
              </div>
            </div>
            <ul class="list-unstyled mb-0">
              <li>熱量： 565 大卡</li>
              <li>咖啡因： 19 mg</li>
              <li>內容物： 綠茶、養樂多、蔗糖、珍珠</li>
            </ul>
          </div>
        </section>
        <section class="row justify-content-center mb-15">
          <div class="col-10">
            <RateGroup />
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
            <button
              type="button"
              class="btn-custom btn-custom-primary fs-6 fw-bold px-0 w-100"
              data-bs-toggle="modal"
              data-bs-target="#addCommentModal"
            >
              撰寫評論
            </button>
          </div>
        </section>

        <section>
          <div class="d-flex align-items-center justify-content-end mb-6">
            <label for="type" class="me-4 fw-medium">排序</label>
            <select
              id="type"
              class="form-select py-2 px-4 border-black rounded-pill"
              style="max-width: 180px"
            >
              <option selected value="評分最高">評分最高</option>
              <option value="最新日期">最新日期</option>
              <option value="最冰溫度">最冰溫度</option>
              <option value="最少甜度">最少甜度</option>
            </select>
          </div>
          <CommentDisplay class="mb-15" />
          <CommentDisplay class="mb-15" />
          <CommentDisplay class="mb-15" />
          <CommentDisplay class="mb-15" />
          <CommentDisplay class="mb-15" />
          <CommentDisplay />
          <p>pagnation</p>
        </section>
      </div>
    </div>

    <!-- addCommentModal -->
    <div class="modal fade" id="addCommentModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content rounded-4">
          <div class="modal-header border-bottom-0">
            <h1 class="modal-title fs-5 invisible" id="addCommentModalLabel">撰寫評論</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body pt-0 pb-10">
            <div class="container-fluid">
              <div class="row gx-10 justify-content-center">
                <div class="col-4">
                  <img class="img-fluid mb-3" src="../../assets/images/drinkPhoto.png" alt="" />
                  <h3
                    class="py-1 px-4 mb-3 d-inline-block fs-normal2 fw-normal border border-gray-900 rounded-pill"
                  >
                    五十嵐
                  </h3>
                  <h2 class="fs-5 mb-3">黃金 JOJO 蕎麥茶</h2>
                  <p class="fs-6 fw-medium">
                    M <span class="ms-2">$ 50</span><span class="mx-3">｜</span>L
                    <span class="ms-2">$ 60</span>
                  </p>
                </div>
                <div class="col-8">
                  <div class="d-flex align-items-center mb-6">
                    <h4 class="fs-5 me-3">評價星等</h4>
                    <RateSelector />
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <select
                      id="type"
                      class="form-select py-2 px-4 border-black rounded-pill me-4"
                      style="max-width: 150px"
                    >
                      <option selected disabled>甜度</option>
                      <option value="無糖">無糖</option>
                      <option value="1 分糖">1 分糖</option>
                      <option value="微糖">微糖</option>
                      <option value="半糖">半糖</option>
                      <option value="少糖">少糖</option>
                      <option value="全糖">全糖</option>
                      <option value="多糖">多糖</option>
                      <option value="不記得">不記得</option>
                    </select>
                    <select
                      id="type"
                      class="form-select py-2 px-4 border-black rounded-pill"
                      style="max-width: 150px"
                    >
                      <option selected disabled>冰塊</option>
                      <option value="完全去冰">完全去冰</option>
                      <option value="去冰">去冰</option>
                      <option value="微冰">微冰</option>
                      <option value="半冰">半冰</option>
                      <option value="多冰">多冰</option>
                      <option value="溫">溫</option>
                      <option value="熱">熱</option>
                      <option value="不記得">不記得</option>
                    </select>
                  </div>
                  <textarea
                    rows="6"
                    class="py-3 px-4 mb-4 w-100 border border-black rounded-4"
                  ></textarea>
                  <div class="d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      class="btn-custom btn-custom-light-sm fw-medium me-3"
                      data-bs-dismiss="modal"
                    >
                      取消評論
                    </button>
                    <button type="button" class="btn-custom btn-custom-primary-sm fw-medium">
                      確定送出
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
