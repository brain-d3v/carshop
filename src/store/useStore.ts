import { create } from 'zustand';
import { Car } from '../types';
import { persist } from 'zustand/middleware';

interface Store {
  cars: Car[];
  isAdmin: boolean;
  isDarkMode: boolean;
  addCar: (car: Car) => void;
  updateCar: (id: string, car: Car) => void;
  deleteCar: (id: string) => void;
  login: (password: string) => boolean;
  logout: () => void;
  toggleDarkMode: () => void;
}

const ADMIN_PASSWORD = 'admin123'; // In a real app, this would be handled securely

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cars: [
        {
          id: '1',
          brand: 'Toyota',
          model: 'Corolla',
          year: 2021,
          price: 95000,
          mileage: 45000,
          images: [
            'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=1200'
          ],
          description: 'Toyota Corolla XEi em excelente estado',
          features: ['Automático', 'Ar condicionado', 'Direção elétrica', 'Airbags'],
          isExtra: false,
          isLowMileage: false
        }
      ],
      isAdmin: false,
      isDarkMode: false,
      addCar: (car) => set((state) => ({ cars: [...state.cars, car] })),
      updateCar: (id, updatedCar) =>
        set((state) => ({
          cars: state.cars.map((car) => (car.id === id ? updatedCar : car))
        })),
      deleteCar: (id) =>
        set((state) => ({
          cars: state.cars.filter((car) => car.id !== id)
        })),
      login: (password) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdmin: false }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
    }),
    {
      name: 'car-store'
    }
  )
);