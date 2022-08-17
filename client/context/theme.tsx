import React, { useContext, useEffect, useState, createContext, FC, ReactNode } from 'react'

const ThemeContext = createContext({})

type Props = {
  children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>('light')

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
