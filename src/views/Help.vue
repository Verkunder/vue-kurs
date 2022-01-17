<template>
  <app-page back title="Help">
    <question-item
        v-for="q in questions"
        :key="q.title"
        :question="q"
    ></question-item>
  </app-page>
</template>


<script>
import AppPage from '../components/ui/AppPage'
import QuestionItem from '../components/question/QuestionItem'

export default {
  setup() {
    const questions = [
      {title: 'What is in this system?', text: 'There is everything in order to see what applications a person added'},
      {title: 'How does authorization work here?', text: 'Everything is implemented through Firebase'}
    ]

    return {questions}
  },
  components: {AppPage, QuestionItem}
}
</script>