import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../Spinner/Spinner'
import styles from './ResourceView.module.css'

const ResourceView = (props: any) => {
  const [ResourceViewState, setResourceViewState] = useState({
    name: '',
    year: '',
    color: '',
    pantone_value: '',
    loading: true,
  })
  //   console.log(props.props.match.params.id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://reqres.in/api/unknown/${props.props.match.params.id}`
        )
        // console.log(data.data.data)
        setTimeout(() => {
          setResourceViewState({
            ...ResourceViewState,
            name: data.data.data.name,
            year: data.data.data.year,
            color: data.data.data.color,
            pantone_value: data.data.data.pantone_value,
            loading: false,
          })
        }, 300)
      } catch (error) {}
    }
    if (ResourceViewState.loading) fetchData()
  }, [setResourceViewState, ResourceViewState, props.props.match.params.id])
  return ResourceViewState.loading ? (
    <Spinner />
  ) : (
    <div className={styles.ResourceView}>
      <div className={styles.BackButton}>
        <Link to='/resources'> Back</Link>
      </div>
      <div className={styles.ResourceViewDiv}>
        <div
          className={styles.Image}
          style={{ backgroundColor: ResourceViewState.color }}
        ></div>
        <p className={styles.FirstName}> Color Name:{ResourceViewState.name}</p>
        <p className={styles.LastName}>Year: {ResourceViewState.year}</p>
        <p className={styles.Email}>
          Pantone Value: {ResourceViewState.pantone_value}
        </p>
      </div>
    </div>
  )
}

export default ResourceView
