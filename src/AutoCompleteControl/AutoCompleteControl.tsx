import React, {useState} from 'react';

const AutoCompleteControl = ({maxHints}: any) => {
  const [curText, setCurText] = useState('')

  const onChange = (e: any) => {
    setCurText(e.target.value)
  }

  return (
    <div className="auto-complete-control-wp">
      <textarea onChange={onChange} value={curText}></textarea>
      <div>1</div>
    </div>
  );
};

export default AutoCompleteControl;