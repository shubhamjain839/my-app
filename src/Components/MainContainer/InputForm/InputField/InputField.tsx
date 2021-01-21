import React from 'react'

import styles from './InputField.module.css'

interface InputFieldProps {
  type: string
  placholder: string
  name: string
  value: string
  changed: any
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placholder,
  name,
  value,
  changed,
}) => {
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
