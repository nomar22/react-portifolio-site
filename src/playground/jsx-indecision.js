


const app = {
    title: 'OTavio  App',
    subtile: ' this is from object',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.opcao.value;

    if (option) {
        app.options.push(option);
        e.target.elements.opcao.value = '';
    }

    renderApp();

};

const removeAllOptions = () => {
    app.options = [];
    
    renderApp();
};

const onMakeDecision = ()=> {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');


const renderApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtile && <p>{app.subtile}</p>}
            <p>{app.options.length > 0 ? 'Here your  Options' : 'No Options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}> What should I do? </button>
            <button onClick={removeAllOptions}> Remove All </button>
            <ol>
                {
                    app.options.map((option)=><li key={option}> Item: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="opcao" />
                <button> Add Option </button>

            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);


};

renderApp();