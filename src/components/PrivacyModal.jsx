import React from "react";
import "./../styles/modal.css";

const PrivacyModal = ({ version, onAccept }) => {
  const privacyTexts = {
    1: `
      Aviso de Privacidad (Versión 1)
      De conformidad con el Artículo 4 de la LGPDPPSO, usted tiene derecho a conocer, rectificar, cancelar y oponerse al uso de sus datos personales (Derechos ARCO). 
      Su información será tratada exclusivamente para los fines señalados en este formulario.
    `,
    2: `
      Aviso de Privacidad (Versión 2)
      De acuerdo con el Artículo 21 de la LGPDPPSO, se implementan medidas administrativas, físicas y técnicas para proteger sus datos personales contra acceso no autorizado, pérdida o alteración.
    `,
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Aviso de Privacidad</h2>
        <p>{privacyTexts[version]}</p>
        <button className="accept-button" onClick={onAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;
