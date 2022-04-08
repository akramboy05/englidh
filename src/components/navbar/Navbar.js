import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom"
import logo from "../../images/logo.svg"
import { HiOutlineSearch } from "react-icons/hi"
import { MenuItem } from "./MenuItem"
import { FaBars } from "react-icons/fa"
import { FiXCircle } from "react-icons/fi"



function Navbar() {
  const location = useLocation()
  const [showShadow, setShowShadow] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [locationShow, setLocationShow] = useState(false);
  const [openUl, setOpenUl] = useState(false)


  if(location.pathname === "/admin"){
    return <></>
  }
  return (
    <div className='navbar'>
      <div className="navbar_top">
        <div className="navbar_top_first">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="a"></div>
          <h1>LearnEnglish</h1>
        </div>
        <div className="navbar_second">
          <div className={
            inputFocus ? "navbar_search goldBorder" : "navbar_search"
          }><input onBlur={() => {
            setInputFocus(false);
            setShowShadow(false);
            // setLanguageShow(false)
          }}
            onFocus={() => {
              setInputFocus(true);
              setShowShadow(true);
              // setLanguageShow(true)
            }} type="search" placeholder='search' />  <HiOutlineSearch /></div>
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="menu">
          <p>menu</p>
          {!openUl ? <FaBars onClick={() => setOpenUl(!openUl)} /> : <FiXCircle onClick={() => setOpenUl(!openUl)} />}
        </div>
        <ul className={openUl ? "hdr_bottom_collection" : "hdr_bottom_collection_close"}>
          {MenuItem.map((item, index) =>
            <Link key={index} to={item.url} className="hdr_bottom_coll_item"><li>{item.title}</li></Link>
          )}
        </ul>
      </div>


      {/* <div className={openUl ? "navbar_bottom_close" : "navbar_bottom"}  >
        <ul className='navbar_bottom_collection'>
          {MenuItem.map((item, inx) => {
            return (
              <Link className='ul_link' to={item.url}>
                <li key={inx}><a className={item.cName} >
                  {item.title}
                </a></li>
                <div className="expand">
                  {
                    item.expand?.map((i, inx) => (
                      <Link>
                        {i}
                      </Link>
                    ))
                  }
                </div>
              </Link>
            )
          })}

        </ul>
      </div> */}
      <div onClick={() => {
        setShowShadow(false)
        setLocationShow(false)
      }}
        style={locationShow ? { zIndex: 14 } : { zIndex: 10 }}
        className={showShadow ? "navbar_shadow show" : "navbar_shadow close"}
      ></div>
    </div>
  )
}

export default Navbar