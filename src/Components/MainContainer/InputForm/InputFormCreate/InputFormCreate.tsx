import axios from 'axios'
import React, { useState } from 'react'
import Alert from '../../../Alert/Alert'
import InputField from '../InputField/InputField'
import styles from './InputFormCreate.module.css'

type InputFormCreateProps = {
  title: string
}

const InputFormCreate = ({ title }: InputFormCreateProps) => {
  const [formState, setFormState] = useState({
    name: '',
    job: '',
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
  const createButton = async (e: any) => {
    e.preventDefault()
    if (formState.name === '' || formState.job === '') {
      setFormState({
        ...formState,
        alertMessage: "Fields Can't Be Empty",
        alertType: 'Danger',
        showAlert: true,
      })
      disableAlert()
      return
    }
    try {
      const body = { name: formState.name, job: formState.job }
      const res = await axios.post('https://reqres.in/api/users', body)
      if (res.status === 201)
        setFormState({
          ...formState,
          alertMessage: 'User Created',
          alertType: 'Success',
          showAlert: true,
        })
      //console.log(res)
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
    <div className={styles.InputFormCreate}>
      <div className={styles.Title}>
        <p>{title}</p>
      </div>
      <form action='#' method='post'>
        <InputField
          type='text'
          changed={(e: any) => inputFieldChanged(e)}
          value={formState.name}
          name='name'
          placholder='Enter Your Name'
        />
        <InputField
          type='text'
          changed={(e: any) => inputFieldChanged(e)}
          value={formState.job}
          name='job'
          placholder='Enter Your Job'
        />
        <button onClick={(e) => createButton(e)} className={styles.Button}>
          Submit
        </button>
      </form>
      {formState.showAlert && (
        <Alert title={formState.alertMessage} type={formState.alertType} />
      )}
    </div>
  )
}

export default InputFormCreate
