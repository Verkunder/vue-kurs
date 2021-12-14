const h = Vue.h

const app = Vue.createApp ({
    data() {
        return {
            title: 'Vue 3'
        }
    },
    methods: {
        changeTitle () {
            console.log (this.title)
            this.title = 'Vue 3.1'
        }
    },
    render() {
        return h ('div', {
            class: 'card center'
        },[
            h('h1', {}, this.title),
            h('button', {
                class: 'btn',
                onClick: this.changeTitle
            }, 'Update')    
    ] )
    }
})
const app2 = Vue.createApp ({
    data() {
        return {
            title: 'Vue 3.2'
        }
    }
})
app.mount('#app')
app2.mount('#app2')
