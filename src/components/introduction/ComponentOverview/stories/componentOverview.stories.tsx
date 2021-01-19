import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { ComponentOverview } from '../ComponentOverview'
import { Card, CardProps } from '../../../molecules/Card/Card'
import { CardGrid } from '../../../molecules/Card/CardGrid'

export default {
  title: '👋 Get started / ComponentOverview',
  component: ComponentOverview,
  parameters: {
    docs: {
      description: {
        component: 'These are some examples for animations which can be used in all components.'
      }
    },
  }
}

export const Overview = () => (
  <>
    <Wrapper align='flex-start' direction='column'>
      <h3>💧 Atoms</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Avatar' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Badge' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Button' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='ButtonGroup Picker' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='CaretLink' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Checkbox' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Code' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='ColorPicker' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Icon' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Input' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Label' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Logo' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Select' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Spinner' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Switch' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='ToggleMode' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Tooltip' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Module' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>🌱 Molecules</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Alert' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Card' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='CheckboxGroup' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='DatePicker' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='ImageUploader' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Menu' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='MenuItem' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Modal' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Notification' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Progress Indicator' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Special Categories' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='UserDropDown' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='UserInfo' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>🌳 Organisms</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Form' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='ProductItem' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Slider' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='DraggableTable' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='SortableTable' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Table' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>📄 Templates</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Admin Navigation' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='TopNav' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Adminland' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Auth' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
        <Card title='Userland' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchIcon' iconSize='xl' />
      </CardGrid>
    </Wrapper>
  </>
)
