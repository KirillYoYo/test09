import React from "react";
import "./App.css";
import ButtonControl from './ButtonControl/ButtonControl'
import AutoCompleteControl from './AutoCompleteControl/AutoCompleteControl'
import {observer} from "mobx-react";
import {toJS} from 'mobx'
import {useGetBkg} from "./helpers/hooks";
import ButtonControlStore from "./ButtonControl/ButtonControlStore";
import {ButtonProps} from "./ButtonControl/ButtonControl.types";

const storeBtn1 = new ButtonControlStore()
const storeBtn2 = new ButtonControlStore()
const storeAutoComplete = new ButtonControlStore()

const App = (observer(() => {

  const bkgStyle = useGetBkg()

  function createButton (store: ButtonControlStore, buttons: ButtonProps[]) {
    return observer(() => {
      return (
        <ButtonControl
          store={toJS(store)}
          buttons={buttons}
        />
      )
    })
  }

  const Btn1 = createButton(storeBtn1, [
    {position: 'right', callback: () => storeBtn1.changeTextAction('')},
    {position: 'right', callback: () => storeBtn1.changeTextAction('Hello world!')},
  ])
  const Btn2 = createButton(storeBtn2, [
    {position: 'right', callback: () => alert(storeBtn2.text)},
    {position: 'left', callback: () => /^-?\d+$/.test(storeBtn2.text) && alert(storeBtn2.text)}
  ])

  return (
    <>
      <div className='content'>
        <div className="button-control-wp">
          <Btn1 />
          <Btn2 />
        </div>
        <AutoCompleteControl store={storeAutoComplete} maxHints={3} />
        <AutoCompleteControl store={storeAutoComplete} maxHints={10} />
      </div>
      <div style={{background: bkgStyle}} className="bkg"></div>
    </>
  );
}))

export default App;
