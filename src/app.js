
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options

        };
    }
    componentDidMount(){
        console.log('Fetching data');

    }
    componentDidUpdate(prevProps,prevState){
        console.log('saving data');
    }
    componentWillUnmount(){
        console.log('componentUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((previousState) => ({
            options: previousState.options.filter((option) => optionToRemove != option)
        }));
    }


    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options already exists';
        }
        this.setState((previousState) => ({
            options: previousState.options.concat(option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }


    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
};

IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}

        </div>
    );

};
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
        </button>
        </div>
    );
};

const Option = (props) => {
    return (
        <li key={props.optionText}> {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}

            >Remover</button></li>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            <ol>
                {props.options.map((opcao) => (
                    <Option
                        key={opcao}
                        optionText={opcao}
                        handleDeleteOption={props.handleDeleteOption} />
                ))}

            </ol>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.opcao.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        e.target.elements.opcao.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: "red" }} >{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opcao" />
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));