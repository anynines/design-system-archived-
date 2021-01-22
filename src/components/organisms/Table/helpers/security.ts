export const onInactivity = (timeoutInMs: number, callback: () => void): () => void => {
  let timeoutId: number

  const startTimer = (): void => {
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(callback, timeoutInMs)
  }

  const resetTimer = (): void => {
    window.clearTimeout(timeoutId)
    startTimer()
  }

  const setupTimers = (): void => {
    document.addEventListener('mousemove', resetTimer, false)
    document.addEventListener('mousedown', resetTimer, false)
    document.addEventListener('keypress', resetTimer, false)
    document.addEventListener('touchmove', resetTimer, false)

    startTimer()
  }

  setupTimers()

  return (): void => {
    // Unbind the event listener on clean up
    document.removeEventListener('mousemove', resetTimer)
    document.removeEventListener('mousedown', resetTimer)
    document.removeEventListener('keypress', resetTimer)
    document.removeEventListener('touchmove', resetTimer)
  }
}
