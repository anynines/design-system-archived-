import React from 'react'
import styled from 'styled-components'

import { Icon, IconProps } from '../Icon'

// S T O R Y   H E L P E R S
import IconWrapper from './IconWrapper'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'options',
        options: [
          'menu',
          'shop',
          'bestseller',
          'novelties',
          'sale',
          'random',
          'wishlist',
          'cart',
          'notifications',
          'points',
          'caretDown',
          'caretRight',
          'dashboard'
        ],
      },
    },
    className: {
      control: { type: 'text' },
    }
  },
}

export const Menu = (args: IconProps) => (
  <Icon {...args} />
)

export const StyledIcon = (args: IconProps) => {
  const StyledIcon = styled(Icon)`
    border: solid var(--color-darker) 2px;
    border-radius: 5px;
    padding: 5px;
    color: red;
  `

  return <StyledIcon {...args} />
}

export const Collection = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <IconWrapper icon='bestseller' />
    <IconWrapper icon='button' />
    <IconWrapper icon='bin' />
    <IconWrapper icon='caretDown' />
    <IconWrapper icon='caretRight' />
    <IconWrapper icon='cart' />
    <IconWrapper icon='camera' />
    <IconWrapper icon='close' />
    <IconWrapper icon='color' />
    <IconWrapper icon='customer' />
    <IconWrapper icon='dashboard' />
    <IconWrapper icon='delivery' />
    <IconWrapper icon='drop' />
    <IconWrapper icon='edit' />
    <IconWrapper icon='filter' />
    <IconWrapper icon='folder' />
    <IconWrapper icon='font' />
    <IconWrapper icon='globe' />
    <IconWrapper icon='grid1' />
    <IconWrapper icon='grid2' />
    <IconWrapper icon='grid4' />
    <IconWrapper icon='grid8' />
    <IconWrapper icon='grid16' />
    <IconWrapper icon='heart' />
    <IconWrapper icon='info' />
    <IconWrapper icon='LangDE' />
    <IconWrapper icon='LangEN' />
    <IconWrapper icon='LangSP' />
    <IconWrapper icon='LangIT' />
    <IconWrapper icon='layout' />
    <IconWrapper icon='light' />
    <IconWrapper icon='logout' />
    <IconWrapper icon='menu' />
    <IconWrapper icon='minus' />
    <IconWrapper icon='moon' />
    <IconWrapper icon='news' />
    <IconWrapper icon='notifications' />
    <IconWrapper icon='novelties' />
    <IconWrapper icon='orders' />
    <IconWrapper icon='pages' />
    <IconWrapper icon='pipette' />
    <IconWrapper icon='placeholder' />
    <IconWrapper icon='plus' />
    <IconWrapper icon='points' />
    <IconWrapper icon='random' />
    <IconWrapper icon='remove' />
    <IconWrapper icon='sale' />
    <IconWrapper icon='sections' />
    <IconWrapper icon='send' />
    <IconWrapper icon='settings' />
    <IconWrapper icon='shop' />
    <IconWrapper icon='slider' />
    <IconWrapper icon='tag' />
    <IconWrapper icon='text' />
    <IconWrapper icon='turnAround' />
    <IconWrapper icon='user' />
    <IconWrapper icon='users' />
    <IconWrapper icon='widthSM' />
    <IconWrapper icon='wishlist' />
  </div>
)
