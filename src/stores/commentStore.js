import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('commentStore', {
  state: () => ({
    comments: [],
    pinRate: false,
    pagination: {},
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
    postComment(data) {
      const api = `${import.meta.env.VITE_API}/comments`;

      axios.post(api, data)
        .then((res) => {
          console.log(res);
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
  },
});
