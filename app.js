const App = {
    data () {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addHandler() {
            if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''
            }
        },
        toApperCase(item) {
            return item.toUpperCase()
        },
        removeHandler (idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        dobleComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue (value) {
            if (value.length > 10) {
                this.inputValue = ' '
            }
        }
    }
}

Vue.createApp(App).mount('#app')
