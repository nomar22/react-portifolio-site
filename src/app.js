console.log('App.js is runing!')


var app ={
    title: 'Indecision  apps',
    subtile:' this is from object',
    options['One', 'Two']
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
    name :'',
    age: 15,
    location : 'Nova Lima'

}

function getLocation(location){
    if(location){
        return <p>Location : {location}</p>
    }
}

var templateDois = (
    <div>
        <h1>{user.name?user.name:'Anonimo'}</h1>
       {user.age >18 && <p>Age:{user.age} </p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');
ReactDOM.render(templateDois, appRoot );