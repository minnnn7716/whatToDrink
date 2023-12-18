<script>
export default {
  data() {
    return {
      searchWord: '',
      alertShow: false,
      firstSearch: false,
      searchPage: false,
    };
  },
  watch: {
    searchWord() {
      if (this.searchWord === '') {
        this.alertShow = true;
      } else {
        this.alertShow = false;
      }
    },
  },
  props: ['searchType'],
  methods: {
    searchFn() {
      if (this.searchWord === '') {
        this.firstSearch = true;
        this.alertShow = true;
        return;
      }

      this.firstSearch = false;
      this.$router.push(`/search?type=${this.searchType}&keyword=${this.searchWord}`);
    },
  },
  created() {
    if (this.$route.path === '/search') {
      this.searchPage = true;
    }
  },
};
</script>

<template>
  <div class="flex-grow-1 position-relative">
    <label for="search" class="form-label d-none">想喝的飲料</label>
    <input
      type="text"
      id="search"
      class="form-control h-100 ps-8 rounded-pill fs-6"
      :class="{ 'border-3 border-accent-700': firstSearch && alertShow }"
      placeholder="想喝什麼告訴我吧！"
      v-model.trim="searchWord"
      @keyup.enter="searchFn"
    />
    <button
      type="button"
      class="btn btn-hoverScale border-0 p-2 position-absolute top-50 end-0 translate-middle"
      @click="searchFn"
    >
      <img src="../assets/images/icon-search.svg" alt="搜尋" />
    </button>
    <p
      class="position-absolute mt-3 py-2 px-4 bg-light text-accent-700
      border border-3 border-accent-700 fw-bold rounded-pill opacity-0 transition-ease"
      :class="{
        'opacity-75': firstSearch && alertShow,
        'start-50 translate-middle-x': searchPage,
      }"
    >
      輸入框空白是找不到的喲
    </p>
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
