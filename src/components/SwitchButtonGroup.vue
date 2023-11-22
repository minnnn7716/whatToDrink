<template>
  <div class="bg-white py-2 px-3 rounded-pill">
    <button class="border-0 py-4 px-7 bg-primary rounded-pill fs-5 fw-bold me-2">
      <slot name="start">start</slot>
    </button>
    <button class="border-0 py-4 px-7 rounded-pill fs-5">
      <slot name="end">end</slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';

button {
  background-color: transparent;

  &:hover {
    background-color: $gray-300;
  }
}
</style>
