import React from 'react';

 
export default class AddOption extends React.Component {
    state = {
        error : undefined
    };
    
    handleAddOption= (e) => {
        e.preventDefault();
        console.log('test');
        const option = e.target.elements.opcao.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.opcao.value = '';
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: "red" }} >{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opcao" />
                    <button className="button"> Add Option? </button>
                </form>
            </div>
        );
    }
}
