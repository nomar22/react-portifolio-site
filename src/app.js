
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    };
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    };

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options already exists';
        }
        this.setState((previousState) => {
            return {
                options: previousState.options.concat(option)
            }


        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
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
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >What should I do?
                </button>
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



    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove All </button>
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
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.opcao.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>{
            return {error};
        });
        
        e.target.elements.opcao.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{color: "red"}} >{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opcao" />
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));