export const getStylePropVal = (elem: HTMLElement, prop: string): string => {
  return getComputedStyle(elem).getPropertyValue(prop)
}

export const getCSSVarVal = (elem: HTMLElement, varName: string): string => {
  if (window.CSS && CSS.supports('(--foo: red)')) return getComputedStyle(elem).getPropertyValue(varName)
  return 'feature is not supported'
}

export const toLowerCasedHyphenSeparatedString = (str: string): string => {
  return str.split(' ').join('-').toLowerCase()
}

export const replaceUmlautsFromString = (str: string): string => {
  return str.replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
    .replace(/ß/g, 'ss')
}

export const rgbaToRgb = (rgba: string): string => {
  return rgba.replace('a', '').replace(/,[.0-9]{1,2}\)$/, ')').replace(/,/g, ', ')
}

export const createFaviconNode = (): void => {
  const faviconNode = document.createElement('link')
  faviconNode.setAttribute('href', '')
  faviconNode.setAttribute('id', 'componentLibraryFavicon')
  faviconNode.rel = 'shortcut icon'
  faviconNode.type = 'image/png'

  document.getElementsByTagName('head')[0].appendChild(faviconNode)
}
