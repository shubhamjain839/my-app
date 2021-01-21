import React, { useState, useEffect } from 'react'
import styles from './ListContainer.module.css'
import ListItem from './ListItem/ListItem'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

const ListContainer: React.FC = () => {
  const [listState, setListState] = useState({
    list: {
      data: [],
    },
  })
  useEffect(() => {
    const populateListHandler = async () => {
      try {
        const list = await axios.get('https://reqres.in/api/users?page=2')
        setTimeout(() => {
          setListState({ list: list.data })
        }, 400)
      } catch (error) {}
    }
    populateListHandler()
  }, [])
  return listState && listState.list.data.length <= 0 ? (
    <Spinner />
  ) : (
    <div className={styles.ListContainer}>
      {listState.list.data &&
        listState.list.data.map((listItem: any, index: number) => (
          <ListItem key={index} listItem={listItem} />
        ))}
    </div>
  )
}

export default ListContainer
