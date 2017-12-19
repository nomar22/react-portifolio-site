import React from 'react';
import { Link } from 'react-router-dom';


const PortFolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout some of my works</p>
        <Link to="/portfolio/1" >Work 1</Link>
        <Link to="/portfolio/2">Work 2</Link>
        <Link to="/portfolio/3">Work 3</Link> 
    </div>
);
export default PortFolio;