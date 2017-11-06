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

var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
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
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            ' What should I do? '
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            ' Remove All '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' Item: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'opcao' }),
            React.createElement(
                'button',
                null,
                ' Add Option '
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
