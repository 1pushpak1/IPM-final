import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
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






      <section>
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-8">
                  <div className="course-single">
                     <div className="course-single-bottom">
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
                     </div>
                        {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                        {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                        {/* <h2 className="course-title">Five Year Integrated Programme in Management (IPM)</h2>
                        <ul className="course-single-meta"> */}
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        {/* </ul> */}
                       
                     
                        <ul className="nav course-tab" id="courseTab" role="tablist">
                           <li className="nav-item" role="presentation"><a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#Coursedescription" role="tab" aria-controls="Coursedescription" aria-selected="true"><i className="fa-regular fa-bookmark"></i>SET 2023 Analysis</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="curriculam-tab" data-bs-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false"><i className="fa-regular fa-book"></i>IPMAT Rohtak analysis</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false"><i className="fa-regular fa-user"></i>IPMAT Indore Analysis</a></li>
                           <li className="nav-item" role="presentation"><a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><i className="fa-regular fa-star-sharp"></i>JIPMAT Analysis</a></li>
                        </ul>
                        <div className="tab-content" id="productTabContent">
                           <div className="tab-pane fade show active" id="Coursedescription" role="tabpanel" aria-labelledby="description-tab">
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
                           <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                           <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h5>IPMAT 2022 Ovierview</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Section</th>
                                            <th scope="col">No. of Questions</th>
                                            <th scope="col">Good Score</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Quantitative Ability</th>
                                            <td>40</td>
                                         
                                            <td>112-120</td>
                                            
                                        </tr>   
                                        <tr>
                                            <th scope="row">Logical Reasoning</th>
                                            <td>40</td>
                                           
                                            <td>112-120</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">Verbal Ability</th>
                                            <td>40</td>
                                           
                                            <td>112-120</td>
                                            
                                        </tr> 
                                        <tr>
                                            <th scope="row">Total</th>
                                            <td>120</td>
                                            <td>344-368</td>
                                            
                                        </tr> 
                                      
                                    </tbody>
                                </table>
                                <h5>IPMAT Rohtak 2023 Section-wise Analysis </h5>
                                <h6>Quantitative Ability</h6>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Topic</th>
                                            <th scope="col">No. of Questions</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Number System</th>
                                           
                                         
                                            <td>2-3</td>
                                            
                                        </tr>   
                                        <tr>
                                            <th scope="row">Percentage</th>
                                           
                                            <td>2-3</td>
                                            </tr>
                                            
                                        <tr>
                                            <th scope="row">Time And Work</th>
                                            <td>2</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Time, Speed, and Distance</th>
                                            
                                           
                                            <td>3-4</td>
                                            
                                        </tr> 

                                        <tr>
                                            <th scope="row">Ratio and Proportion</th>
                                            <td>3-4</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Simple and Compound Interest</th>
                                            <td>2-3</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Profit, Loss, and Discount</th>
                                            <td>2</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Averages</th>
                                            <td>2</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Probability</th>
                                            <td>1</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Geometry</th>
                                            <td>1-2</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Clocks</th>
                                            <td>1</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Permutation and Combination</th>
                                            <td>2</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Age</th>
                                            <td>1</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Trigonometry</th>
                                            <td>2-3</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Puzzles</th>
                                            <td>1-2</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Mensuration</th>
                                            <td>2-3</td>
                                                                              
                                        </tr>
                                        <tr>
                                            <th scope="row">Algebra</th>
                                            <td>2</td>
                                                                              
                                        </tr>
                                       
                                      
                                    </tbody>
                                </table>

                                </div>
                                </div>
                                </div>
                                </div>
                                 















                           <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                           <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h5>IPMAT INDORE 2024 Ovierview</h5>
                               <p>As with any entrance exam, it is essential to have a good preparation strategy in place to be effective. One of the more important details in the IPM Preparation Strategy is the IPMAT Indore Syllabus which is explained in detail below:</p>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Quantitative Ability</th>
                                            <th scope="col">Verbal Ability</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">In total there are 45 questions for 180 marks</th>
                                            <td>In total there are 45 questions for 180 marks</td>
                                            
                                        </tr>   
                                        <tr>
                                            <th scope="row"><div className="col-md-auto">
                                        <div className="checklist">
                                            <ul>
                                            <li>Number System</li>
                                            <li>Averages & Percentages</li>
                                            <li>Roots, Indices, Surds</li>
                                            <li>Simple & Compound Interest</li>
                                            <li>Profit & Loss</li>
                                            <li>Algebraic Formulae</li>
                                            <li>Linear & Quadratic Equations</li>
                                            <li>Ratio & Proportion</li>
                                            <li>Partnership</li>
                                            <li>Mixtures & Alligations</li>
                                            <li>Time, Speed & Distance</li>
                                            <li>Work Related Problems</li>
                                            <li>Pipes & Cisterns</li>
                                            <li>Geometry: Lines, Angles & Triangles,</li>
                                            <li>Polygons, Circles & Mensuration</li>
                                            <li>Permutations, Combinations, Probability,</li>
                                            <li>Determinants</li>
                                            <li>Vectors</li>
                                            <li>Integration & Differentiation      </li>               
                                            </ul>
                                        </div>
                                    </div></th>
                                            <td><div className="col-md-auto">
                                        <div className="checklist">
                                            <ul>
                                            <li>Etymology & Roots</li>
                                            <li>Idioms & Phrases</li>
                                            <li>Analogies</li>
                                            <li>Antonyms-Synonyms</li>
                                            <li>Foreign Words</li>
                                            <li>Noun & Pronoun Errors</li>
                                            <li>Subject-Verb Agreement</li>
                                            <li>Prepositions and Conjunctions</li>
                                            <li>Tenses, Modifiers & Parallelism</li>
                                            <li>Reading Comprehension</li>
                                            <li>Inference based passages</li>
                                            <li>Syllogisms</li>
                                            <li>Logical Consistency</li>
                                            <li>Deductive Reasoning                     </li>
                                            </ul>
                                        </div>
                                    </div></td>
                                           
                                            
                                            
                                        </tr>
                                       
                                      
                                    </tbody>
                                </table>
                                </div>
                                </div>
                                </div>
                                </div>











                           <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                           <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h5>JIPMAT Paper Structure</h5>
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
                                <h4 className="h5 mt-40">JIPMAT 2023 Detailed Analysis</h4>
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
                                 {/* <div className="th-comment-form">
                                    <div className="form-title">
                                       <h3 className="blog-inner-title">Add a review</h3>
                                    </div>
                                    <div className="row">
                                       <div className="form-group rating-select d-flex align-items-center">
                                          <label>Your Rating</label>
                                          <p className="stars"><span><a className="star-1" href="#">1</a> <a className="star-2" href="#">2</a> <a className="star-3" href="#">3</a> <a className="star-4" href="#">4</a> <a className="star-5" href="#">5</a></span></p>
                                       </div>
                                       <div className="col-12 form-group"><textarea placeholder="Write a Message" className="form-control"></textarea> <i className="text-title far fa-pencil-alt"></i></div>
                                       <div className="col-md-6 form-group"><input type="text" placeholder="Your Name" className="form-control" /> <i className="text-title far fa-user"></i></div>
                                       <div className="col-md-6 form-group"><input type="text" placeholder="Your Email" className="form-control" /> <i className="text-title far fa-envelope"></i></div>
                                       <div className="col-12 form-group"><input id="reviewcheck" name="reviewcheck" type="checkbox" /> <label htmlFor="reviewcheck">Save my name, email, and website in this browser for the next time I comment.<span className="checkmark"></span></label></div>
                                       <div className="col-12 form-group mb-0"><button className="th-btn">Post Review <i className="far fa-arrow-right ms-1"></i></button></div>
                                    </div>
                                 </div> */}
                            
                          
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

export default Analysis
