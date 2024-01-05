<script>
import { mapState, mapActions } from 'pinia';
import commentStore from '@/stores/commentStore';
import modalMixin from '@/mixins/modalMixin';
import RateGroup from './RateGroup.vue';
import CommentDisplay from './CommentDisplay.vue';
import PaginationComponent from './PaginationComponent.vue';

export default {
  data() {
    return {
      sort: '最新日期',
      data: {},
    };
  },
  components: {
    RateGroup,
    CommentDisplay,
    PaginationComponent,
  },
  props: {
    shopData: {
      type: Object,
      default() {
        return {
          comments: [],
          drinks: [],
        };
      },
    },
  },
  mixins: [modalMixin],
  watch: {
    shopData() {
      this.data = JSON.parse(JSON.stringify(this.shopData));
      this.getRateGroupInfo(this.data.comments);

      this.sortAction(1);
    },
    sort() {
      this.sortAction(1);
    },
  },
  methods: {
    ...mapActions(commentStore, ['clickPin', 'clickPage', 'getRateGroupInfo', 'sortCommentsFn']),
    filterDrink(drinkId) {
      let drink = [{
        name: '',
        imageUrl: '',
        price: {
          m: '',
          l: '',
        },
        rate: '',
      }];

      drink = this.shopData.drinks.filter((item) => item.id === drinkId);
      return drink[0];
    },
    sortAction(page) {
      const comments = [...this.shopData.comments];
      this.sortCommentsFn(comments, this.sort, page);
    },
    clickPageAction(item) {
      this.clickPage(item);
      this.sortAction(this.pagination.current);
    },
    clickPinAction(item) {
      this.clickPin(item);
      this.sortAction(1);
    },
  },
  computed: {
    ...mapState(commentStore, ['rateGroup', 'pagination', 'sortComments']),
  },
};
</script>

<template>
  <div class="modal fade" ref="modal">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content rounded-4">
      <div class="modal-header border-bottom-0 pb-0 p-md-4">
        <h1 class="modal-title fs-5 invisible" id="addCommentModalLabel">店家評價</h1>
        <button
          type="button"
          class="btn-close"
          @click="hideModal"
        ></button>
      </div>
      <div class="modal-body pt-0 ps-1 pe-1 px-lg-10 py-lg-4">
        <div class="container-fluid">
          <RateGroup
            class="mb-6 mb-lg-10"
            :data="rateGroup"
            @emit-pin="clickPinAction"
          />
          <div
            class="d-flex align-items-center justify-content-end mb-4"
            id="shopModal-comments"
          >
            <label for="type" class="me-4 fw-medium">排序</label>
            <select
              id="type"
              class="form-select py-2 px-4 border-black rounded-pill"
              style="max-width: 180px"
              v-model="sort"
            >
              <option selected value="最新日期">最新日期</option>
              <option value="評分最高">評分最高</option>
              <option value="最冰溫度">最冰溫度</option>
              <option value="最少甜度">最少甜度</option>
            </select>
          </div>
          <div class="px-lg-5">
            <div
              class="pb-10"
              :class="{ 'border-bottom border-gray mb-10': index !== sortComments.length - 1 }"
              v-for="(item, index) in sortComments"
              :key="`shopComment ${index}`"
            >
              <div class="row flex-column flex-lg-row">
                <div class="col-12 col-lg-5 mb-3 mb-lg-0">
                  <a
                    class="d-flex"
                    href="#"
                    @click.prevent="pushAndHide(`/drink/${item.drinkId}`)"
                  >
                    <img
                      class="drinkImg img-full me-3"
                      :src="filterDrink(item.drinkId).imageUrl"
                      :alt="filterDrink(item.drinkId).name"
                    />
                    <div class="d-flex flex-column justify-content-lg-between flex-grow-1">
                      <div class="d-flex flex-lg-column justify-content-between">
                        <p class="fs-6 fs-lg-5 fw-medium mb-2">
                          {{ filterDrink(item.drinkId).name }}
                        </p>
                        <div class="d-flex align-items-center flex-row-reverse flex-lg-row">
                          <img
                            width="21"
                            class="ms-1 me-lg-1"
                            src="@/assets/images/icon-star-full.svg"
                            alt="rate"
                          />
                          <p
                            class="fs-6 font-handwriting fw-bold mb-minus1 lh-1">
                            {{ filterDrink(item.drinkId).rate }}
                          </p>
                        </div>
                      </div>
                      <p class="fs-normal1 fs-lg-6 font-handwriting lh-1">
                        M
                        <span class="ms-1">
                          $ {{ filterDrink(item.drinkId).price.m }}
                        </span>
                        <span class="mx-1">｜</span>
                        L <span class="ms-1">
                          $ {{ filterDrink(item.drinkId).price.l }}
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-12 col-lg-7 d-flex">
                  <CommentDisplay :commentData="item"/>
                </div>
              </div>
            </div>
            <PaginationComponent
              v-if="pagination.total > 1"
              :pagination="pagination"
              @emit-page="clickPageAction"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';

.drinkImg {
  width: 65px;
  height: 65px;

  @include media-breakpoint-up(lg) {
    width: 170px;
    height: 170px;
  }
}
</style>
