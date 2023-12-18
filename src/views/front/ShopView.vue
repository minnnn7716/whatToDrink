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
      drinks: {},
    };
  },
  components: {
    RateDisplay,
    FavoriteBtn,
    ShopCommentModal,
  },
  props: ['id'],
  watch: {
    id: 'init',
  },
  methods: {
    ...mapActions(shopStore, ['getSingleShop', 'changeType']),
    ...mapActions(commentStore, ['getComments', 'sortComments']),
    init() {
      const listHeight = this.$refs.typeList.offsetHeight + 64;
      console.log('listHeight', listHeight);
      this.$refs.menu.style.minHeight = `${listHeight}px`;

      this.changeType('全部飲品');
    },
    imgUrl(item, fileName) {
      const url = new URL(`../../assets/images/${fileName}${item}.svg`, import.meta.url);
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
  computed: {
    ...mapState(shopStore, ['singleShop', 'selectType', 'filterCustomType', 'filterMenu']),
  },
  created() {
    this.getSingleShop(this.id);
    this.getComments();
  },
  mounted() {
    this.init();
    console.log('mounted');
  },
};
</script>

<template>
  <div class="shopView pb-20">
    <header
      class="shopView-header mb-20 py-4"
      :style="`background-color: ${singleShop.bgColor}`"
    >
      <img :src="singleShop.imageUrl" :alt="singleShop.name" />
      <div class="shopView-header-content container position-absolute start-50 bottom-0">
        <div class="row justify-content-center">
          <div class="col-10 col-3xl-12 d-flex justify-content-between">
            <h2 class="fs-3 fw-bold title-stroke-2">{{ singleShop.name }}</h2>
            <button
              type="button"
              class="btn border-0 p-0"
              @click="this.$refs.shopCommentModal.showModal"
            >
              <RateDisplay
                :rate="singleShop.rate"
                class="rateDisplay-md hasHandText strokeTitle mb-2" />
              <p class="text-end">
                {{ singleShop.comments ? singleShop.comments.length : 0 }} 則評論
                </p>
            </button>
          </div>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-3xl-12">
          <div class="menu px-6 py-10 border border-3 border-secondary-600 rounded-4" ref="menu">
            <div class="row gy-10 gx-10">
              <div
                :class="{
                  'col-6': selectType === '全部飲品',
                  'col-12': selectType !== '全部飲品',
                }"
                v-for="type in Object.keys(filterMenu)"
                :key="`filterMenuType ${type}`"
              >
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="fs-5 border-0">{{ type }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in filterMenu[type]"
                      :key="`filterMenuItem ${item}`"
                    >
                      <th scope="row" class="fw-normal" width="30%">
                        <RouterLink :to="`/drink/${item.id}`">
                          {{ item.name }}
                        </RouterLink>
                      </th>
                      <td width="60">
                        <div class="d-flex align-items-center">
                          <img
                            width="20"
                            class="me-2"
                            :src="imgUrl(item.rate ? 'full' : 'empty', 'icon-star-')"
                            alt="star"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">
                            {{ item.rate ? item.rate : '0' }}
                          </p>
                        </div>
                      </td>
                      <td>
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
                      </td>
                      <td width="130">
                        <p class="font-handwriting mb-minus1">
                          <span v-if="item.price.m">M $ {{ item.price.m }}</span>
                          <span v-if="item.price.m && item.price.l">｜</span>
                          <span v-if="item.price.l">L $ {{ item.price.l }}</span>
                          </p>
                      </td>
                      <td width="40" class="text-end">
                        <FavoriteBtn class="btn-favorite-sm" :id="item.id"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ul class="menu-list list-unstyled mb-0" ref="typeList">
              <li
                v-for="type in filterCustomType"
                :key="`filterCustomType ${type}`"
              >
                <button
                  type="button"
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
