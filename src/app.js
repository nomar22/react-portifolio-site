class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }

}


class Option extends React.Component {
    render() {
        return (
            <li key={this.props.optionText}> {this.props.optionText} </li>
        );
    }
}

//Setup options prop Options component
// Render the length of the array
class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.options.map((opcao) => <Option key={opcao} optionText={opcao} /> )}

                </ol>
            </div>
        );

    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));