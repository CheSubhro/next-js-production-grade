
"use client"
import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = option => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="relative">
            <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select'}
            </button>
            {isOpen && (
                <ul className="absolute bg-white border rounded mt-1">
                    {options.map(option => (
                        <li key={option.value} onClick={() => handleSelect(option)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;

