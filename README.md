# 🎯 SIP Buddy - AI-Powered Mutual Fund & SIP Investment Planner

<div align="center">

![SIP Buddy](https://sipbuddy.vercel.app/logoFull.png)

**Your intelligent companion for smart SIP and mutual fund investments**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.5-orange)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

[Live Demo](https://sipbuddy.vercel.app) 

</div>

---

## 📖 About SIP Buddy

SIP Buddy is a comprehensive web application that leverages AI to provide personalized Systematic Investment Plan (SIP) recommendations and mutual fund investment strategies. Built with Next.js 16 and powered by Google's Gemini AI, it helps users make informed investment decisions based on their financial profile, risk tolerance, and investment goals.

### 🌟 Key Features

#### 💡 AI-Powered Investment Planning
- **Personalized SIP Recommendations**: Get custom investment plans based on your monthly income, age, risk tolerance, and goals
- **Smart Asset Allocation**: AI-driven portfolio distribution across equity, debt, and hybrid funds
- **Growth Projections**: Visualize your investment growth with realistic projections (conservative, expected, aggressive scenarios)
- **Fund Recommendations**: Curated mutual fund suggestions with performance metrics and expense ratios

#### 📊 Investment Calculators 
- **SIP Calculator**: Calculate returns on systematic monthly investments with step-up options and inflation adjustments
- **Lumpsum Calculator**: Analyze one-time investment returns across different market scenarios
- **SWP Calculator**: Plan systematic withdrawals for retirement or regular income needs
- **Income Tax Calculator (FY 2024-25)**: 
  - Compare Old vs New tax regime side-by-side
  - Calculate tax liability with all deductions (80C, 80D, HRA, Home Loan)
  - Automatic regime recommendation based on tax savings
  - Section 87A rebate support
  - Surcharge and cess calculations for high-income earners
- **Smart Search**: All calculator pages include search functionality for easy filtering

#### 📚 Financial Education
- **Interactive Learning**: Comprehensive guides on mutual funds, SIP, asset allocation, and tax-saving
- **FinIQ Challenge Quiz**: Test your financial knowledge with AI-powered quizzes
- **Three Quiz Modes**:
  - **Relaxed**: Unlimited time to learn at your pace
  - **Speed Run**: 5 minutes for 10 questions for quick practice
  - **Blitz**: 45 seconds per question for ultimate challenge
- **Searchable Content**: Find articles instantly with built-in search
- **10 Comprehensive FAQs**: Common questions answered on homepage

#### 👤 User Management
- **Firebase Authentication**: Secure login with Email/Password and Google OAuth
- **Profile Management**: Update display name, email verification, and password
- **Profile Picture Upload**: Upload custom profile pictures with automatic compression to 25KB (Cloudinary integration)
- **Plan Management**: Save, view, and manage multiple investment plans with search functionality

#### 🤖 AI Assistant
- **Conversational Chatbot**: Get instant answers about your investment plans and financial queries
- **Voice Support**: Text-to-speech for AI responses
- **Context-Aware**: Understands your current plan and provides relevant insights

#### 📱 Modern UI/UX
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Light Theme**: Sleek, modern interface with excellent visual hierarchy
- **PWA Ready**: Progressive Web App with offline capabilities and installable
- **Enhanced Onboarding Tour**: Interactive first-time user guidance with emojis and detailed descriptions
- **3D Rotating Cube**: Interactive feature carousel on homepage
- **Search Everywhere**: Search bars on calculators, tools, and plans pages

#### 🔍 SEO & Discovery
- **17 Indexed Pages**: Comprehensive sitemap for better search engine visibility
- **Unique Meta Tags**: Each page has optimized title, description, and keywords
- **Structured Routes**: Dedicated pages for each calculator and tool (e.g., `/calculator/sip`, `/more/find-advisor`)
- **Backward Compatibility**: Old query parameter URLs automatically redirect to new routes
- **Auth Page Indexed**: Login page discoverable via searches like "SIP Buddy login"

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts for data visualization
- **State Management**: React Context API

### Backend & Services
- **AI**: Google Gemini API (@google/genai)
- **Authentication**: Firebase Authentication
- **Database**: Cloud Firestore
- **Storage**: Cloudinary (profile pictures)
- **Analytics**: Vercel Analytics & Speed Insights

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript 5.8
- **Build Tool**: Next.js Turbopack

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Firebase Project** ([Create one here](https://console.firebase.google.com/))
- **Google Gemini API Key** ([Get it here](https://makersuite.google.com/app/apikey))
- **Cloudinary Account** (Optional, for profile picture uploads - [Sign up here](https://cloudinary.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key_here

   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Cloudinary (Optional - for profile picture uploads)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

   > **Tip**: Copy from `.env.local.example` and fill in your actual credentials

4. **Configure Firebase**
   
   - Update `firebaseConfig.ts` with your Firebase project details
   - Set up Firestore security rules from `firestore.rules`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
SIP-Buddy/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── delete-profile-picture/
│   │   └── upload-profile-picture/
│   ├── auth/                     # Authentication page
│   ├── calculator/               # Investment calculators
│   ├── dashboard/                # User dashboard
│   ├── learn/                    # Educational content
│   ├── my-plans/                 # Saved investment plans
│   ├── planner/                  # AI planner interface
│   ├── profile/                  # User profile
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── AboutContent.tsx
│   ├── AuthContent.tsx
│   ├── Chatbot.tsx
│   ├── DashboardContent.tsx
│   ├── LearnContent.tsx
│   ├── PlannerContent.tsx
│   ├── ProfileContent.tsx
│   ├── *Calculator.tsx           # SIP, Lumpsum, SWP calculators
│   └── tools/                    # Specialized tool components
├── context/                      # React Context
│   └── GlobalContext.tsx         # Global state management
├── services/                     # Service layer
│   ├── firebase.ts               # Firebase initialization
│   ├── firestoreService.ts       # Firestore operations
│   ├── geminiService.ts          # Gemini AI integration
│   └── authService.ts            # Authentication logic
├── assets/                       # Static assets
├── public/                       # Public files
├── types.ts                      # TypeScript type definitions
└── firestore.rules               # Firestore security rules
```

---

## 🔑 Key Components

### AI Planner
The core feature that generates personalized investment plans:
1. User inputs financial profile (income, age, goals, risk tolerance)
2. Gemini AI analyzes and creates customized recommendations
3. Generates asset allocation, fund suggestions, and growth projections
4. Provides downloadable PDF reports

### Dashboard
Interactive visualization of investment plans:
- Asset allocation pie charts
- Growth projection graphs (10-year forecast)
- Fund performance metrics
- Plan comparison tools

### Learn Section
Comprehensive financial education platform:
- Articles on mutual funds, SIP strategies, tax savings
- Interactive quizzes with three difficulty levels
- Progress tracking and scoring system

### Profile Management
Complete user account management:
- Email/Password and Google OAuth authentication
- Email verification system
- Profile picture upload with automatic optimization
- Secure password change functionality

---

## 🔐 Security & Privacy

- **Firebase Authentication**: Industry-standard user authentication
- **Firestore Security Rules**: Row-level access control
- **Environment Variables**: Sensitive data stored securely
- **API Key Protection**: Server-side API keys never exposed to client
- **Input Validation**: All user inputs sanitized and validated
- **HTTPS Only**: Secure communication in production

---

## 📱 Progressive Web App (PWA)

SIP Buddy is PWA-ready with:
- Offline capability
- Install to home screen
- Fast loading with service workers
- App-like experience on mobile devices

---

## 🎨 UI/UX Highlights

- **Modern Design**: Clean, intuitive interface with gradient accents
- **Responsive Layout**: Seamless experience across all devices
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized for speed with Next.js and Vercel
- **Visual Feedback**: Loading states, success/error messages, tooltips

---

## 💻 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Building for Production

```bash
npm run build
npm start
```

The app will be optimized and ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/SIP-Buddy)

1. Push your code to GitHub
2. Import repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add all environment variables from `.env.local` to your hosting platform's environment configuration.

---

## 📊 Features by Page

| Page | Key Features |
|------|-------------|
| **Home** | Hero section, feature highlights, getting started guide |
| **Planner** | AI-powered plan generation, customization options |
| **Dashboard** | Plan visualization, charts, fund details, PDF export |
| **Calculator** | SIP/Lumpsum/SWP calculators with detailed breakdowns |
| **Learn** | Educational articles, interactive quizzes |
| **My Plans** | Saved plans management, comparison tool |
| **Profile** | Account settings, profile picture, password management |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Raghav Gupta**

---

## 🙏 Acknowledgments

- Google Gemini AI for intelligent investment recommendations
- Firebase for authentication and database services
- Recharts for beautiful data visualizations
- Tailwind CSS for modern styling
- Cloudinary for image optimization
- Vercel for hosting and analytics

---

## 📞 Support

For support, email contact.sipbuddy@gmail.com or open an issue on GitHub.

---

<div align="center">

Made with ❤️ for smart investors

[Website](https://sipbuddy.vercel.app)

</div>
