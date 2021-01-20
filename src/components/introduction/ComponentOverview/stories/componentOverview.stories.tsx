import React from 'react'

// C O M P O N E N T S
import Wrapper from '../../../_helpers/Wrapper'
import { ComponentOverview } from '../ComponentOverview'
import { Card } from '../../../molecules/Card/Card'
import { CardGrid } from '../../../molecules/Card/CardGrid'

// L I S T  O F  C O M P O N E N T S
import atoms from './componentData/atoms.json'
import molecules from './componentData/molecules.json'

// T Y P E S
import { ComponentIconName } from '../../../introduction/ComponentOverview/ComponentIcon'
import { IconName } from '../../../atoms/Icon/Icon'

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

export const Overview = () => {
  const renderCards = (components): JSX.Element => {
    return (
      <>
        {
          Object.values(components).map((item: any): JSX.Element => {
            switch (item.type) {
              case 'icon':
                return (
                  <Card title={`${item.title}`} >
                    <Card.Image
                      linkUrl={`/?path=/story/${item.link}`}
                      icon={`${item.icon}` as IconName}
                      iconSize='xl'
                      type='icon'
                    />
                  </Card>
                )
              case 'image':
                return (
                  <Card title={`${item.title}`} >
                    <Card.Image
                      linkUrl={`/?path=/story/${item.link}`}
                      imageUrl={`${item.icon}`}
                      type='image'
                    />
                  </Card>
                )
              case 'component':
                return (
                  <Card title={`${item.title}`} >
                    <Card.Image
                      linkUrl={`/?path=/story/${item.link}`}
                      componentIcon={`${item.icon}` as ComponentIconName}
                      type='component'
                    />
                  </Card>
                )
              default:
                return (
                  <></>
                )
            }
          })
        }
      </>
    )
  }

  return (
    <>
      <Wrapper align='flex-start' direction='column'>
        <h3>💧 Atoms</h3>
        <CardGrid gridColumnsDesktop={4}>
          {renderCards(atoms)}
        </CardGrid>
      </Wrapper>

      <Wrapper align='flex-start' direction='column'>
        <h3>🌱 Molecules</h3>
        <CardGrid gridColumnsDesktop={4}>
          {renderCards(molecules)}
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
}
