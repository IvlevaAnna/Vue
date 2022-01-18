import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        costs: [],
    },
    mutations: {
        setCosts( state, payload) {
            state.costs = payload
        }

    },
    getters: {
        getCosts: state => state.costs,
        getTotalCost: (state) => {
            return state.costs.reduce((acc, cur) => acc + cur.value)
        }
    },
    actions: {}
})