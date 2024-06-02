// Path: /src/components/NewNavbar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavbar } from './NavbarContext';
import '../styles/NewNavbar.css';

// Definizione del componente NewNavbar
const NewNavbar: React.FC = () => {
  // Utilizzo del custom hook useNavbar per accedere al contesto Navbar
  const { clicked, toggleClicked } = useNavbar();

  // Rendering del componente NewNavbar
  return (
    <div className={`NewNavbarContainer ${clicked ? 'clicked' : ''}`} onClick={toggleClicked}>
      <div className="Logo">
        <FontAwesomeIcon icon={faHome} size="2x" />
        <div className="AnimatedText">
          {clicked ? "Il progetto social di Concetta Vairo" : "Concetta Vairo"}
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;