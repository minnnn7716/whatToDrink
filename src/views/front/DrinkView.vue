<script>
import FavoriteBtn from '../../components/FavoriteBtn.vue'
import RateDisplay from '../../components/RateDisplay.vue'
import RateGroup from '../../components/RateGroup.vue'
import CommentDisplay from '../../components/CommentDisplay.vue'

export default {
  components: {
    RateDisplay,
    FavoriteBtn,
    RateGroup,
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
            <div class="d-flex justify-content-between mb-5">
              <div>
                <h3
                  class="py-2 px-5 mb-3 d-inline-block fs-normal1 fw-normal border border-gray-900 rounded-pill"
                >
                  五十嵐
                </h3>
                <h2 class="fs-3 mb-8">黃金 JOJO 蕎麥茶</h2>
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
            <button type="button" class="btn-custom btn-custom-primary fs-6 fw-bold px-0 w-100">
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
  </div>
</template>
