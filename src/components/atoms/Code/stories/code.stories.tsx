import React from 'react'

import { Code, CodeProps } from '../Code'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Code',
  component: Code,
  argTypes: {
    language: {
      control: { type: 'text' },
      defaultValue: 'html'
    },
    code: {
      control: { type: 'text' },
      defaultValue: 
`<div style='border-radius: 5px' className='example example--snippet'>
  Some example text
</div>`
    }
  }
}

const codeSnippet = (`<div class='peter' style='border-radius: 5px'>
  Some more examples code goes here
</div>
`)

export const Basic = (args: CodeProps) => (
  <Wrapper>
    <Code {...args} >
      {codeSnippet}
    </Code>
  </Wrapper>
)
