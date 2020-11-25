import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { Icon, IconProps } from '../Icon'

// S T O R Y   H E L P E R S
import IconWrapper from './IconWrapper'

export default {
  title: '💧 Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
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
  <Wrapper>
    <Icon {...args} />
  </Wrapper>
)

export const Collection = () => (
  <Wrapper flexWrap='wrap' height='100%'>
    <IconWrapper icon='arrowUpRight' />

    <IconWrapper icon='bestseller' />
    <IconWrapper icon='bin' />
    <IconWrapper icon='button' />

    <IconWrapper icon='calendar' />
    <IconWrapper icon='camera' />
    <IconWrapper icon='caretDown' />
    <IconWrapper icon='caretLeft' />
    <IconWrapper icon='caretRight' />
    <IconWrapper icon='cart' />
    <IconWrapper icon='close' />
    <IconWrapper icon='color' />
    <IconWrapper icon='customer' />

    <IconWrapper icon='dashboard' />
    <IconWrapper icon='delivery' />
    <IconWrapper icon='drop' />

    <IconWrapper icon='edit' />
    <IconWrapper icon='euro' />

    <IconWrapper icon='filter' />
    <IconWrapper icon='folder' />
    <IconWrapper icon='font' />
    <IconWrapper icon='frequency' />

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
    <IconWrapper icon='minusInSquare' />
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
    <IconWrapper icon='rocket' />

    <IconWrapper icon='sale' />
    <IconWrapper icon='sections' />
    <IconWrapper icon='send' />
    <IconWrapper icon='settings' />
    <IconWrapper icon='shop' />
    <IconWrapper icon='slider' />

    <IconWrapper icon='tag' />
    <IconWrapper icon='text' />
    <IconWrapper icon='telescope' />
    <IconWrapper icon='turnAround' />

    <IconWrapper icon='unit' />
    <IconWrapper icon='user' />
    <IconWrapper icon='users' />

    <IconWrapper icon='widthSM' />
    <IconWrapper icon='wishlist' />
  </Wrapper>
)
