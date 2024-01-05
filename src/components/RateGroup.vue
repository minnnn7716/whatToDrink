<script>
import RateDisplay from './RateDisplay.vue';

export default {
  data() {
    return {
      pin: false,
    };
  },
  components: {
    RateDisplay,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    clickPin(rate) {
      if (this.pin === rate) {
        this.pin = false;
      } else {
        this.pin = rate;
      }

      this.$emit('emit-pin', this.pin);
    },
  },
};
</script>
<template>
  <div class="row align-items-center">
    <section class="col-12 col-md-4 col-lg-3 d-flex flex-md-column align-items-center">
      <h3 class="rateGroup-scoreTitle d-inline-block font-handwriting fs-display3 fs-md-display2
      text-black lh-sm px-4 px-md-0 mb-md-2">
        {{ data.totalRateScore }}
      </h3>
      <div class="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <RateDisplay :rate="data.totalRateScore" class="rateDisplay-sm mb-3" />
        <p class="d-inline-block">{{ data.commentsNum }} 則評論</p>
      </div>
    </section>
    <section class="col-12 col-md-8 col-lg-9">
      <ul class="list-unstyled px-lg-5 d-flex flex-column-reverse">
        <li
          class="rateGroup-item d-flex align-items-center"
          :class="{ 'mb-2 mb-md-3': index + 1 !== 1, 'active': pin === index + 1 }"
          v-for="(item, index) in data.eachRateNum"
          :key="`rateGroup ${index + 1}`"
        >
          <RateDisplay :rate="`${index + 1}.0`" class="rateDisplay-xs d-none d-md-block" />
          <div class="rateGroup-bar flex-grow-1 mx-md-3">
            <div
              :class="{
                'rateGroup-bar-inside': item !== 0,
                'border-0': item === data.commentsNum
              }"
              :style="`width: ${((item / data.commentsNum) * 100)}%;`"
            />
          </div>
          <p class="rateGroup-number text-end me-3">{{ item }}</p>
          <button
            type="button"
            class="rateGroup-pinBtn btn p-0 border-black rounded-circle"
            :disabled="item === 0"
            @click="clickPin(index + 1)"
          >
            <img src="@/assets/images/icon-pin.svg" alt="釘選" />
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
.rateGroup {
  &-scoreTitle {
    width: 50%;
    text-align: center;

    @include media-breakpoint-up(md) {
      width: 100%;
    }
  }

  &-item {
    &.active {
      .rateGroup-bar-inside,
      .rateGroup-pinBtn {
        background-color: $accent;
      }
    }
  }

  &-bar {
    position: relative;
    height: 12px;
    border: 1px solid #000;
    border-radius: 20px;
    overflow: hidden;

    @include media-breakpoint-up(md) {
      height: 12px;
    }

    &-inside{
      position: absolute;
      left: -1px;
      top: -1px;
      bottom: -1px;
      border: 1px solid #000;
      border-radius: 20px;
      background-color: $primary;
      transition: all ease .3s;
    }
  }

  &-number {
    width: 40px;

    @include media-breakpoint-up(md) {
      width: 35px;
    }
  }

  &-pinBtn {
    transition: all ease 0.3s;

    img {
      width: 25px;
      height: 25px;
    }

    @include media-breakpoint-up(md) {
      &:not(.active):hover {
        background-color: $accent-300;
      }
    }
  }
}
</style>
