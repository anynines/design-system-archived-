import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { GlobalStyle } from '../designSystemInstance/theme/GlobalStyle'

// C O M P O N E N T
// This is the storybook theme provider
const ThemeProvider = ({ theme, children }) => {
  const nextTheme = { ...theme }

  return (
    <StyledThemeProvider theme={nextTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  theme: PropTypes.object.isRequired
}

export default ThemeProvider
