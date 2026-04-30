import { useNavigate } from 'react-router-dom';
import './Ctf.css'

const Ctf = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <button onClick={() => navigate(-1)} className="back-btn">
            ← Volver
            </button>

            <h1>
                Capture the flag
            </h1>

            (coming soon...)
            <div className='section_machines'>
                <div className='machines'>
                    <h3>Machine X</h3>
                    <h3>Machine Y</h3>
                </div>
            </div>

        </div>
    )
}

export default Ctf