import React from 'react';

const Input = (props) => {
    return(
        <div className="form-group row justify-content-center">
            <input
                className="col-5"
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}
export default Input;