import React, {useState, useEffect} from 'react'
import Banner from "../../components/banner/Banner"
import "./Home.css"
import { HomeBooks } from '../../static/homeStatic'
import {AiFillCaretRight} from "react-icons/ai"
import BannerBooks from '../../components/BannerBooks/BannerBooks'
import axios from "axios"

function Home() {
  const [bannerFiles, setBannerFiles] = useState(null)
  const [searchResult, setSearchResult] = useState([])


  const seearchDocs =(value)=>{
    if(value !== ""){
      axios
      .post("http://localhost:4000/create/search",{
        ileName:value,
      })
      .then((response)=> setSearchResult(response.data))
      .catch((err)=> console.log(err))
    }
  }

  useEffect (()=>{
    setBannerFiles(null);

    axios.get("http://localhost:4000/create/books/bannerBooks")
    .then((bannerFiles)=> setBannerFiles(bannerFiles.data))
    .catch((err)=> console.error(err))
  }, [])

  console.log(bannerFiles);
  return (
    <div>
      <div className="home_banner">
      {/* <div className="searchbar">
      <input type="search" placeholder='search' onChange={(e)=> seearchDocs(e.target.value)}/> */}
      {/* {searchResults.length ? (
            <div className="inputResult">
              {searchResults.map((ss) => (
                <Link className="searchLink" to={/search/${ss?._id}}>
                  {ss?.productInfo.length > 40
                    ? ${[...ss?.productInfo].slice(0, 38).join("")}...
                    : ss?.productInfo}
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )} */}
      {/* </div> */}


          <div className="home_banner_wrapper">
          {
            HomeBooks?.map((book, inx) =>
              <div className="book_box" key={inx}>
                <img src={book.img} alt="" />
                <h2>{book.title}</h2>
                <h4>{book.owner}</h4>
              </div>
            )
          
          }
         
          </div>
          <div className="media_book">
            <div className="media_book_right">
              <h1>Staff Top Fives</h1>
              <h3>Our favorite books of 2021-22</h3>
              <h2>READ THE LIST <AiFillCaretRight/></h2>
            </div>
            <div className="media_book_left"></div>
          </div>
      </div>
      <div className="home_text">
        <div className="line"></div>
        <h1>Welcome to LearnEnglish</h1>
        <p>Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners. Everything you find here has been specially created by the British Council, the world's English teaching experts.</p>
      </div>
      <Banner/>
      <BannerBooks/>
    </div>
  )
}

export default Home