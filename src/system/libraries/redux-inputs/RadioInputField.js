import React from 'react';

function RadioInputField({ input, label, type, meta: { touched, error } }) {
    return (
        <div className="form-group">
            <label>
                <input 
                    {...input} 
                    type={type} 
                    style={{marginRight: 5}}
                />
                {label}
            </label>
            {touched && (error && <span style={{color: 'red', fontSize: 14}}>{error}</span>) }
        </div>
    )
}

export default RadioInputField