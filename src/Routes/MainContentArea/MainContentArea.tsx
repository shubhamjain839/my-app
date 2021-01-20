import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainContainer from '../../Components/MainContainer/MainContainer'
import ListContainer from '../../Components/ListContainer/ListContainer'
import ResourcesContainer from '../../Components/ResourcesContainer/ResourcesContainer'
import ListItemView from '../../Components/ListContainer/ListItem/ListItemView/ListItemView'
import ResourceView from '../../Components/ResourcesContainer/Resource/ResourceView/ResourceView'
import styles from './MainContentArea.module.css'
const MainContentArea = () => {
  return (
    <div className={styles.MainContentArea}>
      <Switch>
        <Route
          path='/'
          exact
          component={() => (
            <MainContainer
              graphic='welcome'
              inputForm='register'
              title='Register'
            />
          )}
        />
        <Route
          path='/login'
          exact
          component={() => (
            <MainContainer
              graphic='login'
              inputForm='login'
              title='Login User'
            />
          )}
        />
        <Route
          path='/create'
          exact
          component={() => (
            <MainContainer
              graphic='create'
              inputForm='create'
              title='Create User'
            />
          )}
        />
        <Route
          path='/update/:id'
          exact
          component={() => (
            <MainContainer
              graphic='update'
              inputForm='update'
              title='Update User'
            />
          )}
        />
        <Route path='/list' exact component={() => <ListContainer />} />
        <Route
          path='/list/:id'
          exact
          component={(props: any) => <ListItemView props={props} />}
        />
        <Route
          path='/resources/:id'
          exact
          component={(props: any) => <ResourceView props={props} />}
        />
        <Route
          path='/resources'
          exact
          component={() => <ResourcesContainer />}
        />
      </Switch>
    </div>
  )
}

export default MainContentArea
