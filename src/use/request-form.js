import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
    const {isSubmitting, handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
        'fio',
        yup.string()
            .trim()
            .required('This field cannot be empty')
        )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone',
        yup.string()
            .trim()
            .required('This field cannot be empty')
            .min(8)
        )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount',
        yup.number()
            .required('Enter amount')
            .min(0, 'The amount cannot be less than 0')
        )
    const {value: status} = useField('status', )


    const onSubmit = handleSubmit(fn)

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