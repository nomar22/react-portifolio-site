import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import  NotFoundPage from '../components/NotFoundPage';
import  Header  from '../components/Header';
import  Home  from '../components/Home';
import  PortFolio  from '../components/PortFolio';
import  Contact  from '../components/Contact';






const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route component = {Home} path="/" exact = {true}/>
                <Route component = {PortFolio} path="/portfolio" exact = {true}/>
                <Route component = {Contact} path="/contact" exact = {true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
