import './Contenido.css'
import { Link } from 'react-router-dom';

interface ContenidoProps {
  enlace: string;
  texto: string;
}



const Contenido = ({ enlace, texto }: ContenidoProps) => {
  const esExterno = enlace.startsWith('http');

  return (
    <div className='contenido'>
      {esExterno ? (
        <a 
          href={enlace} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {texto}
        </a>
      ) : (
        <Link to={enlace}>
          {texto}
        </Link>
      )}
    </div>
  );
};



export default Contenido