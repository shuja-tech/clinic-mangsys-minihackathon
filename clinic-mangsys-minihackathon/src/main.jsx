import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import './index.css'
import Home from './Home.jsx'
import LoginSignup from './LoginSignup.jsx'

// Simple routing based on URL hash
const App = () => {
  const [hash, setHash] = useState(window.location.hash);
  
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
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
