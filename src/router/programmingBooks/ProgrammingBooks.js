import React, {useState, useEffect} from 'react'
// import "./Ielts.css"
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom'

const ProgrammingBooks = () => {
  const { url } = useRouteMatch();
  const [bannerFiles, setBannerFiles] = useState(null)
  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:4000/create/booksProgramming")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

  console.log(bannerFiles);
  return (
    <div>
      <div className="home_banner_wrapper">
          {
            bannerFiles?.map((book, inx) =>
             <Link key={inx} to={`${url}/${book._id}`}>
               <div className="book_box" >
                <img src={book.fileImage} alt="" />
                <h2>{book.fileName}</h2>
                <h4>{book.fileOwner}</h4>
              </div>
             </Link>
            )
          
          }
         
          </div>
    </div>
  )
}

export default ProgrammingBooks