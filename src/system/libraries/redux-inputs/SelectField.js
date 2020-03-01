import React from 'react';

const SelectField = ({ input: { onChange, value, ...inputProps }, options, label, meta: { touched, error } }) => {
   return (
        <div className="form-group">
            <label>{label}</label>
            <select
                { ...inputProps }
                onChange={ value => onChange(value) }
                className="form-control"
            >
                { label && <option value=''> {label} </option> }
                {options.map((data, index) =>  
                    <option key={data.id} value={data.id}> {data.name} </option>
                )}
            </select>
            {touched && (error && <span style={{color: 'red', fontSize: 14, fontFamily: "MontserratRegular"}}>{error}</span>) }
        </div>
    );
}

export default SelectField