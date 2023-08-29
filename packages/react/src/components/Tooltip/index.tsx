import { ComponentProps } from '@stitches/react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  baseText: string
  tooltipText: string
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  align?: 'center' | 'end' | 'start' | undefined
}

export function Tooltip({ baseText, tooltipText, side, align }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <span>{baseText}</span>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side={side} align={align}>
            <span>{tooltipText}</span>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}
