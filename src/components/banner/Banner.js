import React from "react";
import "./Banner.css";
import bannerImg1 from "../../images/banner-box/banner-box.jpg"
import bannerImg2 from "../../images/banner-box/banner-box.jpeg"
import bannerImg3 from "../../images/banner-box/banner-box2.jpeg"



export default function App() {
  return (
    <>
      <div className="Banner">
          <div className="banner_wrapper">
            <div className="banner_wrapper_box"><img src={bannerImg1} alt="" />
            <h1>Self-study online courses</h1> <p>Unlimited access to online English courses for £5.99 per month</p>
            <button>Learn more</button>
            </div>
            <div className="banner_wrapper_box"><img src={bannerImg2} alt="" />
            <h1>Live online classes</h1><p>Interactive group classes with expert teachers. Free 7-day trial</p>
            <button>Learn more</button>
            </div>
            <div className="banner_wrapper_box"><img src={bannerImg3} alt="" />
            <h1>Personal online tutoring</h1> <p>Online one-to-one English tutoring – enjoy your first session for only $1</p>
            <button>Learn more</button>
            </div>
          </div>
      </div>  
    </>
  );
}
