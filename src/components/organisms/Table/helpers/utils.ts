/* eslint-disable no-restricted-globals */
export const range = (size: number, startAt = 0): number[] => {
  return [...Array(size).keys()].map((i) => { return i + startAt })
}

export const isNumeric = (str: string): boolean => {
  if (typeof str !== 'string') return false // we only process strings!
  // @ts-ignore
  return !isNaN(str) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    && !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export const roundN = (num: number, n: number): number => {
  return +(num.toFixed(n))
}

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const objectToQueryString = (obj: { [key: string]: string | number }): string => {
  return Object.keys(obj)
    .map((key) => { return `${key}=${obj[key]}` })
    .join('&')
}
