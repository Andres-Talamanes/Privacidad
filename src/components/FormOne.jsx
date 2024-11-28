import React, { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import "./../styles/form.css";

const FormOne = ({ onSwitch }) => {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => setShowModal(false);

  return (
    <div className="form-container">
      {showModal && <PrivacyModal version={1} onAccept={handleAccept} />}
      <form>
        <label>Nombre Completo:</label>
        <input type="text" placeholder="Ingresa tu nombre completo" required />
        
        <label>Dirección:</label>
        <input type="text" placeholder="Ingresa tu dirección" required />
        
        <label>Fecha de Nacimiento:</label>
        <input type="date" required />
        
        <button type="submit">Enviar</button>
        <button type="button" className="switch-button" onClick={onSwitch}>
          Cambiar a Formulario 2
        </button>
      </form>
    </div>
  );
};

export default FormOne;
