import { React, useState } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import { Modal } from '@weahead/react-customizable-modal-vite'

function Exams3() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
                <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
                <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
                <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
                <div className="container">
                    <div className="breadcumb-content text-center">
                        <h1 className="breadcumb-title">IP-MAT / IIM Ranchi</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="#">Exams</a></li>
                            <li>IIM Ranchi</li>
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
                                            <p>Qualifying Exam: Applicants should have passed the 10th standard/ Secondary/ SSC Examination and the 12th standard/ Higher Secondary/ HSC Examination with 60% (55% for candidates from SC/ ST/ PwD) or more marks.</p>
                                            <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                                            <p>Admission to the IIM Ranchi-IPM 2023 will be based on IPMAT 2023 (Conducted by IIM Indore) exam scores, a Personal Interview, and overall academic performance.</p>
                                            <p>The Weightage of Admission is as follows:</p>
                                            <p>• Admission Test (IPMAT) Score – 50%                              </p>
                                            <p>• Personal Interview Score – 30%</p>
                                            <p>• Academic Profile – 20%</p>
                                            <p>• Gender Diversity – 5%</p>
                                            {/* <h5>Adminssion Weightage</h5>
                                <p>Aptitude Test Score (ATS) – 65% AND Personal Interview (PI) – 35%</p> */}
                                            <h5>IMPORTANT DATES</h5>
                                            <p>Online Application starts from :03.04.2023</p>
                                            <p>Last date for submitting online application: 09.05.2023</p>
                                            <p> Last date to update the IPMAT-2023 (Conducted by IIM Indore) Application Number by 31.05.2023 (5:00 PM)</p>
                                            <p>Exam Date - Admission based on IPMAT (Conducted by IIM Indore)</p>
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
                                                    <div className="accordion-header" id="collapse-item-1"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">What Is The Duration Of The IPM Program At IIM Ranchi?</button></div>
                                                    <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body">
                                                            <p className="faq-text">The IPM program at IIM Ranchi is a five-year integrated program that combines undergraduate and postgraduate studies in management.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-card active">
                                                    <div className="accordion-header" id="collapse-item-2"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">What Is The Admission Process For The IPM Program At IIM Ranchi?</button></div>
                                                    <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body">
                                                            <p className="faq-text">The admission process usually involves a written entrance test, followed by a personal interview. The written test may consist of sections on quantitative ability, verbal ability, logical reasoning, and general awareness.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-card">
                                                    <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Are Internships A Part Of The IPM Program At IIM Ranchi?</button></div>
                                                    <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body">
                                                            <p className="faq-text">Yes, internships are an integral part of the IPM program. Students get the opportunity to undergo internships during the summer break between the undergraduate and postgraduate phases of the program.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

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

export default Exams3
