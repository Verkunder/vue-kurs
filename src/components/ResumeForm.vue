<template>
  <form class="card card-w30" @submit.prevent="submit">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" v-model="value" rows="3"></textarea>
    </div>

    <button class="btn primary" :disabled="!valid">Добавить</button>
  </form>
</template>

<script>
export default {
    data() {
      return {
        type: 'title',
        value: ''
      }
    },
    computed: {
      valid() {
        return this.value.length > 3
      }
    },
    methods: {
      submit() {
        this.$emit('block-added', {
          type: this.type,
          value: this.value,
          id: Date.now()
        })

        this.value = ''
        this.type = 'title'
      }
    }
}
</script>

<style scoped>

</style>