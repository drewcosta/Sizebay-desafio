import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;

  width: 100%;
  height: 100%;
  max-width: 680px;

  @media (max-width: ${({ theme }) => theme.breakpoints.Mobile}){
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 10px;
  }
`

export const FilterButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

export const InputText = styled.input`
  padding: 10px 16px;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 48px;
  
  border-radius: 4px;
`

