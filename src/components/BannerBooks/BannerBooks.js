import React from 'react'
import "./BannerBooks.css"
import {AiFillCaretRight} from "react-icons/ai"
import ielts from "../../assets/ielts.png"
import speaking from "../../assets/speaking.jpg"
import reading from "../../assets/reading.webp"
import audio from "../../assets/audio.png"


const BannerBooks = () => {
  return (
    <div>
        <div className="banner_books_wrapper">
                <div className="banner_books_box">
                    <div className="banner_books_box_left">
                        <h1>IELTS Books</h1>
                        <h3>The best Ielts books for you</h3>
                        <h2>Learn more <AiFillCaretRight/></h2>
                    </div>
                    <div className="banner_books_box_right">
                        <img src={ielts} alt="" />
                    </div>
                </div>
                <div className="banner_books_box">
                    <div className="banner_books_box_left">
                        <h1>Speeking Books</h1>
                        <h3>The best Speeking books for you</h3>
                        <h2>Learn more <AiFillCaretRight/></h2>

                    </div>
                    <div className="banner_books_box_right">
                        <img src={speaking} alt="" />
                    </div>
                </div>
                <div className="banner_books_box">
                    <div className="banner_books_box_left">
                        <h1>Reading Books</h1>
                        <h3>The best Reading books for you</h3>
                        <h2>Learn more <AiFillCaretRight/> </h2>

                    </div>
                    <div className="banner_books_box_right">
                        <img src={reading} alt="" />
                    </div>
                </div>
                <div className="banner_books_box">
                    <div className="banner_books_box_left">
                        <h1>Audio Books</h1>
                        <h3>The best Audio books for you</h3>
                        <h2>Learn more <AiFillCaretRight/></h2>

                    </div>
                    <div className="banner_books_box_right">
                        <img src={audio} alt="" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default BannerBooks