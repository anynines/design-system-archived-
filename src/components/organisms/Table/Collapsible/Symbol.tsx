import React from 'react'

// I N T E R F A C E S
export type SymbolEntity = 'euro' | 'sum'
export interface SymbolProps {
  entity: SymbolEntity
}

const SYMBOLS: { [key in SymbolEntity]: string } = {
  euro: '€',
  sum: '∑'
}

// C O M P O N E N T
const Symbol: React.FC<SymbolProps> = (props) => {
  const { entity } = props

  return <>{SYMBOLS[entity]}</>
}

export default Symbol
