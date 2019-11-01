import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogsList from './HogsList'


class App extends Component {

  constructor(){
    super()
    this.state={
      filter: 'Off'
    }
  }

  toggleFilter = (status) => {
    this.setState({
      filter: status
    })
  }

  hogsList = () => {
    let filteredHogs = hogs.filter(hog => {
      return hog.greased
    })
    return filteredHogs
  }

  render() {
    return (
      <div className="App">
          <Nav filterStatus={this.toggleFilter} filterState={this.state.filter}/>
          <HogsList hogsList={this.state.filter === 'Off' ? hogs : this.hogsList()}/>
      </div>
    )
  }
}

export default App;
