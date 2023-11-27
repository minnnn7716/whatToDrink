<template>
  <button type="button" class="btn btn-favorite border-0">
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
  position: relative;
  width: 35px;
  height: 35px;
  transition: all ease 0.5s;

  &-default,
  &-active {
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
