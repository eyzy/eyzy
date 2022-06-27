import { useState, useEffect } from 'react'

let wasKeyPressed: boolean

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', () => {
    wasKeyPressed = true
  })

  window.addEventListener('keyup', () => {
    wasKeyPressed = false
  })
})

export const useFocusRing = (id: string, autoFocus: boolean) => {
  const [isFocused, setFocused] = useState(!!autoFocus)
  const blurHandler = () => {
    setFocused(false)
  }

  const focusHandler = () => {
    if (wasKeyPressed) {
      setFocused(true)
    }
  }

  useEffect(() => {
    const domEl = document.getElementById(id)

    domEl?.addEventListener('focus', focusHandler)
    domEl?.addEventListener('blur', blurHandler)

    return () => {
      domEl?.removeEventListener('focus', focusHandler)
      domEl?.removeEventListener('blur', blurHandler)
    }
  }, [])

  return isFocused
}