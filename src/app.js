console.log('App.js is runing!')


// JSX - JAvascript XML

var template = (
<div>
 <h1>Indecisioning App</h1>
 <p>This is some info</p>
 <o1>
    <li>Item 1</li>
    <li>Item 2</li>
 </o1>
</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot );