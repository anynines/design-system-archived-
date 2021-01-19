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
        <Card title='Avatar' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='avatarComponent' />
        <Card title='Badge' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Button' linkUrl='/?path=/story/💧-atoms-button--basic' componentIcon='buttonComponent' />
        <Card title='ButtonGroup Picker' linkUrl='/?path=/story/💧-atoms-buttongrouppicker--basic' componentIcon='buttonGroupPickerComponent' />
        <Card title='CaretLink' linkUrl='/?path=/story/💧-atoms-caretlink--basic' componentIcon='caretLinkComponent' />
        <Card title='Checkbox' linkUrl='/?path=/story/💧-atoms-checkbox--basic' componentIcon='checkboxComponent' />
        <Card title='Code' linkUrl='/?path=/story/💧-atoms-code--basic' componentIcon='codeComponent' />
        <Card title='ColorPicker' linkUrl='/?path=/story/💧-atoms-colorpicker--basic' componentIcon='colorPickerComponent' />
        <Card title='Icon' linkUrl='/?path=/story/💧-atoms-icon--menu' icon='points' iconSize='xl' />
        <Card title='Input' linkUrl='/?path=/story/💧-atoms-input--basic' componentIcon='inputComponent' />
        <Card title='Label' linkUrl='/?path=/story/💧-atoms-label--basic' componentIcon='labelComponent' />
        <Card title='Logo' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Select' linkUrl='/?path=/story/💧-atoms-select--basic' componentIcon='selectComponent' />
        <Card title='Spinner' linkUrl='/?path=/story/💧-atoms-spinner--basic' componentIcon='spinnerComponent' />
        <Card title='Switch' linkUrl='/?path=/story/💧-atoms-switch--basic' componentIcon='switchComponent' />
        <Card title='ToggleMode' linkUrl='/?path=/story/💧-atoms-togglemode--basic' componentIcon='toggleModeComponent' />
        <Card title='Tooltip' linkUrl='/?path=/story/💧-atoms-tooltip--basic' componentIcon='switchComponent' />
        <Card title='Module' linkUrl='/?path=/story/💧-atoms-module--basic' componentIcon='switchComponent' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>🌱 Molecules</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Alert' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Card' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='CheckboxGroup' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='DatePicker' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='ImageUploader' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Menu' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='MenuItem' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Modal' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Notification' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Progress Indicator' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Special Categories' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='UserDropDown' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='UserInfo' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>🌳 Organisms</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Form' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='ProductItem' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Slider' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='DraggableTable' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='SortableTable' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Table' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>📄 Templates</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Admin Navigation' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='TopNav' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Adminland' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Auth' linkUrl='/?path=/story/💧-atoms-avatar--basic' componentIcon='switchComponent' />
        <Card title='Userland' linkUrl='/?path=/story/💧-atoms-avatar--basic' icon='switchComponent' />
      </CardGrid>
    </Wrapper>
  </>
)
