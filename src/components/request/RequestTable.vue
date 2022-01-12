<template>
  <h4 v-if="requests.length === 0" class="text-center">No applications yet</h4>
<table v-else class="table">
  <thead>
  <tr>
    <th>#</th>
    <th>Full name</th>
    <th>Telephone</th>
    <th>Sum</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  </thead>
</table>
</template>

<script>
export default {
    props: ['requests']
}
</script>

<style scoped>

</style>