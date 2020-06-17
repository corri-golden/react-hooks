import React from "react";
import {Link} from "react-router-dom";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
  Employee Name: <span className="card-petname">{props.employee.name}</span>
        </h3>
        <h4>Role: <span className="card-petname">{props.employee.role}</span></h4>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>
        <Link to={`/employees/${props.employee.id}`}>
            <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;