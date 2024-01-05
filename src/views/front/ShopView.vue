<script>
import 'bootstrap/js/src/modal';
import { mapState, mapActions } from 'pinia';
import shopStore from '@/stores/shopStore';
import commentStore from '@/stores/commentStore';
import FavoriteBtn from '@/components/FavoriteBtn.vue';
import RateDisplay from '@/components/RateDisplay.vue';
import ShopCommentModal from '@/components/ShopCommentModal.vue';

export default {
  data() {
    return {
      resizeObj: {},
    };
  },
  components: {
    RateDisplay,
    FavoriteBtn,
    ShopCommentModal,
  },
  props: ['id'],
  watch: {
    $route() {
      this.resizeObj.unobserve(this.$refs.typeList);
    },
  },
  methods: {
    ...mapActions(shopStore, ['getSingleShop', 'changeType']),
    ...mapActions(commentStore, ['getComments', 'sortComments']),
    imgUrl(item, fileName) {
      const url = new URL(`../../assets/images/${fileName}${item}.svg`, import.meta.url);
      return url;
    },
    judgeSpecialImg(str) {
      const obj = {
        店家推薦: 'recommend',
        僅限冷飲: 'cold',
        僅限熱飲: 'hot',
        無咖啡因: 'noCaffeine',
        固定糖冰: 'fixed',
        固定微冰: 'fixed',
        固定三分糖: 'fixed',
        固定少冰: 'fixed',
        固定無糖: 'fixed',
        期間限定: 'limited',
        季節限定: 'limited',
      };

      return this.imgUrl(obj[str], 'icon-special-');
    },
  },
  computed: {
    ...mapState(shopStore, ['singleShop', 'selectType', 'filterCustomType', 'filterMenu']),
  },
  created() {
    this.getSingleShop(this.id);
    this.getComments();
  },
  mounted() {
    this.resizeObj = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      const { height } = rect;
      this.$refs.menu.style.minHeight = `${height + 64}px`;
    });

    this.resizeObj.observe(this.$refs.typeList);
  },
};
</script>

<template>
  <div class="shopView pb-20">
    <header
      class="shopView-header mb-15 mb-lg-20 py-4"
      :style="`background-color: ${singleShop.bgColor}`"
    >
      <img :src="singleShop.imageUrl" :alt="singleShop.name" />
      <div class="shopView-header-content container position-absolute start-50 bottom-0">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-3xl-12
          d-flex justify-content-between">
            <h2 class="fs-5 fs-lg-3 fw-bold title-stroke-2 mb-2 mb-lg-0">{{ singleShop.name }}</h2>
            <button
              type="button"
              class="btn border-0 p-0"
              @click="this.$refs.shopCommentModal.showModal"
            >
              <RateDisplay
                :rate="singleShop.rate"
                class="rateDisplay-lg hasHandText strokeTitle mb-1 mb-lg-2 justify-content-end" />
              <p class="text-end fs-normal2 fs-lg-normal1">
                {{ singleShop.comments ? singleShop.comments.length : 0 }} 則評論
                </p>
            </button>
          </div>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-3xl-12">
          <div class="menu px-2 px-md-6 py-4 py-lg-10
          border border-3 border-secondary-600 rounded-4" ref="menu"  id="menu">
            <div class="row gy-6 gy-lg-10 gx-10">
              <div
                :class="{
                  'col-12 col-lg-6': selectType === '全部飲品',
                  'col-12': selectType !== '全部飲品',
                }"
                v-for="type in Object.keys(filterMenu)"
                :key="`filterMenuType ${type}`"
              >
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th
                        scope="col" colspan="4"
                        class="fs-6 fs-md-5 border-0 p-1 p-md-2">
                        {{ type }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in filterMenu[type]"
                      :key="`filterMenuItem ${item}`"
                    >
                      <th scope="row" class="tableTitle fw-normal px-1 px-md-2">
                        <RouterLink :to="`/drink/${item.id}`">
                          {{ item.name }}
                        </RouterLink>
                      </th>
                      <td class="menu-rate">
                        <div class="d-flex align-items-center">
                          <img
                            class="menu-starImg me-1 me-md-2"
                            :src="imgUrl(item.rate ? 'full' : 'empty', 'icon-star-')"
                            alt="star"
                          />

                          <p class="fs-normal1 fs-md-6 font-handwriting mb-minus1">
                            {{ item.rate ? item.rate : '0' }}
                          </p>
                        </div>
                      </td>
                      <td class="menu-special d-none d-md-table-cell">
                        <ul class="list-unstyled mb-0 d-flex">
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
                      </td>
                      <td class="menu-price">
                        <p class="font-handwriting mb-minus1 fs-normal2 fs-md-normal1">
                          <span v-if="item.price.m">M $ {{ item.price.m }}</span>
                          <span v-if="item.price.m && item.price.l">｜</span>
                          <span v-if="item.price.l">L $ {{ item.price.l }}</span>
                          </p>
                      </td>
                      <td class="menu-favorite text-end">
                        <FavoriteBtn class="btn-favorite-sm" :id="item.id"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ul class="menu-list list-unstyled mb-0 d-none d-md-block" ref="typeList">
              <li
                v-for="type in filterCustomType"
                :key="`filterCustomType ${type}`"
              >
                <button
                  class="menu-btn"
                  :class="{ 'active': selectType === type }"
                  @click="changeType(type)"
                >
                  <span>{{ type }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ShopCommentModal
      ref="shopCommentModal"
      :shopData="singleShop"
    />
  </div>
</template>

<style lang="scss" scoped>
.shopView {
  &-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
    }

    &-content {
      transform: translate(-50%, 80%);
    }
  }
}
</style>
