import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('drinkStore', {
  state: () => ({
    drinks: [],
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
    joinIngredient(ingredient) {
      const joinObjValue = Object.values(ingredient).map((item) => item.join('、'));
      const filterJoinAry = joinObjValue.filter((item) => item.length > 0).join('、');

      return filterJoinAry;
    },
  },
});
