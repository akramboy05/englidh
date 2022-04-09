import React from 'react'
import "./Loader.css"
import img from "../../assets/loader2.gif"

function Loader() {
  return (
    <div className='loader'>
        <img src={img} alt="" />
    </div>
  )
}

export default Loader