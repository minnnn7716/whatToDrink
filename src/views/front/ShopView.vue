<script>
import 'bootstrap/js/src/modal';
import { mapState, mapActions } from 'pinia';
import shopStore from '../../stores/shopStore';
import FavoriteBtn from '../../components/FavoriteBtn.vue';
import RateDisplay from '../../components/RateDisplay.vue';
import RateGroup from '../../components/RateGroup.vue';
import CommentDisplay from '../../components/CommentDisplay.vue';

export default {
  data() {
    return {
      drinks: {},
    };
  },
  components: {
    RateDisplay,
    RateGroup,
    FavoriteBtn,
    CommentDisplay,
  },
  props: ['id'],
  watch: {
    id: 'init',
  },
  methods: {
    ...mapActions(shopStore, ['getSingleShop', 'changeType']),
    init() {
      const listHeight = this.$refs.typeList.offsetHeight + 64;
      console.log('listHeight', listHeight);
      this.$refs.menu.style.minHeight = `${listHeight}px`;

      this.changeType('全部飲品');
    },
  },
  computed: {
    ...mapState(shopStore, ['singleShop', 'selectType', 'filterCustomType', 'filterMenu', 'shopRateScore']),
  },
  created() {
    this.getSingleShop(this.id);
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
              data-bs-toggle="modal"
              data-bs-target="#shopRateModal"
            >
              <RateDisplay
                :rate="shopRateScore"
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
                        <RouterLink :to="`/drink/${item.id}`">{{ item.name }}</RouterLink>
                      </th>
                      <td width="60">
                        <div class="d-flex align-items-center">
                          <img v-if="item.rate"
                            width="20"
                            class="me-2"
                            src="@/assets/images/icon-start-full.svg"
                            alt="star"
                          />
                          <img v-else
                            width="20"
                            class="me-2"
                            src="@/assets/images/icon-start-empty.svg"
                            alt="star"
                          />

                          <p class="fs-6 font-handwriting mb-minus1">
                            {{ item.rate ? item.rate : '0' }}
                          </p>
                        </div>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-center">
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-cold.svg"
                              alt="僅限冷飲"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                          <li>
                            <img
                              class="me-2"
                              src="../../assets/images/icon-special-recommend.svg"
                              alt="店家推薦"
                            />
                          </li>
                        </ul>
                      </td>
                      <td width="120">
                        <p class="font-handwriting mb-minus1">
                          <span v-if="item.price.m">M $ {{ item.price.m }}</span>
                          <span v-if="item.price.m && item.price.l">｜</span>
                          <span v-if="item.price.l">L $ {{ item.price.l }}</span>
                          </p>
                      </td>
                      <td>
                        <FavoriteBtn class="btn-favorite-sm" />
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

    <!-- shopRateModal -->
    <div class="modal fade" id="shopRateModal">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content rounded-4">
          <div class="modal-header border-bottom-0">
            <h1 class="modal-title fs-5 invisible" id="addCommentModalLabel">店家評價</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body pt-0 pb-10">
            <div class="container-fluid">
              <RateGroup class="mb-10" />
              <div class="d-flex align-items-center justify-content-end mb-4">
                <label for="type" class="me-4 fw-medium">排序</label>
                <select
                  id="type"
                  class="form-select py-2 px-4 border-black rounded-pill"
                  style="max-width: 180px"
                >
                  <option selected value="評分最高">評分最高</option>
                  <option value="最新日期">最新日期</option>
                  <option value="最冰溫度">最冰溫度</option>
                  <option value="最少甜度">最少甜度</option>
                </select>
              </div>
              <div class="px-5">
                <div class="pb-10 mb-10 border-bottom border-gray">
                  <div class="row">
                    <div class="col-5">
                      <div class="d-flex">
                        <img
                          width="170"
                          height="170"
                          class="me-3"
                          src="../../assets/images/drinkPhoto.png"
                          alt=""
                        />
                        <div class="d-flex flex-column justify-content-between">
                          <div>
                            <p class="fs-5 fw-medium mb-2">珍珠多多綠</p>
                            <div class="d-flex align-items-center">
                              <img
                                width="20"
                                class="me-1"
                                src="../../assets/images/icon-start-full.svg"
                                alt="rate"
                              />
                              <p class="fs-6 font-handwriting fw-bold mb-minus1">4.9</p>
                            </div>
                          </div>
                          <p class="fs-6 font-handwriting lh-lg">
                            M <span class="ms-1">$ 50</span>
                            <span class="mx-2">｜</span>
                            L $ 60 <span class="ms-1">$ 50</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-7 d-flex">
                      <CommentDisplay />
                    </div>
                  </div>
                </div>
                <div class="pb-10 mb-10 border-bottom border-gray">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <div class="w-55 me-3">
                        <img class="img-full" src="../../assets/images/drinkPhoto.png" alt="" />
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <div>
                          <p class="fs-5 fw-medium mb-2">珍珠多多綠</p>
                          <div class="d-flex align-items-center">
                            <img
                              width="20"
                              class="me-1"
                              src="../../assets/images/icon-start-full.svg"
                              alt="rate"
                            />
                            <p class="fs-6 font-handwriting fw-bold mb-minus1">4.9</p>
                          </div>
                        </div>
                        <p class="fs-6 font-handwriting lh-lg">
                          M $50 <br />
                          L $60
                        </p>
                      </div>
                    </div>
                    <div class="col-8 d-flex">
                      <CommentDisplay />
                    </div>
                  </div>
                </div>
                <div class="pb-10 mb-10 border-bottom border-gray">
                  <div class="row">
                    <div class="col-4 d-flex">
                      <div class="w-55 me-3">
                        <img class="img-full" src="../../assets/images/drinkPhoto.png" alt="" />
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <div>
                          <p class="fs-5 fw-medium mb-2">珍珠多多綠</p>
                          <div class="d-flex align-items-center">
                            <img
                              width="20"
                              class="me-1"
                              src="../../assets/images/icon-start-full.svg"
                              alt="rate"
                            />
                            <p class="fs-6 font-handwriting fw-bold mb-minus1">4.9</p>
                          </div>
                        </div>
                        <p class="fs-6 font-handwriting lh-lg">
                          M $50 <br />
                          L $60
                        </p>
                      </div>
                    </div>
                    <div class="col-8 d-flex">
                      <CommentDisplay />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
