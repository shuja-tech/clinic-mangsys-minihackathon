import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import LoginSignup from './LoginSignup.jsx'

// Simple routing based on URL hash
const App = () => {
  const hash = window.location.hash;
  
  if (hash === '#login' || hash === '#signup') {
    return <LoginSignup />;
  }
  
  return <Home />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
