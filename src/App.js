import React, { Component } from 'react'
import axios from 'axios'
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import List from './components/List'
import Grid from './components/Grid'
import OfficeMap from "./components/OfficeMap";


class App extends Component {
  state = {
      offices:[],
      loading:true,
      index:0
  }

  render() {
    return (
        <div className='app'>
            { this.state.loading ? <img
                    className='loading'
                    src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif"
                    alt="loading"/>
            :
                <Tabs onSelect={index => this.isActive(index)}>
                    <header className='header'>
                        <div className="headline">
                            <h2>Offices</h2>
                        </div>

                        <TabList className='navigation'>
                            <Tab style={this.state.index === 0 ? styles.active : styles.notActive}>List</Tab>
                            <Tab style={this.state.index === 1 ? styles.active : styles.notActive}>Grid</Tab>
                            <Tab style={this.state.index === 2 ? styles.active : styles.notActive}>Map</Tab>
                        </TabList>
                    </header>

                    <TabPanel className='list-container'>
                        {this.state.offices.map((office) => {
                            return <List
                                key={office.id}
                                name={office.name}
                                description={office.description.slice(0, 150)}
                                photo={office.photo}
                            />
                        })}
                    </TabPanel>

                    <TabPanel className='grid-container'>
                        {this.state.offices.map((office) => {
                            return <Grid
                                key={office.id}
                                name={office.name}
                                description={office.description.slice(0, 150)}
                                photo={office.photo}
                            />
                        })}
                    </TabPanel>

                    <TabPanel className='map-container'>
                        <OfficeMap coordinates={this.state.offices}/>
                    </TabPanel>
                </Tabs>
            }
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
                  this.setState({offices:response.data})
                  this.setState({loading:false})
              }
          })
          .catch((error) => {
              console.log(error)
          })
  }

  isActive = (index) => {
      this.setState({index:index})
  }

//   ab = () => {
//       this.state.offices
//   }
}

const styles = {
    active: {
        borderBottom:'1.5px solid #ffff4d',
        color:'#fff'
    },
    notActive: {
        borderBottom:'1.5px solid transparent',
        color:'#a6dce8'
    }
}



export default App;
