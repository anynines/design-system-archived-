import { convertHexColorToRGBA, convertHexColorToRGBAString } from './ValueConverter';

const multiplyRGB = (rgbMap, factor) => {
  return {
    r: rgbMap.r * factor,
    g: rgbMap.g * factor,
    b: rgbMap.b * factor,
    a: rgbMap.a
  }
}

const rgbaToCssString = (rgbaMap) => {
  const { r, g, b, a } = rgbaMap;

  return `rgb(${r},${g},${b},${a})`;
}

export const buildPrimaryPaletteFromHexColor = (inputColorValue) => {
  return {
    'colorPprimary': convertHexColorToRGBAString(inputColorValue),
    'colorLight': rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 1.3)),
    'colorLight-50': rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue, 0.5), 1.3)),
    'colorLighter': rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 1.5)),
    'colorDark': rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 0.7)),
    'colorDark-50': rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue, 0.5), 0.7)),
    'colorDarker': rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 0.5))
  }
}

export const buildPrimaryPaletteVariablesFromHexColor = (inputColorValue) => {
  const paletteMap: any = buildPrimaryPaletteFromHexColor(inputColorValue)
  let paletteString = ''
  Object.keys(paletteMap).map((key: string) => {
    paletteString = paletteString.concat(`--${camelToPascalCase(key)}: ${paletteMap[key]};\n`)
    return 0
  })

  return paletteString
}

export const camelToPascalCase = (convertString: string): string => {

  const convertArray: string[] = Array.from(convertString)

  let char: string

  for (let i = 0; i < convertArray.length; i++) {
    char = convertArray[i]

    if (char !== char.toLowerCase()) {
      char = '-'.concat(char.toLowerCase())
      convertArray[i] = char
      console.log(char)
    }
  }

  return convertArray.join('')
};