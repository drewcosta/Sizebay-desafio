import { TooltipProps } from "./ITooltip";
import * as S from './Tooltip.styles'

export function Tooltip({ onClick, title, ...props }: TooltipProps) {
  return (
    <S.Tooltip {...props} role="tooltip" onClick={onClick}>
      {title}
    </S.Tooltip>
  )
}