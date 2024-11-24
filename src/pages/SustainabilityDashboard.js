import React, { useState } from 'react';
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Leaf, Droplet, Recycle, Wind } from 'lucide-react';
import { calculateSustainabilityMetrics } from './SustainabilityCalculator';

const SustainabilityDashboard = () => {
  // Sample data - in a real app, you'd fetch this from your backend
  const sampleMetrics = calculateSustainabilityMetrics('reusable', 100, 'recycling');
  
  // Generate monthly data for the chart
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const multiplier = 1 + (i * 0.1);
    return {
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i],
      trees: Math.round(sampleMetrics.environmentalImpact.treesPreserved * multiplier * 10) / 10,
      water: Math.round(sampleMetrics.environmentalImpact.waterSaved * multiplier),
      plastic: Math.round(sampleMetrics.environmentalImpact.plasticReduced * multiplier * 10) / 10,
      carbon: Math.round(sampleMetrics.environmentalImpact.carbonFootprint * multiplier * 10) / 10
    };
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Sustainability Dashboard</h2>
      
      {/* Impact Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-green-800">Trees Preserved</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {sampleMetrics.environmentalImpact.yearlyImpact.treesPreserved}
          </p>
          <p className="text-sm text-green-600">trees/year</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-blue-800">Water Saved</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600">
            {sampleMetrics.environmentalImpact.yearlyImpact.waterSaved}
          </p>
          <p className="text-sm text-blue-600">liters/year</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Recycle className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-purple-800">Plastic Reduced</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            {sampleMetrics.environmentalImpact.yearlyImpact.plasticReduced}
          </p>
          <p className="text-sm text-purple-600">kg/year</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-6 h-6 text-gray-600" />
            <h3 className="font-semibold text-gray-800">Carbon Reduced</h3>
          </div>
          <p className="text-2xl font-bold text-gray-600">
            {sampleMetrics.environmentalImpact.yearlyImpact.carbonFootprint}
          </p>
          <p className="text-sm text-gray-600">kg CO₂/year</p>
        </div>
      </div>

      {/* Monthly Progress Chart */}
      <div className="h-80 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Progress</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trees" stroke="#059669" name="Trees Preserved" />
            <Line type="monotone" dataKey="water" stroke="#2563eb" name="Water Saved (L)" />
            <Line type="monotone" dataKey="plastic" stroke="#7c3aed" name="Plastic Reduced (kg)" />
            <Line type="monotone" dataKey="carbon" stroke="#4b5563" name="Carbon Reduced (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sustainability Score */}
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Overall Sustainability Score</h3>
        <p className="text-4xl font-bold text-green-600">{sampleMetrics.sustainabilityScore}</p>
        <p className="text-sm text-green-600 mt-2">
          Reward Points Earned: {sampleMetrics.rewardPoints}
        </p>
      </div>
    </div>
  );
};

export default SustainabilityDashboard;