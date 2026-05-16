import React from 'react';
import { useParams } from 'react-router-dom';
import CarModelCard from '../components/CarModelCard';
import './styles/carModelDetails.css';

const CarModelDetails = () => {
  const { id } = useParams();
  const carModels = [
    { id: 1, name: 'Toyota Camry', features: ['Heated Seats', 'Bluetooth'], price: 25000, available: true },
    { id: 2, name: 'Honda Civic', features: ['Sunroof', 'Backup Camera'], price: 20000, available: false },
    { id: 3, name: 'Ford Mustang', features: ['Leather Seats', 'Navigation'], price: 30000, available: true }
  ];
  const carModel = carModels.find((carModel) => carModel.id === parseInt(id!));

  if (!carModel) return <p>Car model not found</p>;

  return (
    <div className="car-model-details">
      <CarModelCard carModel={carModel} />
    </div>
  );
};

export default CarModelDetails;