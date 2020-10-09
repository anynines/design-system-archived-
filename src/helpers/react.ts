import React from 'react'

export const onClickOutsideHook = (
  ref: React.RefObject<HTMLDivElement> | null,
  callback: () => void
): void => {
  // Hook get from https://stackoverflow.com/a/42234988/8583669

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref?.current && !(ref.current.contains(event.target as Node))) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return (): void => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}
