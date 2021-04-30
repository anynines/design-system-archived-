import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import TitleSkeleton from '../Title'
import CardSkeleton from '../Card'
import HeroSkeleton from '../Hero'
import LineSkeleton from '../Line'
import TextSkeleton from '../Text'
import WordSkeleton from '../Word'

const Skeletons = (
  <>
    <TitleSkeleton />
    <TitleSkeleton title='h3' />
    <CardSkeleton />
    <HeroSkeleton />
    <LineSkeleton />
    <LineSkeleton width='sm' />
    <LineSkeleton width='md' />
    <TextSkeleton />
    <TextSkeleton width='sm' />
    <TextSkeleton width='md' />
    <TextSkeleton lines={5} />
    <WordSkeleton />
  </>
)

describe('Skeletons component', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      const component = render(Skeletons)
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
