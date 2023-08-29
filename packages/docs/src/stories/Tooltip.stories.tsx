import { Box, Tooltip, TooltipProps } from '@moura-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Visual/Tooltip',
  component: Tooltip,

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            minWidth: '$16',
            maxWidth: 'max-content',
            display: 'flex',
            margin: '$16 auto',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: '$sm',
            boxSizing: 'border-box',
            padding: '$4 $7 $4 $7',
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

export const Primary: StoryObj<TooltipProps> = {
  args: {
    baseText: 'Base text',
    tooltipText: 'Tooltip text',
    side: 'top',
    align: 'center',
  },
}
