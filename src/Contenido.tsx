import './Contenido.css'

interface ContenidoProps {
  enlace: string;
  texto: string;
}

const Contenido = ({ enlace, texto }: ContenidoProps) => {
  return (
    <div className='contenido'>
        <a 
          href={enlace} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {texto}
        </a>
    </div>
  )
}

export default Contenido