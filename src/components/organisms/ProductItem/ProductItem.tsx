import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface ProductItemProps {
  className?: string
  deleteItem: () => void
  move?: () => void
  moveIcon: IconName
  product: {
    title: string
    imageUrl: string
    variations: string[]
    price: number
  } | undefined
  quantity: number
  setItemQuantity?: (itemQuantity: number) => void
}

// C O M P O N E N T
export const ProductItem: React.FC<ProductItemProps> = ({
  className,
  deleteItem,
  move,
  moveIcon,
  product = {
    title: '',
    imageUrl: '',
    variations: [],
    price: 0
  },
  quantity: productInitialQuantity
}) => {
  const [quantity, setQuantity] = React.useState<number>(productInitialQuantity)

  const decrementQuantity = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <StyledProductItem className={`product-item ${className}`}>
      <div className='image'>
        <div
          className='image-container'
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        />
      </div>
      <div className='info'>
        <div className='top'>
          <div className='title'>{product.title}</div>
        </div>
        <div className='bottom'>
          <div className='quantity'>
            <button
              type='button'
              className='change-quantity'
              onClick={decrementQuantity}
            >
              <Icon icon='minus' />
            </button>
            <span>{quantity}</span>
            <button
              type='button'
              className='change-quantity'
              onClick={(): void => { setQuantity(quantity + 1) }}
            >
              <Icon icon='plus' />
            </button>
          </div>
          <span className='price'>
            <Icon icon='points' />
            <span>{product.price}</span>
          </span>
        </div>
      </div>
      <div className='actions'>
        <button type='button' className='action' onClick={(): void => { return deleteItem && deleteItem() }}>
          <Icon icon='bin' />
        </button>
        <button type='button' className='action' onClick={(): void => { return move && move() }}>
          <Icon icon={moveIcon} />
        </button>
      </div>
      <div />
    </StyledProductItem>
  )
}

// S T Y L E S
const StyledProductItem = styled.div`
  --image-size: 5rem;
  
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-md);
  background-color: var(--color-dark);
  cursor: pointer;
  border-radius: var(--radius);
  color: var(--color-white);

  svg {
    height: 1rem;
  }

  .image {
    position: relative;
    overflow: hidden;
    margin-right: var(--space-lg);
    width: var(--image-size);
    min-width: var(--image-size);
    height: var(--image-size);

    .image-container {
      background-position: center center;
      width: inherit;
      height: inherit;
      background-size: cover;
      transition: var(--transition);
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: -2.5rem;
    background-color: transparent;
    background-color: var(--color-dark);
    min-width: 2.5rem;
    height: 100%;
    color: var(--color-white);
    transition: var(--transition);
    
    &:before {
      position: absolute;
      top: calc(50% - .75rem);
      left: -0.4rem;
      background-color: var(--color-black);
      width: .4rem;
      height: 1.5rem;
      content: '';
      border-radius: .25rem 0 0 .25rem;
      transition: var(--transition);
    }

    .action {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: var(--color-black-50);
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
      color: var(--color-white);
      outline: none;
      transition: var(--transition);

      &:hover {
        background-color: var(--color-primary);
        color: var(--color-white-fix);
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-right: var(--space-lg);
    transition: var(--transition);
    width: 100%;
    color: var(--color-white);

    .top {
      margin-bottom: .3rem;

      .title {
        margin-bottom: .3rem;
        white-space: nowrap;
        font-size: .75em;
        font-weight: var(--font-weight-bd);
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        display: flex;
        align-items: center;

        svg {
          margin-right: .25rem;
        }

        span {
          font-size: .75em;
          font-weight: var(--font-weight-bd);
        }
      }

      .quantity {
        display: flex;

        span {
          font-size: .75em;
          font-weight: var(--font-weight-bd);
        }

        .change-quantity,
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
        }
        
        .change-quantity {
          border: none;
          background-color: var(--color-black);
          cursor: pointer;
          color: var(--color-white);
          border-radius: var(--radius);
          outline: none;
          transition: var(--transition);
          
          i {
            width: 12px;
            svg {
              width: 100%;
            }
          }
          
          &:hover {
            background-color: var(--color-primary);
            color: var(--color-white-fix);
          }
        }
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    .image-container {
      transform: scale(1.25);
    }

    .info {
      margin-right: 3.2rem;
    }

    .actions {
      right: 0;

      &:before {
        left: 0;
        opacity: 0;
      }
    }
  }

  @media (max-width: 60em) {
    margin-bottom: var(--space-fixed-xs);
    background-color: var(--color-black);
    padding-right: 4.3rem;

    .actions {
      right: 0;
    }

    .action {
      background-color: var(--color-dark-50);
    }

    .info .bottom .quantity .change-quantity {
      background-color: var(--color-dark-50);
    }
    
    .info {
      margin-right: 0;
    }
    
    &:hover {
      .info {
        margin-right: 4.3rem;
      }
    }
  }
`
StyledProductItem.displayName = 'StyledProductItem'
