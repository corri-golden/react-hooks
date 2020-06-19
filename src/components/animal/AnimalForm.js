import React, {useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager'
import './AnimalForm.css'

const AnimalForm = props => {
  //creating an empty object so we can put info there.
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  //so the button can't be clicked until the right moment
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);


  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      
      console.log(employeesFromAPI);
      setEmployees(employeesFromAPI)
    });
  };

  useEffect(() => {
      getEmployees();
  }, []);
    
    


  const handleFieldChange = evt => {
    //make a new object with the spread operator props of the animal object
    //next line =evt.target.value, we create the object so we can change can't directly change properties of a state
    //Object.  We are directly changing the property of an Object.
    const stateToChange = { ...animal };
    //stateToChange[evt.target.id] bracket notation on stateToChange because its a variable.  evt.target.id
    //allows us to change one of the properties on the object. either name or breed which is the id.  then set its value
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
 //taking the animal data from the form and saving it to the database
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      //animalmanager.post uses the animal which is the state object
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              //handlefieldchange is going to set the value on the event in state.  taking the values and setting them on state
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"/>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <label htmlFor="caretakers">Choose a caretaker:</label>
            <select
              type="option"
              id="employeeId"
              required
              onChange={handleFieldChange}
            >
              <option>Caretakers</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm