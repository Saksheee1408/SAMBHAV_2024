// utils/SustainabilityCalculator.js

export const calculateSustainabilityMetrics = (productType, quantity, disposalMethod) => {
    let baseScore = 0;
    let treesCount = 0;
    let waterSaved = 0;
    let plasticReduced = 0;
    let carbonReduced = 0;
  
    // Base score calculation
    switch (productType) {
      case 'disposable':
        baseScore += 5;
        treesCount = 0.1;
        waterSaved = 10;
        plasticReduced = 0.5;
        carbonReduced = 0.2;
        break;
      case 'biodegradable':
        baseScore += 15;
        treesCount = 0.3;
        waterSaved = 25;
        plasticReduced = 1.2;
        carbonReduced = 0.5;
        break;
      case 'reusable':
        baseScore += 25;
        treesCount = 0.5;
        waterSaved = 40;
        plasticReduced = 2;
        carbonReduced = 0.8;
        break;
      default:
        break;
    }
  
    // Quantity impact
    const qty = parseInt(quantity) || 0;
    const multiplier = Math.min(qty / 10, 5); // Cap at 5x multiplier
    baseScore += Math.min(qty * 2, 50);
    treesCount *= multiplier;
    waterSaved *= qty;
    plasticReduced *= qty;
    carbonReduced *= qty;
  
    // Disposal method impact
    let disposalMultiplier = 1;
    switch (disposalMethod) {
      case 'recycling':
        disposalMultiplier = 1.5;
        break;
      case 'composting':
        disposalMultiplier = 1.3;
        break;
      case 'collection':
        disposalMultiplier = 1.2;
        break;
      default:
        break;
    }
  
    baseScore *= disposalMultiplier;
  
    // Round all values to 1 decimal place
    const finalScore = Math.round(baseScore);
    const rewardPoints = Math.floor(finalScore / 10);
  
    return {
      sustainabilityScore: finalScore,
      rewardPoints: rewardPoints,
      environmentalImpact: {
        treesPreserved: parseFloat(treesCount.toFixed(1)),
        waterSaved: Math.round(waterSaved), // in liters
        plasticReduced: parseFloat(plasticReduced.toFixed(1)), // in kg
        carbonFootprint: parseFloat(carbonReduced.toFixed(1)), // in kg CO2
        yearlyImpact: {
          treesPreserved: parseFloat((treesCount * 12).toFixed(1)),
          waterSaved: Math.round(waterSaved * 12),
          plasticReduced: parseFloat((plasticReduced * 12).toFixed(1)),
          carbonFootprint: parseFloat((carbonReduced * 12).toFixed(1))
        }
      }
    };
  };