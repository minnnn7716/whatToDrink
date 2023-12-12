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
    rateGroup: {},
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
          this.getRateGroupInfo();
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
    getRateGroupInfo() {
      const comments = [...this.singleDrink.comments];
      const commentsNum = comments.length;
      const totalRateScore = this.totalRateScore();
      const eachRateNum = [];

      for (let i = 1; i <= 5; i += 1) {
        eachRateNum.push(this.eachRateLength(i));
      }

      this.rateGroup = {
        commentsNum,
        totalRateScore,
        eachRateNum,
      };
    },
    eachRateLength(rate) {
      const comments = [...this.singleDrink.comments];
      return comments.filter((item) => +item.rate === rate).length;
    },
    totalRateScore() {
      const comments = [...this.singleDrink.comments];
      let score = '0.0';

      if (comments.length) {
        const rateAry = comments.map((item) => +item.rate);
        score = (rateAry.reduce((a, b) => a + b, 0) / rateAry.length).toFixed(1);
      }

      return score;
    },
  },
  getters: {
    filterComments() {
      const comments = [...this.singleDrink.comments];
      let filterAry = [];

      if (!this.pinRate) {
        filterAry = comments;
      } else {
        filterAry = comments.filter((item) => +item.rate === this.pinRate);
      }

      return filterAry;
    },
  },
});
