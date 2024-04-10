import { TooltipProps } from "./ITooltip";
import * as S from './Tooltip.styles'

export function Tooltip({ onClick, title }: TooltipProps) {
  return (
    <S.Tooltip role="tooltip" onClick={onClick}>
      {title}
    </S.Tooltip>
  )
}