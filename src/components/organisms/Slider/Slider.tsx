import React from 'react'
import styled from 'styled-components'

// D E S I G N   S Y S T E M
import { SlideItem } from './SlideItem'
import { Slide } from './Slide'

// T Y P E S
import { Slider as SliderProps } from './types'

// C O M P O N E N T
export const Slider: React.FC<SliderProps> = (props) => {
  const { slides } = props
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

  const onSlideItemClick = (slideIndex: number): void => {
    setCurrentSlideIndex(slideIndex)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if ((slides.length - 1) !== currentSlideIndex) {
        setCurrentSlideIndex(currentSlideIndex + 1)
      } else {
        setCurrentSlideIndex(0)
      }
    }, 6000)

    return (): void => { return clearTimeout(timer) }
  }, [slides.length, currentSlideIndex, setCurrentSlideIndex])

  return (
    <StyledSlider>
      <div className='slide-container'>
        <div className='slider-wrapper' style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
          {slides.map((slide) => {
            return (
              <Slide
                key={slide.title}
                src={slide.src}
                link={slide.link}
              />
            )
          })}
        </div>
      </div>
      <div className='slides'>
        {slides.map((slide, index) => {
          return (
            <SlideItem
              index={index}
              key={slide.title}
              title={slide.title}
              subtitle={slide.subtitle}
              src={slide.src}
              active={currentSlideIndex === index}
              onClick={onSlideItemClick}
            />
          )
        })}
      </div>
    </StyledSlider>
  )
}

// S T Y L E S
const StyledSlider = styled.div`
  --slider-height: 450px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .slide-container {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    margin-right: 30px;
    background-color: var(--color-darker);
    height: var(--slider-height);
    border-radius: var(--radius);
    
    .slider-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      position: relative;
      top: 0;
      left: 0;
      width: auto;
      height: var(--slider-height);
      transition: var(--transition);
    }
  }

  .slides {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
