import React from 'react';
import { Link } from 'react-router-dom';
import CarModelCard from './components/CarModelCard';
import './styles/app.css';
const carModels = [
  { id: 1, name: 'Toyota Camry', features: ['Heated Seats', 'Bluetooth'], price: 25000, available: true },
  { id: 2, name: 'Honda Civic', features: ['Sunroof', 'Backup Camera'], price: 20000, available: false },
  { id: 3, name: 'Ford Mustang', features: ['Leather Seats', 'Navigation'], price: 30000, available: true }
];

const App = () => {
  return (
    <div className="app">
      <h1>Car Models</h1>
      <div className="car-model-cards">
        {carModels.map((carModel) => (
          <Link to={`/car-models/${carModel.id}`} key={carModel.id}>
            <CarModelCard carModel={carModel} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;