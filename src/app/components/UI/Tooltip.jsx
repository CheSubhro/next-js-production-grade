
import React from "react";

const Tooltip = ({ text, children }) => {
    return (
        <div className="relative inline-block">
            {children}
            <div className="absolute bg-gray-800 text-white px-2 py-1 rounded mt-2 left-1/2 transform -translate-x-1/2 opacity-0 transition duration-300 ease-in-out">
                {text}
            </div>
        </div>
    );
};

export default Tooltip;