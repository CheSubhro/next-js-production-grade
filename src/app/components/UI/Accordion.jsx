
"use client"
import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = index => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="mb-4">
                    <button onClick={() => handleToggle(index)} className="bg-gray-200 px-4 py-2 rounded flex justify-between items-center w-full">
                        <span>{item.title}</span>
                        <span>{openIndex === index ? '-' : '+'}</span>
                    </button>
                    {openIndex === index && (
                        <div className="bg-white p-4 mt-2 rounded">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;

