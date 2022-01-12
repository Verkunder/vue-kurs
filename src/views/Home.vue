<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal === true" title="Create an application" @close="modal = false">
        <request-modal />
      </app-modal>
    </teleport>
  </app-page>

</template>

<script>
import AppPage from "../components/ui/AppPage";
import RequestTable from "../components/request/RequestTable";
import AppModal from "../components/ui/AppModal";
import RequestModal from "../components/request/RequestModal";
import {ref} from 'vue'
export default {
  setup () {
    const modal = ref(false)

    return {
      modal
    }
  },
  components: {AppPage, RequestTable, AppModal, RequestModal}
}
</script>
