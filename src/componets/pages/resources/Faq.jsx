import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
function Faq() {
   return (
      <>
         <section className="space-top space-extra2-bottom">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                     <div className="course-single">
                        <div className="course-single-top">
                           {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                           {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                           <h2 className="course-title">Frequently Asked Questions</h2>
                           <ul className="course-single-meta">
                              {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                           </ul>
                        </div>
                        <div className="course-single-bottom">
                           <div className="tab-content" id="productTabContent">
                              <div className="course-description">

                                 
                                 <div className="accordion-area accordion" id="faqAccordion">
                                    <div className="accordion-card">
                                       <div className="accordion-header" id="collapse-item-1"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">How will the test be conducted?</button></div>
                                       <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                             <p className="faq-text">The test will be conducted in online mode. You can take the test online on the ipmprimetutorial.com website. Prior registration for the test is mandatory.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-card active">
                                       <div className="accordion-header" id="collapse-item-2"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">What will be the syllabus of the Scholarship Test?</button></div>
                                       <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                             <p className="faq-text">The test is based on the syllabus covered in the actual entrance exams ( IPMAT and JIPMAT). It's a test of your reasoning, numerical, and comprehension skills.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-card">
                                       <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">What will the questions comprise?</button></div>
                                       <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                             <p className="faq-text">The questions in the test will be spread across three sections: Quantitative Aptitude, Logical Reasoning, and English Language.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-card">
                                       <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">When will the result be declared?
                                       </button></div>
                                       <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                          <div className="accordion-body">
                                             <p className="faq-text">The results will be declared within min 24 hours and Max  48 hours of the Test.</p>
                                          </div>
                                       </div>
                                    </div>

                                 </div>





                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4">
                     <BookFreeDemo />
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

export default Faq
