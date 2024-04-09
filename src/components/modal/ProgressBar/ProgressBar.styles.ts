import styled from "styled-components"
import { ProgressBarStyles } from "./IProgressBar"

export const ProgressBar = styled.div`
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