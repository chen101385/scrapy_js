import React, { Component } from 'react';
import logo from './images/web-crawler.jpg';
import './App.css';
import Search from './components/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScrape: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({ currentScrape: '' })
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
          This is my intro
        </p>
      </div>
    );
  }
}

export default App;
