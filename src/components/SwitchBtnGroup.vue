<script>
export default {
  data() {
    return {
      selectItem: '',
      startBtn: '',
      endBtn: '',
    };
  },
  props: ['defaultSelect'],
  emits: ['emit-btn'],
  watch: {
    defaultSelect() {
      if (this.defaultSelect) {
        this.selectItem = this.defaultSelect;
      }
    },
  },
  methods: {
    clickItem(item) {
      this.selectItem = item;
      this.$emit('emit-btn', this.selectItem);
    },
  },
  mounted() {
    this.startBtn = this.$refs.startBtn.children[0].dataset.name;
    this.endBtn = this.$refs.endBtn.children[0].dataset.name;

    if (this.defaultSelect) {
      this.selectItem = this.defaultSelect;
    } else {
      this.selectItem = this.startBtn;
    }

    this.$emit('emit-btn', this.selectItem);
  },
};
</script>

<template>
  <div class="switchBtnGroup rounded-pill d-flex">
    <button
      ref="startBtn"
      type="button"
      class="rounded-pill me-2 flex-grow-1"
      :class="{ 'active': startBtn === selectItem }"
      @click="clickItem(startBtn)"
    >
      <slot name="start">start</slot>
    </button>
    <button
      ref="endBtn"
      type="button"
      class="rounded-pill flex-grow-1"
      :class="{ 'active': endBtn === selectItem }"
      @click="clickItem(endBtn)"
    >
      <slot name="end">end</slot>
    </button>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/vendors/bootstrap';

.switchBtnGroup {
  display: inline-block;

  button {
    background-color: transparent;
    border: 1px solid transparent;
  }

  &-light {
    background-color: #fff;
    background-color: 1px solid transparent;

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
      padding: 8px 28px;
      font-size: $h6-font-size;

      @include media-breakpoint-up(md) {
        padding: 16px 28px;
        font-size: $h5-font-size;
      }
    }
  }

  &-text-h100 {
    padding: 8px 12px;
    button {
      padding: 0 28px;
      height: 100%;
      font-size: $h6-font-size;

      @include media-breakpoint-up(md) {
        font-size: $h5-font-size;
      }
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
