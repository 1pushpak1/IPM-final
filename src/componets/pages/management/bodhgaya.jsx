import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
function Bodhgaya() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">IIM Bodhgaya</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Explore Management</a></li>
                  <li>IIM Bodhgaya</li>
               </ul>
            </div>
         </div>
      </div>


      <div className="container">
         <div className="row align-items-center">
            <div className="col-xl-11">
               <div className="wcu-img-1">
                  <div className="img1"><img src="assets/img/normal/bodhgaya.png" alt="img" /></div>
                                        
                  </div>
               </div>
               
        
         </div>
      </div>
      <section className="space-top space-extra2-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8">
                  <div className="course-single">
                     <div className="course-single-top">
                        {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                        {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                        <h2 className="course-title">IIM Bodhgaya</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                                <p>Instituted in 2015, THe indian Institute if Management Bodhgaya is located in Bodh-Gaya Bihar and the institute was mentored by IIM Calcutta</p>
                                {/* <h5 className="h5">ELIGIBILITY CRITERIA</h5> */}
                                {/* <p>Candidates should have passed standard 10+2/ SSC. Candidates should have passed Standard XII/HSC or equivalent examination in 2021, and 2022 or appearing in 2023.</p>
                                <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                                <p>The candidates will be selected based on overall performance in the Aptitude Test (AT) and Personal Interview (PI).</p>
                                <h5>Adminssion Weightage</h5>
                                <p>Aptitude Test Score (ATS) – 65% AND Personal Interview (PI) – 35%</p>
                                <h5>IMPORTANT DATES</h5>
                                <p>Online Application starts from :09.03.2023</p>
                                <p>Last date for submitting online application: 14.04.2023</p>
                                <p>Exam Date : 16.06.2023</p>
                                <p></p>
                                <h5>EXAM PATTERN</h5> */}
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

export default Bodhgaya