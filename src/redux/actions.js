export function addMovieToFavorite(id) {
    return {
      type: 'ADD_MOVIE_TO_FAVORITE',
      payload: {
        id: id
      }
    }
  }
  
export function deleteMovieFromFavorite(id) {
  return {
    type: 'DELETE_MOVIE_FROM_FAVORITE',
    payload: {
      id: id
    }
  }
}
  
export function changeMoviesForSearch(movies) {
  return {
    type: 'CHANGE_MOVIES_FOR_SEARCH',
    payload: {
      movies: movies
    }
  }
}

export function changeSearchLine(text) {
  return {
    type: 'CHANGE_SEARCHLINE',
    payload: {
      search: text
    }
  }
}


export function changeTitleOfFavorite(text) {
  return {
    type: 'CHANGE_TITLE_OF_FAVORITE',
    payload: {
      title: text
    }
  }
}

export function clearFavorites(text) {
  return {
    type: 'CLEAR_FAVORITES',
    payload: {
      title: text
    }
  }
}

