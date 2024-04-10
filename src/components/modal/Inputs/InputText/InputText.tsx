import * as S from './InputText.styles'
import { InputProps } from './IInputText'

export function ModalInputText(props: InputProps) {
  return (
    <S.InputText type='text' {...props} />
  )
}