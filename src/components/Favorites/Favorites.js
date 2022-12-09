import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieToFavorite, deleteMovieFromFavorite } from "../../redux/actions";

import './Favorites.css';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        favorite: state.favorite
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onMovieAddToFavorite: (id) => dispatch(addMovieToFavorite(id)),
    onMovieDeleteFromFavorite: (index) => dispatch(deleteMovieFromFavorite(index))
  });

function Favorites({ favorite, onMovieDeleteFromFavorite }) {

return (
    <div className="favorites">
        <input value="Новый список" className="favorites__name" />
        <ul className="favorites__list">
            {favorite?.map(item=>{
                return (
                    item.movies.map((movie) => (
                        <li key={movie.imdbID} className="favorites__list-item">
                            {movie.Title} ({movie.Year})
                            <button className="favorites__list-item-delete-button" onClick={()=>onMovieDeleteFromFavorite(movie.imdbID)}>X</button>
                            </li>
                        
                        ))
                )
            })
            }
        </ul>
        <button type="button" className="favorites__save"><Link to={`/list/1`} >Сохранить список</Link></button>
    </div>
);
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);