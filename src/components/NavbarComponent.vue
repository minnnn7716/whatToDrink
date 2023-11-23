<template>
  <nav class="navbar navbar-expand-lg fixed-top show">
    <div class="container-fluid">
      <h1>
        <RouterLink to="/" class="navbar-brand fs-3"
          >What <br />
          to Drink</RouterLink
        >
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-8 mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/shops" class="nav-link px-4 active">全部店家</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'Home', hash: '#index-type' }" class="nav-link px-4"
              >四大種類</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/wheel" class="nav-link px-4">轉吧轉吧</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link px-4">關於我們</RouterLink>
          </li>
          <li class="d-flex align-items-center ms-3">
            <RouterLink to="/favorites" class="btn-custom btn-hoverSwitch">
              <img
                class="btn-hoverSwitch-default"
                src="../assets/images/icon-favorite.svg"
                alt="喜愛清單"
              />
              <img
                class="btn-hoverSwitch-active"
                src="../assets/images/icon-favorite-active.svg"
                alt="喜愛清單"
              />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
.navbar {
  background: transparent;

  &-brand {
    position: absolute;
    top: -5px;
    left: 0;
    margin-left: 48px;
    padding: 44px 24px 16px 24px;
    background-color: $primary;
    font-family: $font-family-handwriting;
    font-weight: 600;

    &:hover {
      border: 1px solid #000;
      box-shadow: 4px 4px 0 $gray-900;
    }
  }
}

.nav-link {
  opacity: 0;
  letter-spacing: 3px;
  transition: all ease 0.3s;
  &:hover {
    letter-spacing: 1px;
    margin: 0 4px;
  }
}
.show {
  background-color: #fff;
  border-bottom: 1px solid #000;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);

  .navbar-brand {
    border: 1px solid #000;
    box-shadow: 4px 4px 0 $gray-900;
    transition: all ease 0.3s;

    &:hover {
      left: 4px;
      top: -1px;
      box-shadow: 0 0 0 $gray-900;
    }
  }

  .nav-link {
    opacity: 1;
  }
}
</style>
