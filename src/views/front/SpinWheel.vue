<script>
import { mapState, mapActions } from 'pinia';
import shopStore from '@/stores/shopStore';
import drinkStore from '@/stores/drinkStore';
import RateDisplay from '@/components/RateDisplay.vue';

export default {
  data() {
    return {
      step: '',
      firstSend: false,
      randomType: '',
      resultIndex: 0,
      selectIngredient: {
        base: false,
        mix: false,
        material: false,
      },
      randomData: {
        price: {
          m: 0,
          l: 0,
        },
      },
      filterDrinkData: {},
      noResult: false,
    };
  },
  components: {
    RateDisplay,
  },
  watch: {
    $route: 'judgePath',
    selectType() {
      this.getWheelOption();
      this.typeChange();
    },
  },
  methods: {
    ...mapActions(shopStore, ['getShops']),
    ...mapActions(drinkStore, ['getDrinks', 'changeType', 'getWheelOption', 'changeFirstSelectType']),
    typeChange() {
      const type = this.selectType;

      if (type === '請選擇') {
        this.selectIngredient = {
          base: false,
          mix: false,
          material: false,
        };
      } else if (type === '純茶') {
        this.selectIngredient = {
          base: this.selectIngredient.base || '請選擇',
          mix: false,
          material: false,
        };
      } else if (type === '奶系列' || type === '特調') {
        this.selectIngredient = {
          base: '請選擇',
          mix: '請選擇',
          material: false,
        };
      } else {
        this.selectIngredient = {
          base: '請選擇',
          mix: '請選擇',
          material: '請選擇',
        };
      }
    },
    judgePath() {
      const path = this.$route.fullPath;

      if (path.indexOf('?') === -1) {
        this.step = 'wheelHome';
        return;
      }

      const step = path.split('=')[1];
      this.step = step;
    },
    randomFn(type) {
      this.randomType = type;
      const data = [...this[`${type}s`]];

      this.$router.push('/wheel?=result');

      if (this.filterDrinkData.length && this.randomType === 'drink') {
        this.randomData = this.randomIndex(this.filterDrinkData);
        return;
      }

      this.noResult = false;
      this.randomData = this.randomIndex(data);
    },
    randomIndex(data) {
      const min = 0;
      const max = data.length;
      const index = Math.floor(Math.random() * (max - min) + min);
      return data[index];
    },
    randomUrl() {
      let path = '';

      if (this.randomType === 'shop') {
        path = `/shops/${this.randomData.code}`;
      } else if (this.randomType === 'drink') {
        path = `/drink/${this.randomData.id}`;
      }

      return path;
    },
    filterIngredient(data, key, filterItem) {
      let ary = [];

      if (!data.length) {
        ary = [];
      } else if (filterItem === 'all') {
        ary = data;
      } else if (!filterItem) {
        ary = data.filter((item) => !item.ingredient[key].length);
      } else {
        ary = data.filter((item) => item.ingredient[key].indexOf(filterItem) !== -1);
      }

      return ary;
    },
    wheelDrink() {
      const type = this.selectType;
      const select = { ...this.selectIngredient };
      const selectKeys = Object.keys(select);
      let filterDrinkData = [];

      if (type === '隨機') {
        filterDrinkData = [...this.drinks];
      } else {
        filterDrinkData = this.drinks.filter((item) => item.type === type);
      }

      for (let i = 0; i < selectKeys.length; i += 1) {
        const key = selectKeys[i];
        const loopItem = select[selectKeys[i]];
        let filterItem = loopItem;

        if (loopItem === '隨機' || loopItem === '請選擇') {
          filterItem = 'all';
        } else if (loopItem === '不添加' || !loopItem) {
          filterItem = false;
        }

        filterDrinkData = this.filterIngredient(filterDrinkData, key, filterItem);
      }

      this.filterDrinkData = filterDrinkData;

      if (filterDrinkData.length) {
        this.randomData = { ...this.randomIndex(filterDrinkData) };
        this.noResult = false;
      } else {
        this.randomData = {
          price: {
            m: 0,
            l: 0,
          },
        };
        this.noResult = true;
      }

      this.$router.push('/wheel?=result');
    },
    sendSelect() {
      this.firstSend = true;

      if (this.selectType !== '請選擇') {
        this.changeFirstSelectType(true);
      }

      if (this.selectType === '請選擇'
          || (!this.selectIngredient.base
          || this.selectIngredient.base === '請選擇'
          || this.selectIngredient.base === '')
      ) {
        return;
      }

      this.wheelDrink();
    },
    resetSelect() {
      this.changeType('請選擇');
      this.selectIngredient = {
        base: false,
        mix: false,
        material: false,
      };
      this.firstSend = false;
      this.changeFirstSelectType(false);
    },
  },
  computed: {
    ...mapState(shopStore, ['shops']),
    ...mapState(drinkStore, ['drinks', 'typeKind', 'wheelOptionData', 'selectType', 'firstSelectType']),
    isBaseTrue() {
      let boolean = true;

      if (!this.selectIngredient.base
        || this.selectIngredient.base === '請選擇'
        || this.selectIngredient.base === '') {
        boolean = false;
      }

      return boolean;
    },
  },
  created() {
    this.judgePath();
    this.getShops();
    this.getDrinks();

    if (this.$route.query[''] === 'select') {
      this.randomType = 'drink';
    }

    if (this.$route.query[''] === 'result' && this.randomType === '') {
      this.$router.push('/wheel');
    }
  },
};
</script>

