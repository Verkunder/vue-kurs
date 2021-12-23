<template>
  <div class="container">
      <div class="card">
        <h2 v-color="myColor">No women no cry</h2>

    <div class="form-control">
      <label for="inp"> Активный по умолчанию</label>
      <input v-focus type="text" id="inp">
    </div>
        <button class="btn" @click="myColor = 'darkblue'">Поменять цвет заголовка</button>
      </div>
  </div>
</template>

<script>
import focusDirectiv from "./focusDirectiv";
import colorDirective from "./ColorDirective";

export default {
  directives: {
    focus: focusDirectiv,
    color: colorDirective
  },
  data() {
    return {
      myColor: 'darkred'
    }
  }
}
</script>

<style scoped>

</style>