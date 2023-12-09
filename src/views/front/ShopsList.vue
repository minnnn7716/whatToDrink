<script>
import { mapState, mapActions } from 'pinia';
import shopStore from '@/stores/shopStore';

export default {
  methods: {
    ...mapActions(shopStore, ['getShops']),
  },
  computed: {
    ...mapState(shopStore, ['shops']),
  },
  created() {
    this.getShops();
  },
};
</script>

<template>
  <div class="allShop d-flex flex-column overflow-hidden">
    <ul class="allShop-list list-unstyled mb-0 d-flex flex-grow-1">
      <li
        class="allShop-item"
        v-for="item in shops"
        :key="`shop ${item.code}`"
      >
        <RouterLink
          class="allShop-link"
          :style="`background-color: ${item.bgColor}`"
          :to="`/shops/${item.code}`"
        >
          <img
            class="allShop-link-img"
            :src="item.imageUrl"
            :alt="item.name"
          />
          <span
            class="allShop-link-tag border-2 border"
            :class="`link-${item.textColor} border-${item.textColor}`"
          >{{ item.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.allShop-item {
  flex: 1 1 auto;
  margin: 0 -1px;

  &:first-child a::after,
  &:last-child a::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 100%;
    top: 0;
    transform: skewX(-4deg);
    background-color: inherit;
  }

  &:first-child a::after {
    left: 0;
  }

  &:last-child a::after {
    right: 0;
  }
}

.allShop-link {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: skewX(4deg);
  transition: all ease 0.5s;

  &-img,
  &-tag {
    transform: skewX(-4deg);
    transition: all ease 0.5s;
  }

  &-img {
    width: 210px;
  }

  &-tag {
    display: inline-block;
    width: 170px;
    margin-top: 16px;
    padding: 6px 0;
    text-align: center;
    letter-spacing: 0.1em;
    font-weight: 500;
    border-radius: 50px;
  }
}

.allShop-list:hover {
  .allShop-link {
    transform: skewX(0);

    &-img,
    &-tag {
      transform: skewX(0);
    }

    &-img {
      opacity: 0.3;
    }

    &-tag {
      opacity: 0.2;
    }
  }
}

.allShop-item:hover {
  .allShop-link {
    padding: 0 88px;

    &-img,
    &-tag {
      opacity: 1;
    }
  }
}
</style>
