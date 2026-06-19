import './Badges.css'
import thmLogo from '../src/assets/thm.png'; 
import htbLogo from '../src/assets/htb.png';
import { useEffect, useState } from 'react';

interface CredentialData {
  name: string;
  image: string;
}

const Badges = () => {
  const [badge, setBadge] = useState<CredentialData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/credential-w3cvc-3e12a4ad-d124-4b08-974f-33a462d0bb83.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de certificación');
        }
        return response.json();
      })
      .then((data) => {
        setBadge(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error cargando el badge:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando certificación...</p>;
  if (!badge) return <p>No se pudo cargar la información.</p>;

  return (
    <>
      <div className="badges">
          <br />
          <br />
          <hr></hr>
          <h1>Insignias 🏆</h1>
          <br />
          <br />

          <div className='certifications'>
            <div className="badge-card">
              <img 
                src={badge.image} 
                alt={badge.name} 
                style={{ width: '100%', height: 'auto', marginBottom: '12px' }} 
              />
            </div>
          </div>

          <div className='links'>
            <a href="https://tryhackme.com/p/mrallfredii" target="_blank">
                <img src="https://tryhackme-badges.s3.amazonaws.com/mrallfredii.png" width={300} height={80}/>
            </a>
            <br />
            <br />

            <a href="https://tryhackme.com/p/mrallfredii" target="_blank">
              <img src={thmLogo} alt="TryHackMe" width={300} height={160}/>
            </a>

            <a href="https://profile.hackthebox.com/profile/019daa3e-ef99-718b-9f2e-dc6b621b5d3b" target="_blank">
              <img src={htbLogo} alt="HackTheBox" width={300} height={160}/>
            </a>
          </div>

          <br />
          <br />
      </div>
    </>
  )
}

export default Badges