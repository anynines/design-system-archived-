import React, { FC } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'
import { TableChildrenProps, TableRow, getCellValue } from './Table'
import { Row } from './Row'
import { Cell } from './Cell'

export interface BodyProps extends TableChildrenProps {
  fields: string[]
}

export const Body: FC<BodyProps> = (props) => {
  const { data, fields } = props
  const childrenProps = { ...props }
  delete childrenProps.fields

  const renderCells = (row): JSX.Element[] => {
    return fields.map((field: string, cellIndex: number) => {
      const value = getCellValue(row, field)
      return (
        <Cell
          type='body'
          value={value}
          key={field + cellIndex.toString()}
          {...childrenProps}
        />
      )
    })
  }

  const renderRow = (row): JSX.Element => {
    return (
      <Row key={row.id.toString()}>
        {renderCells(row)}
      </Row>
    )
  }

  const children = data.map((row: TableRow) => { return renderRow(row) })

  return (
    <StyledBody>
      {getChildrenWithNewProps(children, childrenProps)}
    </StyledBody>
  )
}

const StyledBody = styled.tbody`
`
