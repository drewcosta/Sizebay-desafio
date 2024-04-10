import styled from 'styled-components';
import { InputStyles } from './IInputText';

export const InputText = styled.input<InputStyles>`
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  background: ${({ theme, $taskItem }) => $taskItem && theme.colors.whiteALittleMoreStrength};
  
  & + button{
    border-radius: 0 4px 4px 0;
  }

  &:focus{
    background: ${({ theme }) => theme.colors.whiteBasic};
    cursor: text;
  }
`