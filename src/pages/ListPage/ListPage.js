import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteItem from '../../components/ListPageComponents/FavoriteItem';

import './ListPage.css';

function ListPage () {

    const { id } = useParams()
    const [data, setData] = useState([])

    const getData = async ()=>{
        const response = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        const data_new = await response.json()
        setData(data_new)
    }

    useEffect(()=>{
        getData()
    }, [id])


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