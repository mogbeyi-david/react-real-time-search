import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Artist from './components/Artist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Artist />
      </div>
    );
  }
}

export default App;
