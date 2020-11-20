import Table from 'react-bootstrap/Table'

function TableLayout(props) {
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
                <tr>
                    <td><img src=""/></td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>City</td>
                    <td>Age</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableLayout;