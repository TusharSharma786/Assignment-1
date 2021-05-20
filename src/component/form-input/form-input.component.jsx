import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label,handleChange,...otherProps}) => (
    <div className='group'>
        { {label} ?
            (<label>{label}</label>)
            : null
        }
        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </div>
)

export default FormInput;