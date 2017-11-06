
const appRoot = document.getElementById('app');

const app = {
   detail : 'false',
   textDetail :''
};

const toggleDetails = () =>{
    app.detail = !(app.detail);
    app.textDetail = app.detail?'Here your details':'';
    renderApp();
}

const renderApp = () =>{
    const template = (
        <div>
            <h1> Visibility Toggle</h1>
            <button onClick={toggleDetails}>
            {app.detail?'Hide Details': 'Show Details'}
            </button>
            <p>{app.textDetail}</p>
        </div>


    );





    ReactDOM.render(template, appRoot);
}

renderApp();