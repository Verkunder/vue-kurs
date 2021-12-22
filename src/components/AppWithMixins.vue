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
      <button class="btn primary" @click="toggleAllert">{{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}</button>
    </div>
  </div>
  <app-block>
  </app-block>
</template>

<script>
import AppAlert from "./components/AppAlert";
import AppBlock from "./components/AppBlock";
import alertMixin from "./alertMixin";
export default {
  components: {AppAlert, AppBlock},
  mixins: [alertMixin]
}
</script>

