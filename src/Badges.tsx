import './Badges.css'

const Badges = () => {
  return (
    <div className="badges">
        <br />
        <br />
        <hr></hr>
        <h1>Insignias 🏆</h1>
        <br />
        <br />
        <div className='links'>
          <a href="https://tryhackme.com/p/mrallfredii" target="_blank">
              <img src="https://tryhackme-badges.s3.amazonaws.com/mrallfredii.png" width={300} height={80}/>
          </a>
          <br />
          <br />

          <a href="https://tryhackme.com/p/mrallfredii" target="_blank">
            <img src="./src/assets/thm.png" width={300} height={160}/>
          </a>

          <a href="https://profile.hackthebox.com/profile/019daa3e-ef99-718b-9f2e-dc6b621b5d3b" target="_blank">
            <img src="./src/assets/htb.png" width={300} height={160}/>
          </a>
        </div>

        <br />
        <br />
    </div>
  )
}

export default Badges