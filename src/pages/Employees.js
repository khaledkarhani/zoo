import '../styles/Employees.css';

import { EmployeesList } from '../data/EmployeesList';
import EmployeesItem from '../components/EmployeesItem';


const Employees = () => {
    return(
        <div>
            <h1>Employees 🧑‍💼</h1>

<table>

<tr>
  <th>Name</th>
  <th>Email</th>
  <th>Phone</th>
  <th>Position</th>
</tr>

      {EmployeesList.map((item, index) => (
        <EmployeesItem
          key={index}
          name={item.name}
          email={item.email}
          phone={item.phone}
          position={item.position}
          />
      ))}

</table>
        </div>
    );
}           

export default Employees;