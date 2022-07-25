import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import axios from "axios"

function App() {
  console.log("TEST TEST TEST")
  axios.get('https://api.themoviedb.org/3/discover/movie\?api_key\=652647989a10261ed3c342b6d54f9f21\&language\=en-US\&include_adult\=true\&include_video\=false\&page\=1\&with_genres\=35%7C878\&with_watch_monetization_types\=flatrate')
  .then((results) => { console.log(results)})
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
      <MovieList />
    </div>
  );
}

export default App;
