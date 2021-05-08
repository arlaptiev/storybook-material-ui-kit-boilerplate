import { muiTheme } from 'storybook-addon-material-ui'

import LightTheme from '../src/themes/LightTheme'

export const decorators = [
	muiTheme([LightTheme])
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}