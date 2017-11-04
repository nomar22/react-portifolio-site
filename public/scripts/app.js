'use strict';

var app = {
    title: 'Indecision  App',
    subtile: ' this is from object',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.opcao.value;

    if (option) {
        app.options.push(option);
        e.target.elements.opcao.value = '';
    }

    renderApp();
};

var removeOptions = function removeOptions() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtile && React.createElement(
            'p',
            null,
            app.subtile
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here your  Options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'opcao' }),
            React.createElement(
                'button',
                null,
                ' Add Option '
            ),
            React.createElement(
                'button',
                { onClick: removeOptions },
                ' Remove All '
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
