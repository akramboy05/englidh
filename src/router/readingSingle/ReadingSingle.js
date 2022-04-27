import React, { useState, useEffect} from 'react'
import "./ReadingSingle.css"
import axios from 'axios'
import { HomeBooks } from '../../static/homeStatic'
import {useParams, useRouteMatch} from "react-router-dom"
import {AiOutlineCloudDownload} from "react-icons/ai"


function ReadingSingle({match}) {
    const { id } = useParams();
    const { url } =useRouteMatch();
    const [singleFile, setSingleFile] = useState(null)
    console.log(id)
    useEffect (()=>{
  
      axios.get(`http://localhost:4000/create/readingBooks/${id}`)
      .then((bannerFiles)=> setSingleFile(bannerFiles.data))
      .catch((err)=> console.error(err))
    }, [])
    console.log(singleFile)
    return (
    <div className='single_page'>
      <img src={singleFile?.fileImage} alt="" />
      <div className="singl_container">
      <h1>{singleFile?.fileName}</h1>
      <h2>{singleFile?.fileOwner}</h2>
      <p>{singleFile?.fileText.split(" ").map(item =>{
                    if(item.length > 26){
                        let resArr = []
                        for(let i = 0 ; i < item.length; i += 26 ){
                            resArr.push(item.slice(i, i+26))
                        }
                        return resArr.join(" ")
                    }
                    else{
                        return item + " "
                    }
                })}</p>
      
      <a href={singleFile?.fileDownload} download>Download</a>

      </div>
    </div>
  )
}

export default ReadingSingle