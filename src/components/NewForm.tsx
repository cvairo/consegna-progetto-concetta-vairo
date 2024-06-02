// File: /src/components/NewForm.tsx
import React, { useState } from 'react';
import '../styles/NewForm.css';

// Definizione dell'interfaccia per le proprietà del componente NewForm
interface NewFormProps {
  addItem: (item: { nome: string; tipologia: string; descrizione: string; }) => void;
}

// Definizione del componente NewForm
const NewForm: React.FC<NewFormProps> = ({ addItem }) => {
  // Utilizzo dello stato locale per memorizzare i valori degli input
  const [nome, setNome] = useState('');
  const [tipologia, setTipologia] = useState('');
  const [descrizione, setDescrizione] = useState('');

  // Funzione per gestire il submit del form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verifica se tutti i campi sono compilati
    if (nome && tipologia && descrizione) {
      // Chiamata alla funzione addItem per aggiungere l'elemento
      addItem({ nome, tipologia, descrizione });
      // Reset dei campi
      setNome('');
      setTipologia('');
      setDescrizione('');
    }
  };

  // Funzione per gestire i cambiamenti degli input
  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Aggiorna lo stato locale con il nuovo valore dell'input
    setter(e.target.value);
  };

  // Rendering del componente NewForm
  return (
    <form className="NewFormContainer" onSubmit={handleSubmit}>
      <div className="NewProfileSection">
        <img className="NewProfileImage" src={`${process.env.PUBLIC_URL}/profile_vairo.png`} alt="Profile" />
      </div>
      <label className="NewLabel">
        Post:
        <input className="NewInput" type="text" value={nome} onChange={handleChange(setNome)} />
      </label>
      <label className="NewLabel">
        Tipo:
        <input className="NewInput" type="text" value={tipologia} onChange={handleChange(setTipologia)} />
      </label>
      <label className="NewLabel">
        Descrizione:
        <textarea className="NewTextarea" value={descrizione} onChange={handleChange(setDescrizione)} />
      </label>
      <button className="NewAddButton" type="submit">Aggiungi</button>
    </form>
  );
};

export default NewForm;