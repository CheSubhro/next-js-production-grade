
import React from 'react';

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
            {imageUrl && (
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageUrl} alt="Card image" />
                </div>
            )}
            <div className="px-4 py-2">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default Card;