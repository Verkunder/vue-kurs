import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm() {

    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Enter Email')
            .email('E-mail is not correct')
    )

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Enter Password')
            .min(6,'Password cannot be shorter than 6 characters')
    )
    const isToManyAttempts = computed(() => submitCount.value >= 3)
    watch(isToManyAttempts, val => {
        if (val) {
            setTimeout(() =>submitCount.value = 0, 1500)
        }
    })
    const onSybmit = handleSubmit(values => {
        console.log('Form', values)
    })
    return {
        email,
        password,
        eError,
        eBlur,
        pError,
        pBlur,
        onSybmit,
        isSubmitting,
        isToManyAttempts
    }
}