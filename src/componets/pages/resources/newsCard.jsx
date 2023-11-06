function NewsCard({ description, author, date }) {
    return (
        <div className="col-lg-6">
            <div className="testi-box">
                <div className="testi-box-bg-shape">
                    {/* <svg width="150" height="137" viewBox="0 0 150 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.99951C0 4.47666 4.47715 -0.000488281 10 -0.000488281H140C145.523 -0.000488281 150 4.47666 150 9.99951V10.5803C150 13.3951 148.814 16.0796 146.732 17.9747L18.8619 134.394C17.0205 136.07 14.6199 137 12.1297 137H10C4.47715 137 0 132.522 0 127V9.99951Z" fill="#0D5EF4"/>
                              </svg> */}
                </div>
                <div className="testi-box_content">

                    <p className="testi-box_text">{description}</p>
                </div>
                <div className="testi-box_bottom">
                    <div>
                        <h3 color="#0000FF" className="testi-box_name">{author}</h3>
                        <span className="testi-box_desig">{date}</span>
                    </div>
                    {/* <div className="testi-box_review"><i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> (4.7)</div> */}
                </div>
            </div>
        </div>
    )
}

export default NewsCard;