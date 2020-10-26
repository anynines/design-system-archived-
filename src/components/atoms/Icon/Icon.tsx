import React, { FC } from 'react'
import styled from 'styled-components'

// A S S E T S

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
import CaretRight from './assets/caretRight'
import Cart from './assets/cart'
import Close from './assets/close'
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
import Globe from './assets/globe'
import Grid1 from './assets/grid1'
import Grid2 from './assets/grid2'
import Grid4 from './assets/grid4'
import Grid8 from './assets/grid8'
import Grid16 from './assets/grid16'

// H
import Heart from './assets/heart'

// I
import Info from './assets/info'
import Italic from './assets/italic'

// L
import LangDE from './assets/languages/de'
import LangEN from './assets/languages/en'
import LangSP from './assets/languages/sp'
import LangIT from './assets/languages/it'
import Layout from './assets/layout'
import Light from './assets/light'
import LinkIcon from './assets/link'
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
import TitleDisabled from './assets/titleDisabled'
import TurnAround from './assets/turnAround'
import Telescope from './assets/telescope'

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
export interface IconProps {
  icon?: IconName
  className?: string
  dataFor?: string
}

// T Y P E S
export type IconName = 'arrowUpRight'
  | 'bestseller'
  | 'bin'
  | 'button'
  | 'calendar'
  | 'camera'
  | 'caretDown'
  | 'caretRight'
  | 'cart'
  | 'close'
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
  | 'globe'
  | 'grid1'
  | 'grid2'
  | 'grid4'
  | 'grid8'
  | 'grid16'
  | 'heart'
  | 'info'
  | 'LangDE'
  | 'LangEN'
  | 'LangSP'
  | 'LangIT'
  | 'layout'
  | 'light'
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
  caretRight: <CaretRight />,
  cart: <Cart />,
  close: <Close />,
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
  globe: <Globe />,
  grid1: <Grid1 />,
  grid2: <Grid2 />,
  grid4: <Grid4 />,
  grid8: <Grid8 />,
  grid16: <Grid16 />,
  heart: <Heart />,
  info: <Info />,
  LangDE: <LangDE />,
  LangEN: <LangEN />,
  LangSP: <LangSP />,
  LangIT: <LangIT />,
  layout: <Layout />,
  light: <Light />,
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
  titleDisabled: <TitleDisabled />,
  unorderedList: <UnorderedList />,
  widthIncrease: <WidthIncrease />
}

// C O M P O N E N T
export const Icon: FC<IconProps> = (props) => {
  const { icon = 'menu', className, dataFor } = props
  return (
    <StyledIcon className={className} {...dataFor ? { 'data-tip': true, 'data-for': dataFor } : {}}>
      {ICONS[icon]}
    </StyledIcon>
  )
}

// S T Y L E S
const StyledIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  
  svg {
    width: 100%;
  }
`
