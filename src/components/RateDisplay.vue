<template>
  <div class="rateDisplay d-flex align-items-center">
    <p class="me-3 font-handwriting fs-bold">4.9</p>
    <ul class="mb-1 list-unstyled d-flex align-items-center">
      <li>
        <img class="img-full" src="../assets/images/icon-start-full.svg" alt="" />
      </li>
      <li>
        <img class="img-full" src="../assets/images/icon-start-full.svg" alt="" />
      </li>
      <li>
        <img class="img-full" src="../assets/images/icon-start-full.svg" alt="" />
      </li>
      <li>
        <img class="img-full" src="../assets/images/icon-start-empty.svg" alt="" />
      </li>
      <li>
        <img class="img-full" src="../assets/images/icon-start-half.svg" alt="" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';

.rateDisplay {
  p {
    display: none;
  }

  li:not(:last-child) {
    margin-right: 4px;
  }

  &-sm {
    li {
      width: 20px;
      height: 20px;
    }
  }

  &-lg {
    p {
      font-size: $h2-font-size;
    }

    li {
      width: 35px;
      height: 35px;
    }
  }

  &.hasText {
    p {
      display: block;
    }
  }
}
</style>
