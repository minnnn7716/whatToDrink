import { defineStore } from 'pinia';
import axios from 'axios';
import emitter from '@/methods/emitter';

export default defineStore('drinkStore', {
  state: () => ({
    drinks: [],
    sortDrinks: [],
    singleDrink: {
      price: {
        m: '',
        l: '',
      },
      calorie: {
        m: '',
        l: '',
      },
      ingredient: {
        base: [],
        mix: [],
        material: [],
      },
      shop: {
        name: '',
        size: {
          m: '',
          l: '',
        },
      },
      comments: [],
    },
    selectType: '請選擇',
    firstSelectType: false,
    wheelOptionData: {
      base: [],
      mix: [],
      material: [],
    },
  }),
  actions: {
    getDrinks() {
      const api = `${import.meta.env.VITE_API}/drinks?_expand=shop`;

      axios.get(api)
        .then((res) => {
          this.drinks = res.data;
        })
        .catch(() => {
          emitter.emit('push-message', {
            style: 'danger',
            title: '取得資料失敗',
            content: '出現系統問題，請聯絡管理員，謝謝！',
          });
        });
    },
    getDrinksShopComment() {
      const api = `${import.meta.env.VITE_API}/drinks?_expand=shop&_embed=comments`;

      axios.get(api)
        .then((res) => {
          this.drinks = res.data;
        })
        .catch(() => {
          emitter.emit('push-message', {
            style: 'danger',
            title: '取得店家評論失敗',
            content: '出現系統問題，請聯絡管理員，謝謝！',
          });
        });
    },
    getSingleDrink(drinkId) {
      const api = `${import.meta.env.VITE_API}/drinks/${drinkId}?_expand=shop&_embed=comments`;

      axios.get(api)
        .then((res) => {
          this.singleDrink = res.data;
        })
        .catch(() => {
          emitter.emit('push-message', {
            style: 'danger',
            title: '取得資料失敗',
            content: '出現系統問題，請聯絡管理員，謝謝！',
          });
        });
    },
    getSearchDrink(type, keyword) {
      const api = import.meta.env.VITE_API;
      let path = `/drinks?q=${keyword}&_expand=shop`;

      if (type === 'shops') {
        path = `/drinks?${keyword}&_expand=shop`;
      }

      axios.get(`${api}${path}`)
        .then((res) => {
          this.drinks = res.data;
          this.sortData();
        })
        .catch(() => {
          emitter.emit('push-message', {
            style: 'danger',
            title: '取得資料失敗',
            content: '出現系統問題，請聯絡管理員，謝謝！',
          });
        });
    },
    joinIngredient(ingredient) {
      const joinObjValue = Object.values(ingredient).map((item) => item.join('、'));
      const filterJoinAry = joinObjValue.filter((item) => item.length > 0).join('、');

      return filterJoinAry;
    },
    sortData(order, select = 'id') {
      if (select === 'price' || select === 'calorie') {
        this.sortDrinks = this.sortTwoSizeFn(order, select);
      } else {
        this.sortDrinks = this.sortFn(order, select);
      }
    },
    sortFn(order, select) {
      const ary = [...this.drinks];

      if (order === 'up') {
        ary.sort((a, b) => a[select] - b[select]);
      } else if (order === 'down') {
        ary.sort((a, b) => b[select] - a[select]);
      }

      return ary;
    },
    sortTwoSizeFn(order, select) {
      const ary = [...this.drinks];

      if (order === 'up') {
        ary.sort((a, b) => (a[select].m || a[select].l) - (b[select].m || b[select].l));
      } else if (order === 'down') {
        ary.sort((a, b) => (b[select].m || b[select].l) - (a[select].m || a[select].l));
      }

      return ary;
    },
    getDrinkType(data) {
      const type = [];

      for (let i = 0; i < data.length; i += 1) {
        if (type.indexOf(data[i].type) === -1) {
          type.push(data[i].type);
        }
      }

      return type;
    },
    getIngredientKind(data) {
      const ingredient = {
        base: [],
        mix: [],
        material: [],
      };
      const keys = Object.keys(ingredient);

      for (let i = 0; i < data.length; i += 1) {
        for (let e = 0; e < keys.length; e += 1) {
          for (let z = 0; z < data[i].ingredient[keys[e]].length; z += 1) {
            const keyAry = ingredient[keys[e]];
            const eachIngredient = data[i].ingredient[keys[e]][z];

            if (keyAry.indexOf(eachIngredient) === -1) {
              ingredient[keys[e]].push(eachIngredient);
            }
          }
        }
      }

      return ingredient;
    },
    getWheelOption() {
      const drinks = [...this.drinks];
      let list = {
        base: [],
        mix: [],
        material: [],
      };

      if (this.selectType === '請選擇') {
        this.wheelOptionData = list;
        return;
      }

      if (drinks.length) {
        const typeAry = this.getDrinkType(drinks);

        if (this.selectType === '隨機') {
          for (let i = 0; i < typeAry.length; i += 1) {
            list = this.getIngredientKind(drinks);
          }
        } else {
          for (let i = 0; i < typeAry.length; i += 1) {
            let filterEachType = [];
            filterEachType = drinks.filter((item) => item.type === typeAry[i]);

            list[typeAry[i]] = this.getIngredientKind(filterEachType);
          }
          list = list[this.selectType];
        }
      }

      this.wheelOptionData = list;
    },
    changeType(type) {
      if (this.selectType !== '請選擇') {
        this.firstSelectType = true;
      }

      this.selectType = type;
    },
    changeFirstSelectType(boolean) {
      this.firstSelectType = boolean;
    },
  },
  getters: {
    recommendDrinks() {
      let ary = [
        {
          id: 0,
          shopId: 0,
          name: '',
          imageUrl: '',
          price: {
            m: 0,
            l: 0,
          },
          rate: '0.0',
          shop: {
            name: '',
            code: '',
          },
          comments: [],
        },
      ];

      if (this.drinks.length) {
        ary = [...this.drinks];
        ary.sort((a, b) => b.rate - a.rate);
        ary = ary.slice(0, 5);
      }

      return ary;
    },
    typeKind() {
      const drinks = [...this.drinks];
      let type = [];

      if (drinks.length) {
        type = this.getDrinkType(drinks);
      }

      return type;
    },
  },
});
