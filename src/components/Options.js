import React from 'react';
import Option from './Option';



const Options = (props) => (
    <div>
        <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}
        > Remove All </button>
        {props.options.length === 0 && <p style={{ color: "green" }}>Please add an option</p>}
        <ol>
            {
                props.options.map((opcao) => (
                    <Option
                        key={opcao}
                        optionText={opcao}
                        handleDeleteOption={props.handleDeleteOption} />
                ))
            }

        </ol>
    </div>
);

export default Options;