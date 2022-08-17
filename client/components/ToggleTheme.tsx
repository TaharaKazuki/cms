import { ThemeContext } from '../context/theme'
import { useContext } from 'react'
import Head from 'next/head'

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = (themeName: string) => {
    setTheme(themeName)
    localStorage.setItem('theme', themeName)
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${theme}.css`} />
      </Head>
      {theme === 'light' ? (
        <span onClick={() => changeTheme('dark')} style={{ fontSize: '24px', cursor: 'pointer' }}>
          🌓
        </span>
      ) : (
        <span onClick={() => changeTheme('light')} style={{ fontSize: '24px', cursor: 'pointer' }}>
          🌞
        </span>
      )}
    </>
  )
}
