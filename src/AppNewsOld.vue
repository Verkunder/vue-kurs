<template>
  <div class="container pt-1">
    <div class="card">
      <h2> Актуальные новости {{now}} </h2>
      <span> Открыто: <strong> {{openRate}} </strong> | Прочитано: <strong> {{readrRate}} </strong> </span>
    </div>
    <app-news 
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    :is-open="item.isOpen"
    :was-read="item.wasRead"
    @open-news="openRate++"
    @reed-news="readNews"
    @unmark="unreadNews"
    > </app-news>
  </div>
</template>

<script>
import AppNews from './AppNews'

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readrRate: 0,
      news: [
        {
          title: 'Джо байден победил на выборах США',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Хрущёв стучал тапком по столу',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  provide() {
      return {
            title:'Список новостей',
            news: this.news
        }        
  },
  components: {
  'app-news': AppNews
  },

  methods: {
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readrRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readrRate--
    }
    
  }
}

</script>

<style scoped>
 h2 {
   color: rebeccapurple;
 }
</style>
