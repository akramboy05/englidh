import React from 'react'
import Banner from "../../components/banner/Banner"
import "./Home.css"
import { HomeBooks } from '../../static/homeStatic'


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

            <div className="home_media_text">
              <h1>English for work: business English online course</h1>
              <p>Improve your confidence when using English at work. Convenient class times, expert teachers and certificate of achievement.</p>
              <button>Get 30% off</button>
            </div>
          </div>
      </div>
      <div className="home_text">
        <div className="line"></div>
        <h1>Welcome to LearnEnglish</h1>
        <p>Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners. Everything you find here has been specially created by the British Council, the world's English teaching experts.</p>
      </div>
      <Banner/>
    </div>
  )
}

export default Home