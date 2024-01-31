export interface ButtonProps {
  position: 'left' | 'right',
  callback: () => void
}

export interface ButtonControlStore {
  text: string,
  changeTextAction: (text: string) => void
}

export interface ButtonControlProps {
  store: ButtonControlStore,
  buttons: ButtonProps[] | [],
}