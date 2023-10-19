import React from 'react'
import { Link } from 'react-router-dom';
import BookFreeDemo from '../form/BookFreeDemo'
import { Modal } from '@weahead/react-customizable-modal-vite'
function Exams4() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">JIPMAT / IIM Jammu</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>IIM Jammu</li>
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
                                <h5 className="h5">ELIGIBILITY CRITERIA</h5>
                                <p>• Candidates should have passed 10+2 examination in arts/ commerce/ science stream or equivalent with 60% (55% for candidates from SC/ ST/ PwD/ Transgender).</p>
                                <p>• Candidates should have passed Standard XII/HSC or equivalent examination in 2021, and 2022 or appearing in 2023. The candidate must have passed the class 10th examination in the year not before 2019.                                </p>
                                <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                                <p>The criteria for preparing the merit list will be based on the composite score comprising the weightage of the JIPMAT score, and gender diversity as follows:</p>
                                <p>JIPMAT Score – 95% & Gender Diversity – 5%</p>
                                {/* <h5>Adminssion Weightage</h5>
                                <p>Aptitude Test Score (ATS) – 65% AND Personal Interview (PI) – 35%</p> */}
                                <h5>IMPORTANT DATES</h5>
                                <p>Online Application starts from :06.04.2023</p>
                                <p>Last date for submitting online application: 30.04.2023</p>
                                <p>Exam Date : 28.05.2023</p>
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
                                            <td>Quantitative Ability- MCQ</td>
                                            <td>33</td>
                                            <td>132</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Verbal Ability & Reading Comprehension</td>
                                            <td>34</td>
                                            <td>136</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Data Interpretation & Logical Reasoning</td>
                                            <td>33</td>
                                            <td>132</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Total</td>
                                            <td>100</td>
                                            <td>400</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="title-area mb-4 mt-5">
                                    <h2 className="sec-title mb-0">Frequently Asked Question?</h2>
                                </div>
                                <div className="accordion-area accordion" id="faqAccordion">
                                    <div className="accordion-card">
                                        <div className="accordion-header" id="collapse-item-1"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">What Is The Duration Of The IPM Course At IIM Jammu?</button></div>
                                        <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p className="faq-text">The Integrated Program in Management (IPM) course at IIM Jammu has a duration of 5 years. It is a full-time program that combines undergraduate and postgraduate studies in management.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-card active">
                                    <div className="accordion-header" id="collapse-item-2"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">What Is The Detailed Selection Process For Admission To The IPM Course At IIM Jammu?</button></div>
                                    <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text">The selection process for the IPM course at IIM Jammu typically consists of two stages. The first stage involves an Aptitude Test, which assesses the candidates' quantitative ability, verbal ability, and logical reasoning skills. The shortlisted candidates from the Aptitude Test then proceed to the second stage, which includes a Written Ability Test (WAT) and a Personal Interview (PI). The final selection is based on the candidates' performance in all these stages</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="accordion-card">
                                    <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">What Are The Career Prospects After Completing The IPM Course At IIM Jammu?</button></div>
                                    <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text">Upon completion of the IPM course at IIM Jammu, graduates have a range of career options available to them. They can pursue managerial roles in various industries, such as finance, marketing, consulting, operations, and human resources. Some graduates may choose to start their own businesses or work in entrepreneurship-related roles. Additionally, the IPM course also provides a strong foundation for further academic pursuits like pursuing a Ph.D. or other advanced degrees in management.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
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

export default Exams4
