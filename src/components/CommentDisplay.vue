<script>
import RateDisplay from './RateDisplay.vue'

export default {
  components: {
    RateDisplay
  }
}
</script>

<template>
  <div class="commentDisplay">
    <div class="commentDisplay-userPhoto">
      <img class="img-fluid" src="../assets/images/userPhoto.png" alt="使用者頭像" />
    </div>
    <div class="mb-4 d-flex justify-content-between" style="margin-top: -24xp">
      <div class="bg-white px-2">
        <h5 class="mb-1">漢堡神偷愛喝飲料</h5>
        <p class="fs-normal2">18 則評論</p>
      </div>
      <div class="bg-white px-2">
        <RateDisplay class="rateDisplay-sm mb-1" />
        <p class="fs-normal2 text-end">3 分糖 / 去冰</p>
      </div>
    </div>
    <p class="px-2">
      茶與葡萄柚果汁的調配完全恰到好處！<br />
      根本夏日聖品，清爽解膩，3 分糖去冰剛剛好<br />
      如果點多冰的話半糖應該滿不錯的～
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
.commentDisplay {
  position: relative;
  padding: 0 20px 8px 64px;
  margin: 16px 0 12px 32px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 12px;
    right: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 16px;
  }

  &-userPhoto {
    position: absolute;
    top: -16px;
    left: -32px;
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    border-radius: 50%;
    box-shadow: 6px 8px 0 $primary;
    overflow: hidden;
  }
}
</style>
