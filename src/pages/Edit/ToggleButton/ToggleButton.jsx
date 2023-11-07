import React, { useState } from 'react';
import "./ToggleButton.css";
function ToggleButton({handleVieworEdit}) {
  const [activeButton, setActiveButton] = useState('view'); // 'view' is the default active button

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    handleVieworEdit();
  };

  return (
    <div style={{display:"flex",flexDirection:"row" , justifyContent:"center", marginBottom:"5px"}}>
      <button
        className={`button ${activeButton === 'view' ? 'active' : ''}`}
        onClick={() => handleButtonClick('view')}
      >
        View
      </button>
      <button
        className={`button ${activeButton === 'edit' ? 'active' : ''}`}
        onClick={() => handleButtonClick('edit')}
      >
        Edit
      </button>
    </div>
  );
}

export default ToggleButton;
