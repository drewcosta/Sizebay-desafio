import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: ${props => props.theme.colors.bg_dark_grey};

  @media (max-width: 768px){
    padding: 16px 18px;
  }
`