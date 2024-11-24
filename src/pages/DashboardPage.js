import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Recycle, ShoppingBag, Droplet } from 'lucide-react';

const DashboardPage = () => {
  const [reuseMetrics] = useState([
    { month: 'Jan', items: 245 },
    { month: 'Feb', items: 320 },
    { month: 'Mar', items: 410 },
    { month: 'Apr', items: 380 },
    { month: 'May', items: 505 },
    { month: 'Jun', items: 590 }
  ]);

  const [marketplaceData] = useState([
    { category: 'Upcycled Art', value: 35 },
    { category: 'Recycled Fashion', value: 25 },
    { category: 'Eco-Furniture', value: 20 },
    { category: 'Other', value: 20 }
  ]);

  const [menstrualImpact] = useState([
    { month: 'Jan', disposable: 1200, sustainable: 800 },
    { month: 'Feb', disposable: 1100, sustainable: 900 },
    { month: 'Mar', disposable: 1000, sustainable: 1000 },
    { month: 'Apr', disposable: 900, sustainable: 1100 },
    { month: 'May', disposable: 800, sustainable: 1200 },
    { month: 'Jun', disposable: 700, sustainable: 1300 }
  ]);

  const COLORS = ['#059669', '#34d399', '#6ee7b7', '#a7f3d0'];

  const calculateTotalImpact = () => {
    const totalItems = reuseMetrics.reduce((acc, curr) => acc + curr.items, 0);
    const totalSustainable = menstrualImpact.reduce((acc, curr) => acc + curr.sustainable, 0);
    return {
      itemsReused: totalItems,
      wasteReduced: Math.round(totalItems * 0.5),
      sustainableProducts: totalSustainable
    };
  };

  const impact = calculateTotalImpact();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Sustainability Impact Dashboard</h1>
      
      {/* Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <Recycle className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Items Reused</h3>
              <p className="text-2xl font-bold text-green-600">{impact.itemsReused}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <ShoppingBag className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Waste Reduced</h3>
              <p className="text-2xl font-bold text-green-600">{impact.wasteReduced}kg</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <Droplet className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Sustainable Products</h3>
              <p className="text-2xl font-bold text-green-600">{impact.sustainableProducts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Reuse & Recycle Trend */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Reuse & Recycle Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reuseMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="items" stroke="#059669" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Marketplace Categories */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Marketplace Categories</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketplaceData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {marketplaceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Menstrual Products Impact */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Menstrual Products Impact</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={menstrualImpact}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="disposable" fill="#ef4444" />
                <Bar dataKey="sustainable" fill="#059669" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;