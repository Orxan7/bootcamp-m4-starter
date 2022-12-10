import React, {  useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieToFavorite, deleteMovieFromFavorite, clearFavorites, changeTitleOfFavorite } from "../../redux/actions";

import './Favorites.css';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        favorite: state.favorite
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onMovieAddToFavorite: (id) => dispatch(addMovieToFavorite(id)),
    onMovieDeleteFromFavorite: (index) => dispatch(deleteMovieFromFavorite(index)),
    onChangeTitleOfFavorite: (id) => dispatch(changeTitleOfFavorite(id)),
    onClearFavorites: () => dispatch(clearFavorites()),
  });

function Favorites({ favorite, onMovieDeleteFromFavorite, onChangeTitleOfFavorite, onClearFavorites }) {

    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [click, setClick] = useState(false)

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    const sendOnClick = (event)=>{
        onChangeTitleOfFavorite(value)
        setClick(true)
        event.preventDefault();
        let array = []
        favorite[0].movies.map(item=>{
            array.push(item.imdbID)
            return item
        })

        fetch("https://acb-api.algoritmika.org/api/movies/list/",{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "title": value,
                "movies": array
            })
        })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setResult(data)
            return data
        })
    }

    return (
        <div className="favorites">
            <input value={value} placeholder='Введите название списка' className="favorites__name" onChange={inputChange} />
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
            {favorite[0].movies.length && value?
            !result.id?
            <button type="button" className="favorites__save" onClick={sendOnClick}>{!click?"Сохранить список":"Идет запрос..."}</button>:
            <Link to={`/list/${result.id}`} state={{...result}}>Перейти к списку</Link>:
            <button type="button" className="favorites__save favorites__save-empty">Сохранить список</button>
            }   
        </div>
    );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);