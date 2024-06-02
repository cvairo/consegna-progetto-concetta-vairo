// File: /src/components/NewApp.tsx
import React, { useState, useEffect } from 'react';
import NewNavbar from './NewNavbar';
import NewForm from './NewForm';
import { NavbarProvider } from './NavbarContext';
import '../styles/NewGlobalStyle.css';
import '../styles/NewApp.css';

// Definizione del componente NewApp
const NewApp: React.FC = () => {
  // Definizione dello stato locale per gli elementi
  const [items, setItems] = useState<{ nome: string; tipologia: string; descrizione: string; }[]>([]);

  // Effetto per caricare gli elementi salvati nel localStorage all'avvio
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Funzione per aggiungere un nuovo elemento alla lista
  const addItem = (item: { nome: string; tipologia: string; descrizione: string; }) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  // Funzione per rimuovere un elemento dalla lista
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  // Rendering del componente NewApp
  return (
    <NavbarProvider>
      <div className="NewAppBackground">
        <div className="NewAppContainer">
          <NewNavbar />
          <NewForm addItem={addItem} />
          {items.map((item, index) => (
            <div className="NewItemBox" key={index}>
              <p><strong>Post:</strong> {item.nome}</p>
              <p><strong>Tipo:</strong> {item.tipologia}</p>
              <p><strong>Descrizione:</strong> {item.descrizione}</p>
              <button className="NewRemoveButton" onClick={() => removeItem(index)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </NavbarProvider>
  );
};

export default NewApp;