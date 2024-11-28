import React, { useState } from "react";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import "./styles/App.css";

const App = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const switchToFormOne = () => setCurrentForm(1);
  const switchToFormTwo = () => setCurrentForm(2);

  return (
    <div className="app-container">
      <h1>Bienvenido al sitio de aviso de privacidad</h1>
      {currentForm === 1 ? (
        <FormOne onSwitch={switchToFormTwo} />
      ) : (
        <FormTwo onSwitch={switchToFormOne} />
      )}
    </div>
  );
};

export default App;
