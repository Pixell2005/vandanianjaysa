import './footer.css';
import { FaInstagram, FaSpotify, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Kpop Muzic. All rights reserved.</p>
      <p>Made with love by Vandaianjaysa Group</p>

      <div className="social-links">
        <a
          href="https://www.instagram.com/shtpy_v?igsh=MWpmNTZzdWo1aGpkYw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://open.spotify.com/user/6jgi7gki3wywnt8ps1ue1v82c?si=M42exbd5QCWhfyCWcwBCHQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <FaSpotify />
        </a>
        <a
          href="https://www.facebook.com/share/1CUHyjXPYQ/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/vanessasahetapy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
