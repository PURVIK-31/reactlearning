// App.jsx
import React, { useState } from 'react';
import Card from './Card';

function App() {
  const cardsData = [
    {
      imageSrc: 'path_to_image_1.jpg',
      title: 'Card Title 1',
      description: 'This is the first card\'s description.',
    },
    {
      imageSrc: 'path_to_image_2.jpg',
      title: 'Card Title 2',
      description: 'This is the second card\'s description.',
    },
    {
      imageSrc: 'path_to_image_3.jpg',
      title: 'Card Title 3',
      description: 'This is the third card\'s description.',
    },
  ];

  const [showDescriptions, setShowDescriptions] = useState(true);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          showDescription={showDescriptions}
        />
      ))}
      <button onClick={() => setShowDescriptions(prev => !prev)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Toggle Descriptions
      </button>
    </div>
  );
}

export default App;