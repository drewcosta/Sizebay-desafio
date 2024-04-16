import * as S from './InputText.styles'
import { InputProps } from './InputText.types'

export function ModalInputText(props: InputProps) {
  return (
    <S.InputText type='text' {...props} />
  )
}