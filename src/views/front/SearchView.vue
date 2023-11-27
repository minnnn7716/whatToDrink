<script>
import SearchBar from '../../components/SearchBar.vue'
import SwitchBtnGroup from '../../components/SwitchBtnGroup.vue'
import SortComponent from './SortComponent.vue'
import SearchImageMode from '../../components/SearchImageMode.vue'
import SearchTableMode from '../../components/SearchTableMode.vue'

export default {
  components: {
    SearchBar,
    SwitchBtnGroup,
    SortComponent,
    SearchImageMode,
    SearchTableMode
  }
}
</script>

<template>
  <div class="container pt-20">
    <div class="row">
      <div class="col-10 col-3xl-12 mx-auto">
        <div class="d-flex mb-5">
          <SearchBar class="searchBar-border me-3" />
          <SwitchBtnGroup class="switchBtnGroup-primary switchBtnGroup-icon me-3">
            <template v-slot:start>
              <img src="../../assets/images/icon-mode-list.svg" alt="列表模式" />
            </template>
            <template v-slot:end>
              <img src="../../assets/images/icon-mode-block.svg" alt="圖表模式" />
            </template>
          </SwitchBtnGroup>
          <SortComponent />
        </div>
        <div class="d-flex align-items-center justify-content-between mb-10">
          <p class="fs-5 fw-bold">找到 30 個符合「珍珠」的飲料</p>
          <div
            class="w-fit d-flex align-items-center py-1 ps-6 pe-2 bg-accent-300 border border-black rounded-pill"
          >
            <p class="fw-bold">目前依照「熱量」遞減排序</p>
            <button type="button" class="btn btn-hoverScale border-0 d-flex align-items-center">
              <img src="../../assets/images/icon-error.svg" alt="關閉" />
            </button>
          </div>
        </div>
        <div class="pb-15">
          <SearchImageMode />
        </div>
        <div class="d-none pb-10">
          <SearchTableMode />
        </div>
      </div>
    </div>
  </div>
</template>
