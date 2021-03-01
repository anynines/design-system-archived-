import React from 'react'

const TableDraggableIcon = (): JSX.Element => {
  return (
    <svg
      width='240'
      height='200'
      viewBox='0 0 240 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <filter x='-29.3%' y='-29.3%' width='158.5%' height='158.5%' filterUnits='objectBoundingBox' id='filter-1'>
          <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feGaussianBlur stdDeviation='2' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
          <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1' />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='table' transform='translate(5.000000, 35.000000)'>
          <rect id='Rectangle' fill='#062035' x='0' y='0' width='227' height='153' rx='5' />
          <g id='table-head'>
            <path d='M5,0 L222,0 C224.761424,-5.07265313e-16 227,2.23857625 227,5 L227,26 L227,26 L0,26 L0,5 C-3.38176876e-16,2.23857625 2.23857625,5.07265313e-16 5,0 Z' id='Rectangle' fill='#E4833E' />
            <rect id='Rectangle' fill='#FFFFFF' x='11.5816327' y='9.45454545' width='32.4285714' height='7.09090909' rx='2' />
            <rect id='Rectangle' fill='#FFFFFF' x='68.3316327' y='9.45454545' width='37.0612245' height='5.90909091' rx='2' />
            <rect id='Rectangle' fill='#FFFFFF' x='130.872449' y='9.45454545' width='34.744898' height='5.90909091' rx='2' />
            <rect id='Rectangle' fill='#FFFFFF' x='189.938776' y='9.45454545' width='25.4795918' height='5.90909091' rx='2' />
            <rect id='Rectangle' fill='#FFFFFF' x='11.5816327' y='9.45454545' width='32.4285714' height='5.90909091' rx='2' />
          </g>
          <g id='table-row-1' transform='translate(0.000000, 26.000000)' fill='#FFFFFF'>
            <rect id='Rectangle' fillOpacity='0' x='0' y='0' width='227' height='26' />
            <rect id='Rectangle' x='11.5816327' y='9.45454545' width='28.9540816' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='68.3316327' y='9.45454545' width='32.4285714' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='130.872449' y='9.45454545' width='42.8520408' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='191.096939' y='9.45454545' width='25.4795918' height='5.90909091' rx='2' />
          </g>
          <g id='table-row-2' transform='translate(0.000000, 51.000000)' fill='#FFFFFF'>
            <rect id='Rectangle' fillOpacity='0' x='0' y='0' width='227' height='26' />
            <rect id='Rectangle' x='11.5816327' y='9.45454545' width='37.0612245' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='68.3316327' y='9.45454545' width='34.744898' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='130.872449' y='9.45454545' width='34.744898' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='191.096939' y='9.45454545' width='25.4795918' height='5.90909091' rx='2' />
          </g>
          <g id='table-row-3' transform='translate(0.000000, 76.000000)' fill='#FFFFFF'>
            <rect id='Rectangle' fillOpacity='0' x='0' y='0' width='227' height='26' />
            <rect id='Rectangle' x='11.5816327' y='9.45454545' width='28.9540816' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='68.3316327' y='9.45454545' width='45.1683673' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='130.872449' y='9.45454545' width='42.8520408' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='191.096939' y='9.45454545' width='25.4795918' height='5.90909091' rx='2' />
          </g>
          <g id='table-row-4' transform='translate(0.000000, 101.000000)' fill='#FFFFFF'>
            <rect id='Rectangle' fillOpacity='0' x='0' y='0' width='227' height='26' />
            <rect id='Rectangle' x='11.5816327' y='9.45454545' width='32.4285714' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='68.3316327' y='9.45454545' width='42.8520408' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='130.872449' y='9.45454545' width='39.377551' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='191.096939' y='9.45454545' width='25.4795918' height='5.90909091' rx='2' />
          </g>
          <g id='table-footer' transform='translate(0.000000, 127.000000)' fill='#FFFFFF'>
            <path d='M0,0 L227,0 L227,21 C227,23.7614237 224.761424,26 222,26 L5,26 C2.23857625,26 3.38176876e-16,23.7614237 0,21 L0,0 L0,0 Z' id='Rectangle' fillOpacity='0.15' />
            <rect id='Rectangle' x='11.5816327' y='9.45454545' width='31.2704082' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='67.1734694' y='9.45454545' width='37.0612245' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='129.714286' y='9.45454545' width='34.744898' height='5.90909091' rx='2' />
            <rect id='Rectangle' x='189.938776' y='9.45454545' width='25.4795918' height='5.90909091' rx='2' />
          </g>
        </g>
        <g id='move' filter='url(#filter-1)' transform='translate(98.000000, 5.000000)' fill='#FFFFFF' fillRule='nonzero'>
          <path d='M40.6280357,19.6387981 L33.926111,13.331112 C33.5826546,13.0076758 33.079682,12.9194295 32.6464576,13.1066526 C32.2133133,13.2937955 31.9328786,13.7204526 31.9328786,14.1923539 L31.9328786,16.9520116 L24.0481955,16.9520116 L24.0481955,9.06734388 L26.8078586,9.06734388 C27.2796808,9.06734388 27.7064188,8.78690974 27.8935621,8.35376632 C28.0807054,7.92062289 27.992539,7.41765121 27.6691022,7.07411538 L21.3613237,0.372123774 C21.1378248,0.134691669 20.8261595,0 20.5000801,0 C20.1740007,0 19.8623354,0.134691669 19.6388365,0.372123774 L13.331138,7.07411538 C13.0077012,7.41765121 12.9195348,7.92062289 13.1066782,8.35376632 C13.2938215,8.78690974 13.7204794,9.06734388 14.1923816,9.06734388 L16.9520447,9.06734388 L16.9520447,16.9520116 L9.06736159,16.9520116 L9.06736159,14.1923539 C9.06736159,13.7205327 8.7869269,13.2937955 8.35378263,13.1066526 C7.92055828,12.9195096 7.41766569,13.0076758 7.0741292,13.331112 L0.3721245,19.6387981 C0.134691932,19.8622966 0,20.1739613 0,20.50004 C0,20.8261188 0.134691932,21.1377835 0.3721245,21.361282 L7.07404912,27.6689681 C7.41758562,27.9924043 7.9204782,28.0806505 8.35370255,27.8934275 C8.78684682,27.7062846 9.06728151,27.2796275 9.06728151,26.8077262 L9.06728151,24.0480685 L16.9519647,24.0480685 L16.9519647,31.9327362 L14.1923015,31.9327362 C13.7204794,31.9327362 13.2937414,32.2131703 13.1065981,32.6463138 C12.9194548,33.0794572 13.0076211,33.5824289 13.3310579,33.9259647 L19.6387564,40.6278762 C19.8621752,40.8653884 20.1739206,41 20.5,41 C20.8260794,41 21.1377447,40.8653083 21.3612436,40.6278762 L27.6689421,33.9259647 C27.9923789,33.5824289 28.0805452,33.0794572 27.8934019,32.6463138 C27.7062586,32.2131703 27.2796007,31.9327362 26.8076985,31.9327362 L24.0480353,31.9327362 L24.0480353,24.0480685 L31.9327185,24.0480685 L31.9327185,26.8077262 C31.9327185,27.2795474 32.2131532,27.7062846 32.6462974,27.8934275 C33.0795218,28.0805705 33.5824945,27.9924043 33.9259509,27.6689681 L40.6278755,21.361282 C40.8653881,21.1378636 41,20.8261188 41,20.50004 C41,20.1739613 40.8654682,19.8622966 40.6280357,19.6387981 Z' id='Path' />
        </g>
      </g>
    </svg>
  )
}

export default TableDraggableIcon
