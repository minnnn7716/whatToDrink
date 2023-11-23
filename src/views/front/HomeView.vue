<script>
import CommentDisplay from '../../components/CommentDisplay.vue'
import RateDisplay from '../../components/RateDisplay.vue'
import SearchBar from '../../components/SearchBar.vue'
import SwitchButtonGroup from '../../components/SwitchButtonGroup.vue'

export default {
  components: {
    CommentDisplay,
    RateDisplay,
    SearchBar,
    SwitchButtonGroup
  }
}
</script>

<template>
  <div class="index">
    <header class="index-header d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-8 mx-auto d-flex flex-column align-items-center">
            <h2 class="index-header-title-container mb-6 fs-2 text-accent">
              <div class="index-header-title-upper">
                <span class="index-header-title">今</span>
                <span class="index-header-title">天</span>
                <span class="index-header-title">你</span>
                <span class="index-header-title">要</span>
                <span class="index-header-title">喝</span>
                <span class="index-header-title">什</span>
                <span class="index-header-title">麼</span>
                <span class="index-header-title">？</span>
              </div>
              <div class="index-header-title-lower">
                <span class="index-header-title">今</span>
                <span class="index-header-title">天</span>
                <span class="index-header-title">你</span>
                <span class="index-header-title">要</span>
                <span class="index-header-title">喝</span>
                <span class="index-header-title">什</span>
                <span class="index-header-title">麼</span>
                <span class="index-header-title">？</span>
              </div>
            </h2>
            <h3 class="d-flex fs-4 fw-bold mb-12">
              <p
                class="py-2 px-6 me-minus4 bg-primary rounded-pill border border-3 border-gray-900"
              >
                給我一個支點
              </p>
              <p class="py-2 px-6 bg-secondary rounded-pill border border-3 border-gray-900">
                給你一杯飲料
              </p>
            </h3>
            <div class="d-flex w-100">
              <SwitchButtonGroup class="me-4">
                <template v-slot:start>飲料</template>
                <template v-slot:end>店家</template>
              </SwitchButtonGroup>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <!-- <img
      class="position-absolute start-0 bottom-0"
      src="../../assets/images/index-bannerDeco-start.svg"
    />
    <img class="position-absolute top-0 end-0" src="../../assets/images/index-bannerDeco-end.svg" /> -->
    </header>
    <section class="py-25" id="index-type">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-3">
            <h4 class="title-angleStar fs-4 fw-bold mb-4">還是沒有想法嗎？</h4>
            <p class="title-angleStar-content fs-5">
              通通給你，<br />
              慢慢挑～慢慢選～<br />
            </p>
          </div>
          <ul class="col-7 col-3xl-9 d-flex list-unstyled mb-0">
            <li class="btn-roundImgAndText me-10">
              <a href="#">
                <img class="mb-5" src="../../assets/images/index-kind-all.png" alt="全部店面" />
                <p class="fs-5 fw-medium text-black">全部店面</p>
              </a>
            </li>
            <li class="btn-roundImgAndText me-10">
              <a href="#">
                <img class="mb-5" src="../../assets/images/index-kind-tea.png" alt="純茶飲料" />

                <p class="fs-5 fw-medium text-black">純茶飲料</p>
              </a>
            </li>
            <li class="btn-roundImgAndText me-10">
              <a href="#">
                <img class="mb-5" src="../../assets/images/index-kind-special.png" alt="特調飲料" />
                <p class="fs-5 fw-medium text-black">特調飲料</p>
              </a>
            </li>
            <li class="btn-roundImgAndText">
              <a href="#" class="text">
                <img class="mb-5" src="../../assets/images/index-kind-milktea.png" alt="奶奶飲料" />
                <p class="fs-5 fw-medium text-black">奶奶飲料</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="index-wheel">
      <div class="index-wheel-container">
        <div class="index-wheel-text text-center text-white lh-base">
          <h4 class="mb-8 fs-3 fw-bold lh-base">阿姨，我不想努力了...<br />沒關係！</h4>
          <p class="mb-8 fs-5">
            轉盤啊～轉盤～<br />
            世界上最適合我的飲料是哪一杯？
          </p>
          <a class="btn-custom btn-custom-primary fs-4 fs-xxl-5 fw-bold">請賜與我飲料</a>
        </div>
        <img class="index-wheel-img-person" src="../../assets/images/index-wheel-person.svg" />
        <img class="index-wheel-img-drink" src="../../assets/images/index-wheel-drink.svg" />
        <img class="index-wheel-img-wheel" src="../../assets/images/index-wheel-wheel.svg" />
      </div>
    </section>
    <section class="py-25">
      <div class="container">
        <div class="row">
          <div class="col-10 col-3xl-12 mx-auto">
            <div class="d-flex align-items-center mb-10">
              <h4 class="title-angleStar fs-4 fw-bold me-5">好評飲品推推</h4>
              <p class="font-handwriting fs-4 fw-bold me-5">03｜05</p>
              <ul class="list-unstyled mb-0 d-flex align-items-center">
                <li><a class="btn-carouselDot me-2" href="#"></a></li>
                <li><a class="btn-carouselDot me-2" href="#"></a></li>
                <li><a class="btn-carouselDot active me-2" href="#"></a></li>
                <li><a class="btn-carouselDot me-2" href="#"></a></li>
                <li><a class="btn-carouselDot" href="#"></a></li>
              </ul>
              <div class="divider flex-grow-1 mx-3"></div>
              <ul class="list-unstyled mb-0 d-flex align-items-center">
                <li class="me-6">
                  <a class="btn-arrow">
                    <img src="../../assets/images/icon-arrow-start.svg" alt="上一則" />
                  </a>
                </li>
                <li>
                  <a class="btn-arrow">
                    <img src="../../assets/images/icon-arrow-end.svg" alt="下一則" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="row index-comment">
              <div class="col-6 index-comment-start">
                <img class="img-full" src="../../assets/images/index-recommend.png" alt="" />
                <div>
                  <h5 class="index-comment-start-title fs-3">
                    鮮柚葡萄綠
                    <span class="pt-3 pb-2 px-2 bg-white border border-gray-900 rounded-pill fs-5"
                      >五十嵐</span
                    >
                  </h5>
                </div>
                <p class="index-comment-start-info fs-4 font-handwriting fw-bold">
                  M $ 50 ｜ L $ 60
                </p>
                <RateDisplay class="index-comment-start-rate rateDisplay-lg hasText" />
              </div>
              <div class="col-6 overflow-auto">
                <CommentDisplay class="mb-12" />
                <CommentDisplay class="mb-12" />
                <CommentDisplay class="mb-12" />
                <CommentDisplay class="mb-12" />
                <CommentDisplay class="mb-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/vendors/bootstrap';
