import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin, Phone } from 'lucide-react';
import { CarouselSection } from '../components/CarouselSection';

export function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">
              Encontre o Carro dos Seus Sonhos
            </h1>
            <p className="text-xl mb-8">
              Os melhores seminovos com garantia de procedência
            </p>
            <Link
              to="/veiculos"
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Ver Veículos
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <CarouselSection />

      {/* Features Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Por que escolher a AutoElite?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Amplo Estoque</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mais de 100 veículos seminovos para você escolher
              </p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Garantia de Qualidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Todos os veículos passam por rigorosa inspeção
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Localização Premium</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fácil acesso com amplo espaço para atendimento
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quer vender seu carro?
          </h2>
          <p className="text-white text-lg mb-8">
            Faça uma avaliação gratuita do seu veículo
          </p>
          <Link
            to="/venda"
            className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Avaliar Meu Carro
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
            Entre em Contato
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <div>
              <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-gray-800 dark:text-white font-semibold">(11) 99999-9999</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-gray-800 dark:text-white font-semibold">
                Av. Principal, 1000 - São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}