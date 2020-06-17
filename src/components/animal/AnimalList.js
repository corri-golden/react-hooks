import React, { useEffect, useState } from 'react';
import AnimalManager from '../../modules/AnimalManager'
import AnimalCard from './AnimalCard';

const AnimalList = (props) => {
    
    //create an initial state of an empty array called animals and a function for updating animals called setAnimals
   //sets up state.  
    const [animals, setAnimals] = useState([]);
    
     
    
    const getAnimals = () => {
        return AnimalManager.getAll().then(animalsFromAPI => {
          
          console.log(animalsFromAPI);
          setAnimals(animalsFromAPI)
        });
      };

      //that deletes an animal from API, then get all the animals again so we can set the state of the animals when we call set animals
      // (change the state) the component will automatically re render
      const deleteAnimal = id => {
        AnimalManager.delete(id)
          .then(() => AnimalManager.getAll().then(setAnimals));
      };

    // When Animalist mounts to the dom for the first time, go get the animals.  Executing useffect
    //exceutes useEffect. when componenmt finishes rendering call get animals  
    useEffect(() => {
        getAnimals();
      }, []);
    
    
    
    //put in the DOM.
    return (
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/animals/new")}}>
                Admit Animal
            </button>
            </section>
        <div className="container-cards">
            {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />)}
        </div>
        </ >
        
    );
};

export default AnimalList