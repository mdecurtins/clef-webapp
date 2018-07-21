import React, { Component } from 'react';
import Header from './components/Header/Header';
import AlgorithmsContainer from './components/Algorithms/AlgorithmsContainer';
import DatasetsContainer from './components/Datasets/DatasetsContainer';
import FlatEmbedContainer from './components/FlatEmbed/FlatEmbedContainer';
import ErrorsContainer from './components/Errors/ErrorsContainer';
import FacetsContainer from './components/Facets/FacetsContainer';
import SearchResultContainer from './components/SearchResult/SearchResultContainer';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Header name="Clef Webapp" />
          <div id="clef-inputs-container">
              <AlgorithmsContainer/>
              <DatasetsContainer/>
              <div className="clef-flat-container">
                  <FlatEmbedContainer/>
                  <ErrorsContainer/>
              </div>

          </div>


          <div id="clef-results-container">
              <FacetsContainer/>
              <SearchResultContainer/>
          </div>

      </div>
    );
  }
}

export default App;
