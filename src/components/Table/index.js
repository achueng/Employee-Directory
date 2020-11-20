import React, { useEffect, useState } from "react";
import TableLayout from "./TableLayout";
import API from "../../utils.js/API";

function Table() {
    const [employeesState, setEmployeesState] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    function getEmployees() {
        API.employees()
        .then(({data}) => {
            const selectData = data.results.map(employee => {
                return {
                    image: employee.picture.thumbnail,
                    name: `${employee.name.first} ${employee.name.last}`,
                    email: employee.email,
                    city: employee.location.city,
                    age: employee.dob.age
                }
            })
            setEmployeesState(selectData);
        })
        .catch(err => console.log(err))
    }

    return <TableLayout data={employeesState}/>
}

export default Table;