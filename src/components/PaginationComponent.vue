<script>
export default {
  props: ['pagination'],
  methods: {
    emitPage(currentPage) {
      this.$emit('emit-page', currentPage);
    },
  },
};
</script>

<template>
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          :class="{ 'disabled': !pagination.prev }"
          href="#"
          @click.prevent="emitPage('prev')"
        >
          Previous
        </a>
      </li>
      <li
        class="page-item"
        v-for="item in pagination.total"
        :key="`pagination ${item}`"
      >
        <a
          class="page-link"
          :class="{ 'active': item === pagination.current }"
          href="#"
          @click.prevent="emitPage(item)"
        >
          {{ item }}
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="{ 'disabled': !pagination.next }"
          href="#"
          @click.prevent="emitPage('next')"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>
