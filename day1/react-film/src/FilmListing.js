import React, { Component } from 'react';
import './App.css';
import FilmRow from './FilmRow'

class FilmListing extends Component {
  render() {
    const { films } = this.props
    console.log('props',this.props)
    let allFilms = this.props.films.map((film, index) => (
        <FilmRow
          key={index}
          title={film.title}
          posterUrl={film.poster_path}
          year={film.release_date}
          overview={film.overview}
        />
      ))
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {/* <h1>{films[0].title}</h1> */}
        {allFilms}
        <h1>{films.title}</h1>
        <p>{films.title}</p>
      </div>
    );
  }
}

export default FilmListing;
