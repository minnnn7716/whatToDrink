<template>
  <ul class="rateSelector list-unstyled mb-0">
    <li class="rateSelector-item me-1" v-for="item in 5" :key="`rate ${item}`">
      <input
        class="rateSelector-input"
        type="radio"
        :id="`rating-${item}`"
        name="rating"
        :value="item"
      />
      <label class="rateSelector-label" :for="`rating-${item}`">
        <img
          class="rateSelector-img rateSelector-img-empty"
          src="../assets/images/icon-start-empty.svg"
          alt=""
        />
        <img
          class="rateSelector-img rateSelector-img-full"
          src="../assets/images/icon-start-full.svg"
          alt=""
        />
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.rateSelector {
  display: flex;
  flex-direction: row-reverse;

  &-item {
    width: 25px;
    height: 25px;
    position: relative;
    cursor: pointer;

    &:hover {
      .rateSelector-img-full {
        opacity: 1;
      }

      & ~ li .rateSelector-img-full {
        opacity: 1;
      }
    }

    &:has(input:checked) ~ li .rateSelector-img-full,
    input:checked ~ label .rateSelector-img-full {
      opacity: 1;
    }
  }

  &-input {
    display: none;
  }

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;

    &-full {
      opacity: 0;
    }
  }
}
</style>
