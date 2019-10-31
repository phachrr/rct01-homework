import React, { Component } from 'react';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import './App.css';
class App extends Component {
  render() {
    const { films } = this.props
    return (
      <div className="film-library">
        <FilmListing films={films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
