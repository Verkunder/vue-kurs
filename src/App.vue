<template>
  <div class="container">
    <app-alert
    v-if="alert === true"
    title="ВАЖНО!"
    text="Lorem ipsum dolor sit amet"
    type="danger"
    closable="true"
    @close="alert = false"
    >
    </app-alert>
    <div class="card">
      <button class="btn primary" @click="alert = true">Показать сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert";
export default {
    components: {AppAlert},
    data() {
      return {
        alert: false
      }
    }

}
</script>

