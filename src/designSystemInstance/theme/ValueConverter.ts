// * Conversion methods for different color models *

const hexMap = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15};

export const convertHexToDecimal = (hexInput): number => {
  let decimalResult = 0;

  const calculateHexByIndex = (hexDigit, index) => {
    return hexMap[hexDigit.toUpperCase()] * Math.pow(16, index);
  }

  const addHexDigitToDecimalResult = (hexDigit, index) => {
    decimalResult += calculateHexByIndex(hexDigit, index);
  }

  let hexArray = Array.from(hexInput).reverse();
  hexArray.map(addHexDigitToDecimalResult);
  
  return decimalResult;
};


export const convertHexColorToRGB = (hexColor): any => {
  let hexStringLength,
    parseIndex = 0,
    rgbValues = {
    r: null,
    g: null,
    b: null
  };
  
  hexColor = hexColor.replace('#','');
  hexStringLength =  hexColor.length === 3 ? 1 : 2;

  for (let color of ['r','g','b']) {
    rgbValues[color] = convertHexToDecimal(hexColor.substr(parseIndex, hexStringLength));
    parseIndex += hexStringLength;
  }
  return rgbValues;
};

export const convertHexColorToRGBA = (hexColor, alpha = 1): any => {
  return {
    ...convertHexColorToRGB(hexColor),
    a: alpha
  }
};

export const convertHexColorToRGBString = (hexColor): string => {
  const {r,g,b} = convertHexColorToRGB(hexColor);
  
  return `rgb(${r},${g},${b})`;
};

export const convertHexColorToRGBAString = (hexColor, alpha=1): string => {
  const {r,g,b,a} = convertHexColorToRGBA(hexColor, alpha);
  
  return `rgba(${r},${g},${b},${a})`;
};