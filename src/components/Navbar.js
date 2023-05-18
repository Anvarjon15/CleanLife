import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import House from '../logos/house.png'

function Navbar(){
    return(
        <div className="Navbar" style={{ fontFamily:"Gilroy", textDecoration:"none"}} > 
            <img src={House} width="100px" height="70px"/>
            <li className="text1"><Link to="/home">Home</Link></li> 
            <li ><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li> 
            <button className="buttons" style={{backgroundColor:'#00CA2C'}}>ORDER</button>
        </div>
    )
}

export default Navbar
