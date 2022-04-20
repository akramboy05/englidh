import React, { useState, useEffect} from 'react'
// import "./SinglePage.css"
import axios from 'axios'
import { HomeBooks } from '../../static/homeStatic'
import {useParams, useRouteMatch} from "react-router-dom"


function SpeackingSingle({match}) {
    const { id } = useParams();
    const { url } =useRouteMatch();
    const [singleFile, setSingleFile] = useState(null)
    console.log(id)
    useEffect (()=>{
  
      axios.get(`http://localhost:4000/create/speackingBooks/${id}`)
      .then((bannerFiles)=> setSingleFile(bannerFiles.data))
      .catch((err)=> console.error(err))
    }, [])
    console.log(singleFile)
    return (
    <div className='single_page'>
      <h1>{singleFile?.fileName}</h1>
      <img src={singleFile?.fileImage} alt="" />
      <a href={singleFile?.link} download>yuklab olish</a>
    </div>
  )
}

export default SpeackingSingle