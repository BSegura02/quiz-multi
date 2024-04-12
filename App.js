import React from 'react';
import './App.css';
// import ContadorLikes from '/ContadorLikes';
import NombreUsuario from './NombreUsuario';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Contador de Likes</h1>
        <ContadorLikes />
      </header> */}

      <header className="App-header">
        <h1>Nombre de Usuario</h1>
        <NombreUsuario />
      </header>

      
    </div>
  );
}

export default App;
