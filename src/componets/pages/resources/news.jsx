import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function News() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">News & Events</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Resources</a></li>
                  <li>News & Events</li>
               </ul>
            </div>
         </div>
      </div>
      <section className="testi-area-1 bgingtest overflow-hidden space-bottom">
         <div className="shape-mockup testi-bg-shape1 jump" data-right="0" data-top="50%"><img src="assets/img/testimonial/testi-bg-shape_1_1.png" alt="img" /></div>
         <div className="shape-mockup testi-bg-shape2 spin" data-left="0" data-top="15%"><img src="assets/img/testimonial/testi-bg-shape_1_2.png" alt="img" /></div>
         <div className="container">
            <div className="title-area text-center mb-50">
               <span className="sub-title"><i className="fal fa-book me-2"></i> News & Events</span>
               <h2 className="sec-title">Stay Updated with your Prime-mate</h2>
            </div>
            <div className="row">
               <div className="col-xl-12">
                  <div className="th-carousel testi-slider1 dot-style2 row" id="testimonial-slider1" data-slide-show="2" data-ml-slide-show="2" data-lg-slide-show="1" data-md-slide-show="1" data-dots="true" data-arrows="false">
                     <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1.png" alt="Avater" /></div>
                              <p className="testi-box_text">“lorem ipsum”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">David H. Smith</h3>
                                 <span className="testi-box_desig">IT Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1.png" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Zara Head Milan</h3>
                                 <span className="testi-box_desig">Regular Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1_1.jpg" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">David H. Smith</h3>
                                 <span className="testi-box_desig">IT Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="testi-box">
                           <div className="testi-box-bg-shape">
                              <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg>
                           </div>
                           <div className="testi-box_content">
                              <div className="testi-box_img"><img src="assets/img/testimonial/testi_1_2.jpg" alt="Avater" /></div>
                              <p className="testi-box_text">“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”</p>
                           </div>
                           <div className="testi-box_bottom">
                              <div>
                                 <h3 className="testi-box_name">Zara Head Milan</h3>
                                 <span className="testi-box_desig">Regular Student</span>
                              </div>
                              <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default News
