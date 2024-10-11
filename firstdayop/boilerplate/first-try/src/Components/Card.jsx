// Card.jsx
import React from 'react';

function Card() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 max-w-lg">
      <img 
        src="https://images.unsplash.com/photo-1638964758061-117853a20865?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Card image" 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-gray-600">Card description goes here.</p>
      </div>
    </div>
  );
}

export default Card;