


const app = {
    title: 'Indecision  App',
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

const removeOptions = ()=>{
    app.options = [];
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtile && <p>{app.subtile}</p>}
            <p>{app.options.length > 0 ? 'Here your  Options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <o1>
                <li>Item 1</li>
                <li>Item 2</li>
            </o1>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="opcao" />
                <button> Add Option </button>
                <button onClick={removeOptions}> Remove All </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);


};

renderApp();