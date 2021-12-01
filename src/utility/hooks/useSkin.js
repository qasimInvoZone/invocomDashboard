import { useState, useEffect } from 'react'
import themeConfig from '@configs/themeConfig'

export const useSkin = () => {
  const [skin, setSkin] = useState(() => {
    try {
      const item = window.localStorage.getItem('skin')
      return item ? JSON.parse(item) : themeConfig.layout.skin
    } catch (error) {

      return themeConfig.layout.skin
    }
  })

  const setValue = value => {
    try {

      const valueToStore = value instanceof Function ? value(skin) : value

      setSkin(valueToStore)
      window.localStorage.setItem('skin', JSON.stringify(valueToStore))
    } catch (error) {
    }
  }

  useEffect(() => {
    const element = window.document.body

    const classNames = {
      dark: 'dark-layout',
      bordered: 'bordered-layout',
      'semi-dark': 'semi-dark-layout'
    }

    element.classList.remove(...element.classList)

    if (skin !== 'light') {
      element.classList.add(classNames[skin])
    }
  }, [skin])

  return [skin, setValue]
}
