# How to Contribute

This document makes hopefully the process for contributing clear and answers some questions that you may have.

## Open Development
All work on Anynines Design-system happens directly on [GitHub](https://github.com/anynines/design-system). Both core team members and external contributors send pull requests which go through the same review process.

## Semantic Versioning
This project follows [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes.

## Branch Organization
this project follows the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model. Be sure that you implement it well and start your branch from `develop` and not `main`.

## Creating a component
Creating a new component requires several steps that must be followed:

### 1. Follow the atomic design methodology
Be sure that you create the component into the right folder according to his level mentionned in the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) ([atoms](https://bradfrost.com/blog/post/atomic-web-design/#atoms), [molecules](https://bradfrost.com/blog/post/atomic-web-design/#molecules), [organisms](https://bradfrost.com/blog/post/atomic-web-design/#organisms), [templates](https://bradfrost.com/blog/post/atomic-web-design/#templates) or [pages](https://bradfrost.com/blog/post/atomic-web-design/#pages))

### 2. Follow normalized file structure and provide story
Your component should be written in a directory which has his name and contains a story file that illustrate how to use this component. Example with the `atom` component `MyComponent`:

```
📂 atoms
 ┣ 📂 MyComponent
 ┣ ┣ 📂 stories
 ┃ ┃ ┗ 📜 myComponent.stories.tsx
 ┃ ┗ 📜 MyComponent.tsx
```

### 3. Follow normalized component structure
Your component have to be developed following this structure:

```tsx
import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export MyComponentProps extends DefaultComponentProps {
  // ...
}

// C O M P O N E N T
export const MyComponent: React.FC<MyComponentProps> = ({ 
  className = '', 
  style 
}) => {
  return (
    <StyledMyComponent
      className={`my-component ${className}`}
      style={style}
    >
      { /* ... */}
    </StyledMyComponent>
  )
}

// S T Y L E S
const StyledMyComponent = styled(...)`
  ...
`
```
