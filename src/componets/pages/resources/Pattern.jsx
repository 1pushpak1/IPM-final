import React from 'react'
import BookFreeDemo from '../form/BookFreeDemo'

function Pattern() {
  return (
    <>
    <div className="breadcumb-wrapper" data-overlay="title" data-opacity="8">
        <div className="breadcumb-shape" data-bg-src="assets/img/bg/breadcumb_shape_1_1.png"></div>
         <div className="shape-mockup breadcumb-shape2 jump d-lg-block d-none" data-right="30px" data-bottom="30px"><img src="assets/img/bg/breadcumb_shape_1_2.png" alt="shape" /></div>
         <div className="shape-mockup breadcumb-shape3 jump-reverse d-lg-block d-none" data-left="50px" data-bottom="80px"><img src="assets/img/bg/breadcumb_shape_1_3.png" alt="shape" /></div>
         <div className="container">
            <div className="breadcumb-content text-center">
               <h1 className="breadcumb-title">IP-MAT / IIM Indore</h1>
               <ul className="breadcumb-menu">
                  <li><a href="#">Exams</a></li>
                  <li>IIM Indore</li>
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
                        <h2 className="course-title">Exam Pattern</h2>
                        <ul className="course-single-meta">
                           {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                        </ul>
                     </div>
                     <div className="course-single-bottom">
                        <div className="tab-content" id="productTabContent">
                            <div className="course-description">
                                
                                <h5>Indore</h5>
                                <table className="table table-striped table-hover">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Sr. NO.</th>
                                            <th scope="col">Section</th>
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
                                            <td> Quantitative Ability- SA (No Negative Marking)</td>
                                            <td>20</td>
                                            <td>80</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Verbal Ability</td>
                                            <td>40</td>
                                            <td>160</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Total</td>
                                            <td>100</td>
                                            <td>400</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h5>IPM-AT Rohtak</h5>
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
                                            <td>Logical Reasoning</td>
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

                                <h5>IPM-AT Ranchi</h5>
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
                                            <td> 	Verbal Ability & Reading Comprehension</td>
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


                                <h5>JIPMAT Jammu</h5>
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

export default Pattern
