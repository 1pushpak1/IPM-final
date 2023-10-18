import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function Exams5() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">DoMS IPM NALSAR</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>IIM NALSAR</li>
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
                                
                                <p>The five-year Integrated Program in Management (IPM) at NALSAR is a unique program for young ignited minds aspiring to pursue a career path in Business Management. It is designed as a comprehensive management program for students after class XII. The students would be awarded Bachelor of Business Administration (BBA) and Master of Business Administration (MBA) by NALSAR after successful completion of five years of program Located in a conducive learning environment, NALSAR promises to offer the best of management education embedded with law to produce legally aware managers with critical problem solving ability and skills to manage extremely dynamic business scenariosWith the best-in-class faculty, the IPM program promises a constant dialogue with business leaders, thought leaders, civil-society actors and academicians for providing strong bedrock for the future managers.</p>
                                <p>Consisting of fifteen terms spread across five years, the first 3 years of the program are aimed at providing strong theoretical underpinnings, conceptual and practical insights in the various areas of philosophy, psychology, fine-arts, mathematics, economics, law and management. The last 2 years are aimed at nurturing holistic transformation from students into future business leaders and managers.</p>
                                <p>DoMS offers a voluntary exit to the students after successfully completing the programme requirement at the end of 3 years and such students shall be awarded a degree of Bachelor of Business Administration (BBA).</p>
                                <h5 className="h5 mt-40">Eligibility Criteria:</h5>
                                <p>The applicants for the Five-year Integrated BBA-MBA program should meet the following eligibility criteria:</p>
                                <p>1.  Must have completed their Class 10+2 or equivalent examination from a recognized board with a minimum of 60% aggregate marks (50% for SC/ ST candidates);</p>
                                <p>2.  Should have valid CLAT (UG) /IPMAT (IIM Indore)/IPMAT (IIM Rohtak)/JIPMAT (IIM Jammu & IIM Bodhgaya)/JEE (Mains) score card.</p>
                                <p>Candidates appearing for their 10+2 or equivalent examination can also apply. Candidates who have applied for CLAT (UG) /IPMAT – (IIM Indore)/IPMAT (IIM Rohtak)/JIPMAT (IIM Jammu & IIM Bodhgaya)/JEE (Mains) can apply with the proof of the registration for the said tests. They need to submit the score cards immediately after declaration of the merit list of the said examinations but before the last date to submit the application form.</p>
                                <h5 className="h5 mt-40">Admission Process</h5>
                               <p>The admissions to the Integrated BBA-MBA Degree Program will be made considering the CLAT (UG) /IPMAT – (IIM Indore)/IPMAT (IIM Rohtak)/JIPMAT (IIM Jammu & IIM Bodhgaya)/JEE (Mains), Academic credentials, and Personal Interview. Admissions will be offered as per the above-mentioned criteria.

Based on merit at the admission test and performance in 10th and 10+2 or equivalent examination, the candidates will be short listed for personal interview. If a candidate appears for more than one test, the candidate may choose to submit the best one as per his/her choice. Alternatively the candidate may upload all the scorecards of which the best will be considered for the preparation of merit list through the process of standardization/normalization.</p>
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

export default Exams5
