import React from 'react';
import { NavLink } from 'react-router-dom';


const A = () =>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/"  activeClassName="is-active" exact={true} > DashBoard /</NavLink>
        <NavLink to="/create"  activeClassName="is-active" > Criar /</NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Editar/</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Ajuda</NavLink>
    </header>
);

export default A;