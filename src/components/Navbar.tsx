import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, LogIn } from 'lucide-react';
import { useStore } from '../store/useStore';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const location = useLocation();
  const { isAdmin } = useStore();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">AutoElite</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'
              } hover:text-red-600 dark:hover:text-red-500 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/veiculos"
              className={`${
                isActive('/veiculos') ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'
              } hover:text-red-600 dark:hover:text-red-500 transition-colors`}
            >
              Veículos
            </Link>
            <Link
              to="/localizacao"
              className={`${
                isActive('/localizacao') ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'
              } hover:text-red-600 dark:hover:text-red-500 transition-colors`}
            >
              Localização
            </Link>
            <Link
              to="/venda"
              className={`${
                isActive('/venda') ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'
              } hover:text-red-600 dark:hover:text-red-500 transition-colors`}
            >
              Venda seu Veículo
            </Link>
            <Link
              to="/sobre"
              className={`${
                isActive('/sobre') ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'
              } hover:text-red-600 dark:hover:text-red-500 transition-colors`}
            >
              Sobre
            </Link>
            {!isAdmin && (
              <Link
                to="/admin"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <LogIn className="h-5 w-5" />
              </Link>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}