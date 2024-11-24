import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Recycle, Leaf, ShoppingBag, Heart } from 'lucide-react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import SustainabilityDashboard from './SustainabilityDashboard';

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setShowLogin(false);
        setShowSignup(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user:", userCredential.user);
      alert("Login successful!");
      setShowLogin(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("New user:", userCredential.user);
      alert("Signup successful!");
      setShowSignup(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      alert(error.message);
    }
  };

  const features = [
    {
      icon: <Recycle className="w-8 h-8 text-green-500" />,
      title: "Reuse & Recycle",
      description: "Give your items a second life. Join our recycling program and make a difference.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
      title: "Waste to Wealth Marketplace",
      description: "Discover unique products made from recycled materials. Shop sustainably.",
    },
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Menstrual Solutions",
      description: "Eco-friendly period products that care for you and the environment.",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-800"></span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#dashboard" className="text-gray-600 hover:text-green-600"></a>
              <a href="#marketplace" className="text-gray-600 hover:text-green-600"></a>
              <a href="#solutions" className="text-gray-600 hover:text-green-600"></a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{user.email}</span>
                  <button 
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowLogin(true)}
                    className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setShowSignup(true)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isNavOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#dashboard" className="block px-3 py-2 text-gray-600 hover:text-green-600">Dashboard</a>
                <a href="#marketplace" className="block px-3 py-2 text-gray-600 hover:text-green-600">Marketplace</a>
                <a href="#solutions" className="block px-3 py-2 text-gray-600 hover:text-green-600">Solutions</a>
                {user ? (
                  <>
                    <span className="block px-3 py-2 text-gray-600">{user.email}</span>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setShowLogin(true)}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => setShowSignup(true)}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div 
          className="max-w-7xl mx-auto text-center"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - (scrollY * 0.001)
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
            Sustainable Living,<br />
            <span className="text-green-600">Better Future</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to create a waste-free world through sustainable shopping,
            recycling initiatives, and eco-friendly solutions.
          </p>
          <button className="px-8 py-4 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                style={{
                  opacity: scrollY > 200 ? 1 : 0,
                  transform: `translateY(${Math.max(0, 100 - scrollY/4)}px)`,
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="dashboard">
        <div className="max-w-7xl mx-auto px-4">
          {user ? (
            <SustainabilityDashboard />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your dashboard</h2>
              <button 
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "100T", label: "Waste Recycled" },
              { value: "30K+", label: "Products Sold" },
              { value: "95%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="transform hover:scale-105 transition-transform duration-300"
                style={{
                  opacity: scrollY > 400 ? 1 : 0,
                  transform: `translateX(${Math.max(0, 50 - scrollY/10)}px)`,
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(showLogin || showSignup) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800">
                {showLogin ? "Login" : "Sign Up"}
              </h2>
              <button onClick={() => {
                setShowLogin(false);
                setShowSignup(false);
                setError('');
                setEmail('');
                setPassword('');
              }}>
                <X className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <form onSubmit={showLogin ? handleLogin : handleSignup}>
              {error && <div className="mb-4 text-red-600">{error}</div>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
                required
              />
              <button 
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {showLogin ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <p 
              className="mt-4 text-center text-gray-600 cursor-pointer hover:text-green-600"
              onClick={() => {
                setShowLogin(!showLogin);
                setShowSignup(!showSignup);
                setError('');
                setEmail('');
                setPassword('');
              }}
            >
              {showLogin 
                ? "Don't have an account? Sign Up" 
                : "Already have an account? Login"}
            </p>
          </div>
        </div>
      )}

      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About EcoCircle</h3>
              <p className="text-green-200">
                Empowering sustainable living through innovative solutions and community engagement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Services</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">Recycling</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Marketplace</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Sustainability</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Education</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-green-200">Email: info@ecocircle.com</li>
                <li className="text-green-200">Phone: (555) 123-4567</li>
                <li className="text-green-200">Address:456 Developer's Lane </li>
                <li className="text-green-200">Nashik,Maharashtra 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 EcoCircle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;