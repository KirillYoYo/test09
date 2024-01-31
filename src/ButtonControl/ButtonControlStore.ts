import {makeAutoObservable} from 'mobx';

export default class ButtonControlStore {
  text = '';
  changeTextAction = (text: string) => {
    this.text = text;
  };

  constructor() {
    makeAutoObservable(this);
  }
}