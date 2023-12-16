<script>
import { mapActions } from 'pinia';
import commentStore from '../stores/commentStore';
import RateDisplay from './RateDisplay.vue';

export default {
  components: {
    RateDisplay,
  },
  props: {
    commentData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(commentStore, ['filterUserComment']),
    getDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<template>
  <div class="pt-6 flex-grow-1">
    <div class="commentDisplay h-100">
      <div class="commentDisplay-userPhoto">
        <img class="img-fluid" src="../assets/images/userPhoto.png" alt="使用者頭像" />
      </div>
      <div class="commentDisplay-header mb-4 d-flex justify-content-between">
        <div>
          <h5 class="d-inline-block px-2 mb-1 bg-white">{{ commentData.userName }}</h5>
          <p class="px-2 fs-normal2">{{ filterUserComment(commentData.userName).length }} 則評論</p>
          <time class="px-2 fs-normal2">{{ getDate(commentData.date) }}</time>
        </div>
        <div class="bg-white px-2">
          <RateDisplay :rate="commentData.rate" class="rateDisplay-sm mb-1" />
          <p class="fs-normal2 text-end">{{ commentData.sugar }} / {{ commentData.ice }}</p>
        </div>
      </div>
      <p
        class="commentDisplay-content px-2"
        v-html="commentData.content"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
.commentDisplay {
  position: relative;
  padding: 0 20px 8px 64px;
  margin: 16px 0 12px 32px;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 16px;
  }

  &-header,
  &-content {
    position: relative;
  }

  &-header,
  &-userPhoto,
  &-content {
    z-index: 5;
  }

  &-header {
    margin-top: -24px;
  }

  &-userPhoto {
    position: absolute;
    top: -16px;
    left: -32px;
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    border-radius: 50%;
    box-shadow: 6px 8px 0 $primary;
    overflow: hidden;
  }
}
</style>
