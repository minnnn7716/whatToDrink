<script>
import 'bootstrap/js/src/modal';
import { mapState, mapActions } from 'pinia';
import drinkStore from '@/stores/drinkStore';
import commentStore from '@/stores/commentStore';
import FavoriteBtn from '@/components/FavoriteBtn.vue';
import RateDisplay from '@/components/RateDisplay.vue';
import RateGroup from '@/components/RateGroup.vue';
import CommentDisplay from '@/components/CommentDisplay.vue';
import AddCommentModal from '@/components/AddCommentModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      sort: '最新日期',
    };
  },
  components: {
    RateDisplay,
    FavoriteBtn,
    RateGroup,
    CommentDisplay,
    AddCommentModal,
    PaginationComponent,
  },
  props: ['id'],
  methods: {
    ...mapActions(drinkStore, ['getSingleDrink', 'joinIngredient']),
    ...mapActions(commentStore, ['getComments', 'clickPin', 'filterUserComment', 'sortFn', 'sortSpecifyFn', 'slicePage', 'clickPage']),
    clickAction(action) {
      this.clickPage(action);
      this.$router.push(`${this.$route.path}#drink-comments`);
    },
  },
  computed: {
    ...mapState(drinkStore, ['singleDrink', 'rateGroup']),
    ...mapState(commentStore, ['comments', 'pinRate', 'pagination']),
    sortComments() {
      const comments = [...this.singleDrink.comments];
      let sortAry = [];
      let filterAry = [];
      let sliceAry = [];

      if (this.pinRate) {
        filterAry = comments.filter((item) => +item.rate === this.pinRate);
      } else {
        filterAry = comments;
      }

      if (this.sort === '最新日期') {
        sortAry = this.sortFn(filterAry, 'down', 'date');
      }

      if (this.sort === '評分最高') {
        sortAry = this.sortFn(filterAry, 'down', 'rate');
      }

      if (this.sort === '最冰溫度') {
        const iceAry = ['多冰', '少冰', '半冰', '微冰', '去冰', '完全去冰', '溫', '熱', '不記得'];

        sortAry = this.sortSpecifyFn(filterAry, iceAry, 'ice');
      }

      if (this.sort === '最少甜度') {
        const sugarAry = ['無糖', '1 分糖', '微糖', '半糖', '少糖', '全糖', '多糖', '不記得'];

        sortAry = this.sortSpecifyFn(filterAry, sugarAry, 'sugar');
      }

      sliceAry = this.slicePage(sortAry, this.pagination.current);

      return sliceAry;
    },
  },
  created() {
    this.getSingleDrink(this.id);
    this.getComments();
  },
};
</script>
<template>
  <div class="container pt-15 pb-25">
    <div class="row justify-content-center">
      <div class="col-9 col-3xl-10">
        <section class="row mb-15">
          <div class="col-4">
            <img
              class="img-full"
              :src="singleDrink.imageUrl"
              :alt="singleDrink.name" />
          </div>
          <div class="col-8 d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between mb-8">
              <div>
                <h3
                  class="py-2 px-5 mb-3 d-inline-block fs-normal1 fw-normal
                  border border-gray-900 rounded-pill"
                >
                  <RouterLink
                    :to="`/shops/${singleDrink.shop.code}`">
                    {{ singleDrink.shop.name }}
                  </RouterLink>
                </h3>
                <h2 class="fs-3 mb-6">{{ singleDrink.name }}</h2>
                <ul class="list-unstyled d-flex mb-5">
                  <li class="pe-6 border-end border-black">
                    <p class="mb-2 fs-6 fw-medium">
                      M <span class="ms-4">$ {{ singleDrink.price.m }}</span>
                    </p>
                    <small class="d-block text-gray-700 mb-1">
                      {{ singleDrink.shop.size.m }}
                    </small>
                    <small class="d-block text-gray-700">
                      {{ singleDrink.calorie.m }} 大卡
                    </small>
                  </li>
                  <li class="ps-6">
                    <p class="mb-2 fs-6 fw-medium">
                      L <span class="ms-4">$ {{ singleDrink.price.l }}</span>
                    </p>
                    <small class="d-block text-gray-700 mb-1">
                      {{ singleDrink.shop.size.l }}
                    </small>
                    <small class="d-block text-gray-700">
                      {{ singleDrink.calorie.l }} 大卡
                    </small>
                  </li>
                </ul>
                <ul class="list-unstyled d-flex">
                  <li
                    class="py-1 px-4 fs-normal2 fw-medium rounded-pill me-2"
                    :class="{
                      'bg-primary-300': item === '期間限定',
                      'bg-secondary-300': item === '僅限冷飲',
                      'bg-accent-300': item === '店家推薦',
                      'bg-gray-100 border border-gray-500': item === '固定糖冰',
                    }"
                    v-for="item in singleDrink.special"
                    :key="`drinkSpecial ${item}`"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="text-end">
                <RateDisplay
                  :rate="rateGroup.totalRateScore"
                  class="rateDisplay-md mb-3" />
                <FavoriteBtn class="btn-favorite" />
              </div>
            </div>
            <ul class="list-unstyled mb-0">
              <li>咖啡因：{{ singleDrink.caffeine }}</li>
              <li>內容物：{{ joinIngredient(singleDrink.ingredient) }}</li>
            </ul>
          </div>
        </section>
        <section class="row justify-content-center">
          <div class="col-10">
            <RateGroup :data="rateGroup" @emit-pin="clickPin" />
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
            <button
              type="button"
              class="btn-custom btn-custom-primary fs-6 fw-bold px-0 w-100"
              @click="$refs.addCommentModal.showModal"
            >
              撰寫評論
            </button>
          </div>
        </section>

        <section class="pt-15" id="drink-comments">
          <div class="d-flex align-items-center justify-content-end mb-6">
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
          <CommentDisplay
            class="mb-15"
            v-for="item in sortComments"
            :key="`comments ${item.id}`"
            :data="item"
            :commentNum="filterUserComment(item.userName).length"
          />
          <PaginationComponent
            v-if="pagination.total > 1"
            :pagination="pagination"
            @emit-page="clickAction"
          />
        </section>
      </div>
    </div>

    <AddCommentModal ref="addCommentModal" :data="singleDrink" />
  </div>
</template>
