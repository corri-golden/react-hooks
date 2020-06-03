import React from "react";
import "./Kennel.css";
import AnimalCard from './animal/AnimalCard'

const Kennel = () => {
  return (
    <div>
      <h2>
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h2>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <div className="container-cards">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
    </div>
    </div>
  );
};

export default Kennel;