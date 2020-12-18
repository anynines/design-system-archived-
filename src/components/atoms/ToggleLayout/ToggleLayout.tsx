import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export interface ToggleLayoutProps {
  to?: string
}

export const ToggleLayout: React.FC<ToggleLayoutProps> = ({
  to = '/'
}) => {
  return (
    <StyledToggleLayout>
      <NavLink to={to}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='59.967'
          height='59.716'
          viewBox='0 0 59.967 59.716'
        >
          <g
            id='Gruppe_17157'
            data-name='Gruppe 17157'
            transform='translate(0.002 0.001)'
          >
            <path
              id='toggle-layout-bg'
              data-name='Vereinigungsmenge 20'
              d='M6074,9391.716V9352h0v-20h9.791c.07,0,.141,0,.209,0h30v0h19.964A19.979,19.979,0,0,0,6114,9351.462v.54a20,20,0,0,1-20,20l-.007,0a19.979,19.979,0,0,0-19.99,19.712Z'
              transform='translate(-6074.002 -9332.001)'
              fill='var(--color-black)'
            />
            <g id='icon' transform='translate(12.854 13.944)'>
              <path
                id='Pfad_296'
                data-name='Pfad 296'
                d='M10.507,21.507H4.666l.489-1.2a.622.622,0,0,0-.932-.744L.268,22.314A.623.623,0,0,0,.3,23.358L4.436,25.87a.624.624,0,0,0,.886-.8l-.544-1.15h5.729a.773.773,0,0,1,.767.773v4.19a.762.762,0,0,1-.767.76H4.167a1.024,1.024,0,0,0-1.024,1.024v.362a1.024,1.024,0,0,0,1.024,1.024h6.34a3.175,3.175,0,0,0,3.176-3.17v-4.19A3.186,3.186,0,0,0,10.507,21.507Z'
                transform='translate(0 -19.455)'
                fill='var(--color-white)'
              />
            </g>
          </g>
        </svg>
      </NavLink>
    </StyledToggleLayout>
  )
}

const StyledToggleLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  #toggle-layout-bg {
    transition: var(--transition);
  }
  
  &:hover {
    #toggle-layout-bg {
      fill: var(--color-primary);
      box-shadow: var(--box-shadow);
    }
  }
`
