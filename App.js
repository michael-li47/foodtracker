import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import SelectionTable from "./table";

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
    };
  }

  render(){
    return (
      <div class=' container-fluid' id='container1'>
        <header class='food-header' align='center'>
          <h1>
            FOOD TRACKER
          </h1>
        </header>
        <div id='row-container' class='row'>
          <div class='col-md-2'></div>
          <div id='table-column' class='border col-md-8'>
            <SelectionTable/>
          </div>
          <div class='col-md-2'></div>
        </div>
        <footer>
          Note: Click on cells to edit data.
        </footer>
      </div>
      
    )

    
  }
}

export default App;