import React from 'react'

// C O M P O N E N T S
import Wrapper from '../../../_helpers/Wrapper'
import { ComponentOverview } from '../ComponentOverview'
import { Card } from '../../../molecules/Card/Card'
import { CardGrid } from '../../../molecules/Card/CardGrid'

// L I S T  O F  C O M P O N E N T S
import atoms from './componentData/atoms.json'
import molecules from './componentData/molecules.json'
import organisms from './componentData/organisms.json'

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
        </CardGrid>
      </Wrapper>

      <Wrapper align='flex-start' direction='column'>
        <h3>🌳 Organisms</h3>
        <CardGrid gridColumnsDesktop={4}>
          {renderCards(organisms)}
          <Card title='SortableTable' />
        </CardGrid>
      </Wrapper>
    </>
  )
}
