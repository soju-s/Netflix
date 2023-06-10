import React from 'react'
import './Banner.css'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../instanceConfig'
import requests from '../request'


export default function Banner() {

    const [movies,setMovies]=useState([])


    const fetchData= async()=>{

        const datas=await instance.get(requests.fetchNetflixOriginals)
        

       const  {results}=datas.data
        console.log(results);
        setMovies(results)

    }

    useEffect(()=>{
        fetchData()
    },[])





  return (

   <>
        
        <div>Banner</div>
    <div>
        
            {
                movies.map((datass)=>(
                   
                ))
            }
    </div>
   </>


  )
}
