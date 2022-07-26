import axios from "axios"
import React from "react";
import './MovieList.css';

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {movieList: []}
        this.parentState = this.props.state
        this.fetchMovies = this.fetchMovies.bind(this)
    }

    componentDidMount() {
        
      
    }

    fetchMovies() {
        const genres = this.parentState.selectedGenres.join(',')
        axios.get('https://api.themoviedb.org/3/discover/movie\?api_key\=652647989a10261ed3c342b6d54f9f21\&language\=en-US\&include_adult\=false\&include_video\=false\&page\=' + 1 + '\&with_genres\=' + genres)
        .then((response) => {
            const randPage = Math.floor(Math.random() * (Math.min(response.data.total_pages, 500) - 1) + 1)
            axios.get('https://api.themoviedb.org/3/discover/movie\?api_key\=652647989a10261ed3c342b6d54f9f21\&language\=en-US\&include_adult\=false\&include_video\=false\&page\=' + randPage + '\&with_genres\=' + genres)
            .then((response) => { 
                 this.setState({movieList: response.data.results})
            })
        })
 
    }

    render() {
        const photoUrlPrefix = "https://image.tmdb.org/t/p/original/"
        let button;
        if (this.state.movieList.length <= 0) {
            button = <button onClick={this.fetchMovies}>Pick a flick!</button>
        }
        else {
            button = <button onClick={this.fetchMovies}>Reroll!</button>
        }
        return(
            <div>
                <div>
                    {button}
                </div>
                <div>
                {this.state.movieList.length > 0 &&
                this.state.movieList.map((movie) => {
                    return(
                        <div className="movie-card" key={movie.id}>
                            <img  className="thumbnail" src={photoUrlPrefix + movie.poster_path} />
                            <p>{movie.original_title}</p>
                            <p>{movie.overview}</p>
                            <p>{movie.popularity}</p>
                        </div>
                    )})}
                </div>
            </div>
        )
    }

}