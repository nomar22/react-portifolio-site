
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
    handlePick() {
        alert('Handled');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
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


class Options extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options)
        // alert("Removed");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}> Remove All </button>
                <ol>
                    {this.props.options.map((opcao) => <Option key={opcao} optionText={opcao} />)}

                </ol>
            </div>
        );

    }
}

// 1. Setup the form with text Input
// 2. wire up onSubmit
// 3. handleAddOption
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.opcao.value.trim();
        if (option) {
            alert(option);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opcao" />
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));