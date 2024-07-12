import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/">
         Navigation Bar
       </NavLink>

       <div
         className="nav__menu"
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/home" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/register" className="nav__link">
               register
             </NavLink>
           </li>
        </ul>
       </div>
     </nav>
   </header>
 );
};

export default Navbar;
