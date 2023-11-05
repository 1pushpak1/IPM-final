import React, { useState, useEffect } from 'react'
import BookFreeDemo from '../form/BookFreeDemo'
import { Link } from 'react-router-dom';
import PatternCard from './patternCard';
import supabase from '../form/Supabase';

function Pattern() {
    const [data, setData] = useState([]);
    const patterndata = async () => {
        await supabase
            .from('Pattern')
            .select('*')
            .then((data) => {
                setData(data["data"]);
            })
    }
    useEffect(() => {
        patterndata();
    }, []);

    let patternList = data.map((patternval) => {
        return (
            <PatternCard key={patternval.id} data={patternval.tabledata} title={patternval.title} />
        )
    })
    return (
        <>
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
                                            {patternList}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4">
                            <BookFreeDemo />
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
                                <Link to="/contactus" className="th-btn style8">Book a Counselling Session<i className="fas fa-arrow-right ms-1"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pattern
