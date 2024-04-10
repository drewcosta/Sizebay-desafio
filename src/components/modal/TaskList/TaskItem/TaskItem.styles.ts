import styled from "styled-components";

export const TaskItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 680px;
  max-height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grayBackgroundButton};;
  border-radius: 4px;
`;