<template>
  <div class="wheel d-flex flex-column">
    <div
      class="flex-grow-1 d-flex align-items-center"
      :class="{ 'wheel-result-bg': step === 'result' }"
    >
      <div class="container pb-12 py-md-0">
        <div class="row justify-content-center">
          <div
            v-if="step === 'wheelHome' || step === 'select'"
            class="col-10 col-md-12 col-lg-8 col-3xl-10"
          >
            <div class="d-none d-md-flex mb-6 d-flex align-items-center justify-content-between">
              <h2 class="title-angleStar-dark fs-4">轉轉轉，飲料跟著一起來～</h2>
              <RouterLink
                to="/wheel"
                class="btn-custom btn-custom-primary-sm fw-bold opacity-0"
                :class="{ 'opacity-100': step === 'select' }"
              >
                返回
              </RouterLink>
            </div>

            <!-- wheel-home -->
            <div
              v-if="step === 'wheelHome'"
              class="row gy-6 gy-md-0 gx-lg-12 pt-10 pt-md-0"
            >
              <div class="col-12 col-md-6 wheel-home-btn">
                <a
                  href="#"
                  @click.prevent="randomFn('shop')">
                  <img
                    class="img-fluid"
                    src="@/assets/images/wheel-shop.webp"
                    alt="隨機店家轉盤"
                  />
                </a>
              </div>
              <div class="col-12 col-md-6 wheel-home-btn">
                <a href="#">
                  <RouterLink
                    to="/wheel?=select"
                    href="#"
                    @click.prevent="randomType = 'drink'"
                  >
                    <img
                      class="img-fluid"
                      src="@/assets/images/wheel-drink.webp"
                      alt="隨機飲品轉盤"
                    />
                  </RouterLink>
                </a>
              </div>
            </div>

            <!-- wheel-drink -->
            <div
              v-if="step === 'select'"
              class="row gx-8"
            >
              <div class="col-12 col-md-6 pt-10 pt-md-0">
                <img
                  class="img-fluid d-none d-md-block"
                  src="@/assets/images/wheel-drink.webp"
                  alt="隨機飲品轉盤"
                />
                <img
                  class="img-fluid d-md-none mb-6"
                  src="@/assets/images/wheel-drink-sm.webp"
                  alt="隨機飲品轉盤"
                />
              </div>
              <div class="col-12 col-md-6">
                <form
                  id="drinkSelectForm"
                  class="d-flex flex-column justify-content-between h-100"
                  @submit.prevent="sendSelect"
                >
                  <div>
                    <div class="d-flex align-items-center mb-6">
                      <label for="type" class="me-2 me-md-4 fw-medium">
                        飲料種類
                        <span class="fs-5 text-accent-600">*</span>
                      </label>
                      <select
                        id="type"
                        class="form-select py-2 py-md-3 px-4 flex-fit rounded-pill"
                        :class="{
                          'bg-accent-100 border-2 border-accent-600': firstSend
                          && selectType === '請選擇'
                        }"
                        @change="changeType($refs.typeSelect.value)"
                        ref="typeSelect"
                      >
                        <option selected disabled>請選擇</option>
                        <option>隨機</option>
                        <option
                          v-for="item in typeKind"
                          :key="`wheelOption.type ${item}`"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </div>
                    <div
                      class="d-flex align-items-center mb-6"
                      :class="{ 'opacity-50': selectType === '請選擇' }"
                    >
                      <label for="base" class="me-2 me-md-4 fw-medium">
                        基底飲品
                        <span class="fs-5 text-accent-600">*</span>
                      </label>
                      <select
                        id="base"
                        class="form-select py-2 py-md-3 px-4 flex-fit rounded-pill"
                        :class="{
                          'bg-accent-100 border-2 border-accent-600': firstSend
                          && !isBaseTrue
                          && firstSelectType
                        }"
                        v-model="selectIngredient.base"
                        :disabled="selectType === '請選擇'"
                      >
                        <option selected disabled>請選擇</option>
                        <option>隨機</option>
                        <option
                          v-for="item in wheelOptionData.base"
                          :key="`wheelOption.base ${item}`"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </div>
                    <div
                      class="d-flex align-items-center mb-6"
                      :class="{ 'opacity-50': !selectIngredient.mix }"
                    >
                      <label for="mix" class="me-2 me-md-4 fw-medium">
                        調和飲料
                        <span class="fs-5 invisible">*</span>
                      </label>
                      <select
                        id="mix"
                        class="form-select py-2 py-md-3 px-4 flex-fit rounded-pill"
                        v-model="selectIngredient.mix"
                        :disabled="!selectIngredient.mix"
                      >
                        <option
                          selected disabled
                          v-if="selectIngredient.mix === '請選擇'"
                        >
                          請選擇
                        </option>
                        <option v-if="wheelOptionData.mix.length">隨機</option>
                        <option>不添加</option>
                        <option
                          v-for="item in wheelOptionData.mix"
                          :key="`wheelOption.mix ${item}`"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </div>
                    <div
                      class="d-flex align-items-center mb-6"
                      :class="{ 'opacity-50': !selectIngredient.material }"
                    >
                      <label for="material" class="me-2 me-md-4 fw-medium">
                        各種好料
                        <span class="fs-5 invisible">*</span>
                      </label>
                      <select
                        id="material"
                        class="form-select py-2 py-md-3 px-4 flex-fit rounded-pill"
                        v-model="selectIngredient.material"
                        :disabled="!selectIngredient.material"
                      >
                        <option
                          selected disabled
                          v-if="selectIngredient.material === '請選擇'"
                        >
                          請選擇
                        </option>
                        <option v-if="wheelOptionData.material.length">隨機</option>
                        <option>不添加</option>
                        <option
                          v-for="item in wheelOptionData.material"
                          :key="`wheelOption.material ${item}`"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      class="btn-circle bg-gray-700 text-white
                      fs-normal2 fs-md-6 fw-medium me-4 lh-sm"
                      @click="randomFn('drink')"
                    >
                      全部<br />隨機
                    </button>
                    <button
                      type="submit"
                      form="drinkSelectForm"
                      class="btn-circle bg-accent fs-normal2 fs-md-6 fw-medium"
                    >
                      轉吧
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- wheel-result -->
          <div
            v-if="step === 'result'"
            class="wheel-result col-11 col-md-8 col-lg-5 col-3xl-6 mb-20 mb-md-0"
          >
            <div v-if="noResult">
              <RouterLink
                to="/wheel?=select"
                class="wheel-result-content"
              >
                <img
                  v-if="randomType === 'drink'"
                  class="img-full"
                  src="@/assets/images/wheel-nodrink.svg"
                  alt="查無結果"
                />
              </RouterLink>
            </div>
            <div v-else>
              <RouterLink
              :to="randomUrl()"
              href="#"
              class="wheel-result-content link-black"
              :style="{'background-color': randomData.bgColor }"
            >
              <img
                v-if="randomType === 'drink'"
                class="img-full"
                :src="randomData.imageUrl"
                :alt="randomData.name"
              />
              <img
                v-else
                class="img-fluid"
                :src="randomData.imageUrl"
                :alt="randomData.name"
              />
              <div>
                <h5 class="wheel-result-content-title title-stroke-2  fs-4 fs-md-3  fw-bold">
                  {{ randomData.name }}
                  <span
                    v-if="randomType === 'drink'"
                    class="pt-3 pb-2 px-1 px-md-2 bg-white border border-gray-900
                    rounded-pill fs-normal2 fs-md-normal1"
                  >
                  {{ shops[randomData.shopId - 1 ] ? shops[randomData.shopId - 1].name : '' }}
                  </span>
                </h5>
              </div>
              <p
                class="wheel-result-content-info fs-5 fs-md-4
                font-handwriting fw-bold title-stroke-2"
                v-if="randomType === 'drink'"
              >
                <span v-if="randomData.price.m">
                  M <span class="ms-2">$ {{ randomData.price.m }}</span>
                  </span>
                <span v-if="randomData.price.m && randomData.price.l"> ｜ </span>
                <span v-if="randomData.price.l">
                  L <span class="ms-2">$ {{ randomData.price.l }}</span>
                </span>
              </p>
              <RateDisplay
                class="wheel-result-content-rate rateDisplay-lg hasHandText  title-stroke-2"
                :rate="randomData.rate"
              />
            </RouterLink>
            </div>
            <div class="wheel-result-btnGroup d-flex flex-md-column">
              <button
                v-if="!noResult"
                type="button"
                class="me-3 me-md-0 mb-md-4 btn-circle bg-accent fs-normal2 fs-md-6 fw-medium lh-sm"
                @click="randomFn(randomType)"
              >
                再轉<br />一次
              </button>
              <RouterLink
                to="/wheel"
                type="button"
                class="btn-circle bg-gray-700 text-white fs-normal2 fs-md-6 fw-medium mb-md-4 lh-sm"
                @click="resetSelect"
              >
                重新<br />選擇
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
@import '@/assets/scss/utilities/mixin';
@import '@/assets/scss/components/button';
@import '@/assets/scss/components/title';

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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 320px;

      @include media-breakpoint-up(md) {
        height: 425px;
      }

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

        span {
          letter-spacing: 0.3em;
          margin-top: -1em;
        }
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

      img {
        transition: all ease 0.3s;
      }

      &:hover > img {
        transform: scale(1.01);
      }
    }

    &-btnGroup {
      position: absolute;
      right: 16px;
      bottom: -28px;
      transform: translate(0, 100%);

      @include media-breakpoint-up(md) {
        right: -16px;
        bottom: -8px;
        transform: translate(100%, 0);
      }
    }
  }

  .form-select {
    transition: all ease .3s;
    border: 2px solid #00000060;
  }
}
</style>
