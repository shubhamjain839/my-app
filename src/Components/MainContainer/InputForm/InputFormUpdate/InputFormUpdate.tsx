import axios from 'axios'
import React, { useState } from 'react'
import Alert from '../../../Alert/Alert'
import InputField from '../InputField/InputField'
import styles from './InputFormUpdate.module.css'

type InputFormUpdateProps = {
  title: string
}

const InputFormUpdate = ({ title }: InputFormUpdateProps) => {
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
  const UpdateButton = async (e: any) => {
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
      //Hardcoded Id for now as API Does'nt work with any other api
      const res = await axios.put('https://reqres.in/api/users/2', body)
      if (res.status === 200)
        setFormState({
          ...formState,
          alertMessage: 'User Updated',
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
    <div className={styles.InputFormUpdate}>
      <div className={styles.Title}>
        <p>{title}</p>
      </div>
      <form action='#' method='post'>
        <InputField
          type='text'
          changed={(e: any) => inputFieldChanged(e)}
          value={formState.name}
          name='name'
          placholder='Enter New Name'
        />
        <InputField
          type='text'
          changed={(e: any) => inputFieldChanged(e)}
          value={formState.job}
          name='job'
          placholder='Enter New Job'
        />
        <button onClick={(e) => UpdateButton(e)} className={styles.Button}>
          Submit
        </button>
      </form>
      {formState.showAlert && (
        <Alert title={formState.alertMessage} type={formState.alertType} />
      )}
    </div>
  )
}

export default InputFormUpdate
