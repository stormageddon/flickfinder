import axios from 'axios'
import React from 'react'
import './GenrePicker.css'
import { render } from 'react-dom';

export default class GenrePicker extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.props.onChange;
        this.state = {genreList: []}
    }


    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list\?api_key\=652647989a10261ed3c342b6d54f9f21\&language\=en-US')
        .then((response) => {
            this.setState({genreList: response.data.genres})
        })
    }

    render() {
        return(
            <div>
                {this.state.genreList.map((genre) => {
                    return(
                        <div className="genre-row-component">
                            <input type="checkbox" key={genre.id} id={genre.id} name={genre.name} onChange={this.onChange}/>
                            <label>{genre.name}</label>
                        </div>

                    )
                })}
            </div>
        )
    }

}