import { toLowerCasedHyphenSeparatedString, replaceUmlautsFromString, rgbaToRgb, getStylePropVal, getCSSVarVal } from './index'

describe('Helper functions', () => {
  describe('Strings', () => {
    it('should generate lower cased string seperated by hyphens', () => {
      expect(toLowerCasedHyphenSeparatedString('String to be tested')).toBe('string-to-be-tested')
    })

    it('should replace all umlauts from string', () => {
      expect(replaceUmlautsFromString('Wir üben für die Prüfung')).toBe('Wir ueben fuer die Pruefung')
    })

    it('should transform rgba string to space separated rgb value', () => {
      expect(rgbaToRgb('rgba(255,255,255,1)')).toBe('rgb(255, 255, 255)')
    })
  })

  describe('Styles', () => {
    let elem
    let color

    beforeEach(() => {
      color = 'rgb(255, 198, 0)'
      elem = document.createElement('span')
    })

    it('should get value for style property', () => {
      elem.setAttribute('style', `background-color: ${color}`)

      const expectedVal = color
      const receivedVal = getStylePropVal(elem, 'background-color')

      expect(receivedVal).toBe(expectedVal)
    })

    it('should get value for CSS variable', () => {
      elem.style.setProperty('--my-color', color)
      const receivedVal = getCSSVarVal(elem, '--my-color')
      expect(['feature is not supported', color]).toContain(receivedVal)
    })
  })
})
