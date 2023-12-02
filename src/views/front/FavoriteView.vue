<script>
import SearchTableMode from '../../components/SearchTableMode.vue';

export default {
  components: {
    SearchTableMode,
  },
};
</script>

<template>
  <div class="container pt-20 pb-15">
    <div class="row">
      <div class="col-10 col-3xl-12 mx-auto">
        <div class="menu px-6 py-8 border border-3 border-secondary-600 rounded-4">
          <h2 class="fs-3 fw-bold d-flex align-items-center text-accent mb-6">
            <img class="me-2" src="../../assets/images/icon-favorite-active.svg">
            收藏清單</h2>
          <SearchTableMode />
          <ul class="menu-list list-unstyled mb-0">
            <li>
              <button type="button" class="menu-btn active">
                <span>全部飲品</span>
              </button>
            </li>
            <li>
              <button type="button" class="menu-btn">
                <span>純茶</span>
              </button>
            </li>
            <li>
              <button type="button" class="menu-btn">
                <span>特調茶</span>
              </button>
            </li>
            <li>
              <button type="button" class="menu-btn">
                <span>奶系列</span>
              </button>
            </li>
            <li>
              <button type="button" class="menu-btn">
                <span>果汁</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
