import React from 'react';

function CheckBoxInputField({ input, label, type, checked, meta: { touched, error } }) {
    return (
        <div className="form-group">
            <label>
                <input 
                    {...input} 
                    type={type}
                    checked={checked} 
                    style={{marginRight: 5}}
                /> 
                {label} 
            </label>
            {touched && (error && <span style={{color: 'red', fontSize: 14}}>{error}</span>) }
        </div>
    );
}

export default CheckBoxInputField