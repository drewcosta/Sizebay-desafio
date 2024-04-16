import * as S from './ProgressBar.styles';
import { ProgressBarProps } from "./ProgressBar.types";
import { LottieAnimation } from '../LottieAnimation';
import Confetti from '../../../assets/Confetti.json';

export function ModalProgressBar({ tasks }: ProgressBarProps) {

  const tasksDone = tasks.filter(task => task.status === 'done');
  const progressPercentage = tasks.length > 0 ? (tasksDone.length / tasks.length) * 100 : 0;

  return (
    <S.ProgressBar>
      <S.ProgressBarPercentage width={progressPercentage} />
      <S.Animation>
        {progressPercentage === 100 && <LottieAnimation animation={Confetti} />}
      </S.Animation>
    </S.ProgressBar >
  )
}