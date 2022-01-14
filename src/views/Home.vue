<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="List of applications" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal === true" title="Create an application" @close="modal = false">
        <request-modal @created="modal = false" />
      </app-modal>
    </teleport>
  </app-page>

</template>

<script>
import AppPage from "../components/ui/AppPage";
import RequestTable from "../components/request/RequestTable";
import AppModal from "../components/ui/AppModal";
import RequestModal from "../components/request/RequestModal";
import RequestFilter from "../components/request/RequestFilter";
import {ref, computed, onMounted, watch} from 'vue'
import {useStore} from "vuex";
import AppLoader from "../components/ui/AppLoader";
export default {
  setup () {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    watch(filter, val => console.log(val))

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    const requests = computed(() => store.getters['request/requests']
        .filter(requests => {
          if (filter.value.name) {
            return requests.fio.includes(filter.value.name)
          }
          return requests
        })
        .filter(requests => {
          if (filter.value.status) {
            return requests.status.includes(filter.value.status)
          }
          return requests
        })
    )
    return {
      modal, requests, loading, filter
    }
  },
  components: {AppLoader, AppPage, RequestTable, AppModal, RequestModal, RequestFilter}
}
</script>
