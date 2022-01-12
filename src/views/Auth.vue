<template>
  <form class="card" @submit.prevent="onSybmit">
    <h1>Sign in</h1>
    <div :class="[
        'form-control',
        {invalid: eError}
        ]">
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{eError}}</small>
    </div>
    <div :class="[
        'form-control',
        {invalid: pError}
        ]">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>
    <button class="btn primary" type="submit">Enter</button>
  </form>
</template>

<script>
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'
export default {
    setup() {
      const {handleSubmit, isSubmitting} = useForm()

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
            .min(6, 'Password is not correct')
      )
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
        onSybmit
      }
    }
}
</script>

<style scoped>

</style>