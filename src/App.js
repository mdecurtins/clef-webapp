import React, { Component } from 'react';
import Header from './components/Header/Header';
import FlatEmbedContainer from './components/FlatEmbed/FlatEmbedContainer';
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
          <FlatEmbedContainer/>
          <SearchResultContainer/>
      </div>
    );
  }
}

export default App;
