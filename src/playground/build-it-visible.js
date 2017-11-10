
class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);


        this.state = {
            detail: false
        };
    }

    handleToggleVisibility() {
        this.setState((previousState)=>{
            return {
                detail :! (previousState.detail),
                textDetail:'Here your details' 

            }
        }

        );

    }
    render() {
        return (<div>
            <h1> Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.detail ? 'Hide Details' : 'Show Details'}
            </button>
            <p>{this.state.detail?this.state.textDetail:''}</p>
        </div>);
    }

}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
