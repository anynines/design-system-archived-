import { createGlobalStyle } from 'styled-components'

// G L O B A L   S T Y L E S
export const GlobalStorybookStyle = createGlobalStyle`
  /**************************************
  **  Storybook Overwrites  *************
  **************************************/

  .sb-show-main.sb-main-padded {
    /* background: #010f1b !important; */
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
