import { X } from 'phosphor-react'
import { ComponentProps, useEffect, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
  openToast: boolean
}

export function ToastComponent({
  title,
  description,
  openToast = true,
  ...props
}: ToastProps) {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(openToast)
  }, [openToast])

  return (
    <Toast.Provider>
      <ToastRoot {...props} open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastAction altText="Goto schedule to undo">
          <X size={20} />
        </ToastAction>
      </ToastRoot>

      <ToastViewport />
    </Toast.Provider>
  )
}
