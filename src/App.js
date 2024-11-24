import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobeIcon } from 'lucide-react';
import SustainabilityPlatform from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import MenstrualHealthPage from "./pages/MenstrualHealthPage";
import ReuseRecyclePage from "./pages/ReuseRecyclePage";
import DashboardPage from "./pages/DashboardPage"
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <header className="flex justify-between items-center p-6 bg-white shadow-sm">
          <div className="flex items-center space-x-4">
            <GlobeIcon size={40} className="text-green-600" />
            <Link to="/dashboard" className="text-3xl font-bold text-green-800 hover:text-green-700">
              EcoCircle Platform
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link 
              to="/dashboard" 
              className="text-green-700 hover:bg-green-100 px-4 py-2 rounded transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/marketplace" 
              className="text-green-700 hover:bg-green-100 px-4 py-2 rounded transition-colors"
            >
              Marketplace
            </Link>
            <Link 
              to="/reuse-recycle" 
              className="text-green-700 hover:bg-green-100 px-4 py-2 rounded transition-colors"
            >
              Reuse & Recycle
            </Link>
            <Link 
              to="/menstrual-health" 
              className="text-green-700 hover:bg-green-100 px-4 py-2 rounded transition-colors"
            >
              Menstrual Health
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/reuse-recycle" element={<ReuseRecyclePage />} />
            <Route path="/menstrual-health" element={<MenstrualHealthPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;