import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">BLOGS</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Resources</a></li>
                  <li>Blogs</li>
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
                        <h2 className="course-title">Preparation of Maths section for IPMAT</h2>
                        <p>Preparing for the IPMAT (Integrated Program in Management Aptitude Test) requires a dedication and structured approach to mathematics, as it is a crucial part of the exam. In this article, we will outline a comprehensive strategy to excel in the mathematics section of the IPMAT.</p>
                        <p>1.  As we know that Quantitative Aptitude is an important section in the IPMAT entrance exam. So in this article, we will answer some of the most frequently asked questions related to Maths for IPMAT. </p>
                        <p>2.  The weightage to Quantitative Aptitude is high for Both IPMAT Indore and IPMAT Rohtak. JIPMAT does not have a Quantitative Aptitude section.</p>                       
                        <p>3.   What is the syllabus of Maths for IPMAT? How to prepare for this section for IPMAT? What should be the strategy to solve maths problems? We will elaborate on these things further in this article.
                        <Link to="/#">More</Link></p>
                        <ul className="course-single-meta"> 
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h2 className="course-title">How to prepare Verbal ability section for IPMAT:</h2>
                               <p>To prepare for the Verbal Ability section of the IPMAT (Integrated Program in Management - Aptitude Test), you need to focus on improving your reading, vocabulary, correct usage and comprehension skills. This section typically consists of questions related to reading comprehension, vocabulary, grammar, and sentence correction.</p> 
                            </div>

                            <div className="course-description">
                                 <h6>VARC for IPMAT Indore, Rohtak and JIPMAT</h6>
                                 <p>While the difficulty level, length and pattern of the questions might be the same, find below certain differences between the three tests: <Link to="/#">More</Link></p>
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
      <div className="cta-area-1">
         <div className="container">
            <div className="row align-items-right justify-content-between">
               <div className="col-lg-12">
                  <div className="cta-wrap title-area mb-0">
                     
                     <div className="cta-content">
                        <h2 className=" footer-contact_link">Have Questions ? Call us : +91-99100 88661</h2>
                        
                     </div>
                     <Link to="/contactus"  className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></Link>
                  </div>
               </div>
            </div>
         </div>
        
      </div>

    </>
  )
}

export default Blog
