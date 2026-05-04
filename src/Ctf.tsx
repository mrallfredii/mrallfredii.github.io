import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Ctf.css'
import { MACHINES_DATA } from './data';

const Ctf = () => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [filterPlatform, setFilterPlatform] = useState('');
    const [filterLevel, setFilterLevel] = useState('');
    const [filterOS, setFilterOS] = useState('');

    const filteredMachines = MACHINES_DATA.filter(machine => {
        return (
            machine.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterPlatform === '' || machine.platform === filterPlatform) &&
            (filterLevel === '' || machine.level === filterLevel) &&
            (filterOS === '' || machine.os === filterOS)
        );
    });

    return (
        <div className="container">
            <button onClick={() => navigate(-1)} className="back-btn">
            ← Volver
            </button>

            <h1>Capture the flag</h1>

            {/* --- SECCIÓN DE FILTROS --- */}
            <div className="filters-section">
                <input
                    className='input'
                    type="text" 
                    placeholder="Buscar máquina..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select onChange={(e) => setFilterPlatform(e.target.value)}>
                    <option value="">Todas las plataformas</option>
                    <option value="HackTheBox">HackTheBox</option>
                    <option value="TryHackMe">TryHackMe</option>
                    <option value="VulnHub">VulnHub</option>
                </select>

                <select onChange={(e) => setFilterLevel(e.target.value)}>
                    <option value="">Todos los niveles</option>
                    <option value="Facil">Fácil</option>
                    <option value="Media">Media</option>
                    <option value="Dificil">Difícil</option>
                    <option value="Insane">Insane</option>
                </select>

                <select onChange={(e) => setFilterOS(e.target.value)}>
                    <option value="">Todos los OS</option>
                    <option value="Linux">Linux</option>
                    <option value="Windows">Windows</option>
                </select>                
            </div>

            {/* --- LISTADO DE MÁQUINAS --- */}
            <div className='section_machines'>
                <div className='machines'>
                    {filteredMachines.length > 0 ? (
                        filteredMachines.map(machine => (
                            <div key={machine.id} className="machine-card">
                                <a 
                                    href={machine.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='card-link'
                                >
                                    <h2 className='maquina_name'>{machine.name}</h2>
                                        
                                    <h3 className='plataforma'>
                                        <span className="label">[Plataforma]</span> {machine.platform}
                                    </h3>
                                        
                                    <h3 className='nivel'>
                                        <span className="label">[Nivel]</span> {machine.level}
                                    </h3>
                                        
                                    <h3 className='os'>
                                        <span className="label">[OS]</span> {machine.os}
                                    </h3>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron máquinas con esos filtros</p>
                    )}

                </div>
            </div>

        </div>
    )
}

export default Ctf