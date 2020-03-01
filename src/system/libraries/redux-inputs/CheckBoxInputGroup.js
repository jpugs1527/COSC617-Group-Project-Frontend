import React from 'react';

const CheckBoxInputGroup = ({ label, name, options, input, meta: { touched, error }}) => {

    return (
        <div className="form-group">
            <label>{label}</label>
            { options.map((option, index) => (
                <div className="checkbox" key={index}>
                    <label>
                        <input type="checkbox"
                            name={`${name}[${index}]`}
                            value={option.name}
                            checked={input.value.indexOf(option.name) !== -1}
                            onChange={event => {
                                const newValue = [...input.value];
                                if(event.target.checked) {
                                    newValue.push(option.name);
                                } else {
                                    newValue.splice(newValue.indexOf(option.name), 1);
                                }
                                return input.onChange(newValue);
                            }}
                        />
                        {option.name}
                    </label>
                </div>
            ))}
            {touched && (error && <span style={{color: 'red', fontSize: 14, fontFamily: "MontserratRegular"}}>{error}</span>) }
        </div>
    )
}

export default CheckBoxInputGroup;