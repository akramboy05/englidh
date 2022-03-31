import React from 'react'
import "./Navbar.css"
import { useLocation } from "react-router-dom"


function Navbar() {
  const location = useLocation()

  if (location.pathname === "/admin") {
    return <></>
  }
  return (
    <div className='navbar__main'>
     
    </div>
  )
}

export default Navbar