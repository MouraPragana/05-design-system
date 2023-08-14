import { themes } from "@storybook/theming"


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f8f8f8',
        },
        {
          name: 'dark',
          value: '#333333',
        }
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
