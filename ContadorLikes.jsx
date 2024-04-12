import React, { useState } from 'react';
import './ContadorLikes.css';

const ContadorLikes = () => {
  const [likes, setLikes] = useState(0);

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };

  const disminuirLikes = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="contador-likes">
      <h2>Likes: {likes}</h2>
      <button onClick={aumentarLikes}>Aumentar</button>
      <button onClick={disminuirLikes}>Disminuir</button>
    </div>
  );
};

export default ContadorLikes;