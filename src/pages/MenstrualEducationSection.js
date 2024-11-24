import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, Heart, Leaf, DollarSign, AlertCircle, Clock, Droplets, Book, Moon, Sun } from 'lucide-react';

const MenstrualEducationSection = () => {
  const [activeTab, setActiveTab] = useState('health');
  const [expandedSection, setExpandedSection] = useState(null);

  // Enhanced environmental impact data
  const environmentalData = [
    { year: '2019', disposable: 12000, sustainable: 2000, avgWaste: 9000 },
    { year: '2020', disposable: 11500, sustainable: 3500, avgWaste: 8500 },
    { year: '2021', disposable: 10500, sustainable: 5000, avgWaste: 8000 },
    { year: '2022', disposable: 9000, sustainable: 7000, avgWaste: 7500 },
    { year: '2023', disposable: 7500, sustainable: 8500, avgWaste: 7000 }
  ];

  // Enhanced health stats with more detailed information
  const healthStats = {
    disposable: [
      { 
        name: 'Chemical Exposure',
        value: 75,
        details: 'High exposure to synthetic materials and chemicals including dioxins, artificial fragrances, and bleaching agents that may cause endocrine disruption and skin sensitivity.',
        recommendations: [
          'Choose unscented products',
          'Look for chlorine-free options',
          'Check ingredient lists carefully'
        ]
      },
      { 
        name: 'Skin Sensitivity',
        value: 60,
        details: 'Synthetic materials can cause irritation, rashes, and allergic reactions. Plastic backing reduces breathability and may increase moisture retention.',
        recommendations: [
          'Monitor for any reactions',
          'Change products frequently',
          'Consider organic alternatives'
        ]
      },
      { 
        name: 'Infection Risk',
        value: 45,
        details: 'Extended use of synthetic materials can create an environment conducive to bacterial growth and increase the risk of infections like yeast infections and UTIs.',
        recommendations: [
          'Change every 4-6 hours',
          'Avoid overnight use when possible',
          'Maintain proper hygiene'
        ]
      },
      { 
        name: 'Comfort',
        value: 65,
        details: 'While convenient, synthetic materials may cause discomfort during physical activity and can feel bulky or restrictive.',
        recommendations: [
          'Choose size based on flow',
          'Consider different options for day/night',
          'Test different brands'
        ]
      }
    ],
    sustainable: [
      { 
        name: 'Chemical Exposure',
        value: 15,
        details: 'Made from natural, body-safe materials like medical-grade silicone, organic cotton, or bamboo fiber. Minimal chemical exposure and better breathability.',
        recommendations: [
          'Follow cleaning instructions',
          'Replace as recommended',
          'Choose certified materials'
        ]
      },
      { 
        name: 'Skin Sensitivity',
        value: 20,
        details: 'Natural materials reduce irritation and allow better air circulation. Some initial adjustment period may be needed for cups or cloth pads.',
        recommendations: [
          'Start with smaller sizes',
          'Use backup protection initially',
          'Allow adjustment period'
        ]
      },
      { 
        name: 'Infection Risk',
        value: 25,
        details: 'Proper care and cleaning of reusable products can actually lower infection risks. Natural materials promote better vaginal pH balance.',
        recommendations: [
          'Sterilize cups between cycles',
          'Wash reusable pads properly',
          'Replace if damaged'
        ]
      },
      { 
        name: 'Comfort',
        value: 85,
        details: 'Once properly fitted, sustainable options often provide better comfort with less bulk and better breathability. May require initial adjustment period.',
        recommendations: [
          'Find correct cup size/shape',
          'Try different fold methods',
          'Consider period underwear for backup'
        ]
      }
    ]
  };

  const cyclePhases = [
    {
      phase: 'Menstrual Phase',
      days: 'Days 1-5',
      description: 'The uterine lining is shed through menstruation. Common symptoms include cramping, fatigue, and mood changes.',
      tips: [
        'Stay hydrated',
        'Use heating pad for cramps',
        'Get adequate rest',
        'Consider iron-rich foods'
      ],
      icon: <Moon className="w-8 h-8 text-red-500" />
    },
    {
      phase: 'Follicular Phase',
      days: 'Days 6-14',
      description: 'Estrogen levels rise as follicles develop in the ovaries. Energy levels typically increase during this time.',
      tips: [
        'Great time for exercise',
        'Start new projects',
        'Focus on strength training',
        'Increase social activities'
      ],
      icon: <Sun className="w-8 h-8 text-yellow-500" />
    },
    {
      phase: 'Ovulation Phase',
      days: 'Day 14-16',
      description: 'An egg is released from the ovary. Peak fertility occurs during this time. Many experience increased energy and confidence.',
      tips: [
        'Track physical symptoms',
        'Monitor body temperature',
        'Note changes in discharge',
        'Stay active'
      ],
      icon: <Heart className="w-8 h-8 text-pink-500" />
    },
    {
      phase: 'Luteal Phase',
      days: 'Days 17-28',
      description: 'Progesterone rises. PMS symptoms may occur, including mood changes, bloating, and fatigue.',
      tips: [
        'Practice self-care',
        'Reduce caffeine intake',
        'Include calming activities',
        'Get extra sleep if needed'
      ],
      icon: <Moon className="w-8 h-8 text-purple-500" />
    }
  ];

  const COLORS = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d'];

  const TabButton = ({ tab, label, active }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
        active 
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const renderHealthTab = () => (
    <div className="space-y-8">
      {/* Cycle Phases Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Understanding Your Menstrual Cycle</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cyclePhases.map((phase, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                {phase.icon}
                <h3 className="text-xl font-semibold text-gray-800">{phase.phase}</h3>
              </div>
              <p className="text-purple-600 font-medium mb-2">{phase.days}</p>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <ul className="space-y-2">
                {phase.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Health Impact Analysis */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Health Impact Analysis</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Traditional Products Analysis */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Traditional Products</h3>
              <PieChart width={400} height={300}>
                <Pie
                  data={healthStats.disposable}
                  cx={200}
                  cy={150}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {healthStats.disposable.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            
            {healthStats.disposable.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-gray-50 to-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{stat.name}</h4>
                <p className="text-gray-700 mb-4">{stat.details}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-pink-600">Recommendations:</h5>
                  <ul className="grid grid-cols-1 gap-2">
                    {stat.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Sustainable Products Analysis */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Products</h3>
              <PieChart width={400} height={300}>
                <Pie
                  data={healthStats.sustainable}
                  cx={200}
                  cy={150}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {healthStats.sustainable.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            
            {healthStats.sustainable.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{stat.name}</h4>
                <p className="text-gray-700 mb-4">{stat.details}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-green-600">Recommendations:</h5>
                  <ul className="grid grid-cols-1 gap-2">
                    {stat.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Health Resources */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Health Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <Book className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-gray-700">Understanding your cycle phases</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-gray-700">Hormone balance and health</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-gray-700">Nutrition and exercise guides</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <Heart className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Self-Care Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="text-gray-700">Stress management techniques</span>
              </li>
              <li className="flex items-center gap-2">
              

                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="text-gray-700">Relaxation and meditation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="text-gray-700">Exercise recommendations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">When to Seek Help</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-gray-700">Irregular cycles</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-gray-700">Severe pain or bleeding</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-gray-700">Unusual symptoms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnvironmentalTab = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Environmental Impact Analysis</h2>
        
        {/* Enhanced Chart Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Waste Reduction Trends</h3>
          <LineChart width={800} height={400} data={environmentalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="disposable" stroke="#ff6b6b" name="Disposable Waste (kg)" strokeWidth={2} />
            <Line type="monotone" dataKey="sustainable" stroke="#4ecdc4" name="Sustainable Waste (kg)" strokeWidth={2} />
            <Line type="monotone" dataKey="avgWaste" stroke="#45b7d1" name="Average Waste (kg)" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Environmental Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-red-600 mb-4">Plastic Pollution Impact</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                A single menstruator using disposable products contributes approximately:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-gray-700">120-150kg lifetime waste</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-gray-700">12,000+ disposable products</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-gray-700">500-800 years decomposition</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-green-600 mb-4">Sustainable Solutions</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Benefits of switching to sustainable alternatives:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-gray-700">99% waste reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-gray-700">Biodegradable materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-gray-700">Multi-year reusability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Water Conservation</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Water impact comparison:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-700">600L/year for disposables</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-700">90% water savings</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-700">Reduced chemical runoff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Statistics */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <DollarSign size={40} className="mx-auto mb-4 text-green-600" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">₹25,000+</h3>
          <p className="text-gray-600">Lifetime Savings</p>
          <p className="text-sm text-gray-500 mt-2">Compared to disposable products</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <Leaf size={40} className="mx-auto mb-4 text-green-600" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">12,000</h3>
          <p className="text-gray-600">Products Saved</p>
          <p className="text-sm text-gray-500 mt-2">Per person lifetime impact</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <AlertCircle size={40} className="mx-auto mb-4 text-red-600" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">500 Years</h3>
          <p className="text-gray-600">Decomposition Time</p>
          <p className="text-sm text-gray-500 mt-2">For synthetic materials</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <Droplets size={40} className="mx-auto mb-4 text-blue-600" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">90%</h3>
          <p className="text-gray-600">Carbon Reduction</p>
          <p className="text-sm text-gray-500 mt-2">With sustainable options</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Menstrual Health & Environmental Impact
        </h1>
        <div className="flex gap-4">
          <TabButton tab="health" label="Health Impact" active={activeTab === 'health'} />
          <TabButton tab="environmental" label="Environmental Impact" active={activeTab === 'environmental'} />
        </div>
      </div>

      {activeTab === 'health' ? renderHealthTab() : renderEnvironmentalTab()}
    </div>
  );
};

export default MenstrualEducationSection;