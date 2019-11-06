import React, { Component } from 'react';
import './App.css';
import './App.js';

class App extends Component {
    constructor(props){
      super(props);
     
      this.state = {
        searchText: "",
        nivel:"",
        location:"", 
        myJob: []
      }

      this.state.searchText = this.searchText.bind(this);
      this.state.nivel = this.nivel.bind(this);
      this.state.location = this.nivel.bind(this);
      
      this.addJob = this.addJob.bind(this);
    }
      addJob(){

        let allJobs = this.state.myJob;
        allJobs.push(this.state.newJob);

        this.setState({
          myJob: allJobs
        })

          
    }
    
    }

export default App;