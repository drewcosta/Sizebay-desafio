import styled, { css } from "styled-components"
import { ProgressBarStyles } from "./IProgressBar"

export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 24px;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 4px;
`
export const ProgressBarPercentage = styled.div<ProgressBarStyles>`
  width: ${({ width }) => width}%;
  height: 24px;
  background: ${({ theme }) => theme.colors.greenTaskBar};
  border-radius: 4px;
`

export const Animation = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 1%;
      left: 75%;
      width: 16vw;
      height: 21.7vh;

      @media (max-width: ${theme.breakpoints.tablets}) {
        bottom: 0;
        left: 85%;
        width: 21vw;
        height: 11.7vh;
      }
    `
  }
`