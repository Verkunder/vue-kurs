<template>
  <div class="alert" :class="type">
    <p class="allert-title">{{title}}</p>
    <p>{{text}}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: String,
    text: String,
    closable: Boolean,
    required: false,
    default: false,
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator (val) {
        return ['primary','danger', 'warning'].includes(val)
      }
    }
  }

}
</script>

<style scoped>

</style>