import styled, { css } from "styled-components";
import { TooltipStyles } from "./ITooltip";

export const Tooltip = styled.span<TooltipStyles>`
  display: block;
  position: absolute;

  ${({ $taskItem }) =>
    $taskItem &&
    css`
      top: 80%;

      width: 75px;
      padding: 5px 0;

      color: ${({ theme }) => theme.colors.whiteBasic};
      background-color: ${({ theme }) => theme.colors.grayMiddle};
      border-radius: 4px;

      font-size: ${({ theme }) => theme.fontSizes.text_sm};
      font-weight: normal;
      font-style: normal;
      text-align: center;

      z-index: 3;
      cursor: pointer;
    `
  }
`;