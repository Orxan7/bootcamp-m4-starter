import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteItem from '../../components/ListPageComponents/FavoriteItem';

import './ListPage.css';

function ListPage () {

    const location = useLocation()
    const { id } = location.state
    const [data, setData] = useState([])

    const getData = async (id)=>{
        const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        const data = await response.json()
        setData(data)
    }

    useEffect(()=>{
        getData(id)
    },[id])


    return (
        <div className="list-page">
            <h1 className="list-page__title">{data.title}</h1>
            <ul>
                {data.movies?.map((item) => {
                    return (
                        <FavoriteItem item={item} key={item}/>
                    );
                })}
            </ul>
        </div>
    );
}
 
export default ListPage;