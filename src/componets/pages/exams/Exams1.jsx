import React from 'react'

function Exams1() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">IIM Rohtak, IPM</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>IIM Rohtak</li>
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
                                <p>• General, NC-OBC, and EWS Category: Minimum 60% in 10th standard / SSC and 12th standard/ HSC or equivalent examinations, Maximum 20 years of age as on 30.06.2023.</p>
                                <p>• SC, ST & PWD (DAP) Category: Minimum 55% in 10th standard/ SSC and 12th standard/ HSC or equivalent examinations, Maximum 20 years of age as on 30.06.2022.</p>
                                <h5 className="h5 mt-40">SELECTION & ADMISSION PROCESS</h5>
                                <p>The candidates will be selected based on overall performance in the Aptitude Test Score (ATS) and Personal Interview (PI).</p>
                                <h5>Adminssion Weightage</h5>
                                <p>Aptitude Test Score (ATS) – 65% AND Personal Interview (PI) – 35%</p>
                                <h5>IMPORTANT DATES</h5>
                                <p>Online Application starts from :06.02.2023</p>
                                <p>Last date for submitting online application: 10.04.2023</p>
                                <p>Exam Date : 20.05.2023</p>
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
                                            <td>160</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> Verbal Ability</td>
                                            <td>40</td>
                                            <td>160</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Logic Reasoning</td>
                                            <td>40</td>
                                            <td>160</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Total</td>
                                            <td>120</td>
                                            <td>480</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="title-area mb-4 mt-5">
                                    <h2 className="sec-title mb-0">Frequently Asked Question?</h2>
                                </div>
                                <div className="accordion-area accordion" id="faqAccordion">
                                    <div className="accordion-card">
                                        <div className="accordion-header" id="collapse-item-1"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">What Is The Duration Of The IPM Program At IIM Rohtak?</button></div>
                                        <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p className="faq-text">The IPM program at IIM Rohtak is a five-year integrated program</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-card active">
                                    <div className="accordion-header" id="collapse-item-2"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">Can I Apply For The IPM Course At IIM Rohtak Directly After Completing My 12th Grade?</button></div>
                                    <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text">Yes, the IPM program is specifically designed for students who have completed their 12th grade or equivalent.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="accordion-card">
                                    <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Are There Any Reservations Or Quotas For Specific Categories In The IPM Program?</button></div>
                                    <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text">Yes, IIM Rohtak follows the government-mandated reservation policies for different categories such as SC, ST, OBC, EWS, and PwD.</p>
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
                  <aside className="sidebar-area stickypositin">
                     <div className="widget widget_info">
                        <h3 className="widget_title mt-0">Book a Free Demo</h3>
                         <form action="" className='mt-3'>
                             <div className="form-group mb-2">
                                 <input type="text" className='form-control' placeholder='Name' />
                             </div>
                             <div className="form-group mb-2">
                                 <input type="text" className='form-control' placeholder='Email' />
                             </div>
                             <div className="form-group mb-2">
                                 <input type="text" className='form-control' placeholder='Phone' />
                             </div>
                             <div className="form-group mb-2">
                                 <select name="" id="" className='form-control'>
                                     <option value="">One-On-Live Clasess</option>
                                     <option value="">Ten One-On-One Session with RV Sir</option>
                                 </select>
                             </div>
                             <div className="form-group">
                                 <button className='th-btn'>Submit</button>
                             </div>
                         </form>
                     </div>
                  </aside>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Exams1
