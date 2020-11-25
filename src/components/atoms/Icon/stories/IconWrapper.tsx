import React, { FC } from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName } from '../Icon'

// I N T E R F A C E S
export interface IconWrapperProps {
  icon?: IconName
}

// T Y P E S
// C O M P O N E N T
const IconWrapper: FC<IconWrapperProps> = ({
  icon = 'menu'
}: IconWrapperProps) => {
  return (
    <StyledIconWrapper>
      <div className='wrapper'>
        <Icon icon={icon} />
      </div>
      <span>{icon}</span>
    </StyledIconWrapper>
  )
}

// S T L Y E S
const StyledIconWrapper = styled.div`
  --size: 4em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em 2em;
  max-width: var(--size);
  font-family: var(--font-family);
  font-size: 0.8em;

  .wrapper {
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
`

export default React.memo(IconWrapper)
