import axios from "../../axios/request";
import store from "../index"

export default {
    namespaced: true,
    state() {
        return {
            request: []
        }
    },
    mutations: {
        setRequests(state, requests) {
            state.requests = requests
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
        }
    },
    getters: {
        requests(state) {
            return state.request

        }
    }
}