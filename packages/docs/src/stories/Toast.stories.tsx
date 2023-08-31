import { ToastComponent, ToastProps } from '@moura-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Visual/Toast',
  component: ToastComponent,

  args: {
    title: 'Título do Tooltip',
    description: 'Descrição do tooltip',
  },

  argTypes: {
    duration: {
      control: {
        type: 'number',
      },
    },
    openToast: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
