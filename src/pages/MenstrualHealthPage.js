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
import MenstrualEducationSection from './MenstrualEducationSection';
import RecyclingSection from './RecyclingSection';

// Import images
import cupImage from '../images/images (2).jpg';
import padImage from '../images/pad.jpg';
import reusableImage from '../images/reusable.jpg';

const MenstrualHealthPage = () => {
  const [activeTab, setActiveTab] = useState('products');

  const products = [
    {
      id: 1,
      name: "Eco-Friendly Menstrual Cup",
      price: "₹599",
      rating: 4.8,
      impact: "Saves 2500+ disposable products",
      images: [
        {
          src: cupImage,
          alt: "Eco-friendly menstrual cup",
          caption: "Made from medical-grade silicone"
        }
      ],
      category: "reusable",
      description: "Medical-grade silicone cup that lasts up to 5 years. Available in multiple sizes for perfect fit."
    },
    {
      id: 2,
      name: "Organic Cotton Pads (Pack of 8)",
      price: "₹299",
      rating: 4.6,
      impact: "100% biodegradable",
      images: [
        {
          src: padImage,
          alt: "Pack of organic cotton pads",
          caption: "100% organic cotton"
        }
      ],
      category: "biodegradable",
      description: "Made from 100% organic cotton, these pads are completely biodegradable and gentle on skin."
    },
    {
      id: 3,
      name: "Reusable Cloth Pads Set",
      price: "₹799",
      rating: 4.7,
      impact: "2 years of sustainable use",
      images: [
        {
          src: reusableImage,
          alt: "Set of colorful cloth pads",
          caption: "Variety of patterns"
        }
      ],
      category: "reusable",
      description: "Set of 4 reusable cloth pads with different absorption levels. Machine washable and long-lasting."
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Basic',
      price: 299,
      features: [
        'Monthly eco-friendly products',
        'Free recycling service',
        'Standard shipping'
      ]
    },
    {
      name: 'Premium',
      price: 598,
      features: [
        'Monthly eco-friendly products',
        'Free recycling service',
        'Priority shipping',
        'Quarterly consultation'
      ]
    },
    {
      name: 'Ultimate',
      price: 897,
      features: [
        'Monthly eco-friendly products',
        'Free recycling service',
        'Priority shipping',
        'Monthly consultation',
        'Premium products'
      ]
    }
  ];

  const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="bg-white rounded-xl p-6 shadow-md transition-transform hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img 
              src={product.images[0].src} 
              alt={product.images[0].alt}
              className="w-full h-full object-cover transition-transform duration-300"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          </div>
          
          <p className="text-sm text-gray-600 text-center mt-2 mb-4">
            {product.images[0].caption}
          </p>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-pink-600 font-bold">{product.price}</span>
        </div>
        
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 w-4 h-4" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        
        <div className="flex items-center text-green-600 text-sm mb-4">
          <Leaf className="w-4 h-4 mr-1" />
          <span>{product.impact}</span>
        </div>

        <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
          Add to Cart
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-pink-50 p-4 md:p-6">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-pink-800 mb-2">
          Sustainable Menstrual Health Solutions
        </h1>
        <p className="text-gray-600">
          Eco-friendly alternatives for a sustainable and healthy period
        </p>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 mb-8">
        {[
          { id: 'products', icon: <ShoppingBag size={20} />, label: 'Products' },
          { id: 'education', icon: <Info size={20} />, label: 'Education' },
          { id: 'recycling', icon: <Recycle size={20} />, label: 'Recycling Program' },
          { id: 'subscription', icon: <Calendar size={20} />, label: 'Subscriptions' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
              ${activeTab === tab.id 
                ? 'bg-pink-600 text-white' 
                : 'bg-white text-pink-600 hover:bg-pink-100'}
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto">
        {/* Products Section */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <MenstrualEducationSection />
          </div>
        )}

        {/* Recycling Section */}
        {activeTab === 'recycling' && (
          <div className="bg-white rounded-xl p-6 shadow-md">
            <RecyclingSection />
          </div>
        )}

        {/* Subscription Section */}
        {activeTab === 'subscription' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{plan.name} Plan</h3>
                <p className="text-3xl font-bold mb-4">
                  ₹{plan.price}
                  <span className="text-sm text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-pink-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenstrualHealthPage;