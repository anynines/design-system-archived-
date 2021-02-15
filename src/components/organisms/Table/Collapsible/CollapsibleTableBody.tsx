import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import { Icon } from '../../../atoms/Icon/Icon'
import ButtonNaked from './ButtonNaked'
import { TBody } from '../Table/TBody'
import { TRow } from '../Table/TRow'
import { TCell } from '../Table/TCell'

// I N T E R F A C E
export interface CollapsibleRow {
  id: string
  values: string[]
}
export interface CollapsibleTableRow extends CollapsibleRow {
  rows?: CollapsibleRow[]
}
export interface CollapsibleTableBodyProps {
  bodyData: CollapsibleTableRow[]
}

// C O M P O N E N T
const CollapsibleTableBody: React.FC<CollapsibleTableBodyProps> = (props) => {
  const { bodyData } = props

  const [collapsedRowIds, setCollapsedRowIds] = React.useState<string[]>([])

  const isRowCollapsed = (row: CollapsibleTableRow): boolean => {
    return !collapsedRowIds.includes(row.id)
  }

  const renderToggleRowBtn = (row: CollapsibleTableRow): JSX.Element => {
    const areRowsHidden = isRowCollapsed(row)

    const hideCollapsibleRows = (): void => {
      const arrayWithoutRowId = collapsedRowIds.filter((rowId) => {
        return rowId !== row.id
      })

      setCollapsedRowIds(arrayWithoutRowId)
    }

    if (areRowsHidden) {
      return (
        <ButtonNaked
          onClick={(): void => { setCollapsedRowIds([...collapsedRowIds, row.id]) }}
        >
          <Icon icon='minus' />
        </ButtonNaked>
      )
    }

    return (
      <ButtonNaked
        onClick={hideCollapsibleRows}
      >
        <Icon icon='plus' />
      </ButtonNaked>
    )
  }

  const renderRowFirstColumnCell = (row: CollapsibleTableRow, isCollapsible = true, id): JSX.Element => {
    const value = row.values[0]
    return (
      <TCell key={`${id}-cell-0`} className={isCollapsible ? '' : 'highlight-primary'}>
        {value}
        {isCollapsible && renderToggleRowBtn(row)}
      </TCell>
    )
  }

  const renderCollapsedRows = (rows: CollapsibleRow[]): JSX.Element[] => {
    return (
      rows.map((innerRow) => {
        const innerRowId = innerRow.id
        return (
          <TRow
            key={`inner-row-${innerRowId}`}
          >
            {renderRowFirstColumnCell(innerRow, false, innerRowId)}
            {innerRow.values.slice(1).map((value, index) => {
              return (
                <StyledCollapsedCell key={`${innerRowId}-cell-${index.toString()}`}>
                  {value}
                </StyledCollapsedCell>
              )
            })}
          </TRow>
        )
      })
    )
  }

  const renderCollapsibleRow = (row: CollapsibleTableRow): JSX.Element => {
    const rowId = `row-${row.id}`
    return (
      <React.Fragment key={rowId}>
        <TRow
          className={isRowCollapsed(row) ? '' : 'opened'}
        >
          {renderRowFirstColumnCell(row, true, rowId)}
          {row.values.slice(1).map((value, index) => {
            return (
              <TCell key={`${rowId}-cell-${index.toString()}`}>
                {value}
              </TCell>
            )
          })}
        </TRow>
        {isRowCollapsed(row) && row.rows && renderCollapsedRows(row.rows)}
      </React.Fragment>
    )
  }

  return (
    <TBody>
      {bodyData.map((row) => {
        return renderCollapsibleRow(row)
      })}
    </TBody>
  )
}

const StyledCollapsedCell = styled(TCell)`
  background-color: var(--color-dark-80);
`

export default CollapsibleTableBody
