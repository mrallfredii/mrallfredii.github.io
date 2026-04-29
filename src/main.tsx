import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Alfred from './Alfred.tsx'
import Apuntes from './Apuntes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Alfred />
    <Apuntes />
  </StrictMode>,
)
