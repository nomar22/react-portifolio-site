import React from 'react';


const Option = (props) => {
    return (
        <li key={props.optionText}> {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}

            >Remover</button></li>
    );
};

export default Option