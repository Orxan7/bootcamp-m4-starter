import { useState } from "react";
import { useEffect } from "react";

function FavoriteItem({ item }){

    const [movie, setMovie] = useState([])

    const getMovie = async ()=>{
        const response = await fetch(`http://www.omdbapi.com/?i=${item}&apikey=cdd098d5`)
        const answ = await response.json()
        setMovie(answ)
    }

    useEffect(()=>{
        getMovie()
    }, [])

    return (
        <li key={item}>
            <a href={`https://www.imdb.com/title/${item}/`} target="_blank">{movie.Title} ({movie.Year})</a>
        </li>
    );
}
 
export default FavoriteItem;