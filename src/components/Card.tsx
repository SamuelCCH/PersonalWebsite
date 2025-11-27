import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <button className="bg-gray-200 text-black font-bold py-2 px-4 rounded-full">Details</button>
      </div>
      {imageUrl && <img src={imageUrl} alt={title} className="w-24 h-24 object-contain" />}
    </div>
  );
};

export default Card;