import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMovieToFavorite, deleteMovieFromFavorite } from "../../redux/actions";

import './ListPage.css';


const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        favorite: state.favorite
    }
  };


const mapDispatchToProps = dispatch => ({
    onGoodAddToCart: (id) => dispatch(addMovieToFavorite(id)),
    onGoodDeleteFromCart: (index) => dispatch(deleteMovieFromFavorite(index))
});

class ListPage extends Component {

    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }

    componentDidMount() {
        const { movies } = this.props;
        console.log(movies);
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    
    render() { 
        const { movies } = this.props;
        console.log(movies)

        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);