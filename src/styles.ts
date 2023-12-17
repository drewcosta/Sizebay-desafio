import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background: var(--bg-color);

  @media (min-width: 768px){
    padding: 0 16px;
  }
`