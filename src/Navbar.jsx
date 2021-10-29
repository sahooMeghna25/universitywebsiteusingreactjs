import React from "react";
import { NavLink } from "react-bootstrap";
import "./App.css";



//import { NavLink } from "react-router-dom";

const Navbar = () => {
  const myStyle={
   height: "45px",
   width: "55px"

  }; 

  return (
  
       <>
  
<nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
  <div className="container-fluid">
    <NavLink className="navbar-brand">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhxrFYGYp2PVmH9pL91aUojm1FTwoB0N6V1H40vPl9VzhCqoxg2tkM19Qq6EJ3epa6Kg&usqp=CAU" style={myStyle} alt="Logo" className="rounded-pill" /> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName="active" to="/Home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/Aboutus">ABOUT US</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="active" to="/Gallary">PHOTO GALLARY</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="active" to="/Contact">CONTACT US</NavLink>
        </li>  
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">ACADEMICS</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">LIBRARY</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">NOTICE BOARDS</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">ADMISSION</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">FEE STRUCTURE</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
    
  );
    };
export default Navbar;