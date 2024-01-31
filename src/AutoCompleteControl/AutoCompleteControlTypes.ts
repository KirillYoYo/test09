export interface AutoCompleteControlStore {
  text: string,
  changeTextAction: () => void
}

export interface AutoCompleteControlProps {
  store: AutoCompleteControlStore,
  buttons: [],
}