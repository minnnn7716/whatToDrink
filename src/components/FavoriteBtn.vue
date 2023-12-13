<script>
export default {
  data() {
    return {
      isFavorite: false,
      list: [],
    };
  },
  props: ['id'],
  watch: {
    id: 'getFavoriteList',
    list: 'judgeFavorite',
  },
  methods: {
    getFavoriteList() {
      let list = [];

      if (localStorage.favoriteList) {
        list = JSON.parse(localStorage.favoriteList);
      }

      this.list = list;
    },
    judgeFavorite() {
      if (this.list.indexOf(this.id) !== -1) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    },
    changeStatus() {
      this.getFavoriteList();

      const index = this.list.indexOf(this.id);
      const newList = [...this.list];

      if (index === -1) {
        newList.push(this.id);
      } else {
        newList.splice(index, 1);
      }

      localStorage.favoriteList = JSON.stringify(newList);
      this.list = newList;
      this.judgeFavorite();

      this.$emitter.emit('favorite-reRender');
    },
  },
  created() {
    if (this.id) this.getFavoriteList();
  },
};
</script>

<template>
  <button
    type="button"
    class="btn border-0"
    :class="{ 'active': isFavorite }"
    @click="changeStatus"
  >
    <img
      class="btn-favorite-default"
      src="../assets/images/icon-favorite.svg"
      alt="喜愛清單"
    />
    <img
      class="btn-favorite-active"
      src="../assets/images/icon-favorite-active.svg"
      alt="喜愛清單"
    />
  </button>
</template>

<style lang="scss" scoped>
.btn-favorite {
  width: 35px;
  height: 35px;
}

.btn-favorite-sm {
  width: 30px;
  height: 30px;
}

.btn-favorite,
.btn-favorite-sm {
  position: relative;
  transition: all ease 0.5s;

  &-default,
  &-active {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all ease 0.5s;
  }

  &-active {
    opacity: 0;
  }

  &.active {
    transition: all ease 0.5s;
    .btn-favorite-default {
      opacity: 0;
    }

    .btn-favorite-active {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
