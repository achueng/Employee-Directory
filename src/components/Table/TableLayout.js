import Table from 'react-bootstrap/Table'

function TableLayout({data}) {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map(employee => {
                    return (
                        <tr>
                            <td><img src={employee.image} alt={employee.name} /></td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.city}</td>
                            <td>{employee.age}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableLayout;