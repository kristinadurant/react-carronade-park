import React from 'react';

const Form = ({ customClass, legend, name, values}) => {
    return (
    <fieldset className={customClass? customClass:  "one_column"}>
            <legend>{legend}:</legend>
            {values.map(value => {
                return (
                    <div>
                        <input type='radio' id={`${name}_${value}`} name={name} value={value} />
                        <label htmlFor={`${name}_${value}`}><span className="hide">{name} </span>{value}</label>
                    </div>
                )
            })}
    </fieldset>
    )
}

export default Form;
