<template>
  <button type="button" class="btn border-0">
    <img class="btn-favorite-default" src="../assets/images/icon-favorite.svg" alt="喜愛清單" />
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
    .btn-favorite-default {
      opacity: 0;
    }

    .btn-favorite-active {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
