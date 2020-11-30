import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ModuleFooterProps {
  className?: string
  itemLabel: string
  priceLabel: string
  totalItems: number
  totalPrice: number
}

// C O M P O N E N T
export const ModuleFooter: React.FC<ModuleFooterProps> = ({
  children,
  className,
  itemLabel,
  priceLabel,
  totalItems,
  totalPrice
}) => {
  const getItemsIndicator = (): JSX.Element => {
    if (totalItems > 0) {
      return (
        <>
          <div className='numbers'>
            <div className='item'>
              <span className='number'>{totalItems}</span>
              <span className='label'>
                {itemLabel}
              </span>
            </div>
            <div className='item'>
              <span className='number'>{totalPrice}</span>
              <span className='label'>
                {priceLabel}
              </span>
            </div>
          </div>
          {children}
        </>
      )
    }

    return (
      <h2>No items here yet</h2>
    )
  }

  return (
    <StyledModuleFooter className={`module-footer ${className}`}>
      {getItemsIndicator()}
    </StyledModuleFooter>
  )
}

// S T Y L E S
const StyledModuleFooter = styled.div`
  margin-top: var(--space-md);
  background-color: var(--color-dark);
  padding: var(--space-md);
  width: 100%;
  min-height: 5rem;
  color: var(--color-white);
  border-radius: 0 0 var(--radius) var(--radius);

  h2 {
    opacity: 0.5;
    text-align: center;
    font-size: var(--text-md);
  }

  .numbers {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--space-md);

    .item {
      display: flex;
      flex-direction: column;

      .number {
        font-size: var(--text-lgr);
        font-weight: var(--font-weight-bd);
      }

      .label {
        opacity: 0.5;
        font-size: var(--text-md);
        font-weight: var(--font-weight-bd);
      }

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }
`
StyledModuleFooter.displayName = 'StyledModuleFooter'
