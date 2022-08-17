import React, { useEffect, useState, createContext, FC, ReactNode } from 'react'

type ThemeContextType = {
  theme: string | null
  setTheme: React.Dispatch<React.SetStateAction<string | null>>
}

const ThemeContext = createContext({} as ThemeContextType)

type Props = {
  children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>('light')

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      console.info('通貨2')
      setTheme(localStorage.getItem('theme'))
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
