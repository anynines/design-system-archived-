import {
  convertHexColorToRGBA,
  convertHexColorToRGBAString,
  camelToPascalCase
} from './ValueConverter'

export interface RGBMap {
  r: number
  g: number
  b: number
}
export interface RGBAMap extends RGBMap {
  a: number
}

const multiplyRGB = (rgbMap: RGBAMap, factor: number): RGBAMap => {
  return {
    r: Math.round(rgbMap.r * factor),
    g: Math.round(rgbMap.g * factor),
    b: Math.round(rgbMap.b * factor),
    a: Math.round(rgbMap.a)
  }
}

const rgbaToCssString = (rgbaMap: RGBAMap): string => {
  const { r, g, b, a } = rgbaMap

  return `rgb(${r}, ${g}, ${b}, ${a})`
}

// H E L P E R   F O R   P A L E T T E   B U I L D I N G
// eslint-disable-next-line
export const buildCssVariablesFromPalette = (paletteMap: any): string => {
  let paletteString = ''

  Object.keys(paletteMap).map((key: string) => {
    paletteString = paletteString
      .concat(`--${camelToPascalCase(key)}: ${paletteMap[key]};\n`)
    return 0
  })

  return paletteString
}

export const buildPrimaryPaletteFromHexColor = (
  inputColorValue: string,
  colorName: string
): string => {
  const paletteMap = {}
  paletteMap[`color${colorName}`] = convertHexColorToRGBAString(inputColorValue)
  paletteMap[`color${colorName}Lighter`] = rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 1.4))
  paletteMap[`color${colorName}Light`] = rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 1.2))
  paletteMap[`color${colorName}Dark`] = rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 0.8))
  paletteMap[`color${colorName}Darker`] = rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 0.6))

  return buildCssVariablesFromPalette(paletteMap)
}

export const buildContrastPaletteFromHexColor = (
  inputColorValue: string,
  colorName: string
): string => {
  const paletteMap = {}
  paletteMap[`color${colorName}`] = convertHexColorToRGBAString(inputColorValue)
  paletteMap[`color${colorName}-90`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.9))
  paletteMap[`color${colorName}-80`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.8))
  paletteMap[`color${colorName}-70`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.7))
  paletteMap[`color${colorName}-60`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.6))
  paletteMap[`color${colorName}-50`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.5))
  paletteMap[`color${colorName}-40`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.4))
  paletteMap[`color${colorName}-30`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.3))
  paletteMap[`color${colorName}-20`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.2))
  paletteMap[`color${colorName}-10`] = rgbaToCssString(convertHexColorToRGBA(inputColorValue, 0.1))

  return buildCssVariablesFromPalette(paletteMap)
}
