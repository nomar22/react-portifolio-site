import React from 'react';


const Option = (props) => (
    <li key={props.optionText}> {props.optionText}
        <button
        className="button button--link"
        onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}

        >Remover</button></li>
);


export default Option