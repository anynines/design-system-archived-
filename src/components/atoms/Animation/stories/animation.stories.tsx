import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../../_helpers/Wrapper'
import { Animation, AnimationProps } from '../Animation'

export default {
  title: '💧 Atoms/Animation',
  component: Animation,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'bounce',
          'fadeIn',
          'fadeOut',
          'pulse',
          'rotate',
          'shake',
          'slideInDown'
        ],
      },
    },
    className: {
      control: { type: 'text' },
    }
  }
}

export const Basic = (args: AnimationProps) => (
  <Wrapper>
    <Animation {...args}>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const Bounce = () => (
  <Wrapper>
    <Animation type='bounce'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const FadeIn = () => (
  <Wrapper>
    <Animation type='fadeIn'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const FadeOut = () => (
  <Wrapper>
    <Animation type='fadeOut'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const Pulse = () => (
  <Wrapper>
    <Animation type='pulse'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const Rotate = () => (
  <Wrapper>
    <Animation type='rotate'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const Shake = () => (
  <Wrapper>
    <Animation type='shake'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

export const SlideInDown = () => (
  <Wrapper>
    <Animation type='slideInDown'>
      <StyledAnimatedDiv />
    </Animation>
  </Wrapper>
)

// S T Y L E S
const StyledAnimatedDiv = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: var(--color-primary);
`