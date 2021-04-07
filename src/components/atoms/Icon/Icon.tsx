import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// A
import ArrowUpRight from './assets/arrowUpRight'

// B
import Bestseller from './assets/bestseller'
import Bin from './assets/bin'
import Blockquote from './assets/blockquote'
import Bold from './assets/bold'
import Button from './assets/button'

// C
import Camera from './assets/camera'
import Calendar from './assets/calendar'
import CaretDown from './assets/caretDown'
import CaretLeft from './assets/caretLeft'
import CaretRight from './assets/caretRight'
import Cart from './assets/cart'
import Check from './assets/check'
import Close from './assets/close'
import Coin from './assets/coin'
import Color from './assets/color'
import ColorTransparent from './assets/colorTransparent'
import Customer from './assets/customer'

// D
import Dashboard from './assets/dashboard'
import Delivery from './assets/delivery'
import Drop from './assets/drop'

// E
import Edit from './assets/edit'
import Euro from './assets/euro'
import Eye from './assets/eye'

// F
import Filter from './assets/filter'
import Folder from './assets/folder'
import Font from './assets/font'
import Frequency from './assets/frequency'

// G
import Gift from './assets/gift'
import Globe from './assets/globe'
import Grid1 from './assets/grid1'
import Grid2 from './assets/grid2'
import Grid4 from './assets/grid4'
import Grid8 from './assets/grid8'
import Grid16 from './assets/grid16'

// H
import Heart from './assets/heart'
import Home from './assets/home'

// I
import Info from './assets/info'
import Italic from './assets/italic'

// L
import LangDE from './assets/languages/de'
import LangEN from './assets/languages/en'
import LangSP from './assets/languages/sp'
import LangIT from './assets/languages/it'
import Layout from './assets/layout'
import Letter from './assets/letter'
import Light from './assets/light'
import LinkIcon from './assets/link'
import Lock from './assets/lock'
import Logout from './assets/logout'

// M
import Menu from './assets/menu'
import Minus from './assets/minus'
import MinusInSquare from './assets/minusInSquare'
import Moon from './assets/moon'

// N
import News from './assets/news'
import Notifications from './assets/notifications'
import Novelties from './assets/novelties'

// O
import Orders from './assets/orders'
import OrderedList from './assets/orderedList'

// P
import Pages from './assets/pages'
import Paragraph from './assets/paragraph'
import Photo from './assets/photo'
import Pipette from './assets/pipette'
import Placeholder from './assets/placeholder'
import Plus from './assets/plus'
import Points from './assets/points'

// R
import Random from './assets/random'
import Remove from './assets/remove'
import Rocket from './assets/rocket'

// S
import Sale from './assets/sale'
import Sections from './assets/sections'
import Send from './assets/send'
import Settings from './assets/settings'
import Shop from './assets/shop'
import Slider from './assets/slider'

// T
import Tag from './assets/tag'
import Text from './assets/text'
import Telescope from './assets/telescope'
import TitleDisabled from './assets/titleDisabled'
import Trophy from './assets/trophy'
import TurnAround from './assets/turnAround'

// U
import User from './assets/user'
import Users from './assets/users'
import Unit from './assets/unit'
import UnorderedList from './assets/unorderedList'

// W
import WidthSM from './assets/widthSM'
import WidthIncrease from './assets/widthIncrease'
import Wishlist from './assets/wishlist'

// I N T E R F A C E S
export interface IconProps extends DefaultComponentProps {
  icon?: IconName
  size?: IconSize
}

// T Y P E S
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IconName = 'arrowUpRight'
  | 'bestseller'
  | 'bin'
  | 'button'
  | 'calendar'
  | 'camera'
  | 'caretDown'
  | 'caretLeft'
  | 'caretRight'
  | 'cart'
  | 'check'
  | 'close'
  | 'coin'
  | 'color'
  | 'customer'
  | 'dashboard'
  | 'delivery'
  | 'drop'
  | 'edit'
  | 'euro'
  | 'filter'
  | 'folder'
  | 'font'
  | 'frequency'
  | 'gift'
  | 'globe'
  | 'grid1'
  | 'grid2'
  | 'grid4'
  | 'grid8'
  | 'grid16'
  | 'heart'
  | 'home'
  | 'info'
  | 'LangDE'
  | 'LangEN'
  | 'LangSP'
  | 'LangIT'
  | 'layout'
  | 'letter'
  | 'light'
  | 'lock'
  | 'logout'
  | 'menu'
  | 'minus'
  | 'minusInSquare'
  | 'moon'
  | 'news'
  | 'notifications'
  | 'novelties'
  | 'orders'
  | 'pages'
  | 'pipette'
  | 'placeholder'
  | 'plus'
  | 'points'
  | 'random'
  | 'remove'
  | 'rocket'
  | 'sale'
  | 'sections'
  | 'send'
  | 'settings'
  | 'shop'
  | 'slider'
  | 'tag'
  | 'telescope'
  | 'text'
  | 'trophy'
  | 'turnAround'
  | 'unit'
  | 'user'
  | 'users'
  | 'widthSM'
  | 'wishlist'
  | 'blockquote'
  | 'bold'
  | 'colorTransparent'
  | 'eye'
  | 'italic'
  | 'link'
  | 'orderedList'
  | 'paragraph'
  | 'photo'
  | 'titleDisabled'
  | 'unorderedList'
  | 'widthIncrease'

