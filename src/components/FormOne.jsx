import React, { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import "./../styles/form.css";

const FormOne = ({ onSwitch }) => {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    setShowModal(false);
  };

  return (
    <div className="form-container">
      {showModal && <PrivacyModal version={1} onAccept={handleAccept} />}
      {!showModal && (
        <>
          <form>
            <label>
              Nombre:
              <input type="text" name="nombre" required />
            </label>
            <label>
              Correo electrónico:
              <input type="email" name="email" required />
            </label>
            <button type="submit">Enviar</button>
          </form>
          <button className="switch-button" onClick={onSwitch}>
            Ir a Formulario con Versión 2
          </button>
        </>
      )}
    </div>
  );
};

export default FormOne;
