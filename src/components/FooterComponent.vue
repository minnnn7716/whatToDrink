<script>
export default {}
</script>

<template>
  <footer class="footer bg-primary">
    <div class="container-fluid">
      <div class="row">
        <div
          class="footer-content col-10 mx-auto py-12 d-flex align-items-end justify-content-between"
        >
          <ul class="list-unstyled w-40 d-flex align-items-end mb-0">
            <li class="footer-item">
              <a class="footer-link" href="#">首頁搜尋</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">全部店家</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">轉吧轉吧</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">關於我們</a>
            </li>
          </ul>
          <a class="footer-brand fs-3 btn-hoverScale" href="#">
            What <br />
            to Drink
          </a>
          <p class="w-40 text-end fs-normal2">資料、圖片來源皆來自網路，僅用來做為學習用途</p>
          <button type="button" class="footer-toTop fs-6">TOP</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
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
    margin: -8px;
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
