import React, { useState } from 'react';
import { Recycle } from 'lucide-react';
import { calculateSustainabilityMetrics } from './SustainabilityCalculator.js';
import ImpactVisualization from './ImpactVisualization';

const RecyclingSection = () => {
  const [formData, setFormData] = useState({
    productType: '',
    quantity: '',
    disposalMethod: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [showResults, setShowResults] = useState(false);
  const [metrics, setMetrics] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateSustainabilityMetrics(
      formData.productType,
      formData.quantity,
      formData.disposalMethod
    );
    setMetrics(results);
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Recycle className="text-green-600 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">
            Menstrual Product Recycling Program
          </h2>
        </div>
        <p className="text-gray-600">
          Join our initiative to make menstrual products more sustainable. Track your impact and earn rewards!
        </p>
      </div>

      {/* Recycling Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Information */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Product Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Type
              </label>
              <select
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select product type</option>
                <option value="disposable">Disposable Pads/Tampons</option>
                <option value="biodegradable">Biodegradable Products</option>
                <option value="reusable">Reusable Products</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity (pieces)
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Disposal Method
              </label>
              <select
                name="disposalMethod"
                value={formData.disposalMethod}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select disposal method</option>
                <option value="recycling">Recycling Center</option>
                <option value="composting">Composting</option>
                <option value="collection">Collection Service</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                rows="3"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Calculate Impact
        </button>
      </form>

      {/* Results Section */}
      {showResults && metrics && (
        <div className="space-y-6">
          <ImpactVisualization metrics={metrics} />
        </div>
      )}
    </div>
  );
};

export default RecyclingSection;