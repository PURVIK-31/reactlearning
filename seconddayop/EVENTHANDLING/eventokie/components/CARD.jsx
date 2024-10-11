// Card.jsx
import React from 'react';

function Card({ imageSrc, title, description, showDescription }) {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-sm mx-auto">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {showDescription && <p className="text-gray-700">{description}</p>}
      </div>
    </div>
  );
}

export default Card;