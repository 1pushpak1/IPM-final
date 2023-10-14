import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function Exams10() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">IIMNAT / IIM Nagpur</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>IIM Nagpur</li>
               </ul>
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
                        <h2 className="course-title">Five Year Integrated Programme in Management (IPM)</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                                <h5 className="h5">IIM NAGPUR</h5>
                                <p>IIM Nagpur is one of the six new-generation IIMs established by the government of India in 2015. The business school currently offers a two-year post-graduate program in Management, a Ph.D. program, some post-graduate level certifications, and now a new Integrated Program in Management (IPM).</p>
                                <p>The institute has a NIRF rank of 43 in the year 2022 and has been placed in the AA category for quality education across all Indian B-Schools. The university offers multiple clubs, committees, interest groups, collaborations with international institutions, and support for startup programs.</p>
                                <p>IPM Prime Tutorials is the best coaching for IIM Indore IPM entrance exam IPM Online Coaching provides 50 live classes of two hours each, 181 video lectures, 78 All India Mock tests based on different exam patterns like IPM, DU JAT, NPAT, SET, NCHM JEE, and others as a part of Test Series.</p>
                                <h5 className="h5 mt-40">TechBee Program</h5>
                                <p>The “TechBee Scholars” Initiative by HCL is a push toward better employability. HCL has partnered with BITS Pilani, and other state universities, to offer Work Integrated Learning Programs (WILP).</p>
                                <p>The program enables students to work right after class XII alongside studying for their degrees. The executive program involves internships in HCL projects with a stipend of ₹10,000. Visit the official TechBee website for more information: https://registrations.hcltechbee.com/.</p>
                                <p>With the multifold benefits of this integrated program comes the security of guaranteed placements. One must take the HCL CAT to be eligible for this unique program, and also be eligible for the IPM program.</p>
                               
                                {/* <h5 className="h5 mt-40">Certification</h5>
                                <p>It is designed to validate the knowledge, skills, and competencies of individuals in a specific area of study or professional field. The certification program is meticulously designed to ensure that candidates have acquired a comprehensive understanding of the subject matter. It encompasses both theoretical knowledge and practical application, allowing candidates to demonstrate their expertise in real-world scenarios.</p> */}
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

export default Exams10
