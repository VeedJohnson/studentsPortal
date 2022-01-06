import React from "react";
import { faMoneyBill, faFile, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import "./Navigation.css";
import "./Print.css";

function Navigation() {
  const logout = () => {
        localStorage.clear();
        window.location.href = '/';
  }
  return (
      <div className="no-print">
        <div className="logo-area">
            <p className="logo">
                GROUP <span className="group-number">I</span>
            </p>
            <p className="logo-sub">UNIVERSITY</p>
        </div>
        <nav className="nav-area">
            <ul className="nav">
                <li className="nav-link current">
                    <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit"}}>
                      <FontAwesomeIcon className="icon" icon={ faHome } /> 
                      <span className="link-txt">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-link" >
                    <Link to="/dashboard/biodata" style={{ textDecoration: "none", color: "inherit"}}>
                      <FontAwesomeIcon className="icon" icon={ faFile } /> 
                      <span className="link-txt">Student Info</span>
                    </Link>
                </li>
                <li className="nav-link" >
                    <Link to="/payments" style={{ textDecoration: "none", color: "inherit"}}>
                      <FontAwesomeIcon className="icon" icon={ faMoneyBill } /> 
                      <span className="link-txt">Payments</span>
                    </Link>
                </li>
            </ul>
            <div className="settings">
                <li className="nav-link">
                  <button onClick={logout}>
                    <FontAwesomeIcon className="icon" icon={ faSignOutAlt } /> 
                    <span className="link-txt">Logout</span>
                  </button>
                </li>
            </div>
        </nav>
      </div>
    
  );
}

export default Navigation;
