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
    /* C I   C O L O R S */
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.primary, 'Primary') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.success, 'Success') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.notice, 'Notice') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.warning, 'Warning') }}
    ${(props): string => { return builder.buildPrimaryPaletteFromHexColor(props.theme.globals.colors.error, 'Error') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.white, 'White') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.light, 'Light') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.dark, 'Dark') }}
    ${(props): string => { return builder.buildContrastPaletteFromHexColor(props.theme.globals.colors.black, 'Black') }}

    /* C O M P O N E N T   C O L O R S */
    --page-bg-color: ${(props): string => { return props.theme.globals.colors.pageBgColor }};
    --layout-bg-color: ${(props): string => { return props.theme.globals.colors.layoutBgColor }};;
    --box-bg-color: ${(props): string => { return props.theme.globals.colors.boxBgColor }};;
    --element-bg-color: ${(props): string => { return props.theme.globals.colors.elementBgColor }};;
    --text-color: ${(props): string => { return props.theme.globals.colors.textColor }};;

    --color-white-fix: ${(props): string => { return props.theme.globals.colors.whiteFix }};
    
    /* G L O B A L S */
    --radius: ${(props): string => { return props.theme.globals.radius }};
    --border: ${(props): string => { return props.theme.globals.border }};
    --content-max-width: ${(props): string => { return props.theme.globals.contentMaxWidth }};
    --shadow: ${(props): string => { return props.theme.globals.shadow }};
    --transition: ${(props): string => { return props.theme.globals.transition }};
    --transition-ease-in-out-300: 0.3s ease-in-out;

    /* S P A C I N G */
    --space-unit: ${(props): string => { return props.theme.globals.spacing.baseUnit }}; /* 16px */
    --space-xxs:  calc(var(--space-unit) * 0.25); /* 4px */
    --space-xs:  calc(var(--space-unit) * 0.5);   /* 8px */
    --space-sm:  calc(var(--space-unit) * 0.75);  /* 12px */
    --space-md:  calc(var(--space-unit));         /* 16px */
    --space-lg: calc(var(--space-unit) * 1.25);   /* 20px */
    --space-xl: calc(var(--space-unit) * 1.5);    /* 24px */
    --space-xxl:  calc(var(--space-unit) * 2);    /* 32px */
    --space-xxxl:  calc(var(--space-unit) * 2.5); /* 40px */
    --space-huge: calc(var(--space-unit) * 4);    /* 64px */
    --space-giant: calc(var(--space-unit) * 8);   /* 128px */
    
    --space-unit-fixed: ${(props): string => { return props.theme.globals.spacing.fixedUnit }}; /* 16px */
    --space-fixed-xxs:  calc(var(--space-unit-fixed) * 0.25); /* 4px */
    --space-fixed-xs:  calc(var(--space-unit-fixed) * 0.5);   /* 8px */
    --space-fixed-sm:  calc(var(--space-unit-fixed) * 0.75);  /* 12px */
    --space-fixed-md:  calc(var(--space-unit-fixed));         /* 16px  */
    --space-fixed-lg: calc(var(--space-unit-fixed) * 1.25);   /* 20px */
    --space-fixed-xl: calc(var(--space-unit-fixed) * 1.5);    /* 24px */
    --space-fixed-xxl:  calc(var(--space-unit-fixed) * 2);    /* 32px */
    --space-fixed-xxxl:  calc(var(--space-unit-fixed) * 2.5); /* 40px */
    --space-fixed-huge: calc(var(--space-unit-fixed) * 4);    /* 64px */
    --space-fixed-giant: calc(var(--space-unit-fixed) * 8);   /* 128px */
    
    /* T Y P O G R A P H Y */
    --font-family: ${(props): string => { return props.theme.globals.font.name }};
    --font-weight-lt: ${(props): string => { return props.theme.globals.font.light }};
    --font-weight-rg: ${(props): string => { return props.theme.globals.font.regular }};
    --font-weight-bd: ${(props): string => { return props.theme.globals.font.bold }};
    --text-base-unit: ${(props): string => { return props.theme.globals.typography.baseUnit }};

    --text-xxxs:  calc(var(--text-base-unit) * 0.5);  /* 8px */
    --text-xxs:  calc(var(--text-base-unit) * 0.625); /* 10px */
    --text-xs:  calc(var(--text-base-unit) * 0.75);   /* 12px */
    --text-sm:  calc(var(--text-base-unit) * 0.875);  /* 14px */
    --text-md:  calc(var(--text-base-unit));          /* 16px */
    --text-lg:  calc(var(--text-base-unit) * 1.25);   /* 20px */
    --text-xl: calc(var(--text-base-unit) * 1.5);     /* 24px */
    --text-xxl:  calc(var(--text-base-unit) * 2);     /* 32px */
    --text-xxxl: calc(var(--text-base-unit) * 2.5);   /* 40px */
    --text-huge: calc(var(--text-base-unit) * 4);     /* 64px */
    --text-giant: calc(var(--text-base-unit) * 8);    /* 128px */

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
    font-size: var(--text-huge);
  }

  h2 {
    margin-bottom: 0.2em;
    font-size: var(--text-xxxl);
  }

  h3 {
    margin-bottom: 0.25em;
    font-size: var(--text-xxl);
  }

  h4 {
    margin-bottom: 0.25em;
    font-size: var(--text-xl);
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
    font-size: var(--text-md);
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
    line-height: 2;
    font-size: var(--text-md);
    font-weight: 300;
  }

  .ol, .ol li {
    list-style: decimal;
  }

  .ul, .ul li {
    list-style: circle;
  }

  code {
    margin: 0 2px;
    background-color: var(--color-black);
    padding: 4px;
    font-size: var(--text-md);
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
`
