import axios from "../../axios/request";
import store from "../index"
import request from "../../axios/request";

export default {
    namespaced: true,
    state() {
        return {
            request: []
        }
    },
    mutations: {
        setRequests(state, request) {
            state.request = request
        },
        addRequest(state, request) {
            state.request.push(request)
        }
    },
    actions: {
        async create({commit, dispatch}, payload) {
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.post(`/request.json?auth=${token}`, payload)
                commit('addRequest', {...payload, id: data.name})
                dispatch('setMessage', {
                    value: 'Application successfully created',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        },
        async load({ commit, dispatch }) {
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.get(`/request.json?auth=${token}`)
                const requests = Object.keys(data).map(id => ({...data[id], id}))
                commit('setRequests', requests)
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        },
        async loadById({ commit, dispatch }, id) {
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.get(`/request/${id}.json?auth=${token}`)
                return data
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        }
    },
    getters: {
        requests(state) {
            return state.request

        }
    }
}