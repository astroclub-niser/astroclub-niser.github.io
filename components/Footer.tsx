import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faDiscord, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
library.add(faGithub, faFacebook, faInstagram, faDiscord, faXTwitter, faYoutube)

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer id='contact'>
      <div className='footer-contact'>
        <div className='mail'><h1>Contact Us</h1>
          <p><a href='mailto:astroclub@niser.ac.in'>astroclub@niser.ac.in</a></p>
        </div>
        <div className='address'>School of Physical Sciences<br/>NISER,
          Bhubaneswar<br/>
          P.O. Jatni, Khurda – 752050<br/>
          Odisha, India</div>
      </div>
      <div className='footer-socials'>
        <h2>Join us on ~</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/astroclub_niser/" target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faInstagram} className="fa-2x rounded-lg p-2 social-icons" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@niserastronomyclub4382" target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faYoutube} className="fa-2x rounded-lg p-2 social-icons" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/gBBDmXMc8P" target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faDiscord} className="fa-2x rounded-lg p-2 social-icons" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/NISERastroclub/" target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faFacebook} className="fa-2x rounded-lg p-2 social-icons" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/astroclub_niser" target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faXTwitter} className="fa-2x rounded-lg p-2 social-icons" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/astroclub-niser" target="_blank" rel="noreferrer" className="mx-sm-2 mx-1">
              <FontAwesomeIcon icon={faGithub} className="fa-2x rounded-lg p-2 social-icons" style={{ backgroundColor: '#0000' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-copyright'><p>&copy; {year} NISER Astronomy Club</p></div>
    </footer>
  )
}

export default Footer