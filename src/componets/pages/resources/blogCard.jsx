function BlogCard({ title, description }) {
    return (
        <div className="course-single">
            <div className="course-single-top">
                {/* <div className="course-img"><img src="assets/img/course/course-details.png" alt="Course Image" /> </div> */}
                {/* <div className="course-meta style2"><span><i className="fal fa-file"></i>Lesson 8</span> <span><i className="fal fa-chart-simple"></i>Beginner</span></div> */}
                <h2 className="course-title">{title}</h2>
                <p>{description}</p>
                {/* <Link to="/#">More</Link></p> */}
                <ul className="course-single-meta">
                    {/* <li className="course-single-meta-author"><img src="assets/img/course/author2.png" alt="author" /> <span><span className="meta-title">Instructor: </span><a href="#">Max Alexix</a></span></li>
                           <li><span className="meta-title">Last Update: </span><a href="#">20 Jun, 2023</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default BlogCard