import '../src/app/globals.css'

import type { Preview } from '@storybook/react'
import { framerMotionDecorator } from './framerMotionDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [framerMotionDecorator],
}

export default preview
