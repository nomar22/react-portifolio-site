console.log('App.js is runing!')


var app ={
    title: 'Indecision  app',
    subtile:' this is from object'
}

var template = (
<div>
 <h1>{app.title}</h1>
 <p>{app.subtile}</p>
 <o1>
    <li>Item 1</li>
    <li>Item 2</li>
 </o1>
</div>
);


var user ={
    name :'Rafael',
    age: 31,
    location : 'Nova Lima'

}

var templateDois = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>Age:{user.age} </p>
        <p> location: {user.location} </p>
    </div>
)

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot );