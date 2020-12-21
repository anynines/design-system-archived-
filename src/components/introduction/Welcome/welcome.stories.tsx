import React from 'react'
import { Section } from '../layout/Section/Section'
import { Container } from '../layout/Container/Container'
import { Code } from '../../atoms/Code/Code'

export default {
  title: '👋 Get started/Welcome',
}

const themeSnippet = ` // App.tsx
import { createDesignSystemContext } from '@anynines/design-system'
export const { DesignSystemInstance } = createDesignSystemContext()

const App: React.FC = () => {
  return (
    <DesignSystemInstance>
      {/* Wrap all your components inside here */}
    </DesignSystemInstance>
  )
}`

const customThemeSnippet = `// App.tsx
import { 
  PartialTheme, 
  Theme as DesignSystemTheme 
} from '@anynines/design-system'
import { DesignSystemInstance } from './designSystemStore'

export interface CustomTheme extends PartialTheme {
  customColor: string
}
export type Theme = CustomTheme & DesignSystemTheme

export const CUSTOM_THEME: CustomTheme = {
  colors: {
    // overwrite existing theme
    primary: 'deeppink'
  },
  // provide additional attributes
  customColor: 'red'
}

const App: React.FC = () => {
  return (
    <DesignSystemInstance theme={CUSTOM_THEME}>
      {/* Wrap all your components inside here */}
    </DesignSystemInstance>
  )
}`

const storeSnippet = `// designSystemStore.ts
import { CustomTheme } from './theme/customTheme'
import { createDesignSystemContext } from '@anynines/design-system'

export const { DesignSystemInstance, ThemeContext } = createDesignSystemContext<CustomTheme>()
`

const modeSnippet = ` // YourComponent.tsx
import { ToggleMode } from '@anynines/design-system'
import { ThemeContext } from './designSystemStore'

const YourComponent: React.FC = () => {
  const { mode, setMode } = React.useContext(ThemeContext)

  return (
    <ToggleMode
      size='sm'
      mode={mode}
      setMode={(): void => {
        setMode(mode === 'dark' ? 'light' : 'dark')
      }}
    />
  )
}`

export const Welcome = () => (
  <Section bgColor='transparent'>
    <Container style={{ marginTop: 50, width: 800 }}>
      <h2>👋 Get started</h2>
      <p>Welcome to the <a className='link' target='_blank' href='https://github.com/anynines/design-system'>design-system for react.js</a> from <a className='link' target='_blank' href='https://anynines.com'>anynines</a>. We provide flavoured products and services to make the cloud a better place for Organisations, DevOps, Developers and Users. This design-system helps you to easily scaffold reliable user interfaces. To get started we will guide you through installation and key features like theming, light and dark mode and customization.</p>


      <hr />

      <h3>🔌 Installation</h3>
      <p>Install from the root directory with</p>
      <Code language='cli' code='yarn install @anynines/design-system' />

      <p>Alternatively add this line to your package.json</p>
      <Code language='json' code='"@anynines/design-system": "^0.1.0"' />

      <hr />

      <h3>🎨 Theming</h3>
      <p>By default all the components we provide are themed within the anynines branding. The easiest way to get started is to not provide a custom theme. It works like this:</p>

      <Code code={themeSnippet} language='tsx' />

      <h4>Custom Theme</h4>
      <p>Alternatively you can provide a custom theme by first create a <code>designSystemStore.ts</code> file like this:</p>

      <Code code={storeSnippet} language='ts' />

      <p>And now just setup your <code>App.tsx</code> like this:</p>

      <Code code={customThemeSnippet} language='tsx' />

      <hr />

      <h3>💡 Mode</h3>
      <p>We also provide two different Modes for any DesignSystem Instance, those are by default light and dark. All grayscale colors will be automatically inverted when switching the mode. The initial Mode is set via browser-preference of the user, if there is none the mode is set to 'dark'. If you want to add a ToggleMode-Functionality in any Component you need to do it like this:</p>
      <Code code={modeSnippet} language='tsx' />

      <hr />

      <h3>✨ Usage</h3>
      <p>Now you can use any of the components you can find in the left side navigation. ... </p>

    </Container>
  </Section>
)