const ICONS: { [key in IconName]: JSX.Element } = {
  arrowUpRight: <ArrowUpRight />,
  bestseller: <Bestseller />,
  bin: <Bin />,
  button: <Button />,
  calendar: <Calendar />,
  camera: <Camera />,
  caretDown: <CaretDown />,
  caretLeft: <CaretLeft />,
  caretRight: <CaretRight />,
  cart: <Cart />,
  check: <Check />,
  close: <Close />,
  coin: <Coin />,
  color: <Color />,
  customer: <Customer />,
  dashboard: <Dashboard />,
  delivery: <Delivery />,
  drop: <Drop />,
  edit: <Edit />,
  euro: <Euro />,
  filter: <Filter />,
  folder: <Folder />,
  frequency: <Frequency />,
  font: <Font />,
  gift: <Gift />,
  globe: <Globe />,
  grid1: <Grid1 />,
  grid2: <Grid2 />,
  grid4: <Grid4 />,
  grid8: <Grid8 />,
  grid16: <Grid16 />,
  heart: <Heart />,
  home: <Home />,
  info: <Info />,
  LangDE: <LangDE />,
  LangEN: <LangEN />,
  LangSP: <LangSP />,
  LangIT: <LangIT />,
  layout: <Layout />,
  letter: <Letter />,
  light: <Light />,
  lock: <Lock />,
  logout: <Logout />,
  news: <News />,
  menu: <Menu />,
  minus: <Minus />,
  minusInSquare: <MinusInSquare />,
  moon: <Moon />,
  notifications: <Notifications />,
  novelties: <Novelties />,
  orders: <Orders />,
  pages: <Pages />,
  pipette: <Pipette />,
  placeholder: <Placeholder />,
  plus: <Plus />,
  points: <Points />,
  random: <Random />,
  remove: <Remove />,
  rocket: <Rocket />,
  sale: <Sale />,
  sections: <Sections />,
  send: <Send />,
  settings: <Settings />,
  shop: <Shop />,
  slider: <Slider />,
  tag: <Tag />,
  text: <Text />,
  turnAround: <TurnAround />,
  unit: <Unit />,
  user: <User />,
  users: <Users />,
  widthSM: <WidthSM />,
  wishlist: <Wishlist />,
  blockquote: <Blockquote />,
  bold: <Bold />,
  colorTransparent: <ColorTransparent />,
  eye: <Eye />,
  italic: <Italic />,
  link: <LinkIcon />,
  orderedList: <OrderedList />,
  paragraph: <Paragraph />,
  photo: <Photo />,
  telescope: <Telescope />,
  trophy: <Trophy />,
  titleDisabled: <TitleDisabled />,
  unorderedList: <UnorderedList />,
  widthIncrease: <WidthIncrease />
}

// C O M P O N E N T
export const Icon: React.FC<IconProps> = ({
  className,
  icon = 'menu',
  size = 'sm',
  style
}) => {
  return (
    <StyledIcon className={`icon ${className} ${size}`} style={style}>
      {ICONS[icon]}
    </StyledIcon>
  )
}

// S T Y L E S
const StyledIcon = styled.i`
  --icon-size: 1rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: var(--icon-size);
  height: var(--icon-size);
  
  svg {
    width: 100%;
    height: 100%;
    max-width: var(--icon-size);
    max-height: var(--icon-size);
  }

  &.xs {
    width: calc(var(--icon-size) * .8);
    height: calc(var(--icon-size) * .8);

    svg {
      max-width: calc(var(--icon-size) * .8);
      max-height: calc(var(--icon-size) * .8);
    }
  }

  &.md {
    width: calc(var(--icon-size) * 2);
    height: calc(var(--icon-size) * 2);

    svg {
      max-width: calc(var(--icon-size) * 2);
      max-height: calc(var(--icon-size) * 2);
    }
  }

  &.lg {
    width: calc(var(--icon-size) * 4);
    height: calc(var(--icon-size) * 4);

    svg {
      max-width: calc(var(--icon-size) * 4);
      max-height: calc(var(--icon-size) * 4);
    }
  }

  &.xl {
    width: calc(var(--icon-size) * 7);
    height: calc(var(--icon-size) * 7);

    svg {
      max-width: calc(var(--icon-size) * 7);
      max-height: calc(var(--icon-size) * 7);
    }
  }
`
