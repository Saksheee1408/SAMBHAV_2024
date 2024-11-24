import React, { useState, useEffect } from 'react';
import { 
  Trophy, CheckCircle, XCircle, ShoppingBag, 
  Leaf, Heart, Star, ArrowRight, Search,
  Upload, AlertTriangle, Camera
} from 'lucide-react';

const MarketplacePage = () => {
  // State Management
  const [currentView, setCurrentView] = useState('landing');
  const [submissionType, setSubmissionType] = useState(null);
  const [verifiedProducts, setVerifiedProducts] = useState([]);
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [alert, setAlert] = useState(null);
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);

  // Alert System
  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  // Cart Functions
  const addToCart = (product) => {
    setCart([...cart, product]);
    showAlert('Product added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showAlert('Product removed from cart');
  };

  // Wishlist Functions
  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      showAlert('Removed from wishlist');
    } else {
      setWishlist([...wishlist, product]);
      showAlert('Added to wishlist!');
    }
  };

  // Assessment System
  const assessProduct = (formData) => {
    let score = 0;
    let feedback = [];
    
    // Material sustainability scoring
    const materialScores = {
      'Wood': 8,
      'Plastic': 3,
      'Fabric': 7,
      'Metal': 6,
      'Glass': 9
    };
    
    score += materialScores[formData.materials] || 0;

    // Description assessment
    if (formData.description.length < 50) {
      feedback.push("Add more product details (min 50 characters)");
      score -= 2;
    }

    // Price assessment
    const price = parseFloat(formData.price);
    if (price < 10) {
      feedback.push("Consider a higher price for sustainable products");
      score -= 1;
    }

    // Category-specific criteria
    switch (formData.category) {
      case 'Furniture':
        if (formData.materials === 'Plastic') {
          feedback.push("Consider using more sustainable materials for furniture");
          score -= 2;
        }
        break;
      case 'Fashion':
        if (!formData.description.toLowerCase().includes('recycled')) {
          feedback.push("Mention if materials are recycled");
          score -= 1;
        }
        break;
    }

    // Image validation
    if (!formData.image) {
      feedback.push("Product images are required");
      score -= 3;
    }

    return {
      passed: score >= 6,
      score: Math.max(0, Math.min(10, score)), // Clamp between 0-10
      feedback
    };
  };

  // Alert Component
  const Alert = ({ message, type }) => (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 
      ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      {message}
    </div>
  );

  // Modal Component
  const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );

  // Advertisement Banner
  const AdvertBanner = () => (
    <div className="bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 text-white py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm md:text-base font-medium">
          🌿 Special Offer: Get 10% off your first sustainable purchase with code: ECOSAVE10
        </p>
        <button 
          onClick={() => setCurrentView('shop')}
          className="text-xs md:text-sm underline hover:text-green-100"
        >
          Shop Now
        </button>
      </div>
    </div>
  );

  // Product Form Component
  const ProductSubmissionForm = () => {
    const [formData, setFormData] = useState({
      id: Date.now(), // Unique ID for each product
      productName: '',
      description: '',
      category: '',
      materials: '',
      price: '',
      image: null
    });
    const [errors, setErrors] = useState({});
    const [previewUrl, setPreviewUrl] = useState(null);

    const categories = ['Furniture', 'Toys', 'Decor', 'Art', 'Fashion', 'Accessories'];
    const materials = ['Wood', 'Plastic', 'Fabric', 'Metal', 'Glass', 'Recycled'];

    const validateForm = () => {
      const newErrors = {};
      if (!formData.productName) newErrors.productName = 'Product name is required';
      if (formData.description.length < 50) newErrors.description = 'Description must be at least 50 characters';
      if (!formData.category) newErrors.category = 'Category is required';
      if (!formData.materials) newErrors.materials = 'Materials are required';
      if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required';
      if (!formData.image) newErrors.image = 'Product image is required';
      return newErrors;
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({ ...formData, image: file });
        setPreviewUrl(URL.createObjectURL(file));
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formErrors = validateForm();
      
      if (Object.keys(formErrors).length === 0) {
        const result = assessProduct(formData);
        setAssessmentResult(result);
        setFeedback(result.feedback);
        
        if (result.passed) {
          const newProduct = {
            ...formData,
            sustainabilityScore: result.score,
            type: submissionType,
            status: 'verified',
            createdAt: new Date().toISOString()
          };
          setVerifiedProducts([...verifiedProducts, newProduct]);
          setShowAssessmentModal(true);
        } else {
          setShowAssessmentModal(true);
        }
      } else {
        setErrors(formErrors);
      }
    };

    return (
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Submit Your Sustainable Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Product Name</label>
            <input 
              type="text" 
              className={`w-full p-3 border rounded-lg ${errors.productName ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.productName}
              onChange={(e) => setFormData({...formData, productName: e.target.value})}
              placeholder="Enter product name"
            />
            {errors.productName && (
              <p className="text-red-500 text-sm mt-1">{errors.productName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea 
              className={`w-full p-3 border rounded-lg min-h-[100px] ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe your product (min 50 characters)"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <select 
                className={`w-full p-3 border rounded-lg ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Primary Material</label>
              <select 
                className={`w-full p-3 border rounded-lg ${errors.materials ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.materials}
                onChange={(e) => setFormData({...formData, materials: e.target.value})}
              >
                <option value="">Select Material</option>
                {materials.map(mat => (
                  <option key={mat} value={mat}>{mat}</option>
                ))}
              </select>
              {errors.materials && (
                <p className="text-red-500 text-sm mt-1">{errors.materials}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Price ($)</label>
            <input 
              type="number" 
              className={`w-full p-3 border rounded-lg ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              placeholder="Enter price"
              min="0"
              step="0.01"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Product Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              {previewUrl ? (
                <div className="relative">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="max-h-48 mx-auto rounded"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewUrl(null);
                      setFormData({...formData, image: null});
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Camera className="mx-auto text-gray-400" size={48} />
                  <p className="text-gray-500">Click to upload or drag and drop</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              )}
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
          </div>

          <button 
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 
              transition-colors font-medium"
          >
            Submit for Assessment
          </button>
        </form>
      </div>
    );
  };


  
    // Assessment Modal
    const AssessmentModal = () => (
      <Modal onClose={() => setShowAssessmentModal(false)}>
        <div className={`p-6 ${assessmentResult.passed ? 'bg-green-50' : 'bg-red-50'} rounded-lg`}>
          <div className="flex items-center gap-3 mb-4">
            {assessmentResult.passed ? (
              <CheckCircle className="text-green-600" size={32} />
            ) : (
              <AlertTriangle className="text-red-600" size={32} />
            )}
            <h3 className="text-2xl font-bold">
              {assessmentResult.passed ? 'Product Approved!' : 'Assessment Failed'}
            </h3>
          </div>
  
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-medium">Sustainability Score:</span>
              <span className={`text-xl font-bold ${
                assessmentResult.passed ? 'text-green-600' : 'text-red-600'
              }`}>
                {assessmentResult.score}/10
              </span>
            </div>
  
            {feedback.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Feedback:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {feedback.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
  
          <div className="flex gap-4">
            {assessmentResult.passed ? (
              <>
                <button
                  onClick={() => {
                    setShowAssessmentModal(false);
                    setCurrentView('shop');
                  }}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg 
                    hover:bg-green-700 transition-colors font-medium"
                >
                  View in Marketplace
                </button>
                <button
                  onClick={() => setShowAssessmentModal(false)}
                  className="flex-1 border border-green-600 text-green-600 py-3 px-6 
                    rounded-lg hover:bg-green-50 transition-colors font-medium"
                >
                  Submit Another
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAssessmentModal(false)}
                className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg 
                  hover:bg-gray-700 transition-colors font-medium"
              >
                Revise Submission
              </button>
            )}
          </div>
        </div>
      </Modal>
    );
  
    // Product Card Component
    const ProductCard = ({ product }) => {
      const isInWishlist = wishlist.find(item => item.id === product.id);
      
      return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={URL.createObjectURL(product.image)} 
              alt={product.productName}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md
                hover:bg-gray-100 transition-colors"
            >
              <Heart 
                className={isInWishlist ? 'text-red-500' : 'text-gray-400'} 
                size={20} 
                fill={isInWishlist ? 'currentColor' : 'none'}
              />
            </button>
          </div>
  
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.productName}
            </h3>
            
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="text-green-500" size={16} />
              <span className="text-sm text-gray-600">
                Sustainability Score: {product.sustainabilityScore}/10
              </span>
            </div>
  
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
  
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                ${parseFloat(product.price).toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700
                  transition-colors text-sm font-medium flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    };
  
    // Shop View Component
    const ShopView = () => {
      const filteredProducts = verifiedProducts.filter(product => {
        const matchesSearch = product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
  
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search sustainable products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                    focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2
                  focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="Furniture">Furniture</option>
                <option value="Toys">Toys</option>
                <option value="Decor">Decor</option>
                <option value="Art">Art</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
  
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      );
    };
  
    // Main Render
    return (
      <div className="min-h-screen bg-gray-50">
        <AdvertBanner />
        
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                <Leaf />
                EcoMarket
              </h1>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView('shop')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentView === 'shop' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Shop
                </button>
                <button
                  onClick={() => setCurrentView('submit')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentView === 'submit' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Sell
                </button>
                <button
                  onClick={() => setCurrentView('wishlist')}
                  className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Heart size={24} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
                      w-5 h-5 rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setCurrentView('cart')}
                  className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ShoppingBag size={24} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs
                      w-5 h-5 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {currentView === 'landing' && <ShopView />}
          {currentView === 'shop' && <ShopView />}
          {currentView === 'submit' && <ProductSubmissionForm />}
          {showAssessmentModal && <AssessmentModal />}
          {alert && <Alert message={alert.message} type={alert.type} />}
        </main>
      </div>
    );
  };
  
  export default MarketplacePage;