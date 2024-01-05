<script>
import { mapState, mapActions } from 'pinia';
import drinkStore from '@/stores/drinkStore';
import commentStore from '@/stores/commentStore';
import CommentDisplay from '@/components/CommentDisplay.vue';
import RateDisplay from '@/components/RateDisplay.vue';
import SearchBar from '@/components/SearchBar.vue';
import SwitchBtnGroup from '@/components/SwitchBtnGroup.vue';

export default {
  data() {
    return {
      searchType: '',
      recommendSelect: 1,
    };
  },
  components: {
    CommentDisplay,
    RateDisplay,
    SearchBar,
    SwitchBtnGroup,
  },
  methods: {
    ...mapActions(drinkStore, ['getDrinksShopComment']),
    ...mapActions(commentStore, ['getComments']),
    translateNum(num) {
      if (num < 10) {
        return `0${num}`;
      }

      return num;
    },
  },
  computed: {
    ...mapState(drinkStore, ['recommendDrinks']),
    recommendItem() {
      return this.recommendDrinks[this.recommendSelect - 1];
    },
  },
  created() {
    this.getDrinksShopComment();
    this.getComments();
  },
};
</script>

<template>
  <div class="index">
    <header class="index-header d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 mx-auto d-flex flex-column align-items-center pt-15 pt-md-0">
            <h2 class="index-header-title-container mb-6 text-accent">
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
            <h3 class="d-flex fs-6 fs-md-4 fw-bold mb-12">
              <p
                class="index-header-subtitle me-minus4 bg-primary rounded-pill"
              >
                給我一個支點
              </p>
              <p class="index-header-subtitle bg-secondary rounded-pill">
                給你一杯飲料
              </p>
            </h3>
            <div class="index-header-searchContainer d-flex flex-column flex-md-row">
              <SwitchBtnGroup
                class="switchBtnGroup-light switchBtnGroup-text me-0 mb-3 me-md-4 mb-md-0"
                @emit-btn="(i) => searchType = i"
              >
                <template v-slot:start>
                  <span data-name="drinks">飲料</span>
                </template>
                <template v-slot:end>
                  <span data-name="shops">店家</span>
                </template>
              </SwitchBtnGroup>
              <SearchBar :searchType="searchType" />
            </div>
          </div>
        </div>
      </div>
      <!-- <img
      class="position-absolute start-0 bottom-0"
      src="@/assets/images/index-bannerDeco-start.svg"
    />
    <img class="position-absolute top-0 end-0"
    src="@/assets/images/index-bannerDeco-end.svg" /> -->
    </header>
    <section class="py-18 py-md-25 position-relative">
      <div class="position-absolute top-0 translate-middle-y py-8" id="index-type"></div>
      <div class="container">
        <div class="row flex-column flex-md-row align-items-center justify-content-center">
          <div class="col-12 col-md-3 mb-8 mb-md-0">
            <h4 class="title-angleStar fs-5 fs-md-4 fw-bold mb-4">還是沒有想法嗎？</h4>
            <p class="title-angleStar-content fs-6 fs-md-5">
              通通給你，<br />
              慢慢挑～慢慢選～<br />
            </p>
          </div>
          <ul class="col-12 col-md-7 col-3xl-9 d-flex flex-wrap flex-md-nowrap
          row list-unstyled mb-0">
            <li class="col-6 col-md-3 btn-roundImgAndText px-4 px-md-0 mb-6 me-0 me-md-10">
              <RouterLink to="/shops">
                <img
                  class="mb-2 mb-md-5"
                  src="@/assets/images/index-kind-all.webp" alt="全部店面"
                />
                <p class="fs-5 fw-medium text-black">全部店面</p>
              </RouterLink>
            </li>
            <li class="col-6 col-md-3 btn-roundImgAndText px-4 px-md-0 mb-6 me-0 me-md-10">
              <RouterLink to="/search?type=drinks&keyword=純茶">
                <img
                  class="mb-2 mb-md-5"
                  src="@/assets/images/index-kind-tea.webp" alt="純茶飲料"
                />

                <p class="fs-5 fw-medium text-black">純茶飲料</p>
              </RouterLink>
            </li>
            <li class="col-6 col-md-3 btn-roundImgAndText px-4 px-md-0 me-0 me-md-10">
              <RouterLink to="/search?type=drinks&keyword=特調">
                <img
                  class="mb-2 mb-md-5"
                  src="@/assets/images/index-kind-special.webp" alt="特調飲料"
                />
                <p class="fs-5 fw-medium text-black">特調飲料</p>
              </RouterLink>
            </li>
            <li class="col-6 col-md-3 btn-roundImgAndText px-4 px-md-0">
              <RouterLink to="/search?type=drinks&keyword=奶系列">
                <img
                  class="mb-2 mb-md-5"
                  src="@/assets/images/index-kind-milktea.webp" alt="奶奶飲料"
                />
                <p class="fs-5 fw-medium text-black">奶奶飲料</p>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="index-wheel py-10 py-md-18">
      <div class="index-wheel-container">
        <div class="index-wheel-text text-center text-white lh-base">
          <h4 class="mb-8 fs-4 fs-md-3 fw-bold lh-base">
            阿姨，我不想努力了...<br />沒關係！
          </h4>
          <p class="mb-8 fs-6 fs-md-5">
            轉盤啊～轉盤～<br />
            世界上最適合我的飲料是哪一杯？
          </p>
          <RouterLink
            to="/wheel"
            class="btn-custom btn-custom-primary fs-6 fs-md-4 fs-xxl-5 fw-bold"
          >
            請賜與我飲料
          </RouterLink>
        </div>
        <img
          class="index-wheel-img-person d-none d-md-inline-block"
          src="@/assets/images/index-wheel-person.svg"
        />
        <img
          class="index-wheel-img-drink d-none d-md-inline-block"
          src="@/assets/images/index-wheel-drink.svg"
        />
        <img
          class="index-wheel-img-wheel d-none d-md-inline-block"
          src="@/assets/images/index-wheel-wheel.svg"
        />
        <img
          class="index-wheel-img-drink-sm d-md-none"
          src="@/assets/images/index-wheel-drink-sm.svg"
        />
        <img
          class="index-wheel-img-wheel-sm d-md-none"
          src="@/assets/images/index-wheel-wheel-sm.svg"
        />
      </div>
    </section>
    <section class="pt-10 pb-20 py-md-25">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-10 col-3xl-12 mx-auto">
            <div class="d-flex align-items-center justify-content-between mb-3 mb-md-10">
              <h4
                class="title-angleStar title-angleStar-sm-noImg fs-5 fs-md-4 fw-bold me-5"
              >
                好評飲品推推
              </h4>
              <div class="d-none d-md-flex flex-grow-1 d-flex align-items-center">
                <p class="font-handwriting fs-5 fs-md-4 fw-bold me-5">
                  {{ translateNum(recommendSelect) }}｜{{ translateNum(recommendDrinks.length) }}
                </p>
                <ul class="list-unstyled mb-0 d-flex align-items-center">
                  <li
                    v-for="item in recommendDrinks.length"
                    :key="`recommend ${item}`"
                  >
                    <button
                      type="button"
                      class="btn-carouselDot"
                      :class="{
                        'active': item === recommendSelect,
                        'me-2': item !== recommendDrinks.length
                      }"
                      @click="recommendSelect = item"
                    />
                  </li>
                </ul>
                <div class="divider flex-grow-1 mx-3"></div>
              </div>
              <ul class="list-unstyled mb-0 d-flex align-items-center">
                <li class="me-6">
                  <button
                    type="button"
                    class="btn-arrow"
                    :class="{ 'disabled': recommendSelect === 1 }"
                    @click="recommendSelect -= 1"
                  >
                    <img src="@/assets/images/icon-arrow-start.svg" alt="上一則" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="btn-arrow"
                    :class="{ 'disabled': recommendSelect === recommendDrinks.length }"
                    @click="recommendSelect += 1"
                  >
                    <img src="@/assets/images/icon-arrow-end.svg" alt="下一則" />
                  </button>
                </li>
              </ul>
            </div>
            <div class="d-flex flex-row-reverse d-md-none align-items-center px-2 mb-6">
              <p class="font-handwriting fs-4 fw-bold me-1">
                {{ translateNum(recommendSelect) }}｜{{ translateNum(recommendDrinks.length) }}
              </p>
              <div class="divider flex-grow-1 mx-3"></div>
              <ul class="list-unstyled mb-0 d-flex align-items-center">
                <li
                  v-for="item in recommendDrinks.length"
                  :key="`recommend ${item}`"
                >
                  <button
                    type="button"
                    class="btn-carouselDot"
                    :class="{
                      'active': item === recommendSelect,
                      'me-2': item !== recommendDrinks.length
                    }"
                    @click="recommendSelect = item"
                  />
                </li>
              </ul>
            </div>
            <div class="row index-comment ps-5 pe-2 px-md-0">
              <div class="col-12 col-md-6 index-comment-start">
                  <RouterLink :to="`/drink/${recommendItem.id}`">
                    <img
                      class="img-full"
                      :src="recommendItem.imageUrl"
                      :alt="recommendItem.name" />
                  </RouterLink>
                  <div>
                    <h5 class="index-comment-start-title title-stroke-2
                    fs-4 fs-md-3 fw-bold lh-base">
                      <RouterLink :to="`/drink/${recommendItem.id}`">
                        {{ recommendItem.name }}
                      </RouterLink>
                      <RouterLink
                        :to="`/shops/${recommendItem.shop.code}`"
                        class="index-comment-start-tag pt-3 pb-2 px-1 px-md-2
                        bg-white border border-gray-900 rounded-pill fs-normal2 fs-md-6"
                      >
                        {{ recommendItem.shop.name }}
                      </RouterLink>
                    </h5>
                  </div>
                  <p class="index-comment-start-info fs-5 fs-md-4
                  title-stroke-2 font-handwriting fw-bold">
                    <span v-if="recommendItem.price.m">
                      M <span class="ms-2">$ {{ recommendItem.price.m }}</span>
                      </span>
                    <span v-if="recommendItem.price.m && recommendItem.price.l"> ｜ </span>
                    <span v-if="recommendItem.price.l">
                      L <span class="ms-2">$ {{ recommendItem.price.l }}</span>
                    </span>
                  </p>
                  <RouterLink :to="{ path:`/drink/${recommendItem.id}`, hash: '#drink-comments' }">
                    <RateDisplay
                      class="index-comment-start-rate rateDisplay-lg hasHandText title-stroke-2"
                      :rate="recommendItem.rate"
                    />
                  </RouterLink>
              </div>
              <div class="d-none d-md-block col-6 overflow-auto">
                <CommentDisplay
                  class="mb-12 h-auto"
                  v-for="item in recommendItem.comments"
                  :key="`index-comment ${item.id}`"
                  :commentData="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
