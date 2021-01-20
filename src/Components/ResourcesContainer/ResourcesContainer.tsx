import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import Resource from './Resource/Resource'
import styles from './ResourcesContainer.module.css'

const ResourcesContainer = () => {
  const [resourceState, setResourceState] = useState({
    resource: {
      data: [],
    },
    loading: true,
  })
  useEffect(() => {
    const populateResourceHandler = async () => {
      try {
        const resource = await axios.get('https://reqres.in/api/unknown')
        setTimeout(() => {
          setResourceState({ resource: resource.data, loading: false })
        }, 300)
      } catch (error) {}
    }
    populateResourceHandler()
  }, [])
  return resourceState.loading ? (
    <Spinner />
  ) : (
    <div className={styles.ResourceContainer}>
      {resourceState.resource.data &&
        resourceState.resource.data.map((resourceItem: any, index: number) => (
          <Resource key={index} resourceItem={resourceItem} />
        ))}
    </div>
  )
}

export default ResourcesContainer
