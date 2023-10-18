import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function Blog() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">BLOGS</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Resources</a></li>
                  <li>Blogs</li>
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
                        <h2 className="course-title">Preparation of Maths section for IPMAT</h2>
                        <p>Preparing for the IPMAT (Integrated Program in Management Aptitude Test) requires a dedication and structured approach to mathematics, as it is a crucial part of the exam. In this article, we will outline a comprehensive strategy to excel in the mathematics section of the IPMAT.</p>
                        <p>1.  As we know that Quantitative Aptitude is an important section in the IPMAT entrance exam. So in this article, we will answer some of the most frequently asked questions related to Maths for IPMAT. </p>
                        <p>2.  The weightage to Quantitative Aptitude is high for Both IPMAT Indore and IPMAT Rohtak. JIPMAT does not have a Quantitative Aptitude section.</p>                       
                        <p>3.   What is the syllabus of Maths for IPMAT? How to prepare for this section for IPMAT? What should be the strategy to solve maths problems? We will elaborate on these things further in this article.</p>   
                        <ul className="course-single-meta"> 
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                               <h5>IPMAT 2023 (Indore) Calendar</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Milestone</th>
                                            <th scope="col">Date/Deadline</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>IPMAT Application start date</td>
                                            <td>6 March 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> IPMAT Application last date</td>
                                            <td>14 April 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Exam Date</td>
                                            <td>16 June 2023 (2 to 4 PM)</td>
                                         
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Announcement of Interviews</td>
                                            <td>End of June 2023</td>
                                       
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Final Announcement of the result</td>
                                            <td>Second week of July 2023</td>
                                       
                                        </tr>
                                    </tbody>
                                </table>
                          
                            </div>

                            <div className="course-description">
                                 <h5>IIM Ranchi Calendar</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Milestone</th>
                                            <th scope="col">Date/Deadline</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>IPMAT Application start date</td>
                                            <td>6 March 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> IPMAT Application last date</td>
                                            <td>14 April 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Exam Date</td>
                                            <td>16 June 2023 (2 to 4 PM)</td>
                                         
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Announcement of Interviews</td>
                                            <td>End of June 2023</td>
                                       
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Final Announcement of the result</td>
                                            <td>Second week of July 2023</td>
                                       
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                
                            <div className="course-description">
                                 <h5>JIPMAT Exam Calendar</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Milestone</th>
                                            <th scope="col">Date/Deadline</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>JIPMAT Application start date</td>
                                            <td>6 April 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> JIPMAT Application last date</td>
                                            <td>30 April 2023</td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Correction Window</td>
                                            <td>2-4 May 2023</td>
                                         
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Exam Date</td>
                                            <td>28 May 2023</td>
                                       
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Final Announcement of the result</td>
                                            <td>Second week of June 2023</td>
                                       
                                        </tr>
                                    </tbody>
                                </table>
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
      

    </>
  )
}

export default Blog
