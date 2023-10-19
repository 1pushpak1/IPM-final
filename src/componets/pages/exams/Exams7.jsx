import React from 'react'
import { Link } from 'react-router-dom';
import BookFreeDemo from '../form/BookFreeDemo'
import { Modal } from '@weahead/react-customizable-modal-vite'
function Exams7() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">NPAT-NMIMS</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>NMIMS</li>
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
                        <h2 className="course-title">Five Year Integrated Programme in Management (NPAT)</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                                <h5 className="h5">Course Offered </h5>
                                <p>• BBA (Anil Surendra Modi School of Commerce)</p>
                                <p>• B. Sc. Finance (Anil Surendra Modi School of Commerce)</p>
                                <p>• B. Sc. Economics (Sarla Anil Modi School of Economics)</p>
                                <p>• BBA - Branding & Advertising (School of branding and advertising)</p>
                                <p>• BBA - International Business (Centre for International Studies)</p>
                                <p>• Bachelor in Business Management & Marketing (BBMM) [Pravin Dalal School Of Entrepreneurship & Family Business Management]</p>
                                
                                 <h5 className="h5 mt-40">Eligibility Criteria</h5>
                                 <p>• BBA, B. Sc. Finance & B. Sc. Economics : The candidate must have passed 10+2 or equivalent examination and must have obtained a minimum of 50% aggregate marks. Mathematics / Statistics subject mandatory for all campuses.</p>
                                 <p>• BBA (Branding & Advertising), Bachelor in Business Management &Marketing : The candidate must have passed 10+2 or equivalent examination in any stream in only one attempt with a minimum of 50% aggregate marks.</p>
                                 <p>• BBA (International Business): Minimum of 60% aggregate marks from any stream. Candidates have to complete 2 years at the Mumbai campus and 1 year at Kingston University, London.
</p>
                                 <p>• A minimum IELTS score of 6.0 TOEFL 80 or equivalent is required for those for whom English is not their first language or do not meet a 70 % and above score in the English Language.</p>


                                <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                               <p>BBA, B. Sc. Finance & B. Sc. Economics, BBA (International Business), Bachelor in Business Management & Marketing: Merit list will be prepared on the basis of the marks obtained in NMIMS-NPAT 2023 and preference of campus given in the online registration form.</p>
                               <p>BBA (Branding & Advertising): Merit list will be prepared on the basis of the marks obtained in NMIMS-NPAT 2023 & Personal Interview.</p>
                                {/* <h5>Adminssion Weightage</h5>
                                <p>Aptitude Test Score (ATS) – 65% AND Personal Interview (PI) – 35%</p> */}
                                <h5>IMPORTANT DATES</h5>
                                <p>Online Application starts from :01.12.2023</p>
                                <p>Last date for submitting online application: 21.05.2023</p>
                                <p>Exam Date : 04.01.2023</p>
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
                                            <td>40</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Profiency in English Language</td>
                                            <td>40</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Reasoning & General Intelligence</td>
                                            <td>40</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Total</td>
                                            <td>120</td>
                                            <td>120</td>
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

export default Exams7
