function PatternCard({ title, data }) {
    return (
        <>
            <h5>{title}</h5>
            <table className="table table-striped table-hover">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">{data[0]}</th>
                        <th scope="col">{data[1]}</th>
                        <th scope="col">{data[2]}</th>
                        <th scope="col">{data[3]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{data[4]}</th>
                        <td>{data[5]}</td>
                        <td>{data[6]}</td>
                        <td>{data[7]}</td>
                    </tr>
                    <tr>
                        <th scope="row">{data[8]}</th>
                        <td>{data[9]}</td>
                        <td>{data[10]}</td>
                        <td>{data[11]}</td>
                    </tr>
                    <tr>
                        <th scope="row">{data[12]}</th>
                        <td>{data[13]}</td>
                        <td>{data[14]}</td>
                        <td>{data[15]}</td>
                    </tr>
                    <tr>
                        <th scope="row">{data[16]}</th>
                        <td>{data[17]}</td>
                        <td>{data[18]}</td>
                        <td>{data[19]}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PatternCard;