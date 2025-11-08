# 💳 BillBuddy - Expense Category Prediction

A beautiful, modern, and responsive web application that uses AI to predict expense categories from text descriptions. Simply enter what you spent on, and let AI categorize it for you!

![BillBuddy](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## ✨ Features

- 🎨 **Beautiful Modern UI** - Gradient background with animated floating blobs and glassmorphism effects
- 🤖 **AI-Powered Predictions** - Integrates with Gemini AI API for intelligent expense categorization
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Real-time Predictions** - Instant category predictions with confidence scores
- 🎭 **Category Emojis** - Visual representation for different expense categories
- ✨ **Smooth Animations** - Professional animations and transitions throughout
- 🎯 **Simple UX** - Clean, intuitive interface with keyboard support (Enter to predict)

## 🎯 Supported Categories

The app can predict various expense categories including:

- 🍕 Food
- 🚗 Transport
- 🛍️ Shopping
- 🎬 Entertainment
- 🏥 Healthcare
- 💰 Bills
- 📚 Education
- ✈️ Travel
- 🛒 Groceries
- 💡 Utilities
- 🏠 Housing
- 👤 Personal
- 💪 Fitness
- 📌 Other

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ishaant97/Expense-Category-Prediction-Frontend.git
cd Expense-Category-Prediction-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with animations

## 🔌 API Integration

The app integrates with the Expense Category Prediction API:

**Endpoint:** `https://expense-category-api.onrender.com/predict/gemini`

**Request Format:**
```json
{
  "text": "pizza"
}
```

**Response Format:**
```json
{
  "confidence": 0.95,
  "model_used": "gemini_ai",
  "predicted_category": "Food",
  "reasoning": null,
  "success": true,
  "text": "pizza"
}
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Gradient Background** - Beautiful purple to pink gradient
- **Animated Blobs** - Floating background elements for depth
- **Glassmorphism** - Modern frosted glass effect on cards
- **Smooth Transitions** - Professional hover and click animations
- **Loading States** - Animated spinner during predictions
- **Error Handling** - User-friendly error messages
- **Responsive Layout** - Mobile-first design approach

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: < 768px
- Mobile: < 480px

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ishaan**
- GitHub: [@ishaant97](https://github.com/ishaant97)

---

Made with ❤️ and ☕
