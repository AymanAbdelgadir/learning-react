import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import Weather from './challenges/Conditional Rendering/Weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Weather />
  </StrictMode> )
