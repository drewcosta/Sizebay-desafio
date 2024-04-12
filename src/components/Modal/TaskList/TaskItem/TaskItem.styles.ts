import styled from "styled-components";

export const TaskItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 680px;
  max-height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grayBackgroundItem};
  border-radius: 4px;
`;