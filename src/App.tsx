import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Vehicles } from './pages/Vehicles';
import { Location } from './pages/Location';
import { About } from './pages/About';
import { Admin } from './pages/Admin';
import { AdminDashboard } from './pages/AdminDashboard';
import { useStore } from './store/useStore';

function App() {
  const { isDarkMode } = useStore();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veiculos" element={<Vehicles />} />
          <Route path="/localizacao" element={<Location />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;