import React from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'

// L I B R A R Y
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface SpecialCategoriesProps {
  className?: string
  onClick?: () => void
  specialCategories?: SpecialCategory[]
}

export interface SpecialCategory {
  icon: IconName
  id: number
  name: string
  slug: string
}

// C O M P O N E N T
export const SpecialCategories: React.FC<SpecialCategoriesProps> = ({
  className,
  onClick,
  specialCategories
}) => {
  const location = useLocation()

  const specialCategoryOutput = React.useMemo(() => {
    return specialCategories && specialCategories.map((item) => {
      return (item.slug
        && (
          <NavLink
            key={item.slug}
            to={item.slug}
            className={`special-category-container ${className}`}
            onClick={(): void => { return (onClick && onClick()) }}
            isActive={(): boolean => { return location.pathname === item.slug }}
          >
            <span className='special-category'>{item.name}</span>
            <Icon icon={item.icon} />
          </NavLink>
        )
      )
    })
  }, [className, location.pathname, onClick, specialCategories])

  return (
    <StyledSpecialCategories>{specialCategoryOutput}</StyledSpecialCategories>
  )
}

// S T Y L E S
export const StyledSpecialCategories = styled.div`
  --category-icon-size: 8rem;
  
  display: grid;
  margin: 0 10px;
  font-size: var(--text-lg);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  grid-template-columns: 1fr 1fr;
  flex: 2;

  .special-category-container {
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    transition: var(--transition);
    background-color: var(--color-black);
    cursor: pointer;
    padding: var(--space-lg);
    min-height: 8rem;
    text-decoration: none;
    color: var(--color-white);

    @media (min-width: 60em) {
      background-color: var(--color-dark);
    }

    .special-category {
      font-size: var(--text-sm);
      font-weight: var(--font-weight-bd);
      transition: var(--transition);
      
      @media (min-width: 60em) {
        font-size: var(--text-md);
      }
    }

    i {
      position: absolute;
      right: 2rem;
      bottom: -1rem;
      opacity: 0.1;
      width: var(--category-icon-size);
      height: var(--category-icon-size);
      color: var(--color-white);
      transition: var(--transition);

      svg {
        width: 100%;
        max-width: var(--category-icon-size);
        max-height: var(--category-icon-size);
      }
    }

    &.active,
    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white-fix);

      i {
        opacity: 1;
      }

      svg,
      .special-category {
        color: var(--color-white-fix);
      }
    }
  }
`
StyledSpecialCategories.displayName = 'StyledSpecialCategories'
