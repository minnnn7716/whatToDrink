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
    <ul class="allShop-list list-unstyled mb-3 mb-lg-0 d-flex flex-column flex-lg-row flex-grow-1">
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
            class="allShop-link-tag"
            :class="`link-${item.textColor} border-${item.textColor}`"
          >{{ item.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';

.allShop-item {
  flex: 1 1 auto;
  margin: 0 -1px;
  display: flex;
  flex-direction: column;

  @include media-breakpoint-up(lg) {
    display: block;
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
}

.allShop-link {
  flex: 1 1 0;
  height: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5s;

  @include media-breakpoint-up(lg) {
    padding: 0;
    flex-direction: column;
    transform: skewX(4deg);
  }

  &-img,
  &-tag {
    transition: all ease 0.5s;

    @include media-breakpoint-up(lg) {
      transform: skewX(-4deg);
    }
  }

  &-img {
    width: 120px;

    @include media-breakpoint-up(md) {
      width: 150px;
    }

    @include media-breakpoint-up(lg) {
      width: 210px;
    }
  }

  &-tag {
    display: inline-block;
    width: 170px;
    padding: 6px 0;
    text-align: right;
    letter-spacing: 0.1em;
    font-weight: 500;
    border-radius: 50px;

    @include media-breakpoint-up(lg) {
      border: 2px solid;
      margin-top: 16px;
      text-align: center;
    }
  }
}

@include media-breakpoint-up(lg) {
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
}
</style>
