import React from 'react'

const dashboard = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
    >
      <defs>
        <filter
          id='Pfad_3'
          x='0'
          y='0'
          width='12.417'
          height='10.667'
          filterUnits='userSpaceOnUse'
        >
          <feOffset />
          <feGaussianBlur stdDeviation='1' result='blur' />
          <feFlood floodColor='currentColor' floodOpacity='0.251' />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Pfad_4'
          x='0'
          y='5.833'
          width='12.417'
          height='14.167'
          filterUnits='userSpaceOnUse'
        >
          <feOffset />
          <feGaussianBlur stdDeviation='1' result='blur-2' />
          <feFlood floodColor='currentColor' floodOpacity='0.251' />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Pfad_5'
          x='7.583'
          y='9.333'
          width='12.417'
          height='10.667'
          filterUnits='userSpaceOnUse'
        >
          <feOffset />
          <feGaussianBlur stdDeviation='1' result='blur-3' />
          <feFlood floodColor='currentColor' floodOpacity='0.251' />
          <feComposite operator='in' in2='blur-3' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Pfad_6'
          x='7.583'
          y='0'
          width='12.417'
          height='14.167'
          filterUnits='userSpaceOnUse'
        >
          <feOffset />
          <feGaussianBlur stdDeviation='1' result='blur-4' />
          <feFlood floodColor='currentColor' floodOpacity='0.251' />
          <feComposite operator='in' in2='blur-4' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g id='dashboard' transform='translate(3 3)'>
        <g transform='matrix(1, 0, 0, 1, -3, -3)' filter='url(#Pfad_3)'>
          <path
            id='Pfad_3-2'
            data-name='Pfad 3'
            d='M5.4,0H1.021A1.022,1.022,0,0,0,0,1.021V3.646A1.022,1.022,0,0,0,1.021,4.667H5.4A1.022,1.022,0,0,0,6.417,3.646V1.021A1.022,1.022,0,0,0,5.4,0Zm0,0'
            transform='translate(3 3)'
            fill='currentColor'
          />
        </g>
        <g transform='matrix(1, 0, 0, 1, -3, -3)' filter='url(#Pfad_4)'>
          <path
            id='Pfad_4-2'
            data-name='Pfad 4'
            d='M5.4,213.332H1.021A1.022,1.022,0,0,0,0,214.353v6.125A1.022,1.022,0,0,0,1.021,221.5H5.4a1.022,1.022,0,0,0,1.021-1.021v-6.125A1.022,1.022,0,0,0,5.4,213.332Zm0,0'
            transform='translate(3 -204.5)'
            fill='currentColor'
          />
        </g>
        <g transform='matrix(1, 0, 0, 1, -3, -3)' filter='url(#Pfad_5)'>
          <path
            id='Pfad_5-2'
            data-name='Pfad 5'
            d='M282.728,341.332h-4.375a1.022,1.022,0,0,0-1.021,1.021v2.625A1.022,1.022,0,0,0,278.353,346h4.375a1.022,1.022,0,0,0,1.021-1.021v-2.625A1.022,1.022,0,0,0,282.728,341.332Zm0,0'
            transform='translate(-266.75 -329)'
            fill='currentColor'
          />
        </g>
        <g transform='matrix(1, 0, 0, 1, -3, -3)' filter='url(#Pfad_6)'>
          <path
            id='Pfad_6-2'
            data-name='Pfad 6'
            d='M282.728,0h-4.375a1.022,1.022,0,0,0-1.021,1.021V7.146a1.022,1.022,0,0,0,1.021,1.021h4.375a1.022,1.022,0,0,0,1.021-1.021V1.021A1.022,1.022,0,0,0,282.728,0Zm0,0'
            transform='translate(-266.75 3)'
            fill='currentColor'
          />
        </g>
      </g>
    </svg>
  )
}

export default dashboard