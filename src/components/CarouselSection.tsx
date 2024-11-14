import React from 'react';
import { useStore } from '../store/useStore';
import { CarCard } from './CarCard';

export function CarouselSection() {
  const { cars } = useStore();
  const specialCars = cars.filter((car) => car.isExtra || car.isLowMileage);

  if (specialCars.length === 0) return null;

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Veículos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialCars.map((car) => (
            <CarCard key={car.id} car={car} onClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}