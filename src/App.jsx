import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Home />
      </div>
    </Router>
  )
}

export default App