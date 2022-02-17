import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    

    return(
        <React.Fragment>
            
                <li>
                    <Link to="/">Color Picker</Link>
                </li>
                <li>
                    <Link to="/usersearch">User Details</Link>
                </li>
                <li>
                    <Link to="/unsplash">Unsplash</Link>
                </li>
        
        </React.Fragment>
    )
}