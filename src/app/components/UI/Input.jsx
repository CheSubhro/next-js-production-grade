
import React from 'react';

const Input = ({ type, placeholder, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
    );
};

export default Input;
