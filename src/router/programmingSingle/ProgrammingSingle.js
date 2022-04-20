import React, { useState, useEffect} from 'react'
// import "./SinglePage.css"
import axios from 'axios'
import { HomeBooks } from '../../static/homeStatic'
import {useParams, useRouteMatch} from "react-router-dom"


function ProgrammingSingle({match}) {
    const { id } = useParams();
    const { url } =useRouteMatch();
    const [singleFile, setSingleFile] = useState(null)
    console.log(id)
    useEffect (()=>{
  
      axios.get(`http://localhost:4000/create/booksProgramming/${id}`)
      .then((bannerFiles)=> setSingleFile(bannerFiles.data))
      .catch((err)=> console.error(err))
    }, [])
    console.log(singleFile)
    return (
    <div className='single_page'>
      <img src={singleFile?.fileImage} alt="" />
      <h1>{singleFile?.fileName}</h1>
      <h2>{singleFile?.fileOwner}</h2>
      <a href={singleFile?.fileDownload} download>yuklab olish</a>

    </div>
  )
}

export default ProgrammingSingle