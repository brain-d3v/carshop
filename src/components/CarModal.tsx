import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Car } from '../types';
import { Badge } from './Badge';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

export function CarModal({ car, onClose }: CarModalProps) {
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const handleWhatsApp = () => {
    const message = `Olá! Estou interessado no ${car.brand} ${car.model} ${car.year} anunciado por ${formatPrice(car.price)}`;
    const phone = '5511999999999'; // Replace with actual phone number
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {car.isExtra && <Badge type="extra" />}
        {car.isLowMileage && <Badge type="low-mileage" />}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {car.brand} {car.model} {car.year}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src={car.images[0]}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="grid grid-cols-4 gap-2">
                {car.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-red-600">
                  {formatPrice(car.price)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{car.mileage.toLocaleString()} km</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Características
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Descrição</h4>
                <p className="text-gray-600 dark:text-gray-300">{car.description}</p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}