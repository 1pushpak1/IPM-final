function CalenderCard({ title, data }) {
    return (
        <div className="course-description">
            <h5>{title}</h5>
            <table className="table table-striped table-hover">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">{data[0]}</th>
                        <th scope="col">{data[1]}</th>
                        <th scope="col">{data[2]}</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{data[3]}</th>
                        <td>{data[4]}</td>
                        <td>{data[5]}</td>

                    </tr>
                    <tr>
                        <th scope="row">{data[6]}</th>
                        <td>{data[7]}</td>
                        <td>{data[8]}</td>

                    </tr>
                    <tr>
                        <th scope="row">{data[9]}</th>
                        <td>{data[10]}</td>
                        <td>{data[11]}</td>

                    </tr>
                    <tr>
                        <th scope="row">{data[12]}</th>
                        <td>{data[13]}</td>
                        <td>{data[14]}</td>

                    </tr>
                    <tr>
                        <th scope="row">{data[15]}</th>
                        <td>{data[16]}</td>
                        <td>{data[17]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CalenderCard