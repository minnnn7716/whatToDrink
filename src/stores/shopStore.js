import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('shopStore', {
  state: () => ({
    shops: [],
    singleShop: {
      drinks: [],
    },
    selectType: '全部飲品',
  }),
  actions: {
    getShops() {
      const api = `${import.meta.env.VITE_API}/shops`;

      axios.get(api)
        .then((res) => {
          console.log(res);
          this.shops = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSingleShop(shopCode) {
      const api = `${import.meta.env.VITE_API}/shops?code=${shopCode}&_embed=drinks&_embed=comments`;

      axios.get(api)
        .then((res) => {
          const [shopData] = res.data;
          this.singleShop = shopData;
        });
    },
    changeType(type) {
      this.selectType = type;
    },
  },
  getters: {
    drinks() {
      return [...this.singleShop.drinks];
    },
    filterCustomType() {
      const typeObj = [];

      this.drinks.forEach((i) => {
        if (typeObj.indexOf(i.type) === -1) {
          typeObj.push(i.type);
        }
      });

      typeObj.unshift('全部飲品');

      return typeObj;
    },
    filterMenu() {
      const menuObj = {};

      if (this.selectType === '全部飲品') {
        this.drinks.forEach((i) => {
          if (!Object.prototype.hasOwnProperty.call(menuObj, i.menuType)) {
            const shopMenuType = i.menuType;
            menuObj[shopMenuType] = this.drinks.filter((e) => e.menuType === shopMenuType);
          }
        });
      } else {
        menuObj[this.selectType] = this.drinks.filter((item) => item.type === this.selectType);
      }

      return menuObj;
    },
    shopRateScore() {
      const ary = this.drinks.map((item) => item.rate).filter((item) => item !== false);
      const score = (ary.reduce((a, b) => Number(a) + Number(b), 0) / ary.length).toFixed(1);

      return score;
    },
  },
});
