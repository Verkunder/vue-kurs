import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment (state) {
            state.counter++
        },
        add (state, payload) {
            state.counter += payload.value
        }
    },
    getters: {
        counter (state) {
            if (state.counter > 30) {
                state.counter = 0
            }
            return state.counter
        },
        doublecounter (_, getters) {
            return getters.counter * 2
        }
    },
    actions: {
        incrementAsync(context, payload) {
            setTimeout(() => {
                context.commit('add', payload)
            }, payload.delay)
        }
    }
})