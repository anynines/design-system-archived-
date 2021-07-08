import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface SlideProps {
  src: string
  link?: string
}

// C O M P O N E N T
export const Slide: React.FC<SlideProps> = (props) => {
  const { src, link, children } = props

  const renderSlide = (): JSX.Element => {
    return (
      <StyledSlide
        style={{ backgroundImage: `url(${src})` }}
      >
        {children && <div className='overlay'>{children}</div>}
      </StyledSlide>
    )
  }

  if (link !== undefined) {
    return (
      <StyledLink
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        {renderSlide()}
      </StyledLink>
    )
  }

  return renderSlide()
}

// S T Y L E S
const StyledSlide = styled.div`
  background-position: center;
  min-width: 100%;
  height: 100%;
  background-size: cover;  

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
  }
`

const StyledLink = styled.a`
  min-width: 100%;
  text-decoration: none;
  color: var(--color-white);

  &:hover {
    cursor:pointer;  
  }
`
