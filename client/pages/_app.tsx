import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/theme'
import { TopNav } from '../components/TopNav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TopNav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
