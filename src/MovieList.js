import axios from "axios"
import React from "react";

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {movieList: 'default'}
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie\?api_key\=652647989a10261ed3c342b6d54f9f21\&language\=en-US\&include_adult\=true\&include_video\=false\&page\=1\&with_genres\=35%7C878\&with_watch_monetization_types\=flatrate')
        .then((results) => { 
             this.setState({movieList: results})
        })
      
    }

    render() {
        return(
            <p>{this.state.movieList}</p>

        )
    }

}