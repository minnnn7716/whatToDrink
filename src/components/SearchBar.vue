<template>
  <div class="flex-grow-1 position-relative">
    <label for="search" class="form-label d-none">想喝的飲料關鍵字</label>
    <input
      type="text"
      id="search"
      class="form-control h-100 ps-8 rounded-pill fs-6"
      placeholder="想喝什麼告訴我吧！"
    />
    <button
      type="button"
      class="btn btn-hoverScale border-0 p-2 position-absolute top-50 end-0 translate-middle"
    >
      <img src="../assets/images/icon-search.svg" alt="搜尋" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.searchBar {
  &-border {
    input {
      border: 1px solid #000;
    }
  }
}
</style>
