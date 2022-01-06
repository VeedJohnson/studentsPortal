import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Navigation.css";

export default function Activity({title, icon, location}) {

  return (
    <div>
        <Link to={"/" + location} className="act" style={{ textDecoration: "none"}}>
            <FontAwesomeIcon className="icon" icon={ icon } /> 
            <p className="link-txt">{title}</p>
        </Link>
    </div>
  );
}