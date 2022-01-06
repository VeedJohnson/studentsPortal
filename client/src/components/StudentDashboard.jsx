// import { useState, useEffect } from "react";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import RightComponent from "./RightComponent";

export default function StudentDashboard() {

    const getUser = (user) => {
        return JSON.parse(window.localStorage.getItem("media_user"));
    }

   const handleUser = (user) => {
        const theLoggedUser = getUser(user)
        console.log(theLoggedUser);
        return theLoggedUser.firstname
    }
  return (
    <div>
      {/* <p>Hii {handleUser().charAt(0)}</p> - to get the first letter*/}
      {/* <p>Hii {handleUser()}</p> */}
      <Row>
        <Col md={2}>
          <Navigation />
        </Col>
        <Col md={10}>
          <RightComponent
            handleUser = {handleUser} 
          />
        </Col>
      </Row>
    </div>
  );
}
