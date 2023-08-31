import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {
  color: '$white',
  fontSize: '$md',
  fontWeight: '$regular',
  fontFamily: '$default',
  cursor: 'pointer',
})
export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  height: '$10',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$sm',
  color: '$gray100',
  fontFamily: '$default',

  boxSizing: 'border-box',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
