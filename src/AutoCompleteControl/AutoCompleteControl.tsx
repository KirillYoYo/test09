import React, {useDeferredValue, useEffect, useRef, useState} from 'react';
import {CountryInfo, getCountryByName} from "../api/apiService";

const AutoCompleteControl = ({maxHints, store}: any) => {
  const [curText, setCurText] = useState('')
  const [hints, setHints] = useState([] as CountryInfo[])
  const [loading, setLoading] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const deferredCurText = useDeferredValue(curText);

  useEffect(() => {
    const lastWord = deferredCurText.split(' ').slice(-1)[0]
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true)
    getCountryByName(lastWord, signal).then((res) => {
      setHints(res.splice(0, maxHints))
    }).finally(() => {
      controller.abort();
      setLoading(false)
    }).catch((e) => {
    })

    return () => {
      !loading && controller.abort()
    };
  }, [deferredCurText])

  const onChange = (e: any) => {
    setCurText(e.target.value)
    store.changeTextAction(e.target.value)
  }

  const onHintClick = (name: string) => {
    const arr = deferredCurText.split(' ')
    arr.pop()
    arr.push(`${name}`)
    store.changeTextAction(arr.join(' '))
    setHints([])
    textAreaRef?.current?.focus()
  }

  return (
    <div className="auto-complete-control-wp">
      <textarea ref={textAreaRef} onChange={onChange} value={store.text}></textarea>
      <div style={{position: 'relative'}}>
        <div className="hints-select">
          <div className="hints-options">
            {hints.map((hint, i) => {
              return (
                <div
                  onClick={() => onHintClick(hint.name)}
                  className='hint-option'
                  key={i}>{hint.name}
                  {hint.fullName}
                  <img src={hint.flag} alt="#"/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteControl;