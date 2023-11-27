<template>
  <div class="switchBtnGroup rounded-pill">
    <button class="rounded-pill me-2 active">
      <slot name="start">start</slot>
    </button>
    <button class="rounded-pill">
      <slot name="end">end</slot>
    </button>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/vendors/bootstrap';
.switchBtnGroup {
  display: inline-block;

  button {
    background-color: transparent;
    border: none;
  }

  &-light {
    background-color: #fff;

    button {
      &:not(.active):hover {
        background-color: $gray-300;
      }
    }

    .active {
      background-color: $primary;
      font-weight: 600;
    }
  }

  &-primary {
    background: $primary;
    border: 1px solid #000;

    button {
      &:not(.active):hover {
        background-color: white;
      }
    }

    .active {
      background-color: white;
      border: 1px solid #000;
    }
  }

  &-text {
    padding: 8px 12px;
    button {
      padding: 16px 28px;
      font-size: $h5-font-size;
    }
  }

  &-icon {
    padding: 8px 20px;
    button {
      padding: 10px;
    }

    img {
      max-width: 100%;
      width: 32px;
      height: 32px;
    }
  }

  &-icon-sm {
    padding: 8px 12px;
    button {
      padding: 10px;
    }

    img {
      max-width: 100%;
      width: 25px;
      height: 25px;
    }
  }
}
</style>
