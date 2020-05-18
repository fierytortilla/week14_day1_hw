import React, { Component } from 'react';
import Film from './Film.js'

class FilmList extends Component {

    render(){
        const filmsArray = this.props.films.map(film=> {
            return(
            <span style={{color:'blue'}}><li><Film> {film.name}</Film></li> </span>
            )
        })
        return(
            <div>
                <ul>
                {filmsArray}
                </ul>
            </div>
        )
    }

}

export default FilmList;
