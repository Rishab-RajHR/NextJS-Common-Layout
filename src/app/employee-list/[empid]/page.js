import Link from "next/link";
import DeleteButton from "../../component/DeleteButton";


const getEmployees = async () => {
    let data = await fetch('http://localhost:3000/api/employee')
    data = await data.json();
    return data;
}
const EmployeeList = async () => {
  const employees = await getEmployees();
  return (
    <>
     <h2>Employees</h2> 
     {
        employees.map((item, i) => (
            <div key={i}>
              <h3>{item.name}</h3>
              <DeleteButton id={item.employeeId}/>
              <Link href={`employee-list/${item.employeeId}/update`}>Edit</Link>
            </div>
        ))
     }
    </>
  )
}

export default EmployeeList
