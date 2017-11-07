class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
            <button>What should I do?</button>
            </div>
        );
    }

}

class Option extends React.Component {
    render(){
        return(
            <li> Option </li>
        );
    }
}
class Options extends React.Component{
    render(){
        return (
            <div> 
                <ol>
                    <Option/> 
                    <Option/> 
                    <Option/> 
                </ol>
            </div>
        );

    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}


const jsx = (
    <div>
        <Header />
        <header />
        <Action />
        <Options /> 
           
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));