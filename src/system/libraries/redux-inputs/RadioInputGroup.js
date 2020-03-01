import React from 'react';

function RadioInputGroup({ input, options, label, meta: { touched, error } }){
   return (
        <div className="form-group">
            <label>{label}</label>
            { options.map((option, index) => { 
                    return <div key={option.id} className='radio-input'>
                        <label>
                            <input
                                id={option.id}
                                type='radio'
                                {...input}
                                value={option.value}
                                checked={option.value === input.value}
                                style={{marginRight: 5}}
                            />
                            {option.label}
                        </label>
                    </div>
                }
            )}
            {touched && (error && <span style={{color: 'red', fontSize: 14, fontFamily: "MontserratRegular"}}>{error}</span>) }
        </div>
    );
}

export default RadioInputGroup