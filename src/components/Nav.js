import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Nav() {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){

                setShow(true)

            }
            else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`nav ${show&& 'navbag'}`}>
        <img width={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix image" />
    </div>
  )
}
