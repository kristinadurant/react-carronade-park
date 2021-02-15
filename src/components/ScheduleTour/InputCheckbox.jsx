import React from 'react';

const InputCheckbox = ({ customClass, legend, values}) => {
    return (
        <fieldset className={customClass? customClass:  "one_column"}>
        <legend>{legend}:</legend>
        {values.map(item => {
            return (
                <div>
                    <input type='checkbox' id={item.name} name={item.name} value={item.value} />
                    <label htmlFor={item.name}>{item.value}</label>
                </div>
            )
        })}
        </fieldset>
    )
}

export default InputCheckbox;
