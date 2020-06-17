import React, { useEffect, useState } from 'react';
import LocationManager from '../../modules/LocationManager'
import LocationCard from './LocationCard';


const LocationList = () => {

    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return LocationManager.getAll().then(locationsFromAPI => {
          
          console.log(locationsFromAPI);
          setLocations(locationsFromAPI)
        });
      };

    const deleteLocation = id => {
      LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
    }

      useEffect(() => {
        getLocations();
      }, []);


      return (
        <>
        {/* <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/animals/new")}}>
                Admit Animal
            </button>
            </section> */}
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} 
            location={location} 
            deleteLocation={deleteLocation} 
            />)}
        </div>
        </ >
        
    );






}

export default LocationList;