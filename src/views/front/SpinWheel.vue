<script>
import { mapState, mapActions } from 'pinia';
import shopStore from '@/stores/shopStore';
import drinkStore from '@/stores/drinkStore';
import RateDisplay from '@/components/RateDisplay.vue';

export default {
  data() {
    return {
      step: '',
      randomType: 'shop',
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
    ...mapActions(drinkStore, ['getDrinks', 'changeType', 'getWheelOption']),
    typeChange() {
      const type = this.selectType;

      if (type === '純茶') {
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

      filterDrinkData = this.drinks.filter((item) => item.type === type);

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
  },
  computed: {
    ...mapState(shopStore, ['shops']),
    ...mapState(drinkStore, ['drinks', 'typeKind', 'wheelOptionData', 'selectType']),
  },
  created() {
    this.judgePath();
    this.getShops();
    this.getDrinks();
  },
};
</script>

<template>
  <div class="wheel d-flex flex-column">
    <div
      class="flex-grow-1 d-flex align-items-center"
      :class="{ 'wheel-result-bg': step === 'result' }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-if="step === 'wheelHome' || step === 'select'"
            class="col-8 col-3xl-10"
          >
            <div class="mb-6 d-flex align-items-center justify-content-between">
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
              class="row gx-12"
            >
              <div class="col-6 wheel-home-btn">
                <a
                  href="#"
                  @click.prevent="randomFn('shop')">
                  <img
                    class="img-fluid"
                    src="@/assets/images/wheel-shop.png"
                    alt="隨機店家轉盤"
                  />
                </a>
              </div>
              <div class="col-6 wheel-home-btn">
                <a href="#">
                  <RouterLink
                    to="/wheel?=select"
                    href="#"
                    @click.prevent="randomType = 'drink'"
                  >
                    <img
                      class="img-fluid"
                      src="@/assets/images/wheel-drink.png"
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
              <div class="col-6">
                <img
                  class="img-fluid"
                  src="@/assets/images/wheel-drink.png"
                  alt="隨機飲品轉盤"
                />
              </div>
              <div class="col-6">
                <form
                  class="d-flex flex-column justify-content-between h-100"
                >
                  <div>
                    <div class="d-flex align-items-center mb-6">
                      <label for="type" class="me-4 fw-medium">
                        飲料種類
                        <span class="fs-5 text-accent-600">*</span>
                      </label>
                      <select
                        id="type"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
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
                      <label for="base" class="me-4 fw-medium">
                        基底飲品
                        <span class="fs-5 text-accent-600">*</span>
                      </label>
                      <select
                        id="base"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
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
                      <label for="mix" class="me-4 fw-medium">
                        調和飲料
                        <span class="fs-5 invisible">*</span>
                      </label>
                      <select
                        id="mix"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
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
                      <label for="material" class="me-4 fw-medium">
                        各種好料
                        <span class="fs-5 invisible">*</span>
                      </label>
                      <select
                        id="material"
                        class="form-select py-3 px-4 flex-fit border-black rounded-pill"
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
                      class="btn-circle bg-gray-700 text-white fs-6 fw-medium me-4 lh-sm"
                      @click="randomFn('drink')"
                    >
                      全部<br />隨機
                    </button>
                    <button
                      type="submit"
                      class="btn-circle bg-accent fs-6 fw-medium"
                      @click="wheelDrink()"
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
            class="wheel-result col-5 col-3xl-6"
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
                class="img-fluid transition-ease"
                :src="randomData.imageUrl"
                :alt="randomData.name"
              />
              <div>
                <h5 class="wheel-result-content-title title-stroke-2 fs-3  fw-bold">
                  {{ randomData.name }}
                  <span
                    v-if="randomType === 'drink'"
                    class="pt-3 pb-2 px-2 bg-white border border-gray-900 rounded-pill fs-normal1"
                  >
                  {{ shops[randomData.shopId - 1 ] ? shops[randomData.shopId - 1].name : '' }}
                  </span>
                </h5>
              </div>
              <p
                class="wheel-result-content-info fs-4 font-handwriting fw-bold title-stroke-2"
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
            <div class="wheel-result-btnGroup d-flex flex-column">
              <button
                v-if="!noResult"
                type="button"
                class="mb-4 btn-circle bg-accent fs-6 fw-medium"
                @click="randomFn(randomType)"
              >
                再轉<br />一次
              </button>
              <RouterLink
                to="/wheel"
                type="button"
                class="btn-circle bg-gray-700 text-white fs-6 fw-medium mb-4 lh-sm"
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
      height: 425px;

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
