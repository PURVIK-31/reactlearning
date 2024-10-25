import React from 'react';

function Card() {
  return (
    <div className="w-64 bg-pink-200 rounded-lg shadow-lg overflow-hidden"> {/* Adjusted width to 16rem */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="user icon"
        className="w-full h-32 object-cover" // Adjusted height to fit smaller card
      />
      <div className="p-2"> {/* Padding reduced for compactness */}
        <h1 className="text-sm font-semibold text-sky-900">Phoenix</h1> 
        <p className="text-xs text-gray-600"> {/* Smaller text size for paragraph */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quas!
        </p>
      </div>
    </div>
  );
}

export default Card;
