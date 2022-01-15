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
  <tbody>
  <tr v-for="(r, idx) in requests" :key="r.id">
    <td>{{ idx+1 }}</td>
    <td>{{r.fio}}</td>
    <td>{{r.phone}}</td>
    <td>{{currency (r.amount)}}</td>
    <td><app-status :type="r.status" /></td>
    <td>
      <router-link v-slot="{navigate}" custom :to="{name: 'request', params:{id: r.id}}"></router-link>
      <button class="btn" @click="navigate">Open</button>
    </td>
  </tr>
  </tbody>
</table>
</template>

<script>
import {currency} from "../../utills/currency";
import AppStatus from "../ui/AppStatus";
export default  {
    props: ['requests'],
    setup() {
      return {currency}
    },
    components: {AppStatus}
}
</script>

<style scoped>

</style>