import { createGlobalStyle } from 'styled-components'
import * as builder from './PaletteBuilder'

// G L O B A L   S T Y L E S
export const GlobalStyle = createGlobalStyle`
  /**************************************
  **  Scrollbar  ************************
  **************************************/
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
    background: var(--color-primary-lighter);
  }

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
    margin-bottom: 0.1em;
    font-size: var(--text-xxxl);
  }

  h2 {
    margin-bottom: 0.2em;
    font-size: var(--text-xxl);
  }

  h3 {
    margin-bottom: 0.25em;
    font-size: var(--text-xl);
  }

  h4 {
    margin-bottom: 0.25em;
    font-size: var(--text-lgr);
  }

  h5 {
    margin-bottom: 0.25em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: var(--text-lg);
  }

  h6 {
    margin-bottom: 0.25em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: var(--text-md);
  }

  p {
    margin-top: 0.25em;
    margin-bottom: 0.75em;
    letter-spacing: 1.5;
    color: var(--color-white-80);
    font-size: var(--text-lg);
    font-weight: var(--font-weight-lt);
  }

  button, span {
    font-family: var(--font-family);
  }

  blockquote {
    margin-left: 0;
    border-left: 5px solid var(--color-primary);
    padding: 0 10px;
    font-weight: var(--font-weight-lt);
    font-style: italic;
  }

  a.link {
    color: var(--color-primary);
    transition: var(--transition);
    font-weight: var(--font-weight-bd);

    &:hover {
      color: var(--color-primary-light);
    }
  }

  hr {
    margin: var(--text-xl) 0;
    width: 100%;
    border-color: var(--color-white-10);
  }

  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  ul, ol, li {
    list-style: none;
  }

  .ol, .ul {
    padding-left: 20px;
    line-height: 2;
    font-size: var(--text-lg);
    font-weight: 300;
  }

  .ol, .ol li {
    list-style: decimal;
  }

  .ul, .ul li {
    list-style: disc;
  }

  code {
    margin: 0 2px;
    padding: 4px;
    font-size: var(--text-lg);
    border-radius: 2px;
  }

  * {
    box-sizing: border-box;
  }

  .tooltip-wrapper {
    position: relative;
    &:hover {
      .tooltip {
        display: block;
      }
    }
  }

  /**************************************
  **  Storybook Overwrites  *************
  **************************************/

  .sb-show-main.sb-main-padded {
    background: #010f1b !important;
    padding: 0 !important;
  }

  .sbdocs-wrapper {
    background-color: #010f1b !important;

    h1, h2, h3, p, th {
      color: var(--color-white);
    }

    svg {
      fill: white;
    }
  }

  .sbdocs.sbdocs-preview {
    border: none;
    background-color: var(--color-black);
  }

  .os-host {
    background: transparent;
  }

  .docs-story {
    > div {
      padding: 0;
    }
    .css-11xgcgt {
      background-color: transparent;
      button {
        background-color: rgba(0,0,0,0.25);
        color: var(--color-white-50);
        transition: var(--transition);

        &:hover {
          background-color: rgba(0,0,0,0.5);
          color: var(--color-white);
        }
      }
    }
  }
  
  .css-xp4t8a {
    border-top: 1px solid var(--color-white-20);
    background-color: var(--color-black);
  }

  .docblock-argstable {
    border-collapse: unset !important;
    border-spacing: 3px !important;
    td {
      background-color: var(--color-black) !important;
      color: white;
    }
    .css-16d4d7t {
      border: var(--color-white-20);
      background-color: var(--color-dark);
      color: white;
    }
    select, textarea, input {
      background-color: var(--color-dark) !important;
      color: white !important;
    }
    input[type='checkbox'] {
      background-color: transparent !important;
    }
  }

  .css-p1dfi6 {
    border-bottom: 1px solid var(--color-white-20);
    background-color: var(--color-black) !important;
    color: white !important;
  }

  thead.docblock-argstable-head th {
    color: white !important;
  }

  .sbdocs-preview {
    background-color: var(--color-black);
  }
`
