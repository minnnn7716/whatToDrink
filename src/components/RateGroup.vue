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
    <section class="col-3 d-flex flex-column align-items-center">
      <h3 class="d-inline-block font-handwriting fs-display2 text-black mb-2">
        {{ data.totalRateScore }}
      </h3>
      <RateDisplay :rate="data.totalRateScore" class="rateDisplay-sm mb-3" />
      <p class="d-inline-block">{{ data.commentsNum }} 則評論</p>
    </section>
    <section class="col-9">
      <ul class="list-unstyled px-5 d-flex flex-column-reverse">
        <li
          class="rateGroup-item d-flex align-items-center"
          :class="{ 'mb-3': index + 1 !== 1, 'active': pin === index + 1 }"
          v-for="(item, index) in data.eachRateNum"
          :key="`rateGroup ${index + 1}`"
        >
          <RateDisplay :rate="`${index + 1}.0`" class="rateDisplay-xs" />
          <div class="rateGroup-bar flex-grow-1 mx-3">
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
  }

  &-pinBtn {
    transition: all ease 0.3s;

    img {
      width: 25px;
      height: 25px;
    }

    &:not(.active):hover {
      background-color: $accent-300;
    }
  }
}
</style>
