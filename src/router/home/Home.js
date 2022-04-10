import React from 'react'
import Banner from "../../components/banner/Banner"
import "./Home.css"
import { HomeBooks } from '../../static/homeStatic'
import {AiFillCaretRight} from "react-icons/ai"
import BannerBooks from '../../components/BannerBooks/BannerBooks'


function Home() {
  return (
    <div>
      <div className="home_banner">
          <div className="home_banner_wrapper">
          {
            HomeBooks.map((book, inx) =>
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