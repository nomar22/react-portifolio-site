<<<<<<< HEAD
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
    name: '',
    age: 31,
    location: ''

};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location,
            ' '
        );
    }
};

var templateDois = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age,
        ' '
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateDois, appRoot);
=======
>>>>>>> 4fa1b152493e6152815af4c5e2c6a6f44aa4305a
