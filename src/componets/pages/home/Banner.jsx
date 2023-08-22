import React from 'react'

function Banner() {
   const backgroundImageUrl = 'assets/img/hero/hero_bg_1_1.jpg';
   const containerStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
    };
  return (
    <>
      <div className="th-hero-wrapper hero-1" id="hero">
         <div className="hero-slider-1 th-carousel" data-fade="true" data-slide-show="1" data-md-slide-show="1" data-dots="true">
            <div className="th-hero-slide">
               <div className="th-hero-bg" data-overlay="title" data-opacity="8" style={containerStyle}></div>
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="col-md-6">
                        <div className="hero-style1">
                           {/* <span className="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s"><span>35% OFF</span> LEARN FROM TODAY</span> */}
                           <h1 className="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.4s">Unlimited IPM-AT & PI  <span className="text-theme">Online & Classes.</span></h1>
                           <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">SWOT Analysis, Personal Mentor, Online Mock, IIM & IIT Faculty, Offline available in Delhi. India's Most Trusted & 3 Times Awarded. Experience your Personalizes Journey</p>
                           <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.8s"><a href="#" className="th-btn style3">Get Started<i className="fas fa-arrow-right ms-2"></i></a></div>
                        </div>
                     </div>
                     <div className="col-md-6 text-lg-end text-center">
                        <div className="hero-img1"><img src="assets/img/hero/hero_thumb_1_1.jpg" alt="hero" /></div>
                     </div>
                  </div>
               </div>
               <div className="hero-shape shape1"><img src="assets/img/hero/shape_1_1.png" alt="shape" /></div>
               <div className="hero-shape shape2"><img src="assets/img/hero/shape_1_2.png" alt="shape" /></div>
               <div className="hero-shape shape3"></div>
               <div className="hero-shape shape4 shape-mockup jump-reverse" data-right="3%" data-bottom="7%"><img src="assets/img/hero/shape_1_3.png" alt="shape" /></div>
               <div className="hero-shape shape5 shape-mockup jump-reverse" data-left="0" data-bottom="0"><img src="assets/img/hero/shape_1_4.png" alt="shape" /></div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Banner
