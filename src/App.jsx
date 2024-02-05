import React, { useState } from 'react';
import Registro from "./assets/components/Registro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Alert from "/src/assets/components/Alert";

function App() {
  const [error, setError] = useState();

  return (
    <div>
      <Alert mensaje={error?.mensaje} color={error?.color} />
      <Registro error={error} setError={setError} />
    </div>
  );
}

export default App;
