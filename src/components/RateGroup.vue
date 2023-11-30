<script>
import RateDisplay from './RateDisplay.vue';

export default {
  components: {
    RateDisplay,
  },
};
</script>
<template>
  <div class="row align-items-center">
    <section class="col-3 d-flex flex-column align-items-center">
      <h3 class="d-inline-block font-handwriting fs-display2 text-black mb-2">4.9</h3>
      <RateDisplay class="rateDisplay-sm mb-3" />
      <p class="d-inline-block">123 則評論</p>
    </section>
    <section class="col-9">
      <ul class="list-unstyled px-5">
        <li class="d-flex align-items-center mb-3">
          <RateDisplay class="rateDisplay-xs" />
          <div class="rateGroup-bar flex-grow-1 mx-3">
            <div class="rateGroup-bar-inside"></div>
          </div>
          <p class="rateGroup-number text-end me-3">1,220</p>
          <button type="button" class="rateGroup-pinBtn btn p-0 border-black rounded-circle">
            <img src="../assets/images/icon-pin.svg" alt="釘選" />
          </button>
        </li>
        <li class="d-flex align-items-center mb-3">
          <RateDisplay class="rateDisplay-xs" />
          <div class="rateGroup-bar flex-grow-1 mx-3">
            <div class="rateGroup-bar-inside"></div>
          </div>
          <p class="rateGroup-number text-end me-3">1,220</p>
          <button type="button" class="rateGroup-pinBtn btn p-0 border-black rounded-circle">
            <img src="../assets/images/icon-pin.svg" alt="釘選" />
          </button>
        </li>
        <li class="d-flex align-items-center mb-3">
          <RateDisplay class="rateDisplay-xs" />
          <div class="rateGroup-bar flex-grow-1 mx-3">
            <div class="rateGroup-bar-inside"></div>
          </div>
          <p class="rateGroup-number text-end me-3">1,220</p>
          <button type="button" class="rateGroup-pinBtn btn p-0 border-black rounded-circle">
            <img src="../assets/images/icon-pin.svg" alt="釘選" />
          </button>
        </li>
        <li class="d-flex align-items-center mb-3">
          <RateDisplay class="rateDisplay-xs" />
          <div class="rateGroup-bar flex-grow-1 mx-3">
            <div class="rateGroup-bar-inside"></div>
          </div>
          <p class="rateGroup-number text-end me-3">1,220</p>
          <button type="button" class="rateGroup-pinBtn btn p-0 border-black rounded-circle">
            <img src="../assets/images/icon-pin.svg" alt="釘選" />
          </button>
        </li>
        <li class="d-flex align-items-center">
          <RateDisplay class="rateDisplay-xs" />
          <div class="rateGroup-bar flex-grow-1 mx-3">
            <div class="rateGroup-bar-inside"></div>
          </div>
          <p class="rateGroup-number text-end me-3">1,220</p>
          <button type="button" class="rateGroup-pinBtn btn p-0 border-black rounded-circle active">
            <img src="../assets/images/icon-pin.svg" alt="釘選" />
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
.rateGroup {
  &-bar {
    position: relative;
    height: 12px;
    border: 1px solid #000;
    border-radius: 20px;
    overflow: hidden;

    &-inside {
      position: absolute;
      left: -1px;
      top: -1px;
      bottom: -1px;
      width: 20%;
      border: 1px solid #000;
      border-radius: 20px;
      background-color: $primary;
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

    &.active {
      background-color: $accent;
    }
  }
}
</style>
