import React, { useEffect } from 'react'
import instance from '../instanceConfig'
import { useState } from 'react'
import './Row.css';



 function Row({title,fetchUrl,isPoster}) {

    const base_url="https://image.tmdb.org/t/p/original/";

    const [movies,setMovies]=useState([])




    const fetchData = async ()=>{
        const response= await instance.get(fetchUrl)
       
        const {results}=response.data
       
        
        setMovies(results)


       
    }
   

    useEffect(()=>{
        fetchData ()
    },[])
    
  return (
    <>
   <div className='main_div'>
      
      <h2>{title}</h2>
  
      <div className='movie_row'>
  
  { 
  
  movies.map((image)=>(
      < img className={`image ${isPoster && 'poster'}`} src={`${base_url}/${isPoster?image?.poster_path:image?.backdrop_path}` } alt="movie image" />
  ))
  }
      </div>
  
   </div>
    </>
  )
}

export default Row