.index-header {
  min-height: calc(100vh);
  background: center / cover no-repeat url('@/assets/images/index-banner.webp');

  &-title,
  &-title-container {
    position: relative;
  }

  &-title-container {
    width: 100%;
    text-align: center;
  }

  &-title {
    font-size: 26px;
    display: inline-block;
    padding: 0.25em 0.4em 0.3em 0.4em;
    margin-right: -0.3em;
    border-radius: 50%;
    font-weight: 800;
    background-color: #fff;

    @include media-breakpoint-up(md) {
      font-size: $h2-font-size;
    }

    &-upper {
      position: absolute;
      width: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    &-lower .index-header-title {
      box-shadow: 0 0 0 0.15em $accent;
    }
  }

  &-subtitle {
    border: 2px solid $gray-900;
    padding: 8px 20px;

    @include media-breakpoint-up(md) {
      border: 3px solid $gray-900;
      padding: 8px 24px;
    }
  }

  &-searchContainer {
    width: 80%;

    @include media-breakpoint-up(md) {
      width: 90%;
    }
  }
}

.index-wheel {
  overflow: hidden;

  &-container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4.5vw 0;
    background-color: #6d6fc9;

    @include media-breakpoint-up(md) {
      height: fit-content;
    }

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
    &-drink-sm,
    &-wheel,
    &-wheel-sm {
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

    &-drink-sm {
      width: 100%;
      top: 0;
      transform: translateY(-15%);
    }

    &-wheel {
      width: 28vw;
      right: 0;
      top: 0;
      transform: translate(28%, -10%);
    }

    &-wheel-sm {
      width: 100%;
      bottom: 0;
      transform: translateY(5%);
    }
  }
}

.divider {
  height: 1px;
  border-top: 1px dashed #000;
}

.index-comment {
  > div {
    height: 350px;

    @include media-breakpoint-up(md) {
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
      top: -0.3em;
      left: -0.1em;
      letter-spacing: 0.5em;
      writing-mode: vertical-lr;

      @include media-breakpoint-up(md) {
        top: -0.5em;
        left: -0.2em;
      }
    }

    &-tag {
      letter-spacing: 0.3em;
    }

    &-info,
    &-rate {
      bottom: 0;
      transform: translateY(60%);
    }

    &-info {
      right: 8px;
      transform: translateY(-65%);

      @include media-breakpoint-up(md) {
        right: unset;
        left: 0;
        transform: translateY(60%);
      }
    }

    &-rate {
      right: 8px;
    }
  }
}
</style>
