import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';

import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", number: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };



  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.number === "") {
      window.alert("Please input an owner name and number");
    } else {
      setIsLoading(true);
      // Create the employee and redirect user to employee list
      OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
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
              onChange={handleFieldChange}
              id="name"
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="number"
              placeholder="Number"
            />
            <label htmlFor="role">Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm