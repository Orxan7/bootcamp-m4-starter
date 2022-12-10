const initialState = {
    searchLine: '',
    movies: [

    ],
    favorite: [
        {
            title: 'Новый список',
            movies: [
                
            ]
        },
    ]
}

export default function reducer(state=initialState, action) {

        switch(action.type) {
        case 'ADD_MOVIE_TO_FAVORITE':
            const movie = state.movies.find(item => item?.imdbID === action.payload?.id);
            const favorite_movies = 
                state.favorite[0].movies.find(item => item?.imdbID === action.payload?.id)?
                [ ...state.favorite[0].movies ] : [ ...state.favorite[0].movies, movie ];
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    movies: favorite_movies
                }],
              }
        case 'DELETE_MOVIE_FROM_FAVORITE': 
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    movies: state.favorite[0].movies.filter((item)=>{
                    return action.payload.id!==item.imdbID
                })}],
              }
        case 'CHANGE_MOVIES_FOR_SEARCH':
            return {
                ...state,
                movies: action.payload.movies,
              }
        case 'CHANGE_SEARCHLINE':
            return {
                ...state,
                searchLine: action.payload.search
            }
        case "CHANGE_TITLE_OF_FAVORITE":
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    title: action.payload.title
              }]
            }
        case "CLEAR_FAVORITES":
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    movies: [],
                    title: ""
              }]
            }
        default:
          return state;
    }
}