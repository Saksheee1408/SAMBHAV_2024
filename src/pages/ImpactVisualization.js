import React, { useState, useEffect } from 'react';
import { 
  TreePine, 
  Droplets, 
  Recycle, 
  Wind, 
  Award, 
  ArrowRight,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const ImpactVisualization = ({ metrics }) => {
  const [showYearlyImpact, setShowYearlyImpact] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [metrics]);

  const ImpactCard = ({ icon: Icon, title, value, unit, color }) => (
    <div className={`bg-white rounded-lg p-6 shadow-md transform transition-all duration-500 hover:scale-105 
      ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div className={`inline-flex items-center justify-center p-3 rounded-full ${color} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className="ml-1 text-gray-600">{unit}</span>
      </div>
    </div>
  );

  const RewardsSection = () => (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white transform transition-all duration-500 hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <Award className="w-8 h-8" />
        <div>
          <h3 className="text-xl font-bold">Rewards Earned</h3>
          <p className="text-sm opacity-90">Redeem for eco-friendly products</p>
        </div>
      </div>
      <div className="text-4xl font-bold mb-4">
        {metrics.rewardPoints}
        <span className="text-lg ml-2 opacity-90">points</span>
      </div>
      <button className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
        Redeem Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Main Impact Score */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Your Sustainability Score</h2>
        <div className="text-6xl font-bold mb-4">{metrics.sustainabilityScore}</div>
        <p className="text-lg opacity-90">Making a difference for our planet!</p>
      </div>

      {/* Environmental Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ImpactCard
          icon={TreePine}
          title="Trees Preserved"
          value={showYearlyImpact ? metrics.environmentalImpact.yearlyImpact.treesPreserved : metrics.environmentalImpact.treesPreserved}
          unit="trees"
          color="bg-green-500"
        />
        <ImpactCard
          icon={Droplets}
          title="Water Saved"
          value={showYearlyImpact ? metrics.environmentalImpact.yearlyImpact.waterSaved : metrics.environmentalImpact.waterSaved}
          unit="L"
          color="bg-blue-500"
        />
        <ImpactCard
          icon={Recycle}
          title="Plastic Reduced"
          value={showYearlyImpact ? metrics.environmentalImpact.yearlyImpact.plasticReduced : metrics.environmentalImpact.plasticReduced}
          unit="kg"
          color="bg-yellow-500"
        />
        <ImpactCard
          icon={Wind}
          title="Carbon Reduced"
          value={showYearlyImpact ? metrics.environmentalImpact.yearlyImpact.carbonFootprint : metrics.environmentalImpact.carbonFootprint}
          unit="kg CO₂"
          color="bg-teal-500"
        />
      </div>

      {/* Toggle Yearly Impact */}
      <button
        onClick={() => setShowYearlyImpact(!showYearlyImpact)}
        className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors mx-auto"
      >
        {showYearlyImpact ? (
          <>
            <ChevronDown className="w-4 h-4" />
            Show Monthly Impact
          </>
        ) : (
          <>
            <ChevronRight className="w-4 h-4" />
            Project Yearly Impact
          </>
        )}
      </button>

      {/* Rewards Section */}
      <RewardsSection />

      {/* Impact Comparisons */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-gray-800 mb-4">Your Impact Explained</h3>
        <div className="space-y-3">
          <p className="text-gray-600">
            🌳 Your recycling effort is equivalent to saving{' '}
            <span className="font-medium text-green-600">
              {metrics.environmentalImpact.treesPreserved} trees
            </span>{' '}
            from being cut down
          </p>
          <p className="text-gray-600">
            💧 You've saved enough water to provide{' '}
            <span className="font-medium text-blue-600">
              {Math.round(metrics.environmentalImpact.waterSaved / 2)} people
            </span>{' '}
            with drinking water for a day
          </p>
          <p className="text-gray-600">
            ♻️ Your plastic reduction could save{' '}
            <span className="font-medium text-yellow-600">
              {Math.round(metrics.environmentalImpact.plasticReduced * 100)} marine animals
            </span>{' '}
            from plastic pollution
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactVisualization;
