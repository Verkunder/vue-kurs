Vue.createApp ({
    data: () => ({
        title: 'Я есть Грут!',
        myHTML: '<h1> Hello Vue 3 </h1>',
        person: {
            firstName: 'Kapustin',
            lastName: 'Stepan',
            age: 22
        },
        items: [1, 2]
    }),
    computed: {
        eventItems(){
            return this.items.filter(i => i % 2 === 0);
        }
    },
    methods: {
        addItem(){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove (i) {
            this.items.splice(i, 1)
        },
        log (item) {
            console.log(item)
        }
    }

}).mount ('#app')