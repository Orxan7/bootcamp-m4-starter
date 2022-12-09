import React from 'react';
import { connect } from 'react-redux';
import { addMovieToFavorite, deleteMovieFromFavorite } from "../../redux/actions";

import './MovieItem.css';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        favorite: state.favorite[0]
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onMovieAddToFavorite: (id) => dispatch(addMovieToFavorite(id)),
    onMovieDeleteFromFavorite: (index) => dispatch(deleteMovieFromFavorite(index))
  });

function MovieItem ({ Title, Year, Poster, onMovieAddToFavorite, imdbID, favorite }) {
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>{
                    favorite.movies.find((item)=>item.imdbID===imdbID)?
                    <button type="button" className="movie-item__add-button movie-item__add-button_disable">Уже добавлен</button>:
                    <button type="button" className="movie-item__add-button" onClick={()=>{onMovieAddToFavorite(imdbID)}}>Добавить в список</button>
                }
            </div>
        </article>
    );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);