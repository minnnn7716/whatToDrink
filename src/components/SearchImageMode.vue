<script>
import RateDisplay from './RateDisplay.vue';

export default {
  data() {
    return {
      imageModeData: [
        {
          id: 0,
          shopId: 0,
          name: '',
          imageUrl: '',
          price: {
            m: 0,
            l: 0,
          },
          special: [],
          caffeine: '',
          rate: '0.0',
          shop: {
            name: '',
            code: '',
          },
        },
      ],
    };
  },
  components: {
    RateDisplay,
  },
  props: {
    propsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    propsData: {
      handler() {
        this.imageModeData = this.propsData;
        console.log('資料變更');
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    imgUrl(item, fileName) {
      const url = new URL(`../assets/images/${fileName}${item}.svg`, import.meta.url);
      return url;
    },
    judgeSpecialImg(str) {
      const obj = {
        僅限冷飲: 'cold',
        店家推薦: 'recommend',
        無咖啡因: 'noCaffeine',
        僅限熱飲: 'hot',
        固定糖冰: 'fixed',
      };

      return this.imgUrl(obj[str], 'icon-special-');
    },
  },
};
</script>

<template>
  <ul class="row row-cols-3 gx-12 gy-15 list-unstyled">
    <li
      class="searchImage-item"
      v-for="item in imageModeData"
      :key="`imageMode ${item.id}`"
    >
      <RouterLink :to="`/drink/${item.id}`" >
        <div class="searchImage-item-imgSection mb-3">
          <div class="searchImage-item-imgContainer">
            <img
              class="searchImage-item-img img-full"
              :src="item.imageUrl"
              :alt="item.name"
            />
          </div>
          <RouterLink :to="`/shops/${item.shop.code}`" class="searchImage-item-tagContainer">
            <span class="searchImage-item-tag">{{ item.shop.name }}</span>
          </RouterLink>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h2 class="fs-4 fw-bold">{{ item.name }}</h2>
          <RateDisplay class="rateDisplay-sm hasHandText" :rate="item.rate" />
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <ul class="list-unstyled mb-0 d-flex justify-content-center">
                <li
                  v-for="(special, index) in item.special"
                  :key="`${item.id} ${special}`"
                >
                  <img
                    :class="{ 'me-2': index != item.special.length}"
                    :src="judgeSpecialImg(special)"
                    :alt="special"
                  />
                </li>
              </ul>
          <p class="font-handwriting fs-6 fs-3xl-5 fs-5 fw-bold">
            <span v-if="item.price.m">
              M <span class="ms-2">$ {{ item.price.m }}</span>
              </span>
            <span v-if="item.price.m && item.price.l"> ｜ </span>
            <span v-if="item.price.l">
              L <span class="ms-2">$ {{ item.price.l }}</span>
            </span>
          </p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
.searchImage {
  &-item {
    &-imgSection {
      position: relative;
    }

    &-imgContainer {
      overflow: hidden;
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

    &-img,
    &-tag {
      transition: all ease .3s;
    }

    &:hover .searchImage-item-img {
      transform: scale(1.05);
    }

    &-tagContainer:hover .searchImage-item-tag {
      background-color: $primary-300;
      color: #000;
      font-weight: 500;
    }

  }
}
</style>
