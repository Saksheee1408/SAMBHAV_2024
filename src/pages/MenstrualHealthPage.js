import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Recycle, 
  Calendar, 
  Heart,
  Info,
  ArrowRight,
  Star,
  Box,
  Leaf
} from 'lucide-react';

const MenstrualHealthPage = () => {
  const [activeTab, setActiveTab] = useState('products');

  const products = [
    {
      id: 1,
      name: "Eco-Friendly Menstrual Cup",
      price: "₹599",
      rating: 4.8,
      impact: "Saves 2500+ disposable products",
      image: "/api/placeholder/200/200",
      category: "reusable"
    },
    {
      id: 2,
      name: "Organic Cotton Pads (Pack of 8)",
      price: "₹299",
      rating: 4.6,
      impact: "100% biodegradable",
      image: "/api/placeholder/200/200",
      category: "biodegradable"
    },
    {
      id: 3,
      name: "Reusable Cloth Pads Set",
      price: "₹799",
      rating: 4.7,
      impact: "2 years of sustainable use",
      image: "/api/placeholder/200/200",
      category: "reusable"
    }
  ];

  const educationalContent = [
    {
      title: "Why Choose Sustainable Products?",
      content: "Regular disposable products contribute to millions of tons of plastic waste. Sustainable alternatives reduce environmental impact while being safer for your body."
    },
    {
      title: "Environmental Impact",
      content: "A single person using disposable products generates ~150kg of waste annually. Switching to reusables can prevent this waste entirely."
    }
  ];

  const recyclingSteps = [
    "Register your product with unique QR code",
    "Use dedicated collection bins for disposal",
    "Earn recycling points for rewards",
    "Track your environmental impact"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-pink-800 mb-2">
          Sustainable Menstrual Health Solutions
        </h1>
        <p className="text-gray-600">
          Eco-friendly alternatives for a sustainable and healthy period
        </p>
      </header>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-8">
        {[
          { id: 'products', icon: <ShoppingBag />, label: 'Products' },
          { id: 'education', icon: <Info />, label: 'Education' },
          { id: 'recycling', icon: <Recycle />, label: 'Recycling Program' },
          { id: 'subscription', icon: <Calendar />, label: 'Subscriptions' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg
              ${activeTab === tab.id 
                ? 'bg-pink-600 text-white' 
                : 'bg-white text-pink-600 hover:bg-pink-100'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Products Section */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl p-6 shadow-md">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="text-pink-600 font-bold">{product.price}</span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="text-yellow-400 w-4 h-4" />
                <span className="ml-1 text-sm">{product.rating}</span>
              </div>
              <div className="flex items-center text-green-600 text-sm">
                <Leaf className="w-4 h-4 mr-1" />
                <span>{product.impact}</span>
              </div>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {activeTab === 'education' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationalContent.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-pink-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
          <div className="md:col-span-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Track Your Environmental Impact
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-pink-600">150kg</p>
                <p className="text-sm text-gray-600">Waste Prevented Annually</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-pink-600">₹3000</p>
                <p className="text-sm text-gray-600">Annual Savings</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-pink-600">0%</p>
                <p className="text-sm text-gray-600">Plastic Waste</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recycling Program */}
      {activeTab === 'recycling' && (
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-pink-800">
            Product Recycling Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <div className="space-y-4">
                {recyclingSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Recycling Rewards</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Return 5 products</span>
                  <span className="text-pink-600">50 points</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Monthly subscription</span>
                  <span className="text-pink-600">100 points</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Refer a friend</span>
                  <span className="text-pink-600">200 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Section */}
      {activeTab === 'subscription' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Basic', 'Premium', 'Ultimate'].map((plan, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">{plan} Plan</h3>
              <p className="text-3xl font-bold mb-4">
                ₹{(index + 1) * 299}
                <span className="text-sm text-gray-500">/month</span>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-pink-600" />
                  Monthly eco-friendly products
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-pink-600" />
                  Free recycling service
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-pink-600" />
                  {index > 0 ? 'Priority shipping' : 'Standard shipping'}
                </li>
              </ul>
              <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenstrualHealthPage;