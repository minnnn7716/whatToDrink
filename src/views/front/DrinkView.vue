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
      drinkId: 0,
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
  watch: {
    singleDrink() {
      this.sortAction(1);
      this.getRateGroupInfo(this.singleDrink.comments);
    },
    sort() {
      this.sortAction(1);
    },
  },
  methods: {
    ...mapActions(drinkStore, ['getSingleDrink', 'joinIngredient']),
    ...mapActions(commentStore, ['getComments', 'getRateGroupInfo', 'clickPin', 'filterUserComment', 'clickPage', 'sortCommentsFn']),
    sortAction(page) {
      const comments = [...this.singleDrink.comments];
      this.sortCommentsFn(comments, this.sort, page);
    },
    clickPageAction(item) {
      this.clickPage(item);
      this.sortAction(this.pagination.current);
      this.$router.push(`${this.$route.path}#drink-comments`);
    },
    clickRateAction(item) {
      this.clickPin(item);
      this.sortAction(1);
      this.$router.push(`${this.$route.path}#drink-rateGroup`);
    },
  },
  computed: {
    ...mapState(drinkStore, ['singleDrink']),
    ...mapState(commentStore, ['comments', 'rateGroup', 'pagination', 'sortComments']),
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
        <section class="row">
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
                  class="rateDisplay-md mb-3"
                  :rate="rateGroup.totalRateScore"
                />
                <FavoriteBtn class="btn-favorite" />
              </div>
            </div>
            <ul class="list-unstyled mb-0">
              <li>咖啡因：{{ singleDrink.caffeine }}</li>
              <li>內容物：{{ joinIngredient(singleDrink.ingredient) }}</li>
            </ul>
          </div>
        </section>
        <section class="row justify-content-center pt-15" id="drink-rateGroup">
          <div class="col-10">
            <RateGroup
              :data="rateGroup"
              @emit-pin="clickRateAction"
            />
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
          />
          <PaginationComponent
            v-if="pagination.total > 1"
            :pagination="pagination"
            @emit-page="clickPageAction"
          />
        </section>
      </div>
    </div>

    <AddCommentModal ref="addCommentModal" :data="singleDrink" />
  </div>
</template>
