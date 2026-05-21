import { useNavigate } from 'react-router-dom';
import './Scripts.css'

const Scripts = () => {

    const navigate = useNavigate();

  return (
    <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
            ← Volver
        </button>

        <h1>Scripts</h1>

        <div className='script'>

            <h2>Ip sweeper [Bash]</h2>

            <pre><code className="language-bash">
                {`
                #!/bin/bash

                for ip in $(seq 1 254); do
                    timeout 1 ping -c 1 192.168.1.$ip > /dev/null && echo "[+] Host Activo: 192.168.1.$ip" &
                done; wait
                `}
            </code></pre>

        </div>


        <div className='script'>

            <h2>Port sweeper [Bash]</h2>

            <pre><code className="language-bash">
                {`
                #!/bin/bash

                for port in $(seq 0 65535); do
                    echo '' > /dev/tcp/IP/$port 2>/dev/null && echo "[+] Puerto Abierto: $port" &
                done; wait
                `}
            </code></pre>

        </div>

    </div>
  )
}

export default Scripts