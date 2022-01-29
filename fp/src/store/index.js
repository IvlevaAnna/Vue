import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCosts: [],
    pageCosts: [],
    pagination: null,
    pageNum: 0,
    categories: [
      "Shopping",
      "Entertainment",
      "Food",
      "Travelling",
      "Transport",
    ],
    editForm: false,
    editId: null,
  },
  mutations: {
    setAllCosts(state, payload) {
      state.allCosts = payload;
    },
    setPageCosts(state, payload) {
      state.pageCosts = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setPageNum(state, payload) {
      state.pageNum = payload;
    },
    setPagination(state, payload) {
      state.pagination = payload;
    },
    addCost(state, payload) {
      if (state.pagination[state.pagination.length - 1].length === 5) {
        state.pagination.push([payload]);
      } else state.pagination[state.pagination.length - 1].push(payload);
      state.pagination = [...state.pagination];
    },
    setEditForm(state) {
      state.editForm = !state.editForm;
    },
    setEditId(state, payload) {
      state.editId = payload;
    },
  },
  getters: {
    getAllCosts: (state) => state.allCosts,
    getPageCosts: (state) => state.pageCosts,
    getCategories: (state) => state.categories,
    getPageNum: (state) => state.pageNum,
    getPagination: (state) => state.pagination,
    getEditForm: (state) => state.editForm,
    getEditId: (state) => state.editId,
  },
  actions: {
    fetchPaginationData({ commit }) {
      new Promise((resolve) => {
        const pages = [];
        for (let i = 0; i < Math.ceil(this.state.allCosts.length / 5); i++) {
          const page = [];
          for (let j = i * 5; j < i * 5 + 5; j++) {
            if (this.state.allCosts.length <= j) break;
            page.push(this.state.allCosts[j]);
          }
          pages.push(page);
        }
        resolve(pages);
      })
        .then((res) => commit("setPagination", res))
        .then(() => commit("setPageCosts", this.state.pagination[0]));
    },
  },
});
