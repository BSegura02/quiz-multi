import React, { useState } from 'react';
import './NombreUsuario.css';

const NombreUsuario = () => {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="nombre-usuario">
      <h2>Bienvenido, {nombre || 'invitado'}!</h2>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={handleChange}
      />
    </div>
  );
};

export default NombreUsuario;