import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';

function Testseries() {
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
         
     

      <section>
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8">
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
               <div className="col-xxl-3 col-lg-4">
                    <BookFreeDemo/>
               </div>
            </div>
         </div>
       
      
      </section>
      
    </>
  )
}

export default Testseries