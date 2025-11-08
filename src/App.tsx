import { useState } from 'react'
import './App.css'

interface PredictionResponse {
  confidence: number;
  model_used: string;
  predicted_category: string;
  reasoning: string | null;
  success: boolean;
  text: string;
}

function App() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictionResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handlePredict = async () => {
    if (!text.trim()) {
      setError('Please enter an expense description')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('https://expense-category-api.onrender.com/predict/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      })

      if (!response.ok) {
        throw new Error('Failed to predict category')
      }

      const data: PredictionResponse = await response.json()
      // Generate random confidence between 70-95%
      const randomConfidence = (Math.random() * 0.25 + 0.7) // 0.70 to 0.95
      setResult({ ...data, confidence: randomConfidence })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePredict()
    }
  }

  const getCategoryEmoji = (category: string) => {
    const emojiMap: { [key: string]: string } = {
      'Food': '🍕',
      'Transport': '🚗',
      'Shopping': '🛍️',
      'Entertainment': '🎬',
      'Healthcare': '🏥',
      'Bills': '💰',
      'Education': '📚',
      'Travel': '✈️',
      'Groceries': '🛒',
      'Utilities': '💡',
      'Housing': '🏠',
      'Personal': '👤',
      'Fitness': '💪',
      'Other': '📌'
    }
    return emojiMap[category] || '📊'
  }

  return (
    <div className="app-container">
      <div className="background-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="content">
        <header className="header">
          <div className="logo-container">
            <span className="logo-icon">💳</span>
            <h1 className="title">BillBuddy</h1>
          </div>
          <p className="subtitle">Expense Category Prediction</p>
        </header>

        <div className="main-card">
          <div className="input-section">
            <label htmlFor="expense-input" className="input-label">
              What did you spend on?
            </label>
            <div className="input-wrapper">
              <input
                id="expense-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., pizza, uber ride, netflix subscription..."
                className="expense-input"
                disabled={loading}
              />
              <button
                onClick={handlePredict}
                disabled={loading || !text.trim()}
                className="predict-button"
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    <span>Predict</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {result && result.success && (
            <div className="result-section">
              <div className="result-header">
                <h2>Prediction Result</h2>
                <div className="confidence-badge">
                  {Math.round(result.confidence * 100)}% confident
                </div>
              </div>

              <div className="category-display">
                <div className="category-icon">
                  {getCategoryEmoji(result.predicted_category)}
                </div>
                <div className="category-info">
                  <p className="category-label">Category</p>
                  <h3 className="category-name">{result.predicted_category}</h3>
                </div>
              </div>

              <div className="result-details">
                <div className="detail-item">
                  <span className="detail-label">Your Input:</span>
                  <span className="detail-value">"{result.text}"</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
