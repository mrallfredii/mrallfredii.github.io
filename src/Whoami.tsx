import './Whoami.css'
import { useNavigate } from 'react-router-dom';

const Whoami = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Volver
        </button>

        <div className="card">
            <h1>whoami</h1>
            <span className="terminal-user">alfred@root:</span> cat whoami.txt
            <p>
              ------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              Hola! Mi nombre es Alfred y soy de España!
            </p>
            <p>
                Soy ingeniero informático apasionado por la tecnología y el aprendizaje constante
            </p>
            <p>
                Actualmente estoy especializándome en ciberseguridad, explorando áreas como hacking ético, pentesting y seguridad en sistemas
            </p>
            <p>
                Siempre busco mejorar mis habilidades y mantenerme al día con las últimas tendencias en seguridad informática
            </p>
            <p>
              ------------------------------------------------------------------------------------------------------------------------------
            </p>
        </div>

        <div className='socials'>
          <h2>
            Contactar
          </h2>
          
          <div className="social-links">
            <a
              href="https://x.com/mrallfredii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              X (Twitter)
            </a>

            <a
              href="https://github.com/mrallfredii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              GitHub
            </a>

            <a
              href="https://youtube.com/mrallfredii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              YouTube
            </a>
          </div>

        </div>
    </div>
  )
}

export default Whoami