import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { ExpenseDashBoardPage } from '../components/ExpenseDashBoardPage';
import { AddExpensePage } from '../components/AddExpensePage';
import { HelpPage } from '../components/HelpPage';
import { Header } from '../components/Header';
import { EditExpensePage } from '../components/EditExpensePage';

//help
const NotFoundPage = () => (
    <div>
        404 = <Link to="/" >Go home </Link>
    </div>
);

export default NotFoundPage;