<script>
import SwitchBtnGroup from './SwitchBtnGroup.vue';

export default {
  data() {
    return {
      listShow: false,
      options: {
        // 店家: 'shopId',
        價錢: 'price',
        總評價: 'rate',
        熱量: 'calorie',
        咖啡因: 'caffeine',
      },
      order: '',
    };
  },
  components: {
    SwitchBtnGroup,
  },
  props: ['propsSortSelect'],
  emits: ['sort-select', 'sort-order'],
  watch: {
    listShow() {
      if (this.listShow) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    },
    order() {
      this.$emit('sort-order', this.order);
    },
  },
  methods: {
    toggleList() {
      this.listShow = !this.listShow;
    },
    changeSortItem(item) {
      let select = this.propsSortSelect;

      if (select === item) {
        select = false;
      } else {
        select = item;
      }

      this.listShow = false;
      this.$emit('sort-select', select);
    },
  },
};
</script>
<template>
  <div class="sortComponent">
    <button
      type="button"
      class="sortComponent-btn btn"
      :class="{ 'active': propsSortSelect }"
      @click="toggleList"
    >
    <img
        :src="`/src/assets/images/icon-sort-${order}.svg`"
        :alt="order"
      />
    </button>
    <div
      class="sortComponent-list-container"
      :class="{ 'show': listShow }"
    >
      <ul class="sortComponent-list list-unstyled">
        <li
          v-for="item in Object.keys(options)"
          :key="`sort ${item}`"
        >
          <button
            type="button"
            class="sortComponent-list-item"
            :class="{ 'active': item === propsSortSelect }"
            @click="changeSortItem([item, options[item]])"
          >
            {{ item }}
          </button>
        </li>
        <li>
          <SwitchBtnGroup
            class="switchBtnGroup-primary switchBtnGroup-icon-sm"
            @emit-btn="(i) => order = i"
          >
            <template v-slot:start>
              <img src="@/assets/images/icon-sort-down.svg" alt="遞減" data-name="down" />
            </template>
            <template v-slot:end>
              <img src="@/assets/images/icon-sort-up.svg" alt="遞增" data-name="up" />
            </template>
          </SwitchBtnGroup>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="sortComponent-bg"
    :class="{ 'show': listShow }"
    @click.self="listShow = false"
  />
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
.sortComponent {
  position: relative;
  z-index: 100;
  aspect-ratio: 1 / 1;
  height: 100%;

  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: $primary;
    transition: all ease .3s;

    &:not(.active):hover {
      background-color: $primary-600;
      border: 1px solid #000;
    }

    &:active {
      background-color: $primary;
    }

    &.active,
    &.active:active {
      background-color: $accent-300;

      &:hover {
        background-color: $accent;
      }
    }
  }

  &-list-container {
    position: absolute;
    max-height: 0;
    overflow: hidden;
    transition: all ease 0.5s;

    &.show {
      max-height: 350px;
    }
  }

  &-list {
    width: max-content;
    margin-top: 12px;
    padding: 8px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

    &-item {
      display: block;
      width: 100%;
      padding: 6px 0;
      margin-bottom: 8px;
      font-size: $h6-font-size;
      font-weight: 500;
      text-align: center;
      border: 1px solid #000;
      border-radius: 50px;
      background: $secondary-300;

      &:hover {
        background-color: $secondary;
        color: #000;
      }

      &.active {
        background-color: $accent-300;
      }
    }
  }
}

.sortComponent-bg {
  position: fixed;
  z-index: -1;
  right: 0;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: transparent;
  transition: all ease .5s;

  &.show {
    z-index: 10;
    background-color: #00000030;
  }
}
</style>
