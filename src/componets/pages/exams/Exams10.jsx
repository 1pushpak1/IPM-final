import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import { Modal } from '@weahead/react-customizable-modal-vite'

function Exams10() {
   const [isOpen, setIsOpen] = useState(false);
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
                                 <p>The most recent institute to join the list of IIM that offers a 5-year Integrated Program in Management (IPM) is IIM Nagpur. Some important points to note about the course and admission procedure are:
                                 </p>
                                 <p>1. Collaboration between IIM Nagpur and HCL Technologies for a unique BBA + MBA program
                                    The first batch will comprise 70 students
                                 </p>
                                 <p>2.  HCL will select the students through its unique selection process, the TechBee program.</p>
                                 <p>3.  Students will be subjected to an entrance test conducted by IIM Nagpur before selection.</p>
                                 <p>4.  All 70 students enrolled in the program will be sponsored by HCL for their entire/partial education. IIM to offer loans in case a partial fee is paid by the student.</p>

                                 <p>Note: The official agreement between IIM Nagpur and HCL will be concluded on September 29, 2022. Further information about the program will be updated on this page as released.
                                 </p>
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

export default Exams10
