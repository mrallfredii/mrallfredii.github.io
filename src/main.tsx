import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Alfred from './Alfred.tsx'
import Contenido from './Contenido.tsx'
import Whoami from './Whoami.tsx'
import Ctf from './Ctf.tsx'
import Footer from './Footer.tsx'
import Badges from './Badges.tsx'
import ScrollToTop from './ScrollToTop.tsx'
import Scripts from './Scripts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={
          <>

            <Alfred />

            <Contenido 
              enlace="https://chatter-griffin-2ff.notion.site/Hacking-Course-31ea4a2de9b4805792d9f8c47a954407" 
              texto="Metodologías Hacking 📖" 
            />

            <Contenido 
              enlace="ctf" 
              texto="CTF's 🏴" 
            />

            <Contenido
              enlace='/scripts'
              texto='scripts 📃'
            />

            <Contenido 
              enlace="/whoami" 
              texto="whoami 💻" 
            />

            <Badges />

            <Footer />

          </>
        } />

        <Route path='/whoami' element={<Whoami />} />
        <Route path='/ctf' element={<Ctf />} />
        <Route path='/scripts' element={<Scripts />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
