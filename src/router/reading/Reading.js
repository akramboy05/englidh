import React, {useState, useEffect} from 'react'
import "./Reading.css"
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom'

const Reading = () => {
  const { url } = useRouteMatch();
  const [bannerFiles, setBannerFiles] = useState(null)
  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:4000/create/readingBooks/all")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

  console.log(bannerFiles);
  return (
    <div>
      <div className="home_banner_wrapper">
          {
            bannerFiles?.slice(0,20).map((book, inx) =>
             <Link key={inx} to={`${url}/${book._id}`}>
               <div className="book_box" >
                <img src={book.fileImage} alt="" />
                {/* <h2>{book.fileName}</h2>
                <h4>{book.fileOwner}</h4> */}
              </div>
             </Link>
            )
          
          }
          <div className="box">
            <h1>Travel UK</h1>
          </div>
          {
            bannerFiles?.slice(20,50).map((book, inx) =>
             <Link key={inx} to={`${url}/${book._id}`}>
               <div className="book_box" >
                <img src={book.fileImage} alt="" />
                {/* <h2>{book.fileName}</h2>
                <h4>{book.fileOwner}</h4> */}
              </div>
             </Link>
            )
          
          }
          </div>
    </div>
  )
}

export default Reading