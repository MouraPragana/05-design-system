import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  component: ReactNode
  tooltip: ReactNode | string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider {...props}>
      <TooltipRoot>
        <TooltipTrigger asChild>{props.component}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent {...props}>
            {props.tooltip}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}