.index-header {
  min-height: calc(100vh);
  background: center / cover no-repeat url('../../assets/images/index-banner.png');

  &-title,
  &-title-container {
    position: relative;
  }

  &-title {
    display: inline-block;
    padding: 0.25em 0.4em 0.3em 0.4em;
    margin-right: -0.3em;
    border-radius: 50%;
    font-weight: 700;
    border-radius: 50%;
    background-color: #fff;

    &-upper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &-lower .index-header-title {
      box-shadow: 0 0 0 5px $accent;
    }
  }
}

.index-wheel {
  overflow: hidden;
  padding: 72px 0;

  &-container {
    position: relative;
    padding: 4.5vw 0;
    background-color: #6d6fc9;

    @include media-breakpoint-up(3xl) {
      padding: 6.2vw 0;
    }
  }

  &-text {
    position: relative;
    z-index: 5;
  }

  &-img {
    &-person,
    &-drink,
    &-wheel {
      position: absolute;
    }

    &-person {
      width: 35vw;
      left: 0;
      bottom: 0;
      transform: translateY(3%);
    }

    &-drink {
      width: 55vw;
      right: 0;
      top: 50%;
      transform: translate(-20%, -58%);
      z-index: 1;

      @include media-breakpoint-up(3xl) {
        transform: translate(-20%, -54%);
      }
    }

    &-wheel {
      width: 28vw;
      right: 0;
      top: 0;
      transform: translate(28%, -10%);
    }
  }
}

.divider {
  height: 1px;
  border-top: 1px dashed #000;
}

.index-comment {
  > div {
    height: 450px;

    @include media-breakpoint-up(3xl) {
      height: 500px;
    }
  }

  &-start {
    position: relative;

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
      text-shadow:
        -2px -2px 0 white,
        0 -2px 0 white,
        2px -2px 0 white,
        2px 0 0 white,
        2px 2px 0 white,
        0 2px 0 white,
        -2px 2px 0 white,
        -2px 0 0 white;
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
  }
}
</style>
