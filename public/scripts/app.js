'use strict';

console.log('App.js is runing!');

var app = {
    title: 'Indecision  app',
    subtile: ' this is from object'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtile
    ),
    React.createElement(
        'o1',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var user = {
    name: 'Rafael',
    age: 31,
    location: 'Nova Lima'

};

var templateDois = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' location: ',
        user.location,
        ' '
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
