import React from 'react'
import { action } from '@storybook/addon-actions'

import { Icon } from '../../Icon/Icon'
import { Button } from '../../Button/Button'
import { ModuleWrapper, ModuleWrapperProps } from '../ModuleWrapper/ModuleWrapper'
import { ModuleHeader } from '../ModuleHeader/ModuleHeader'
import { ModuleContent } from '../ModuleContent/ModuleContent'
import { ModuleFooter } from '../ModuleFooter/ModuleFooter'
import { ProductItem } from '../../../organisms/ProductItem/ProductItem'

export default {
  title: 'Atoms/Module',
  component: ModuleWrapper,
  argTypes: {
    customWidth: {
      control: { type: 'boolean' }
    },
    width: {
      control: { type: 'number' }
    },
  }
}

const SampleProduct =
{
  title: 'Something very special',
  imageUrl: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  variations: [],
  price: 142
}

export const Basic = (args: ModuleWrapperProps) => (
  <div style={{ minHeight: '500px', position: 'relative', padding: '30px' }}>
    <ModuleWrapper
      {...args}
      style={{ position: 'relative', top: 0 }}
    >

      <ModuleHeader>
        <Icon icon='cart' />
        <span>Cart</span>
      </ModuleHeader>

      <ModuleContent>
        <ProductItem
          moveIcon={'pipette'}
          deleteItem={action('delete-click')}
          move={action('move-click')}
          product={SampleProduct}
          quantity={1}
        />
        <ProductItem
          moveIcon={'pipette'}
          deleteItem={action('delete-click')}
          move={action('move-click')}
          product={SampleProduct}
          quantity={1}
        />
      </ModuleContent>

      <ModuleFooter
        totalItems={12}
        itemLabel={'Artikel'}
        totalPrice={142}
        priceLabel={'Preis'}
      >
        <Button type='primary'>
          <span>Kaufen</span>
        </Button>
      </ModuleFooter>
    </ModuleWrapper>
  </div>
)
