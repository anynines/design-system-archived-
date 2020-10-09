import React from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'

// L I B R A R Y
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface SpecialCategoriesProps {
  specialCategories?: SpecialCategory[]
  onClick?: () => void
  className?: string
}

export interface SpecialCategory {
  id: number
  name: string
  slug: string
  icon: IconName
}

// C O M P O N E N T
export const SpecialCategories: React.FC<SpecialCategoriesProps> = ({
  className = 'StyledSpecialCategories',
  specialCategories,
  onClick
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
    background-color: var(--color-darker);
    cursor: pointer;
    padding: 1.4em;
    min-height: 8rem;
    text-decoration: none;
    color: var(--color-white);

    @media (min-width: 60em) {
      background-color: var(--color-dark);
    }

    .special-category {
      font-size: var(--text-md);
      font-weight: var(--font-weight-bd);
      transition: var(--transition);
      
      @media (min-width: 60em) {
        font-size: var(--text-lg);
      }
    }

    i {
      position: absolute;
      right: -1rem;
      bottom: -1rem;
      opacity: 0.1;
      width: 60%;
      height: 85%;
      color: var(--color-white);
      transition: var(--transition);

      svg {
        width: 100%;
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
