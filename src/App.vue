<template>
  <div class="container">
    <div class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
<!--        <label for="name" id="name"> Введите имя</label>
        <input type="text" id="name" v-model.trim="name">-->
      </div>

<!--      <button class="btn primary" :disabled="name.length === 0">Создать</button>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
   async createPerson () {
     const response = fetch('https://vue-kurs-db-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })
     const firebaseData = await response.json()

     console.log(firebaseData)
    }
  }
}
</script>

<style>

</style>
