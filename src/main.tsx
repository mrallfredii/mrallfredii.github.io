import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Alfred from './Alfred.tsx'
import Contenido from './Contenido.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Alfred />

    <Contenido 
      enlace="https://chatter-griffin-2ff.notion.site/Hacking-Course-31ea4a2de9b4805792d9f8c47a954407" 
      texto="Mis Apuntes de Hacking" 
    />

    <Contenido 
      enlace="coming soon" 
      texto="coming soon" 
    />
  </StrictMode>,
)
