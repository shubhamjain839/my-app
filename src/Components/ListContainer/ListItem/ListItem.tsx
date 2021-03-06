import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ListItem.module.css'
interface ListItemProps {
  listItem: any
}
const ListItem: React.FC<ListItemProps> = ({ listItem }) => {
  return (
    <div className={styles.ListItem}>
      <div className={styles.ListItemImg}>
        <img src={listItem.avatar} alt='peron' />
      </div>
      <div className={styles.ListItemHeader}>
        <Link to={`/list/${listItem.id}`}>{listItem.first_name}</Link>
        <p>{listItem.last_name}</p>
      </div>
    </div>
  )
}

export default ListItem
