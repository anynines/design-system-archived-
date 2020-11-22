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
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.notice, 'Notice') }}
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
    --text-xs:  calc(var(--text-base-unit) * 0.5);
    --text-sm:  calc(var(--text-base-unit) * 0.6);
    --text-md:  calc(var(--text-base-unit) * 0.8);
    --text-lg:  calc(var(--text-base-unit));
    --text-lgr: calc(var(--text-base-unit) * 1.5);
    --text-xl:  calc(var(--text-base-unit) * 2);
    --text-xxl: calc(var(--text-base-unit) * 3);
    --text-xxxl: calc(var(--text-base-unit) * 4);

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

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    line-height: var(--heading-line-height);
    font-weight: var(--font-weight-bd);
  }

  h1 {
    font-size: var(--text-xxxl);
    margin-bottom: 0.1em;
  }

  h2 {
    font-size: var(--text-xxl);
    margin-bottom: 0.2em;
  }

  h3 {
    font-size: var(--text-xl);
    margin-bottom: 0.25em;
  }

  h4 {
    font-size: var(--text-lgr);
    margin-bottom: 0.25em;
  }

  h5 {
    font-size: var(--text-lg);
    margin-bottom: 0.25em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h6 {
    font-size: var(--text-md);
    margin-bottom: 0.25em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    margin-top: 0.25em;
    margin-bottom: 0.75em;
    font-size: var(--text-lg);
    font-weight: 300;
    letter-spacing: 1.5;
    color: var(--color-white-80);
  }

  hr {
    width: 100%;
    border-color: var(--color-white-10);
    margin: var(--text-md) 0;
  }

  pre {
    padding: var(--space-lg);
    background-color: var(--color-black);
    border-radius: var(--radius);
    width: 100%;
    font-size: var(--text-lg);
  }

  code {
    padding: 4px;
    margin: 0 2px;
    background-color: var(--color-black);
    border-radius: 2px;
    font-size: var(--text-lg);
  }

  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  ul, ol, li {
    list-style: none;
  }

  .ol, .ul {
    line-height: 2;
    font-size: var(--text-lg);
    font-weight: 300;
  }

  .ol, .ol li {
    list-style: decimal;
  }

  .ul, .ul li {
    list-style: circle;
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
