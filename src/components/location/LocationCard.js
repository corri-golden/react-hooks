import React from "react";
import {Link} from "react-router-dom";
// import './LocationCard.css'


const LocationCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
          <h3>
            Location: <span className="card-petname">{props.location.name}</span>
          </h3>
          <button onClick={() => {props.deleteLocation(props.location.id)}} className="delete">Sale Clinic</button>
          <Link to={`/locations/${props.location.id}`}>
            <button>Details</button>
          </Link>
            </div>
        </div>

    );
};

export default LocationCard;



