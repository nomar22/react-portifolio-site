import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {ExpenseDashBoardPage} from '../components/ExpenseDashBoardPage';
import {AddExpensePage} from '../components/AddExpensePage';
import {NotFoundPage} from '../components/NotFoundPage';
import {HelpPage} from '../components/HelpPage';
import {Header} from '../components/Header';
import {EditExpensePage} from '../components/EditExpensePage';



const Header2 = () =>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/"  activeClassName="is-active" exact={true} > DashBoard /</NavLink>
        <NavLink to="/create"  activeClassName="is-active" > Criar /</NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Editar/</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Ajuda</NavLink>
    </header>
);

const AppRouter = ()=>(
    <BrowserRouter>
    <div>
        <Header2 />
        <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
        
    </BrowserRouter>
);

export default AppRouter;