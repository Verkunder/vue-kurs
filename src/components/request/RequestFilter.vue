<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Enter Name" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
         <option disabled selected>Select status</option>
          <option value="done">Done</option>
          <option value="cancelled">Cancelled</option>
          <option value="active"> Active</option>
          <option value="pending">Pending</option>
      </select>
    </div>

  </div>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const name = ref()
    const status = ref()

    watch([name,status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    return {
      name, status
    }

  }
}
</script>

<style scoped>

</style>