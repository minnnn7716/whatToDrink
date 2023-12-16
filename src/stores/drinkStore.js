import { defineStore } from 'pinia';
import axios from 'axios';

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
  }),
  actions: {
    getDrinks() {
      const api = `${import.meta.env.VITE_API}/drinks?_expand=shop`;

      axios.get(api)
        .then((res) => {
          console.log(res);
          this.drinks = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDrinksShopComment() {
      const api = `${import.meta.env.VITE_API}/drinks?_expand=shop&_embed=comments`;

      axios.get(api)
        .then((res) => {
          console.log(res);
          this.drinks = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSingleDrink(drinkId) {
      const api = `${import.meta.env.VITE_API}/drinks/${drinkId}?_expand=shop&_embed=comments`;

      axios.get(api)
        .then((res) => {
          console.log(res);
          this.singleDrink = res.data;
        })
        .catch((err) => {
          console.log(err);
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
          console.log(res);
          this.drinks = res.data;
          this.sortData();
        })
        .catch((err) => {
          console.log(err);
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
      console.log('sortFn');
      const ary = [...this.drinks];

      if (order === 'up') {
        ary.sort((a, b) => a[select] - b[select]);
      } else if (order === 'down') {
        ary.sort((a, b) => b[select] - a[select]);
      }

      return ary;
    },
    sortTwoSizeFn(order, select) {
      console.log('sortTwoSizeFn');
      const ary = [...this.drinks];

      if (order === 'up') {
        ary.sort((a, b) => (a[select].m || a[select].l) - (b[select].m || b[select].l));
      } else if (order === 'down') {
        ary.sort((a, b) => (b[select].m || b[select].l) - (a[select].m || a[select].l));
      }

      return ary;
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
  },
});
