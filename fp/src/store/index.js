import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        costs: [],
        pagination: null,
        categories: ['Shopping','Entertainment', 'Food', 'Travelling']
    },
    mutations: {
        setCosts( state, payload) {
            state.costs = payload
        },
        setCategories( state, payload) {
            state.categories = payload
        },
        setPagination( state, payload) {
            state.pagination = payload
        },
        addCost( state, payload) {
            if (state.pagination[state.pagination.length - 1].length === 5) {
                state.pagination.push([payload])
            }
            else
                state.pagination[state.pagination.length - 1].push(payload)
            state.pagination = [...state.pagination]
        }

    },
    getters: {
        getCosts: state => state.costs,
        getCategories: state => state.categories,
        getTotalCost: (state) => {
            return state.costs.reduce((acc, cur) => acc + cur.value)
        },
        getPagination: state => state.pagination
    },
    actions: {
        fetchPaginationData({commit}) {
            new Promise(resolve => {
                const pages = []
                for(let i = 0; i < Math.ceil(this.state.costs.length / 5); i++) {
                    const page = []
                    for (let j = i * 5; j < i * 5 + 5; j++) {
                        if (this.state.costs.length <= j)
                            break
                        page.push(this.state.costs[j])
                    }
                    pages.push(page)
                }
                resolve(pages)
            }).then( res => commit('setPagination', res))
                .then( () => commit('setCosts', this.state.pagination[0]))
        },
    },
})
