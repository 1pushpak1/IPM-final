import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import { Modal } from '@weahead/react-customizable-modal-vite'

function Testseries() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
            <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
            <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
            <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
            <div className="container">
               <div className="breadcumb-content text-center">
                  <h1 className="breadcumb-title">IPMAT/BBA 2024 Test Series</h1>
                  <ul className="breadcumb-menu">
                     <li><a href="#">Prep Module</a></li>
                     <li>TestSeries Program</li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="container">
                  <div className="row">
                     <div className="col-xxl-9 col-lg-12">
                        <div className="course-single">
                           <div className="course-single-bottom">
                              
                              <div className="tab-content" id="productTabContent">
                                 <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">

                                    <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 1.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Premium Mentorship</h5>
                                                <h6>One-To-One</h6>
                                                <p></p>
                                                <div className="btn-group mt-40"><Link to="/prep-module" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/prep-module" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course2.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Premium Mentorship  </h5>
                                                <h6 >Premium 40</h6>
                                                {/* // <div className="course-meta"><span><i className="fal fa-file"></i>10 Weeks</span> <span><i className="fal fa-user"></i>Students 50+</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                                                <div className="btn-group mt-40"><Link to="/prep-module" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/prep-module" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 2.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Premium Mentorship </h5>
                                                <h6>(Ranker's Program)</h6>
                                                <div className="btn-group mt-40"><Link to="/prep-module" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/prep-module" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>

                                    </div>
                                 </div>
                                 <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">


                                    <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 3.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Achievers' Mentorship Program </h5>
                                                <h6>(For Class 11)</h6>
                                                <div className="btn-group mt-40"><Link to="/achivers" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/achivers" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 4.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Masters' Mentorship Program</h5>
                                                <h6>(For Class 12)</h6>
                                                <div className="btn-group mt-40"><Link to="/master" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/master" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 5.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Speedesters Mentorship Program </h5>
                                                <h6>(Six-Month Program)</h6>
                                                <div className="btn-group mt-40"><Link to="/master" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/master" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>

                                    </div>



                                 </div>
                                 <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 6.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Pocket Test-Series</h5>
                                                <div className="btn-group mt-40"><Link to="/testmod" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/testmod" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 7.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Prime  Test-Series</h5>
                                                <div className="btn-group mt-40"><Link to="/testmod" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/testmod" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 8.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Premium Test-Series</h5>
                                                <div className="btn-group mt-40"><Link to="/testmod" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/testmod" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>

                                    </div>

                                 </div>

                                 <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">

                                    <div className="row slider-shadow th-carousel course-slider-1" data-slide-show="4" data-ml-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">

                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 9.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">MockTest Mentorship</h5>
                                                <div className="btn-group mt-40"><Link to="/testseries" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/short" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-lg-4">
                                          <div className="course-box">
                                             <div className="course-img"><img src="assets/img/course/Course 10.png" alt="img" />  </div>
                                             <div className="course-content">

                                                <h5 className="course-title">Short Term Courses </h5>
                                                <div className="btn-group mt-40"><Link to="/short" className="th-btn">More<i className="fa-regular fa-arrow-right ms-2"></i></Link><Link to="/short" className="th-btn">Enroll Now<i className="fa-regular fa-arrow-right ms-2"></i></Link></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
           
      

         <section>
            <div className="container">
               <div className="row">
                  <div>
                     <div className="course-single">
                        <div className="course-single-bottom">

                           {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                           {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                           {/* <h2 className="course-title">Five Year Integrated Programme in Management (IPM)</h2>
                        <ul className="course-single-meta"> */}
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                           {/* </ul> */}


                           <ul className="nav course-tab" id="courseTab" role="tablist">
                              {/* <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>Premium mentorship</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>FREE Session</a></li> */}
                              {/* <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>Your Mentors</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>Testimonial</a></li> */}
                           </ul>
                           <div className="tab-content" id="productTabContent">
                              <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
                                 <div className="course-description">
                                    <h5 className="h5">IPM Prime : IPMAT/BBA 2024 Test Series</h5>
                                    <h6> Sectional Tests and Mock Tests with thorough analysis and tips for improvement with your Mentors.
                                    </h6>
                                    {/* <p>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p> */}
                                    <div className="row mt-25">
                                       <div className="col-lg-6">
                                          <div className="checklist mb-4">

                                             <ul>
                                                <li> Covers IPMAT Indore, Rohtak, JIPMAT etc</li>
                                                <li> Upto 80 mocks with detailed analysis
                                                </li>
                                                <li> Personalised in-depth performance analysis
                                                </li>
                                                <li>Current Affairs Compendium, and more! </li>

                                             </ul>
                                          </div>
                                       </div>
                                       <div className="col-lg-6">
                                          <div className="checklist">
                                             <ul>
                                                <li>  Latest paper pattern and syllabus</li>
                                                <li>  Continuous one-to-one mentorship sessions </li>
                                                <li>  Personalised Booster Plan based on strengths & weaknesses</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>

                                    <p>If you are a serious IPM-AT aspirant you must not compromise on IPM Prime Tutorial’s Unique Mock Test Mentorship approach to ensure your seat in IIMs.</p>
                                    <h5 className="h5 mt-40">Features : IPM Prime’s most trusted IPMAT 2024 Test Series includes </h5>
                                    <p><b>"Updated Sectional and Mock Tests"</b></p>
                                    <p>The pattern of IPMAT and other management tests keeps changing. IPM Prime team ensures and keeps track of every change; and incorporates them in our mock tests every year.</p>{'\n'}{'\n'}


                                    <p><b>"Mock Test Mentorship (Practice-based learning)"</b></p>
                                    <p>Our Unique and most trusted approach relies heavily on the in-depth analysis of students strengths & weaknesses and what could be better than Mock Tests and its effective analysis. Our mock tests have been designed to help you understand difficult concepts through regular problem-solving and continuous mentorship..</p>{'\n'}{'\n'}

                                    <p><b>"Personalised Booster Plan"</b></p>
                                    <p>After attempting our mock tests and expert, in-depth analysis,, you get a true picture of your strengths and weaknesses and also where you stand vis-a-vis your competition. But the REAL WORK starts after than with our expert Mentors’ Booster plan curated for you and one-to-one sessions</p>{'\n'}{'\n'}

                                    <p><b>"Continuous Target sessions with our subject experts"</b></p>
                                    <p> IPM Prime team ensures that our students get immediate help with their weak areas after analysis so that they never feel alone in this journey. So you get insights from our mentors during the one-to-one sessions on how to level up in every weak section and capitalize on your strengths.</p>{'\n'}{'\n'}



                                 </div>
                              </div>

                           </div>
                        </div>
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
                        <button onClick={() => { setIsOpen(true) }} className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></button>
                     </div>
                     <Modal
                        style
                        isOpen={isOpen}
                        onEscape={() => {
                           setIsOpen(false)
                        }}
                        onOverlayClick={() => {
                           setIsOpen(false)
                        }}
                     >
                        <BookFreeDemo />
                        <button
                           style={{
                              position: "absolute",
                              top: 30,
                              right: 30,
                              zIndex: 101,
                              background: "none",
                              border: "none",
                              color: "black",
                              fontSize: 30
                           }}
                           onClick={() => {
                              setIsOpen(false)
                           }}
                        >
                           <i class="fa-solid fa-circle-xmark"></i>
                        </button>
                     </Modal>
                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default Testseries