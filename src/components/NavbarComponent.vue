<template>
  <nav class="navbar navbar-expand-lg scrollDown">
    <div class="container-fluid">
      <h1>
        <a
          class="navbar-brand ms-12 pt-11 pb-4 px-6 bg-primary font-handwriting fs-3 fw-bold"
          href="#"
          >What <br />
          to Drink</a
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
            <a class="nav-link px-4 active" href="#">全部店家</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-4" href="#">四大種類</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-4" href="#">轉吧轉吧</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-4" href="#">關於我們</a>
          </li>
          <li class="d-flex align-items-center ms-3">
            <a class="btn-custom btn-hoverSwitch" href="#">
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
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';
.navbar-brand {
  position: absolute;
  top: -5px;
  left: 0;
}

.nav-link {
  letter-spacing: 3px;
  transition: all ease 0.3s;
  &:hover {
    letter-spacing: 1px;
    margin: 0 4px;
  }
}
.scrollDown {
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
}
</style>
