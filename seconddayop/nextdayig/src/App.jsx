// App.jsx
import React from "react";
import Card from "./Card";

function App() {
  const cardsData = [
    {
      imageSrc: "path_to_image_1.jpg",
      title: "Card Title 1",
      description: "This is the first card's description.",
    },
    {
      imageSrc: "path_to_image_2.jpg",
      title: "Card Title 2",
      description: "This is the second card's description.",
    },
    {
      imageSrc: "path_to_image_3.jpg",
      title: "Card Title 3",
      description: "This is the third card's description.",
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default App;