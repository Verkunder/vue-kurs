<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <div class="form-control" :class="{invalid: errors.name}">
        <label for="name">Как тебя зовут?</label>
        <input type="text"
               id="name"
               placeholder="Введи имя"
               v-model.trim="name"
        >
        <small v-if="errors.name != null"> {{errors.name}} </small>
      </div>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            max="70"
            v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input v-model="relocation" type="radio" name="trip" value="yes" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input v-model="relocation" type="radio" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="scill" name="skill" value="vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="scill" name="skill" value="cli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="scill" name="skill" value="route"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox" :class="{invalid: errors.aqree}">
        <span class="label">Правила нашей компании</span>
        <div class="checkbox" >
          <label> <input type="checkbox" v-model="aqree"/> С правилами согласен(а) </label>
        </div>
        <small v-if="errors.aqree != null"> {{errors.aqree}} </small>
      </div>
      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      name: '',
      age: 23,
      city: 'nsk',
      relocation: null,
      scill: [],
      aqree: false,
      errors: {
        name: null,
        aqree: null
      }
      }
    },
    methods: {
      formIsValid() {
        let isValid = true
        if (this.name.length === 0) {
          this.errors.name = 'Это поле обязательное ⚠'
          isValid = false
        } else {
          this.errors.name = null
        }
        if (this.aqree === false){
          this.errors.aqree = 'Вы не согласились с правилами компании ⚠'
          isValid = false
        } else {
          this.errors.aqree = null
        }
        return isValid
      },
      submitHandler() {
        if (this.formIsValid()) {
          console.group('Form data')
          console.log('Name:', this.name)
          console.log('Age:', this.age)
          console.log('city:', this.city)
          console.log('To Tokyo:', this.relocation)
          console.log('Scill:', this.scill)
          console.log('Aqree:', this.aqree)
          console.groupEnd()
        }
      }
    }
  }
</script>

<style>
.form-control small {
  color: #e53935;
  padding-left: 25px;
  font-size: 18px;
}
.form-control.invalid input {
border-color: #e53935;
}
.form-checkbox small {
  color: #e53935;
  padding-left: 25px;
  font-size: 18px;
}
</style>
