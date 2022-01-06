// import axios from "axios";
import React, { useEffect } from "react";

import "./Print.css";

export default function ViewBiodata(props) {

    const user = JSON.parse(localStorage.getItem("media_user"));
 
    const handleBiodata = () => {
        const userBiodata = JSON.parse(localStorage.getItem("biodata"));
        const { firstname, lastname, dateOfBirth, gender, nationality, stateOfOrigin, image, phoneNumber, parentFirstname, parentLastname, parentPhoneNumber, jambRegNumber, department } = userBiodata;
        return { firstname, lastname, dateOfBirth, gender, nationality, stateOfOrigin, image, phoneNumber, parentFirstname, parentLastname, parentPhoneNumber, jambRegNumber, department };
    }
    
    useEffect(() => {
        handleBiodata();
      }, []); 

    return (
            <div>
                <div className="bio-header">
                    <div className="logo-area" style={{color: "black", marginRight: "20px"}}>
                        <p className="logo">
                            GROUP <span className="group-number">I</span>
                        </p>
                        <p className="logo-sub">UNIVERSITY</p>
                    </div>
                    <h1 style={{textAlign: "center"}}>STUDENT BIODATA</h1>
                </div>
                <div className="biodata-grid">
                    <div className="student-info">
                        <div className="student-names">
                            <p><span>Name: </span>{handleBiodata().lastname.toUpperCase()} {handleBiodata().firstname}</p>
                            <p><span>Email Address: </span>{user.email}</p>
                        </div>
                        <div className="student-passport">
                            <img src= {`http://localhost:5000/${handleBiodata().image}`} alt="Passport" style={{width: "200px", height: "200px"}} />
                        </div>
                    </div>

                    <p className="title">PERSONAL INFORMATION</p>
                    <div className="name-grid">
                        <p className="firstname"><span>First name: </span> {handleBiodata().firstname}</p>
                        <p className="lastname"><span>Last name: </span>{handleBiodata().lastname}</p>
                    </div>
                    <p className="dob"><span>Date of birth: </span>{handleBiodata().dateOfBirth.substring(0, 10)}</p>
                    <p className="gender"><span>Gender: </span>{handleBiodata().gender}</p>
                    <p><span>Nationality: </span>{handleBiodata().nationality}</p>
                    <p><span>State of origin: </span>{handleBiodata().stateOfOrigin}</p>
                    <p><span>Phone number: </span>{handleBiodata().phoneNumber}</p>

                    <p className="title">SPONSOR INFORMATION</p>
                    <p className="firstname"><span>Parent/Guardian first name: </span>{handleBiodata().parentFirstname}</p>
                    <p className="lastname"><span>Parent/Guardian last name: </span>{handleBiodata().parentLastname}</p>
                    <p className="phone-number"><span>Parent/Guardian Phone number: </span>{handleBiodata().parentPhoneNumber}</p>

                    <p className="title">EDUCATION</p>
                    <p className="jamb-number"><span>JAMB Registration number: </span>{handleBiodata().jambRegNumber}</p>
                    <p className="department"><span>Department: </span>{handleBiodata().department}</p>

                    <div className="button-grid">
                        <button onClick={window.print}>Print</button>
                    </div>
                </div>
            </div>
    )
}