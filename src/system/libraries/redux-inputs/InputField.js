import React from 'react';

function InputField({ input, disabled, label, icon, type, meta: { touched, error } }) {
    return (
        <div className="form-group">
            <label><b>{label}</b></label>
            <input
                {...input}
                type={type}
                disabled={disabled}
                className="form-control"
            />
            {icon && 
                <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                        <i className={icon} aria-hidden="true"/>
                    </button>
                </div>
            }
            {touched && (error && <span style={{color: 'red', fontSize: 14}}>{error}</span>) }
        </div>
    );
}

export default InputField