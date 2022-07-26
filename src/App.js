import logo from './logo.svg';
import React from 'react';
import './App.css';
import MovieList from './MovieList.js';
import GenrePicker from './GenrePicker.js';

function App() {
  const state = {
    selectedGenres: []
  }

  function handleCheckboxChanged(event) {
    if (state.selectedGenres.filter((id) => id == event.target.id).length == 0) {
      state.selectedGenres.push(event.target.id)
    }
    else {
      state.selectedGenres = state.selectedGenres.filter((id) => id != event.target.id)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FlickFinder! Trouble deciding what to watch? Let FlickFinder decide for you!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GenrePicker onChange={handleCheckboxChanged}/>
      <MovieList state={state}/>
    </div>
  );
}

export default App;
