import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../../_helpers/Wrapper'
import { Animation } from '../Animation'

export default {
  title: '👋 Get started/ Animation',
  component: Animation,
  parameters: {
    docs: {
      description: {
        component: 'These are our five base colors: primary, black, dark, light and white. Additionally we got four colours for different events: success, notice, warning and error. Both base and event colors can be customized by providing a custom theme and will automatically create all these different shades.'
      }
    },
  }
}

export const Overview = () => (
  <Wrapper align='flex-start' direction='column'>
    <section>
      <h2>Animations</h2>
      <p>
        We use animate.css for all animation purposes.
        You can select from a lot of different animations where some of them are previewed in this component.
        For more animations and info about animate.css you can visit: <a className='link' href="https://animate.style/" target="_blank">animate.css</a>
      </p>
    </section>
    <section style={{ marginTop: 30, marginBottom: 30 }}>
      <h5 style={{ marginBottom: 10 }}>Bounce In/Out</h5>
      <p>All bounceIn animations can also be used as bounceOut.</p>
      <StyledAnimationList>
        <Animation type='bounce'>
          <StyledAnimatedDiv />
          <span>bounce</span>
        </Animation>

        <Animation type='bounceIn'>
          <StyledAnimatedDiv />
          <span>bounceIn</span>
        </Animation>

        <Animation type='bounceInDown'>
          <StyledAnimatedDiv />
          <span>bounceInDown</span>
        </Animation>

        <Animation type='bounceInLeft'>
          <StyledAnimatedDiv />
          <span>bounceInLeft</span>
        </Animation>

        <Animation type='bounceInRight'>
          <StyledAnimatedDiv />
          <span>bounceInRight</span>
        </Animation>

        <Animation type='bounceInUp'>
          <StyledAnimatedDiv />
          <span>bounceInUp</span>
        </Animation>
      </StyledAnimationList>
    </section>

    <section style={{ marginTop: 30, marginBottom: 30 }}>
      <h5 style={{ marginBottom: 10 }}>Fade In/Out</h5>
      <p>All fadeIn animations can also be used as fadeOut.</p>
      <StyledAnimationList>
        <Animation type='fadeIn'>
          <StyledAnimatedDiv />
          <span>fadeIn</span>
        </Animation>

        <Animation type='fadeInDown'>
          <StyledAnimatedDiv />
          <span>fadeInDown</span>
        </Animation>

        <Animation type='fadeInLeft'>
          <StyledAnimatedDiv />
          <span>fadeInLeft</span>
        </Animation>

        <Animation type='fadeInRight'>
          <StyledAnimatedDiv />
          <span>fadeInRight</span>
        </Animation>

        <Animation type='fadeInUp'>
          <StyledAnimatedDiv />
          <span>fadeInUp</span>
        </Animation>
      </StyledAnimationList>
    </section>

    <section style={{ marginTop: 30, marginBottom: 30 }}>
      <h5 style={{ marginBottom: 10 }}>Rotate In/Out</h5>
      <p>All rotateIn animations can also be used as rotateOut.</p>
      <StyledAnimationList>
        <Animation type='rotateIn'>
          <StyledAnimatedDiv />
          <span>rotateIn</span>
        </Animation>

        <Animation type='rotateInDownLeft'>
          <StyledAnimatedDiv />
          <span>rotateInDownLeft</span>
        </Animation>

        <Animation type='rotateInDownRight'>
          <StyledAnimatedDiv />
          <span>rotateInDownRight</span>
        </Animation>

        <Animation type='rotateInUpLeft'>
          <StyledAnimatedDiv />
          <span>rotateInUpLeft</span>
        </Animation>

        <Animation type='rotateInUpRight'>
          <StyledAnimatedDiv />
          <span>rotateInUpRight</span>
        </Animation>
      </StyledAnimationList>
    </section>

    <section style={{ marginTop: 30, marginBottom: 30 }}>
      <h5 style={{ marginBottom: 10 }}>Zoom In/Out</h5>
      <p>All zoomIn animations can also be used as zoomOut.</p>
      <StyledAnimationList>
        <Animation type='zoomIn'>
          <StyledAnimatedDiv />
          <span>zoomIn</span>
        </Animation>

        <Animation type='zoomInDown'>
          <StyledAnimatedDiv />
          <span>zoomInDownLeft</span>
        </Animation>

        <Animation type='zoomInLeft'>
          <StyledAnimatedDiv />
          <span>zoomInDownRight</span>
        </Animation>

        <Animation type='zoomInRight'>
          <StyledAnimatedDiv />
          <span>zoomInUpLeft</span>
        </Animation>

        <Animation type='zoomInUp'>
          <StyledAnimatedDiv />
          <span>zoomInUpRight</span>
        </Animation>
      </StyledAnimationList>
    </section>
  </Wrapper>
)

// S T Y L E S
const StyledAnimatedDiv = styled.div`
  margin-bottom: .5rem;
  width: 5rem;
  height: 5rem;
  background-color: var(--color-primary);
`

const StyledAnimationList = styled.div`
  position: relative;
  display: flex;
  margin-top: var(--space-lg);

  span {
    font-size: var(--text-xs);
  }
`
