'use strict';

console.log('App.js is runing!');

// JSX - JAvascript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecisioning App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
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
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
