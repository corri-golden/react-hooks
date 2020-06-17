import React, {useState, useEffect} from 'react'
import OwnerManager from "../../modules/OwnerManager"
import "./OwnerDetail.css"


const OwnerDetail = props => {
    const [owner, setOwner] = useState({name: "", number: ""})
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = () => {
        //invoke the delete function in OwnerManger and re-direct to the owner list.
        setIsLoading(true);
        OwnerManager.delete(props.ownerId).then(() =>
          props.history.push("/owners")
        );
      };

    useEffect(() => {
        //get(id) from LocationManager and hang on to the data; put it into state
        OwnerManager.get(props.ownerId)
          .then(owner => {
            setOwner({
              name: owner.name,
              number: owner.number
            });
            setIsLoading(false);
          });
      }, [props.ownerId]);
    
      return (
        <div className="card">
          <div className="card-content">
    
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.number}</span></h3>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
            </button>

          </div>
        </div>
      );







}

export default OwnerDetail
