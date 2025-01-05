import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PetStore from './components/pet-store/PetStore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>Welcome to my website</p>
    <PetStore/>
  </StrictMode>,
)
