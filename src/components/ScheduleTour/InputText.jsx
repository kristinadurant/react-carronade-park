import React from 'react';

const InputText = ({name, type, label, ...rest}) => {
    return (
        <div>
            <label htmlFor={name} className={rest.required && 'required'}>
                {label}
            </label>
            <input type={type} id={name} name={name} {...rest}/>
        </div>
    )
}

export default InputText;
