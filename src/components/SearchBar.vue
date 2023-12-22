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
      class="searchBar-input form-control h-100 rounded-pill fs-normal-1 fs-md-6"
      :class="{ 'border-3 border-accent-700': firstSearch && alertShow }"
      placeholder="想喝什麼告訴我吧！"
      v-model.trim="searchWord"
      @keyup.enter="searchFn"
    />
    <button
      type="button"
      class="searchBar-btn btn btn-hoverScale border-0 py-1 ps-1 pe-2 px-md-3 h-100"
      @click="searchFn"
    >
      <img class="img-fluid" src="@/assets/images/icon-search.svg" alt="搜尋" />
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
@import '@/assets/scss/vendors/bootstrap';

.searchBar {
  &-border {
    input {
      border: 1px solid #000;
    }
  }

  &-input{
    padding: 4px 56px 4px 16px;
    min-height: 60px;

    @include media-breakpoint-up(md) {
      padding: 4px 72px 4px 24px;
    }
  }

  &-btn {
    width: 65px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    @include media-breakpoint-up(md) {
      right: 8px;
    }
  }
}
</style>
