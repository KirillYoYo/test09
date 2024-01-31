import React from 'react';
import {ButtonControlProps} from "./ButtonControl.types";

const ButtonControl = ({store, buttons}: ButtonControlProps) => {

  return (
    <div>
      <input
        style={{order: 1}}
        type="text"
        value={store.text}
        onChange={(e) => store.changeTextAction(e.target.value)}
        placeholder={'pls put some value here:'}
      />
      {
        buttons.map((button, i) => (
          <button
            style={{order: button.position === 'left' ? 0 : 2}}
            key={i}
            onClick={() => button.callback()}
          >
            Button
          </button>
        ))
      }
    </div>
  );
};

export default ButtonControl;