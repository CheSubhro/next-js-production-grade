
import React from 'react';

const Modal = ({ isOpen, onClose, children}) =>{

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-4 rounded-lg">
                <button className="absolute top-0 right-0 m-2" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;