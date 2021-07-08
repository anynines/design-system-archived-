import React from 'react'
import styled from 'styled-components'

// T Y P E S
import { Slide } from './types'

// I N T E R F A C E
export interface SlideItemProps extends Slide {
  index: number
  active: boolean
  onClick: (slideIndex: number) => void
}

// C O M P O N E N T
export const SlideItem: React.FC<SlideItemProps> = (props) => {
  const { index, title, subtitle, active, onClick } = props

  return (
    <StyledSliderItem className={`slide-item ${active ? 'active' : ''}`} onClick={(): void => { onClick(index) }}>
      <span className='title'>{title}</span>
      <span className='subtitle'>{subtitle}</span>
      <div className='progress'>
        <div className='bar' />
      </div>
    </StyledSliderItem>
  )
}

// S T Y L E S
const StyledSliderItem = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.5;
  margin-bottom: 30px;
  background-color: var(--color-dark);
  cursor: pointer;
  padding: 20px;
  width: 300px;
  border-radius: var(--radius);
  transition: var(--transition);

  &:last-child {
    margin-bottom: 0;
  }

  &.active, &:hover {
    opacity: 1;
  }

  span {
    color: var(--white);
  }

  .title {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .subtitle {
    font-size: var(--text-md);
  }

  @keyframes grow {
    from {width: 0%}
    to {width: 100%}
  }
  
  .progress {
    background-color: var(--color-white-10);
    width: 100%;
    transition: var(--transition);
    border-radius: var(--radius);
  }

  .bar {
    background-color: var(--color-primary);
    width: 0%;
    height: 0;
    transition: var(--transition);
    border-radius: var(--radius);
  }

  &.active {
    .progress {
      margin-top: 10px;
      
    }
    .bar {
      height: 5px;
      animation-name: grow;
      animation-duration: 6s;
      animation-timing-function: linear;
    }
  }
`
