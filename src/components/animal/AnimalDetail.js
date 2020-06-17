import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  //
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  //creating a variable in state called is loading.  user can't click delete btn
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId)
    //history property is tied to the url history.  change to /animals
    .then(() => props.history.push("/animals")
    );
  };


  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed
        });
        // after animal manager runs and sets animal state then update the state of is loading to false
        setIsLoading(false);
      });
//Below is listening for any changes to call.  is called when a change is in animalId.  Basically an event listener  It's a dependency
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button"
        //is loading state is so the user can't delete multiple times and delete before page renders
         disabled={isLoading}
          onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;