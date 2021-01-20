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
        <Card title='Avatar' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-avatar--basic'
            componentIcon='avatarComponent'
            type='component'
          />
        </Card>
        <Card title='Badge' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-avatar--basic'
            componentIcon='switchComponent'
            type='component'
          />
        </Card>
        <Card title='Button'>
          <Card.Image linkUrl='/?path=/story/💧-atoms-button--basic' componentIcon='buttonComponent' type='component' />
        </Card>
        <Card title='ButtonGroup Picker' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-buttongrouppicker--basic'
            componentIcon='buttonGroupPickerComponent'
            type='component'
          />
        </Card>
        <Card title='CaretLink' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-caretlink--basic'
            componentIcon='caretLinkComponent'
            type='component'
          />
        </Card>
        <Card title='Checkbox' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-checkbox--basic'
            componentIcon='checkboxComponent'
            type='component'
          />
        </Card>
        <Card title='Code' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-code--basic'
            componentIcon='codeComponent'
            type='component'
          />
        </Card>
        <Card title='ColorPicker'>
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-colorpicker--basic'
            componentIcon='colorPickerComponent'
            type='component'
          />
        </Card>
        <Card title='Icon' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-icon--menu'
            icon='points'
            iconSize='xl'
            type='icon'
          />
        </Card>
        <Card title='Input' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-input--basic'
            componentIcon='inputComponent'
            type='component'
          />
        </Card>
        <Card title='Label' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-label--basic'
            componentIcon='labelComponent'
            type='component'
          />
        </Card>
        <Card title='Logo' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-avatar--basic'
            componentIcon='switchComponent'
            type='component'
          />
        </Card>
        <Card title='Select' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-select--basic'
            componentIcon='selectComponent'
            type='component'
          />
        </Card>
        <Card title='Spinner'>
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-spinner--basic'
            componentIcon='spinnerComponent'
            type='component'
          />
        </Card>
        <Card title='Switch' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-switch--basic'
            componentIcon='switchComponent'
            type='component'
          />
        </Card>
        <Card title='ToggleMode' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-togglemode--basic'
            componentIcon='toggleModeComponent'
            type='component'
          />
        </Card>
        <Card title='Tooltip' >
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-tooltip--basic'
            componentIcon='switchComponent'
            type='component'
          />
        </Card>
        <Card title='Module'>
          <Card.Image
            linkUrl='/?path=/story/💧-atoms-module--basic'
            componentIcon='switchComponent'
            type='component'
          />
        </Card>
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>🌱 Molecules</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Alert' />
        <Card title='Card' />
        <Card title='CheckboxGroup' />
        <Card title='DatePicker' />
        <Card title='ImageUploader' />
        <Card title='Menu' />
        <Card title='MenuItem' />
        <Card title='Modal' />
        <Card title='Notification' />
        <Card title='Progress Indicator' />
        <Card title='Special Categories' />
        <Card title='UserDropDown' />
        <Card title='UserInfo' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>🌳 Organisms</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Form' />
        <Card title='ProductItem' />
        <Card title='Slider' />
        <Card title='DraggableTable' />
        <Card title='SortableTable' />
        <Card title='Table' />
      </CardGrid>
    </Wrapper>

    <Wrapper align='flex-start' direction='column'>
      <h3>📄 Templates</h3>
      <CardGrid gridColumnsDesktop={4}>
        <Card title='Admin Navigation' />
        <Card title='TopNav' />
        <Card title='Adminland' />
        <Card title='Auth' />
        <Card title='Userland' />
      </CardGrid>
    </Wrapper>
  </>
)
