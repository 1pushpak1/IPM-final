import React, { useState, useEffect } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import supabase from '../form/Supabase';
import NewsCard from './newsCard';

function News() {
   const [data, setData] = useState([]);
   const newsdata = async () => {
      await supabase
         .from('News')
         .select('*')
         .then((data) => {
            setData(data["data"]);
         })
   }
   useEffect(() => {
      newsdata();
   }, []);

   let newsList = data.map((newsval) => {
      return (
         <NewsCard key={newsval.id} description={newsval.description} author={newsval.author} date={newsval.date} />
      )
   })
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



               <ul className="nav course-tab" id="courseTab" role="tablist">
                              <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>News</a></li>
                              <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>Events</a></li>
                              {/* <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>Your Mentors</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>Testimonial</a></li> */}
                           </ul>
                           <div className="tab-content" id="productTabContent">
                              <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">


               <div className="row">
                  <div className="col-xl-12">
                     <div className="th-carousel testi-slider1 dot-style2 row" id="testimonial-slider1" data-slide-show="2" data-ml-slide-show="2" data-lg-slide-show="1" data-md-slide-show="1" data-dots="true" data-arrows="false">
                        {newsList}
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
               <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                 <div className="course-curriculam">
                                    <h5 className="h5">Stay Updates !! More on the way....</h5>
                                    {/* <p className="mb-30">Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary, making this the first true dummy generator on the Internet.</p> */}
                                    {/* <div className="checklist mb-1">
                                       <ul>
                                          <li>Interactive One-to-One Sessions: Engaging and interactive sessions where aspirants can directly communicate with mentors, ask questions, and receive personal study plan. This feature fosters a dynamic learning environment.</li>
                                          <li>Expert Mentors: Access to experienced mentors who have a strong background in the subject matter. They can provide insights, guidance, and personalized advice to help participants excel in their studies.</li>
                                          <li>Curriculum Overview: A comprehensive overview of the curriculum and topics covered in the Achievers' Mentorship Batch. This helps participants understand what they can expect to learn and achieve during the mentorship program.</li>
                                          <li>Study Resources: Provision of study materials, resources, and practice questions relevant to the mentorship batch. This can aid participants in their preparation and ensure they have the necessary tools to succeed.</li>
                                          <li>Progress Assessment: An opportunity for aspirants to receive feedback on their progress and performance. This could include mock tests, assignments, and its detailed analysis that help participants gauge their prepration level and work on improvement over time.</li>
                                           <li>How to set up and market events, using online tools</li>
                                       <li>Adapt your performance techniques and manage your audience throughout</li> *
                                       </ul>
                                    </div> */}
                                 </div>
                              </div>
                              </div>
            </div>
         </section>
         <div className="cta-area-1">
            <div className="container">
               <div className="row align-items-right justify-content-between">
                  <div className="col-lg-12">
                     <div className="cta-wrap title-area mb-0">

                        <div className="cta-content">
                           <h2 className=" footer-contact_link">Have Questions ? Call us : +91-99100 88661</h2>

                        </div>
                        <Link to="/contactus" className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></Link>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default News
