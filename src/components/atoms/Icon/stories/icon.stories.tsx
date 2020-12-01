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
    },
    size: {
      control: {
        type: 'select',
        options: [
          'sm',
          'md',
          'lg'
        ]
      }
    }
  },
}

export const Menu = (args: IconProps) => (
  <Wrapper>
    <Icon {...args} />
  </Wrapper>
)

export const Sizes = () => (
  <>
    <Wrapper>
      <Icon icon='caretLeft' size='sm' />
    </Wrapper>
    <Wrapper>
      <Icon icon='caretLeft' size='md' />
    </Wrapper>
    <Wrapper>
      <Icon icon='caretLeft' size='lg' />
    </Wrapper>
  </>
)

export const Collection = (args: IconProps) => (
  <Wrapper flexWrap='wrap' height='100%'>
    <IconWrapper icon='arrowUpRight' size={args.size} />

    <IconWrapper icon='bestseller' size={args.size} />
    <IconWrapper icon='bin' size={args.size} />
    <IconWrapper icon='button' size={args.size} />

    <IconWrapper icon='calendar' size={args.size} />
    <IconWrapper icon='camera' size={args.size} />
    <IconWrapper icon='caretDown' size={args.size} />
    <IconWrapper icon='caretLeft' size={args.size} />
    <IconWrapper icon='caretRight' size={args.size} />
    <IconWrapper icon='cart' size={args.size} />
    <IconWrapper icon='close' size={args.size} />
    <IconWrapper icon='color' size={args.size} />
    <IconWrapper icon='customer' size={args.size} />

    <IconWrapper icon='dashboard' size={args.size} />
    <IconWrapper icon='delivery' size={args.size} />
    <IconWrapper icon='drop' size={args.size} />

    <IconWrapper icon='edit' size={args.size} />
    <IconWrapper icon='euro' size={args.size} />

    <IconWrapper icon='filter' size={args.size} />
    <IconWrapper icon='folder' size={args.size} />
    <IconWrapper icon='font' size={args.size} />
    <IconWrapper icon='frequency' size={args.size} />

    <IconWrapper icon='globe' size={args.size} />
    <IconWrapper icon='grid1' size={args.size} />
    <IconWrapper icon='grid2' size={args.size} />
    <IconWrapper icon='grid4' size={args.size} />
    <IconWrapper icon='grid8' size={args.size} />
    <IconWrapper icon='grid16' size={args.size} />

    <IconWrapper icon='heart' size={args.size} />

    <IconWrapper icon='info' size={args.size} />

    <IconWrapper icon='LangDE' size={args.size} />
    <IconWrapper icon='LangEN' size={args.size} />
    <IconWrapper icon='LangSP' size={args.size} />
    <IconWrapper icon='LangIT' size={args.size} />
    <IconWrapper icon='layout' size={args.size} />
    <IconWrapper icon='light' size={args.size} />
    <IconWrapper icon='logout' size={args.size} />

    <IconWrapper icon='menu' size={args.size} />
    <IconWrapper icon='minus' size={args.size} />
    <IconWrapper icon='minusInSquare' size={args.size} />
    <IconWrapper icon='moon' size={args.size} />

    <IconWrapper icon='news' size={args.size} />
    <IconWrapper icon='notifications' size={args.size} />
    <IconWrapper icon='novelties' size={args.size} />

    <IconWrapper icon='orders' size={args.size} />

    <IconWrapper icon='pages' size={args.size} />
    <IconWrapper icon='pipette' size={args.size} />
    <IconWrapper icon='placeholder' size={args.size} />
    <IconWrapper icon='plus' size={args.size} />
    <IconWrapper icon='points' size={args.size} />

    <IconWrapper icon='random' size={args.size} />
    <IconWrapper icon='remove' size={args.size} />
    <IconWrapper icon='rocket' size={args.size} />

    <IconWrapper icon='sale' size={args.size} />
    <IconWrapper icon='sections' size={args.size} />
    <IconWrapper icon='send' size={args.size} />
    <IconWrapper icon='settings' size={args.size} />
    <IconWrapper icon='shop' size={args.size} />
    <IconWrapper icon='slider' size={args.size} />

    <IconWrapper icon='tag' size={args.size} />
    <IconWrapper icon='text' size={args.size} />
    <IconWrapper icon='telescope' size={args.size} />
    <IconWrapper icon='turnAround' size={args.size} />

    <IconWrapper icon='unit' size={args.size} />
    <IconWrapper icon='user' size={args.size} />
    <IconWrapper icon='users' size={args.size} />

    <IconWrapper icon='widthSM' size={args.size} />
    <IconWrapper icon='wishlist' size={args.size} />
  </Wrapper>
)
