import React from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { changeMoviesForSearch } from "../../redux/actions";

import './Movies.css';
import { useEffect } from 'react';


const mapStateToProps = (state) => {
    return {
        search: state.searchLine,
        movies: state.movies
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onChangeMoviesForSearch: (movies) => dispatch(changeMoviesForSearch(movies))
  });


function Movies({ onChangeMoviesForSearch , search, movies}) {

    const getMovies = async ()=>{
        let response = search? await fetch(`http://www.omdbapi.com/?s=${search}&apikey=cdd098d5`) : 1;
        let data = search? await response.json(): [];
        onChangeMoviesForSearch(data?.Search)
    }


    useEffect(()=>{
        getMovies()
        return ()=>{
            onChangeMoviesForSearch([])
        }
    }, [search])

    return ( 
        <ul className="movies">
            { movies?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Movies);