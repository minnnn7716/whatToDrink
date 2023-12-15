<script>
import { mapState, mapActions } from 'pinia';
import drinkStore from '@/stores/drinkStore';
import shopStore from '@/stores/shopStore';
import SearchBar from '@/components/SearchBar.vue';
import SwitchBtnGroup from '@/components/SwitchBtnGroup.vue';
import SortComponent from '@/components/SortComponent.vue';
import SearchImageMode from '@/components/SearchImageMode.vue';
import SearchTableMode from '@/components/SearchTableMode.vue';

export default {
  data() {
    return {
      display: 'table',
      isGetUrlData: false,
      search: {
        type: '',
        keyword: '',
      },
      sort: {
        select: false,
        order: '',
      },
    };
  },
  components: {
    SearchBar,
    SwitchBtnGroup,
    SortComponent,
    SearchImageMode,
    SearchTableMode,
  },
  watch: {
    $route: 'getUrlData',
    isGetUrlData() {
      if (!this.isGetUrlData) return;

      const { keyword, type } = this.search;

      this.getSearchDrink(type, keyword);
      this.isGetUrlData = false;
    },
    shops() {
      if (!this.shops.length) return;

      const path = this.joinShopIdPath();
      this.getSearchDrink(this.search.type, path);
    },
    drinks: {
      handler() {
        this.judgeSortFn();
      },
      deep: true,
      immediate: true,
    },
    sort: {
      handler() {
        this.judgeSortFn();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(drinkStore, ['getSearchDrink', 'sortData']),
    ...mapActions(shopStore, ['getSearchShops']),
    getUrlData() {
      this.search.keyword = this.$route.query.keyword;
      this.search.type = this.$route.query.type;

      if (this.search.type === 'shops') {
        this.getSearchShops(this.search.keyword);
        console.log('搜尋店家!');
        return;
      }

      console.log('搜尋飲料!');
      this.isGetUrlData = true;
    },
    joinShopIdPath() {
      const shopIdAry = this.shops.map((item) => item.id);

      let str = '';

      for (let i = 0; i < shopIdAry.length; i += 1) {
        str += `shopId=${shopIdAry[i]}`;

        if (i !== shopIdAry.length - 1) {
          str += '&';
        }
      }

      return str;
    },
    judgeSortFn() {
      const { order, select } = this.sort;

      if (!select) {
        this.sortData(order);
        return;
      }

      this.sortData(order, select[1]);
    },
  },
  computed: {
    ...mapState(drinkStore, ['drinks', 'sortDrinks']),
    ...mapState(shopStore, ['shops']),
    resultNum() {
      let num = 0;

      if (this.drinks) {
        num = this.drinks.length;
      }

      return num;
    },
  },
  created() {
    this.getUrlData();
  },
};
</script>

<template>
  <div class="container pt-20 pb-10">
    <div class="row">
      <div class="col-10 col-3xl-12 mx-auto">
        <div class="d-flex mb-5">
          <SwitchBtnGroup
            class="switchBtnGroup-light switchBtnGroup-text-h100 me-4 border border-black"
            :defaultSelect="search.type"
            @emit-btn="(i) => search.type = i"
          >
            <template v-slot:start>
              <span data-name="drinks">飲料</span>
            </template>
            <template v-slot:end>
              <span data-name="shops">店家</span>
            </template>
          </SwitchBtnGroup>
          <SearchBar
            class="searchBar-border me-3"
            :searchType="search.type"
          />
          <SwitchBtnGroup
            class="switchBtnGroup-primary switchBtnGroup-icon me-3"
            @emit-btn="(i) => display = i"
          >
            <template v-slot:start>
              <img src="../../assets/images/icon-mode-list.svg" alt="列表模式" data-name="table" />
            </template>
            <template v-slot:end>
              <img src="../../assets/images/icon-mode-block.svg" alt="圖表模式" data-name="image" />
            </template>
          </SwitchBtnGroup>
          <SortComponent
            :propsSortSelect="sort.select[0]"
            @sort-select="(i) => sort.select = i"
            @sort-order="(i) => sort.order = i"
          />
        </div>
        <div class="d-flex align-items-center justify-content-between mb-10">
          <p class="fs-5 fw-bold">
            找到 {{ resultNum }} 個符合「{{ search.keyword }}」的飲料
          </p>
          <div
            class="w-fit d-flex align-items-center py-1 ps-6 pe-2 bg-accent-300
            border border-black rounded-pill transition-ease"
            :class="{ 'opacity-0': !sort.select }"
          >
            <p class="fw-bold">
              目前依照「{{ sort.select[0] ? sort.select[0] : '排序' }}」
              {{ sort.order === 'up' ? '遞增' : '遞減' }}排序
            </p>
            <button
              type="button"
              class="btn btn-hoverScale border-0 d-flex align-items-center"
            >
              <img
                src="@/assets/images/icon-error.svg"
                alt="關閉"
                @click="sort.select = false"
              />
            </button>
          </div>
        </div>
        <template v-if="resultNum">
          <div
            class="pb-10"
            :class="{'d-none': display !== 'table'}"
          >
            <SearchTableMode :propsData="sortDrinks" />
          </div>
          <div
            class="pb-15"
            :class="{'d-none': display !== 'image'}"
          >
            <SearchImageMode :propsData="sortDrinks" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
