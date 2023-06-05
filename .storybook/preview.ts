import type { Preview } from '@storybook/react'
import '../src/css/body.css'
import '../src/css/buttons.css'
import '../src/css/card.css'
import '../src/css/crew.css'
import '../src/css/footer.css'
import '../src/css/grid.css'
import '../src/css/index.css'
import '../src/css/modal.css'
import '../src/css/navbar.css'
import '../src/css/style.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
