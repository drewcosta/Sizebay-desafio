import * as S from './ProgressBar.styles';
import { ProgressBarProps } from "./IProgressBar";
import { LottieAnimation } from '../LottieAnimation';
import Confetti from '../../../assets/Confetti.json';

export function ModalProgressBar({ percentage }: ProgressBarProps) {
  return (
    <S.ProgressBar>
      <S.ProgressBarPercentage width={percentage} />
      <S.Animation>
        {percentage === 100 && <LottieAnimation animation={Confetti} />}
      </S.Animation>
    </S.ProgressBar >
  )
}