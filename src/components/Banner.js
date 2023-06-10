import React from 'react'
import './Banner.css'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../instanceConfig'
import requests from '../request'


export default function Banner() {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([])


    const fetchData = async () => {

        const datas = await instance.get(requests.fetchNetflixOriginals)


        const { results } = datas.data

        setMovies(results[Math.floor(Math.random() * results.length)])

    }

    console.log(movies);

    useEffect(() => {
        fetchData()
    }, [])





    return (

        <>

            <div className='image_banner' style={{
                backgroundImage: `url(${base_url}/${movies?.backdrop_path})`,
                backgroundSize: 'cover',
                top: 0


            }}>
                <div className='banner_text'>

                    <h1 className='banner_title'>{movies?.name}</h1>

                    <h2 className='banner_overview'>{movies.overview}</h2>

                </div>
            </div>

        </>


    )
}
