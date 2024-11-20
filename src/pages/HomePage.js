import React, { useState } from 'react';
import { 
  Home, 
  LeafIcon, 
  RecycleIcon, 
  TrendingUpIcon, 
  BadgeCheckIcon, 
  ShirtIcon,
  GlobeIcon
} from 'lucide-react';

const SustainabilityPlatform = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sections = [
    {
      id: 'dashboard',
      icon: <Home />,
      title: 'Sustainable Operations Dashboard',
      description: 'Track your environmental impact and sustainability journey'
    },
    {
      id: 'marketplace',
      icon: <RecycleIcon />,
      title: 'Best-from-Waste Marketplace',
      description: 'Discover upcycled products transforming waste into value'
    },
    {
      id: 'circular-economy',
      icon: <LeafIcon />,
      title: 'Circular Economy Programs',
      description: 'Resale, rental, and donation ecosystem'
    },
    {
      id: 'gamification',
      icon: <TrendingUpIcon />,
      title: 'Gamified Sustainability',
      description: 'Earn points, reduce carbon footprint, join challenges'
    },
    {
      id: 'education',
      icon: <BadgeCheckIcon />,
      title: 'Education & Transparency Hub',
      description: 'Learn, understand, and make informed sustainable choices'
    },
    {
      id: 'menstrual-solutions',
      icon: <ShirtIcon />,
      title: 'Sustainable Menstrual Health',
      description: 'Eco-friendly menstrual products with recycling options'
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <GlobeIcon size={40} className="text-green-600" />
          <h1 className="text-3xl font-bold text-green-800">
            EcoCircle Platform
          </h1>
        </div>
        <nav className="flex space-x-4">
          <button className="text-green-700 hover:bg-green-100 px-4 py-2 rounded">
            Dashboard
          </button>
          <button className="text-green-700 hover:bg-green-100 px-4 py-2 rounded">
            Marketplace
          </button>
          <button className="text-green-700 hover:bg-green-100 px-4 py-2 rounded">
            Profile
          </button>
        </nav>
      </header>

      <main className="grid grid-cols-3 gap-6">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={`
              bg-white rounded-xl shadow-md p-6 
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg
              cursor-pointer
              ${activeSection === section.id 
                ? 'border-2 border-green-500' 
                : 'border border-gray-200'}
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-green-600">{section.icon}</div>
              <h2 className="text-xl font-semibold text-green-800">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </main>

      <section className="mt-12 bg-white rounded-xl p-8 shadow-md">
        <h3 className="text-2xl font-bold text-green-800 mb-6">
          Your Sustainability Impact
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold">Carbon Saved</h4>
            <p className="text-2xl font-bold text-green-700">253 kg</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold">Recycled Items</h4>
            <p className="text-2xl font-bold text-green-700">42</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold">Sustainability Points</h4>
            <p className="text-2xl font-bold text-green-700">1,256</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold">Community Rank</h4>
            <p className="text-2xl font-bold text-green-700">#87</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPlatform;