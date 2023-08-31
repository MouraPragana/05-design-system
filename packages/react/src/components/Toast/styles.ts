import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})
export const ToastRoot = styled(Toast.Root, {
  backgroundColor: 'white',
  boxSizing: 'border-box',
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 360,
  height: 82,
  padding: '$3 $5',
  borderRadius: '$sm',
  border: '1px solid $gray600',
})
export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})
export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})
export const ToastAction = styled(Toast.Action, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
  background: 'transparent',
  border: 'transparent',
  color: '$gray200',

  '&:hover': {
    color: '$gray400',
  },
})
export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  display: 'flex',
  flexDirection: 'row',
})
