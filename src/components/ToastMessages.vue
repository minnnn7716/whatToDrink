<script>
import ToastItem from './ToastItem.vue';

export default {
  data() {
    return {
      message: [],
    };
  },
  components: {
    ToastItem,
  },
  mounted() {
    this.$emitter.on('push-message', (message) => {
      const { style, title, content } = message;
      this.message.push({ style, title, content });
    });
  },
};
</script>

<template>
  <div class="toast-container position-fixed start-50 translate-middle-x p-3">
    <ToastItem v-for="(msg, index) in message" :key="index" :msg="msg" />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/vendors/bootstrap';

.toast-container {
  top: 60px;

  @include media-breakpoint-up(lg) {
    top: 0;
  }
}
</style>
