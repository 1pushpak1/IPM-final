import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import { Modal } from '@weahead/react-customizable-modal-vite'

function Exams9() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
                <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
                <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
                <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
                <div className="container">
                    <div className="breadcumb-content text-center">
                        <h1 className="breadcumb-title">BMS/BFIA CUET</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="#">Exams</a></li>
                            <li>BMS/BFIA CUET</li>
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
                                    <h2 className="course-title">BMS/BFIA CUET</h2>
                                    <ul className="course-single-meta">
                                        {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                                    </ul>
                                </div>
                                <div className="course-single-bottom">
                                    <div className="tab-content" id="productTabContent">
                                        <div className="course-description">
                                            <h5 className="h5">Understanding CUET</h5>
                                            <p>Common University Entrance Test (CUET) is an all-India entrance exam conducted by the National Testing Agency (NTA) for admissions in undergraduate and postgraduate courses in different central and state universities in India including University of Delhi, BHU, and Allahabad University among others.</p>
                                            <p>CUET 2023 will provide a single-window opportunity to students to seek admission in the Central Universities of their choice across the country. It is a golden opportunity to eliminate the non-uniform examination pattern and syllabus of different universities. It will not only allow students to choose any course irrespective of their streams in 10+2 but offer everyone an equal opportunity to seek admission in the university of their choice. The Central Universities Entrance Test will be conducted in almost 13 languages at around 154 exam centers around the country for academic year 2023 – 2024.</p>
                                            <table className="table table-striped table-hover">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Particulars</th>
                                                        <th scope="col">Details</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Exam Name</th>
                                                        <td>Common University Entrance Test(CUET)</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Conducting Body</th>
                                                        <td> 	National Testing Agency (NTA)</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Frequency of the exam</th>
                                                        <td>Once a year</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Language in which the exam is conducted</th>
                                                        <td>The Tests (other than “Language” Test) are offered in 13 languages i.e. Assamese, Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odiya, Punjabi, Tamil, Telugu and Urdu.</td>
                                                        
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Total number of questions</th>
                                                        <td>40 + 40 + 60 = 140 Questions</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Exam Duration</th>
                                                        <td>45 min + 45 min + 60 min = 150 minutes (not necessarily in one sitting)</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Marking scheme</th>
                                                        <td>(+5) for correct answer, (-) 1 for incorrect answer
</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Selection Process</th>
                                                        <td>Merit list will be prepared on the basis of CUET score. Admission will be given on the basis of merit list only.</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Contact Details</th>
                                                        <td>Website - https://cuet.samarth.ac.in/, 
Email - cuet-ug@nta.ac.in, 
Phone - 011- 40759000 / 011-69227700
</td>
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                            &nbsp;
                                            
                                            <h5 className="h5 mt-40">CUET Qualification</h5>
                                            <p>For BMS/BBA/BBE-FIA the eligibility criteria is as follows -</p>
                                            <p>1. Any one language from List A + Mathematics + Section III of CUET (General Test)</p>
                                            <p>2. Merit will be based on the CUET scores obtained from the above mentioned combination of subjects.</p>
                                            &nbsp;
                                            <table className="table table-striped table-hover">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Courses</th>
                                                        <th scope="col">Academic Qualification</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Undergraduate</th>
                                                        <td>Minimum 50% marks in class 12th for General category candidates and 45% marks for SC/ST candidates</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Post Graduate</th>
                                                        <td> 	Minimum of 55% (General category) and 50% (SC/ST/OBC/PWD category) in Graduation Degree.</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">PhD Programme</th>
                                                        <td>Minimum of 55% marks for general candidates, 50% marks for OBC candidate and 45% marks for SC/ST/PWD candidate in PG.</td>
                                                        
                                                    </tr>
                                                    </tbody>
                                            </table>
                                            &nbsp;
                                            <h5 className="h5 mt-40">CUET Application Form</h5>
                                            <p>Step 1 : Visit the official website of the CUET to fill the Form</p>
                                            <p>Step 2 : Click on the ‘Apply Online’ tab to register for the program.</p>
                                            <p>Step 3 : After clicking, candidates will be able to see three programmes options- UG, PG, and RP. Click on the link you wish to apply for.</p>
                                            <p>Step 4 : Complete the registration process by entering details like program applied for, name, valid e-mail-id, mobile number, date of birth, and verification code displayed on the screen.</p>
                                            <p>Step 5 : Once all details are submitted, the application number and password are generated and are sent to the registered email address and mobile number.</p>
                                            <p>Step 6 : Use the application number and password to log in and fill up the application form by entering the log-in details like personal, academic qualification and communication address.</p>
                                            <p>Step 7 : Upload scanned images of a recent passport-sized photograph and signature in prescribed format and dimensions.</p>
                                            <p>Step 8 : Select the examination centres- In order of preference, select and enter the exam centres.</p>
                                            <p>Step 9 : On successful online application submission with payment of fees through an automated e-mail and SMS is sent to the registered e-mail ID and mobile number.</p>
                                            &nbsp;





                                            <h5>CUET Application Fees</h5>
                                             <p>CUET 2023 Application Fee can be paid by debit/credit card/net banking or Challan of SBI bank any branch. Candidates have to pay the application fee either online or offline mode. GST and other taxes will be applicable as by Govt. of India/ Bank. Check category-wise CUET 2023 Application Fee from the table.</p>
                                             <p>Given below is the fee payable for UG course offered by University of Delhi</p>
                                            <p>For centers within India -</p>
                                            <p>1. (SLOT 1 9:00 AM - 12:15 PM)Up to 4 subjects - INR 650 for general, INR 600 for OBC and General EWS, INR 550 for SC/ST/Third Gender/PwBD</p>
                                            <p>2. (SLOT 2 3:00 PM - 6:45 PM)Up to 5 subjects - INR 650 for general, INR 600 for OBC and General EWS, INR 550 for SC/ST/Third Gender/PwBD</p>
                                            <p>For centers outside India -</p>
                                            <p>1. SLOT 1- INR 3000</p>
                                            <p>2. SLOT 2- INR 3000</p>
                                            <p>Please note that processing charges and Good and Services Tax(GST) is to be paid by the candidate as applicable.</p>
                                            &nbsp;
                                            <h5>CUET Reservation</h5>
                                            <p>Candidates taking the exam must be aware of CUET reservation policies to be eligible for lower application fees, category-wise cutoff scores, and discounted admission fees. In addition, they need to understand the percentage of reservations based on their categories. Candidates can refer to the table, which clarifies the CUET 2023 reservation requirements.</p>
                                            <table className="table table-striped table-hover">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Reservation</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Scheduled Castes (SC)</th>
                                                        <td>15%</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Scheduled Tribes (ST)</th>
                                                        <td>7.5%</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Other Backward Classes (Non-Creamy) (OBC)</th>
                                                        <td>27%</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Persons with Disability (PWD)</th>
                                                        <td>5%</td>
                                                        
                                                    </tr>
                                                    </tbody>
                                            </table>
                                           
                                               &nbsp;                                        
                                           
                                            <h5>CUET Exam Pattern</h5>
                                            <p>NTA will also conduct CUET Exam in 13 languages ( Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Odiya, Bengali, Assamese, Punjabi, English, Hindi and Urdu).</p>
                                            <table className="table table-striped table-hover">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Section - Subject</th>
                                                        <th scope="col">Total no. of questions</th>
                                                        <th scope="col">No Of Questions to be attempted</th>
                                                        <th scope="col">Duration for each section</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Section 1-Language</th>
                                                        <td>50</td>
                                                        <td>40</td>
                                                        <td>45 Min</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Section 2-Domain Specific</th>
                                                        <td>50</td>
                                                        <td>40</td>
                                                        <td>45 Min</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Section 3-General Test</th>
                                                        <td>75</td>
                                                        <td>60</td>
                                                        <td>60 Min</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                           
                                           &nbsp;
                                           <h5>CUET Syllabus</h5>
                                           <table className="table table-striped table-hover">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Subject</th>
                                                        <th scope="col">Syllabus</th>
                                                        {/* <th scope="col">No Of Questions to be attempted</th>
                                                        <th scope="col">Duration for each section</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">English Language</th>
                                                        <td>
                                                        <div className="col-md-auto">
                                                                <div className="checklist">
                                                                    <ul>
                                                                    <li> Comprehension Passages- To test their understanding of a passage and its central theme, meanings of words used therein, etc</li>
                                                                    <li> Fundamentals of grammar- incorrect sentences, filling blanks in sentences with appropriate words,</li>
                                                                    <li> Vocabulary- synonyms, antonyms</li>


                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Numerical Ability</th>
                                                        <td>
                                                            <div className="col-md-auto">
                                                                <div className="checklist">
                                                                    <ul>
                                                                    <li> Areas like arithmetic</li>
                                                                    <li> Number system</li>
                                                                    <li> Basics of algebra</li>
                                                                    <li> Modern maths</li>
                                                                </ul>
                                                                </div>
                                                                </div>
                                                        </td>
                                                    
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">General Awareness and Current Affairs</th>
                                                        <td><div className="col-md-auto">
                                                                <div className="checklist">
                                                                    <ul>
                                                                   <li>Static general knowledge</li>
                                                                   <li>Current Affairs (national & international current affairs)</li>
                                                                </ul>
                                                                </div>
                                                                </div>
                                                                </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Logical & Analytical Reasoning</th>
                                                        <td><div className="col-md-auto">
                                                                <div className="checklist">
                                                                    <ul>
                                                                   <li>Syllogisms</li>
                                                                    <li>Logical sequences</li>
                                                                    <li>Analogies</li>
                                                                    <li>Series</li>
                                                                    <li>Directions</li>
                                                                    <li>Cocks & calendars</li>
                                                                    <li>Seating Arrangements</li>
                                                                   <li>Puzzles</li>
                                                                </ul>
                                                                </div>
                                                                </div>
                                                                </td>
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                            &nbsp;
                                            <p>List of Domain subjects to choose from - Accountancy/ Book Keeping, Biology/ Biological Studies/ Biotechnology/Biochemistry, Business Studies, Chemistry, Computer Science/ Informatics Practices, Economics/ Business Economics, Engineering Graphics, Entrepreneurship, Geography/Geology, History, Home Science, Knowledge Tradition and Practices of India, Legal Studies, Environmental Science, Mathematics, Physical Education/ NCC /Yoga, Physics, Political Science, Psychology, Sociology, Teaching Aptitude, Agriculture, Mass Media/ Mass Communication, Anthropology, Fine Arts/ Visual Arts (Sculpture/ Painting)/Commercial Arts, Performing Arts – (i) Dance (Kathak/ Bharatnatyam/ Oddisi/ Kathakali/Kuchipudi/ Manipuri (ii) Drama- Theatre (iii) Music General (Hindustani/ Carnatic/ Rabindra Sangeet/ Percussion/ Non-Percussion)</p>
                                            &nbsp;
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

export default Exams9
