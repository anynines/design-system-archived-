import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../../_helpers/Wrapper'
import { Animation } from '../Animation'
import { Code } from '../../../atoms/Code/Code'

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

const codeSnippetHover = (`.container:hover {
  animation: bounce;
  animation-duration: 0.5s;
}
`)

const codeSnippetHtml = (`<div class="animate__animated animate__bounce">
  Content
</div>
`)

export const Overview = () => (
  <Wrapper align='flex-start' direction='column'>
    <section>
      <h2>Animations</h2>
      <p>
        We use animate.css for all animation purposes.
        You can select from a lot of different animations where some of them are previewed in this component.
      </p>
      <p>
        <strong>You need to click on the boxes to trigger the appropriate animation.</strong>
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
      <h5 style={{ marginBottom: 10 }}>Misc</h5>
      <StyledAnimationList>
        <Animation type='flash'>
          <StyledAnimatedDiv />
          <span>flash</span>
        </Animation>

        <Animation type='heartBeat'>
          <StyledAnimatedDiv />
          <span>heartBeat</span>
        </Animation>

        <Animation type='jello'>
          <StyledAnimatedDiv />
          <span>jello</span>
        </Animation>

        <Animation type='pulse'>
          <StyledAnimatedDiv />
          <span>pulse</span>
        </Animation>

        <Animation type='shakeX'>
          <StyledAnimatedDiv />
          <span>shakeX</span>
        </Animation>

        <Animation type='shakeY'>
          <StyledAnimatedDiv />
          <span>shakeY</span>
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
      <h5 style={{ marginBottom: 10 }}>Slide In/Out</h5>
      <p>All slideIn animations can also be used as slideOut.</p>
      <StyledAnimationList>
        <Animation type='slideInDown'>
          <StyledAnimatedDiv />
          <span>slideInDown</span>
        </Animation>

        <Animation type='slideInLeft'>
          <StyledAnimatedDiv />
          <span>slideInLeft</span>
        </Animation>

        <Animation type='slideInRight'>
          <StyledAnimatedDiv />
          <span>slideInRight</span>
        </Animation>

        <Animation type='slideInUp'>
          <StyledAnimatedDiv />
          <span>slideInUp</span>
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
  </Wrapper >
)

export const Usage = () => (
  <Wrapper align='flex-start' direction='column'>
    <h2>Usage</h2>
    <p>
      You can simple use the animations via css or by passing the appropriate css classes.
      <br />
      If you need more animations or more information about animate.css you can visit: <a className='link' href="https://animate.style/" target="_blank">animate.css</a>
    </p>
    <section style={{ marginTop: 20, marginBottom: 20 }}>
      <h5 style={{ marginBottom: 10 }}>Hover via CSS</h5>
      <Code language='css'>
        <pre>
          <code>
            {codeSnippetHover}
          </code>
        </pre>
      </Code>
    </section>

    <section style={{ marginTop: 20, marginBottom: 20 }}>
      <h5 style={{ marginBottom: 10 }}>Using CSS classes</h5>
      <Code language='html'>
        <pre>
          <code>
            {codeSnippetHtml}
          </code>
        </pre>
      </Code>
    </section>

    <section style={{ marginTop: 20, marginBottom: 20 }}>
      <h5 style={{ marginBottom: 10 }}>Events</h5>
      <p>You can also use js events (e.g. onClick) to render these classes.
        <br />
        You can see the result for onClick events at the overview page.</p>
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
