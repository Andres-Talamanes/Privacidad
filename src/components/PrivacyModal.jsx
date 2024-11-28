import React from "react";
import "./../styles/modal.css";

const PrivacyModal = ({ version, onAccept }) => {
  const privacyTexts = {
    1: `
      Aviso de Privacidad (Versión 1)
      De conformidad con el Artículo 3 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO), 
      este aviso informa sobre los principios de protección de datos personales: licitud, finalidad, proporcionalidad y consentimiento. 
      Sus datos serán tratados conforme a estos principios.
    `,
    2: `
      Aviso de Privacidad (Versión 2)
      De acuerdo con el Artículo 16 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO), 
      este aviso detalla las obligaciones de proteger sus datos personales contra pérdida, alteración, destrucción o uso no autorizado.
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
