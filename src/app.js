import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
const EditExpensePage = () =>(
    <div>This is my edit expense page</div>
);

//help
const HelpPage = ()=>(
    <div> This is my help page </div>
);

//help
const NotFoundPage = ()=>(
    <div> 404! </div>
);
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route  component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
