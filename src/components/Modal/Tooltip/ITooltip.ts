import { HTMLAttributes } from "react";

export interface TooltipStyles {
  $taskItem?: boolean;
}

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement>, TooltipStyles {
  onClick: () => void;
  title: string;
}