<template>
  <app-page title="Request"> </app-page> 
</template>
 
<script>
import {useRoute} from "vue-router"
import AppPage from "../components/ui/AppPage.vue"
    export default {
        setup() {
        const route = useRoute
        },
        components: {AppPage}
    }
</script>

<style scoped>

</style>