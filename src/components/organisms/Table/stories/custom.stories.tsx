import React from 'react'

import { CustomTable as Table, TableAccessor, DraggableTableDataProps, SortableTableDataProps, TableColumn, TableColumnCell, TableColumnCellColor, TableColumnIcon, CustomTableRow as TableRow } from '../Custom/CustomTable'

export default {
  title: '🌳 Organisms/CustomTable',
  component: Table,
  argTypes: {
    tableHeaderData: {
      control: { type: 'TableColumn[]' }
    },
    getTableColumnColor: {
      control: { type: '(type: TableAccessor) => TableColumnCellColor' }
    },
    getTableColumnType: {
      control: { type: '(type: TableAccessor) => TableColumnCell' }
    },
    getTableColumnIconType: {
      control: { type: '(type: TableAccessor) => TableColumnIcon' }
    },
    disabledCategories: {
      control: { type: 'string[]' }
    },
    type: {
      control: { type: 'select', options: ['sortable', 'draggable'] }
    },
    pages: {
      control: { type: 'TableRow[]' }
    },
    pagesPerFolder: {
      control: { type: 'number' }
    },
    folderLimit: {
      control: { type: 'number' }
    }
  }
}

const tableHeaderData: TableColumn[] = [
  {
    Header: 'page',
    accessor: 'page',
    sortType: 'basic'
  },
  {
    Header: 'status',
    accessor: 'status'
  },
  {
    Header: 'permissions',
    accessor: 'permissions'
  },
  {
    Header: 'languages',
    accessor: 'languages'
  },
  {
    Header: 'views',
    accessor: 'views',
    sortType: 'basic'
  },
  {
    Header: 'authors',
    accessor: 'authors'
  },
  {
    Header: 'sections',
    accessor: 'sections'
  }
]

const getTableColumnColor = (type: TableAccessor | null): TableColumnCellColor | null => {
  switch (type) {
    case 'status': case 'views':
      return 'blue'
    case 'permissions':
      return 'black'
    default:
      return null
  }
}

const getTableColumnType = (type: TableAccessor | null): TableColumnCell | null => {
  switch (type) {
    case 'status': case 'permissions':
      return 'sticker'
    case 'sections': case 'authors': case 'languages':
      return 'icons'
    case 'views':
      return 'icon'
    default:
      return null
  }
}

const getTableColumnIconType = (type: TableAccessor | null): TableColumnIcon | null => {
  switch (type) {
    case 'sections':
      return 'icon'
    default:
      return null
  }
}

const initialPages: TableRow[] = [
  {
    'id': 0,
    'page': 'First Page',
    'status': 'published',
    'permissions': 'public',
    'languages': [
      'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/512px-United-kingdom_flag_icon_round.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
    ],
    'views': 1234,
    'authors': [
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'
    ],
    'sections': [
      'grid1',
      'slider',
      'pages'
    ],
    'slug': '/A/first-page',
    'category': 'A',
    'title': 'First Page',
    'name': 'First Page',
    'published': true
  },
  {
    'id': 1,
    'page': 'Second Page',
    'status': 'published',
    'permissions': 'public',
    'languages': [
      'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/512px-United-kingdom_flag_icon_round.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
    ],
    'views': 1234,
    'authors': [
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'
    ],
    'sections': [
      'grid1',
      'slider',
      'pages'
    ],
    'slug': '/A/second-page',
    'category': 'A',
    'title': 'Second Page',
    'name': 'Second Page',
    'published': true
  },
  {
    'id': 2,
    'page': 'First Page',
    'status': 'published',
    'permissions': 'public',
    'languages': [
      'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png'
    ],
    'views': 1585,
    'authors': [
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'
    ],
    'sections': [
      'grid1'
    ],
    'slug': '/B/first-page',
    'category': 'B',
    'title': 'First Page',
    'name': 'First Page',
    'published': true
  },
  {
    'id': 3,
    'page': 'Second Page',
    'status': 'published',
    'permissions': 'public',
    'languages': [
      'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/512px-United-kingdom_flag_icon_round.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
    ],
    'views': 1234,
    'authors': [
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png'
    ],
    'sections': [
      'grid1',
      'slider',
      'pages'
    ],
    'slug': '/B/second-page',
    'category': 'b',
    'title': 'Second Page',
    'name': 'Second Page',
    'published': true
  }
]

export const Draggable: React.FC = () => {
  const tableProps: DraggableTableDataProps = {
    tableHeaderData,
    getTableColumnColor,
    getTableColumnType,
    getTableColumnIconType,
    disabledCategories: ['A'],
    initialPages,
    type: 'draggable',
    pagesPerFolder: 2,
    color: 'success'
  }

  return (
    <Table {...tableProps} />
  )
}

export const Sortable: React.FC = () => {
  const tableProps: SortableTableDataProps = {
    tableHeaderData,
    getTableColumnColor,
    getTableColumnType,
    getTableColumnIconType,
    initialPages,
    type: 'sortable',
    pagesPerFolder: 2,
    color: 'light'
  }

  return (
    <Table {...tableProps} />
  )
}
