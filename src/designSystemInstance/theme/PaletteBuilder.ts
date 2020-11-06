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
  const {r,g,b,a} = rgbaMap;
  
  return `rgb(${r},${g},${b},${a})`;
}

export const buildPrimaryPaletteFromHexColor = (inputColorValue) => {
  return {
    primary: convertHexColorToRGBAString(inputColorValue),
    primaryLight: rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 1.3)),
    primaryLight50: rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue, 0.5), 1.3)),
    primaryLighter: rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 1.5)),
    primaryDark: rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 0.7)),
    primaryDark50: rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue, 0.5), 0.7)),
    primaryDarker: rgbaToCssString(multiplyRGB(convertHexColorToRGBA(inputColorValue), 0.5))
  }
}

const color = buildPrimaryPaletteFromHexColor('#777777');
console.log(color);