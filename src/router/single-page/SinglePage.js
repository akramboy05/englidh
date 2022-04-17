import React from 'react'
import "./SinglePage.css"
import { HomeBooks } from '../../static/homeStatic'
import {useRouteMatch} from "react-router-dom"


function SinglePage({match}) {
    let {params} = match
    console.log(params.id);
    let filteredBook = HomeBooks.filter(book=> String(book.id) === params.id)[0]
    console.log(useRouteMatch());
    return (
    <div className='single_page'>
        <img src={filteredBook.img} alt="" />
        <div>
            <h1>{filteredBook.title}</h1>
            <h2>{filteredBook.owner}</h2>
        </div>
    </div>
  )
}

export default SinglePage