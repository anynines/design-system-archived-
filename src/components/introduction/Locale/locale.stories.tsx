import React from 'react'
import Wrapper from '../../_helpers/Wrapper'

export default {
  title: '👋 Get started/Locale',
}

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es': return 'Seleccione un idioma en la barra de herramientas de Storybook en la parte superior'
    case 'de': return 'Wähle oben in der Toolbar von Storybook eine Sprache aus'
    default:
      return 'Select a language in the Storybook toolbar at the top'
  }
}

export const StoryWithLocale = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale)
  return <Wrapper>{caption}</Wrapper>
}
