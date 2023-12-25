<script>
import RateDisplay from './RateDisplay.vue';
import FavoriteBtn from './FavoriteBtn.vue';

export default {
  data() {
    return {
      tableModeData: [
        {
          id: 0,
          shopId: 0,
          name: '',
          imageUrl: '',
          price: {
            m: 0,
            l: 0,
          },
          special: [],
          caffeine: '',
          rate: '0.0',
          shop: {
            name: '',
            code: '',
          },
        },
      ],
    };
  },
  components: {
    RateDisplay,
    FavoriteBtn,
  },
  props: {
    propsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    propsData: {
      handler() {
        this.tableModeData = this.propsData;
        console.log('tabel 資料變更');
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    imgUrl(item, fileName) {
      const url = new URL(`../assets/images/${fileName}${item}.svg`, import.meta.url);
      return url;
    },
    judgeSpecialImg(str) {
      const obj = {
        店家推薦: 'recommend',
        僅限冷飲: 'cold',
        僅限熱飲: 'hot',
        無咖啡因: 'noCaffeine',
        固定糖冰: 'fixed',
        固定微冰: 'fixed',
        固定三分糖: 'fixed',
        固定少冰: 'fixed',
        固定無糖: 'fixed',
        期間限定: 'limited',
        季節限定: 'limited',
      };

      return this.imgUrl(obj[str], 'icon-special-');
    },
  },
};
</script>
<template>
  <div class="table-responsive">
    <table class="table align-middle table-hover mb-0">
      <thead>
        <tr>
          <th class="ps-6 py-3 py-md-4 bg-primary">品名</th>
          <th class="py-3 py-md-4 bg-primary text-center">店家</th>
          <th class="py-3 py-md-4 bg-primary text-center">價錢</th>
          <th class="th-rate py-3 py-md-4 bg-primary text-center">評價</th>
          <th class="py-3 py-md-4 bg-primary text-center d-none d-md-table-cell">咖啡因</th>
          <th class="th-special py-3 py-md-4 bg-primary"><span class="invisible">特點</span></th>
          <th class="py-3 py-md-4 bg-primary" width="60"><span class="invisible">喜愛</span></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in tableModeData"
          :key="`tableMode ${item.id}`"
        >
          <td class="ps-6 py-6">
            <RouterLink
              :to="`/drink/${item.id}`"
              class="link-secondary-600 fw-medium"
            >
              {{ item.name }}
            </RouterLink>
          </td>
          <td class="py-6 text-center">
            <RouterLink
              :to="`/shops/${item.shop.code}`"
              class="link-accent-600 fw-medium"
            >
              {{ item.shop.name }}
            </RouterLink>
          </td>
          <td class="py-6 text-center fw-medium">
            <span v-if="item.price.m">M ${{ item.price.m }}</span>
            <span v-if="item.price.m && item.price.l"> ｜ </span>
            <span v-if="item.price.l">L ${{ item.price.l }}</span>
          </td>
          <td class="py-6">
            <div class="d-flex justify-content-center">
              <RouterLink
                :to="{ path: `/drink/${item.id}`, hash: '#drink-comments' }"
              >
                <RateDisplay
                  class="d-none d-md-flex rateDisplay-sm hasSansText"
                  :rate="item.rate"
                />
                <div class="d-flex d-md-none align-items-center">
                  <img
                    class="menu-starImg me-1 me-md-2"
                    :src="imgUrl(item.rate ? 'full' : 'empty', 'icon-star-')"
                    alt="star"
                  />

                  <p class="fs-normal1 fs-md-6 font-handwriting mb-minus1">
                    {{ item.rate ? item.rate : '0' }}
                  </p>
                </div>
              </RouterLink>
            </div>
          </td>
          <td class="py-6 text-center d-none d-md-table-cell">
            {{ !item.caffeine ? '無咖啡因' : item.caffeine }}
          </td>
          <td class="py-6">
            <ul class="list-unstyled mb-0 d-flex justify-content-center">
              <li
                v-for="(special, index) in item.special"
                :key="`${item.id} ${special}`"
              >
                <img
                  :class="{ 'me-2': index != item.special.length - 1}"
                  :src="judgeSpecialImg(special)"
                  :alt="special"
                />
              </li>
            </ul>
          </td>
          <td class="py-6 text-end">
            <FavoriteBtn
              class="btn-favorite"
              :id="item.id"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/vendors/bootstrap';

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

.th{
  &-rate {
    width: auto;

    @include media-breakpoint-up(md) {
      width: 180px;
    }
  }

  &-special{
    @include media-breakpoint-up(md) {
      width: 150px;
    }
  }
}

.table {
    width: max-content;

    @include media-breakpoint-up(md) {
      width: 100%;
    }
  }
</style>
