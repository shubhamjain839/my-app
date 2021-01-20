import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../../../Alert/Alert'
import Spinner from '../../../Spinner/Spinner'
import styles from './ListItemView.module.css'

const ListItemView = (props: any) => {
  const [listItemViewState, setlistItemViewState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
    loading: true,
  })
  const [alert, setAlert] = useState({
    title: '',
    type: '',
    showAlert: false,
  })
  const disableAlert = () => {
    setTimeout(() => {
      setAlert({
        ...alert,
        showAlert: false,
      })
    }, 2500)
  }
  //   console.log(props.props.match.params.id)
  const deleteAccount = async (e: any) => {
    e.preventDefault()
    try {
      await axios.delete(
        `https://reqres.in/api/users/${props.props.match.params.id}`
      )
      setAlert({
        title: 'User Deleted Successfully',
        type: 'Success',
        showAlert: true,
      })
      disableAlert()
      // console.log(data.data.data)
    } catch (error) {
      setAlert({
        title: 'User Deletion Failed',
        type: 'Danger',
        showAlert: true,
      })
      disableAlert()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://reqres.in/api/users/${props.props.match.params.id}`
        )
        // console.log(data.data.data)
        setTimeout(() => {
          setlistItemViewState({
            ...listItemViewState,
            first_name: data.data.data.first_name,
            last_name: data.data.data.last_name,
            email: data.data.data.email,
            avatar: data.data.data.avatar,
            loading: false,
          })
        }, 300)
      } catch (error) {}
    }
    if (listItemViewState.loading) fetchData()
  }, [setlistItemViewState, listItemViewState, props.props.match.params.id])
  return listItemViewState.loading ? (
    <Spinner />
  ) : (
    <div className={styles.ListItemView}>
      <div className={styles.BackButton}>
        <Link to='/list'> Back</Link>
      </div>
      <div className={styles.ListItemViewDiv}>
        <img
          className={styles.Image}
          src={listItemViewState.avatar}
          alt='person'
        />
        <p className={styles.FirstName}>
          First Name: {listItemViewState.first_name}
        </p>
        <p className={styles.LastName}>
          Last Name: {listItemViewState.last_name}
        </p>
        <p className={styles.Email}>Email: {listItemViewState.email}</p>
      </div>
      <div className={styles.Buttons}>
        <Link
          to={`/update/${props.props.match.params.id}`}
          className={styles.BtnUpdate}
        >
          Update
        </Link>
        <Link
          to=''
          onClick={(e) => deleteAccount(e)}
          className={styles.BtnDelete}
        >
          Delete
        </Link>
      </div>
      <div className={styles.Alert}>
        {alert.showAlert && <Alert title={alert.title} type={alert.type} />}
      </div>
    </div>
  )
}

export default ListItemView
