console.log('App.js is runing!')


const app ={
    title: 'Indecision  apps',
    subtile:' this is from object',
    options: ['One', 'Two']
};

const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtile&&<p>{app.subtile}</p>}
    <p>{app.options.length >0? 'Here your Options': 'no Options'}</p>
 <o1>
    <li>Item 1</li>
    <li>Item 2</li>
 </o1>
</div>
);


const user ={
    name :'',
    age: 31,
    location : ''

};


function getLocation(location){
    if(location){
        return <p>Location : {location}</p>
    }
}

const templateDois = (
    <div>
        <h1>{user.name?user.name:'Anonimo'}</h1>
       {user.age >18 && <p>Age:{user.age} </p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot );