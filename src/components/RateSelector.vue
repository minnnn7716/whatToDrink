<script>
export default {
  props: ['rate'],
  watch: {
    rate() {
      if (this.rate === '0.0') {
        const radios = this.$refs.rateSelector;
        for (let i = 0; i < radios.length; i += 1) {
          radios[i].checked = false;
        }
      }
    },
  },
  methods: {
    selectRate($event) {
      this.$emit('emit-rate', $event.target.value);
    },
  },
};
</script>

<template>
  <ul class="rateSelector list-unstyled mb-0">
    <li
      class="rateSelector-item me-1"
      v-for="item in [5, 4, 3, 2 , 1]"
      :key="`rate ${item}`"
    >
      <input
        class="rateSelector-input"
        type="radio"
        name="rating"
        :id="`rating-${item}`"
        :value="`${item}.0`"
        @click="selectRate"
        ref="rateSelector"
      />
      <label
        class="rateSelector-label"
        :for="`rating-${item}`"
      >
        <img
          class="rateSelector-img rateSelector-img-empty"
          src="@/assets/images/icon-start-empty.svg"
          :alt="`rating-empty-${item}`"
        />
        <img
          class="rateSelector-img rateSelector-img-full"
          src="@/assets/images/icon-start-full.svg"
          :alt="`rating-full-${item}`"
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

    label {
      cursor: pointer;
    }

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
