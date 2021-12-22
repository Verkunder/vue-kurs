export default {
        data() {
            return {
                alert: false
            }
        },
        methods: {
            toggleAllert() {
                this.alert = !this.alert
            }
        }
}