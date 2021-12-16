<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и ассинхронные компоненты</h2>
      <app-button
          :color="active === 'one' ? 'primary' : '' "
          @action="active = 'one'">
        One
      </app-button>
      <app-button
          :color="active === 'two' ? 'primary': ''"
          @action="active = 'two'">Two
      </app-button>
      <app-text-one></app-text-one>
      <app-text-two></app-text-two>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppTextOne from "./AppTextOne";
import AppTextTwo from "./AppTextTwo";
export default {
  data() {
    return {
      active: 'one' // two
    }
  },
  components: {AppButton, AppTextOne, AppTextTwo}
}
</script>

<style scoped>

</style>