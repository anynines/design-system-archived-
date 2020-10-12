/* eslint-disable */
import React from 'react'

// I N T E R F A C E S
export interface FaviconProps {
  href: string
}

// C O M P O N E N T
export const Favicon: React.FC<FaviconProps> = ({ href }) => {
  const updateFavicon = (): void => {
    if (window.onload) {
      const faviconNode = document.getElementById('componentLibraryFavicon')

      if (faviconNode !== null) {
        faviconNode.setAttribute('href', href)
      } else {
        console.warn('`Favicon` component used without setting the props `useFavicon` to `true` in the Application component')
      }
    } else {
      window.onload = updateFavicon
    }
  }

  React.useEffect(() => {
    updateFavicon()
  }, [href])

  return (
    <></>
  )
}
