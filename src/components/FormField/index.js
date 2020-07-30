import React from 'react';

function Formfield({label, type, value, name, onChange}) {
    return(
        <div>
          <label>
            {label}:
            <input
              type={type}
              value={value}
              name={name}
              onChange={onChange}
            />
          </label>
        </div>
    );
}

export default Formfield;