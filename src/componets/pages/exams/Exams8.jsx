import React from 'react'
import { Link } from 'react-router-dom';
import BookFreeDemo from '../form/BookFreeDemo'
import { Modal } from '@weahead/react-customizable-modal-vite'
function Exams8() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">Set / Symbiosis</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>Symbiosis</li>
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
                        <h2 className="course-title">Symbiosis Centre for Management Studies</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                              <h5 className="h5">Course Offered </h5>
                              <p>Bachelor of Business Administration – (BBA)</p>
                                <h5 className="h5">ELIGIBILITY CRITERIA</h5>
                                <p>The candidate should have passed XII (10+2) examination from any recognized Board with a minimum of 50% marks.</p>
                                <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                                <p>1.  Selection will be based on SET (Symbiosis Entrance Test) followed by PI (Personal Interview) & WAT (Writing Ability Test).</p>
                                <p>2.  Admission Weightage: Entrance Test score (SET/SLAT) – 50%, Personal Interview (PI) – 30% & Writing Ability Test (WAT) – 20%.</p>
                                {/* <h5>Adminssion Weightage</h5>
                                <p>Aptitude Test Score (ATS) – 65% AND Personal Interview (PI) – 35%</p> */}
                                <h5>IMPORTANT DATES</h5>
                                <p>Online Application starts from :16.12.2022</p>
                                <p>Last date for submitting online application: 16.04.2023</p>
                                <p>Exam Date : 06.05.2023</p>
                                <p></p>
                                <h5>EXAM PATTERN</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Sr. NO.</th>
                                            <th scope="col">Secetion</th>
                                            <th scope="col">No Of Questions</th>
                                            <th scope="col">Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>	General English</td>
                                            <td>16</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Quantitative Aptitude</td>
                                            <td>16</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Gereral Awarness</td>
                                            <td>16</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Analytical & Logical Reasoning</td>
                                            <td>12</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Total</td>
                                            <td>60</td>
                                            <td>60</td>
                                        </tr>
                                    </tbody>
                                </table>

                                
{/* 
                                <h5 className="h5 mt-40">Certification</h5>
                                <p>It is designed to validate the knowledge, skills, and competencies of individuals in a specific area of study or professional field. The certification program is meticulously designed to ensure that candidates have acquired a comprehensive understanding of the subject matter. It encompasses both theoretical knowledge and practical application, allowing candidates to demonstrate their expertise in real-world scenarios.</p> */}
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

export default Exams8
