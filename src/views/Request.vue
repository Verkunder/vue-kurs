<template>
  <app-loader v-if="loading"> </app-loader>
  <app-page back title="Request" v-else-if="request">
    <p>  <strong> Full name: </strong> {{request.fio}}</p>
    <p>  <strong>Telephone: </strong> {{request.phone}} </p>
    <p>  <strong>Sum: </strong> {{currency(request.amount)}} </p>
    <p> <strong>Status: </strong> <app-status :type="request.status"/></p>
    </app-page> 
    <h3 v-else class="text-center text-white"> There are no applications with id = {{$router.params.id}} </h3>
</template>
 
<script>
import {ref, onMounted} from 'vue'
import {useStore} from "vuex";
import {useRoute} from "vue-router"
import AppPage from "../components/ui/AppPage.vue"
import AppLoader from "../components/ui/AppLoader.vue"
import AppStatus from "../components/ui/AppStatus.vue"
import {currency} from "../utills/currency"

    export default {
        setup() {
        const loading = ref(true)
        const route = useRoute ()
        const store = useStore()
        const request = ref({})

        onMounted( async () => {
          loading.value = true
          request.value = await store.dispatch('request/loadById',route.params.id)
          loading.value = false
        })
        console.log(route.params.id)
        return {loading, request, currency}
        },
        components: {AppPage, AppLoader, AppStatus}
    }
</script>

<style scoped>

</style>