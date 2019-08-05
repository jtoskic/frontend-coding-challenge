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
  }

  render() {
    return (
        <div className='app'>
            <Tabs>
                <header className='header'>
                    <div className="headline">
                        <h2>Offices</h2>
                    </div>

                    <TabList className='navigation'>
                        <Tab>List</Tab>
                        <Tab>Grid</Tab>
                        <Tab>Map</Tab>
                    </TabList>
                </header>

                <TabPanel className='list-container'>
                    {this.state.offices.map((office) => {
                        return <List
                            key={office.id}
                            name={office.name}
                            description={office.description}
                            photo={office.photo}
                        />
                    })}
                </TabPanel>

                <TabPanel>
                    {this.state.offices.map((office) => {
                        return <Grid
                            key={office.id}
                            name={office.name}
                            description={office.description}
                            photo={office.photo}
                        />
                    })}
                </TabPanel>

                <TabPanel>
                    {this.state.offices.map((office) => {
                        return <OfficeMap
                            key={office.id}
                            lat={office.latitude}
                            lng={office.longitude}
                        />
                    })}
                </TabPanel>
            </Tabs>
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
              }
          })
          .catch((error) => {
              console.log(error)
          })
  }
}


export default App;
