console.log('App.js is runing!')


// JSX - JAvascript XML

//var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
    "h1",
    { id: "id" },
    "this is jsx from app.js"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot );