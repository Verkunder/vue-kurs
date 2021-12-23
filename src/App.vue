<template>
  <div class="container">
      <div class="card">
        <h2>No women no cry</h2>

    <div class="form-control">
      <label for="inp"> Активный по умолчанию</label>
      <input v-focus type="text" id="inp">
    </div>
      </div>
  </div>
</template>

<script>
import focusDirectiv from "./focusDirectiv";

export default {
  directives: {
    focus: focusDirectiv
  }
}
</script>

<style scoped>

</style>