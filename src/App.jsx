import React, { Component } from 'react';
import logo from './images/web-crawler.jpg';
import './App.css';
import Search from './components/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(input) {
    //input working; tested via console.log
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Scrapy_JS!</h1>
        </header>
        <Search onSubmit={input => this.onSubmit(input)} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
