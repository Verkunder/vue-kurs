<template>
  <div class="container">
    <app-alert
        v-if="alert === true"
        title="ВАЖНО!"
        text="Lorem ipsum dolor sit amet"
        type="warning"
        closable="true"
        @close="alert = false"
    >
    </app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAllert">{{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert";
import alertMixin from "../alertMixin";
export default {
  components: {AppAlert},
  mixins: [alertMixin]
}
</script>

