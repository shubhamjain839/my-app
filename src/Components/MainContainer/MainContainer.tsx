import React from 'react'
import styles from './MainContainer.module.css'
import MainCard from './MainCard/MainCard'
import Graphics from './Graphics/Graphics'
import InputFormRegister from './InputForm/InputFormRegister/InputFormRegister'
import InputFormLogin from './InputForm/InputFormLogin/InputFormLogin'
import InputFormCreate from './InputForm/InputFormCreate/InputFormCreate'
import InputFormUpdate from './InputForm/InputFormUpdate/InputFormUpdate'

interface MainContainerProps {
  graphic: string
  title: string
  inputForm: string
}

const MainContainer: React.FC<MainContainerProps> = ({
  graphic,
  title,
  inputForm,
}) => {
  let form = <InputFormRegister title={title} />
  if (inputForm === 'login') {
    form = <InputFormLogin title={title} />
  }
  if (inputForm === 'create') {
    form = <InputFormCreate title={title} />
  }
  if (inputForm === 'update') {
    form = <InputFormUpdate title={title} />
  }
  // console.log('Logo Name -> MC' + graphic)
  return (
    <div className={styles.MainContainer}>
      <MainCard>
        <Graphics logo={graphic} />
      </MainCard>
      <MainCard>{form}</MainCard>
    </div>
  )
}

export default MainContainer
