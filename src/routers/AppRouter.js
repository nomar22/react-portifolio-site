import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const HomePage = () => (
    <div>
        <h4>This is my DashBoard Page </h4>
    </div>

);

const Contact = () => (
    <div>
        <h4>My email: nomar22@gmail.com</h4>
    </div>
);

const PortFolio = () => (
    <div>
        <h1>My Work</h1>
        <h4>Checkout some of my works</h4>
        <NavLink to="/portfolio_detail/1" >Work 1</NavLink>
        <NavLink to="/portfolio_detail/2">Work 2</NavLink>
        <NavLink to="/portfolio_detail/3">Work 3</NavLink> 
    </div>
);

const PortFolioDetail = (props) => (
    <div>   
       <h2>This is my work {props.match.params.id}</h2>
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route component={HomePage} path="/" exact={true} />
                <Route component={Contact} path="/contact" exact={true} />
                <Route component={PortFolio} path="/portfolio" exact={true} />
                <Route component={PortFolioDetail} path="/portfolio_detail/:id"  />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
