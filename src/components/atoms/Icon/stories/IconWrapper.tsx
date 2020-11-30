import React, { FC } from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName, IconSize } from '../Icon'

// I N T E R F A C E S
export interface IconWrapperProps {
  className?: string
  icon?: IconName
  size?: IconSize
}

// T Y P E S
// C O M P O N E N T
const IconWrapper: FC<IconWrapperProps> = ({
  className,
  icon = 'menu',
  size = 'lg'
}: IconWrapperProps) => {
  return (
    <StyledIconWrapper className={`icon-wrapper ${className} ${size}`}>
      <div className='inner-wrapper'>
        <Icon icon={icon} size={size} />
      </div>
      <span>{icon}</span>
    </StyledIconWrapper>
  )
}

// S T L Y E S
const StyledIconWrapper = styled.div`
  --size: 4em;
  --font-size: .8em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em 2em;
  max-width: var(--size);
  font-family: var(--font-family);
  font-size: var(--font-size);

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    background-color: var(--color-black);
    padding: 1.35em;
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    border-radius: var(--radius);

    svg {
      width: 100%;
      height: 100%;
      color: var(--color-white);
    }
  }

  span {
    color: var(--color-white);
    font-size: var(--text-md);
    font-weight: var(--font-weight-bd);
  }

  &.md {
    max-width: calc(var(--size) * 2);

    span {
      font-size: var(--text-lg);
    }

    .inner-wrapper {
      width: calc(var(--size) * 2);
      height: calc(var(--size) * 2);
    }
  }

  &.lg {
    max-width: calc(var(--size) * 4);

    span {
      font-size: var(--text-lgr);
    }

    .inner-wrapper {
      width: calc(var(--size) * 4);
      height: calc(var(--size) * 4);
    }
  }
`

export default React.memo(IconWrapper)
