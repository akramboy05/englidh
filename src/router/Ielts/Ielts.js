import React, {useState, useEffect} from 'react'
import "./Ielts.css"
import axios from 'axios'

const Ielts = () => {
  const [bannerFiles, setBannerFiles] = useState(null)
  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:4000/create/booksIelts/all")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

  console.log(bannerFiles);
  return (
    <div>
      <div className="home_banner_wrapper">
          {
            bannerFiles?.map((book, inx) =>
              <div className="book_box" key={inx}>
                <img src={book.fileImage} alt="" />
                <h2>{book.fileName}</h2>
                <h4>{book.fileOwner}</h4>
              </div>
            )
          
          }
         
          </div>
    </div>
  )
}

export default Ielts