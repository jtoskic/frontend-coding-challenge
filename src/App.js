import React, { Component } from 'react'
import axios from 'axios'

import List from './components/List'
import Grid from './components/Grid'
import OfficeMap from "./components/OfficeMap"

import { store } from "./store"
import { showOffices } from "./actions"
import { connect } from "react-redux"
import { NavLink, Route } from "react-router-dom"
import { withRouter } from 'react-router-dom'



class App extends Component {
  state = {
      loading:true,
  }

  render() {
      const { loading } = this.state
      const { offices } = this.props

      let showOffices = (
          <img className='loading' src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" alt="loading"/>
      )

      if(!loading && offices !== undefined) {
          showOffices = (
              <div>
                  <header className='header'>
                      <div className="headline">
                          <h2>Offices</h2>
                      </div>

                      <ul className='navigation'>
                          <li>
                              <NavLink to='/list' activeStyle={styles.active}>List</NavLink>
                          </li>
                          <li>
                              <NavLink to='/grid' activeStyle={styles.active}>Grid</NavLink>
                          </li>
                          <li>
                              <NavLink to='/map' activeStyle={styles.active}>Map</NavLink>
                          </li>
                      </ul>
                  </header>

                  {/*why i'm getting router history as prop when i pass offices to render inline function*/}
                  {/*why the first render of List component gives offices undefined ???*/}
                   <Route
                       path='/list'
                       render={() => <List offices={offices}/>}
                   />
                   <Route
                       path='/grid'
                       render={() => <Grid offices={offices}/>}
                       />
                   <Route
                       path='/map'
                       render={() => <OfficeMap coordinates={offices}/>}
                       />
              </div>
          )
      }
    return (
        <div className='app'>
            { showOffices }
        </div>
    )
  }

  componentDidMount() {
      this.getData()
  }

    getData = () => {
      axios.get('https://itk-exam-api.herokuapp.com/api/offices')
          .then((response) => {
              if(response.status === 200 || response.status === 201) {
                  this.setState({loading:false})
                  store.dispatch(showOffices(response.data))
              }
          })
          .catch((error) => {
              console.log(error)
          })
  }

}

const styles = {
    active: {
        borderBottom:'1.5px solid #ffff4d',
        color:'#fff'
    }
}


const mapStateToProps = (state) => ({
    ...state
})


export default withRouter(connect(mapStateToProps)(App))

