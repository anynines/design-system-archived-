import React, { FC } from 'react'
import styled, { ThemeContext } from 'styled-components'
import ReactTooltip, { TooltipProps as ReactTooltipProps } from 'react-tooltip'

export type TooltipProps = ReactTooltipProps

// C O M P O N E N T
export const Tooltip: FC<TooltipProps> = (props) => {
  const {
    id,
    type,
    place,
    effect,
    textColor,
    backgroundColor,
    className,
    children
  } = props

  const { colors } = React.useContext(ThemeContext)

  const getTooltipBackgroundColor = (): string => {
    if (backgroundColor) {
      return backgroundColor
    }

    switch (type) {
      case 'error':
        return colors.errors
      case 'info':
        return colors.notice
      case 'success':
        return colors.success
      case 'warning':
        return colors.warning
      case 'light':
        return colors.light
      case 'dark': default:
        return colors.dark
    }
  }

  const tooltipProps: TooltipProps = {
    id,
    type,
    place,
    effect,
    textColor,
    backgroundColor: getTooltipBackgroundColor(),
    className
  }

  return (
    <StyledTooltip {...tooltipProps}>
      {children}
    </StyledTooltip>
  )
}

// S T Y L E S
const StyledTooltip = styled(ReactTooltip)`
  font-family: var(--font-family);
`
