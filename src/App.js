import React, { Component } from 'react';
import Header from './components/Header/Header';
import AlgorithmsContainer from './components/Algorithms/AlgorithmsContainer';
import DatasetsContainer from './components/Datasets/DatasetsContainer';
import FlatEmbedContainer from './components/FlatEmbed/FlatEmbedContainer';
import ErrorsContainer from './components/Errors/ErrorsContainer';
import FacetsContainer from './components/Facets/FacetsContainer';
import SearchResultContainer from './components/SearchResult/SearchResultContainer';
import logo from './images/clef_logo.svg';
import FaGithub from 'react-icons/lib/fa/github';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
            <div className="App-header-inner">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title-wrapper">
                    <h1 className="App-title">Clef Web Application</h1>
                </div>
                <div className="App-main-menu">
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Documentation</a>
                        <a href="#"><FaGithub/> GitHub</a>
                    </nav>
                </div>
            </div>

        </header>
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
