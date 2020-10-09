import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import { GlobalStyle } from '../../designSystemInstance/theme/GlobalStyle'

// D E F A U L T  T H E M E
import { defaultTheme } from '../../designSystemInstance/theme/defaultTheme'

export function renderWithProviders(children: ReactNode) {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
