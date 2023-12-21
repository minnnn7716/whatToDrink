<script>
import { Collapse } from 'bootstrap';

export default {
  data() {
    return {
      active: false,
      collapse: '',
    };
  },
  watch: {
    $route() {
      this.judgeActive();
    },
  },
  methods: {
    judgeActive() {
      const ary = ['/shops', '/#index-type', '/wheel', '/favorites'];
      const path = this.$route.fullPath;

      if (ary.indexOf(path) === -1) {
        this.active = false;
      } else {
        this.active = path;
      }
    },
    toggleCollapse() {
      this.collapse.toggle();
    },
    routerPush(path) {
      this.$router.push(path);
      this.collapse.hide();
    },
  },
  created() {
    this.judgeActive();
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });

    this.collapse.hide();
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <h1>
        <a
          href="#"
          class="navbar-brand"
          @click.prevent="routerPush('/')"
        >
          What <br />
          to Drink
        </a>
      </h1>
      <button
        class="navbar-toggler border-0"
        type="button"
        @click="toggleCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" ref="collapse">
        <ul class="navbar-nav ms-auto me-0 me-md-8 mb-0 mb-md-2 mb-lg-0 justify-content-center">
          <li class="nav-item my-5 my-md-0">
            <RouterLink
              to="/shops"
              class="nav-link px-4 d-none d-md-inline-block"
              :class="{ 'active': active === '/shops' }"
            >
              全部店家
            </RouterLink>
            <a
              href="#"
              class="nav-link-sm d-md-none text-secondary-700"
              :class="{
                'active': active === '/shops',
                'others': active && active !== '/shops',
              }"
              @click.prevent="routerPush('/shops')"
            >
              <p class="font-handwriting fs-2">Shops</p>
              <p>全部店家</p>
            </a>
          </li>
          <li class="nav-item my-5 my-md-0">
            <RouterLink
              to="/#index-type"
              class="nav-link px-4 d-none d-md-inline-block"
              :class="{ 'active': active === '/#index-type' }"
            >
              四大種類
            </RouterLink>
            <a
              href="#"
              class="nav-link-sm d-md-none text-secondary-700"
              :class="{
                'active': active === '/#index-type',
                'others': active && active !== '/#index-type',
              }"
              @click.prevent="routerPush('/#index-type')"
            >
              <p class="font-handwriting fs-2">Categories</p>
              <p>四大種類</p>
            </a>
          </li>
          <li class="nav-item my-5 my-md-0">
            <RouterLink
              to="/wheel"
              class="nav-link px-4 d-none d-md-inline-block"
              :class="{ 'active': active === '/wheel' }"
            >
              轉吧轉吧
            </RouterLink>
            <a
              href="#"
              class="nav-link-sm d-md-none text-secondary-700"
              :class="{
                'active': active === '/wheel',
                'others': active && active !== '/wheel',
              }"
              @click.prevent="routerPush('/wheel')"
            >
              <p class="font-handwriting fs-2">Spin, Spin</p>
              <p>轉吧轉吧</p>
            </a>
          </li>
          <li class="nav-item my-5 my-md-0">
            <RouterLink
              to="/about"
              class="nav-link px-4 d-none d-md-inline-block"
              :class="{ 'active': active === '/about' }"
            >
              關於我們
            </RouterLink>
            <a
              href="#"
              class="nav-link-sm d-md-none text-secondary-700"
              :class="{
                'active': active === '/about',
                'others': active && active !== '/about',
              }"
              @click.prevent="routerPush('/about')"
            >
              <p class="font-handwriting fs-2">About</p>
              <p>關於我們</p>
            </a>
          </li>
          <li class="d-flex align-items-center  justify-content-end
          justify-content-md-center ms-md-3 my-5 my-md-0">
            <RouterLink
              to="/favorites"
              class="btn-custom btn-hoverSwitch d-none d-md-inline-block">
              <img
                class="btn-hoverSwitch-default"
                src="@/assets/images/icon-favorite.svg"
                alt="喜愛清單"
              />
              <img
                class="btn-hoverSwitch-active"
                src="@/assets/images/icon-favorite-active.svg"
                alt="喜愛清單"
              />
            </RouterLink>
            <a
              href="#"
              class="nav-link-sm nav-item d-md-none text-accent-700 flex-grow-1"
              :class="{
                'active': active === '/favorites',
                'others': active && active !== '/favorites',
              }"
              @click.prevent="routerPush('/favorites')"
            >
              <p class="font-handwriting fs-2">Favorite</p>
              <p>喜愛飲品</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';
.navbar {
  background: transparent;
  transition: all ease .5s;

  &-brand {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    padding: 44px 24px 16px 24px;
    background-color: $primary;
    font-size: $h3-font-size;
    font-family: $font-family-handwriting;
    font-weight: 600;
    transition: all ease .5s;

    @include media-breakpoint-up(md) {
      left: 48px;
      transform: translateX(0);
    }

    @include media-breakpoint-up(lg) {
      &:hover {
        border: 1px solid #000;
        box-shadow: 4px 4px 0 $gray-900;
      }
    }
  }

  &-toggler {
    opacity: 0;
    pointer-events: none;
  }

  &-collapse {
    margin: 6px -20px -20px -20px;
    @include media-breakpoint-up(md) {
      margin: 0;
    }
  }
}

.nav-item {
  opacity: 0;
}

.nav-link {
  pointer-events: none;
  letter-spacing: 3px;
  transition: all ease 0.3s;
  &:hover {
    letter-spacing: 1px;
    margin: 0 4px;
  }

  &.active {
    font-weight: 500;
  }
}

.nav-link-sm {
  position: relative;
  display: block;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 26px;
    background: center / cover no-repeat url('@/assets/images/icon-nav-active.svg') ;
    opacity: 0;
  }

  &.active {
    color: $primary-700 !important;
    &::before {
      opacity: 1;
    }
  }

  &.others {
    color: $gray-700 !important;
  }
}

.showNav {
  background-color: #fff;
  border-bottom: 1px solid #000;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);

  .navbar {
    &-brand {
      left:16px;
      padding: 20px 16px 6px 16px;
      transform: translateX(0);
      font-size: $h5-font-size;
      border: 1px solid #000;
      box-shadow: 3px 3px 0 $gray-900;

      @include media-breakpoint-up(md) {
        left: 48px;
        padding: 44px 24px 16px 24px;
        font-size: $h3-font-size;
        box-shadow: 4px 4px 0 $gray-900;

        &:hover {
          top: -1px;
          left: 52px;
          transform: translateX(0);
          box-shadow: 0 0 0 $gray-900;
        }
      }
    }

    &-toggler {
      opacity: 1;
      pointer-events: auto;
    }

    &-nav {
      height: calc(100vh - 52px);
      padding: 0 32px;
      background: $gray-100;
      text-align: right;
      border-top: 1px solid #000;
      box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.15);

      @include media-breakpoint-up(md) {
        height: fit-content;
        padding: 0;
        background: transparent;
        text-align: center;
        border-top: none;
        box-shadow: none;
      }
    }
  }

  .nav-item {
    opacity: 1;
  }

  .nav-link {
    pointer-events: auto;
  }
}
</style>
