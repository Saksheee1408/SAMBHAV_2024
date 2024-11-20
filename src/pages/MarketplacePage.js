import React, { useState } from 'react';
import { Trophy, CheckCircle, Upload } from 'lucide-react';

const MarketplacePage = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [submissionType, setSubmissionType] = useState(null);
  const [verifiedProducts, setVerifiedProducts] = useState([]);

  // Landing Section
  const LandingSection = () => (
    <div className="text-center py-16 bg-green-50">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Make a Difference with Your Creativity! Transform Waste into Wonders
      </h1>
      <p className="text-xl text-green-600 mb-8">
        Compete to showcase your best from waste creations and contribute to a sustainable future
      </p>
      <div className="flex justify-center space-x-6">
        <button 
          onClick={() => {
            setCurrentView('submission');
            setSubmissionType('sale');
          }}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Submit for Sale
        </button>
        <button 
          onClick={() => {
            setCurrentView('submission');
            setSubmissionType('compete');
          }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Enter Challenge
        </button>
      </div>
      <p className="mt-8 text-gray-600">
        Join the movement towards a cleaner, greener future! Every contribution counts.
      </p>
    </div>
  );

  // Product Submission Form
  const ProductSubmissionForm = () => {
    const [formData, setFormData] = useState({
      productName: '',
      description: '',
      category: '',
      materials: '',
      price: '',
      image: null
    });

    const categories = ['Furniture', 'Toys', 'Decor', 'Art'];
    const materials = ['Wood', 'Plastic', 'Fabric', 'Metal', 'Glass'];

    const calculateSustainabilityScore = (material) => {
      const scores = {
        'Wood': 8,
        'Plastic': 3,
        'Fabric': 7,
        'Metal': 6,
        'Glass': 9
      };
      return scores[material] || 5;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const sustainabilityScore = calculateSustainabilityScore(formData.materials);
      const newProduct = {
        ...formData,
        sustainabilityScore,
        type: submissionType
      };
      setVerifiedProducts([...verifiedProducts, newProduct]);
      setCurrentView('verified-products');
    };

    return (
      <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-green-800">
          {submissionType === 'sale' ? 'Product Submission' : 'Challenge Submission'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Product Name" 
            required 
            className="w-full p-2 border rounded"
            value={formData.productName}
            onChange={(e) => setFormData({...formData, productName: e.target.value})}
          />
          <textarea 
            placeholder="Product Description" 
            required 
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          <select 
            required 
            className="w-full p-2 border rounded"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select 
            required 
            className="w-full p-2 border rounded"
            value={formData.materials}
            onChange={(e) => setFormData({...formData, materials: e.target.value})}
          >
            <option value="">Select Materials</option>
            {materials.map(mat => (
              <option key={mat} value={mat}>{mat}</option>
            ))}
          </select>
          <input 
            type="number" 
            placeholder="Price" 
            required 
            className="w-full p-2 border rounded"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
          />
          <input 
            type="file" 
            accept="image/*" 
            required 
            className="w-full p-2 border rounded"
            onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
          />
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
          >
            Submit Product
          </button>
        </form>
      </div>
    );
  };

  // Challenges Section
  const ChallengesSection = () => {
    const challenges = [
      {
        id: 1,
        title: "Upcycled Wooden Furniture",
        description: "Create a unique piece of furniture from old wooden scraps",
        icon: <Trophy size={48} className="text-green-600" />
      },
      {
        id: 2,
        title: "Plastic Waste to Art",
        description: "Turn plastic waste into a beautiful art piece",
        icon: <Upload size={48} className="text-blue-600" />
      },
      {
        id: 3,
        title: "Fabric Scrap Fashion",
        description: "Design a wearable item from old fabric scraps",
        icon: <CheckCircle size={48} className="text-purple-600" />
      }
    ];

    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
            Sustainability Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map(challenge => (
              <div 
                key={challenge.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  {challenge.icon}
                  <h3 className="ml-4 text-xl font-semibold">{challenge.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <button 
                  onClick={() => {
                    setCurrentView('submission');
                    setSubmissionType('compete');
                  }}
                  className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                  Participate
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Verified Products Section
  const VerifiedProductsSection = () => {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
            Verified Products
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {verifiedProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg shadow-md relative"
              >
                <div className="absolute top-2 right-2">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
                <img 
                  src={URL.createObjectURL(product.image)} 
                  alt={product.productName} 
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold">{product.productName}</h3>
                <p className="text-gray-600">{product.category}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-green-700">
                    ${product.price}
                  </span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                    Score: {product.sustainabilityScore}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {currentView === 'landing' && <LandingSection />}
      {currentView === 'submission' && <ProductSubmissionForm />}
      {currentView === 'verified-products' && (
        <>
          <ChallengesSection />
          <VerifiedProductsSection />
        </>
      )}
    </div>
  );
};

export default MarketplacePage;