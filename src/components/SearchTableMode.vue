<script>
import RateDisplay from './RateDisplay.vue'
import FavoriteBtn from './FavoriteBtn.vue'

export default {
  components: {
    RateDisplay,
    FavoriteBtn
  }
}
</script>
<template>
  <div class="table-responsive">
    <table class="table align-middle table-hover">
      <thead>
        <tr>
          <th class="ps-6 py-4 bg-primary">品名</th>
          <th class="py-4 bg-primary text-center">店家</th>
          <th class="py-4 bg-primary text-center">價錢</th>
          <th class="py-4 bg-primary text-center" width="180">評價</th>
          <th class="py-4 bg-primary text-center">熱量</th>
          <th class="py-4 bg-primary text-center">咖啡因</th>
          <th class="py-4 bg-primary" width="150"><span class="invisible">特點</span></th>
          <th class="py-4 bg-primary" width="60"><span class="invisible">喜愛</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="ps-6 py-6">
            <a href="#" class="link-secondary-600 fw-medium">珍珠鮮奶茶</a>
          </td>
          <td class="py-6 text-center">
            <a href="#" class="link-accent-600 fw-medium">五十嵐</a>
          </td>
          <td class="py-6 text-center fw-medium">M $50 ｜ L $60</td>
          <td class="py-6">
            <div class="d-flex justify-content-center">
              <RateDisplay class="rateDisplay-sm hasSansText"></RateDisplay>
            </div>
          </td>
          <td class="py-6 text-center">569 大卡</td>
          <td class="py-6 text-center">19mg</td>
          <td class="py-6">
            <ul class="list-unstyled mb-0 d-flex justify-content-center">
              <li>
                <img class="me-2" src="../assets/images/icon-special-cold.svg" alt="僅限冷飲" />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-recommend.svg"
                  alt="店家推薦"
                />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-noCaffeien.svg"
                  alt="無咖啡因"
                />
              </li>
              <li>
                <img src="../assets/images/icon-special-fire.svg" alt="僅限熱飲" />
              </li>
            </ul>
          </td>
          <td class="py-6 text-end"><FavoriteBtn class="btn-favorite" /></td>
        </tr>
        <tr>
          <td class="ps-6 py-6">
            <a href="#" class="link-secondary-600 fw-medium">珍珠鮮奶茶</a>
          </td>
          <td class="py-6 text-center">
            <a href="#" class="link-accent-600 fw-medium">五十嵐</a>
          </td>
          <td class="py-6 text-center fw-medium">M $50 ｜ L $60</td>
          <td class="py-6">
            <div class="d-flex justify-content-center">
              <RateDisplay class="rateDisplay-sm hasSansText"></RateDisplay>
            </div>
          </td>
          <td class="py-6 text-center">569 大卡</td>
          <td class="py-6 text-center">19mg</td>
          <td class="py-6">
            <ul class="list-unstyled mb-0 d-flex justify-content-center">
              <li>
                <img class="me-2" src="../assets/images/icon-special-cold.svg" alt="僅限冷飲" />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-recommend.svg"
                  alt="店家推薦"
                />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-noCaffeien.svg"
                  alt="無咖啡因"
                />
              </li>
              <li>
                <img src="../assets/images/icon-special-fire.svg" alt="僅限熱飲" />
              </li>
            </ul>
          </td>
          <td class="py-6 text-end"><FavoriteBtn class="btn-favorite" /></td>
        </tr>
        <tr>
          <td class="ps-6 py-6">
            <a href="#" class="link-secondary-600 fw-medium">珍珠鮮奶茶</a>
          </td>
          <td class="py-6 text-center">
            <a href="#" class="link-accent-600 fw-medium">五十嵐</a>
          </td>
          <td class="py-6 text-center fw-medium">M $50 ｜ L $60</td>
          <td class="py-6">
            <div class="d-flex justify-content-center">
              <RateDisplay class="rateDisplay-sm hasSansText"></RateDisplay>
            </div>
          </td>
          <td class="py-6 text-center">569 大卡</td>
          <td class="py-6 text-center">19mg</td>
          <td class="py-6">
            <ul class="list-unstyled mb-0 d-flex justify-content-center">
              <li>
                <img class="me-2" src="../assets/images/icon-special-cold.svg" alt="僅限冷飲" />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-recommend.svg"
                  alt="店家推薦"
                />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-noCaffeien.svg"
                  alt="無咖啡因"
                />
              </li>
              <li>
                <img src="../assets/images/icon-special-fire.svg" alt="僅限熱飲" />
              </li>
            </ul>
          </td>
          <td class="py-6 text-end"><FavoriteBtn class="btn-favorite" /></td>
        </tr>
        <tr>
          <td class="ps-6 py-6">
            <a href="#" class="link-secondary-600 fw-medium">珍珠鮮奶茶</a>
          </td>
          <td class="py-6 text-center">
            <a href="#" class="link-accent-600 fw-medium">五十嵐</a>
          </td>
          <td class="py-6 text-center fw-medium">M $50 ｜ L $60</td>
          <td class="py-6">
            <div class="d-flex justify-content-center">
              <RateDisplay class="rateDisplay-sm hasSansText"></RateDisplay>
            </div>
          </td>
          <td class="py-6 text-center">569 大卡</td>
          <td class="py-6 text-center">19mg</td>
          <td class="py-6">
            <ul class="list-unstyled mb-0 d-flex justify-content-center">
              <li>
                <img class="me-2" src="../assets/images/icon-special-cold.svg" alt="僅限冷飲" />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-recommend.svg"
                  alt="店家推薦"
                />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-noCaffeien.svg"
                  alt="無咖啡因"
                />
              </li>
              <li>
                <img src="../assets/images/icon-special-fire.svg" alt="僅限熱飲" />
              </li>
            </ul>
          </td>
          <td class="py-6 text-end"><FavoriteBtn class="btn-favorite" /></td>
        </tr>
        <tr>
          <td class="ps-6 py-6">
            <a href="#" class="link-secondary-600 fw-medium">珍珠鮮奶茶</a>
          </td>
          <td class="py-6 text-center">
            <a href="#" class="link-accent-600 fw-medium">五十嵐</a>
          </td>
          <td class="py-6 text-center fw-medium">M $50 ｜ L $60</td>
          <td class="py-6">
            <div class="d-flex justify-content-center">
              <RateDisplay class="rateDisplay-sm hasSansText"></RateDisplay>
            </div>
          </td>
          <td class="py-6 text-center">569 大卡</td>
          <td class="py-6 text-center">19mg</td>
          <td class="py-6">
            <ul class="list-unstyled mb-0 d-flex justify-content-center">
              <li>
                <img class="me-2" src="../assets/images/icon-special-cold.svg" alt="僅限冷飲" />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-recommend.svg"
                  alt="店家推薦"
                />
              </li>
              <li>
                <img
                  class="me-2"
                  src="../assets/images/icon-special-noCaffeien.svg"
                  alt="無咖啡因"
                />
              </li>
              <li>
                <img src="../assets/images/icon-special-fire.svg" alt="僅限熱飲" />
              </li>
            </ul>
          </td>
          <td class="py-6 text-end"><FavoriteBtn class="btn-favorite" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/vendors/bootstrap';

th {
  border-bottom: none;
  &:first-child {
    border-radius: 50px 0 0 50px;
  }

  &:last-child {
    border-radius: 0 50px 50px 0;
  }
}

td {
  border-bottom: 1px solid $gray-custom-300;
}
</style>
