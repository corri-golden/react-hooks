import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeList from "./employee/EmployeeList"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationList from "./location/LocationList"
import LocationDetail from "./location/LocationDetail"
import OwnerList from "./owner/OwnerList"
import OwnerDetail from "./owner/OwnerDetail"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"
import Login from "./auth/Login";
//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {

  // Check if credentials are in session storage returns true/false
  //a function that goes into session storage to use the getItem method to pull out credentials and make sure its there
  //its a comparison that returns the result.  we don't need the return bc its a fat arrow 
  //when we call isauthenticated below is either true or false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  
    return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
        //isAuthenticated is a method it returns true or false
        if (isAuthenticated()) {
            return <AnimalList {...props} />
        } else {
            return <Redirect to="/login" />
        }
        }} />
      
      <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
        }} />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route path="/employees/:employeeId(\d+)" render={(props) => {
         // Pass the employeeId to the EmployeeDetailComponent
        return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}{...props}/>
        }} />
        <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList {...props} />;
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
         // Pass the locationId to the AnimalDetailComponent
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />
      <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
        }} />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
        />
        <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList {...props} />;
        }}
      />
      <Route path="/owners/:ownerId(\d+)" render={(props) => {
         // Pass the ownerId to the OwnerDetailComponent
        return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
        }} />
      <Route
        path="/animals/:animalId(\d+)" 
        render={props => {
            // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>;
        }}
        /*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
        */
        />
        <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
        }} />
        <Route path="/login" component={Login} />
    </React.Fragment>
  );
};

export default ApplicationViews;