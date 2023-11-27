<script>
import SwitchBtnGroup from '../../components/SwitchBtnGroup.vue'

export default {
  components: {
    SwitchBtnGroup
  }
}
</script>
<template>
  <div class="sortComponent">
    <button type="button" class="sortComponent-btn btn">
      <img src="../../assets/images/icon-sort-up.svg" alt="遞減排序" />
    </button>
    <div class="sortComponent-list-container">
      <ul class="sortComponent-list list-unstyled">
        <li>
          <a class="sortComponent-list-item" href="#">店家</a>
        </li>
        <li>
          <a class="sortComponent-list-item" href="#">價錢</a>
        </li>
        <li>
          <a class="sortComponent-list-item" href="#">總評價</a>
        </li>
        <li>
          <a class="sortComponent-list-item" href="#">熱量</a>
        </li>
        <li>
          <a class="sortComponent-list-item" href="#">咖啡因</a>
        </li>
        <li>
          <SwitchBtnGroup class="switchBtnGroup-primary switchBtnGroup-icon-sm">
            <template v-slot:start>
              <img src="../../assets/images/icon-sort-down.svg" alt="遞增模式" />
            </template>
            <template v-slot:end>
              <img src="../../assets/images/icon-sort-up.svg" alt="遞減模式" />
            </template>
          </SwitchBtnGroup>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/vendors/bootstrap';
.sortComponent {
  position: relative;
  aspect-ratio: 1 / 1;
  height: 100%;

  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: $primary;

    &:not(.active):hover {
      background-color: $primary-600;
      border: 1px solid #000;
    }

    &.active {
      background-color: $accent;
    }
  }

  &-list-container {
    position: absolute;
    z-index: 50;
    max-height: 0;
    overflow: hidden;
    transition: all ease 0.5s;

    &.show {
      max-height: 350px;
    }
  }

  &-list {
    width: max-content;
    margin-top: 12px;
    padding: 8px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

    &-item {
      display: block;
      padding: 6px 0;
      margin-bottom: 8px;
      font-size: $h6-font-size;
      font-weight: 500;
      text-align: center;
      border: 1px solid #000;
      border-radius: 50px;
      background: $secondary-300;

      &:hover {
        background-color: $secondary;
        color: #000;
      }

      &.active {
        background-color: $accent-300;
      }
    }
  }
}
</style>
