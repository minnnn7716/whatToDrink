<script>
import { mapState, mapActions } from 'pinia';
import drinkStore from '@/stores/drinkStore';
import SearchTableMode from '@/components/SearchTableMode.vue';

export default {
  data() {
    return {
      list: [],
      favoriteDrink: [],
      selectType: '全部飲品',
    };
  },
  components: {
    SearchTableMode,
  },
  methods: {
    ...mapActions(drinkStore, ['getDrinks']),
    getFavoriteList() {
      let list = [];

      if (localStorage.favoriteList) {
        list = JSON.parse(localStorage.favoriteList);
      }

      this.list = list;
    },
    changeType(type) {
      this.selectType = type;
    },
  },
  computed: {
    ...mapState(drinkStore, ['drinks']),
    favoriteDate() {
      this.getFavoriteList();
      const data = [];

      if (this.drinks.length) {
        for (let i = 0; i < this.list.length; i += 1) {
          const filterAry = this.drinks.filter((item) => item.id === this.list[i]);
          data.push(filterAry[0]);
        }
      }

      return data;
    },
    filterFavoriteDate() {
      let filterTypeAry = [];

      if (!this.favoriteDate.length) {
        return [];
      }

      if (this.selectType === '全部飲品') {
        filterTypeAry = this.favoriteDate;
      } else {
        const ary = this.favoriteDate.filter((item) => item.type === this.selectType);

        if (ary.length) {
          filterTypeAry = ary;
        } else {
          filterTypeAry = this.favoriteDate;
          this.changeType('全部飲品');
        }
      }

      return filterTypeAry;
    },
    filterCustomType() {
      const typeAry = [];

      if (this.favoriteDate[0]) {
        this.favoriteDate.forEach((i) => {
          if (typeAry.indexOf(i.type) === -1) {
            typeAry.push(i.type);
          }
        });

        typeAry.unshift('全部飲品');
      }

      return typeAry;
    },
  },
  created() {
    this.getDrinks();
  },
  mounted() {
    this.$emitter.on('favorite-reRender', () => this.getFavoriteList());
  },
};
</script>

<template>
  <div class="container pt-10 pt-md-20 pb-10 pb-md-15">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-3xl-12">
        <div class="menu px-2 px-md-6 py-4 py-md-10 border border-3 border-secondary-600 rounded-4">
          <h2 class="fs-4 fs-md-3 fw-bold d-flex align-items-center text-accent mb-6">
            <img
              class="d-none d-md-block me-2"
              src="@/assets/images/icon-favorite-active.svg"
              alt="愛心"
            >
            <img
              width="28"
              class="d-md-none me-2"
              src="@/assets/images/icon-favorite-active.svg"
              alt="愛心"
            >
            收藏清單
          </h2>
          <div v-if="filterFavoriteDate.length">
            <SearchTableMode
              :propsData="filterFavoriteDate"
            />
          </div>
          <div v-else class="py-4 d-flex flex-column align-items-center">
            <p class="fs-5 fs-md-4 fw-medium mb-4">尚無喜愛飲品</p>
            <RouterLink
              to="/shops"
              class="btn-custom btn-custom-primary-sm fs-normal1 fs-md-6 fw-bold"
            >
              來去逛逛
            </RouterLink>
          </div>
          <ul
            v-if="list.length"
            class="d-none d-md-block menu-list list-unstyled mb-0">
            <li
              v-for="item in filterCustomType"
              :key="`favoriteList ${item}`"
            >
              <button
                type="button"
                class="menu-btn"
                :class="{ 'active': selectType === item }"
                @click="changeType(item)"
              >
                <span>{{ item }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
