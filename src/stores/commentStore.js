import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('commentStore', {
  state: () => ({
    comments: [],
    rateGroup: {},
    pinRate: false,
    pagination: {},
    sortComments: [],
  }),
  actions: {
    getComments() {
      const api = `${import.meta.env.VITE_API}/comments`;

      axios.get(api)
        .then((res) => {
          console.log(res);
          this.comments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clickPin(rate) {
      if (this.pinRate === rate) {
        this.pinRate = false;

        return;
      }

      this.pinRate = rate;
    },
    getRateGroupInfo(comments) {
      if (comments) {
        const commentsNum = comments.length;
        const totalRateScore = this.totalRateScore(comments);
        const eachRateNum = [];

        for (let i = 1; i <= 5; i += 1) {
          eachRateNum.push(this.eachRateLength(comments, i));
        }

        this.rateGroup = {
          commentsNum,
          totalRateScore,
          eachRateNum,
        };
      }
    },
    eachRateLength(comments, rate) {
      return comments.filter((item) => +item.rate === rate).length;
    },
    totalRateScore(comments) {
      let score = '0';

      if (comments.length) {
        const rateAry = comments.map((item) => +item.rate);
        score = (rateAry.reduce((a, b) => a + b, 0) / rateAry.length).toFixed(1);
      }

      return score;
    },
    filterUserComment(name) {
      const comments = [...this.comments];
      return comments.filter((item) => item.userName === name);
    },
    sortFn(comments, method, sort) {
      let sortAry = [];

      if (method === 'down') {
        sortAry = comments.sort((a, b) => b[sort] - a[sort]);
      } else if (method === 'up') {
        sortAry = comments.sort((a, b) => a[sort] - b[sort]);
      }

      return sortAry;
    },
    sortSpecifyFn(comments, specifyAry, specifyItem) {
      const tempAry = [];
      let sortAry = [];

      for (let i = 0; i < specifyAry.length; i += 1) {
        let filterAry = comments.filter((item) => item[specifyItem] === specifyAry[i]);
        filterAry = filterAry.sort((a, b) => b.rate - a.rate);
        tempAry.push(filterAry);
      }

      sortAry = tempAry.reduce((a, b) => a.concat(b), []);

      return sortAry;
    },
    sortCommentsFn(comments, sort, page = 1) {
      this.sort = sort;
      this.currentCommentData = comments;
      let sortAry = [];
      let filterAry = [];
      let sliceAry = [];

      if (this.pinRate) {
        filterAry = comments.filter((item) => +item.rate === this.pinRate);
      } else {
        filterAry = comments;
      }

      if (sort === '最新日期') {
        sortAry = this.sortFn(filterAry, 'down', 'date');
      }

      if (sort === '評分最高') {
        sortAry = this.sortFn(filterAry, 'down', 'rate');
      }

      if (sort === '最冰溫度') {
        const iceAry = ['多冰', '少冰', '半冰', '微冰', '去冰', '完全去冰', '溫', '熱', '不記得'];

        sortAry = this.sortSpecifyFn(filterAry, iceAry, 'ice');
      }

      if (sort === '最少甜度') {
        const sugarAry = ['無糖', '1 分糖', '微糖', '半糖', '少糖', '全糖', '多糖', '不記得'];

        sortAry = this.sortSpecifyFn(filterAry, sugarAry, 'sugar');
      }

      sliceAry = this.slicePage(sortAry, page);

      this.sortComments = sliceAry;
    },
    postComment(data, drink, shop) {
      const api = `${import.meta.env.VITE_API}/comments`;
      const shopObj = this.rateAverage(shop, data.rate);
      const drinkObj = this.rateAverage(drink, data.rate);

      axios.post(api, data)
        .then((res) => {
          console.log(res);
          this.patchRate('shops', shopObj);
          this.patchRate('drinks', drinkObj);
          this.getComments();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    slicePage(data, currentPage = 1) {
      let result = [];

      if (data) {
        const pageLimit = 6;
        const integer = parseInt(data.length / pageLimit, 10);
        const Remainder = data.length % pageLimit;
        const hasRemainder = Remainder !== 0;
        let sliceNum = null;

        if (Remainder) {
          sliceNum = integer + 1;
        } else {
          sliceNum = integer;
        }

        const sliceDate = {
          data,
          pageLimit,
          sliceNum,
          hasRemainder,
          currentPage,
        };

        result = this.sliceFn(sliceDate)[currentPage - 1];
      }

      return result;
    },
    sliceFn(sliceDate) {
      const {
        data,
        pageLimit,
        sliceNum,
        hasRemainder,
        currentPage,
      } = sliceDate;
      const sliceAry = [];
      let dataIndex = 0;

      for (let i = 0; i < sliceNum; i += 1) {
        let tempSlice = [];

        if (hasRemainder && sliceNum === i) {
          tempSlice = data.slice(dataIndex);
        } else {
          tempSlice = data.slice(dataIndex, dataIndex + pageLimit);
        }

        sliceAry.push(tempSlice);
        dataIndex += pageLimit;
      }

      this.pagination = {
        total: sliceAry.length,
        current: currentPage,
        prev: currentPage > 1,
        next: currentPage < sliceAry.length,
      };

      return sliceAry;
    },
    clickPage(action) {
      let currentPage = this.pagination.current;
      const totalPage = this.pagination.total;

      if (typeof action === 'number') {
        currentPage = action;
      } else if (action === 'prev') {
        currentPage -= 1;
      } else if (action === 'next') {
        currentPage += 1;
      }

      this.pagination = {
        ...this.pagination,
        current: currentPage,
        prev: currentPage > 1,
        next: currentPage < totalPage,
      };
    },
    patchRate(path, obj) {
      const api = `${import.meta.env.VITE_API}/${path}/${obj.id}`;
      const data = {
        rate: obj.rate,
        rateNum: obj.rateNum,
      };

      axios.patch(api, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    rateAverage(data, newRate) {
      const average = (((Number(data.rate) * data.rateNum)
      + Number(newRate)) / (data.rateNum + 1)).toFixed(1);

      const obj = {
        id: data.id,
        rateNum: data.rateNum + 1,
        rate: `${average}`,
      };

      return obj;
    },
  },
});
