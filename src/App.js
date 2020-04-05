import React, { Component } from 'react';
import Header from './components/header';
import CasesSummary from './components/casesSummary';
import LeafletMapCircleMarker from './components/leafletmapCircleMarker';
import "./App.css";

class App extends Component{
  
  render(){
    return (
      <div className="App">
        <Header />
        <LeafletMapCircleMarker/>  
        <CasesSummary />
      </div>
    );
  }
}

export default App;
