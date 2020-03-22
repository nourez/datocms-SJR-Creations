import React, { useState } from 'react';

const Subheader = ({ children, propTest }) => {
  const [isPlate, setIsPlate] = useState(false);
  return (
    <header className="header">
        <button className={isPlate ? 'button' : 'button-active'} onClick={() => setIsPlate(false)}>
          Crochet
        </button>
        <button className={isPlate ? 'button-active' : 'button'} onClick={() => setIsPlate(true)}>
          Plates
        </button>
      <div>{children}</div>
    </header>
  );
};

export default Subheader;