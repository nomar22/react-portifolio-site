import React from 'react';
import { NavLink } from 'react-router-dom';


const PortFolio = () => (
    <div>
        <h1>My Work</h1>
        <h4>Checkout some of my works</h4>
        <NavLink to="/portfolio_detail/1" >Work 1</NavLink>
        <NavLink to="/portfolio_detail/2">Work 2</NavLink>
        <NavLink to="/portfolio_detail/3">Work 3</NavLink> 
    </div>
);
export default PortFolio;