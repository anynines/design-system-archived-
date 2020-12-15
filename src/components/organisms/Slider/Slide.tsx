import React from 'react'
import styled from 'styled-components'


// I N T E R F A C E
export interface SlideProps {
  src: string
  link?: string
}

// C O M P O N E N T
export const Slide: React.FC<SlideProps> = (props) => {
  const { src, link } = props

  const renderSlide = (): JSX.Element => {
    return (
      <StyledSlide
        style={{ backgroundImage: `url(${src})` }}
      />
    )
  }

  if (link !== undefined) {
    return (
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        style={{ minWidth: '100%' }}
      >
        {renderSlide()}
      </a>
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
`
