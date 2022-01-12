import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm() {
    const {isSubmitting, handleSubmit} = useForm()

    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
        'fio',
        yup.string()
        )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone', )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount', )
    const {value: status} = useField('status', )


    const onSubmit = handleSubmit(async () => {

    })

    return {
        status,
        isSubmitting,
        onSubmit,
        fio,
        fError,
        fBlur,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur
    }
}