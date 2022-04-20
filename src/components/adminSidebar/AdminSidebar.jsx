import React from 'react'
import "./AdminSidebar.css"
import {NavLink} from "react-router-dom" 

const AdminSidebar = () => {
  return (
    <div>
        <div className="admin_sidebar">
            <NavLink to="/admin/booksBanner">Banner Books</NavLink>
            <NavLink to="/admin/booksIelts">Ielts Books</NavLink>
            <NavLink to="/admin/booksSpeaking">Speacking Books</NavLink>
            <NavLink to="/admin/booksReading">Reading Books</NavLink>
            <NavLink to="/admin/booksAudio">Audio Books</NavLink>
            <NavLink to="/admin/booksProgramming">Programming Books</NavLink>
            
        </div>
    </div>
  )
}

export default AdminSidebar