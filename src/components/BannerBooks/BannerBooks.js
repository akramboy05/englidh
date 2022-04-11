import React from 'react'
import "./BannerBooks.css"
import {AiFillCaretRight} from "react-icons/ai"
import ielts from "../../assets/ielts.png"
import speaking from "../../assets/speaking.jpg"
import reading from "../../assets/reading.webp"
import audio from "../../assets/audio.png"
import {Link} from "react-router-dom"


const BannerBooks = () => {
  return (
    <div>
        <div className="banner_books_wrapper">
              <Link to="/ielts">
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
              </Link>
               <Link to="/speacking">
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
               </Link>
                <Link to="/reading">
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
                </Link>
               <Link to="/audio">
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
               </Link>
        </div>
        <div className="banner_text">
            <h1>WHY INDEPENDENCE MATTERS</h1>
            <p>Think about the last good book you read. Did it make you feel more connected to others? Maybe it served as a welcome escape. Maybe it helped you rediscover the beauty in life. Did it surprise you?</p>

            <p>As an independent bookstore, we strive to offer the same variety and richness of experience as the books on our shelves. And because the only people we’re beholden to are our customers and ourselves, we can focus on what really matters — promoting diverse perspectives, upholding the free exchange of ideas, championing the enduring power of books, and bolstering the great community of readers and authors we’re lucky to be a part of.</p>
            <p>
            Thank you for supporting these lofty goals. Your choice sustains a family business, and allows us to follow our passion for getting the right books into the right hands, 365 days a year.</p>
        </div>
    </div>
  )
}

export default BannerBooks