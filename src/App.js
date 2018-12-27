import React, { Component } from 'react';
import './App.css';
import ReminderInput from './components/ReminderInput'
import {Grid} from 'react-bootstrap';
import ItemsList  from './components/ItemsList';


class App extends Component {


  render() {
    return (
      <div className="container ">
        <Grid className="card">
          <ReminderInput/>
          <ItemsList/>
        </Grid>
      </div>
    );
  }
}

export default App;
