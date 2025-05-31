import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import Counter from './challenges/State/exercise/Counter.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Counter />

  </StrictMode> )
