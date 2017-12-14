import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import  Header  from '../components/Header';


//help
const NotFoundPage = () => (
    <div>
        404 = <Link to="/" >Go home </Link>
    </div>
);

export default NotFoundPage;