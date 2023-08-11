import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere blanditiis dignissimos quis nemo, a, minima repellendus vitae vero maxime cumque nesciunt quia perspiciatis earum nulla laboriosam illo itaque explicabo sunt.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
