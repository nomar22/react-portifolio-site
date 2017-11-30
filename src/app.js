import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashBoardPage = () => (
    <div>
        This is my dashBoard Component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my AddExpense Component
    </div>
);

//edit 
const EditExpensePage = () => (
    <div>This is my edit expense page</div>
);

//help
const HelpPage = () => (
    <div> This is my help page </div>
);

//help
const NotFoundPage = () => (
    <div>
        404!-  <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true} > Dashboard </NavLink>
        <NavLink activeClassName="is-active" to="/create" > Add Expense </NavLink>
        <NavLink activeClassName="is-active" to="/edit" > Edit Expense</NavLink>
        <NavLink activeClassName="is-active" to="/help" > Help</NavLink>
    </header>
);
const routes = (
    <BrowserRouter>
        <div>
            <Header />
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

ReactDOM.render(routes, document.getElementById('app'));
