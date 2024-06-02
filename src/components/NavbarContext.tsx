// Importazione dei moduli necessari da React
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definizione dell'interfaccia per le proprietà del contesto NavbarContext
interface NavbarContextProps {
  clicked: boolean;
  toggleClicked: () => void;
}

// Creazione del contesto NavbarContext con valore iniziale undefined
const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

// Definizione del custom hook useNavbar
export const useNavbar = () => {
  // Utilizzo del contesto NavbarContext tramite useContext
  const context = useContext(NavbarContext);
  
  // Verifica se il contesto è definito
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  
  // Restituisce il contesto
  return context;
};

// Definizione del componente NavbarProvider
export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Definizione dello stato locale per il valore "clicked"
  const [clicked, setClicked] = useState(false);

  // Funzione per alternare il valore di "clicked"
  const toggleClicked = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  // Rendering del componente NavbarProvider
  return (
    <NavbarContext.Provider value={{ clicked, toggleClicked }}>
      {children}
    </NavbarContext.Provider>
  );
}