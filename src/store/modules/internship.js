import {getInt} from "@/api/internships.js";


export default {
    namespaced: true,
    state: {
        internships: []
    },
    mutations: {
        SET_INTERNSHIPS(state, internships) {
            state.internships = internships;
        },
    },
    actions: {
        async getInternships({commit, getters}) {
            if(getters.allInternships.length === 0) {
                const resp = await getInt()
                commit('SET_INTERNSHIPS', resp.data)
            }
        },
        // async getSortedByPriceProducts({commit}, by) {
        //     const resp = await getProducts()
        //     switch (by) {
        //         case 'DESC':
        //             commit('SET_PRODUCTS', resp.data['hydra:member'].sort((a, b) => a.price < b.price ? 1 : -1))
        //             break;
        //         case 'ASC':
        //             commit('SET_PRODUCTS', resp.data['hydra:member'].sort((a, b) => a.price > b.price ? 1 : -1))
        //             break;
        //     }
        // },
        // async getSortedByNameProducts({commit}) {
        //     const resp = await getProducts()
        //     let sorted = resp.data['hydra:member'].sort();
        //     sorted.reverse();
        //     commit('SET_PRODUCTS', sorted)
        // },
        // async getFilteredByPrice({commit}, settledPrice) {
        //     const resp = await getProducts()
        //     let filtered = resp.data['hydra:member'].filter(item => item.price < settledPrice);
        //     commit('SET_PRODUCTS', filtered)
        // }
    },
    getters: {
        allInternships(state) {
            return state.internships
        }
    }
}