import React from 'react';
import '../styles/grid-controller-page.css';

// Since this component is simple and static, there's no parent container for it.
const GridControllerButton = ({id, color, label, onButtonPress, onButtonRelease}) => (
  <div
    className="button-item"
    key={id}
    onMouseDown={onButtonPress}
    onMouseUp={onButtonRelease}
    style={{backgroundColor: color}}
  >
    {label}
    <audio
      src={require('../audio/369428__cabled-mess__small-gong-soft-hit-raw.wav')}
      preload="auto"
      loop
    />
  </div>
);

export default GridControllerButton;
