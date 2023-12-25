<script>
import { Toast } from 'bootstrap';

export default {
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 3000,
    });
    toast.show();
  },
};
</script>

<template>
  <div
    class="toast font-sans-tw fw-normal text-black"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header" :class="{ rounded: !msg.content }">
      <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
      <p class="me-auto">{{ msg.title }}</p>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>
