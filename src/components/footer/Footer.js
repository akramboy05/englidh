import React from 'react'
import "./Footer.css"
import {useLocation} from "react-router-dom"

function Footer() {
  const location = useLocation()
  
  if(location.pathname === "/admin"){
    return <></>
  }
  return (
    <div className='footer'></div>
  )
}

export default Footer