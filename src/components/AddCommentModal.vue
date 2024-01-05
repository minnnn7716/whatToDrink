<script>
import { mapActions } from 'pinia';
import commentStore from '@/stores/commentStore';
import modalMixin from '@/mixins/modalMixin';
import RateSelector from './RateSelector.vue';

export default {
  data() {
    return {
      firstSend: false,
      addDate: {
        rate: '0',
        userName: '',
        sugar: '甜度',
        ice: '冰塊',
        content: '',
      },
    };
  },
  components: {
    RateSelector,
  },
  props: {
    propsData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mixins: [modalMixin],
  methods: {
    ...mapActions(commentStore, ['postComment']),
    getSelectRate(rate) {
      this.addDate.rate = rate;
    },
    sendComment() {
      this.firstSend = true;
      if (this.hasData) {
        const data = { ...this.propsData };

        const shop = {
          id: data.shop.id,
          rate: data.shop.rate,
          rateNum: data.shop.rateNum,
        };

        const drink = {
          id: data.id,
          rate: data.rate,
          rateNum: data.comments.length,
        };

        this.addDate = {
          ...this.addDate,
          shopId: data.shop.id,
          drinkId: data.id,
          date: new Date() * 1,
        };

        this.postComment(this.addDate, drink, shop);
        this.modal.hide();

        this.firstSend = false;
        this.addDate = {
          rate: '0',
          userName: '',
          sugar: '甜度',
          ice: '冰塊',
          content: '',
        };
      }
    },
  },
  computed: {
    hasData() {
      const data = { ...this.addDate };
      const keys = Object.keys(data);
      const ary = [];

      for (let i = 0; i < keys.length; i += 1) {
        if (data.rate === '0') {
          ary.push(false);
        }

        if (data.userName === '') {
          ary.push(false);
        }

        if (data.sugar === '甜度') {
          ary.push(false);
        }

        if (data.ice === '冰塊') {
          ary.push(false);
        }

        if (data.content === '') {
          ary.push(false);
        }
      }

      return !ary.length;
    },
  },
};
</script>

<template>
  <div class="modal fade" id="addCommentModal" ref="modal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content rounded-4">
          <div class="modal-header border-bottom-0 pb-2 p-md-4">
            <h1 class="modal-title fs-5 invisible" id="addCommentModalLabel">撰寫評論</h1>
            <button
              type="button"
              class="btn-close"
              @click="hideModal"
            ></button>
          </div>
          <div class="modal-body pt-0 pb-10">
            <div class="container-fluid">
              <div class="row flex-column flex-md-row gx-md-10 justify-content-center">
                <div class="col-12 col-md-4">
                  <img
                    class="img-full mb-3 d-none d-md-block"
                    style="height: 200px;"
                    :src="propsData.imageUrl"
                    :alt="propsData.name" />
                  <h3
                    class="py-2 px-4 mb-3 d-inline-block fs-normal2 fw-normal
                    border border-gray-900 rounded-pill"
                  >
                    {{ propsData.shop.name }}
                  </h3>
                  <div class="drinkInfo pb-4 pb-md-0 mb-4 mb-md-0">
                    <h2 class="fs-5 mb-0 mb-md-3">{{ propsData.name }}</h2>
                    <p class="fs-normal2 fs-md-6 fw-medium">
                      <span v-if="propsData.price.m">
                        M <span class="ms-2">$ {{ propsData.price.m }}</span>
                      </span>
                      <span v-if="propsData.price.m && propsData.price.l" class="mx-3">｜</span>
                      <span v-if="propsData.price.l">
                        L <span class="ms-2">$ {{ propsData.price.l }}</span>
                      </span>
                    </p>
                  </div>
                </div>
                <form
                  id="addCommentForm"
                  class="col-12 col-md-8"
                  @submit.prevent="sendComment"
                >
                  <div class="d-flex flex-column flex-md-row align-items-md-center mb-6">
                    <div class="d-flex align-items-center">
                      <h4
                        class="fs-5 me-3 transition-ease"
                        :class="{ 'text-accent-700': addDate.rate === '0' && firstSend }"
                      >
                        評價星等
                      </h4>
                      <RateSelector
                        :rate="addDate.rate" @emit-rate="getSelectRate"
                      />
                    </div>
                    <div
                      class="rateAlert"
                      :class="{
                        'active': addDate.rate === '0' && firstSend,
                      }"
                    >
                      <p
                        class="mt-2 mt-md-0 ms-md-2 py-1 px-4 rounded-pill"
                      >
                        請選擇評價
                      </p>
                    </div>
                  </div>
                  <div class="row gx-3 align-items-center mb-4">
                    <div class="col-12 col-md-4 mb-4 mb-md-0">
                      <label
                        for="addCommentName"
                        class="form-label fs-5 mb-0 me-3 fw-medium d-none"
                      >
                        姓名
                      </label>
                      <input
                        type="text"
                        class="form-item form-control flex-fit py-2 px-4 rounded-pill"
                        :class="{
                          'border-accent-600 bg-accent-100': addDate.userName === '' && firstSend
                        }"
                        id="addCommentName"
                        placeholder="暱稱"
                        v-model.trim="addDate.userName"
                      >
                    </div>
                    <div class="col-6 col-md-4">
                      <select
                          id="type"
                          class="form-item form-select py-2 px-4 rounded-pill"
                          :class="{
                            'border-accent-600 bg-accent-100': addDate.sugar === '甜度' && firstSend
                          }"

                          v-model="addDate.sugar"
                        >
                          <option selected disabled>甜度</option>
                          <option value="無糖">無糖</option>
                          <option value="1 分糖">1 分糖</option>
                          <option value="微糖">微糖</option>
                          <option value="半糖">半糖</option>
                          <option value="少糖">少糖</option>
                          <option value="全糖">全糖</option>
                          <option value="多糖">多糖</option>
                          <option value="不記得">不記得</option>
                      </select>
                    </div>
                    <div class="col-6 col-md-4">
                      <select
                        id="type"
                        class="form-item form-select py-2 px-4 rounded-pill"
                        :class="{
                          'border-accent-600 bg-accent-100': addDate.ice === '冰塊' && firstSend
                        }"
                        v-model="addDate.ice"
                      >
                        <option selected disabled>冰塊</option>
                        <option value="完全去冰">完全去冰</option>
                        <option value="去冰">去冰</option>
                        <option value="微冰">微冰</option>
                        <option value="半冰">半冰</option>
                        <option value="少冰">少冰</option>
                        <option value="多冰">多冰</option>
                        <option value="溫">溫</option>
                        <option value="熱">熱</option>
                        <option value="不記得">不記得</option>
                      </select>
                    </div>
                  </div>
                  <textarea
                    rows="6"
                    class="form-item py-3 px-4 mb-4 w-100 rounded-4"
                    :class="{
                      'border-accent-600 bg-accent-100': addDate.content === '' && firstSend
                    }"
                    placeholder="你覺得這杯飲料如何呢？"
                    v-model="addDate.content"
                  ></textarea>
                  <div class="d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      class="btn-custom btn-custom-light-sm fw-medium me-3"
                      @click="hideModal"
                    >
                      取消評論
                    </button>
                    <button
                      type="submit"
                      form="addCommentForm"
                      class="btn-custom btn-custom-primary-sm fw-medium"
                    >
                      確定送出
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
@import '@/assets/scss/components/button';

.form-item {
  border: 2px solid #00000060;
  transition: all ease .3s;
}

.drinkInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $gray;

  @include media-breakpoint-up(md) {
    flex-direction: column;
    align-items: start;
    border-bottom: none
  }
}

.rateAlert {
  max-height: 0;
  overflow: hidden;
  transition: all ease .3s;

  p {
    font-weight: 500;
    background-color: #fff;
    color: $accent-700;
    border: 2px solid $accent-600;
  }

  &.active {
    max-height: 48px;
  }

  @include media-breakpoint-up(md) {
    max-height: fit-content;
    opacity: 0;

    p {
      border: 3px solid $accent-600;
    }

    &.active {
      max-height: fit-content;
      opacity: 1;
    }
  }
}
</style>
