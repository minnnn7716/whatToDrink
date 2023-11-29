<script>
import RateDisplay from '../../components/RateDisplay.vue'

export default {
  components: {
    RateDisplay
  }
}
</script>

<template>
  <div class="wheel d-flex flex-column">
    <!-- wheel-result-bg -->
    <div class="flex-grow-1 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8 col-3xl-10">
            <div class="mb-6 d-flex align-items-center justify-content-between">
              <h2 class="title-angleStar-dark fs-4">轉轉轉，飲料跟著一起來～</h2>
              <button type="button" class="btn-custom btn-custom-primary-sm fw-bold">返回</button>
            </div>

            <!-- wheel-home -->
            <div class="row gx-12">
              <div class="col-6 wheel-home-btn">
                <RouterLink to="/wheel?=result" href="#">
                  <img
                    class="img-fluid"
                    src="../../assets/images/wheel-shop.png"
                    alt="隨機店家轉盤"
                  />
                </RouterLink>
              </div>
              <div class="col-6 wheel-home-btn">
                <a href="#">
                  <img
                    class="img-fluid"
                    src="../../assets/images/wheel-drink.png"
                    alt="隨機飲品轉盤"
                  />
                </a>
              </div>
            </div>

            <!-- wheel-drink -->
            <div class="row gx-8 d-none">
              <div class="col-6">
                <img
                  class="img-fluid"
                  src="../../assets/images/wheel-drink.png"
                  alt="隨機飲品轉盤"
                />
              </div>
              <div class="col-6">
                <form class="d-flex flex-column justify-content-between h-100">
                  <div>
                    <div class="d-flex align-items-center mb-6">
                      <label for="type" class="me-4 fw-medium">飲料種類</label>
                      <select
                        id="type"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
                      >
                        <option selected disabled>請選擇</option>
                        <option>隨機</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="d-flex align-items-center mb-6">
                      <label for="type" class="me-4 fw-medium">基底飲品</label>
                      <select
                        id="type"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
                      >
                        <option selected disabled>請選擇</option>
                        <option>隨機</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="d-flex align-items-center mb-6">
                      <label for="type" class="me-4 fw-medium">調和飲料</label>
                      <select
                        id="type"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
                      >
                        <option selected disabled>請選擇</option>
                        <option>隨機</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="d-flex align-items-center mb-6">
                      <label for="type" class="me-4 fw-medium">各種好料</label>
                      <select
                        id="type"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
                      >
                        <option selected disabled>請選擇</option>
                        <option>隨機</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-end">
                    <button
                      type="submit"
                      class="btn-circle bg-gray-700 text-white fs-6 fw-medium me-4 lh-sm"
                    >
                      全部<br />隨機
                    </button>
                    <button type="submit" class="btn-circle bg-accent fs-6 fw-medium">轉吧</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- wheel-result -->
          <div class="wheel-result col-5 col-3xl-6 d-none">
            <a href="#" class="wheel-result-content link-black">
              <img class="img-full" src="../../assets/images/index-recommend.png" alt="" />
              <div>
                <h5 class="wheel-result-content-title title-stroke-2 fs-3">
                  鮮柚葡萄綠
                  <span class="pt-3 pb-2 px-2 bg-white border border-gray-900 rounded-pill fs-5"
                    >五十嵐</span
                  >
                </h5>
              </div>
              <p class="wheel-result-content-info fs-4 font-handwriting fw-bold">
                M $ 50 ｜ L $ 60
              </p>
              <RateDisplay class="wheel-result-content-rate rateDisplay-lg hasHandText" />
            </a>
            <div class="wheel-result-btnGroup d-flex flex-column">
              <button
                type="button"
                class="btn-circle bg-gray-700 text-white fs-6 fw-medium mb-5 lh-sm"
              >
                重新<br />設定
              </button>
              <button type="button" class="btn-circle bg-accent fs-6 fw-medium">
                再轉<br />一次
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wheel {
  &-home-btn {
    display: inline-block;
    transition: all ease 0.5s;

    &:hover {
      transform: scale(1.02);
    }
  }

  &-result {
    position: relative;

    &-bg {
      background: linear-gradient(165deg, #fafae5 1%, #fafae5 45%, #e7fbfd 44%, #e7fbfd 1%);
    }

    &-content {
      &-title,
      &-info,
      &-rate {
        position: absolute;
      }

      &-title {
        margin: 0;
        top: -0.5em;
        left: -0.2em;
        letter-spacing: 0.5em;
        writing-mode: vertical-lr;

        span {
          letter-spacing: 0.3em;
          margin-top: -1em;
        }
      }

      &-info,
      &-rate {
        bottom: 0;
        transform: translateY(50%);
      }

      &-info {
        left: 0;
      }

      &-rate {
        right: 0;
      }

      img {
        transition: all ease 0.3s;
      }

      &:hover > img {
        transform: scale(1.01);
      }
    }

    &-btnGroup {
      position: absolute;
      right: -16px;
      bottom: -8px;
      transform: translateX(100%);
    }
  }
}
</style>
