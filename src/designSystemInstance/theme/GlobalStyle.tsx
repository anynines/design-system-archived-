import { createGlobalStyle } from 'styled-components'
import * as builder from './PaletteBuilder'

// G L O B A L   S T Y L E S
export const GlobalStyle = createGlobalStyle`
  /**************************************
  **  Global Variables  *****************
  **************************************/
  :root {
    /* C O L O R S */
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.primary, 'Primary') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.success, 'Success') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.notice, 'Success') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.warning, 'Warning') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.error, 'Error') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.white, 'White') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.light, 'Light') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.dark, 'Dark') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.black, 'Black') }}

    --color-white-fix: ${(props): string => { return props.theme.globals.colors.whiteFix }};
    
    /* G L O B A L S */
    --radius: ${(props): string => { return props.theme.globals.radius }};
    --border: ${(props): string => { return props.theme.globals.border }};
    --content-max-width: ${(props): string => { return props.theme.globals.contentMaxWidth }};
    --shadow: ${(props): string => { return props.theme.globals.shadow }};
    --transition: ${(props): string => { return props.theme.globals.transition }};
    --transition-ease-in-out-300: 0.3s ease-in-out;

    /* S P A C I N G */
    --space-unit: ${(props): string => { return props.theme.globals.spacing.baseUnit }};
    --space-xs:  calc(var(--space-unit) * 0.25);
    --space-sm:  calc(var(--space-unit) * 0.5);
    --space-md:  calc(var(--space-unit) * 0.75);
    --space-lg:  calc(var(--space-unit));
    --space-lgr: calc(var(--space-unit) * 1.5);
    --space-xl:  calc(var(--space-unit) * 2);
    --space-xxl: calc(var(--space-unit) * 3);
    
    --space-unit-fixed: ${(props): string => { return props.theme.globals.spacing.fixedUnit }};
    --space-fixed-xs:  calc(var(--space-unit-fixed) * 0.25);
    --space-fixed-sm:  calc(var(--space-unit-fixed) * 0.5);
    --space-fixed-md:  calc(var(--space-unit-fixed) * 0.75);
    --space-fixed-lg:  calc(var(--space-unit-fixed));
    --space-fixed-lgr: calc(var(--space-unit-fixed) * 1.5);
    --space-fixed-xl:  calc(var(--space-unit-fixed) * 2);
    --space-fixed-xxl: calc(var(--space-unit-fixed) * 3);
    
    /* T Y P O G R A P H Y */
    --font-family: ${(props): string => { return props.theme.globals.font.name }};
    --font-weight-lt: ${(props): string => { return props.theme.globals.font.light }};
    --font-weight-rg: ${(props): string => { return props.theme.globals.font.regular }};
    --font-weight-bd: ${(props): string => { return props.theme.globals.font.bold }};
    --text-base-unit: ${(props): string => { return props.theme.globals.typography.baseUnit }};
    --text-xs:  calc(var(--text-base-unit) * 0.375);
    --text-sm:  calc(var(--text-base-unit) * 0.5);
    --text-md:  calc(var(--text-base-unit) * 0.75);
    --text-lg:  calc(var(--text-base-unit));
    --text-lgr: calc(var(--text-base-unit) * 1.5);
    --text-xl:  calc(var(--text-base-unit) * 2);
    --text-xxl: calc(var(--text-base-unit) * 3);

    --body-line-height: ${(props): string => { return props.theme.globals.typography.bodyLineHeight }};
    --heading-line-height: ${(props): string => { return props.theme.globals.typography.headingLineHeight }};
  }

  /**************************************
  **  Global Styles  ********************
  **************************************/

  body {
    margin: 0;
    background-color: var(--color-black);
    padding: 0;
    line-height: var(--body-line-height);
    color: var(--color-white);
    font-family: var(--font-family);
    font-size: var(--text-base-unit);
  }

  h1, h2, h3, h4 {
    margin-bottom: var(--space-md);
    line-height: var(--heading-line-height);
    font-weight: var(--font-weight-bd);
  }
  
  h1, .text-xxl {
    font-size: var(--text-xl);
  }

  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  ul, ol, li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-lightened);
  }

  .tooltip-wrapper {
    position: relative;
    &:hover {
      .tooltip {
        display: block;
      }
    }
  }
`
