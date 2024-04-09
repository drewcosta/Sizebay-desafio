import * as S from './ProgressBar.styles';
import { ProgressBarProps } from "./IProgressBar";

export function ModalProgressBar({ percentage }: ProgressBarProps){
  return(
    <S.ProgressBar>
      <S.ProgressBarPercentage width={percentage} />
    </S.ProgressBar>
  )
}