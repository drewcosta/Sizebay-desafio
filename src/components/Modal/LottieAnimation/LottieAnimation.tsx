import Lottie from 'lottie-react';
import { LottieAnimationProps } from "./ILottieAnimation";

export function LottieAnimation({ animation }: LottieAnimationProps) {
  return(
    <Lottie loop={false} animationData={animation} />
  )
}