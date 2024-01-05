<script>
export default {
  methods: {
    ToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<template>
  <footer class="footer bg-primary">
    <div class="container-fluid">
      <div class="row">
        <div
          class="footer-content col-10 mx-auto py-12
          d-flex flex-column flex-md-row align-items-end justify-content-between"
        >
          <ul class="footer-side d-none d-md-flex list-unstyled align-items-end mb-0">
            <li class="footer-item">
              <RouterLink :to="{ name: 'Home', hash: '#index-type' }" class="footer-link"
                >四大種類</RouterLink
              >
            </li>
            <li class="footer-item">
              <RouterLink to="/shops" class="footer-link">全部店家</RouterLink>
            </li>
            <li class="footer-item">
              <RouterLink to="/wheel" class="footer-link">轉吧轉吧</RouterLink>
            </li>
            <li class="footer-item">
              <RouterLink to="/about" class="footer-link">關於我們</RouterLink>
            </li>
          </ul>
          <RouterLink to="/" class="footer-brand fs-3 btn-hoverScale">
            What <br />
            to Drink
          </RouterLink>
          <p class="footer-side text-center text-md-end fs-normal2">
            資料、圖片來源皆來自網路，<br class="d-lg-none">僅用來做為學習用途
          </p>
          <button @click.prevent="ToTop" type="button" class="footer-toTop fs-6">TOP</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
.footer {
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
  }

  &::before {
    top: -8px;
    height: 8px;
    background-color: $accent;
  }

  &::after {
    top: -14px;
    height: 6px;
    background-color: $secondary;
  }

  &-content {
    position: relative;
  }

  &-brand,
  &-link {
    color: black;
    text-decoration: none;
  }

  &-brand,
  &-toTop {
    font-family: $font-family-handwriting;
    font-weight: bold;
  }

  &-brand {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 12px;

    @include media-breakpoint-up(md) {
      width: auto;
      margin-bottom: -8px;
      margin-left: 8px;
    }
  }

  &-item {
    display: flex;
    align-items: flex-end;
  }

  &-link {
    margin-right: $spacer * 0.75;
    font-size: $normal2-font-size;
    writing-mode: vertical-lr;
    letter-spacing: 3px;
    &:hover {
      transform: scale(1.05);
    }
  }

  &-side {
    width: 100%;
    @include media-breakpoint-up(md) {
      width: 40%;
    }
  }

  &-toTop {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    width: 65px;
    height: 65px;
    padding: 0;
    transform: translateY(-50%);
    border: 5px solid $white;
    border-radius: 50%;
    color: $white;
    background: $gray-900;

    &:hover {
      top: -4px;
    }
  }
}
</style>
