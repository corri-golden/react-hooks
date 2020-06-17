import React, {useState, useEffect} from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import './EmployeeDetail.css' 


const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({ name: "", role: ""});
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        EmployeeManager.delete(props.employeeId).then(() =>
          props.history.push("/employees")
        );
      };

    useEffect(() => {
        //get(id) from EmployeeManager and hang on to the data; put it into state
        EmployeeManager.get(props.employeeId)
          .then(employee => {
            setEmployee({
              name: employee.name,
              role: employee.role
            });
            setIsLoading(false);
          });
      }, [props.employeeId]);
    
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
            <h3>Role: <span style={{ color: 'darkslategrey' }}>{employee.role}</span></h3>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
            </button>
          </div>
        </div>
      );





}


export default EmployeeDetail