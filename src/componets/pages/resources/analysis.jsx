import React from 'react'

function Analysis() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">Exam Anlaysis</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Resources</a></li>
                  <li>Exam Analysis</li>
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
                        <h2 className="course-title">Management Exam Analysis</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h5>SET 2023 Paper Structure</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Section</th>
                                            <th scope="col">No. of Questions</th>
                                            <th scope="col">Difficulty level</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">General English</th>
                                            <td>16</td>
                                            <td>Easy-Moderate</td>
                                            
                                        </tr>   
                                        <tr>
                                            <th scope="row">Quantitative Aptitude</th>
                                            <td> 16</td>
                                            <td>Moderate</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">General Awareness</th>
                                            <td>16</td>
                                            <td>Easy-Moderate</td>
                                            
                                        </tr> 
                                        <tr>
                                            <th scope="row">Analytical and Logical Reasoning</th>
                                            <td>12</td>
                                            <td>Easy-Moderate</td>
                                            
                                        </tr> 
                                      
                                    </tbody>
                                </table>
                          
                            
                            <div className="tab-content" id="productTabContent">
                                <h4 className="h5 mt-40">SET 2023 Detailed Analysis</h4>
                                <p>The overall difficulty level of the paper was easy-moderate. Time constraint was not so much of a factor. There was ample time especially because of the difficulty level and the nature of the General Reasoning and English section. Find below the section-wise analysis of the paper.</p>
                                <h5>General English</h5>
                                    <div className="col-md-auto">
                                        <div className="checklist">
                                            <ul>
                                            <li>Fill in the Blanks</li>
                                            <li>Synonyms/Antonyms</li>
                                            <li>Sentence Improvement</li>
                                            <li>Idioms and Phrases</li>
                                            <li>Error Spotting</li>
                                            <li>Spelling Errors</li>
                                            <li>Sentence Completion</li>
                                            <li>Sentence Re-arrangement</li>
                                            <li>Analogy</li>                      
                                            </ul>
                                        </div>
                                    </div>
                                   
                                   <p>  </p>
                                   <p>  </p>
                                 <h5>Quantitative Aptitude</h5>
                                    <div className="col-md-auto">
                                        <div className="checklist">
                                            <ul>
                                                <li>Number System</li>
                                                <li>Time and Work</li>
                                                <li>Time, Speed, and Distance</li>
                                                <li>Percentages</li>
                                                <li>Ratio and Proportion</li>
                                                <li>Simple Interest-Compound Interest</li>
                                                <li>Profit, Loss, and Discount</li>
                                                <li>Averages</li>
                                                <li>Probability</li>
                                                <li>Geometry</li>
                                                <li>Clocks</li>
                                                <li>Trigonometry</li>
                                                <li>Mensuration</li>
                                                <li>Log</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>  </p>
                                    <p>  </p>
                                 <h5>General Awareness</h5>
                                    <div className="col-md-auto">
                                        <div className="checklist">
                                            <ul>
                                                 <li>Cricket (bowling) </li>
                                                 <li>G-20 Summit</li>
                                                 <li>WACA Cricket ground</li>
                                                 <li>GIR National Park</li>
                                                 <li>World's longest tunnel</li>
                                                 <li>Jeff Bezos</li>
                                                 <li>Freedom fighters</li>
                                                 <li>First Viceroy of India</li>
                                                 <li>Post of General Bipin Rawat</li>
                                                 <li>Highest Army Award</li>
                                                 <li>Current President Of Brazil</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <p>  </p>
                                    <p>  </p>
                                <h5>Logical Reasoning</h5>
                                    <div className="col-md-auto">
                                        <div className="checklist">
                                             <ul>
                                                <li>Coding-Decoding</li>
                                                <li>Blood Relations</li>
                                                <li>Calendars</li>
                                                <li>Seating arrangements</li>
                                                <li>Analogy</li>
                                                <li>Data Sufficiency</li>
                                                <li>Syllogisms</li>
                                                <li>Statement-Assumptions</li>
                                                <li>Misc</li>
                                                <li>Series</li>

                                             </ul>
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

export default Analysis
