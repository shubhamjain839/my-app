import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Resource.module.css'

interface ResourceProps {
  resourceItem: any
}

const Resource: React.FC<ResourceProps> = ({ resourceItem }) => {
  return (
    <div className={styles.Resource}>
      <div className={styles.ResourceHeader}>
        <div style={{ backgroundColor: resourceItem.color }}></div>
        <Link
          to={`/resources/${resourceItem.id}`}
          className={styles.ResourceHeaderH1}
        >
          {resourceItem.name}
        </Link>
      </div>
    </div>
  )
}

export default Resource
