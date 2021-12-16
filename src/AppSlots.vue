<template>
  <div class="container pt-1">
    <div class="card">
      <h2> Slots </h2>
    </div>
    <div class="card">
      <app-list>
        <template #default="{idx, iter}">
      <span style="color: #e53935;">
        <strong>Idx: {{idx + 1}} </strong>
        Item: {{iter}}
      </span>
        </template>
      </app-list>
    </div>
    <app-block>
      <p>Это какой-то влажный текст</p>

      <template v-slot:header> <h3> Это заголовок </h3> </template>

      <template v-slot:footer>
        <hr />
        <small> Это footer </small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from "./AppList";
export default {
  components: { AppBlock, AppList },

}

</script>

<style>

</style>
