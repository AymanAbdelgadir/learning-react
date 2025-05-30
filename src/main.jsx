import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import EventDemo from "./challenges/Events/exercise/EventDemo.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <EventDemo />
  </StrictMode> )
