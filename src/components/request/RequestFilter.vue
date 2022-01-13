<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Enter Name">
    </div>
    <div class="form-control">
      <select>
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
export default {
  emits: ['update:modelValue'],
  props: ['modelValue']
}
</script>

<style scoped>

</style>