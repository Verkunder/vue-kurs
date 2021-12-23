export default {
    mounted (el, binding) {
        console.log(el)
        console.log(binding)
        el.style.color = binding.value
    },
    updated (el, binding) {
        console.log(el)
        console.log(binding)
        el.style.color = binding.value
    }
}