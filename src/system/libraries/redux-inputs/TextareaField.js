import React from 'react';

function TextareaField({ input, label, meta: { touched, error } }) {
    return <div className="form-group">
    	<label>{label}</label>
        <textarea  
            {...input} 
            placeholder={label} 
            className="form-control"
        />
        {touched && (error && <span style={{color: 'red', fontFamily: "MontserratRegular"}}>{error}</span>) }
    </div>
}

export default TextareaField