import axios from 'axios'
import React, { useState } from 'react'
import Alert from '../../../Alert/Alert'
import InputField from '../InputField/InputField'
import styles from './InputFormLogin.module.css'

type InputFormLoginProps = {
  title: string
}

const InputFormLogin = ({ title }: InputFormLoginProps) => {
  const [formState, setFormState] = useState({
    email: '',
    pwd: '',
    showAlert: false,
    alertMessage: '',
    alertType: '',
  })
  const inputFieldChanged = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const disableAlert = () => {
    setTimeout(() => {
      setFormState({
        ...formState,
        showAlert: false,
      })
    }, 2500)
  }
  const loginButton = async (e: any) => {
    e.preventDefault()
    if (formState.pwd === '' || formState.email === '') {
      setFormState({
        ...formState,
        alertMessage: "Fields Can't be Empty",
        alertType: 'Danger',
        showAlert: true,
      })
      disableAlert()
      return
    }
    try {
      const body = { email: formState.email, password: formState.pwd }
      const res = await axios.post('https://reqres.in/api/login', body)
      if (res.status === 200)
        setFormState({
          ...formState,
          alertMessage: 'Login Successful',
          alertType: 'Success',
          showAlert: true,
        })
      disableAlert()
    } catch (error) {
      setFormState({
        ...formState,
        alertMessage: error.message,
        alertType: 'Danger',
        showAlert: true,
      })
      disableAlert()
    }
  }
  return (
    <div className={styles.InputFormLogin}>
      <div className={styles.Title}>
        <p>{title}</p>
      </div>
      <form action='#' method='post'>
        <InputField
          type='text'
          changed={(e: any) => inputFieldChanged(e)}
          value={formState.email}
          name='email'
          placholder='Enter Your Email'
        />
        <InputField
          type='password'
          changed={(e: any) => inputFieldChanged(e)}
          value={formState.pwd}
          name='pwd'
          placholder='Enter Your Password'
        />
        <button onClick={(e) => loginButton(e)} className={styles.Button}>
          Submit
        </button>
      </form>
      {formState.showAlert && (
        <Alert title={formState.alertMessage} type={formState.alertType} />
      )}
    </div>
  )
}

export default InputFormLogin
