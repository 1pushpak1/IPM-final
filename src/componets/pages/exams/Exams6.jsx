import React from 'react'
import { Link } from 'react-router-dom';
import BookFreeDemo from '../form/BookFreeDemo'

function Exams6() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">IPM IIFT Kakinada</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>IIFT Kakinada</li>
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
                                
                                <p>The Five Year Integrated Program in Management (IPM) at IIFT-Kakinada aims at imparting managerial and decision making capabilities to young professionals along with integrating management education with Science, Technology, Engineering, and Mathematics (STEM).</p>
                                <p>Candidates successfully completing the course requirement of integrated programme in management would be awarded Bachelor of Business Administration (Business Analytics) at the end of 3 years and Master of Business Administration (International Business) at the end of 5 years by Indian Institute of Foreign Trade. Candidates opting for exit after completing the requirement of first three years, would be awarded Bachelor of Business Administration (Business Analytics). The first three years of the IPM program would be based on semester system and the last two years would be based on the trimester system (as per the prevailing MBA course structure).</p>
                                
                                <h5 className="h5 mt-40">Admission Procedure</h5>
                                <p>Eligibility for Admission</p>
                                <p>1.  Candidates should have passed 10+2/XII/HSC examination in arts/commerce/science stream or equivalent with 60% (55% for candidates from SC/ST/PwD/Transgender) or more in the year 2021, 2022 or appearing in 2023.</p>
                                <p>2.  The candidate must have passed class 10th examination with 60% (55% for candidates from SC/ST/PwD/Transgender) or more in the year not before 2019.</p>
                                <p>3.  Mathematics/ Business Mathematics as a subject in +2 level is mandatory.</p>
                                <p>4.  A candidate should have been born on or after August 01, 2002 (5 years of relaxation to the candidates from SC/ST/PwD category will be given i.e. born on or after August 01, 1997).</p>
                                <h6>Mode of Admission</h6>
                                <p>For short-listing/selecting the candidates, IIFT will use score of IPMAT examination conducted by IIM-Indore</p>
                                <h6>Selection Process</h6>
                                <p>Merit list for selection of the candidate for the admission will be prepared on the basis of his/her IPMAT Score of IIM-Indore, Academic Profile of class 10th and Gender Diversity.</p>
                                <h6>Fees and Accommodation:</h6>
                                <p>The course fee for the first three year of the programme is Rs.4 lakh per annum excluding hostel and mess fees. Course fee for the fourth and fifth years would be as per MBA(IB) programme fees set for that year.

Integrated Programme in Management 2022-27 is a fully residential programme.

</p>
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

export default Exams6
