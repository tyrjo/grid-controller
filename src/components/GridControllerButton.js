import React from 'react';
import '../styles/grid-controller-page.css';

// Since this component is simple and static, there's no parent container for it.
const GridControllerButton = ({id, color, label, onButtonPress, onButtonRelease}) => {
  return (
    <div
      className="button-item"
      key={id}
      onMouseDown={onButtonPress}
      onMouseUp={onButtonRelease}
      style={{backgroundColor: color}}
    >
      {label}
    </div>
  )
};

export default GridControllerButton;
