import React from 'react'

// Layout
import { Col } from '../../../introduction/layout/Col/Col'
import { Row } from '../../../introduction/layout/Row/Row'
import { Section } from '../../../introduction/layout/Section/Section'

// Skeleton Atoms
import { CardSkeleton, CardSkeletonProps } from '../Card'
import { HeroSkeleton } from '../Hero'
import { LineSkeleton, LineSkeletonProps } from '../Line'
import { TextSkeleton, TextSkeletonProps } from '../Text'
import { TitleSkeleton, TitleSkeletonProps } from '../Title'
import { WordSkeleton, WordSkeletonProps } from '../Word'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Skeleton',
  component: LineSkeleton,
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: [
          'sm',
          'md',
          'lg'
        ],
      },
      defaultValue: 'lg'
    },
    type: {
      control: {
        type: 'select',
        options: [
          'text',
          'title'
        ],
      },
      defaultValue: 'text'
    },
    lines: {
      control: { type: 'number' },
      defaultValue: 6
    }
  },
}

export const ExamplePage = () => (
  <>
    <Section bgColor='black'>
      <Row>
        <Col>
          <CardSkeleton />
        </Col>
        <Col>
          <TitleSkeleton />
          <TextSkeleton lines={5} />
          <WordSkeleton style={{ width: '150px' }} />
          <LineSkeleton />
        </Col>
      </Row>
    </Section>
  </>
)

export const Card = (args: CardSkeletonProps) => (
  <Wrapper>
    <CardSkeleton
      {...args}
    />
  </Wrapper>
)

export const Hero = (args: CardSkeletonProps) => (
  <Wrapper>
    <HeroSkeleton
      {...args}
    />
  </Wrapper>
)

export const Line = (args: LineSkeletonProps) => (
  <Wrapper>
    <LineSkeleton
      {...args}
    />
  </Wrapper>
)

export const Text = (args: TextSkeletonProps) => (
  <Wrapper>
    <TextSkeleton
      {...args}
    />
  </Wrapper>
)

export const Title = (args: TitleSkeletonProps) => (
  <Wrapper>
    <TitleSkeleton
      {...args}
    />
  </Wrapper>
)

export const Word = (args: WordSkeletonProps) => (
  <Wrapper>
    <WordSkeleton
      {...args}
      style={{ width: '50px' }}
    />
  </Wrapper>
)
