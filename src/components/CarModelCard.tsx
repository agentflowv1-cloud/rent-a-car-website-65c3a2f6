import React from 'react';
import './styles/carModelCard.css';

interface CarModel {
  id: number;
  name: string;
  features: string[];
  price: number;
  available: boolean;
}

const CarModelCard = ({ carModel }: { carModel: CarModel }) => {
  return (
    <div className="car-model-card">
      <h2>{carModel.name}</h2>
      <ul>
        {carModel.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p>Price: ${carModel.price}</p>
      <p>Available: {carModel.available ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default CarModelCard;