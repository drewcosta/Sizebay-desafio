import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 280px;
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;  
  gap: 8px;

  width: 100%;
  height: 216px;
  max-width: 680px;
  max-height: 216px;

  overflow-y: auto;

  @media (max-width: ${({theme}) => theme.breakpoints.Mobile}) {
    height: 272px;
    max-height: 272px;
  }
`