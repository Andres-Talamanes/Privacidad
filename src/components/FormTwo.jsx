import React, { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import "./../styles/form.css";

const FormTwo = ({ onSwitch }) => {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => setShowModal(false);

  return (
    <div className="form-container">
      {showModal && <PrivacyModal version={2} onAccept={handleAccept} />}
      <form>
        <label>CURP:</label>
        <input type="text" placeholder="Ingresa tu CURP" required />
        
        <label>RFC:</label>
        <input type="text" placeholder="Ingresa tu RFC" required />
        
        <label>Correo Electrónico:</label>
        <input type="email" placeholder="Ingresa tu correo" required />
        
        <label>Teléfono:</label>
        <input type="tel" placeholder="Ingresa tu teléfono" required />
        
        <button type="submit">Enviar</button>
        <button type="button" className="switch-button" onClick={onSwitch}>
          Cambiar a Formulario 1
        </button>
      </form>
    </div>
  );
};

export default FormTwo;
