import React from 'react'

import styles from './InputField.module.css'

type InputFieldProps = {
  type: string
  placholder: string
  name: string
  value: string
  changed: any
}

const InputField = ({
  type,
  placholder,
  name,
  value,
  changed,
}: InputFieldProps) => {
  return (
    <div className={styles.InputField}>
      <input
        className={styles.InputFieldBox}
        type={type}
        placeholder={placholder}
        name={name}
        onChange={changed}
        value={value}
      />
    </div>
  )
}

export default InputField
