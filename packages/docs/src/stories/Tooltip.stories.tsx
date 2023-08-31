import { Box, Tooltip, TooltipProps } from '@moura-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Visual/Tooltip',
  component: Tooltip,

  args: {
    sideOffset: 5,
    component: <span>21</span>,
    tooltip: <span>21 de Outubro - disponível</span>,
    delayDuration: 0,
    side: undefined,
    align: undefined,
  },

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            height: 'fit-content',
            width: 'fit-content',
            display: 'flex',
            margin: '$16 auto',
            boxSizing: 'border-box',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],

  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left', undefined],
      control: {
        type: 'inline-radio',
      },
    },

    align: {
      options: ['center', 'end', 'start', undefined],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
