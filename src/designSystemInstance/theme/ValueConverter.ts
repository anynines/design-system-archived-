import { RGBMap, RGBAMap } from './PaletteBuilder'

const hexMap = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15
}

export const convertHexToDecimal = (hexInput): number => {
  let decimalResult = 0

  const calculateHexByIndex = (hexDigit, index): number => {
    return hexMap[hexDigit.toUpperCase()] * (16 ** index)
  }

  const addHexDigitToDecimalResult = (hexDigit, index): void => {
    decimalResult += calculateHexByIndex(hexDigit, index)
  }

  const hexArray = Array.from(hexInput).reverse()
  hexArray.map(addHexDigitToDecimalResult)

  return decimalResult
}

export const convertHexColorToRGB = (hexColor): RGBMap => {
  let parseIndex = 0
  const rgbValues = {
    r: 0,
    g: 0,
    b: 0
  }

  hexColor = hexColor.replace('#', '')
  const hexStringLength = hexColor.length === 3 ? 1 : 2

  // TODO: Change to array map or remove Linting rule
  // eslint-disable-next-line no-restricted-syntax
  for (const color of ['r', 'g', 'b']) {
    rgbValues[color] = convertHexToDecimal(hexColor.substr(parseIndex, hexStringLength))
    parseIndex += hexStringLength
  }
  return rgbValues
}

export const convertHexColorToRGBA = (hexColor, alpha = 1): RGBAMap => {
  return {
    ...convertHexColorToRGB(hexColor),
    a: alpha
  }
}

export const convertHexColorToRGBString = (hexColor): string => {
  const { r, g, b } = convertHexColorToRGB(hexColor)

  return `rgb(${r},${g},${b})`
}

export const convertHexColorToRGBAString = (hexColor, alpha = 1): string => {
  const { r, g, b, a } = convertHexColorToRGBA(hexColor, alpha)

  return `rgba(${r},${g},${b},${a})`
}

export const camelToPascalCase = (convertString: string): string => {

  const convertArray: string[] = Array.from(convertString)

  let char: string

  for (let i = 0; i < convertArray.length; i += 1) {
    char = convertArray[i]

    if (char !== char.toLowerCase()) {
      char = '-'.concat(char.toLowerCase())
      convertArray[i] = char
    }
  }

  return convertArray.join('')
}
