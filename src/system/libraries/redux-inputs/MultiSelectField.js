import React from 'react';
import Select from 'react-select';

function MultiSelectField({ input, options, label, meta: { touched, error } }){
   return (
        <div className="form-group">
            <label>{label}</label>
            <Select
                {...input}
                value={input.value}
                onChange={(value) => {input.onChange(value)}}
                onBlur={() => input.onBlur([...input.value])}
                options={options}
                isMulti={true}
            />
            {touched && (error && <span style={{color: 'red', fontSize: 14, fontFamily: "MontserratRegular"}}>{error}</span>) }
        </div>
    );
}

export default MultiSelectField