<template>
  <div class="rateDisplay d-flex align-items-center">
    <p class="lh-1">4.9</p>
    <ul class="list-unstyled d-flex align-items-center">
      <li class="d-flex align-items-center">
        <img class="img-full" src="../assets/images/icon-start-full.svg" alt="" />
      </li>
      <li class="d-flex align-items-center">
        <img class="img-full" src="../assets/images/icon-start-full.svg" alt="" />
      </li>
      <li class="d-flex align-items-center">
        <img class="img-full" src="../assets/images/icon-start-full.svg" alt="" />
      </li>
      <li class="d-flex align-items-center">
        <img class="img-full" src="../assets/images/icon-start-empty.svg" alt="" />
      </li>
      <li class="d-flex align-items-center">
        <img class="img-full" src="../assets/images/icon-start-half.svg" alt="" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
@import '../assets/scss/utilities/mixin';

.rateDisplay {
  p {
    display: none;
  }

  ul {
    margin-bottom: 0;
  }

  li:not(:last-child) {
    margin-right: 4px;
  }

  &-xs {
    li {
      width: 18px;
      height: 18px;

      @include media-breakpoint-up(3xl) {
        width: 20px;
        height: 20px;
      }
    }
  }

  &-sm {
    p {
      font-size: $h6-font-size;
      margin-right: 8px;
    }

    li {
      width: 20px;
      height: 20px;

      @include media-breakpoint-up(3xl) {
        width: 22px;
        height: 22px;
      }
    }

    &.hasHandText {
      ul {
        margin-bottom: 4px;
      }
    }
  }

  &-md {
    p {
      font-size: $h3-font-size;
      margin-right: 12px;
    }

    ul {
      margin-bottom: 4px;
    }

    li {
      width: 30px;
      height: 30px;
    }

    &.hasSansText {
      ul {
        margin-bottom: 0;
      }
    }
  }

  &-lg {
    p {
      font-size: $h2-font-size;
      margin-right: 12px;
    }

    ul {
      margin-bottom: 8px;
    }

    li {
      width: 35px;
      height: 35px;
    }

    &.hasSansText {
      ul {
        margin-bottom: 0;
      }
    }
  }

  &.hasSansText,
  &.hasHandText {
    p {
      display: block;
    }
  }

  &.hasSansText {
    font-family: $font-family-sans;
    font-weight: 500;
  }

  &.hasHandText {
    font-family: $font-family-handwriting;
    font-weight: 600;
  }

  &.strokeTitle {
    @include stroke($white, 2px);
  }
}
</style>
