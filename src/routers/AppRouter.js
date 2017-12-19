import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import PortFolio from '../components/Portfolio';

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
