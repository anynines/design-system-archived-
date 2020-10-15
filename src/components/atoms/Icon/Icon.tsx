import React, { FC } from 'react'
import styled from 'styled-components'

// A S S E T S

// B
import Bestseller from './assets/bestseller'
import Bin from './assets/bin'
import Blockquote from './assets/blockquote'
import Bold from './assets/bold'
import Button from './assets/button'

// C
import Camera from './assets/camera'
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
import Eye from './assets/eye'

// F
import Filter from './assets/filter'
import Folder from './assets/folder'
import Font from './assets/font'

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
import UnorderedList from './assets/unorderedList'

// W
import WidthSM from './assets/widthSM'
import WidthIncrease from './assets/widthIncrease'
import Wishlist from './assets/wishlist'

// I N T E R F A C E S
export interface IconProps {
  icon?: IconName
  className?: string
}

// T Y P E S
export type IconName =
  | 'bestseller'
  | 'bin'
  | 'button'
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
  | 'filter'
  | 'folder'
  | 'font'
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

// C O M P O N E N T
export const Icon: FC<IconProps> = ({ icon = 'menu', className }: IconProps) => {
  const getIconComponent = (): JSX.Element => {
    switch (icon) {
      case 'bestseller':
        return <Bestseller />
      case 'bin':
        return <Bin />
      case 'button':
        return <Button />
      case 'camera':
        return <Camera />
      case 'caretDown':
        return <CaretDown />
      case 'caretRight':
        return <CaretRight />
      case 'cart':
        return <Cart />
      case 'close':
        return <Close />
      case 'color':
        return <Color />
      case 'customer':
        return <Customer />
      case 'dashboard':
        return <Dashboard />
      case 'delivery':
        return <Delivery />
      case 'drop':
        return <Drop />
      case 'edit':
        return <Edit />
      case 'filter':
        return <Filter />
      case 'folder':
        return <Folder />
      case 'font':
        return <Font />
      case 'globe':
        return <Globe />
      case 'grid1':
        return <Grid1 />
      case 'grid2':
        return <Grid2 />
      case 'grid4':
        return <Grid4 />
      case 'grid8':
        return <Grid8 />
      case 'grid16':
        return <Grid16 />
      case 'heart':
        return <Heart />
      case 'info':
        return <Info />
      case 'LangDE':
        return <LangDE />
      case 'LangEN':
        return <LangEN />
      case 'LangSP':
        return <LangSP />
      case 'LangIT':
        return <LangIT />
      case 'layout':
        return <Layout />
      case 'light':
        return <Light />
      case 'logout':
        return <Logout />
      case 'news':
        return <News />
      case 'menu':
        return <Menu />
      case 'minus':
        return <Minus />
      case 'minusInSquare':
        return <MinusInSquare />
      case 'moon':
        return <Moon />
      case 'notifications':
        return <Notifications />
      case 'novelties':
        return <Novelties />
      case 'orders':
        return <Orders />
      case 'pages':
        return <Pages />
      case 'pipette':
        return <Pipette />
      case 'placeholder':
        return <Placeholder />
      case 'plus':
        return <Plus />
      case 'points':
        return <Points />
      case 'random':
        return <Random />
      case 'remove':
        return <Remove />
      case 'sale':
        return <Sale />
      case 'sections':
        return <Sections />
      case 'send':
        return <Send />
      case 'settings':
        return <Settings />
      case 'shop':
        return <Shop />
      case 'slider':
        return <Slider />
      case 'tag':
        return <Tag />
      case 'text':
        return <Text />
      case 'turnAround':
        return <TurnAround />
      case 'user':
        return <User />
      case 'users':
        return <Users />
      case 'widthSM':
        return <WidthSM />
      case 'wishlist':
        return <Wishlist />
      case 'blockquote':
        return <Blockquote />
      case 'bold':
        return <Bold />
      case 'colorTransparent':
        return <ColorTransparent />
      case 'eye':
        return <Eye />
      case 'italic':
        return <Italic />
      case 'link':
        return <LinkIcon />
      case 'orderedList':
        return <OrderedList />
      case 'paragraph':
        return <Paragraph />
      case 'photo':
        return <Photo />
      case 'telescope':
        return <Telescope />
      case 'titleDisabled':
        return <TitleDisabled />
      case 'unorderedList':
        return <UnorderedList />
      case 'widthIncrease':
        return <WidthIncrease />

      default:
        return <Menu />
    }
  }

  return (
    <StyledIcon className={className}>
      {getIconComponent()}
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
