import React from "react";

function EmployeesItem({name, email, phone, position}){

    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{position}</td>
        </tr>
    );
}

export default EmployeesItem;