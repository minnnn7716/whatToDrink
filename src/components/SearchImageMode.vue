<script>
import RateDisplay from './RateDisplay.vue';

export default {
  components: {
    RateDisplay,
  },
};
</script>

<template>
  <div class="row row-cols-3 gx-12 gy-15">
    <div class="searchImage-item">
      <div class="searchImage-item-imgContainer">
        <img
          class="searchImage-item-img img-full mb-3"
          src="../assets/images/drinkPhoto.png"
          alt=""
        />
        <span class="searchImage-item-tag">五十嵐</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fs-4 fw-bold">珍珠鮮奶茶</h2>
        <RateDisplay class="rateDisplay-sm hasText" />
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <span
            class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-secondary-300 me-2"
            >店家推薦</span
          >
          <span class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-accent-300"
            >期間限定</span
          >
        </div>
        <p class="font-handwriting fs-6 fs-3xl-5 fs-5 fw-bold">
          M <span class="ms-1">$50</span> ｜ L <span class="ms-1">$60</span>
        </p>
      </div>
    </div>
    <div class="searchImage-item">
      <div class="searchImage-item-imgContainer">
        <img
          class="searchImage-item-img img-full mb-3"
          src="../assets/images/drinkPhoto.png"
          alt=""
        />
        <span class="searchImage-item-tag">五十嵐</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fs-4 fw-bold">珍珠鮮奶茶</h2>
        <RateDisplay class="rateDisplay-sm hasText" />
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <span
            class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-secondary-300 me-2"
            >店家推薦</span
          >
          <span class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-accent-300"
            >期間限定</span
          >
        </div>
        <p class="font-handwriting fs-6 fs-3xl-5 fs-5 fw-bold">
          M <span class="ms-1">$50</span> ｜ L <span class="ms-1">$60</span>
        </p>
      </div>
    </div>
    <div class="searchImage-item">
      <div class="searchImage-item-imgContainer">
        <img
          class="searchImage-item-img img-full mb-3"
          src="../assets/images/drinkPhoto.png"
          alt=""
        />
        <span class="searchImage-item-tag">五十嵐</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fs-4 fw-bold">珍珠鮮奶茶</h2>
        <RateDisplay class="rateDisplay-sm hasText" />
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <span
            class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-secondary-300 me-2"
            >店家推薦</span
          >
          <span class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-accent-300"
            >期間限定</span
          >
        </div>
        <p class="font-handwriting fs-6 fs-3xl-5 fs-5 fw-bold">
          M <span class="ms-1">$50</span> ｜ L <span class="ms-1">$60</span>
        </p>
      </div>
    </div>
    <div class="searchImage-item">
      <div class="searchImage-item-imgContainer">
        <img
          class="searchImage-item-img img-full mb-3"
          src="../assets/images/drinkPhoto.png"
          alt=""
        />
        <span class="searchImage-item-tag">五十嵐</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fs-4 fw-bold">珍珠鮮奶茶</h2>
        <RateDisplay class="rateDisplay-sm hasText" />
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <span
            class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-secondary-300 me-2"
            >店家推薦</span
          >
          <span class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-accent-300"
            >期間限定</span
          >
        </div>
        <p class="font-handwriting fs-6 fs-3xl-5 fs-5 fw-bold">
          M <span class="ms-1">$50</span> ｜ L <span class="ms-1">$60</span>
        </p>
      </div>
    </div>
    <div class="searchImage-item">
      <div class="searchImage-item-imgContainer">
        <img
          class="searchImage-item-img img-full mb-3"
          src="../assets/images/drinkPhoto.png"
          alt=""
        />
        <span class="searchImage-item-tag">五十嵐</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="fs-4 fw-bold">珍珠鮮奶茶</h2>
        <RateDisplay class="rateDisplay-sm hasText" />
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <span
            class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-secondary-300 me-2"
            >店家推薦</span
          >
          <span class="d-inline-block fs-normal2 py-1 px-3 px-3xl-4 rounded-pill bg-accent-300"
            >期間限定</span
          >
        </div>
        <p class="font-handwriting fs-6 fs-3xl-5 fw-bold">
          M <span class="ms-1">$50</span> ｜ L <span class="ms-1">$60</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
.searchImage {
  &-item {
    &-imgContainer {
      position: relative;
    }
    &-img {
      height: 280px;
      border: 1px solid #000;

      @include media-breakpoint-up(3xl) {
        height: 350px;
      }
    }

    &-tag {
      display: inline-block;
      position: absolute;
      top: -8px;
      left: -12px;
      padding: 8px 20px;
      border: 1px solid #000;
      background-color: #fff;
      border-radius: 50px;

      @include media-breakpoint-up(3xl) {
        font-size: $h6-font-size;
      }
    }
  }
}
</style>
