import React, { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import "./../styles/form.css";

const FormTwo = ({ onSwitch }) => {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    setShowModal(false);
  };

  return (
    <div className="form-container">
      {showModal && <PrivacyModal version={2} onAccept={handleAccept} />}
      {!showModal && (
        <>
          <form>
            <label>
              Teléfono:
              <input type="tel" name="telefono" required />
            </label>
            <label>
              Dirección:
              <input type="text" name="direccion" required />
            </label>
            <button type="submit">Enviar</button>
          </form>
          <button className="switch-button" onClick={onSwitch}>
            Volver a Formulario con Versión 1
          </button>
        </>
      )}
    </div>
  );
};

export default FormTwo;
