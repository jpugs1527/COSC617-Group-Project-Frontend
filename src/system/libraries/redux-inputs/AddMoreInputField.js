import React from 'react';
import InputField from './InputField'
import { Field } from 'redux-form';

const AddMoreInputField = ({ fields, label, button_text, meta: { error, submitFailed } }) => {
return <div className="form-group">

        <div>
            <span style={{fontWeight: 'bold'}}>{label} </span> 
            <button 
                className="btn btn-default" 
                type="button" 
                onClick={() => fields.push({value: ''})}
            > 
                {button_text}
            </button> 
        </div>

        {fields.map((field, index) => (
            <div key={index}>            
                <Field
                    name={`${field}.value`}
                    type="text"
                    component={InputField}
                    label={`${label} ${index + 1}`}
                    key={`value_${index}`}
                />
                <input
                    className="btn btn-default"
                    style={{float: 'right', marginTop: '-50px'}}
                    type="button"
                    value="X"
                    onClick={() => fields.remove(index)}
                />
            </div>
        ))}        
        {submitFailed && error && <span>{error}</span>}
  </div>
}

export default AddMoreInputField