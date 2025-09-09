 EcoCircle Platform Documentation
#Dashboard function is hardcoded.It is not based on the real time data
Overview
EcoCircle is a comprehensive sustainable e-commerce platform that promotes environmental consciousness through various innovative features. The platform combines marketplace functionality with educational resources and sustainable living solutions.
Core Features

 1. Sustainable Menstrual Health Hub
Sustainable Product Marketplace:
- Eco-friendly menstrual cups
- Reusable cloth pads
- Organic cotton tamponsS
- Sterilization and cleaning products
- Product comparison tools
- Environmental impact calculator for each product

 Educational Resources:
- Menstrual health awareness articles
- Product usage guides and tutorials
- Hygiene best practices
- Environmental impact of traditional vs. sustainable products
- Myth-busting content
- Expert interviews and advice
- Community experiences and testimonials

 Recycling Program:
- Collection points for disposable products
- Proper disposal guidelines
- Waste reduction tracking
- Partnership with recycling facilities
- Impact measurement dashboard
- Community recycling challenges
- Rewards for participation
Subscription Services:
- Customizable monthly boxes
- Flexible delivery schedules
- Product mix optimization
- Cost savings calculations
- Carbon footprint reduction tracking
- Easy modification and cancellation
- Special member benefits and discounts

2. Reuse and Recycle Hub:
- Item exchange marketplace
- Recycling guides and tips
- Local recycling center locator
- Waste reduction tracking
- Community recycling challenges

3. Best from Waste Marketplace:
- Upcycled product listings
- DIY transformation guides
- Artisan and creator profiles
- Product impact metrics
- Before/after showcases

4. Interactive Dashboard:
- Personal environmental impact metrics
- Sustainability score
- User activity tracking
- Carbon footprint calculator
- Achievement badges
- Impact visualization

 Technical Stack:
- Frontend: React.js
- Backend: Firebase
- Authentication: Firebase Auth
- Database: Firebase Firestore
- Hosting: Vercel
- UI Components: Lucid React

## Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/Saksheee1408/SAMBHAV_2024
cd SAMBHAV_2024
```

2. Install dependencies
```bash
npm install
```

3. Firebase Setup
- Create a new Firebase project
- Enable Authentication and Firestore
- Add Firebase configuration to your project
```javascript
// src/firebase/config.js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

4. Install Lucid React Components
```bash
npm install lucide-react
```

5. Start the development server
```bash
npm start
```

## Deployment
Current deployment: https://sambhav-2024-sbcx.vercel.app/(Firebase

### Deployment Steps
1. Build the project
```bash
npm run build
```

2. Deploy to Vercel
- Connect your GitHub repository to Vercel
- Configure build settings
- Deploy

## Feature Implementation Guidelines

### Menstrual Health Section Implementation

#### Product Marketplace Features
- Product catalog with detailed specifications
- Comparison tool implementation
- Review and rating system
- Environmental impact calculator
- Inventory management system
- Search and filter functionality

#### Educational Content Management
- Content management system for articles
- Video tutorial hosting
- Interactive learning modules
- Expert profile management
- Community forum integration
- Resource library organization

#### Recycling Program Features
- Collection point mapping
- Waste tracking system
- Reward point system
- Partner facility integration
- Impact visualization
- Community engagement tools

 Subscription System
- Subscription plan management
- Delivery schedule system
- Product customization interface
- Payment integration
- Account management features
- Analytics dashboard

 Future Enhancements
- AI-powered product recommendations
- Virtual consultation integration
- Advanced analytics dashboard
- Mobile app development
- International marketplace expansion
- Enhanced impact tracking metrics
- Gamification of sustainable practices
- Community feature expansion

 Known Issues
- Reuse & Recycle page integration pending
- Dashboard optimization needed
- Improvement in Backend
