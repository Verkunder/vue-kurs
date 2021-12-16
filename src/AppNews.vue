<template>
<div class="card">
    <h2> {{id}}. &nbsp; {{title}} </h2>
    <app-button @action="open"> {{isNewsOpen ? 'Закрыть' : 'Открыть'}}</app-button>
    <app-button color="danger" v-if="wasRead" @action="unmark">Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
    <hr />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde ducimus, iusto culpa debitis dolorem repudiandae labore laborum nihil pariatur temporibus. Facere numquam corporis itaque rerum consectetur aut necessitatibus incidunt.</p>
    <app-button color="primary" @action="mark" v-if="!wasRead">Прочесть новость</app-button>
    <app-news-list> </app-news-list>
    </div>
</div>
</template>

<script>
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'
export default {
    props: {
    title: {
        type: String,
        required: true
    },
    id: Number,
    isOpen: Boolean,
    wasRead: Boolean
    },
/*     emits: [
        'open-news'
    ], */
    emits: {
        'open-news': null,
        'reed-news'(id) {
        if (id) {
            return true
            }
            console.warn('Нет параметра id для emit reed-news')
            return false
        },
        unmark (id) {
            if (id) {
            return true
            }
            console.warn('Нет параметра id для emit unmark')
            return false
        }
    },
    data() {
        return {
        isNewsOpen: this.isOpen
        }
         
    },
    methods: {
        open () {
            this.isNewsOpen = !this.isNewsOpen
            if (this.isNewsOpen) {
                this.$emit('open-news', 42)
            }            
        },
        mark() {
            this.isNewsOpen = false
            this.$emit('reed-news', this.id)
        },
        unmark() {
            this.$emit('unmark', this.id)
        }
    },
    components: {
        AppButton,
        AppNewsList
    }
}
</script>

